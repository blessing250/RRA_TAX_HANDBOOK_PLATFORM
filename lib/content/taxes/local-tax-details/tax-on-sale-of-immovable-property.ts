import {
  localTaxLastUpdated,
  section,
  type LocalTaxDetailPage,
} from "@/lib/content/taxes/local-tax-details/shared"

export const taxOnSaleOfImmovablePropertyDetail: LocalTaxDetailPage = {
  slug: "tax-on-sale-of-immovable-property",
  title: {
    en: "Tax on sale of immovable Property",
    fr: "Impot sur la vente de biens immobiliers",
    rw: "Umusoro ku igurishwa ry'umutungo utimukanwa",
  },
  intro: {
    en: [
      "This tax is levied on the balance of the sale value of the property after deduction of FRW 5,000,000 which is not subject to tax.",
    ],
  },
  sections: [
    section("tax-rates", "Tax rates"),
    section("tax-period", "Tax period"),
  ],
  lastUpdated: localTaxLastUpdated,
}
