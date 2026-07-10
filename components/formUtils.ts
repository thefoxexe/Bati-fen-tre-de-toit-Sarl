// Netlify Forms expects a classic urlencoded POST to "/" with a "form-name"
// field matching the form's `name` attribute — see DevisForm.tsx / GeneralContactForm.tsx
// and public/forms.html for the static replicas Netlify's build-time scan needs
// to register each form (both pages are rendered dynamically, so the real forms
// aren't present in the static HTML output Netlify scans at deploy time).
export function encodeForNetlify(data: Record<string, unknown>) {
  return Object.entries(data)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value ?? ""))}`)
    .join("&");
}
