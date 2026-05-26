import { describe, it, expect, beforeEach } from "vitest";
import { useThemeStore } from "@/stores/theme-store";

describe("theme-store (Story 1.2)", () => {
  beforeEach(() => {
    // Estado e classe limpos entre testes
    window.localStorage.clear();
    document.documentElement.classList.remove("light");
    useThemeStore.setState({ theme: "dark" });
  });

  it("default é dark (princípio do design system)", () => {
    expect(useThemeStore.getState().theme).toBe("dark");
    expect(document.documentElement.classList.contains("light")).toBe(false);
  });

  it("toggle alterna dark ↔ light e aplica a classe `.light`", () => {
    useThemeStore.getState().toggle();
    expect(useThemeStore.getState().theme).toBe("light");
    expect(document.documentElement.classList.contains("light")).toBe(true);

    useThemeStore.getState().toggle();
    expect(useThemeStore.getState().theme).toBe("dark");
    expect(document.documentElement.classList.contains("light")).toBe(false);
  });

  it("setTheme define explicitamente e sincroniza a classe", () => {
    useThemeStore.getState().setTheme("light");
    expect(useThemeStore.getState().theme).toBe("light");
    expect(document.documentElement.classList.contains("light")).toBe(true);

    useThemeStore.getState().setTheme("dark");
    expect(document.documentElement.classList.contains("light")).toBe(false);
  });

  it("persiste a preferência em localStorage sob a chave `cao-theme`", () => {
    useThemeStore.getState().setTheme("light");
    const raw = window.localStorage.getItem("cao-theme");
    expect(raw).not.toBeNull();
    const parsed = JSON.parse(raw as string);
    expect(parsed.state.theme).toBe("light");
  });
});
