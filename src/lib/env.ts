/**
 * Acesso tipado a variáveis de ambiente.
 * Coding standard: NUNCA usar `process.env` diretamente fora deste arquivo.
 * A validação com Zod será adicionada quando as integrações (Resend/Anthropic/Upstash)
 * forem implementadas (stories 3.2 / 3.3 / 4.1).
 */
export const env = {
  /** URL pública do site (usada em metadata, sitemap e JSON-LD). */
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;
