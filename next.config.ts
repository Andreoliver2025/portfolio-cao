import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fixa a raiz do workspace neste diretório (evita inferência incorreta quando há
  // outros lockfiles na árvore acima — ex.: C:\Users\andre\package-lock.json).
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
