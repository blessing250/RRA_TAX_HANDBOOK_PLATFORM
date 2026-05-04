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
        en: [
          'Taxable income includes all income sourced in Rwanda resulting from business, employment or investment activities and activities performed abroad by a resident of Rwanda. This includes;',
          '-services and employment;',
          '-activities of a crafts person, singer, artist and a player;',
          '-Sports, cultural and leisure activities;',
          '-Activities carried out by a non-resident in Rwanda through a permanent establishment in Rwanda;',
          '-Use, sale, lease and free transfer of business movable assets;',
          '-Sale, lease and free transfer of immovable assets allocated to the business;',
          '-Agricultural, fishing and forestry activities;',
          '-Usufruct and other rights attached to immovable assets and their sale if such rights are allocated to the business;',
          '-Investments in shares of companies;',
          '-Direct or indirect sale or transfer of shares or debentures;',
          '-Distribution of profits among partners;',
          '-Lending, deposits and other similar income-generating activities;',
          '-Transfer, sale and lease of intellectual property;',
          '-Digital services;',
          '-Gaming activities;',
          '-Any other income generating activity.',
        ],
      },
    },
    {
      id: 'income-tax-registration',
      title: {
        en: 'Income tax Registration',
        fr: "Enregistrement de l'impot sur le revenu",
        rw: 'Iyandikishirizwa ry’umusoro ku nyungu',
      },
      content: {
        en: [
          'Taxpayers must register their businesses with RDB within seven days of beginning taxable activities or establishing the company. Taxpayers are automatically registered on income tax when their business registration has been approved by the Rwanda Development Board (RDB).',
        ],
      },
    },
    // section('income-tax-categories', 'Income tax categories'),
    {
      id: 'income-tax-categories',
      title: {
        en: 'Income tax categories',
        fr: 'Catégories d’impôt sur le revenu',
      },
      content: {
        en: [
          'These include; Personal Income Tax (PIT), Corporate Income Tax (CIT) and Income tax for vehicles transporting persons and goods.',
          '<strong>1. Personal Income Tax (PIT)</strong>',
          'PIT is for individual traders and unincorporated businesses. The personal income tax is levied on an individual annual income.',
          '<strong>PIT brackets</strong>',
          'The tax rate for PIT is progressive, as shown below:',
          {
            type: 'table',
            headers: ['Annual taxable income (profit)', 'Marginal PIT Rate'],
            rows: [
              ['FRW 0 - FRW 720,000', '0%'],
              ['FRW 720,001 - FRW 1,200,000', '10%'],
              ['FRW 1,200,001 - FRW 2,400,000', '20%'],
              ['Above FRW 2,400,000', '30%'],
            ],
          },
          'It is important to note that these tax rates are marginal. This means that for each Real Regime PIT taxpayer each year, the first FRW 720,000 that they earn is taxed at 0%, the next FRW 480,000 is taxed at 10%, the next 1,200,000 is taxed at 20% and any remaining income is taxed at 30%.',
        ],
      },
    },
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
