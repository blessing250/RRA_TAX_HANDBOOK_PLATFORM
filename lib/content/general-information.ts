import type { HandbookTopic } from '@/lib/types/handbook';

export const generalInformation: HandbookTopic = {
  slug: 'general-information',
  category: 'general',
  title: { en: 'General Information', fr: 'Informations générales', rw: 'Amakuru rusange' },
  summary: {
    en: 'The RRA Tax Handbook is a simplified guide for taxpayers to understand the tax laws and procedures for all tax types in Rwanda.',
  },
  sections: [
    {
      id: 'introduction',
      title: {
        en: 'Introduction',
        fr: 'Introduction',
        rw: 'Intangiriro',
      },
      content: {
        en: [
          `"We cannot rely on foreign aid forever. We are a population of 13.2 million people and those paying taxes are doing a good thing; however, … if the national budget is to be fully supported by Rwandans, then we must… carry on sensitizing people on their role of contributing to the country’s development.`,

          `If we work hard and ensure that our budget is fully funded by domestic resources, then we shall have only one master – our people.”-  His Excellency Paul Kagame, President of Rwanda speaking at the 2013 Taxpayers Appreciation Day.`,
          `The task ahead is to sustain and raise this growth, and use our resources productively. We cannot count on anyone else to finance our development and well-being. Our most important asset as a nation is our capable young people. It is your task, as young Rwandans, to sustain what we have built, and take it further. / New Year 2026 Message by President Kagame | Kigali, 31 December 2025.`,
        ],
      },
    },
    {
      id: 'purpose-of-this-tax-handbook',
      title: {
        en: 'Purpose of this tax handbook',
        fr: 'Objectif de ce guide fiscal',
        rw: "Intego y'iki gitabo cy'imisoro",
      },
      content: {
        en: [
          'This section explains why the handbook was prepared and how taxpayers should use it.',
        ],
      },
    },
    {
      id: 'foreword-by-the-commissioner-general',
      title: {
        en: 'Foreword by the Commissioner General',
        fr: 'Avant-propos du Commissaire Général',
        rw: "Ijambo ry'ibanze rya Komiseri Mukuru",
      },
      content: {
        en: ['This section will contain the foreword from the Commissioner General.'],
      },
    },
    {
      id: 'benefits-of-taxes',
      title: {
        en: 'Benefits of Taxes',
        fr: 'Avantages des impôts',
        rw: "Akamaro k'imisoro",
      },
      content: {
        en: [
          'This section explains the role and benefits of taxes in national development and public service delivery.',
        ],
      },
    },
    {
      id: 'principles-of-taxation',
      title: {
        en: 'Principles of Taxation',
        fr: "Principes de l'imposition",
        rw: "Amahame y'imisoro",
      },
      content: {
        en: ['This section introduces the main principles that guide fair and effective taxation.'],
      },
    },
    {
      id: 'history-of-taxes-in-rwanda',
      title: {
        en: 'History of Taxes in Rwanda',
        fr: 'Histoire des impôts au Rwanda',
        rw: "Amateka y'imisoro mu Rwanda",
      },
      content: {
        en: ['This section summarizes the development of taxation in Rwanda over time.'],
      },
    },
    {
      id: 'rra-modernisation-and-reforms',
      title: {
        en: 'RRA Modernisation and Reforms',
        fr: 'Modernisation et réformes de la RRA',
        rw: "Ivugurura n'iterambere rya RRA",
      },
      content: {
        en: [
          'This section covers key reforms and modernization initiatives introduced by Rwanda Revenue Authority.',
        ],
      },
    },
    {
      id: 'rra-structure',
      title: {
        en: 'RRA Structure',
        fr: 'Structure de la RRA',
        rw: 'Imiterere ya RRA',
      },
      content: {
        en: ['This section presents the organizational structure of Rwanda Revenue Authority.'],
      },
    },
    {
      id: 'rra-service-charter',
      title: {
        en: 'RRA Service Charter',
        fr: 'Charte de service de la RRA',
        rw: 'Amasezerano ya serivisi ya RRA',
      },
      content: {
        en: ['This section outlines service standards and commitments for taxpayers.'],
      },
    },
    {
      id: 'definitions',
      title: {
        en: 'Definitions',
        fr: 'Définitions',
        rw: 'Ibisobanuro',
      },
      content: {
        en: ['This section defines key terms used throughout the tax handbook.'],
      },
    },
    {
      id: 'acronyms',
      title: {
        en: 'Acronyms',
        fr: 'Acronymes',
        rw: 'Impine',
      },
      content: {
        en: ['This section lists acronyms and abbreviations used in the handbook.'],
      },
    },
  ],
};
