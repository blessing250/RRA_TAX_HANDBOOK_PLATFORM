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
          'Taxable income includes income from business, self-employment, and investment activities.',
          'You can replace these example paragraphs with the final handbook content.',
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
