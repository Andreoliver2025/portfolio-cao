"use client";

import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";
import { heroContent } from "@/lib/content/hero";

/**
 * HeroCTA — botão de conversão primário do Hero (Story 1.4 AC2 + AC5).
 * `onClick` registra o evento `cta_schedule_click` no analytics.
 * Placeholder até `NEXT_PUBLIC_CALENDLY_URL` ser provida — então este componente
 * abrirá o widget do Calendly em vez de scrollar até #agendar.
 */
export function HeroCTA() {
  const handleClick = () => {
    trackEvent("cta_schedule_click", { location: "hero" });
  };

  return (
    <Button asChild variant="primary" size="lg" onClick={handleClick}>
      <a href={heroContent.cta.href} data-cta="schedule-hero">
        {heroContent.cta.label}
      </a>
    </Button>
  );
}
