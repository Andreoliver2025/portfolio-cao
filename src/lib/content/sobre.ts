/**
 * Conteúdo editorial da página/seção Sobre (Story 1.5).
 * Drafted pelo @dev a partir do PRD + market-research (draft em docs/drafts/sobre-copy.md).
 * Texto editável aqui — após Carlos revisar, basta atualizar este arquivo.
 *
 * Placeholders factuais marcados como `___A_PREENCHER___` aguardam input do dono.
 */
export const sobreContent = {
  eyebrow: "Sobre · CAO",
  /** Opção A (recomendada no draft). */
  headline: {
    primary: "Estratégia que não termina no slide.",
    accent: "Execução que sabe pra onde vai.",
  },
  lede: "Carlos André Oliveira — estrategista de IA com prática em construção. Aconselho e construo soluções de IA para empresas em transformação e startups early-stage, em PT-BR, com ancoragem em resultado mensurável.",

  /** 4 movimentos do corpo — markdown leve (parágrafos com <strong/> permitido). */
  body: [
    {
      kind: "paragraph" as const,
      text: 'O mercado de IA tem dois tipos de profissional em rotação: o **estrategista de slide**, que diz o que fazer e some quando vira código; e o **construtor sem leitura de negócio**, que executa o que pediram — geralmente o problema errado. O gargalo do cliente em 2026 não é mais "IA funciona?". É **"em quem confio para me guiar e construir junto?"**.',
    },
    {
      kind: "paragraph" as const,
      text: "Vivo na interseção rara entre os dois. Quando entro num projeto, **traço a estratégia e ponho a mão no código na mesma semana**. Não terceirizo a execução — porque a estratégia que não passa pelo código vira fricção, e o código que não tem estratégia vira dívida.",
    },
  ],

  /** Diferenciação por público — 2 blocos paralelos. */
  audiences: [
    {
      title: "Para empresas em transformação",
      body: 'Trago foco operacional. Qual caso de uso atacar primeiro, qual o KPI, qual o ROI honesto. Sem promessa de "IA vai resolver tudo" — IA é alavanca, não milagre. Trabalho ao lado do seu time, não substituo ele.',
    },
    {
      title: "Para founders early-stage",
      body: "Velocidade. Diagnóstico em horas, PoC em semanas. IA como força multiplicadora do que você já está construindo, não como distração para investidor.",
    },
  ],

  promise:
    "Saímos da primeira call com **(a)** o problema certo a atacar, **(b)** a abordagem técnica adequada, **(c)** o cronograma realista, **(d)** a métrica de sucesso. Sem hype. Sem promessa vazia.",

  /** Trajetória factual — só Carlos sabe; placeholder até receber o texto final. */
  trajetoria: {
    placeholder: true as const,
    /** Quando Carlos enviar a trajetória, trocar `placeholder` para `false` e preencher `text`. */
    text: "___A_PREENCHER___ Trajetória curta (3-5 linhas): formação, empresas/projetos relevantes, foco atual. Sem trajetória ainda, mostramos um aviso suave em vez de inventar.",
  },

  /** Foto profissional — placeholder até o arquivo chegar (Story 1.5 AC3). */
  foto: {
    src: null as string | null,
    alt: "Carlos André Oliveira — estrategista de IA",
  },

  cta: {
    text: "Se você está numa decisão de IA agora e quer 5 minutos honestos antes de comprar qualquer coisa do mercado, agende uma call. Sem custo, sem pitch.",
    label: "Agendar uma call",
    /** Placeholder até a URL do Calendly chegar (Story 1.4 AC2). */
    href: "#agendar",
  },
} as const;
