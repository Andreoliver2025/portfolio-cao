import { Hero } from "@/components/sections/hero";

/**
 * Home — Story 1.4 entrega o Hero.
 * Sobre (Story 1.5), Cases em destaque (Story 2.x) e Demo de IA (Story 4.1)
 * serão compostos aqui nas próximas iterações.
 */
export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Placeholder do agendamento — até a URL do Calendly entrar (Story 1.4/1.6). */}
      <section
        id="agendar"
        aria-label="Agendamento"
        className="mx-auto max-w-[1240px] px-xl py-5xl"
      >
        <span className="label-mono text-accent">próxima etapa</span>
        <h2 className="mt-sm text-display-md font-semibold tracking-[-0.02em] text-fg-strong">
          Agendamento integrado em breve
        </h2>
        <p className="mt-md max-w-[60ch] text-fg-muted">
          O widget do Calendly entra assim que a URL definitiva for provisionada. Enquanto isso,
          fale direto:{" "}
          <a className="text-accent hover:underline" href="mailto:contato@carlosandre.ai">
            contato@carlosandre.ai
          </a>
          .
        </p>
      </section>
    </>
  );
}
