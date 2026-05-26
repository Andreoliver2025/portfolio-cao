import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/seo";

/**
 * robots.txt (Story 1.6 AC2).
 * Permite todos os crawlers em rotas públicas. /design é demo (já tem robots:noindex no head).
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/design"],
      },
    ],
    sitemap: `${getSiteUrl()}/sitemap.xml`,
  };
}
