import { test, expect } from "@playwright/test";

/**
 * Smoke E2E (Story 1.1, AC5): a rota canário responde na app servida.
 * Specs de conversão reais (Calendly/contato/demo) virão nas stories 1.4 / 3.2 / 4.1.
 */
test("rota canário /health responde com OK", async ({ page }) => {
  await page.goto("/health");
  await expect(page.getByRole("heading", { name: /ok/i })).toBeVisible();
});
