import {
  centralTaxLastUpdated,
  type CentralTaxDetailPage,
} from "@/lib/content/taxes/central-tax-details/shared"

export const roadMaintenanceLevyDetail: CentralTaxDetailPage = {
  slug: "road-maintenance-levy",
  title: {
    en: "Road Maintenance Levy",
    fr: "Taxe d'entretien routier",
    rw: "Amafaranga yo gufata neza imihanda",
  },
  intro: {
    en: [
      "Road Maintenance Levy is a tax imposed on petrol, gas oil, and motor vehicles to fund road maintenance. The levy on petrol and gas oil is collected at the customs point.",
      "The levy on new or already registered motor vehicles is declared and paid annually to the Domestic Taxes Department, no later than 31st December of each year.",
    ],
  },
  sections: [
    {
      id: "registration",
      title: { en: "Registration", fr: "Registration", rw: "Kwiyandikisha" },
      content: {
        en: [
          "There is no registration process for the Road Maintenance Levy. Simply possessing a taxable vehicle automatically makes it subject to this tax.",
        ],
      },
    },
    {
      id: "tax-rates",
      title: { en: "Tax rates", fr: "Taux d'imposition", rw: "Ibipimo by'umusoro" },
      content: {
        en: [
          "The levy amount depends on the motor vehicle category.",
          {
            type: "table",
            headers: ["Category", "Levy amount (FRW)"],
            rows: [
              ["Car", "50,000"],
              ["Jeep", "50,000"],
              ["Pick-up", "100,000"],
              ["Microbus", "100,000"],
              ["Minibus", "100,000"],
              ["Bus", "100,000"],
              ["Truck", "120,000"],
              ["Half-trailer", "120,000"],
              ["Trailer", "150,000"],
            ],
          },
        ],
      },
    },
    {
      id: "exemptions",
      title: { en: "Exemptions", fr: "Exonerations", rw: "Ibisonewe" },
      content: {
        en: [
          "The following motor vehicles are exempted from the Road Maintenance Levy:",
          "<ul><li>Motor vehicles of the Government of Rwanda.</li><li>Motor vehicles of high commissions, embassies, and diplomats accredited to Rwanda.</li><li>Motor vehicles of international organizations having signed an agreement with the Republic of Rwanda.</li></ul>",
        ],
      },
    },
    {
      id: "application-for-road-levy-maintenance-exemption",
      title: {
        en: "Application for Road Levy Maintenance exemption",
        fr: "Demande d'exoneration de la taxe d'entretien routier",
        rw: "Gusaba gusonerwa amafaranga yo gufata neza imihanda",
      },
      content: {
        en: [
          "To apply for Road Maintenance Levy exemption, log in to your e-Tax account and navigate to Online requests.",
          "<ol><li>Under request type, select Exemption for motor vehicle road levy.</li><li>Click view.</li><li>Select the category of exemption: Government, high commissions, embassies and diplomats accredited to Rwanda, or international organizations.</li><li>Submit the exemption request and wait for approval notification.</li></ol>",
        ],
      },
    },
    {
      id: "declaration",
      title: { en: "Declaration", fr: "Declaration", rw: "Kumenyekanisha" },
      content: {
        en: [
          "Road Maintenance Levy can be declared through e-Tax, M-declaration, or the RRA website.",
          "<strong>Through e-Tax</strong>",
          "<ol><li>Log in to your e-Tax account.</li><li>Navigate to Motor Vehicle.</li><li>Click MV - Road levy Declaration.</li><li>Select the year.</li><li>Choose undeclared vehicles for declaration.</li><li>Select all vehicles, one by one, or a batch of motor vehicles that share the payment.</li><li>Click declare selected vehicles.</li><li>Open the acknowledgement receipt and use the document ID to pay the tax due.</li></ol>",
          "<strong>Through M-declaration</strong>",
          "<ol><li>Dial *800#.</li><li>Choose the preferred language.</li><li>Choose Motor cycles/vehicles, then Declaration, then Road Levy.</li><li>Enter the TIN as per the motor vehicle registration card.</li><li>Select the year and enter the motor plate number.</li><li>Confirm the details and use the document ID to pay the tax due.</li></ol>",
          "<strong>Through the RRA website</strong>",
          "<ol><li>Visit www.rra.gov.rw.</li><li>Click declare Motor Vehicle levy for road maintenance.</li><li>Fill in NID and phone number for nationals, or passport and email for foreigners.</li><li>Enter the OTP received by SMS or email.</li><li>Enter TIN and plate number.</li><li>Verify information, select the year, submit the declaration, and use the document ID on the acknowledgement receipt to pay.</li></ol>",
        ],
      },
    },
  ],
  lastUpdated: centralTaxLastUpdated,
}
