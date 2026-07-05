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
      `Road Maintenance Levy is a tax imposed on petrol, gas oil, and motor vehicles to fund road maintenance. The levy on petrol and gas oil is collected at the customs point. The levy on new or already registered motor vehicles is declared and paid annually to the Domestic Taxes Department, no later than 31st December of each year.`,
    ],
  },
  sections: [
    {
      id: "registration",
      title: { en: "Registration", fr: "Registration", rw: "Kwiyandikisha" },
      content: {
        en: [
       ` There is no registration process for the Road Maintenance Levy. Simply possessing a taxable vehicle automatically makes it subject to this tax.`,
        ],
      },
    },
    {
      id: "tax-rates",
      title: { en: "Tax rates", fr: "Taux d'imposition", rw: "Ibipimo by'umusoro" },
      content: {
        en: [
          `The Road Maintenance Levy tax rates are the following:`,
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
          `The following motor vehicles are exempted from the Road Maintenance Levy:`,
          `<ul><li>  Motor vehicles of the Government of Rwanda.</li>`,
          `<li>  Motor vehicles of high commissions, embassies, and diplomats accredited to Rwanda.</li>`,
          `<li> Motor vehicles of international organizations having signed an agreement with the Republic of Rwanda.</li>`,
         ` </ul>`,
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
          `<ol>`,
          `<li> Login in to your E-Tax account</li><li>Navigate to Online requests</li>`,
          `<li> Online requests</li>`,
          `<li> Under request type select Exemption for motor vehicle road levy.</li>`,
          `<li> Click view.</li>`,
          `<li> Select category of exemption:</li>`,
          `<ol>`,
              `<li> Government</li>`,
            `<li> High Commissions</li>`,
            `<li> Embassies and diplomats accredited to Rwanda</li>`,
             `<li>International organizations</li>`,
             `</ol>`,
          `7. Submit exemption and wait for approval notification</li>`,
          `</ol>`,
        ],
      },
    },
    {
      id: "declaration",
      title: { en: "Declaration", fr: "Declaration", rw: "Kumenyekanisha" },
      content: {
        en: [
          `Road Maintenance Levy can be declared using one of the following means of declaration:`,
          `<strong>a) Through e-Tax : </strong>`,
          `<ol>`,
           
            ` •  Login in to your E-Tax account`,
             `•  Navigate to Motor Vehicle`,
              `• MVDeclaration`,
              `• Click MV- Road levy Declaration`,
              `• Select the year`,
              `• Choose Undeclared vehicles for declaration (Declared vehicles is for review of declared MV)`,
              `• Select ALL or one by one or a batch of MV that share the payment (One single RRA ref Number shall be produced for selected MV)`,
              `• Click the “declare selected vehicles” button`,
              `• Click on “Acknowledgment receipt”`,
              `• Use doc ID on the acknowledgment receipt to pay the tax due`,
          `</ol>`,
          `<strong>b) Through M-declaration</strong>`,
          `<ol>`,
            `•   Dial *800#`,
            `• Choose 1 for English or Choose 2 for Kinyarwanda`,
           `• Choose 1 for Motor cycles/vehicles`,
            `• Chose 1 for Declaration`,
            `• Choose 2 for Road Levy`,
            `• Chose 1 for Declaration`,
            `• Enter TIN as per MV registration card`,
            `• Select year`,
            `• Enter Motor Plate Number as per MV registration card`,
            `• Enter 2 and Submit`,
            `• Enter 1 to confirm your details`,
            `• View and use the doc ID to pay the tax due`,
          `</ol>`,
          "<strong>c) Through the RRA website</strong>",
          `<ol>`,
                `• Visit www.rra.gov.rw`,
                `• Click on declare Motor Vehicle levy for road maintenance`,
                `• Fill NID and Phone number for nationals or Passport and email for foreigners`,
                `• Enter received OTP (via SMS/Email)`,
                `• Enter TIN`,
                `• Enter Plate number`,
                `• Verify Information`,
                `• Select year`,
                `• Click the “submit declaration” button`,
                `• Click on “Acknowledgment receipt”`,
                `• Use doc ID on the acknowledgment receipt to pay the tax due.`,

          `</ol>`,
        ],
      },
    },
  ],
  lastUpdated: centralTaxLastUpdated,
}
