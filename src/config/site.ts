/**
 * Fonte única dos dados da empresa e dos valores por defeito de SEO.
 * Ver `PRODUCTS.md` §1 (identidade) e §11 (metas técnicas).
 */
export const SITE = {
  /** Sem barra final. Usado como `site` do Astro e base de todos os URLs absolutos. */
  url: 'https://www.guerrasolut.pt',
  name: 'Guerra Solut',
  legalName: 'Guerra Solut, Unipessoal Lda.',
  foundingDate: '2012',
  priceRange: '€€',
  locale: 'pt-PT',
  /** Formato exigido pelo Open Graph. */
  ogLocale: 'pt_PT',

  /** Título da home e sufixo das restantes páginas. */
  defaultTitle:
    'Guerra Solut — Instalações Elétricas, Construção Civil e Remodelação',
  titleSuffix: 'Guerra Solut',
  description:
    'Especialistas em instalações elétricas, construção civil e remodelação em Portugal continental. Orçamento fechado, garantia por escrito e resposta em menos de 2 horas. Urgências 24h.',

  /** Imagem de partilha 1200×630 (Open Graph / Twitter). */
  ogImage: '/og-image.png',
  ogImageAlt: 'Guerra Solut — Soluções Elétricas',
  logo: '/logo-full.png',

  themeColor: { light: '#ffffff', dark: '#0a0a0a' },
  /** Cor do tile do Windows e cor da marca. */
  brandColor: '#ed0000',
} as const;

export const CONTACT = {
  /** E.164 — usar em `tel:` e nos dados estruturados. */
  phone: '+351964148843',
  phoneDisplay: '+351 964 148 843',
  whatsapp: 'https://wa.me/351964148843',
  email: 'contacto@guerrasolut.pt',
  /** Seg–Dom, 08h–20h. Urgências 24h/7 dias. */
  opens: '08:00',
  closes: '20:00',
} as const;

/** Distritos com cobertura declarada (`PRODUCTS.md` §1). */
export const DISTRICTS = [
  'Lisboa',
  'Porto',
  'Braga',
  'Setúbal',
  'Coimbra',
  'Aveiro',
  'Faro',
  'Leiria',
  'Santarém',
  'Viseu',
] as const;

/**
 * Perfis oficiais para `sameAs`. Por preencher — o cliente ainda não forneceu
 * os links de redes sociais nem o Google Business Profile (`PRODUCTS.md` §13).
 */
export const SOCIAL: string[] = [];
