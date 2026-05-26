/**
 * Camada de eventos de conversão (NFR10).
 *
 * Story 1.4: skeleton com no-op + console.debug em desenvolvimento.
 * Story 1.6: integrar provider real (Plausible cookieless preferido — aderência LGPD;
 * alternativa Vercel Analytics). Substituir o corpo do `trackEvent` sem mexer nos
 * callsites espalhados pelos componentes.
 */

export type ConversionEvent =
  | "cta_schedule_click"
  | "contact_form_submit"
  | "newsletter_signup"
  | "ai_demo_use"
  | "case_filter_change"
  | "case_card_click"
  | "service_card_click";

export type AnalyticsPayload = Record<string, string | number | boolean | undefined>;

export function trackEvent(name: ConversionEvent, payload?: AnalyticsPayload) {
  if (typeof window === "undefined") return; // safety em RSC
  if (process.env.NODE_ENV !== "production") {
    console.debug("[analytics]", name, payload ?? {});
    return;
  }
  // Story 1.6: integração real, ex.:
  //   window.plausible?.(name, { props: payload });
  //   ou Vercel Analytics: import { track } from "@vercel/analytics";
}
