import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { About } from "@/components/sections/about";
import { sobreContent } from "@/lib/content/sobre";

describe("About / Sobre (Story 1.5)", () => {
  it("renderiza posicionamento híbrido na lede (AC1)", () => {
    render(<About />);
    expect(screen.getByText(sobreContent.lede)).toBeInTheDocument();
  });

  it("comunica diferenciação para empresas e startups (AC2)", () => {
    render(<About />);
    expect(screen.getByRole("heading", { name: /empresas em transformação/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /founders early-stage/i })).toBeInTheDocument();
  });

  it("mostra placeholder/fallback de foto quando src é null (AC3)", () => {
    render(<About />);
    expect(screen.getByText(/foto profissional · em breve/i)).toBeInTheDocument();
  });

  it("inclui CTA de agendamento", () => {
    render(<About />);
    expect(screen.getByRole("link", { name: /agendar uma call/i })).toBeInTheDocument();
  });
});
