import type { Locale } from '@/lib/i18n/config';
import type { LocalizedText } from '@/lib/types/handbook';

type HomeCard = {
  href: (locale: Locale) => string;
  id: string;
  summary: LocalizedText;
  title: LocalizedText;
};

export const homeCards: HomeCard[] = [
  {
    id: 'general-information',
    title: {
      en: 'General Information',
      fr: 'Informations générales',
      rw: 'Amakuru rusange',
    },
    summary: {
      en: 'See the tax handbook introduction, purpose of the tax handbook, history of taxation and other general information.',
      fr: 'Consultez l’introduction du guide fiscal, son objectif, l’histoire de la fiscalité et d’autres informations générales.',
      rw: 'Reba intangiriro y’igitabo cy’imisoro, intego yacyo, amateka y’imisoro n’andi makuru rusange.',
    },
    href: (locale) => `/${locale}/general-information`,
  },
  {
    id: 'taxes-administered-in-rwanda',
    title: {
      en: 'Taxes administered in Rwanda',
      fr: 'Impôts administrés au Rwanda',
      rw: 'Imisoro yakirwa mu Rwanda',
    },
    summary: {
      en: `Find information on different taxes, their rates, how to file and pay taxes and non-compliance penalties.`,
      fr: `Trouvez des informations sur les différents impôts, leurs taux, comment les déclarer et les payer, ainsi que sur les pénalités en cas de non-respect des règles.`,
      rw: 'Reba imisoro ya Leta, imisoro y’imbere mu gihugu, imisoro y’inzego z’ibanze n’inshingano bijyanye.',
    },
    href: (locale) => `/${locale}/taxes`,
  },
  {
    id: 'other-services',
    title: {
      en: 'Other services',
      fr: 'Autres services',
      rw: 'Izindi serivisi',
    },
    summary: {
      en: `Find information on other tax-related services such VAT Rewards & Refund, Debt Management, Audit, Certificates offered by RRA and Motor Vehicle Services among others.`,
      fr: `Trouvez des informations sur d'autres services liés à la fiscalité, tels que les remises et remboursements de TVA, la gestion des dettes, l'audit, les certificats proposés par la RRA et les services relatifs aux véhicules automobiles, entre autres.`,
      rw: 'Reba serivisi zunganira n’inyandiko zifasha ku nshingano z’abasora.',
    },
    href: (locale) => `/${locale}/other-services`,
  },
  {
    id: 'user-guides-and-examples',
    title: {
      en: 'User guides and examples',
      fr: `Guides d’utilisation et exemples`,
      rw: `Imfashanyigisho n’ingero`,
    },
    summary: {
      en: `Here you will find user guides on filing different taxes and various examples to help your understanding on various tax types.`,
      fr: `Vous trouverez ici des guides d'utilisation sur la déclaration des différents impôts et divers exemples pour vous aider à comprendre les différents types d'impôts.`,
      rw: 'Bona ubuyobozi bufatika, ingero n’intambwe ku ntambwe ku bikorwa by’imisoro.',
    },
    href: (locale) => `/${locale}/user-guides-and-examples`,
  },
];
