import type { Metadata } from "next";
import { About } from "@/components/sections/about";

export const metadata: Metadata = {
  title: "Sobre — Carlos André Oliveira",
  description:
    "Estrategista de IA com prática em construção. Aconselho e construo soluções de IA para empresas em transformação e startups early-stage, em PT-BR.",
};

export default function SobrePage() {
  return <About />;
}
