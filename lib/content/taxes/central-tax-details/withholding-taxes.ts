import {
  centralTaxLastUpdated,
  section,
  type CentralTaxDetailPage,
} from "@/lib/content/taxes/central-tax-details/shared"

export const withholdingTaxesDetail: CentralTaxDetailPage = {
  slug: "withholding-taxes",
  title: { en: "Withholding Taxes", fr: "Retenues a la source", rw: "Imisoro ifatirwa" },
  intro: {
    en: [
      "Withholding taxes are paid on transactions on particular types of income. They are declared and paid by the taxpayer who is the source of the transaction, but on behalf of the recipient.",
      "The recipient is then able to claim the tax paid back in their Income Tax declarations.",
      "Withholding taxes ensure compliance by withholding tax on sources of income that might otherwise be difficult to trace. This increases the fairness of the tax system.",
    ],
  },
  sections: [
    section("types-of-withholding-taxes", "Types of withholding taxes"),
    section("registration", "Registration"),
    section("calculation", "Calculation"),
    section("declaration", "Declaration"),
    section("penalties-and-fines", "Penalties and fines"),
  ],
  lastUpdated: centralTaxLastUpdated,
}
