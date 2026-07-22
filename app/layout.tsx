import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BottomNav } from "@/components/BottomNav";
import { RouteLoader } from "@/components/RouteLoader";
import { site, serviceAreas } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";

// Same geometric sans family as the client's existing logo ("BATI" / "FENÊTRE DE TOIT"),
// used everywhere, including headlines: one confident rounded sans rather than
// a serif/sans pairing, closer to the reference the client pointed to.
const brand = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-brand",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} - ${site.tagline} en Suisse`,
    template: `%s - ${site.shortName}`,
  },
  description: `Installateur Velux agréé à ${site.address.city} et dans tout le canton de Vaud : fenêtres de toit, verrières, stores et domotique. Devis gratuit.`,
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
    <html lang="fr" className={`h-full antialiased ${brand.variable}`}>
      <body className="flex min-h-full flex-col pb-16 lg:pb-0">
        <JsonLd data={localBusinessJsonLd} />
        <RouteLoader />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <BottomNav />
      </body>
    </html>
  );
}
