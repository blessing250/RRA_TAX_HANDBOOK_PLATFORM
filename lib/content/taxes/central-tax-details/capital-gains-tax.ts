import {
  centralTaxLastUpdated,
  type CentralTaxDetailPage,
} from "@/lib/content/taxes/central-tax-details/shared"

export const capitalGainsTaxDetail: CentralTaxDetailPage = {
  slug: "capital-gains-tax",
  title: {
    en: "Capital Gains Tax",
    fr: "Impot sur les gains en capital",
    rw: "Umusoro ku nyungu z'umutungo",
  },
  intro: {
    en: [
      "Capital Gains Tax applies to the profit from the sale or transfer of shares, licenses, debt instruments, options, guarantees, and similar assets.",
      "Capital Gains Tax ensures that shareholders pay tax on the income gained at the point of sale of these assets.",
    ],
  },
  sections: [
    {
      id: "registration",
      title: { en: "Registration", fr: "Registration", rw: "Kwiyandikisha" },
      content: {
        en: [
          "The tax on profit from the sale of shares is withheld, declared, and paid by the company whose shares were sold.",
        ],
      },
    },
    {
      id: "tax-rates",
      title: { en: "Tax rates", fr: "Taux d'imposition", rw: "Ibipimo by'umusoro" },
      content: {
        en: [
          "The tax rate of Capital Gains Tax is 10%. This is charged on the basis of the profit from the sale of shares, licenses, debt instruments, options, guarantees, and similar assets.",
          "Profit equals sale price minus purchase price.",
        ],
      },
    },
    {
      id: "declaration",
      title: { en: "Declaration", fr: "Declaration", rw: "Kumenyekanisha" },
      content: {
        en: [
          "Capital Gains Tax must be declared and paid by the 15th of the month after the transaction was made.",
          "Because Capital Gains Tax is declared on a case-by-case basis, companies do not have to wait for the deadline to declare and pay. It is recommended to declare and pay Capital Gains Tax as soon as possible after making the transaction.",
          "The declaration process for Capital Gains Tax is the same as for other withholding taxes. The Withholdings tab of the withholding annexure must be completed, validated, and saved as normal.",
          "The Capital Gains declaration form is selected by choosing WOP - CAPITAL GAINS. Complete the declaration form, upload the annexure, and submit the declaration as normal.",
          "<blockquote><p><strong>Example</strong>: A share sold at FRW 150,000 was acquired at FRW 140,000. This attracts withholding tax of 10% on the increase in value of shares sold.</p><p>(FRW 150,000 - FRW 140,000) * 10% = FRW 1,000.</p></blockquote>",
        ],
      },
    },
  ],
  lastUpdated: centralTaxLastUpdated,
}
