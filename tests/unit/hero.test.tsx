import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Hero } from "@/components/sections/hero";
import { heroContent } from "@/lib/content/hero";

describe("Hero (Story 1.4)", () => {
  it("renderiza EXATAMENTE 1 h1, 1 ImpactNumber e 1 CTA (AC1)", () => {
    render(<Hero />);
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
    expect(screen.getByText(heroContent.impact.value)).toBeInTheDocument();
    expect(
      screen.getAllByRole("link", { name: new RegExp(heroContent.cta.label, "i") }),
    ).toHaveLength(1);
  });

  it("comunica posicionamento híbrido — quem é + a quem serve + resultado (AC3)", () => {
    render(<Hero />);
    expect(screen.getByText(heroContent.lede)).toBeInTheDocument();
    expect(screen.getByText(heroContent.eyebrow)).toBeInTheDocument();
    expect(screen.getByText(heroContent.impact.caption)).toBeInTheDocument();
  });
});
