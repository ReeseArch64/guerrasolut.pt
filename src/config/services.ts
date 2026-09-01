export interface Service {
  id: string;
  slug: string;
  name: string;
  description: string;
  tags: string[];
  featured?: boolean;
  primary?: boolean;
}

export const SERVICES: Service[] = [
  {
    id: 'electricidade',
    slug: 'instalacoes-eletricas',
    name: 'Instalações Elétricas',
    description:
      'A nossa especialidade de origem: instalação, remodelação e manutenção de redes elétricas em habitação, comércio e indústria, com quadros, certificação e assistência a avarias.',
    tags: ['Quadros elétricos', 'Certificação', 'Avarias', 'Iluminação'],
    featured: true,
    primary: true,
  },
  {
    id: 'construcao',
    slug: 'construcao-civil',
    name: 'Construção Civil',
    description:
      'Obra nova, ampliações, estruturas e acabamentos executados com acompanhamento técnico do início ao fim.',
    tags: ['Obra nova', 'Ampliações', 'Acabamentos'],
    featured: true,
  },
  {
    id: 'remodelacao',
    slug: 'remodelacao',
    name: 'Remodelação',
    description:
      'Cozinhas, casas de banho, escritórios e espaços comerciais renovados com prazos cumpridos.',
    tags: ['Cozinhas', 'Casas de banho', 'Chave na mão'],
  },
  {
    id: 'pintura',
    slug: 'pintura',
    name: 'Pintura',
    description:
      'Pintura interior e exterior, tratamento de fachadas e impermeabilização.',
    tags: ['Interior', 'Fachadas'],
  },
  {
    id: 'pladur',
    slug: 'pladur-gesso',
    name: 'Pladur & Gesso',
    description: 'Divisórias, tectos falsos e isolamento acústico e térmico.',
    tags: ['Tectos falsos', 'Isolamento'],
  },
  {
    id: 'canalizacao',
    slug: 'canalizacao',
    name: 'Canalização',
    description:
      'Detecção de fugas, tubagens, desentupimentos e loiças sanitárias.',
    tags: ['Fugas', 'Desentupimentos'],
  },
  {
    id: 'climatizacao',
    slug: 'climatizacao',
    name: 'Climatização',
    description: 'Ar condicionado, ventilação e sistemas AVAC instalados e mantidos.',
    tags: ['AVAC', 'Manutenção'],
  },
  {
    id: 'acessos',
    slug: 'controlo-de-acessos',
    name: 'Controlo de Acessos',
    description:
      'Portões automáticos, videoporteiros e acessos para condomínios.',
    tags: ['Portões', 'Videoporteiro'],
  },
];
