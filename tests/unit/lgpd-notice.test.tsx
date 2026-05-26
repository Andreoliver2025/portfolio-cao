import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LgpdNotice } from "@/components/layout/lgpd-notice";

describe("LgpdNotice (Story 1.6 AC4)", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("aparece na primeira visita (sem ack persistido)", async () => {
    render(<LgpdNotice />);
    expect(await screen.findByRole("dialog", { name: /privacidade/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /pol[íi]tica de privacidade/i })).toBeInTheDocument();
  });

  it("clique em 'Entendi' fecha e persiste o ack em localStorage", async () => {
    const user = userEvent.setup();
    render(<LgpdNotice />);

    await user.click(await screen.findByRole("button", { name: /entendi/i }));

    expect(screen.queryByRole("dialog", { name: /privacidade/i })).not.toBeInTheDocument();
    expect(window.localStorage.getItem("cao-lgpd-ack")).toBe("1");
  });

  it("não aparece se ack já está em localStorage", () => {
    window.localStorage.setItem("cao-lgpd-ack", "1");
    render(<LgpdNotice />);
    expect(screen.queryByRole("dialog", { name: /privacidade/i })).not.toBeInTheDocument();
  });
});
