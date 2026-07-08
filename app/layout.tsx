import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { BottomNav } from "@/components/BottomNav";
import { site, serviceAreas } from "@/lib/site";

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
  description: `Remplacement de fenêtres de toit, stores Velux, entretien et dépannage dans le canton de Vaud (${serviceAreas.join(", ")}). Partenaire agréé Velux Expert, devis gratuit sous 48h.`,
  openGraph: {
    type: "website",
    locale: "fr_CH",
    siteName: site.shortName,
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: site.name,
  telephone: site.phoneHref.replace("tel:", ""),
  email: site.email,
  url: site.url,
  areaServed: serviceAreas.map((city) => ({ "@type": "City", name: city })),
  address: {
    "@type": "PostalAddress",
    addressRegion: "Vaud",
    addressCountry: "CH",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`h-full antialiased ${brand.variable}`}>
      <body className="flex min-h-full flex-col pb-16 md:pb-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingActions />
        <BottomNav />
      </body>
    </html>
  );
}
