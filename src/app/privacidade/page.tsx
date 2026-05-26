import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade — Carlos André Oliveira",
  description:
    "Como tratamos seus dados pessoais ao usar este site, em conformidade com a LGPD (Lei 13.709/2018).",
  robots: { index: true, follow: true },
};

/**
 * Política de Privacidade (Story 1.6 AC4).
 * Conteúdo deste draft está alinhado às práticas técnicas reais do site
 * (sem DB próprio, cookieless, Resend para contato, Upstash para rate limit).
 *
 * ⚠️ Antes de publicar definitivamente, recomenda-se revisão por advogado.
 * Ver `docs/drafts/politica-privacidade.md` (draft completo com notas internas).
 */
export default function PrivacidadePage() {
  return (
    <article className="mx-auto max-w-[860px] px-xl py-4xl text-fg md:py-7xl">
      <header className="border-b border-border pb-xl">
        <span className="label-mono">documento legal</span>
        <h1 className="mt-sm text-display-md font-semibold tracking-[-0.02em] text-fg-strong">
          Política de Privacidade
        </h1>
        <p className="mt-md max-w-[62ch] text-fg-muted">
          Como tratamos seus dados pessoais ao usar este site, em conformidade com a Lei Geral de
          Proteção de Dados — LGPD (Lei 13.709/2018).
        </p>
        <p className="mt-sm label-mono text-fg-subtle">Última atualização: 26 de maio de 2026</p>
      </header>

      <div className="prose mt-2xl space-y-2xl text-fg">
        <section>
          <h2 className="text-2xl font-semibold text-fg-strong">1. Quem é o Controlador</h2>
          <p className="mt-md">
            <strong>Carlos André Oliveira</strong> — estrategista de IA, atuando como profissional
            autônomo. E-mail de contato (Encarregado informal):{" "}
            <a className="text-accent hover:underline" href="mailto:contato@carlosandre.ai">
              contato@carlosandre.ai
            </a>
            . Por se tratar de operação individual, o próprio Carlos André responde como
            Encarregado pelo Tratamento de Dados (Art. 41, LGPD).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-fg-strong">2. Quais dados coletamos</h2>
          <h3 className="mt-lg text-lg font-semibold text-fg-strong">
            2.1 Dados que você fornece voluntariamente
          </h3>
          <p className="mt-sm">
            <strong>Formulário de contato:</strong> nome, e-mail, empresa (opcional), mensagem e
            consentimento explícito (checkbox marcado para o envio).
          </p>
          <p className="mt-sm">
            <strong>Agendamento (Calendly):</strong> os dados que você fornece à Calendly são
            coletados pela própria Calendly como controladora — vide a Política de Privacidade
            da Calendly. Carlos André recebe os dados do agendamento via Calendly para conduzir
            a call.
          </p>
          <h3 className="mt-lg text-lg font-semibold text-fg-strong">
            2.2 Dados coletados automaticamente
          </h3>
          <ul className="mt-sm list-disc space-y-xs pl-xl text-fg-muted">
            <li>
              Métricas de uso <strong>anônimas e agregadas</strong> via Vercel Analytics — nenhum
              dado pessoalmente identificável é armazenado. <strong>Não usamos cookies de tracking.</strong>
            </li>
            <li>
              Endereço IP <strong>temporário</strong>, retido apenas para rate limiting (proteção
              anti-abuso), em chaves efêmeras no Upstash Redis. Expira em minutos.
            </li>
            <li>Logs técnicos mínimos para diagnóstico, mantidos pela Vercel.</li>
          </ul>
          <h3 className="mt-lg text-lg font-semibold text-fg-strong">2.3 O que NÃO coletamos</h3>
          <ul className="mt-sm list-disc space-y-xs pl-xl text-fg-muted">
            <li>Não usamos cookies de tracking ou marketing.</li>
            <li>Não fazemos fingerprinting do dispositivo.</li>
            <li>Não compartilhamos seus dados para fins publicitários.</li>
            <li>Não vendemos dados a terceiros.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-fg-strong">3. Para que usamos seus dados</h2>
          <ul className="mt-md list-disc space-y-xs pl-xl text-fg-muted">
            <li>
              <strong>Formulário de contato:</strong> responder à sua mensagem e propor próximos passos.
            </li>
            <li>
              <strong>Agendamento:</strong> conduzir a call agendada.
            </li>
            <li>
              <strong>Métricas anônimas:</strong> entender o que é útil no site, sem identificar você.
            </li>
            <li>
              <strong>IP de rate limit:</strong> proteger o site contra envio em massa e abuso.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-fg-strong">4. Base Legal (Art. 7º da LGPD)</h2>
          <ul className="mt-md list-disc space-y-xs pl-xl text-fg-muted">
            <li>
              <strong>Formulário e agendamento:</strong> Consentimento (Art. 7, I) — ao enviar, você consente expressamente.
            </li>
            <li>
              <strong>Rate limiting (IP temporário):</strong> Legítimo interesse (Art. 7, IX) — segurança operacional.
            </li>
            <li>
              <strong>Métricas anônimas:</strong> Legítimo interesse (Art. 7, IX) — dados não identificáveis.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-fg-strong">5. Com quem compartilhamos</h2>
          <p className="mt-md">
            Não vendemos nem alugamos dados. Compartilhamos apenas com operadores técnicos necessários:
          </p>
          <ul className="mt-md list-disc space-y-xs pl-xl text-fg-muted">
            <li>
              <strong>Vercel</strong> — hospedagem e funções serverless (EUA).
            </li>
            <li>
              <strong>Resend</strong> — envio do e-mail de contato a Carlos André (EUA).
            </li>
            <li>
              <strong>Upstash</strong> — cache temporário para rate limit (EUA).
            </li>
            <li>
              <strong>Calendly</strong> — agendamento (controladora própria, EUA).
            </li>
            <li>
              <strong>Vercel Analytics</strong> — métricas anônimas e cookieless.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-fg-strong">6. Transferência Internacional</h2>
          <p className="mt-md">
            Alguns operadores estão sediados nos EUA. A transferência se ampara no Art. 33, II e
            VIII, da LGPD — operadores com garantias contratuais de cumprimento da LGPD e/ou
            consentimento específico do titular ao usar o site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-fg-strong">7. Retenção</h2>
          <ul className="mt-md list-disc space-y-xs pl-xl text-fg-muted">
            <li>
              <strong>E-mail de contato:</strong> pelo tempo da conversa + até 24 meses após o último contato.
            </li>
            <li>
              <strong>IP de rate limit:</strong> minutos (janela deslizante); apagado automaticamente.
            </li>
            <li>
              <strong>Métricas anônimas:</strong> conforme política do provedor (tipicamente 12 meses).
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-fg-strong">
            8. Seus direitos (Art. 18 da LGPD)
          </h2>
          <p className="mt-md">
            A qualquer momento e gratuitamente, você pode solicitar: confirmação, acesso, correção,
            anonimização, bloqueio, eliminação, portabilidade, informação sobre compartilhamento, e
            revogação do consentimento.
          </p>
          <p className="mt-md">
            <strong>Como exercer:</strong> e-mail para{" "}
            <a className="text-accent hover:underline" href="mailto:contato@carlosandre.ai">
              contato@carlosandre.ai
            </a>{" "}
            com o assunto <em>&ldquo;LGPD — exercício de direitos&rdquo;</em>. Respondemos em até 15 dias.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-fg-strong">9. Segurança</h2>
          <ul className="mt-md list-disc space-y-xs pl-xl text-fg-muted">
            <li>HTTPS (TLS) em todas as conexões.</li>
            <li>Chaves de API em variáveis de ambiente do servidor — nunca expostas ao navegador.</li>
            <li>Validação de input rigorosa (Zod) e proteção anti-bot.</li>
            <li>Nenhum banco de dados próprio com dados pessoais — minimiza superfície de ataque.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-fg-strong">10. Crianças e adolescentes</h2>
          <p className="mt-md">
            Este site é direcionado a profissionais e empresas — não a menores de 18 anos. Não
            coletamos dados de menores conscientemente.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-fg-strong">11. Atualizações</h2>
          <p className="mt-md">
            Esta Política pode ser atualizada. A versão vigente é sempre a publicada nesta página,
            com data no topo. Mudanças materiais serão comunicadas por e-mail aos titulares com
            dados ativos.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-fg-strong">12. Contato</h2>
          <p className="mt-md">
            Dúvidas, reclamações ou exercício de direitos:{" "}
            <a className="text-accent hover:underline" href="mailto:contato@carlosandre.ai">
              contato@carlosandre.ai
            </a>
            . Você também pode acionar a{" "}
            <a
              className="text-accent hover:underline"
              href="https://www.gov.br/anpd"
              target="_blank"
              rel="noopener noreferrer"
            >
              Autoridade Nacional de Proteção de Dados (ANPD)
            </a>
            .
          </p>
        </section>
      </div>
    </article>
  );
}
