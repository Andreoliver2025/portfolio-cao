import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Design System — Portfólio CAO (preview)",
  description: "Preview ao vivo dos tokens, tipografia e componentes do design system.",
  robots: { index: false, follow: false },
};

/**
 * Rota de demonstração — Story 1.2 bônus.
 * Mostra os tokens e componentes do design system aplicados ao site
 * antes da Home (Story 1.4) existir. Não indexada (robots: noindex).
 */

const surfaces = [
  { name: "canvas", cls: "bg-canvas", hint: "fundo do body" },
  { name: "surface-deep", cls: "bg-surface-deep", hint: "inputs / poços" },
  { name: "surface", cls: "bg-surface", hint: "card padrão" },
  { name: "surface-panel", cls: "bg-surface-panel", hint: "painel / modal" },
  { name: "surface-console", cls: "bg-surface-console", hint: "blocos cockpit" },
  { name: "surface-overlay", cls: "bg-surface-overlay", hint: "dropdown" },
  { name: "surface-olive", cls: "bg-surface-olive", hint: "selo oliva" },
] as const;

const accents = [
  { name: "accent", cls: "bg-accent", hint: "CTA · impacto · foco" },
  { name: "accent-quiet", cls: "bg-accent-quiet", hint: "fundo de chip" },
  { name: "accent-line", cls: "bg-accent-line", hint: "borda de acento" },
] as const;

const semantics = [
  { name: "info", cls: "bg-info", hint: "filtro Empresas / links" },
  { name: "success", cls: "bg-success", hint: "form enviado" },
  { name: "warning", cls: "bg-warning", hint: "atenção" },
  { name: "flare", cls: "bg-flare", hint: "destaque quente" },
  { name: "error", cls: "bg-error", hint: "erro / validação" },
] as const;

