import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Health — Portfólio CAO",
  robots: { index: false, follow: false },
};

/**
 * Rota canário (Story 1.1, AC5).
 * Confirma que a app renderiza e está acessível na URL de produção.
 */
export default function HealthPage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "var(--font-geist-mono, monospace)" }}>
      <h1>OK</h1>
      <p>Portfólio Carlos André Oliveira — serviço no ar.</p>
    </main>
  );
}
