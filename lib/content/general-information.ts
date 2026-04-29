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
          `The RRA Tax Handbook is a simplified guide for taxpayers to understand the tax laws and procedures for all tax types in Rwanda. It covers how to register, declare and pay each of the domestic taxes, Local Government Taxes (LGT) and fees, and customs duties. The handbook also provides information on tax incentives, tax treaties, and the rights and obligations of taxpayers. It is designed to help taxpayers comply with their tax obligations and contribute to national development. The handbook is updated regularly to reflect changes in tax laws and policies. We encourage all taxpayers to read and use this handbook as a reference for their tax matters.`,
          `This Tax Handbook will be updated periodically. If there are any tax policy or administration changes in the interim, RRA uses the media, the RRA website and seminars to try and reach all taxpayers and ensure they are made aware of the new policies and procedures. In addition, an updated Tax Handbook is always available on the RRA website.`,
          `However, it is important to note that this Tax Handbook is intended for the purpose of guidance only. It does not override the tax laws, and in the case of any uncertainty, please refer to these laws, ministerial orders and rulings available on the <a href="https://www.rra.gov.rw/en/laws-policies-and-rulings">RRA</a> website.`,
          `Taxes are the mandatory contribution from citizens to a government in order to fund public expenditures.`,
          `Since 1997, Rwanda Revenue Authority (RRA) has been legally mandated by the Government of Rwanda with the task of assessing, collecting and accounting for taxes, customs duties, local government taxes and fees and non-tax revenues.`,

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
        en: [`It gives me great pleasure to present to you the 2nd edition of the Rwanda Revenue Authority (RRA) Tax Handbook. This Tax Handbook is a very important demonstration of RRA’s strong commitment to be ‘Here For You, To Serve’. This means that at RRA we are striving to provide the best possible service to you, our taxpayers.`,
             `This Tax Handbook attempts to answer any questions that taxpayers might have about how, when, where, which taxes, what amount and even why they pay taxes. In this printed edition, we include an update on the new tax laws concerning Income, Value Added Tax, sources of revenue and property of decentralized entities, excise duty, automatic exchange of information for tax purposes, and tax procedures. `,
             `This covers all aspects of domestic taxes, local government taxes and fees, and customs duties. This means that all of Rwanda’s tax laws, processes and procedures are summarised in one place for the benefit of all taxpayers.`,
             `Another important aim of this Handbook is to show taxpayers the ease with which they can declare and pay taxes online or on their mobile phones. Simple step-by-step guides to illustrate how to declare taxes using E-Tax, M-Declaration and the Local Government Taxes (LGT) system.`,
             `After declaring, taxes can then easily be paid using systems such as E-Payment, Online Banking, MTN Mobile Money and Mobicash. All of these systems mean that it has never been easier, and never taken less time, to comply with your tax obligations.`,
             `In addition, the sections on general RRA information are very important to show taxpayers the processes by which RRA monitors tax compliance, negotiates payment of unpaid due taxes, allows for fair hearings and penalises non-compliance.`,
             `Finally, the ultimate aim of this Tax Handbook is to help taxpayers. We want taxpayers to fully understand their tax obligations. We want taxpayers to know that RRA is working for them. We want taxpayers to tell their friends, suppliers, customers and competitors that paying their taxes has never been easier and has never been more important in financing the development of our country.`,
             `<strong>NIWENSHUTI Ronald</strong>`,
             `<strong>Commissioner General, Rwanda Revenue Authority</strong>`,

        ],
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
          `Taxes are a vital and hugely beneficial requirement of modern society. Taxes are necessary to pay for public goods and services, which provide benefits to all members of the population. Some of these are more tangible such as:`,
          `- Infrastructure`,
           `- National security`,
           `- Education`,
           `- Healthcare`,
           `- Access to utilities such as water and electricity`,
           `There are also a range of less tangible benefits that arise from taxes, such as:`,
           `- Good governance – when citizens are paying taxes, the government is held more responsible for improving public services.`,
           `- Social responsibility – citizens are more likely to protect those public services, and can be proud of contributing to Rwanda’s development.`,
           `- Self-reliance – tax revenues are the backbone of national self-reliance, reducing the country’s dependency on unpredictable foreign aid and donors. `,
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
