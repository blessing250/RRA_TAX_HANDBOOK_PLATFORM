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
      `This tax is levied on the balance of the sale value of the property after deduction of FRW 5,000,000 which is not subject to tax.`,
    ],
  },
  sections: [
    {
      id: "tax-rates",
      title: { en: "Tax rates", fr: "Taux d'imposition", rw: "Ibipimo by'umusoro" },
      content: {
        en: [
          ` There is established a tax on sale of immovable property levied in accordance with the following rates and modalities:`,
          `<ul`,
             `• A rate of 2% is levied on the sale value of an immovable property for commercial use if the seller is a taxpayer registered for income tax`,
              `• Rate of 2.5% is levied on the sale value of an immovable property sold by a person not registered for income tax`,

        ],
      },
    },
    {
      id: "tax-period",
      title: { en: "Tax period", fr: "Periode fiscale", rw: "Igihe cy'umusoro" },
      content: {
        en: [
        `There is no specific tax period for a tax on sale of immovable property. This tax is due on transfer of a property between seller and buyer.`,
        `<i><strong>Example</strong></i>`,
          `<i> ABC Ltd, an income tax registered taxpayer sold a commercial building at FRW 60,000,000. The tax on sale of Immovable Property to be paid is (FRW 60,000,000 – FRW 5,000,000) * 2% = FRW 1,100,000. Example 71: Ihirwe, a resident of Gasabo district sold his residential building at FRW 10,000,000. The tax on sale of Immovable Property to be paid is (FRW 10,000,000 – FRW 5,000,000) * 2.5% = FRW 125,000.</i>`,


        ],
      },
    },
  ],
  lastUpdated: localTaxLastUpdated,
}
