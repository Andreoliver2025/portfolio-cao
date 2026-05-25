import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import HealthPage from "@/app/health/page";

describe("HealthPage (rota canário — Story 1.1)", () => {
  it("renderiza o status OK", () => {
    render(<HealthPage />);
    expect(screen.getByRole("heading", { name: /ok/i })).toBeInTheDocument();
  });

  it("informa que o serviço está no ar", () => {
    render(<HealthPage />);
    expect(screen.getByText(/serviço no ar/i)).toBeInTheDocument();
  });
});
