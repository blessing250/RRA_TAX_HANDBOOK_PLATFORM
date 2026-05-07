import {
  centralTaxLastUpdated,
  type CentralTaxDetailPage,
} from "@/lib/content/taxes/central-tax-details/shared"

export const incomeTaxDetail: CentralTaxDetailPage = {
  slug: "income-tax",
  title: {
    en: "Income Tax",
    fr: "Impôt sur le revenu",
    rw: "Umusoro ku nyungu",
  },
  intro: {
    en: [
      "Income Tax is a tax on income resulting from business, self-employment and investment activities. Income Tax ensures that all businesses benefiting from Rwanda's infrastructure, security and prosperity contribute their fair share towards the nation's development.",
    ],
  },
  sections: [
    {
      id: "taxable-income",
      title: {
        en: "Taxable income",
        fr: "Revenu imposable",
        rw: "Inyungu isoreshwa",
      },
      content: {
        en: [
          `Taxable income includes all income sourced in Rwanda resulting from business, employment or investment activities, and activities performed abroad by a resident of Rwanda. This includes:`,
          `<ul><li>Services and employment;</li><li>• Activities of a craftsperson, singer, artist, or player.</li>
          <li> • Sports, cultural, and leisure activities.</li><li>• Activities carried out by a non-resident in Rwanda through a permanent establishment in Rwanda.</li>
          <li>• Use, sale, lease, and free transfer of business movable assets.</li><li>Sale, lease, and free transfer of immovable assets allocated to the business.</li>
          <li>• Agricultural, fishing, and forestry activities.</li><li> • Usufruct and other rights attached to immovable assets and their sale, if such rights are allocated to the business.</li>
          <li>• Investments in shares of companies.</li>
          <li>•  Direct or indirect sale or transfer of shares or debentures; change of profits into shares that increases the capital of partners, except for financial institutions with paid-up capital below the minimum requirement set by the National bank of Rwanda;</li>
          <li>• Distribution of profits among partners.</li><li>Lending, deposits, and other similar income-generating activities.</li><li> •Transfer, sale, and lease of intellectual property.</li>
          <li>• Digital services.</li><li>• Gaming activities.</li><li> • Any other income-generating activity.</li></ul>`,
        ],
      },
    },
    {
      id: "income-tax-registration",
      title: {
        en: "Income tax registration",
        fr: "Enregistrement de l'impôt sur le revenu",
        rw: "Kwiyandikisha ku musoro ku nyungu",
      },
      content: {
        en: [
        `Taxpayers must register their businesses with RDB within seven days of beginning taxable activities or establishing the company. Taxpayers are automatically registered on income tax when their business registration has been approved by RDB. `,
        ],
      },
    },
    {
      id: "income-tax-categories",
      title: {
        en: "Income tax categories",
        fr: "Catégories d'impôt sur le revenu",
        rw: "Ibyiciro by'umusoro ku nyungu",
      },
      content: {
        en: [
          `These include; Personal Income Tax (PIT), Corporate Income Tax (CIT) and Income tax for vehicles transporting persons and goods.`,
          "<strong>1.Personal Income Tax (PIT)</strong>",
          `PIT is for individual traders and unincorporated businesses. The personal income tax is levied on an individual annual income. (check for proper definition)`,
          "<strong>i) PIT brackets</strong>",
          "The tax rate for PIT is progressive, as shown below:",
          {
            type: "table",
            headers: ["Annual taxable income (profit)", "Marginal PIT Rate"],
            rows: [
              ["FRW 0 - FRW 720,000", "0%"],
              ["FRW 720,001 - FRW 1,200,000", "10%"],
              ["FRW 1,200,001 - FRW 2,400,000", "20%"],
              ["Above FRW 2,400,000", "30%"],
            ],
          },
          `These rates are marginal. For each Real Regime PIT taxpayer, the first FRW 720,000 earned in a year is taxed at 0%, the next FRW 480,000 at 10%, the next FRW 1,200,000 at 20%, and any remaining income at 30%. This means that no taxpayer is made worse off by receiving income in a higher tax bracket.`,
          "<blockquote><p><strong>Example 15</strong>: Amahoro is the owner of a supermarket. Her annual turnover between January 1 and December 31 was FRW 62,000,000. Her deductible expenses, depreciation, and allowances total FRW 54,000,000.</p><p><strong>Her annual taxable profit is therefore:</strong><br/>FRW 62,000,000 - FRW 54,000,000 = FRW 8,000,000</p><p><strong>Her annual Real Regime PIT due is:</strong><br/>(FRW 720,000 * 0%) + (FRW 480,000 * 10%) + (FRW 1,200,000 * 20%) + (FRW 6,800,000 * 30%) = FRW 1,968,000</p></blockquote>",
          "<strong>ii)  PIT declaration obligation</strong>",
         ` PIT is required to be declared and paid on an annual basis. The tax period is the calendar year, from 1st January until 31st December. The deadline to declare and pay PIT is 31st March of the following year. PIT is declared online through <a href="https://etax.rra.gov.rw/">E-tax system</a> or M-declaration ( *800#). `,
         `<strong>Note</strong>: If the tax type and tax period for the relevant declaration is not available on the ‘Document Details’ screen, the taxpayer can generate it in the E-Tax system.`,
         `<strong>iii) PIT Payment</strong>`,
         `PIT payments can be made via Mobile/Airtel Money, MobiCash, mobile banking, or Internet Banking.`,
        `<strong>iv) PIT de-registration</strong>`,
       ` When a taxpayer wants to apply for PIT de-registration for various reasons, RRA may request any documents of proof as necessary. For more information on how to request for de-registration,<a href="https://www.rra.gov.rw/fileadmin/user_upload/RRA_TIN_De-registration_Engl.pdf"> see a step-by-step guide.</a>`,
          "<strong>Corporate Income Tax (CIT)</strong>",
          "Corporate Income Tax is imposed on the profit of a taxpayer other than an individual. Annual Income Tax declaration is prepared according to tax administration procedures and submitted not later than 31 March of the following tax period, unless the law provides otherwise.",
          "Taxpayers exempted from Corporate Income Tax are not required to register, declare, or pay Income Tax. However, they must submit their financial statements through E-Tax by 31 March after the tax period or within three months following a specific tax period granted to the taxpayer.",
        ],
      },
    },
    {
      id: "income-tax-regimes",
      title: {
        en: "Income Tax regimes",
        fr: "Régimes d'impôt sur le revenu",
        rw: "Uburyo bwo gutanga umusoro ku nyungu",
      },
      content: {
        en: [
          "Income Tax has three regimes available for taxpayers with different annual turnover levels. These regimes make declaring and paying Income Tax simpler for lower income taxpayers.",
          {
            type: "table",
            headers: ["Annual turnover", "Regime"],
            rows: [
              ["FRW 2,000,000 - FRW 12,000,000", "Flat Tax"],
              ["FRW 12,000,001 - FRW 20,000,000", "Lump Sum"],
              ["Above FRW 20,000,000", "Real Regime"],
            ],
          },
          "Small businesses with annual turnover below FRW 20,000,000 have an option to file Income Tax under the simplified regime.",
          "<strong>Motor Vehicle Income Tax</strong>",
          "In addition to these regimes, taxpayers earning motor vehicle transport income have a different option called Motor Vehicle Income Tax.",
          "<strong>Flat Tax regime</strong>",
          "The Flat Tax regime is available to taxpayers with annual turnover between FRW 2,000,000 and FRW 12,000,000. The taxpayer pays a fixed annual amount according to annual turnover.",
          {
            type: "table",
            headers: ["Annual turnover", "Annual tax due"],
            rows: [
              ["FRW 2,000,000 - FRW 4,000,000", "FRW 60,000"],
              ["FRW 4,000,001 - FRW 7,000,000", "FRW 120,000"],
              ["FRW 7,000,001 - FRW 10,000,000", "FRW 210,000"],
              ["FRW 10,000,001 - FRW 12,000,000", "FRW 300,000"],
            ],
          },
          "Taxpayers with annual turnover below FRW 2,000,000 must submit their Income Tax declaration but are not required to pay Income Tax. Flat Tax can be declared using M-Declaration or E-Tax.",
          "<blockquote><p><strong>Example</strong>: Rukundo has a business fixing bikes. His annual turnover between January 1 and December 31 was FRW 8,750,500. This is within the third annual turnover category, so his annual Flat Tax due is FRW 210,000.</p></blockquote>",
          "<strong>Lump Sum regime</strong>",
          "The Lump Sum regime is available to taxpayers with annual turnover between FRW 12,000,001 and FRW 20,000,000. The taxpayer pays Lump Sum tax equal to 3% of annual turnover. Lump Sum can be declared using M-Declaration or E-Tax.",
          "<blockquote><p><strong>Example</strong>: Ubumwe Ltd is a carpentry business making furniture. Its annual turnover was FRW 17,400,200. Its annual Lump Sum Income Tax due is FRW 17,400,200 * 3% = FRW 522,006.</p></blockquote>",
          "<strong>Real Regime</strong>",
          "The Real Regime is required for taxpayers with annual turnover above FRW 20,000,000 and all liberal professions. Liberal professions include accountants, company auditors, tax consultants, architects, real estate agents, lawyers, bailiffs, doctors, dentists and similar professions.",
          "Any taxpayer may choose to use the Real Regime, but cannot change this decision for three years from the date RRA is informed. Real Regime applies tax to profit rather than turnover and can only be declared using E-Tax. The CIT rate is a uniform 28% on profit.",
        ],
      },
    },
    {
      id: "income-quarterly-prepayments",
      title: {
        en: "Income Quarterly Prepayments (IQP)",
        fr: "Acomptes trimestriels de l'impôt sur le revenu",
        rw: "Kwishyura umusoro ku nyungu buri gihembwe",
      },
      content: {
        en: [
          "Taxpayers must declare and pay Income Tax Quarterly Prepayments (IQP) if they had taxable revenue in the previous fiscal year. IQP deadlines are 30 June, 30 September and 31 December. All IQPs paid are considered in that year's annual Income Tax declaration.",
          "<strong>IQP calculation</strong>",
          "Quarterly prepayment tax is calculated from tax paid for the previous annual tax period divided by the turnover of the same tax period, multiplied by the current quarterly turnover.",
          "<blockquote><p><strong>Example</strong>: In fiscal year 2023, Jean-Baptiste declared Income Tax payable of FRW 540,000 in March 2024 from annual turnover of FRW 18,000,000 under the Lump Sum regime. In fiscal year 2024, he realised turnover of FRW 9,000,000 between April and June. His second IQP is calculated as FRW (540,000 / 18,000,000) * 9,000,000 = FRW 270,000.</p><p>If he paid WHT 5% of FRW 50,000 in May 2024, this is deducted from the IQP. His second IQP due by 30 September 2024 is FRW 270,000 - FRW 50,000 = FRW 220,000.</p></blockquote>",
          "<strong>IQP declaration</strong>",
          "IQP can be declared using M-Declaration (*800#) or E-Tax. Only declarations using E-Tax can deduct withholding taxes paid on behalf of the taxpayer within the preceding quarter.",
          "For E-Tax IQP declarations, taxpayers who had tax withheld on their behalf must download the IQP annexures from E-Tax. If no tax was withheld during the tax period, the taxpayer can continue directly to the IQP declaration form.",
          "The IQP annexure has two tabs: the 5% Withholding tab for withholding tax on imports, and the Withholding tab for WHT 15%, WHT 3%, Gaming Tax and Mining Royalty Tax paid on behalf of the taxpayer.",
          "After applicable annexures are completed, validated and saved, the taxpayer returns to E-Tax, completes the IQP declaration form, uploads annexures where required, certifies the declaration, submits it, and views the acknowledgement receipt for the RRA reference number and amount due.",
        ],
      },
    },
    {
      id: "declaring-flat-tax-lump-sum-and-iqp-income-tax-using-m-declaration",
      title: {
        en: "Declaring Flat Tax, Lump Sum and IQP Income Tax using M-Declaration",
        fr: "Déclarer Flat Tax, Lump Sum et IQP avec M-Declaration",
        rw: "Kumenyekanisha Flat Tax, Lump Sum na IQP ukoresheje M-Declaration",
      },
      content: {
        en: [
          "M-Declaration is a mobile phone-based system that allows taxpayers to access certain tax services, including income tax declaration, motor vehicle income tax declaration, business income tax declaration, local government tax and fees declaration, and some EBM services.",
          "If Income Tax is the taxpayer's only registered domestic tax type, and the taxpayer has a Rwandan ID in the case of PIT, they may declare Flat Tax or Lump Sum using M-Declaration. Otherwise, Flat Tax and Lump Sum Income Tax can always be declared using E-Tax.",
          "<strong>M-Declaration process</strong>",
          "The first time a taxpayer uses M-Declaration from a specific mobile phone, the taxpayer must register. M-Declaration is accessed by dialing *800# and navigating numbered screens.",
          "The first screen asks the taxpayer to select a language. The next screen asks which M-Declaration service is required. To declare Flat Tax, Lump Sum and IQP, select '2. Other Business Activities'. The next screen opens the Domestic Taxes menu with Registration, Declaration and Change Mobile Number options.",
          "<strong>Register for M-Declaration</strong>",
          "From the Domestic Taxes menu, select Registration. Enter the Taxpayer Identification Number and Rwanda National ID number. PIT taxpayers must use a Rwanda National ID; passports cannot currently be used to declare PIT through M-Declaration.",
          "<strong>M-Declaration of Income Tax</strong>",
          "From the Domestic Taxes menu, select Declaration. The taxpayer must have already registered the TIN with the mobile phone used for declaration. The taxpayer selects whether they are new, enters turnover or total sales for the period, and selects the year and quarter. The system calculates tax due and generates the RRA Reference Number for payment.",
        ],
      },
    },
    {
      id: "step-by-step-declaration-guide",
      title: {
        en: "Step by step declaration guide",
        fr: "Guide de déclaration étape par étape",
        rw: "Uko kumenyekanisha intambwe ku ntambwe",
      },
      content: {
        en: [
          "<strong>Declaring and paying Flat Tax, Lump Sum or IQP using M-Declaration</strong>",
          "<ol><li>Keep records of all income to calculate annual turnover.</li><li>Dial *800#, select a language, select '2. Other Business Activities', then select Registration. Enter the TIN and Rwanda National ID number. This is only required for first-time users.</li><li>Dial *800#, select a language, select '2. Other Business Activities', then select Declaration. Enter the tax period, whether the taxpayer is new or usual, and the business income for the tax period.</li><li>Note the RRA Reference Number and pay all tax due through E-Payment, MTN Mobile Money, Mobicash, or at a bank.</li></ol>",
          "<strong>Declaring and paying Motor Vehicle Income Tax or IQP using M-Declaration</strong>",
          "<ol><li>Visit any RRA office and register the motor vehicle for transport income use. This use also requires specific insurance for the motor vehicle. This step is only required the first time.</li><li>Dial *800#, select a language, select '1. Motor Cycles/Vehicles', then enter the TIN, number plate, tax period and whether the taxpayer is new or usual.</li><li>Note the RRA Reference Number and pay all tax due through E-Payment, MTN/Airtel Mobile Money, Mobicash, or at a bank.</li></ol>",
          "<strong>Declaring Flat Tax or Lump Sum using E-Tax</strong>",
          "<ol><li>Keep records of all income to calculate annual turnover.</li><li>Log in to E-Tax.</li><li>Complete the declaration form and submit the Income Tax declaration.</li><li>View the acknowledgement receipt, note the RRA Reference Number and pay all tax due through E-Payment, MTN/Airtel Mobile Money, Mobicash, or at a bank.</li></ol>",
        ],
      },
    },
  ],
  lastUpdated: centralTaxLastUpdated,
}
