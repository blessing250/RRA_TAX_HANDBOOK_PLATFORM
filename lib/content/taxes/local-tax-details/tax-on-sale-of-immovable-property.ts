import {
  localTaxLastUpdated,
  type LocalTaxDetailPage,
} from "@/lib/content/taxes/local-tax-details/shared"

export const taxOnSaleOfImmovablePropertyDetail: LocalTaxDetailPage = {
  slug: "tax-on-sale-of-immovable-property",
  title: {
    en: "Tax on sale of immovable property",
    fr: "Impot sur la vente de biens immobiliers",
    rw: "Umusoro ku igurishwa ry'umutungo utimukanwa",
  },
  intro: {
    en: [
      "This tax is levied on the balance of the sale value of the property after deduction of FRW 5,000,000 which is not subject to tax.",
    ],
  },
  sections: [
    {
      id: "tax-rates",
      title: { en: "Tax rates", fr: "Taux d'imposition", rw: "Ibipimo by'umusoro" },
      content: {
        en: [
          "Tax on sale of immovable property is levied according to the following rates and modalities:",
          {
            type: "table",
            headers: ["Seller or property type", "Rate"],
            rows: [
              ["Commercial immovable property sold by a taxpayer registered for income tax", "2% of sale value after deducting FRW 5,000,000"],
              ["Immovable property sold by a person not registered for income tax", "2.5% of sale value after deducting FRW 5,000,000"],
            ],
          },
        ],
      },
    },
    {
      id: "tax-period",
      title: { en: "Tax period", fr: "Periode fiscale", rw: "Igihe cy'umusoro" },
      content: {
        en: [
          "There is no specific tax period for tax on sale of immovable property. This tax is due on transfer of a property between seller and buyer.",
          "<blockquote><p><strong>Example</strong>: ABC Ltd, an income tax registered taxpayer, sold a commercial building at FRW 60,000,000.</p><p>The tax due is (FRW 60,000,000 - FRW 5,000,000) * 2% = FRW 1,100,000.</p></blockquote>",
          "<blockquote><p><strong>Example</strong>: Ihirwe, a resident of Gasabo district, sold a residential building at FRW 10,000,000.</p><p>The tax due is (FRW 10,000,000 - FRW 5,000,000) * 2.5% = FRW 125,000.</p></blockquote>",
        ],
      },
    },
  ],
  lastUpdated: localTaxLastUpdated,
}
