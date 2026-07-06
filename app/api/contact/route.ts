import { site } from "@/lib/site";

type ContactPayload = {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  message?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Requête invalide." }, { status: 400 });
  }

  const name = payload.name?.trim();
  const phone = payload.phone?.trim();
  const email = payload.email?.trim();
  const message = payload.message?.trim();

  if (!name || !phone || !email || !message) {
    return Response.json({ error: "Merci de remplir tous les champs obligatoires." }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return Response.json({ error: "Adresse e-mail invalide." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toAddress = process.env.CONTACT_TO_EMAIL || site.email;

  if (!apiKey) {
    // No email provider configured yet: log server-side so the request isn't silently lost
    // during development, but let the caller know delivery isn't wired up.
    console.warn(
      "[contact] RESEND_API_KEY is not set — lead was received but not emailed.",
      { name, phone, email, service: payload.service, message }
    );
    return Response.json(
      { error: "L'envoi d'e-mail n'est pas encore configuré sur ce site (RESEND_API_KEY manquant)." },
      { status: 503 }
    );
  }

  const emailBody = [
    `Nouvelle demande depuis le site ${site.name}`,
    "",
    `Nom : ${name}`,
    `Téléphone : ${phone}`,
    `E-mail : ${email}`,
    payload.service ? `Service : ${payload.service}` : null,
    "",
    "Message :",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `Site ${site.name} <onboarding@resend.dev>`,
      to: toAddress,
      reply_to: email,
      subject: `Nouvelle demande de devis — ${name}`,
      text: emailBody,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    console.error("[contact] Resend API error", res.status, detail);
    return Response.json({ error: "L'envoi de l'e-mail a échoué. Merci de réessayer." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
