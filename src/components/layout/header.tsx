"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import {
  NAV_LINKS,
  CTA_SCHEDULE_HREF,
  CTA_SCHEDULE_LABEL,
} from "@/components/layout/nav.config";
import { cn } from "@/lib/utils";

/**
 * Header — organismo do shell global (DESIGN-SYSTEM.md §6.3, Story 1.3).
 * Sticky no desktop com backdrop-blur; hambúrguer acessível no mobile via Radix Dialog
 * (focus-trap, ESC para fechar, ARIA). CTA persistente integrado no desktop.
 */
export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href) ?? false;

  return (
    <header className="sticky top-0 z-[100] border-b border-border bg-canvas/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1240px] items-center gap-md px-xl">
        <Link href="/" className="flex items-center gap-sm" aria-label="Portfólio CAO — Home">
          <span className="flex h-7 w-7 items-center justify-center rounded-sm bg-accent font-mono text-sm font-semibold text-on-accent shadow-[var(--shadow-glow-sm)]">
            C
          </span>
          <span className="hidden text-fg-strong sm:block">
            <span className="block text-sm font-semibold leading-none">CAO</span>
            <span className="label-mono">Estrategista de IA</span>
          </span>
        </Link>

        {/* Navegação desktop */}
        <nav
          className="ml-md hidden flex-1 items-center justify-center gap-lg md:flex"
          aria-label="Navegação principal"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm transition-colors hover:text-fg-strong",
                isActive(link.href) ? "text-accent" : "text-fg-muted",
              )}
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Espaçador no mobile (empurra controles à direita) */}
        <span className="flex-1 md:hidden" />

        <div className="flex items-center gap-sm">
          <ThemeToggle />

          {/* CTA persistente desktop */}
          <Button asChild className="hidden md:inline-flex" variant="primary" size="sm">
            <a href={CTA_SCHEDULE_HREF} data-cta="schedule-header">
              {CTA_SCHEDULE_LABEL}
            </a>
          </Button>

          {/* Hambúrguer mobile */}
          <Dialog.Root open={mobileOpen} onOpenChange={setMobileOpen}>
            <Dialog.Trigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                aria-label="Abrir menu de navegação"
              >
                <Menu className="h-5 w-5" aria-hidden="true" />
              </Button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-[200] bg-canvas/80 backdrop-blur-sm" />
              <Dialog.Content
                className="fixed inset-y-0 right-0 z-[201] flex w-[min(100%,320px)] flex-col border-l border-border bg-surface-panel p-xl shadow-[var(--shadow-elevated)] focus:outline-none"
                aria-describedby="mobile-menu-desc"
              >
                <div className="flex items-center justify-between">
                  <Dialog.Title className="label-mono text-fg-subtle">Menu</Dialog.Title>
                  <Dialog.Close asChild>
                    <Button variant="ghost" size="sm" aria-label="Fechar menu">
                      <X className="h-5 w-5" aria-hidden="true" />
                    </Button>
                  </Dialog.Close>
                </div>
                <Dialog.Description id="mobile-menu-desc" className="sr-only">
                  Navegação principal do portfólio.
                </Dialog.Description>

                <nav
                  className="mt-xl flex flex-col gap-xs"
                  aria-label="Navegação principal (mobile)"
                >
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "rounded-md px-md py-sm text-base transition-colors hover:bg-surface-hover hover:text-fg-strong",
                        isActive(link.href) ? "text-accent" : "text-fg",
                      )}
                      aria-current={isActive(link.href) ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                <Button
                  asChild
                  className="mt-auto"
                  variant="primary"
                  onClick={() => setMobileOpen(false)}
                >
                  <a href={CTA_SCHEDULE_HREF} data-cta="schedule-mobile-menu">
                    {CTA_SCHEDULE_LABEL}
                  </a>
                </Button>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
}
