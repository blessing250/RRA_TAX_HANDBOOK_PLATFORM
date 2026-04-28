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
      en: 'Browse central government taxes, domestic taxes, local government taxes, and related obligations.',
      fr: 'Parcourez les impôts du gouvernement central, les impôts domestiques, les impôts locaux et les obligations associées.',
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
      en: 'Access supporting services and references connected to taxpayer obligations.',
      fr: 'Accédez aux services d’appui et aux références liés aux obligations des contribuables.',
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
      en: 'Find practical guidance, examples, and step-by-step support for common tax processes.',
      fr: 'Trouvez des orientations pratiques, des exemples et un accompagnement étape par étape pour les démarches fiscales courantes.',
      rw: 'Bona ubuyobozi bufatika, ingero n’intambwe ku ntambwe ku bikorwa by’imisoro.',
    },
    href: (locale) => `/${locale}/user-guides-and-examples`,
  },
];
