import {
  centralTaxLastUpdated,
  type CentralTaxDetailPage,
} from '@/lib/content/taxes/central-tax-details/shared';

export const incomeTaxDetail: CentralTaxDetailPage = {
  slug: 'income-tax',
  title: {
    en: 'Income Tax',
    fr: 'Impôt sur le revenu',
    rw: 'Umusoro ku nyungu',
  },
  intro: {
    en: [
      "Income Tax is a tax on income resulting from business, self-employment and investment activities. Income Tax ensures that all businesses benefiting from Rwanda's infrastructure, security and prosperity contribute their fair share towards the nation's development.",
    ],
  },
  sections: [
    {
      id: 'taxable-income',
      title: {
        en: 'Taxable income',
        fr: 'Revenu imposable',
        rw: 'Inyungu isoreshwa',
      },
      content: {
        en: [
          `Taxable income includes all income sourced in Rwanda resulting from business, employment or investment activities, and activities performed abroad by a resident of Rwanda. This includes:`,
          `<ul>
            <li>Services and employment.</li>
            <li>Activities of a craftsperson, singer, artist, or player.</li>
            <li>Sports, cultural, and leisure activities.</li>
            <li>Activities carried out by a non-resident in Rwanda through a permanent establishment in Rwanda.</li>
            <li>Use, sale, lease, and free transfer of business movable assets.</li>
            <li>Sale, lease, and free transfer of immovable assets allocated to the business.</li>
            <li>Agricultural, fishing, and forestry activities.</li>
            <li>Usufruct and other rights attached to immovable assets and their sale, if such rights are allocated to the business.</li>
            <li>Investments in shares of companies.</li>
            <li>Direct or indirect sale or transfer of shares or debentures.</li>
            <li>Change of profits into shares that increases the capital of partners, except for financial institutions with paid-up capital below the minimum requirement set by the National Bank of Rwanda.</li>
            <li>Distribution of profits among partners.</li>
            <li>Lending, deposits, and other similar income-generating activities.</li>
            <li>Transfer, sale, and lease of intellectual property.</li>
            <li>Digital services.</li>
            <li>Gaming activities.</li>
            <li>Any other income-generating activity.</li>
          </ul>`,
        ],
      },
    },
    {
      id: 'income-tax-registration',
      title: {
        en: 'Income tax registration',
        fr: "Enregistrement de l'impôt sur le revenu",
        rw: 'Kwiyandikisha ku musoro ku nyungu',
      },
      content: {
        en: [
          `<p>Taxpayers must register their businesses with RDB within seven days of beginning taxable activities or establishing the company. Taxpayers are automatically registered on income tax when their business registration has been approved by RDB.</p>`,
        ],
      },
    },
    {
      id: 'income-tax-categories',
      title: {
        en: 'Income tax categories',
        fr: "Catégories d'impôt sur le revenu",
        rw: "Ibyiciro by'umusoro ku nyungu",
      },
      content: {
        en: [
          `These include Personal Income Tax (PIT), Corporate Income Tax (CIT).`,
          `<ol>
            <li>
              <strong>Personal Income Tax (PIT)</strong>
              <p>PIT is levied on income earned by individuals, including sole traders, and other unincorporated businesses. </p>
                  <strong>1.1. PIT brackets</strong>
                  <p>The tax rate for PIT is progressive, as shown below:</p>
                </li>
              </ol>
            </li>
          </ol>`,
          {
            type: 'table',
            headers: ['Annual taxable income (profit)', 'Marginal PIT Rate'],
            rows: [
              ['FRW 0 - FRW 720,000', '0%'],
              ['FRW 720,001 - FRW 1,200,000', '10%'],
              ['FRW 1,200,001 - FRW 2,400,000', '20%'],
              ['Above FRW 2,400,000', '30%'],
            ],
          },
          `<p>For PIT Real Regime calculation, use this link:<a href="https://www.rra.gov.rw/en/tax-calculator/pit-real-regime-calculator" target="_blank" rel="noopener noreferrer"> PIT Real Regime Calculator</a></p>`,
                  `<strong>1.2. PIT Declaration </strong>
                  <p>PIT is declared and paid on an annual basis. The tax period is the calendar year, from 1st January until 31st December. The deadline to declare and pay PIT is 31st March of the following year PIT is declared online through <a href="https://etax.rra.gov.rw/" target="_blank" rel="noopener noreferrer">E-Tax system</a> or M-Declaration (*800#).</p>
                  <strong>1.3. PIT Payment</strong>
                  <p>PIT payments can be made via Mobile/Airtel Money, mobile banking, or Internet Banking.</p>
                </li>
            <li>
              <strong>2.  Corporate Income Tax (CIT)</strong>
              <p>Corporate income tax is levied on business profits received by taxpayers other than individuals.Those include companies, cooperatives, associations and other entities.</p>
               <li>
                  <strong>2.1. CIT Declaration</strong>
                  <p>Annual income tax declaration is prepared in accordance with procedures specified by the tax administration and submitted not later than 31st March of the following tax period, unless otherwise provided by the <a href="https://www.rra.gov.rw/en/details?tx_news_pi1%5Baction%5D=detail&tx_news_pi1%5Bcontroller%5D=News&tx_news_pi1%5Bnews%5D=459&cHash=5ba8ed445fa9a4644d4a05feb0297879" target="_blank" rel="noopener noreferrer">Law</a>.</p>
                 <p>CIT can be declared using M-Declaration or <a href="https://etax.rra.gov.rw/login" target="_blank" rel="noopener noreferrer">E-Tax</a> or Mobile Declaration. </p>
                <p> Click <a href="https://www.rra.gov.rw/en/taxes-fees/domestic-taxes/income-tax/declare-income-tax-1" target="_blank" rel="noopener noreferrer">here</a> to learn more.</p> 
                </li>
                <li>
                  <strong>2.2. CIT Payment</strong>
                  <p>CIT payments can be made via Mobile/Airtel Money, mobile banking, or Internet Banking.</p>
                </li>
                <li>
                  <strong>2.3. Exemption</strong>
                  <Click>Taxpayers that are exempted from Corporate Income Tax are not required to register, declare or pay Income Tax. However, they are required to submit their financial statements through E-Tax by the 31st of March after the tax period or three months following a specific tax period granted to the taxpayer having made a request to that effect. Click <a href="https://www.rra.gov.rw/en/details?tx_news_pi1%5Baction%5D=detail&tx_news_pi1%5Bcontroller%5D=News&tx_news_pi1%5Bnews%5D=2193&cHash=8b0160d1a4cd96180ad87086837e6b47" target="_blank" rel="noopener noreferrer">here</a> to learn more about taxpayers that are exempted from Income Tax.</p>
                </li>
                <li>
                  <strong>2.4.  PIT and CIT De-registration</strong>
                  <p></p>When a business or individual stops operating, that entity or person shall apply for Income Tax de-registration through the RDB Portal if the business was registered with RDB, or at an RRA office. For RDB de-registration, click <a href="https://urs.rdb.rw/auth/login?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">here</a>. </p>
                </li>
              </ol>
            </li>`,
        ],
      },
    },
    {
      id: 'income-tax-regimes',
      title: {
        en: 'Income Tax regimes',
        fr: "Régimes d'impôt sur le revenu",
        rw: 'Uburyo bwo gutanga umusoro ku nyungu',
      },
      content: {
        en: [
          `The regimes, and their corresponding turnover categories, are displayed below:`,
          {
            type: 'table',
            headers: ['Annual turnover', 'Regime'],
            rows: [
              ['FRW 2,000,000 - FRW 12,000,000', 'Flat Tax'],
              ['FRW 12,000,001 - FRW 20,000,000', 'Lump Sum'],
              ['Above FRW 20,000,000', 'Real Regime'],
            ],
          },
          
          `<ol>
            <li>
              <strong>Flat Tax regime</strong>
              <p>The Flat Tax regime is available to taxpayers with an annual turnover between FRW 2,000,000 and FRW 12,000,000. The taxpayer must pay a specific ‘Flat’ amount of annual tax due depending upon their annual turnover, as displayed below.</p>
              </li>
          </ol>`,
             {
            type: 'table',
            headers: ['Annual turnover', 'Annual tax due'],
            rows: [
              ['FRW 2,000,000 - FRW 4,000,000', 'FRW 60,000'],
              ['FRW 4,000,001 - FRW 7,000,000', 'FRW 120,000'],
              ['FRW 7,000,001 - FRW 10,000,000', 'FRW 210,000'],
              ['FRW 10,000,001 - FRW 12,000,000', 'FRW 300,000'],
            ],
          },         
         `<blockquote>
            <strong>Example:</strong>
            <p> Rukundo has a business fixing bikes. His annual turnover between January 1 and December 31 was FRW 8,750,500. This is within the third annual turnover category, so his annual Flat Tax due is FRW 210,000.</p>
          </blockquote>`,
          `<strong>NB: Exception for Motor Vehicles</strong>`,
          `Taxpayers engaged in transporting people or goods by road may be subject to a specific flat amount of tax instead of the normal income tax calculation.`,
          `For more information, see the rates of income tax for vehicles transporting persons and goods<a href="https://www.rra.gov.rw/fileadmin/user_upload/Income_Tax_law_of_2022.pdf" target="_blank"> here</a>.`,

          `<ol start="2">
            <li>
              <strong>Lump Sum regime</strong>
              <p>The Lump Sum regime is available to taxpayers with an annual turnover between FRW 12,000,001 and FRW 20,000,000. The taxpayer must pay a specific ‘Lump Sum’ tax due equal to 3% of their annual turnover.</p>
              <p>Lump Sum regime can be declared using M-Declaration or E-Tax.</p>
              <blockquote>
                <strong>Example:</strong>
                <p> Ubumwe Ltd is a carpentry business making furniture. Their annual turnover between January 1st and December 31st was FRW 17,400,200. Their annual ‘Lump Sum’ Income Tax due is: FRW 17,400,200 * 3% = FRW 522,006.</p>
              </blockquote>
            </li>
            <li>
              <strong>Real Regime</strong>
              <p>The Real Regime applies to taxpayers with annual turnover above FRW 20 million and to liberal professions, such as accountants, auditors, tax consultants, architects, lawyers, doctors, and similar professions.</p>
              <ul>
                <li>Taxpayers under the lump-sum regime may opt for the Real Regime, but must remain under it for at least three years after notifying RRA..</li>
                <li>CIT is charged at a rate of 28% on taxable profit.</li>
                <li>Declarations under the Real Regime are made only through E-Tax.</li>
                <li>Small taxpayers using the Real Regime may use simplified accounting by keeping records of:
                  <ul>
                  	  <li>Daily sales</li>
                      <li>Daily purchases</li>
                      <li>All monetary transactions</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ol>`,
        ],
      },
    },
    {
      id: 'income-quarterly-prepayments',
      title: {
        en: 'Income Quarterly Prepayments (IQP)',
        fr: "Acomptes trimestriels de l'impôt sur le revenu",
        rw: 'Kwishyura umusoro ku nyungu buri gihembwe',
      },
      content: {
        en: [
          `Taxpayers are required to declare and pay Income Tax Quarterly Prepayments (IQP) if they have had taxable revenue in the previous fiscal year by the following deadlines: 30 June, 30 September and 31 December.`,
          `All IQPs that are paid are considered in that tax year’s annual Income Tax declarations.`,
          `<strong>1. IQP calculation</strong>`,
          `<p>Quarterly prepayment tax is calculated from tax paid for the previous annual tax period divided by the turnover of the same tax period, times the current quarterly turnover.</p>`,
            `<blockquote>
          <strong>Example</strong>
               <p> In the fiscal year 2023 Jean-Baptiste declared Income Tax payable of FRW 540,000 in March 2024 from an annual turnover of FRW 18,000,000 under the lump sum regime. In the fiscal 2024, he realised a turnover of FRW 9,000,000 between April and June 2024. His second IQP is calculated by:</p>
                <p>FRW (540,000/18,000,000) * 9,000,000= FRW 270,000<p>
                <p>Jean-Baptiste must declare and pay the second IQP of FRW 270,000 by the deadline of 30th September 2024.</p>
                Assume that in May 2024 he pays WHT 5% of FRW 50,000. This is deducted against the IQP of the quarter. Therefore, his IQP due by 30th September 2024 equals to:</p>
               <p> FRW 270,000 – FRW 50,000= FRW 220,000.</p>
               <p> Overall, Jean-Baptiste has to pay for the second IQP of FRW 220,000.</p>
               </blockquote>`,


          `<strong>2. IQP declaration</strong>`,
          `<p>The IQP can be declared using M-Declaration (*800#) or <a href="https://etax.rra.gov.rw/" target="_blank" rel="noopener noreferrer">E-Tax</a>. It is important to note that only declarations using E-Tax can deduct withholding taxes paid on behalf of the taxpayer within the preceding quarter.</p>`,
        ],
      },
    },
  ],
  lastUpdated: centralTaxLastUpdated,
};
