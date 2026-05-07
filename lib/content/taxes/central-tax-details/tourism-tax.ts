import {
  centralTaxLastUpdated,
  type CentralTaxDetailPage,
} from "@/lib/content/taxes/central-tax-details/shared"

export const tourismTaxDetail: CentralTaxDetailPage = {
  slug: "tourism-tax",
  title: {
    en: "Tourism Tax",
    fr: "Taxe touristique",
    rw: "Umusoro ku bukerarugendo",
  },
  intro: {
    en: [
      "Tourism Tax is a levy paid on accommodation service, which consists of providing a room or place to sleep or rest.",
    ],
  },
  sections: [
    {
      id: "obligations",
      title: { en: "Obligations", fr: "Obligations", rw: "Inshingano" },
      content: {
        en: [
          "A provider of a room or place to sleep or rest has the following obligations:",
          "<ul><li>Register for tourism tax on accommodation with the Tax Administration.</li><li>Charge tourism tax on accommodation.</li><li>Remit tourism tax on accommodation to the Tax Administration within the period provided by law.</li></ul>",
        ],
      },
    },
    {
      id: "registration",
      title: { en: "Registration", fr: "Registration", rw: "Kwiyandikisha" },
      content: {
        en: [
          "The taxpayer offering accommodation services has to register the property type through the e-Tax portal.",
          "<ol><li>Go to the e-Tax portal and log in.</li><li>Go to Update details.</li><li>Click Tourism property.</li><li>Select Tourism Property from the list of values.</li><li>Select property type and room type.</li><li>Fill in the number of rooms.</li><li>Tick ownership.</li><li>Click Add Property to submit the updated tourism property details.</li></ol>",
        ],
      },
    },
    {
      id: "tax-rates",
      title: { en: "Tax rates", fr: "Taux d'imposition", rw: "Ibipimo by'umusoro" },
      content: {
        en: [
          "The rate of tourism tax on accommodation is 3% of the amount paid or payable for accommodation, exclusive of Value Added Tax.",
        ],
      },
    },
    {
      id: "declaration",
      title: { en: "Declaration", fr: "Declaration", rw: "Kumenyekanisha" },
      content: {
        en: [
          "The declaration process for Tourism Tax is the same as for other taxes. The Tourism tab must be completed, validated, and saved as normal.",
          "The Tourism Tax declaration form is selected by choosing Tourism Tax. Complete the declaration form, upload the annexure, and submit the declaration as normal.",
          "A taxpayer who provides accommodation services must fill a Tourism Tax tab available in the e-Tax system. Each row is for a separate accommodation transaction.",
          "For each transaction, enter details such as property type, room type, client name or code, room number, booking date, check-in date, check-out date, nationality, country of residence, invoice number, days spent in the room, room price per night, invoice amount without VAT, accommodation amount excluding VAT, and tax due.",
        ],
      },
    },
  ],
  lastUpdated: centralTaxLastUpdated,
}
