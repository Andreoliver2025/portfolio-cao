/**
 * Configuração compartilhada de navegação — usada por Header, Footer e menu mobile.
 * Rotas seguem o site map da §3 do PRD.
 */
export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/sobre", label: "Sobre" },
  { href: "/cases", label: "Cases" },
  { href: "/servicos", label: "Serviços" },
  { href: "/conteudo", label: "Conteúdo" },
  { href: "/contato", label: "Contato" },
] as const;

/**
 * Alvo do CTA persistente de agendamento.
 * Placeholder na Story 1.3 — a integração real do Calendly entra na Story 1.4
 * (via NEXT_PUBLIC_CALENDLY_URL).
 */
export const CTA_SCHEDULE_HREF = "#agendar";
export const CTA_SCHEDULE_LABEL = "Agendar uma call";
