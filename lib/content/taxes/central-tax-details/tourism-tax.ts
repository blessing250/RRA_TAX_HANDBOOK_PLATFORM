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
      `Tourism Tax is a levy paid on accommodation service, which consists of providing a room or place to sleep or rest.	`,
    ],
  },
  sections: [
    {
      id: "obligations",
      title: { en: "Obligations", fr: "Obligations", rw: "Inshingano" },
      content: {
        en: [
         `A provider of room or place to sleep or rest has the following obligations:`,
          `<ul>`,
             `• To register for the tourism tax on accommodation with the Tax Administration.`,
            `• To charge the tourism tax on accommodation.`,
            `• To remit the tourism tax on accommodation to the Tax Administration within the time period provided for by the Law. `,
          `</ul>`,
        ],
      },
    },
    {
      id: "registration",
      title: { en: "Registration", fr: "Registration", rw: "Kwiyandikisha" },
      content: {
        en: [
          `The taxpayer offering accommodation services has to register the property type. This is done using the following steps:`,
          `<ol>`,
              `•  Go to E-Tax portal and login`,
              `• Go to Update details`,
              `• Click on Tourism property`,
              `• Select Tourism Property from the list of value`,
              `• Select Property Type`,
              `• Select Room type`,
              `• Fill Number of rooms`,
              `• Tick Ownership`,
              `• Click the "Add Property" button to submit the updated tourism property details`,
          `</ol>`,
        ],
      },
    },
    {
      id: "tax-rates",
      title: { en: "Tax rates", fr: "Taux d'imposition", rw: "Ibipimo by'umusoro" },
      content: {
        en: [
       ` The rate of the tourism tax on accommodation is set at 3% of the amount paid or payable for accommodation, exclusive of value added tax.`,
        ],
      },
    },
    {
      id: "declaration",
      title: { en: "Declaration", fr: "Declaration", rw: "Kumenyekanisha" },
      content: {
        en: [
         `The declaration process for Tourism Tax is the same as for other Taxes. The ‘Tourism’ tab must be completed, validated and saved as normal.`,
        `The Tourism Tax declaration form is selected by choosing ‘Tourism Tax’. Complete the declaration form, upload the annexure and submit the declaration as normal.`,
        `In the declaration forms, the total combined values for all transactions for the Tourism Tax type during that tax period must be entered. Once all relevant white boxes have been entered, click ‘save’ to calculate the grey boxes automatically.`,
      `<strong>  Annexure </strong>`,
       ` A taxpayer who provides accommodation services must fill a Tourism Tax Tab available in the E-tax system. Each row is for a separate accommodation transaction. For each transaction, enter details on:`,
       `<ul>`,
                `• Property type - On the list of value, select the business type (Hotel, Motel, etc).`,
                 `• Room type – Based on selected property type, select the corresponding room type from the list of value (Single room, double room, etc).`,
                 `• Client name or Code – Indicate the client’s name or client code as per internal procedures.`,
                  `• Room number – Indicate the room number according to the internal room numbering approach.`,
                  `• Booking date (DD/MM/YYYY) – Enter the booking date.`,
                  `• Check-in (DD/MM/YYYY) – Enter the check-in date.`,
                  `• Check-out (DD/MM/YYYY) – Enter the exit date.`,
                  `• Nationality – Enter the client’s nationality.`,
                  `• Country of residence – Enter the client’s country of residence.`,
                  `• Invoice No (SDCID/RECEIPT NUMBER) – Enter the invoice number (E.g: SDC004002498/6795).`,
                  `• Day(s) spent in room I = (calculated based on (F&G) – Enter the number of days spent in the room.`,
                  `• Room price/ per night - Enter the price charged on accommodation services.`,
                  `• Invoice amount without VAT – Enter the amount as per EBM invoice net-off VAT.`,
                  `• Accommodation amount (VAT excl.) – Enter the amount on invoice charged on accommodation services net-off VAT.`,
                  `• Tax due O=(N*3/103) – Enter the amount of tourism tax calculated on ‘Accommodation amount (VAT excl.)’`,
            `<i><strong>Example</strong></i>`, 
                    `<i>An example of Tourism Tax computation:  A client paid FRW 50,000 VAT inclusive for accommodation service. What is the Tourism Tax to be remitted to the Tax Administration?</i>`,
                   `<i> Amount paid by the client:             	50,000</i>`,
                    `<i>VAT (50,000*18/118):                    	<u>(7,127)</u></i>`,
                    `<i>Selling price (Excluding VAT):      	42,373</i>`,
                    `<i>Tourism Tax (42,373*3/103):         	<u>(1,234)</u></i>`,
                    `<i>Net for service provider:                	41,139</i>`,


         `</ul>`,
        ],
      },
    },
  ],
  lastUpdated: centralTaxLastUpdated,
}
