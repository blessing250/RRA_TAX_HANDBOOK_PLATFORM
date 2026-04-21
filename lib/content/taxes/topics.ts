import type { HandbookTopic } from '@/lib/types/handbook';

export const taxTopics: HandbookTopic[] = [
  {
    slug: 'central-government-taxes',
    category: 'central-government',
    title: { en: 'Central government taxes' },
    summary: {
      en: 'Taxes administered at national level, including income tax, VAT, excise duty, and withholding taxes.',
    },
    sections: [
      {
        id: 'covered-taxes',
        title: { en: 'Covered taxes' },
        content: {
          en: [
            'Central government taxes include several major tax types administered nationally.',
            'Each tax topic has a dedicated page with definitions, rates, obligations, and filing guidance.',
          ],
        },
      },
    ],
    relatedSlugs: ['income-tax', 'value-added-tax', 'excise-duty'],
  },
  {
    slug: 'domestic-taxes',
    category: 'domestic',
    title: { en: 'Domestic taxes' },
    summary: {
      en: 'Domestic tax obligations and administrative guidance for taxpayers operating in Rwanda.',
    },
    sections: [
      {
        id: 'overview',
        title: { en: 'Overview' },
        content: {
          en: [
            'Domestic taxes cover obligations for residents, businesses, employers, and other taxpayers.',
          ],
        },
      },
    ],
    relatedSlugs: ['income-tax', 'pay-as-you-earn', 'value-added-tax'],
  },
  {
    slug: 'income-tax',
    category: 'central-government',
    title: { en: 'Income Tax' },
    summary: {
      en: 'Income tax guidance for individuals, companies, and other taxable persons.',
    },
    sections: [
      {
        id: 'who-pays',
        title: { en: 'Who pays income tax?' },
        content: {
          en: [
            "Income tax applies to taxable income according to the rules provided in Rwanda's tax laws.",
            'Detailed taxpayer categories, exemptions, and computation rules will be migrated from the handbook.',
          ],
        },
      },
      {
        id: 'declaration',
        title: { en: 'Declaration and payment' },
        content: {
          en: [
            'This section will summarize declaration obligations, deadlines, and payment procedures.',
          ],
        },
      },
    ],
    relatedSlugs: ['pay-as-you-earn', 'withholding-taxes'],
  },
  {
    slug: 'pay-as-you-earn',
    category: 'central-government',
    title: { en: 'Pay As You Earn (PAYE)' },
    summary: {
      en: 'Employer withholding obligations on employment income.',
    },
    sections: [
      {
        id: 'overview',
        title: { en: 'Overview' },
        content: {
          en: [
            'PAYE is withheld by employers from employment income and remitted according to applicable rules.',
          ],
        },
      },
    ],
    relatedSlugs: ['income-tax', 'withholding-taxes'],
  },
  {
    slug: 'value-added-tax',
    category: 'central-government',
    title: { en: 'Value Added Tax (VAT)' },
    summary: {
      en: 'VAT registration, taxable supplies, returns, and payment guidance.',
    },
    sections: [
      {
        id: 'overview',
        title: { en: 'Overview' },
        content: {
          en: [
            'VAT applies to taxable supplies according to registration and filing requirements in the handbook.',
          ],
        },
      },
    ],
    relatedSlugs: ['excise-duty', 'income-tax'],
  },
  {
    slug: 'withholding-taxes',
    category: 'central-government',
    title: { en: 'Withholding taxes' },
    summary: {
      en: 'Withholding tax obligations, rates, declarations, and payment responsibilities.',
    },
    sections: [
      {
        id: 'overview',
        title: { en: 'Overview' },
        content: {
          en: [
            'Withholding taxes are deducted at source and remitted by responsible withholding agents.',
          ],
        },
      },
    ],
    relatedSlugs: ['income-tax', 'pay-as-you-earn'],
  },
  {
    slug: 'excise-duty',
    category: 'central-government',
    title: { en: 'Excise Duty' },
    summary: {
      en: 'Excise duty on selected goods and services, including declaration and payment requirements.',
    },
    sections: [
      {
        id: 'overview',
        title: { en: 'Overview' },
        content: {
          en: [
            'Excise duty applies to specified products and services under the applicable tax laws.',
          ],
        },
      },
    ],
    relatedSlugs: ['value-added-tax', 'gaming-taxes'],
  },
  {
    slug: 'capital-gains-tax',
    category: 'central-government',
    title: { en: 'Capital Gains Tax' },
    summary: {
      en: 'Tax treatment of gains arising from qualifying disposals.',
    },
    sections: [
      {
        id: 'overview',
        title: { en: 'Overview' },
        content: {
          en: ['Capital gains tax guidance will be completed from the handbook source material.'],
        },
      },
    ],
    relatedSlugs: ['tax-on-sale-of-immovable-property'],
  },
  {
    slug: 'gaming-taxes',
    category: 'central-government',
    title: { en: 'Gaming taxes' },
    summary: {
      en: 'Tax obligations related to gaming activities.',
    },
    sections: [
      {
        id: 'overview',
        title: { en: 'Overview' },
        content: {
          en: ['Gaming tax details will be migrated from the handbook.'],
        },
      },
    ],
    relatedSlugs: ['excise-duty'],
  },
  {
    slug: 'mining-royalty-tax',
    category: 'central-government',
    title: { en: 'Mining Royalty Tax' },
    summary: {
      en: 'Royalty tax guidance for mining activities.',
    },
    sections: [
      {
        id: 'overview',
        title: { en: 'Overview' },
        content: {
          en: ['Mining royalty tax content will be migrated from the handbook.'],
        },
      },
    ],
  },
  {
    slug: 'road-maintenance-levy',
    category: 'central-government',
    title: { en: 'Road Maintenance Levy' },
    summary: {
      en: 'Levy information related to road maintenance funding.',
    },
    sections: [
      {
        id: 'overview',
        title: { en: 'Overview' },
        content: {
          en: ['Road maintenance levy content will be migrated from the handbook.'],
        },
      },
    ],
  },
  {
    slug: 'tourism-tax',
    category: 'central-government',
    title: { en: 'Tourism Tax' },
    summary: {
      en: 'Tax guidance related to tourism services and activities.',
    },
    sections: [
      {
        id: 'overview',
        title: { en: 'Overview' },
        content: {
          en: ['Tourism tax content will be migrated from the handbook.'],
        },
      },
    ],
  },
  {
    slug: 'local-government-taxes',
    category: 'local-government',
    title: { en: 'Local Government Taxes (LGT)' },
    summary: {
      en: 'Taxes administered by local government entities.',
    },
    sections: [
      {
        id: 'overview',
        title: { en: 'Overview' },
        content: {
          en: ['Local government tax content will be migrated from the handbook.'],
        },
      },
    ],
    relatedSlugs: ['immovable-property-tax', 'trading-license'],
  },
  {
    slug: 'immovable-property-tax',
    category: 'local-government',
    title: { en: 'Immovable Property Tax' },
    summary: {
      en: 'Tax obligations on immovable property.',
    },
    sections: [
      {
        id: 'overview',
        title: { en: 'Overview' },
        content: {
          en: ['Immovable property tax content will be migrated from the handbook.'],
        },
      },
    ],
    relatedSlugs: ['tax-on-sale-of-immovable-property', 'local-government-taxes'],
  },
  {
    slug: 'tax-on-sale-of-immovable-property',
    category: 'local-government',
    title: { en: 'Tax on sale of immovable property' },
    summary: {
      en: 'Tax treatment for sales of immovable property.',
    },
    sections: [
      {
        id: 'overview',
        title: { en: 'Overview' },
        content: {
          en: ['Tax on sale of immovable property content will be migrated from the handbook.'],
        },
      },
    ],
    relatedSlugs: ['immovable-property-tax', 'capital-gains-tax'],
  },
  {
    slug: 'trading-license',
    category: 'local-government',
    title: { en: 'Trading license' },
    summary: {
      en: 'Trading license obligations and local government requirements.',
    },
    sections: [
      {
        id: 'overview',
        title: { en: 'Overview' },
        content: {
          en: ['Trading license content will be migrated from the handbook.'],
        },
      },
    ],
    relatedSlugs: ['local-government-taxes'],
  },
]
