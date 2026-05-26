import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { useThemeStore } from "@/stores/theme-store";

describe("ThemeToggle (Story 1.2)", () => {
  beforeEach(() => {
    window.localStorage.clear();
    document.documentElement.classList.remove("light");
    useThemeStore.setState({ theme: "dark" });
  });

  it("renderiza com label de acessibilidade indicando o próximo tema", () => {
    render(<ThemeToggle />);
    const btn = screen.getByRole("button", { name: /ativar tema claro/i });
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveAttribute("aria-pressed", "false");
  });

  it("clique alterna o tema e atualiza aria-pressed", async () => {
    const user = userEvent.setup();
    render(<ThemeToggle />);
    const btn = screen.getByRole("button");

    await user.click(btn);

    expect(useThemeStore.getState().theme).toBe("light");
    expect(document.documentElement.classList.contains("light")).toBe(true);
    expect(screen.getByRole("button", { name: /ativar tema escuro/i })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
  });
});
