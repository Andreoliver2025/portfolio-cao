import Image from "next/image";
import { sobreContent } from "@/lib/content/sobre";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Inline markdown bem leve: converte `**...**` em <strong>.
 * Mantemos só esse mínimo para não puxar uma toolchain de MDX só pro Sobre.
 * Quando posts e cases entrarem (Stories 2.x/4.2), aí sim entra MDX completo.
 */
function renderInlineBold(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="text-fg-strong">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

/**
 * Placeholder de foto — mantém a proporção e a presença visual mesmo sem arquivo.
 * Quando Carlos enviar a foto, basta preencher `sobreContent.foto.src`.
 */
function FotoPlaceholder() {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative aspect-[4/5] w-full overflow-hidden rounded-lg border border-border bg-surface-deep",
        "ring-hairline",
      )}
    >
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-md bg-accent font-mono text-3xl font-semibold text-on-accent shadow-[var(--shadow-glow)]">
          C
        </div>
      </div>
      <div className="absolute bottom-md left-md right-md text-center">
        <span className="label-mono">foto profissional · em breve</span>
      </div>
    </div>
  );
}

/**
 * About — seção/página Sobre (Story 1.5).
 * AC1: posicionamento AI-native híbrido.
 * AC2: diferenciação para empresas e startups.
 * AC3: foto com placeholder/fallback.
 * AC4: conteúdo de fonte editável (src/lib/content/sobre.ts).
 */
export function About() {
  return (
    <section aria-label="Sobre" className="relative overflow-hidden border-b border-border">
      <div className="mx-auto max-w-[1240px] px-xl py-4xl md:py-7xl">
        <div className="grid gap-4xl md:grid-cols-[1fr_minmax(280px,_360px)] md:items-start">
          <div>
            <span className="label-mono">{sobreContent.eyebrow}</span>

            <h1 className="mt-md text-[clamp(28px,3.5vw,52px)] font-semibold leading-tight tracking-[-0.02em] text-balance text-fg-strong">
              {sobreContent.headline.primary}{" "}
              <span className="text-accent text-glow">{sobreContent.headline.accent}</span>
            </h1>

            <p className="mt-lg max-w-[60ch] text-lg text-fg-muted">{sobreContent.lede}</p>

            <div className="mt-2xl max-w-[62ch] space-y-lg text-fg">
              {sobreContent.body.map((block, i) => (
                <p key={i}>{renderInlineBold(block.text)}</p>
              ))}
            </div>

            <div className="mt-2xl grid gap-lg md:grid-cols-2">
              {sobreContent.audiences.map((aud) => (
                <article
                  key={aud.title}
                  className="rounded-lg border border-border bg-surface p-lg ring-hairline"
                >
                  <h2 className="text-base font-semibold text-fg-strong">{aud.title}</h2>
                  <p className="mt-sm text-sm text-fg-muted">{renderInlineBold(aud.body)}</p>
                </article>
              ))}
            </div>

            <p className="mt-2xl max-w-[64ch] text-fg">{renderInlineBold(sobreContent.promise)}</p>

            {/* Trajetória factual — só Carlos sabe; aviso suave enquanto placeholder. */}
            <section
              aria-label="Trajetória"
              className="mt-3xl rounded-lg border border-dashed border-border-strong bg-surface-deep p-lg"
            >
              <span className="label-mono text-fg-subtle">Trajetória</span>
              <p className="mt-sm text-sm text-fg-muted">
                {sobreContent.trajetoria.placeholder ? (
                  <em className="not-italic text-fg-faint">
                    Carlos atualizará esta sessão com a trajetória pessoal em breve. Por enquanto,
                    a prova vive nos{" "}
                    <a className="text-accent hover:underline" href="/cases">
                      cases
                    </a>
                    .
                  </em>
                ) : (
                  sobreContent.trajetoria.text
                )}
              </p>
            </section>

            <div className="mt-3xl space-y-lg">
              <p className="max-w-[64ch] text-fg">{sobreContent.cta.text}</p>
              <Button asChild variant="primary" size="lg">
                <a href={sobreContent.cta.href} data-cta="schedule-sobre">
                  {sobreContent.cta.label}
                </a>
              </Button>
            </div>
          </div>

          {/* Foto */}
          <aside className="md:sticky md:top-24" aria-label="Foto profissional">
            {sobreContent.foto.src ? (
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border border-border bg-surface-deep">
                <Image
                  src={sobreContent.foto.src}
                  alt={sobreContent.foto.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  className="object-cover"
                  priority
                />
              </div>
            ) : (
              <FotoPlaceholder />
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}
