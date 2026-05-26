import { describe, it, expect, vi } from "vitest";
import { trackEvent } from "@/lib/analytics";

describe("lib/analytics (Story 1.4)", () => {
  it("não lança erro com payload ausente", () => {
    expect(() => trackEvent("cta_schedule_click")).not.toThrow();
  });

  it("não lança erro com payload presente", () => {
    expect(() => trackEvent("cta_schedule_click", { location: "hero" })).not.toThrow();
  });

  it("usa console.debug em ambiente não-produção", () => {
    const debugSpy = vi.spyOn(console, "debug").mockImplementation(() => {});
    trackEvent("contact_form_submit", { source: "test" });
    expect(debugSpy).toHaveBeenCalled();
    debugSpy.mockRestore();
  });
});
