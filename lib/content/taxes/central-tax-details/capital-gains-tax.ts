import {
  centralTaxLastUpdated,
  section,
  type CentralTaxDetailPage,
} from "@/lib/content/taxes/central-tax-details/shared"

export const capitalGainsTaxDetail: CentralTaxDetailPage = {
  slug: "capital-gains-tax",
  title: { en: "Capital Gains Tax", fr: "Impot sur les gains en capital", rw: "Umusoro ku nyungu z'umutungo" },
  intro: {
    en: [
      "Capital Gains Tax applies to gains arising from qualifying disposals according to Rwanda's tax laws.",
      "This tax guidance explains registration, tax rates and declaration obligations for relevant taxpayers.",
    ],
  },
  sections: [
    section("registration", "Registration"),
    section("tax-rates", "Tax rates"),
    section("declaration", "Declaration"),
  ],
  lastUpdated: centralTaxLastUpdated,
}
