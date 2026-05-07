import {
  localTaxLastUpdated,
  type LocalTaxDetailPage,
} from "@/lib/content/taxes/local-tax-details/shared"

export const tradingLicenseDetail: LocalTaxDetailPage = {
  slug: "trading-license",
  title: {
    en: "Trading license",
    fr: "Licence commerciale",
    rw: "Icyangombwa cy'ubucuruzi",
  },
  intro: {
    en: [
      "Trading License Tax, also informally known as patent, is a tax levied on business activities carried out in defined boundaries of decentralized entities.",
      "The trading license can be declared and paid either annually or quarterly.",
    ],
  },
  sections: [
    {
      id: "tax-period",
      title: { en: "Tax period", fr: "Periode fiscale", rw: "Igihe cy'umusoro" },
      content: {
        en: [
          "The tax period for Trading License Tax starts on 1 January and ends on 31 December.",
          "If taxable activities begin during a calendar year, the taxpayer may pay Trading License Tax equivalent to the remaining months, including the month in which taxable activities began. Trading License Tax must be declared and paid before taxable activities begin.",
          "If taxable activities end during a calendar year and the full annual Trading License Tax has been paid, the taxpayer may be entitled to a refund, subject to audit, for the remaining months excluding the month in which activities ended or changed.",
          "Taxpayers conducting regular seasonal or periodic activities must pay the full Trading License Tax for the whole calendar year, even if activities do not occur throughout the whole year.",
        ],
      },
    },
    {
      id: "registration",
      title: { en: "Registration", fr: "Registration", rw: "Kwiyandikisha" },
      content: {
        en: [
          "Any person or business carrying out activities within defined boundaries of decentralized entities in Rwanda is required to register for Trading License Tax.",
          "Trading License Tax must be declared and paid regardless of whether the taxpayer actually makes a profit, as long as there is an intention to do so.",
          "It is illegal to conduct business activities of any kind without a Trading License Tax certificate.",
        ],
      },
    },
    {
      id: "exemptions",
      title: { en: "Exemptions", fr: "Exonerations", rw: "Ibisonewe" },
      content: {
        en: [
          "Exemptions from Trading License Tax apply to:",
          "<ul><li>Non-commercial public institutions.</li><li>Micro-enterprises and small businesses during the first two years following their establishment.</li></ul>",
          "<blockquote><p><strong>Example</strong>: Footie Fun Pub was established on 1 April 2023. As a small enterprise, it is exempt from Trading License Tax from 1 April to 31 December 2023, from 1 January to 31 December 2024, and from 1 January to 31 March 2025.</p></blockquote>",
        ],
      },
    },
    {
      id: "trading-license-calculation",
      title: { en: "Trading license calculation", fr: "Calcul de la licence commerciale", rw: "Kubara icyangombwa cy'ubucuruzi" },
      content: {
        en: [
          "Trading License Tax is calculated based on turnover, including sales from the EBM system and other sales for the period from January to December of the previous year.",
          "For other profit-oriented activities whose turnover is below FRW 2,000,000, and for activities not registered for income tax, Trading License Tax is determined based on location, either urban or rural.",
          {
            type: "table",
            headers: ["Turnover range (FRW)", "Annual tax due / quarterly tax due (FRW)"],
            rows: [
              ["50,000,000,000 and above", "2,000,000 / 500,000"],
              ["25,000,000,000 - 50,000,000,000", "1,500,000 / 375,000"],
              ["1,000,000,000 - 25,000,000,000", "1,000,000 / 250,000"],
              ["200,000,000 - 1,000,000,000", "500,000 / 125,000"],
              ["20,000,000 - 200,000,000", "280,000 / 70,000"],
              ["12,000,000 - 20,000,000", "160,000 / 40,000"],
            ],
          },
          {
            type: "table",
            headers: ["Other profit-oriented activity", "Amount to be paid (FRW)"],
            rows: [
              ["Not registered on income tax, urban zone", "60,000 / 15,000"],
              ["Not registered on income tax, rural zone", "30,000 / 7,500"],
              ["Individual transport activities by vehicle", "40,000 / 40,000"],
              ["Transport activities by boat", "20,000 / 5,000"],
              ["Transport activities by motorcycle", "8,000 / 2,000"],
            ],
          },
          "If a taxpayer has a head office and branches in districts, a Trading License Tax declaration is required for the head office and for each branch, based on the previous year's turnover for each location.",
          "If all branches are located in the same district as the head office, the taxpayer pays according to the turnover of the head office. If branches are located in another district, the tax is unique and calculated based on the branch with the highest turnover.",
        ],
      },
    },
    {
      id: "declaration-and-payment",
      title: { en: "Declaration and payment", fr: "Declaration et paiement", rw: "Kumenyekanisha no kwishyura" },
      content: {
        en: [
          "For annual payment, the deadline to declare and pay Trading License Tax is 31 January of the same year.",
          "For quarterly payment, the deadline is the end of the first month of the concerned quarter.",
          {
            type: "table",
            headers: ["Quarter", "Period", "Due date"],
            rows: [
              ["Quarter 1", "1 January - 31 March", "31 January"],
              ["Quarter 2", "1 April - 30 June", "30 April"],
              ["Quarter 3", "1 July - 30 September", "31 July"],
              ["Quarter 4", "1 October - 31 December", "31 October"],
            ],
          },
        ],
      },
    },
    {
      id: "trading-license-tax-certificate",
      title: { en: "Trading License Tax Certificate", fr: "Certificat de licence commerciale", rw: "Icyemezo cy'icyangombwa cy'ubucuruzi" },
      content: {
        en: [
          "After declaring and paying Trading License Tax, taxpayers can print a Trading License Tax certificate.",
          "The certificate must be clearly displayed at the entrance of the business premises or clearly attached to the motor vehicle, motorcycle, or motorboat for which the tax was declared and paid.",
          "The taxpayer must be able to present the Trading License Tax certificate at all times upon request.",
        ],
      },
    },
  ],
  lastUpdated: localTaxLastUpdated,
}
