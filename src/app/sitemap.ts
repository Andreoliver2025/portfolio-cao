import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/seo";

/**
 * sitemap.xml (Story 1.6 AC2).
 * Story 4.3 expandirá com rotas dinâmicas (cases/* e posts/*).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const now = new Date();

  const staticRoutes: Array<{ path: string; priority: number }> = [
    { path: "/", priority: 1.0 },
    { path: "/sobre", priority: 0.9 },
    { path: "/servicos", priority: 0.9 },
    { path: "/cases", priority: 0.8 },
    { path: "/contato", priority: 0.7 },
    { path: "/conteudo", priority: 0.6 },
    { path: "/privacidade", priority: 0.3 },
  ];

  return staticRoutes.map(({ path, priority }) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority,
  }));
}
