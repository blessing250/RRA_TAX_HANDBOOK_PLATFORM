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
         `Trading License Tax, also informally known as ‘patent’, is a tax levied on business activities carried out in defined boundaries of decentralized entities.`,
          `The trading license can be declared and paid either annually or quarterly. `,

    ],
  },
  sections: [
    {
      id: "tax-period",
      title: { en: "Tax period", fr: "Periode fiscale", rw: "Igihe cy'umusoro" },
      content: {
        en: [
                `The tax period for the trading licence tax starts on January 1st and end on December 31st. ` ,
                `If taxable activities begin during a calendar year tax period, the taxpayer may pay Trading License Tax equivalent to the remaining months including the month in which the taxable activities began. Trading License Tax must be declared and paid before beginning the taxable activities.`,
                `<blockquote>
            <strong>Example</strong>
                  <p>Ubumwe opens a small shop in Musanze in March 2024. The tax due for the full tax year for ‘other profit-oriented’ activities is FRW 120,000. However, as Ubumwe is only in business for ten out of the twelve months that year, his Trading License Tax due is:
                  FRW 120,000 * 10/12 = FRW 100,000</p>
                  </blockquote>`,

                `If taxable activities end during a calendar year tax period, and the full rate Trading License Tax has been paid for the whole calendar year tax period, the taxpayer may be entitled to a refund, subject to an audit, equivalent to the remaining months excluding the month in which the taxable activities ended or changed.`,
                `Similarly, if taxable activities change during a calendar year, the taxpayer may be entitled to a refund, or be required to pay additional tax, depending upon the nature of the change in taxable activities.`,
                `However, taxpayers conducting regular seasonal or periodic activities must pay the full rate Trading License Tax for the whole calendar year tax period, even if the taxable activities do not occur throughout the whole calendar year tax period.`,
                ],
      },
    },
    {
      id: "registration",
      title: { en: "Registration", fr: "Registration", rw: "Kwiyandikisha" },
      content: {
        en: [
          ` Any person or business activities carried out in defined boundaries of decentralized entities in Rwanda is required to register for Trading License Tax. It is important to note that the Trading License Tax must be declared and paid regardless of whether the taxpayer actually makes a profit, as long as it is the intention to do so.`,
           `It is illegal to conduct business activities of any kind without a Trading License Tax certificate.`,
        ],
      },
    },
    {
      id: "exemptions",
      title: { en: "Exemptions", fr: "Exonerations", rw: "Ibisonewe" },
      content: {
        en: [
          ` Exemptions from trading licence tax applies to:`,
          `<ul>`,
              `-          Non-commercial public institutions.`,
             `-          Micro-enterprises and small businesses during the first two years following their establishment.`,
           `<ul>`,
           `<blockquote>
           <strong>Example</strong>
            <p> Footie Fun Pub was established on 1 April 2023. As the pub is considered a small enterprise, it will be exempted from Trading License Tax</p>
            <p>- from 1st April to 31st December 2023</p>
            <p>- from 1st January to 31st December 2024 </p>
            <p>- from 1st January to 31st March 2025.</p>
            <p>By 7th April 2025, Footie Fun Pub will need to declare and pay Trading License Tax for April to December 2025. The deadline for declaring and paying Trading License Tax for 2025 will be 31st March 2025.</p>
            </blockquote>`,

        ],
      },
    },
    {
      id: "trading-license-calculation",
      title: { en: "Trading license calculation", fr: "Calcul de la licence commerciale", rw: "Kubara icyangombwa cy'ubucuruzi" },
      content: {
        en: [
          `The trading license tax is calculated based on the turnover that includes sales from the EBM system and other sales for the period of January to December of the previous year. For other business oriented activities whose turnover is below 2.000.000Frw and others which are not registered on income tax, the trading license is determined based on location (urban or rural).`,
           `<strong>Trading license rates are determined as follows:</strong>`,

          {
            type: "table",
            headers: ["Turnover range (FRW)", "Annual tax due / quarterly tax due (FRW)"],
            rows: [
              ["50 billion and above", "2,000,000/500,000"],
              ["From  25,000,000,000 to 50,000,000,000", "1,500,000/375,000"],
              ["From 1,000,000,000 to 25,000,000,000", "1,000,000/250,000"],
              ["From 200,000.000 to 1,000,000,000", "500,000/125,000"],
              ["From 20,000,000 to 200,000.000", "280,000/70,000"],
              ["From 12,000,000 to  20,000.000", "160,000/40,000"],
            ],
          },
          {
            type: "table",
            headers: ["Other profit-oriented activity", "Amount to be paid (FRW)"],
            rows: [
              ["Profit-oriented activities not registered on income tax, in urban zone.", "60,000/15,000"],
              ["Profit-oriented activities not registered on income tax, in rural zone", "30,000/7,500"],
              ["Individual transport activities by vehicle", "40,000/40,000"],
              ["Transport activities by boat", "20,000/5,000"],
              ["Transport activities by motor cycle", "8,000 / 2,000"],
            ],
          },
          `<blockquote>
          <strong>Example</strong>
           <p> Intare is a moto driver based in Remera, Kigali. The trading licence tax due for the full tax year for ‘Transport activities on motorcycles’ is FRW 8,000.</p>
          </blockquote>`,


        `<strong> a) Trading license tax calculation for the head office and branches</a>`,
        `If a taxpayer has a head office and branches in Districts, a trading license tax declaration is required for the head office as well as for each branch of his or her business activities based on the turnover of the previous year for the head office and for each branch.`,
        `In case a branch does not have or cannot determine its turnover, the trading license tax is declared based on the turnover of the head office.`,
        `However, if all the branches are located in the same district as the head office, the taxpayer pays the trading license tax according to the turnover of the head office. If the branches are located in a district other than that of the head office, the trading license tax is unique and calculated basing on the turnover of the branch with the highest turnover.`,
        `This principle doesn’t apply to motor vehicles, including motorcycles, and motorboats. If a taxpayer has multiple motor vehicles and motorboats used for profit-oriented activities, Trading License Tax must be paid for each.`,
        `On the other hand, if a taxpayer carries out multiple activities by the same company at the same premises, Trading License Tax is only paid once for that premises. If a taxpayer carries out different business activities in different buildings, he/she files a trading license tax declaration for each business activity.`,
        `<blockquote>
        <strong>Example</strong> 
          <p>Lucie has a supermarket business. She has a warehouse where goods are kept, two shops in the same district where goods are sold. Lucie does not have to declare and pay Trading License Tax for the warehouse, but is required to declare and pay a single Trading License Tax for both shops. In case the two shops are located in different districts, each shop shall pay a separate trading licence tax. This also applies if the two are carrying different activities either in the same district or more than one district.</p>
          <p>Assume that Lucie owns a truck facilitating delivery of goods:</p>
          <p>If the truck is in Lucie’s business financial statements, this truck doesn’t pay trading licence tax. However, this truck pays trading licence tax if it is not in the financial statement.</p>
          </blockquote>`,



        ],
      },
    },
    {
      id: "declaration-and-payment",
      title: { en: "Declaration and payment", fr: "Declaration et paiement", rw: "Kumenyekanisha no kwishyura" },
      content: {
        en: [
      ` For the annual basis, the deadline to declare and pay Trading License Tax is 31st January of the same year. For quarter basis, the deadline to declare and pay Trading License Tax by is the end of the first month of the concerned quarter:`,
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
             `<blockquote>
            <strong>Example</strong>
             <p>Amahoro must declare and pay Trading License Tax to authorise her business activities during the 2023 tax period, from 1st January 2023 until 31st December 2023, by the deadline of 31st January 2023.<p>
             </blockquote>`,
         
        ],
      },
    },
    {
      id: "trading-license-tax-certificate",
      title: { en: "Trading License Tax Certificate", fr: "Certificat de licence commerciale", rw: "Icyemezo cy'icyangombwa cy'ubucuruzi" },
      content: {
        en: [
         `After declaring and paying Trading License Tax, taxpayers can print a Trading License Tax certificate.`,
         `The Trading License Tax Certificates must be clearly displayed at the entrance of the business premises or clearly attached to the motor vehicle (including motorcycles) or motorboat for which the tax was declared and paid. The taxpayer must also be able to present the Trading License Tax Certificate at all times upon request.`,

        ],
      },
    },
  ],
  lastUpdated: localTaxLastUpdated,
}
