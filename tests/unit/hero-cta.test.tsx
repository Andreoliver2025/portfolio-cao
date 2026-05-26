import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { HeroCTA } from "@/components/sections/hero-cta";

describe("HeroCTA — analytics (Story 1.4 AC5)", () => {
  it("clique dispara o evento cta_schedule_click com location=hero", async () => {
    const debugSpy = vi.spyOn(console, "debug").mockImplementation(() => {});
    const user = userEvent.setup();
    render(<HeroCTA />);

    await user.click(screen.getByRole("link", { name: /agendar uma call/i }));

    expect(debugSpy).toHaveBeenCalledWith(
      "[analytics]",
      "cta_schedule_click",
      expect.objectContaining({ location: "hero" }),
    );
    debugSpy.mockRestore();
  });
});
