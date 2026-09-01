import { SITE, CONTACT, DISTRICTS, SOCIAL } from '../config/site';
import { SERVICES, type Service } from '../config/services';
import { absoluteUrl } from './seo';

export const ORGANIZATION_ID = `${SITE.url}/#organizacao`;
export const WEBSITE_ID = `${SITE.url}/#website`;

const WEEK = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Electrician', 'GeneralContractor'],
    '@id': ORGANIZATION_ID,
    name: SITE.name,
    legalName: SITE.legalName,
    url: `${SITE.url}/`,
    logo: {
      '@type': 'ImageObject',
      url: absoluteUrl(SITE.logo),
      caption: SITE.name,
    },
    image: absoluteUrl(SITE.ogImage),
    description: SITE.description,
    slogan: 'A solução certa para a sua obra',
    foundingDate: SITE.foundingDate,
    priceRange: SITE.priceRange,
    currenciesAccepted: 'EUR',
    telephone: CONTACT.phone,
    email: CONTACT.email,
    knowsLanguage: SITE.locale,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'PT',
    },
    areaServed: [
      { '@type': 'Country', name: 'Portugal' },
      ...DISTRICTS.map((name) => ({
        '@type': 'AdministrativeArea',
        name,
      })),
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: WEEK,
        opens: CONTACT.opens,
        closes: CONTACT.closes,
      },
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        telephone: CONTACT.phone,
        email: CONTACT.email,
        areaServed: 'PT',
        availableLanguage: ['Portuguese'],
      },
      {
        '@type': 'ContactPoint',
        contactType: 'emergency',
        telephone: CONTACT.phone,
        areaServed: 'PT',
        availableLanguage: ['Portuguese'],
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: WEEK,
          opens: '00:00',
          closes: '23:59',
        },
      },
    ],
    makesOffer: SERVICES.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        '@id': `${absoluteUrl(`/servicos/${service.slug}`)}#servico`,
        name: service.name,
        description: service.description,
      },
    })),
    ...(SOCIAL.length > 0 ? { sameAs: SOCIAL } : {}),
  };
}

export function webSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${SITE.url}/`,
    name: SITE.name,
    description: SITE.description,
    inLanguage: SITE.locale,
    publisher: { '@id': ORGANIZATION_ID },
  };
}

export function serviceSchema(service: Service) {
  const url = absoluteUrl(`/servicos/${service.slug}`);
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#servico`,
    name: service.name,
    description: service.description,
    url,
    serviceType: service.name,
    provider: { '@id': ORGANIZATION_ID },
    areaServed: DISTRICTS.map((name) => ({
      '@type': 'AdministrativeArea',
      name,
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function serviceListSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Serviços da Guerra Solut',
    itemListOrder: 'https://schema.org/ItemListOrderAscending',
    numberOfItems: SERVICES.length,
    itemListElement: SERVICES.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: service.name,
      description: service.description,
      url: absoluteUrl(`/servicos/${service.slug}`),
    })),
  };
}
