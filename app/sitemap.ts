import type { MetadataRoute } from "next";
import { services, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/a-propos",
    "/services",
    ...services.map((service) => `/services/${service.slug}`),
    "/portfolio",
    "/faq",
    "/devis",
    "/contact",
    "/mentions-legales",
    "/politique-de-confidentialite",
  ];

  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
  }));
}
