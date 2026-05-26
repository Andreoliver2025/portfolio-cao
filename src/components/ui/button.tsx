import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Button — átomo do design system CAO (DESIGN-SYSTEM.md Seção 6.1).
 * radius `md`, paddings 11×18 (md), uso dos tokens semânticos
 * (`bg-accent`, `text-on-accent`, `glow-sm`/`glow`, `surface-hover`).
 *
 * Variantes:
 *  - primary    → conversor (CTA): bg-accent + glow + hover -1px
 *  - secondary  → ação alternativa: borda + hover accent-quiet
 *  - ghost      → ação leve: hover surface-hover
 *  - destructive→ remoção/erro
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-[color,background-color,border-color,box-shadow,transform] duration-200 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-on-accent shadow-[var(--shadow-glow-sm)] hover:shadow-[var(--shadow-glow)] hover:-translate-y-px",
        secondary:
          "border border-border-strong bg-transparent text-fg hover:bg-accent-quiet hover:border-accent-line",
        ghost: "bg-transparent text-fg-muted hover:bg-surface-hover hover:text-fg",
        destructive: "bg-error text-fg-strong hover:opacity-90",
      },
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-10 px-[18px] text-sm",
        lg: "h-12 px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />
    );
  },
);
Button.displayName = "Button";

export { buttonVariants };