export default function DesignPage() {
  return (
    <main className="min-h-full bg-canvas text-fg">
      <div className="mx-auto max-w-[1240px] space-y-5xl px-xl py-3xl">
        <header>
          <span className="label-mono">preview ao vivo · /design</span>
          <h1 className="mt-xs text-2xl font-semibold tracking-[-0.02em] text-fg-strong">
            CAO Design System
          </h1>
        </header>
        {/* Hero mini */}
        <section className="relative overflow-hidden rounded-lg border border-border bg-grid p-4xl">
          <span className="label-mono">prova de identidade</span>
          <h1 className="mt-md text-[clamp(28px,4vw,52px)] font-semibold leading-tight tracking-[-0.02em] text-balance text-fg-strong">
            Estratégia <span className="text-accent text-glow">+</span> execução de IA, em PT-BR.
          </h1>
          <p className="mt-md max-w-[60ch] text-lg text-fg-muted">
            Carlos André Oliveira — estrategista híbrido: aconselha e constrói.
          </p>
          <div className="mt-2xl flex flex-wrap items-baseline gap-2xl">
            <div>
              <div className="text-[clamp(40px,6vw,68px)] font-semibold leading-none tracking-[-0.02em] text-accent text-glow">
                -96%
              </div>
              <div className="label-mono mt-xs">tempo de atendimento</div>
            </div>
            <div className="flex flex-wrap gap-md">
              <Button variant="primary" size="lg">
                Agendar uma call
              </Button>
              <Button variant="secondary" size="lg">
                Ver cases
              </Button>
            </div>
          </div>
        </section>

        {/* Cores */}
        <section>
          <span className="label-mono">2 · cores</span>
          <h2 className="mt-sm text-2xl font-semibold tracking-[-0.02em] text-fg-strong">
            Superfícies
          </h2>
          <div className="mt-lg grid grid-cols-2 gap-md sm:grid-cols-4 lg:grid-cols-7">
            {surfaces.map((s) => (
              <div key={s.name} className="space-y-xs">
                <div className={`h-16 rounded-md border border-border ${s.cls}`} />
                <div className="font-mono text-xs text-fg-strong">{s.name}</div>
                <div className="text-xs text-fg-subtle">{s.hint}</div>
              </div>
            ))}
          </div>

          <h2 className="mt-2xl text-2xl font-semibold tracking-[-0.02em] text-fg-strong">
            Acento — magenta elétrico
          </h2>
          <div className="mt-lg grid grid-cols-3 gap-md">
            {accents.map((s) => (
              <div key={s.name} className="space-y-xs">
                <div className={`h-16 rounded-md border border-border ${s.cls}`} />
                <div className="font-mono text-xs text-fg-strong">{s.name}</div>
                <div className="text-xs text-fg-subtle">{s.hint}</div>
              </div>
            ))}
          </div>

          <h2 className="mt-2xl text-2xl font-semibold tracking-[-0.02em] text-fg-strong">
            Semânticas funcionais
          </h2>
          <div className="mt-lg grid grid-cols-2 gap-md sm:grid-cols-5">
            {semantics.map((s) => (
              <div key={s.name} className="space-y-xs">
                <div className={`h-16 rounded-md border border-border ${s.cls}`} />
                <div className="font-mono text-xs text-fg-strong">{s.name}</div>
                <div className="text-xs text-fg-subtle">{s.hint}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Tipografia */}
        <section>
          <span className="label-mono">3 · tipografia</span>
          <h2 className="mt-sm text-2xl font-semibold tracking-[-0.02em] text-fg-strong">
            Escala (Geist)
          </h2>
          <div className="mt-lg space-y-md">
            <div className="flex flex-wrap items-baseline justify-between gap-md rounded-lg border border-border bg-surface p-lg">
              <span className="text-[clamp(36px,4.3vw,62px)] font-semibold leading-tight tracking-[-0.02em] text-fg-strong">
                Hero headline
              </span>
              <span className="label-mono">display-xl · 600 · clamp(36→62)</span>
            </div>
            <div className="flex flex-wrap items-baseline justify-between gap-md rounded-lg border border-border bg-surface p-lg">
              <span className="text-[clamp(28px,2.8vw,40px)] font-semibold leading-tight tracking-[-0.02em] text-fg-strong">
                Título de seção
              </span>
              <span className="label-mono">display-lg · 600 · clamp(28→40)</span>
            </div>
            <div className="flex flex-wrap items-baseline justify-between gap-md rounded-lg border border-border bg-surface p-lg">
              <span className="text-base">
                Corpo (15px / line-height 1.5). Leitura confortável para o público corporativo.
              </span>
              <span className="label-mono">text-base · 400</span>
            </div>
            <div className="flex flex-wrap items-baseline justify-between gap-md rounded-lg border border-border bg-surface p-lg">
              <span className="label-mono text-accent">Eyebrow técnico</span>
              <span className="label-mono">mono-sm · 500 · uppercase</span>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section>
          <span className="label-mono">6.1 · átomos</span>
          <h2 className="mt-sm text-2xl font-semibold tracking-[-0.02em] text-fg-strong">Button</h2>
          <div className="mt-lg flex flex-wrap items-center gap-md rounded-lg border border-border bg-surface p-xl">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button disabled>Disabled</Button>
          </div>
          <div className="mt-md flex flex-wrap items-center gap-md rounded-lg border border-border bg-surface p-xl">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </section>

        {/* Mocks */}
        <section>
          <span className="label-mono">6.2 · moléculas (mock)</span>
          <h2 className="mt-sm text-2xl font-semibold tracking-[-0.02em] text-fg-strong">
            Cards
          </h2>
          <div className="mt-lg grid gap-md md:grid-cols-3">
            <article className="group rounded-lg border border-border bg-surface p-xl transition hover:-translate-y-0.5 hover:border-accent-line hover:shadow-[var(--shadow-card)]">
              <div className="label-mono">Fintech · Empresa</div>
              <h3 className="mt-sm text-xl font-semibold text-fg-strong">
                Atendimento automatizado com IA
              </h3>
              <div className="mt-lg">
                <div className="text-4xl font-semibold leading-none tracking-[-0.02em] text-accent text-glow">
                  -96%
                </div>
                <div className="label-mono mt-xs">no tempo de resposta</div>
              </div>
            </article>

            <article className="rounded-lg border border-accent-line bg-surface p-xl ring-hairline">
              <span className="label-mono inline-flex rounded-sm border border-accent-line bg-accent-quiet px-sm py-2xs text-accent">
                Sprint
              </span>
              <h3 className="mt-sm text-xl font-semibold text-fg-strong">Sprint de IA</h3>
              <ul className="mt-md space-y-xs text-sm text-fg-muted">
                <li>· Prova de conceito em 2-4 semanas</li>
                <li>· 1 caso de uso priorizado</li>
                <li>· Roadmap de escala</li>
              </ul>
              <Button className="mt-lg w-full" variant="primary">
                Agendar
              </Button>
            </article>

            <article className="rounded-lg border border-border bg-surface p-xl">
              <p className="text-fg-strong">
                &ldquo;Saímos de planilha para um agente em produção em três semanas.&rdquo;
              </p>
              <p className="label-mono mt-md">— uma fintech Série A (anonimizado)</p>
            </article>
          </div>
        </section>

        <footer className="border-t border-border pb-3xl pt-2xl text-sm text-fg-subtle">
          Rota de demonstração ao vivo (não indexada). As páginas finais — Home, Sobre, Cases,
          Serviços — chegam nas Stories 1.3 → 1.4 → 2.x → 3.x.
        </footer>
      </div>
    </main>
  );
}
