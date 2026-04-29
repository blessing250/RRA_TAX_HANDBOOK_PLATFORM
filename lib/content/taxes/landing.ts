import type { Locale } from '@/lib/i18n/config';
import type { LocalizedText } from '@/lib/types/handbook';

type TaxLandingCard = {
  href: (locale: Locale) => string;
  id: string;
  summary: LocalizedText;
  title: LocalizedText;
};

export const taxesLanding = {
  title: {
    en: 'Taxes administered in Rwanda',
    fr: 'Impôts administrés au Rwanda',
    rw: 'Imisoro yakirwa mu Rwanda',
  },
  summary: {
    en: 'There are different taxes administered in Rwanda. Those are mainly, Domestic taxes and Customs duties.',
    fr: 'Il existe différents impôts administrés au Rwanda. Il s’agit principalement des impôts domestiques et des droits de douane.',
    rw: 'Hari imisoro itandukanye yakirwa mu Rwanda. Iyo misoro igizwe ahanini n’imisoro y’imbere mu gihugu n’amahoro ya gasutamo.',
  },
  lastUpdated: {
    en: 'This page was last updated on: 05/03/2026',
    fr: 'Cette page a été mise à jour le : 05/03/2026',
    rw: 'Iyi paji iherukaga kuvugururwa ku wa: 05/03/2026',
  },
};

export const taxLandingCards: TaxLandingCard[] = [
  {
    id: 'domestic-taxes',
    title: {
      en: 'Domestic Taxes',
      fr: 'Impôts domestiques',
      rw: 'Imisoro y’imbere mu gihugu',
    },
    summary: {
      en: 'See information on centralised and decentralised taxes.',
      fr: 'Consultez les informations sur les impôts centralisés et décentralisés.',
      rw: 'Reba amakuru ku misoro ikusanyirizwa hamwe n’imisoro yeguriwe inzego z’ibanze.',
    },
    href: (locale) => `/${locale}/taxes/domestic-taxes`,
  },
  {
    id: 'customs-duties',
    title: {
      en: 'Customs Duties',
      fr: 'Droits de douane',
      rw: 'Amahoro ya gasutamo',
    },
    summary: {
      en: 'More information on taxes, fees and duties paid on imported or exported goods.',
      fr: 'Plus d’informations sur les taxes, frais et droits payés sur les marchandises importées ou exportées.',
      rw: 'Andi makuru ku misoro, amafaranga n’amahoro yishyurwa ku bicuruzwa bitumizwa cyangwa byoherezwa hanze.',
    },
    href: () => 'https://www.rra.gov.rw/en/customs',
  },
];
