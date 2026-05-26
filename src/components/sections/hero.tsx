import { heroContent } from "@/lib/content/hero";
import { HeroCTA } from "@/components/sections/hero-cta";

/**
 * Hero — organismo conversor da Home (Story 1.4, DESIGN-SYSTEM.md §6.3).
 * Above-the-fold com hierarquia estrita: 1 headline + 1 ImpactNumber + 1 CTA.
 * Server component (estático para LCP < 3s — NFR1).
 */
export function Hero() {
  return (
    <section
      aria-label="Apresentação"
      className="relative overflow-hidden border-b border-border bg-grid"
    >
      <div className="mx-auto max-w-[1240px] px-xl py-4xl md:py-7xl">
        <span className="label-mono">{heroContent.eyebrow}</span>

        <h1 className="mt-md text-[clamp(36px,4.3vw,62px)] font-semibold leading-tight tracking-[-0.02em] text-balance text-fg-strong">
          {heroContent.headline.primary}{" "}
          <span className="text-accent text-glow">{heroContent.headline.accent}</span>
        </h1>

        <p className="mt-md max-w-[62ch] text-lg text-fg-muted">{heroContent.lede}</p>

        <div className="mt-2xl flex flex-wrap items-baseline gap-2xl">
          <div>
            <div className="text-[clamp(40px,6vw,68px)] font-semibold leading-none tracking-[-0.02em] text-accent text-glow">
              {heroContent.impact.value}
            </div>
            <div className="label-mono mt-xs">{heroContent.impact.caption}</div>
          </div>
          <HeroCTA />
        </div>
      </div>
    </section>
  );
}
