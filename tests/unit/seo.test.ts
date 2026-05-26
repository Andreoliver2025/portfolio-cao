import { describe, it, expect } from "vitest";
import {
  getSiteUrl,
  personJsonLd,
  professionalServiceJsonLd,
  jsonLdScriptProps,
} from "@/lib/seo";

describe("lib/seo (Story 1.6)", () => {
  it("getSiteUrl retorna string sem trailing slash", () => {
    const url = getSiteUrl();
    expect(typeof url).toBe("string");
    expect(url.endsWith("/")).toBe(false);
  });

  it("personJsonLd cumpre Schema.org Person mínimo", () => {
    const data = personJsonLd();
    expect(data["@context"]).toBe("https://schema.org");
    expect(data["@type"]).toBe("Person");
    expect(data.name).toBe("Carlos André Oliveira");
    expect(data.jobTitle).toBeTruthy();
    expect(data.knowsLanguage).toEqual(expect.arrayContaining(["pt-BR"]));
  });

  it("professionalServiceJsonLd cumpre Schema.org ProfessionalService mínimo", () => {
    const data = professionalServiceJsonLd();
    expect(data["@type"]).toBe("ProfessionalService");
    expect(data.provider).toBeTruthy();
    expect(data.serviceType).toBeTruthy();
  });

  it("jsonLdScriptProps serializa para JSON válido", () => {
    const props = jsonLdScriptProps(personJsonLd());
    expect(props.type).toBe("application/ld+json");
    expect(() => JSON.parse(props.dangerouslySetInnerHTML.__html)).not.toThrow();
  });
});
