/**
 * Perguntas frequentes (`PRODUCTS.md` §5).
 *
 * Fonte única das perguntas visíveis em `/faq/`, do resumo da home e do nó
 * `FAQPage` de dados estruturados. O `FAQPage` só se emite onde as respostas
 * estão de facto no HTML — ver `lib/schema.ts`.
 */
export interface Pergunta {
  /** Âncora estável, usada em `id` e em ligações directas. */
  id: string;
  pergunta: string;
  resposta: string;
}

export const FAQ: Pergunta[] = [
  {
    id: 'orcamento',
    pergunta: 'Como é que recebo um orçamento?',
    resposta:
      'Comece por nos descrever o que precisa. Depois de percebermos o trabalho, agendamos uma visita técnica ao local — só aí conseguimos apresentar um valor fiável. A visita e o orçamento são gratuitos e sem compromisso.',
  },
  {
    id: 'resposta',
    pergunta: 'Em quanto tempo recebo resposta?',
    resposta:
      'Respondemos a todos os pedidos em menos de 2 horas durante o horário de funcionamento. Em situações de urgência, temos linha aberta 24h.',
  },
  {
    id: 'zonas',
    pergunta: 'Trabalham em que zonas de Portugal?',
    resposta:
      'Cobrimos todo o território continental, com equipas com base em Lisboa, Porto e Braga. Para obras fora destas zonas, a deslocação é confirmada no orçamento.',
  },
  {
    id: 'garantia',
    pergunta: 'Os trabalhos têm garantia?',
    resposta:
      'Sim. Todos os trabalhos são entregues com garantia por escrito, cujo período varia consoante o tipo de intervenção e os materiais aplicados.',
  },
  {
    id: 'factura',
    pergunta: 'Emitem factura e trabalham com seguro?',
    resposta:
      'Sim. Emitimos factura com IVA em todos os serviços e a empresa mantém seguro de responsabilidade civil activo para todas as obras.',
  },
  {
    id: 'empresas',
    pergunta: 'Fazem obras para empresas e condomínios?',
    resposta:
      'Sim. Uma parte significativa do nosso trabalho são contratos de manutenção com condomínios, escritórios, lojas e restaurantes, com condições ajustadas ao volume.',
  },
];
