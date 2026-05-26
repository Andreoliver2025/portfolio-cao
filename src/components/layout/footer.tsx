import Link from "next/link";
import { NAV_LINKS } from "@/components/layout/nav.config";

/**
 * Footer — organismo do shell global (Story 1.3 AC4).
 * Navegação + contato + Política de Privacidade (página entra na Story 1.6).
 * Server component (estático).
 */
export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-canvas">
      <div className="mx-auto max-w-[1240px] space-y-2xl px-xl py-3xl">
        <div className="grid gap-2xl md:grid-cols-3">
          <div>
            <Link
              href="/"
              className="flex items-center gap-sm"
              aria-label="Portfólio CAO — Home"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-sm bg-accent font-mono text-sm font-semibold text-on-accent shadow-[var(--shadow-glow-sm)]">
                C
              </span>
              <span className="font-semibold text-fg-strong">CAO</span>
            </Link>
            <p className="mt-sm max-w-[40ch] text-sm text-fg-muted">
              Carlos André Oliveira — estrategista híbrido de IA. Estratégia + execução para
              empresas e startups.
            </p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <h3 className="label-mono text-fg-subtle">Navegar</h3>
            <ul className="mt-sm space-y-xs text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-fg-muted hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="label-mono text-fg-subtle">Contato</h3>
            <ul className="mt-sm space-y-xs text-sm">
              <li>
                <a
                  href="mailto:contato@carlosandre.ai"
                  className="text-fg-muted hover:text-accent"
                >
                  contato@carlosandre.ai
                </a>
              </li>
              <li>
                <Link href="/privacidade" className="text-fg-muted hover:text-accent">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-sm border-t border-border pt-lg sm:flex-row sm:items-center sm:justify-between">
          <p className="label-mono text-fg-subtle">© {year} Carlos André Oliveira</p>
          <p className="label-mono text-fg-subtle">portfolio-cao · em construção</p>
        </div>
      </div>
    </footer>
  );
}
