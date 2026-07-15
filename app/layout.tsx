import type { Metadata } from "next";
import { Fraunces, Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BottomNav } from "@/components/BottomNav";
import { site, serviceAreas } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";

// Same geometric sans family as the client's existing logo ("BATI" / "FENÊTRE DE TOIT"),
// used for UI, buttons and body copy.
const brand = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-brand",
});

// Paired display serif for headlines only (globals.css scopes it to h1/h2) — the
// contrast against the geometric sans is what reads as a deliberate type system
// instead of "one Google Font for everything".
const display = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} - ${site.tagline} en Suisse`,
    template: `%s - ${site.shortName}`,
  },
  description: `Installateur Velux agréé à ${site.address.city} et dans tout le canton de Vaud : fenêtres de toit, verrières, stores et domotique. Devis gratuit sous 48h.`,
  alternates: {
    canonical: "/",
  },
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
  image: `${site.url}/opengraph-image`,
  telephone: site.phoneHref.replace("tel:", ""),
  email: site.email,
  url: site.url,
  areaServed: serviceAreas.map((city) => ({ "@type": "City", name: city })),
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    postalCode: site.address.postalCode,
    addressLocality: site.address.city,
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
    <html lang="fr" className={`h-full antialiased ${brand.variable} ${display.variable}`}>
      <body className="flex min-h-full flex-col pb-16 md:pb-0">
        <JsonLd data={localBusinessJsonLd} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <BottomNav />
      </body>
    </html>
  );
}
