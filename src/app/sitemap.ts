import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.ikhwainvestments.com";
  const locales = ["ar", "en", "fr"];

  const routes = ["", "/CompanyFormation", "/privacy", "/terms"];

  const sitemap: MetadataRoute.Sitemap = [];

  // Add routes for each locale
  locales.forEach((locale) => {
    routes.forEach((route) => {
      sitemap.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: route === "" ? 1 : 0.8,
        alternates: {
          languages: {
            ar: `${baseUrl}/ar${route}`,
            en: `${baseUrl}/en${route}`,
            fr: `${baseUrl}/fr${route}`,
          },
        },
      });
    });
  });

  return sitemap;
}
