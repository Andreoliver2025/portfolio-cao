"use client";

import * as React from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "cao-lgpd-ack";

/** Subscribe no-op: o storage da chave LGPD não muda externamente nesta sessão. */
const subscribe = () => () => {};

const getSnapshot = (): string | null => {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
};

/** No SSR não temos acesso à storage — assume ack ausente (banner aparece após hidratação). */
const getServerSnapshot = (): string | null => null;

/**
 * LgpdNotice — banner de aviso LGPD (Story 1.6 AC4).
 * Analytics deste site é cookieless (Vercel Analytics), então este NÃO é um
 * "consent gate" — é um aviso de transparência conforme a LGPD: usuário toma
 * ciência do tratamento e do link da Política. Persiste dismissal por usuário.
 *
 * Usa `useSyncExternalStore` para ler localStorage (forma idiomática React 18+
 * de sincronizar com fontes externas, sem o anti-pattern de setState em useEffect).
 */
export function LgpdNotice() {
  const ack = React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [dismissed, setDismissed] = React.useState(false);

  const visible = !ack && !dismissed;

  const dismiss = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* noop */
    }
    setDismissed(true);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Aviso de privacidade (LGPD)"
      aria-describedby="lgpd-notice-desc"
      className="fixed bottom-md left-md right-md z-[80] mx-auto max-w-[640px] rounded-lg border border-border bg-surface-panel p-lg shadow-[var(--shadow-elevated)] md:bottom-lg md:left-auto md:right-lg md:p-xl"
    >
      <div className="flex items-start gap-md">
        <div className="flex-1">
          <p className="label-mono text-fg-subtle">privacidade</p>
          <p id="lgpd-notice-desc" className="mt-xs text-sm text-fg">
            Este site usa <strong className="text-fg-strong">analytics sem cookies</strong> para
            entender o que é útil — sem identificar você. Detalhes em{" "}
            <Link href="/privacidade" className="text-accent hover:underline">
              Política de Privacidade
            </Link>
            .
          </p>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={dismiss}
          aria-label="Fechar aviso de privacidade"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </Button>
      </div>
      <div className="mt-md flex justify-end">
        <Button variant="primary" size="sm" onClick={dismiss}>
          Entendi
        </Button>
      </div>
    </div>
  );
}
