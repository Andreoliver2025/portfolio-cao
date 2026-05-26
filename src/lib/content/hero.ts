/**
 * Conteúdo editorial do Hero (Story 1.4).
 * Fonte editável em código — Story 1.5 (Sobre) e adiante usam MDX/config equivalente.
 *
 * Princípios (PRD §3, design system §6.3):
 *  - 1 headline + 1 ImpactNumber + 1 CTA, sem elementos competindo.
 *  - Comunica "quem é + a quem serve + qual resultado entrega" (AC3).
 *  - Posicionamento híbrido: estratégia + execução, PT-BR.
 *  - Resultado quantificado (anonimização FR14).
 */
export const heroContent = {
  eyebrow: "Estrategista de IA · PT-BR",
  headline: {
    primary: "Estratégia que vira execução.",
    accent: "IA que vira resultado.",
  },
  lede: "Carlos André Oliveira — aconselho e construo IA para empresas em transformação e startups early-stage. Aceleração ancorada em resultado mensurável.",
  impact: {
    value: "-96%",
    caption: "tempo de atendimento — uma fintech Série A",
  },
  cta: {
    label: "Agendar uma call",
    /** Placeholder até Calendly real (NEXT_PUBLIC_CALENDLY_URL) ser provido pelo cliente. */
    href: "#agendar",
  },
} as const;
