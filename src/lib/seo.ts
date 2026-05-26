import { env } from "@/lib/env";

/**
 * SEO/GEO helpers (Story 1.6).
 * - `getSiteUrl()` retorna URL pública (env-tipado).
 * - `personJsonLd()` gera o JSON-LD Person (Schema.org).
 * - `professionalServiceJsonLd()` será expandido na Story 4.3 (consolidação final).
 */
export function getSiteUrl(): string {
  return env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
}

export function personJsonLd(): Record<string, unknown> {
  const url = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Carlos André Oliveira",
    alternateName: "CAO",
    url,
    jobTitle: "Estrategista de IA",
    description:
      "Estrategista de IA com prática em construção. Aconselha e constrói soluções de IA para empresas em transformação e startups early-stage, em PT-BR, com ancoragem em resultado mensurável.",
    knowsAbout: [
      "Inteligência Artificial Aplicada",
      "LLMs (Modelos de Linguagem)",
      "Estratégia de IA",
      "Arquitetura de Soluções de IA",
      "Transformação Digital com IA",
      "PoC de IA",
      "CAIO Fracionário",
    ],
    knowsLanguage: ["pt-BR", "en"],
    nationality: "BR",
    areaServed: { "@type": "Country", name: "Brasil" },
    sameAs: [
      // a preencher com LinkedIn quando confirmado
    ],
  };
}

export function professionalServiceJsonLd(): Record<string, unknown> {
  const url = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Carlos André Oliveira — Estrategista de IA",
    url,
    serviceType: "Consultoria e construção de soluções de IA",
    areaServed: { "@type": "Country", name: "Brasil" },
    priceRange: "BRL (a combinar)",
    provider: {
      "@type": "Person",
      name: "Carlos André Oliveira",
    },
    description:
      "Consultoria estratégica e implementação de IA para empresas e startups. Pacotes: Assessment, Sprint e CAIO Fracionário.",
  };
}

/**
 * Renderiza um objeto JSON-LD como `<script type="application/ld+json">`.
 * Uso em Server Components: `<JsonLd data={personJsonLd()} />`.
 */
export function jsonLdScriptProps(data: Record<string, unknown>) {
  return {
    type: "application/ld+json" as const,
    dangerouslySetInnerHTML: { __html: JSON.stringify(data) },
  };
}
