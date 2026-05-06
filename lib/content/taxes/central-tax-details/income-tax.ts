import {
  centralTaxLastUpdated,
  type CentralTaxDetailPage,
} from '@/lib/content/taxes/central-tax-details/shared';

export const incomeTaxDetail: CentralTaxDetailPage = {
  slug: 'income-tax',
  title: {
    en: 'Income Tax',
    fr: 'Impot sur le revenu',
    rw: 'Umusoro ku nyungu',
  },
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
          'Taxable income includes all income sourced in Rwanda resulting from business, employment or investment activities, and activities performed abroad by a resident of Rwanda. This includes:',
          '<ul><li>Services and employment.</li><li>Activities of a craftsperson, singer, artist, or player.</li><li>Sports, cultural, and leisure activities.</li><li>Activities carried out by a non-resident in Rwanda through a permanent establishment in Rwanda.</li><li>Use, sale, lease, and free transfer of business movable assets.</li><li>Sale, lease, and free transfer of immovable assets allocated to the business.</li><li>Agricultural, fishing, and forestry activities.</li><li>Usufruct and other rights attached to immovable assets and their sale, if such rights are allocated to the business.</li><li>Investments in shares of companies.</li><li>Direct or indirect sale or transfer of shares or debentures.</li><li>Distribution of profits among partners.</li><li>Lending, deposits, and other similar income-generating activities.</li><li>Transfer, sale, and lease of intellectual property.</li><li>Digital services.</li><li>Gaming activities.</li><li>Any other income-generating activity.</li></ul>',
        ],
      },
    },
    {
      id: 'income-tax-registration',
      title: {
        en: 'Income tax registration',
        fr: "Enregistrement de l'impot sur le revenu",
        rw: 'Kwiyandikisha ku musoro ku nyungu',
      },
      content: {
        en: [
          'Taxpayers must register their businesses with RDB within seven days of beginning taxable activities or establishing the company. Taxpayers are automatically registered for income tax when their business registration has been approved by the Rwanda Development Board (RDB).',
        ],
      },
    },
    {
      id: 'income-tax-categories',
      title: {
        en: 'Income tax categories',
        fr: "Categories d'impot sur le revenu",
        rw: "Ibyiciro by'umusoro ku nyungu",
      },
      content: {
        en: [
          'These include Personal Income Tax (PIT), Corporate Income Tax (CIT), and income tax for vehicles transporting persons and goods.',
          '<strong>1. Personal Income Tax (PIT)</strong>',
          "PIT is for individual traders and unincorporated businesses. Personal Income Tax is levied on an individual's annual income.",
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
          'It is important to note that these tax rates are marginal. This means that for each Real Regime PIT taxpayer each year, the first FRW 720,000 that they earn is taxed at 0%, the next FRW 480,000 is taxed at 10%, the next FRW 1,200,000 is taxed at 20%, and any remaining income is taxed at 30%.',
          '<blockquote><p><strong>Example 15</strong>: Amahora is the owner of a supermarket. Her annual turnover between January 1 and December 31 was FRW 62,000,000. Her deductible expenses, depreciation, and allowances total FRW 54,000,000.</p><p><strong>Her annual taxable profit is therefore:</strong><br/>FRW 62,000,000 - FRW 54,000,000 = FRW 8,000,000</p><p><strong>Her annual Real Regime PIT due is:</strong><br/>(FRW 720,000 * 0%) + (FRW 480,000 * 10%) + (FRW 1,200,000 * 20%) + (FRW 6,800,000 * 30%) = FRW 1,968,000</p></blockquote>',
        ],
      },
    },
    {
      id: 'income-tax-regimes',
      title: {
        en: 'Income Tax regimes',
        fr: "Regimes d'impot sur le revenu",
        rw: 'Uburyo bwo gutanga umusoro ku nyungu',
      },
      content: {
        en: [
          '<strong>1. Personal Income Tax (PIT)</strong>',
          'PIT is for individual traders and unincorporated businesses. The personal income tax is levied on an individual annual income.',
          '<strong>PIT brackets</strong>',
          'The tax rate for PIT is progressive, as shown below:',
          {
            type: 'table',
            headers: ['Annual turnover', 'Annual tax due'],
            rows: [
              ['FRW 2,000,000 - FRW 4,000,000', 'FRW 60,000'],
              ['FRW 4,000,001 - FRW 7,000,000', 'FRW 120,000'],
              ['FRW 7,000,001 - FRW 10,000,000', 'FRW 210,000'],
              ['FRW 10,000,001 - FRW 12,000,000', 'FRW 300,000'],
            ],
          },
          'It is important to note that these tax rates are marginal. This means that for each Real Regime PIT taxpayer each year, the first FRW 720,000 that they earn is taxed at 0%, the next FRW 480,000 is taxed at 10%, the next 1,200,000 is taxed at 20% and any remaining income is taxed at 30%.',

          `<strong>  1. Personal Income Tax (PIT)</strong>`,
          `PIT is for individual traders and unincorporated businesses. The personal income tax is levied on an individual annual income. (check for proper definition)`,
          `<strong> PIT brackets</strong>`,
          `The tax rate for PIT is progressive, as shown below:`,
        ],
      },
    },
  ],
  lastUpdated: centralTaxLastUpdated,
};
