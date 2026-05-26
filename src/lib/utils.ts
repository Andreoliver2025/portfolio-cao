import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * `cn()` — utilitário padrão do shadcn/ui para compor classes Tailwind sem conflito.
 * Combina `clsx` (resolução condicional) com `tailwind-merge` (dedup de utilities).
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
