import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { site } from "@/lib/site";

// Same geometric sans family as the client's existing logo ("BATI" / "FENÊTRE DE TOIT"),
// used across weights instead of pairing in a separate display face.
const brand = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-brand",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline} en Suisse`,
    template: `%s — ${site.shortName}`,
  },
  description:
    "Installation, remplacement et dépannage de fenêtres de toit. Devis gratuit sous 48h.",
  openGraph: {
    type: "website",
    locale: "fr_CH",
    siteName: site.shortName,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`h-full antialiased ${brand.variable}`}>
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
