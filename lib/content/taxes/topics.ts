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
      en: 'Income Tax is a tax on income resulting from business, self-employment and investment activities. Income Tax ensures that all businesses benefiting from Rwanda’s infrastructure, security and prosperity contribute their fair share towards the nation’s development.',
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
      en: 'PAYE is a tax on employment income. It is withheld by employers on behalf of their employees for efficient collection. Find more details here.',
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
      en: 'VAT is a tax on the consumption of goods and services. It is indirectly paid by the final consumer of the goods or service. However, it is paid on their behalf by taxpayers.',
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
      en: 'Withholding taxes are paid on transactions on particular types of income. They are declared and paid by the taxpayer who is the source of the transaction, but on behalf of the recipient.',
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
      en: 'Excise Duty is a tax applied to specific products. This means that it is able to discourage consumption with negative social impacts.',
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
      en: 'Capital Gains Tax applies to the profit from the sale or transfer of shares, licenses, debt instruments, options, guarantees and similar assets.',
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
      en: 'Gaming taxes includes Gaming Tax and Withholding Tax of 25% on Gambling Proceeds, also referred to as Withholding on Payments (WOP) on Gaming or ‘WOP-Gaming’. These taxes are applied on the proceeds of gambling activities and can therefore help to reduce the negative social impacts associated with gambling.',
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
      en: 'Mining Royalty Tax is a tax withheld from local mining operators by either a domestic mineral processing facility or an individual/entity exporting minerals from Rwanda.',
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
      en: 'Road Maintenance Levy is a tax imposed on petrol, gas oil, and motor vehicles to fund road maintenance.',
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
      en: 'Tourism Tax is a levy paid on accommodation service, which consists of providing a room or place to sleep or rest. .',
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
      en: 'Taxes and fees levied by decentralised entities and collected by RRA on behalf of district authorities.',
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
    relatedSlugs: [
      'immovable-property-tax',
      'tax-on-sale-of-immovable-property',
      'trading-license',
      'rental-income-tax',
    ],
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
  {
    slug: 'rental-income-tax',
    category: 'local-government',
    title: { en: 'Rental Income Tax' },
    summary: {
      en: 'Rental Income Tax is a tax levied on income generated from rented land and buildings.',
    },
    sections: [
      {
        id: 'overview',
        title: { en: 'Overview' },
        content: {
          en: ['Rental income tax content will be migrated from the handbook.'],
        },
      },
    ],
    relatedSlugs: ['immovable-property-tax', 'local-government-taxes'],
  },
  {
    slug: 'fees-levied-by-decentralized-entities',
    category: 'local-government',
    title: { en: 'Fees Levied by Decentralized entities' },
    summary: {
      en: 'Fees levied on services and certificates delivered by decentralised entities.',
    },
    sections: [
      {
        id: 'overview',
        title: { en: 'Overview' },
        content: {
          en: ['Fees levied by decentralized entities content will be migrated from the handbook.'],
        },
      },
    ],
    relatedSlugs: ['local-government-taxes'],
  },
  {
    slug: 'domestic-tax-penalties-and-fines',
    category: 'local-government',
    title: { en: 'Domestic Tax penalties and fines' },
    summary: {
      en: 'Penalties and fines for late, missing, or incorrect domestic tax declarations and payments.',
    },
    sections: [
      {
        id: 'overview',
        title: { en: 'Overview' },
        content: {
          en: ['Domestic tax penalties and fines content will be migrated from the handbook.'],
        },
      },
    ],
    relatedSlugs: ['local-government-taxes'],
  },
  {
    slug: 'domestic-tax-centers',
    category: 'local-government',
    title: { en: 'Domestic Tax Centers' },
    summary: {
      en: 'Domestic Tax Centres support registration, declaration, and taxpayer services.',
    },
    sections: [
      {
        id: 'overview',
        title: { en: 'Overview' },
        content: {
          en: ['Domestic tax center content will be migrated from the handbook.'],
        },
      },
    ],
    relatedSlugs: ['local-government-taxes'],
  },
  {
    slug: 'customs-taxes',
    category: 'domestic',
    title: { en: 'Customs Taxes' },
    summary: {
      en: 'Customs duties are taxes, duties, levies and fees paid on imported or exported goods.',
    },
    sections: [
      {
        id: 'overview',
        title: { en: 'Overview' },
        content: {
          en: ['Customs taxes content will be migrated from the handbook.'],
        },
      },
    ],
    relatedSlugs: ['domestic-taxes'],
  },
]
