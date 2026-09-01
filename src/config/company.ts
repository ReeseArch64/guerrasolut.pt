export interface Passo {
  numero: string;
  titulo: string;
  descricao: string;
}

export const PROCESSO: Passo[] = [
  {
    numero: '01',
    titulo: 'Contacto',
    descricao:
      'Descreva o que precisa por telefone ou WhatsApp. Respondemos em menos de 2 horas.',
  },
  {
    numero: '02',
    titulo: 'Visita técnica',
    descricao:
      'Deslocamo-nos ao local para avaliar a obra, medir e esclarecer todas as dúvidas.',
  },
  {
    numero: '03',
    titulo: 'Orçamento fechado',
    descricao:
      'Recebe uma proposta detalhada, com prazos e valores fixos, sem compromisso.',
  },
  {
    numero: '04',
    titulo: 'Execução e entrega',
    descricao:
      'Executamos no prazo acordado, limpamos o espaço e entregamos com garantia por escrito.',
  },
];

export interface Diferenciador {
  titulo: string;
  descricao: string;
}

export const DIFERENCIADORES: Diferenciador[] = [
  {
    titulo: 'Certificados e seguros',
    descricao:
      'Técnicos com as certificações exigidas por lei e seguro de responsabilidade civil em todas as obras.',
  },
  {
    titulo: 'Orçamento sem surpresas',
    descricao:
      'Valor fechado por escrito antes de começar. O que está no orçamento é o que paga no fim.',
  },
  {
    titulo: 'Resposta rápida',
    descricao:
      'Resposta em menos de 2 horas e assistência a urgências 7 dias por semana, todo o ano.',
  },
  {
    titulo: 'Garantia por escrito',
    descricao:
      'Materiais de primeira e garantia em todos os trabalhos executados pela nossa equipa.',
  },
  {
    titulo: 'Equipa própria',
    descricao:
      'Profissionais internos por especialidade, com formação contínua — sem subcontratação anónima.',
  },
];

export const BULLETS_SOBRE = [
  'Técnicos certificados e com experiência comprovada',
  'Orçamentos fechados, sem custos inesperados no fim',
  'Garantia por escrito em todos os trabalhos executados',
  'Atendimento 7 dias por semana, incluindo urgências',
];
