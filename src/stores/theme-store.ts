"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Theme = "dark" | "light";

interface ThemeState {
  theme: Theme;
  /** Alterna entre `dark` e `light` e sincroniza a classe `.light` no `<html>`. */
  toggle: () => void;
  /** Define explicitamente o tema e sincroniza a classe `.light` no `<html>`. */
  setTheme: (theme: Theme) => void;
}

/**
 * Theme store — DESIGN-SYSTEM.md Seção 7.3.
 * Default `dark`. Persistido em `localStorage` sob a chave `cao-theme`
 * (lida por um script inline em `<head>` para evitar flash de tema).
 */
export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: "dark",
      toggle: () => {
        const next: Theme = get().theme === "dark" ? "light" : "dark";
        if (typeof document !== "undefined") {
          document.documentElement.classList.toggle("light", next === "light");
        }
        set({ theme: next });
      },
      setTheme: (theme) => {
        if (typeof document !== "undefined") {
          document.documentElement.classList.toggle("light", theme === "light");
        }
        set({ theme });
      },
    }),
    { name: "cao-theme" },
  ),
);
