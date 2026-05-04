import {
  localTaxLastUpdated,
  type LocalTaxDetailPage,
} from "@/lib/content/taxes/local-tax-details/shared"

export const feesLeviedByDecentralizedEntitiesDetail: LocalTaxDetailPage = {
  slug: "fees-levied-by-decentralized-entities",
  title: {
    en: "Fees Levied by Decentralized entities",
    fr: "Frais preleves par les entites decentralisees",
    rw: "Amahoro y'inzego zegerejwe abaturage",
  },
  intro: {
    en: [
      "Fees levied on services and certificates delivered by decentralised entities include fees on the use of public domain of State, fees on services delivered by decentralised entities, and charges levied as fees.",
      "A decentralised entity is prohibited from setting any other fees or charges not specified in the Presidential Order determining fees levied on services and certificates delivered by decentralised entities.",
    ],
  },
  sections: [
    {
      id: "third-parties-that-collect-decentralised-entities-fees",
      title: { en: "Third parties that collect decentralised entities fees", fr: "Tiers collecteurs", rw: "Abandi bakusanya amahoro" },
      content: {
        en: [
          "Ngali Holdings Ltd is mandated to support RRA in collecting all local government fees. Millennium Savings and Investment Cooperative (MISIC) also collects parking fees.",
          "Declaration and payment of civil status certificates, including birth, marriage, and death certificates, and transfer of land titles are processed through the e-Government platform known as Irembo or Rwanda Online.",
        ],
      },
    },
    {
      id: "declaration-and-payment",
      title: { en: "Declaration and payment", fr: "Declaration et paiement", rw: "Kumenyekanisha no kwishyura" },
      content: {
        en: [
          "The deadline to declare and pay decentralized entities fees depends on the basis of the fee.",
          "Fees charged for a service, such as fees on official certificates and documents to be notified by the public notary, must be declared and paid before the service is delivered.",
          "Fees payable on an annual basis, such as fees on advertising, must be declared and paid no later than 31 December of that year.",
        ],
      },
    },
    {
      id: "decentralized-entities-fees-and-rates",
      title: { en: "Decentralized entities' fees and rates", fr: "Frais et taux", rw: "Amahoro n'ibipimo" },
      content: {
        en: [
          "Many decentralized entities fees vary within thresholds depending on factors such as location, including urban, trading centre, or rural location, or vehicle details. The exact rate is determined by the District Council annually by 30 June.",
          {
            type: "table",
            headers: ["Fee type", "Rate or range"],
            rows: [
              ["Public parking on road", "FRW 200 per hour - FRW 30,000 per month"],
              ["Fenced public parking, public transport up to 18 seats or small taxi", "FRW 500 per day"],
              ["Fenced public parking, 19 to 30 seats", "FRW 1,000 per day"],
              ["Fenced public parking, 31 to 50 seats", "FRW 1,500 - FRW 3,000 per day"],
              ["Fenced public parking, more than 50 seats", "FRW 3,500 - FRW 10,000 per day"],
              ["Civil marriage on a day different from the council-fixed day", "FRW 50,000"],
              ["Electronic advertising billboard", "FRW 100,000 per year"],
            ],
          },
          "Other fees include livestock trade fees, slaughterhouse fees, building permit fees, civil status records and certificates, notarized documents, advertising billboards, loudspeaker advertisement, boat number plates, communication towers, commercial transportation of quarry materials, and forest products.",
        ],
      },
    },
    {
      id: "registration",
      title: { en: "Registration for Decentralised Entities Taxes and Fees", fr: "Registration", rw: "Kwiyandikisha" },
      content: {
        en: [
          "Taxpayers must register for Decentralised Entities Taxes and fees with the help of staff at tax centres, except for Trading License Tax where registration is done upon registering a business in the RDB system.",
          "To register on the LGT system, the taxpayer must provide identification, either a Rwandan ID or passport, address, and mobile phone number.",
          "When registering for Rental Income Tax, Immovable Property Tax, or Tax on Sale of Immovable Property, taxpayers must provide the Unique Plot Identifier (UPI) for each property.",
          "Once registered, the taxpayer receives a username, TIN, and password for the LGT system, plus SMS and/or email confirmation.",
        ],
      },
    },
    {
      id: "declaring-using-lgt-system",
      title: { en: "Declaring Decentralised Entities Taxes and Fees using the LGT system", fr: "Declaration dans le systeme LGT", rw: "Kumenyekanisha ukoresheje LGT" },
      content: {
        en: [
          "Rental Income Tax, Trading License Tax, Immovable Property Tax, Tax on Sale of Immovable Property, and Decentralised Entities fees can be declared using the LGT system.",
          "<strong>Step 1: Login to the LGT system</strong>",
          "Access the LGT system at https://localgov.rra.gov.rw or through the RRA website by clicking Pay District taxes here. If a taxpayer does not know their password, it can be reset through Forgot Password.",
          "<strong>Step 2: Select the correct tax or fee</strong>",
          "The LGT system has Registration, Declaration, Fee Payment Ticket, and Change Password menus. Taxes are declared through Declaration, while fees are declared through Fee Payment Ticket.",
          "Fee Payment Ticket includes civil marriage fees, immovable property service fees, official certificates, clay brick and charcoal authorization, market fees, parking fees, small-scale quarry exploitation fees, advertising fees, boat and bicycle number plate fees, communication tower fees, and transport of materials from quarries and forests.",
          "<strong>Step 3: Complete declaration form and submit</strong>",
          "Enter the required information in the declaration form. Required information depends on the tax or fee selected. After completion, calculate tax, certify the declaration, and submit.",
          "<strong>Step 4: View payment details and pay</strong>",
          "After successfully submitting the declaration, view the acknowledgement receipt or receive payment details by email or SMS. Use the RRA reference number to pay before the deadline.",
          "<strong>M-Declaration</strong>",
          "Taxpayers can use M-Declaration for Trading License Tax, Immovable Property Tax for plots without buildings, and outsourced fees available for Ngali Holdings Ltd. Dial *800#, select a language, choose Local Government Taxes, select the tax or fee type, enter the TIN, and follow the on-screen instructions.",
        ],
      },
    },
    {
      id: "penalties-and-fines",
      title: { en: "Penalties and fines", fr: "Penalites et amendes", rw: "Ibihano n'amande" },
      content: {
        en: [
          "A Decentralised Entities Tax and Fee registered taxpayer who fails to submit a tax declaration within the required time must still declare and pay and is subject to three penalties: 1.5% interest per month, a fine equal to 40% of the tax due for late declaration, and an additional late-payment fine of 10% of the tax due up to FRW 100,000.",
          "A taxpayer who submits a declaration but fails to pay the full amount due on time must pay the full amount due, 1.5% interest per month, and 10% of the unpaid tax due up to FRW 100,000.",
          "It is illegal to conduct business activities without declaring and paying Trading License Tax for the concerned tax period. Failure to present a valid Trading License Tax certificate when requested is subject to a penalty of FRW 10,000, and the district may temporarily close the business.",
          "A taxpayer who declares incomplete, incorrect, or fraudulent information must pay the unpaid tax due and an additional penalty of 40% of the tax due.",
        ],
      },
    },
  ],
  lastUpdated: localTaxLastUpdated,
}
