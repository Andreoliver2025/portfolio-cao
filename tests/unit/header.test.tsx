import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

import { Header } from "@/components/layout/header";
import { useThemeStore } from "@/stores/theme-store";
import { NAV_LINKS } from "@/components/layout/nav.config";

describe("Header (Story 1.3)", () => {
  beforeEach(() => {
    window.localStorage.clear();
    document.documentElement.classList.remove("light");
    useThemeStore.setState({ theme: "dark" });
  });

  it("renderiza os 6 links de navegação", () => {
    render(<Header />);
    for (const link of NAV_LINKS) {
      // Cada link aparece duas vezes (desktop nav + mobile menu trigger DOM),
      // mas o mobile menu só está montado quando aberto. Aqui só desktop.
      expect(screen.getAllByRole("link", { name: link.label }).length).toBeGreaterThan(0);
    }
  });

  it("inclui o CTA de agendamento e o ThemeToggle", () => {
    render(<Header />);
    expect(screen.getByRole("link", { name: /agendar uma call/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /ativar tema claro/i })).toBeInTheDocument();
  });

  it("abre o menu mobile por teclado e fecha com ESC", async () => {
    const user = userEvent.setup();
    render(<Header />);

    const trigger = screen.getByRole("button", { name: /abrir menu de navegação/i });
    trigger.focus();
    await user.keyboard("{Enter}");

    // Menu aberto: botão "Fechar menu" e nav rotulada (mobile) presentes
    await waitFor(() => {
      expect(screen.getByRole("button", { name: /fechar menu/i })).toBeInTheDocument();
    });
    expect(screen.getByLabelText(/navegação principal \(mobile\)/i)).toBeInTheDocument();

    // ESC fecha
    await user.keyboard("{Escape}");
    await waitFor(() => {
      expect(screen.queryByRole("button", { name: /fechar menu/i })).not.toBeInTheDocument();
    });
  });
});
