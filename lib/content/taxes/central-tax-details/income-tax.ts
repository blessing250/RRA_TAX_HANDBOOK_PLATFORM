import {
  centralTaxLastUpdated,
  section,
  type CentralTaxDetailPage,
} from '@/lib/content/taxes/central-tax-details/shared';

export const incomeTaxDetail: CentralTaxDetailPage = {
  slug: 'income-tax',
  title: { en: 'Income Tax', fr: 'Impot sur le revenu', rw: 'Umusoro ku nyungu' },
  intro: {
    en: [
      "Income Tax is a tax on income resulting from business, self-employment and investment activities. Income Tax ensures that all businesses benefiting from Rwanda's infrastructure, security and prosperity contribute their fair share towards the nation's development.",
    ],
  },
  sections: [
    {
      id: 'taxable-income',
      title: {
        en: 'Taxable income',
        fr: 'Revenu imposable',
        rw: 'Inyungu isoreshwa',
      },
      content: {
        // Add each paragraph as a separate string.
        // This content appears inside the "Taxable income" accordion.
        en: [
          'Taxable income includes all income sourced in Rwanda resulting from business, employment or investment activities and activities performed abroad by a resident of Rwanda. This includes;',
                `-services and employment;`,
    ` -activities of a crafts person, singer, artist and a player;`,
          `-Sports, cultural and leisure activities;`,
          `-Activities carried out by a non-resident in Rwanda through a permanent establishment in Rwanda;`,
         `- Use, sale, lease and free transfer of business movable assets;`,
         `- Sale, lease and free transfer of immovable assets allocated to the business;`,
         `- Agricultural, fishing and forestry activities;`,
          `-Usufruct and other rights attached to immovable assets and their sale if such rights are allocated to the business;`,
         ` -Investments in shares of companies;`,
         ` -Direct or indirect sale or transfer of shares or debentures; change of profits into shares that increases the capital of partners, except for financial institutions with paid-up capital below the minimum requirement set by the National bank of Rwanda;`,
         `- Distribution of profits among partners;`,
         `- Lending, deposits and other similar income-generating activities;`,
          `-Transfer, sale and lease of intellectual property;`,
          `-Digital services;`,
         `- Gaming activities`,
         `- Any other income generating activity.`,

        ],
        // French and Kinyarwanda can be filled progressively.
        // If these are empty, the page falls back to English.
        fr: [],
        rw: [],
      },
    },
    section('income-tax-registration', 'Income tax Registration'),
    section('income-tax-categories', 'Income tax categories'),
    section('income-tax-regimes', 'Income Tax regimes'),
    section('income-quarterly-prepayments', 'Income Quarterly Prepayments (IQP)'),
    section(
      'declaring-flat-tax-lump-sum-and-iqp-income-tax-using-m-declaration',
      'Declaring Flat Tax, Lump Sum and IQP Income Tax using M-Declaration',
    ),
    section('step-by-step-declaration-guide', 'Step by step declaration guide'),
  ],
  lastUpdated: centralTaxLastUpdated,
};
