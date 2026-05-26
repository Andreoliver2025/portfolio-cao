"use client";

import { Moon, Sun } from "lucide-react";
import { useThemeStore } from "@/stores/theme-store";
import { Button } from "@/components/ui/button";

/**
 * ThemeToggle — molécula do design system (Seção 6.2 + 7.3).
 * Alterna dark/light persistindo a preferência (cao-theme em localStorage).
 * Default é dark; foco visível garantido pelo `:focus-visible` do base.
 */
export function ThemeToggle() {
  const theme = useThemeStore((s) => s.theme);
  const toggle = useThemeStore((s) => s.toggle);
  const isLight = theme === "light";

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggle}
      aria-label={isLight ? "Ativar tema escuro" : "Ativar tema claro"}
      aria-pressed={isLight}
      title={isLight ? "Ativar tema escuro" : "Ativar tema claro"}
    >
      {isLight ? (
        <Moon className="h-4 w-4" aria-hidden="true" />
      ) : (
        <Sun className="h-4 w-4" aria-hidden="true" />
      )}
    </Button>
  );
}
