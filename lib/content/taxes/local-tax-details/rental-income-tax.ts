import {
  localTaxLastUpdated,
  type LocalTaxDetailPage,
} from "@/lib/content/taxes/local-tax-details/shared"

export const rentalIncomeTaxDetail: LocalTaxDetailPage = {
  slug: "rental-income-tax",
  title: {
    en: "Rental Income Tax",
    fr: "Impot sur les revenus locatifs",
    rw: "Umusoro ku bukode",
  },
  intro: {
    en: [
      "Rental Income Tax is a tax levied on the income generated from rented land and buildings. The land and buildings are referred to as immovable property, and Rental Income Tax must be declared and paid on rented immovable properties in addition to Immovable Property Tax.",
    ],
  },
  sections: [
    {
      id: "registration",
      title: { en: "Registration", fr: "Registration", rw: "Kwiyandikisha" },
      content: {
        en: [
          "Any person or business that is not subject to corporate income tax and receives income from rented immovable property located in Rwanda is required to register for Rental Income Tax.",
        ],
      },
    },
    {
      id: "taxable-income-for-rental-income-tax",
      title: { en: "Taxable income for Rental Income Tax", fr: "Revenu locatif imposable", rw: "Inyungu y'ubukode isoreshwa" },
      content: {
        en: [
          "Rental Income Tax is not charged on total gross rental income. It allows deductions for expenses to encourage landlords to provide quality and well-maintained properties.",
          "There are two methods of calculating taxable income, depending on whether the taxpayer has loans related to the rented immovable property.",
          {
            type: "table",
            headers: ["Situation", "Taxable income formula"],
            rows: [
              ["No loan related to the immovable property", "Gross rental income * 50%"],
              ["Loan related to the immovable property", "Gross rental income * 50% - interest paid"],
            ],
          },
        ],
      },
    },
    {
      id: "rental-income-tax-rates",
      title: { en: "Rental Income Tax rates", fr: "Taux de l'impot locatif", rw: "Ibipimo by'umusoro ku bukode" },
      content: {
        en: [
          "Rental Income Tax is progressive. Different tax rates apply depending on taxable rental income.",
          {
            type: "table",
            headers: ["Annual taxable income", "Marginal tax rate"],
            rows: [
              ["Below FRW 180,000", "0%"],
              ["FRW 180,001 - FRW 1,000,000", "20%"],
              ["Above FRW 1,000,001", "30%"],
            ],
          },
          "The rates are marginal. The first FRW 180,000 is taxed at 0%, the next FRW 820,000 is taxed at 20%, and any remaining income is taxed at 30%.",
          "<blockquote><p><strong>Example</strong>: Lucie receives gross rental income of FRW 4,800,000 and has no bank loan for the house. Her taxable income is FRW 4,800,000 * 50% = FRW 2,400,000.</p><p>Rental Income Tax due is (FRW 180,000 * 0%) + (FRW 820,000 * 20%) + (FRW 1,400,000 * 30%) = FRW 584,000.</p></blockquote>",
          "<blockquote><p><strong>Example</strong>: Rukundo receives gross rental income of FRW 4,800,000 and paid FRW 400,000 in bank interest for the house. His taxable income is FRW 4,800,000 * 50% - FRW 400,000 = FRW 2,000,000.</p><p>Rental Income Tax due is (FRW 180,000 * 0%) + (FRW 820,000 * 20%) + (FRW 1,000,000 * 30%) = FRW 464,000.</p></blockquote>",
        ],
      },
    },
    {
      id: "declaration",
      title: { en: "Declaration", fr: "Declaration", rw: "Kumenyekanisha" },
      content: {
        en: [
          "Rental Income Tax is declared and paid annually. The tax period is the calendar year, from 1 January until 31 December.",
          "The deadline to declare and pay Rental Income Tax is 31 January of the following year.",
          "<blockquote><p><strong>Example</strong>: Lucie must declare and pay her annual Rental Income Tax declaration for the 2019 tax period, from 1 January 2019 until 31 December 2019, by 31 January 2020.</p></blockquote>",
        ],
      },
    },
    {
      id: "rental-contracts",
      title: { en: "Rental contracts", fr: "Contrats de location", rw: "Amasezerano y'ubukode" },
      content: {
        en: [
          "The taxpayer is required to submit the rental contract, signed by the taxpayer and tenant, to RRA within fifteen days of the date the contract was signed.",
          "If the rental contract is amended or terminated, the taxpayer must notify RRA within fifteen days and submit the amended contract.",
          "Tenants are not obliged to submit the rental contract. However, tenants can help ensure landlord tax compliance by submitting rental contracts to RRA at any time. Rental contracts can be submitted by the tenant to any RRA office or tax centre.",
        ],
      },
    },
  ],
  lastUpdated: localTaxLastUpdated,
}
