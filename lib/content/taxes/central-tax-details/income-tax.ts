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
          `These include Personal Income Tax (PIT), Corporate Income Tax (CIT), and Income Tax for vehicles transporting persons and goods.`,
          `<ol>
            <li>
              <strong>Personal Income Tax (PIT)</strong>
              <p>PIT is for individual traders and unincorporated businesses. The personal income tax is levied on an individual's annual income.</p>
              <ol>
                <li>
                  <strong>PIT brackets</strong>
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
          `<p>These rates are marginal. For each Real Regime PIT taxpayer, the first FRW 720,000 earned in a year is taxed at 0%, the next FRW 480,000 at 10%, the next FRW 1,200,000 at 20%, and any remaining income at 30%. This means that no taxpayer is made worse off by receiving income in a higher tax bracket.</p>`,
          `<blockquote>
            <p><strong>Example 15:</strong> Amahoro is the owner of a supermarket. Her annual turnover between January 1 and December 31 was FRW 62,000,000. Her deductible expenses, depreciation, and allowances total FRW 54,000,000.</p>
            <p><strong>Her annual taxable profit is therefore:</strong><br/>FRW 62,000,000 - FRW 54,000,000 = FRW 8,000,000</p>
            <p><strong>Her annual Real Regime PIT due is:</strong><br/>(FRW 720,000 * 0%) + (FRW 480,000 * 10%) + (FRW 1,200,000 * 20%) + (FRW 6,800,000 * 30%) = FRW 1,968,000</p>
          </blockquote>`,
          `<ol start="1">
            <li>
              <ol start="2">
                <li>
                  <strong>PIT declaration obligation</strong>
                  <p>PIT is required to be declared and paid on an annual basis. The tax period is the calendar year, from 1st January until 31st December. The deadline to declare and pay PIT is 31st March of the following year. PIT is declared online through <a href="https://etax.rra.gov.rw/" target="_blank" rel="noopener noreferrer">E-Tax system</a> or M-Declaration (*800#).</p>
                  <div>
                    <p><strong>Note:</strong> If the tax type and tax period for the relevant declaration is not available on the ‘Document Details’ screen, the taxpayer can generate it in the E-Tax system.</p>
                  </div>
                </li>
                <li>
                  <strong>PIT Payment</strong>
                  <p>PIT payments can be made via Mobile/Airtel Money, MobiCash, mobile banking, or Internet Banking.</p>
                </li>
                <li>
                  <strong>PIT de-registration</strong>
                  <p>When a taxpayer wants to apply for PIT de-registration for various reasons, RRA may request any documents of proof as necessary. For more information on how to request de-registration, <a href="https://www.rra.gov.rw/fileadmin/user_upload/RRA_TIN_De-registration_Engl.pdf" target="_blank" rel="noopener noreferrer">see a step-by-step guide.</a></p>
                </li>
              </ol>
            </li>
            <li>
              <strong>Corporate Income Tax (CIT)</strong>
              <p>The corporate income tax is imposed on the profit of a taxpayer other than an individual.</p>
              <ol>
                <li>
                  <strong>CIT Declaration</strong>
                  <p>Annual income tax declaration is prepared in accordance with procedures specified by the tax administration and submitted not later than 31st March of the following tax period, unless otherwise provided by this Law.</p>
                  <p>Click <a href="https://www.rra.gov.rw/en/taxes-fees/domestic-taxes/income-tax/declare-income-tax-1" target="_blank" rel="noopener noreferrer">here</a> to learn more. For legal reference, you can follow this link.</p>
                </li>
                <li>
                  <strong>CIT Payment</strong>
                  <p>CIT payments can be made via Mobile/Airtel Money, MobiCash, mobile banking, or Internet Banking.</p>
                </li>
                <li>
                  <strong>Exemption</strong>
                  <p>Taxpayers that are exempted from Corporate Income Tax are not required to register, declare or pay Income Tax. However, they are required to submit their financial statements through E-Tax by the 31st of March after the tax period or three months following a specific tax period granted to the taxpayer having made a request to that effect.</p>
                  <p>Click <a href="https://www.rra.gov.rw/en/details?tx_news_pi1%5Baction%5D=detail&tx_news_pi1%5Bcontroller%5D=News&tx_news_pi1%5Bnews%5D=2193&cHash=8b0160d1a4cd96180ad87086837e6b47" target="_blank" rel="noopener noreferrer">here</a> to learn more about taxpayers that are exempted from Income Tax.</p>
                </li>
                <li>
                  <strong>CIT De-registration</strong>
                  <p>When you completely cease to operate, you must apply for de-registration from Income Tax. For more information on how to request de-registration, <a href="https://www.rra.gov.rw/fileadmin/user_upload/RRA_TIN_De-registration_Engl.pdf" target="_blank" rel="noopener noreferrer">see a step-by-step guide.</a></p>
                </li>
              </ol>
            </li>
          </ol>`,
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
          `Income Tax has three ‘regimes’ available for taxpayers of different amounts of annual turnover. These make the process of declaring and paying Income Tax simpler for lower income taxpayers. The regimes, and their corresponding turnover categories, are displayed below:`,
          {
            type: 'table',
            headers: ['Annual turnover', 'Regime'],
            rows: [
              ['FRW 2,000,000 - FRW 12,000,000', 'Flat Tax'],
              ['FRW 12,000,001 - FRW 20,000,000', 'Lump Sum'],
              ['Above FRW 20,000,000', 'Real Regime'],
            ],
          },
          `<p>However, small businesses with an annual turnover below FRW 20,000,000 have an option to file income tax under simplified regime.</p>`,
          `<div>
            <p><strong>NB: Motor Vehicle Income Tax.</strong> In addition to these regimes, there is also a different option available for taxpayers earning motor vehicle transport income. This is referred to as Motor Vehicle Income Tax.</p>
          </div>`,
          {
            type: 'table',
            headers: ['Type of Vehicle', 'Tax Rate per Quarter'],
            rows: [
              ['Motorcycle cc below 100 ', 'FRW 9,000'],
              ['Motorcycle cc 100 or above', 'FRW 18,000'],
              ['Car', 'FRW 22,050'],
              ['Bus/Minibus', 'FRW 3,000 per seat capacity'],
              [
                'Pick-up/Truck with maximum load capacity below 7 tonnes',
                'FRW 15,000 per tonne of capacity,rounded to the nearest half-tonne',
              ],
              [
                'Pick-up/Truck with maximum load capacity between 7-30 tonnes',
                'FRW 19,500 per tonne of capacity, rounded to the nearest half-tonne',
              ],
              ['Private Ambulance/ Hearse', 'FRW 25,000'],
              ['Wheeled construction/breakdown/towing vehicle', 'FRW 76,800'],
              ['Caterpillar- tracked vehicle', 'FRW 195,5000'],
            ],
          },
          `<ol>
            <li>
              <strong>Flat Tax regime</strong>
              <p>The Flat Tax regime is available to taxpayers with an annual turnover between FRW 2,000,000 and FRW 12,000,000. The taxpayer must pay a specific ‘Flat’ amount of annual tax due depending upon their annual turnover, as displayed below.</p>
              <p>Note that taxpayers with annual turnover below FRW 2,000,000 are required to submit their Income Tax declaration, but are not required to pay any Income Tax.</p>
              <p>Flat Tax regime can be declared using M-Declaration or E-Tax.</p>
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
            <p><strong>Example:</strong> Rukundo has a business fixing bikes. His annual turnover between January 1 and December 31 was FRW 8,750,500. This is within the third annual turnover category, so his annual Flat Tax due is FRW 210,000.</p>
          </blockquote>`,
          `<ol start="2">
            <li>
              <strong>Lump Sum regime</strong>
              <p>The Lump Sum regime is available to taxpayers with an annual turnover between FRW 12,000,001 and FRW 20,000,000. The taxpayer must pay a specific ‘Lump Sum’ tax due equal to 3% of their annual turnover.</p>
              <p>Lump Sum regime can be declared using M-Declaration or E-Tax.</p>
              <blockquote>
                <p><strong>Example:</strong> Ubumwe Ltd is a carpentry business making furniture. Their annual turnover between January 1st and December 31st was FRW 17,400,200. Their annual ‘Lump Sum’ Income Tax due is: FRW 17,400,200 * 3% = FRW 522,006.</p>
              </blockquote>
            </li>
            <li>
              <strong>Real Regime</strong>
              <p>The Real Regime is required for all taxpayers with an annual turnover above FRW 20,000,000, as well as all liberal professions. Liberal professions include, but are not limited to, accountants, company auditors, tax consultants, architects, real estate agents, lawyers, bailiffs, doctors, dentists and other similar professions.</p>
              <p>In addition, any taxpayer may choose to use the Real Regime, but cannot then change this decision for a period of three years from the date that RRA is informed of this choice.</p>
              <p>The most important distinction of Real Regime is the rate applied to profit, not to turnover. This allows taxpayers to deduct expenses allowances against the income.</p>
              <p>In addition, it is important to note that unlike the other Income Tax regimes, the tax rate for Real Regime is slightly different for PIT and for CIT.</p>
              <p>The tax rate for CIT is a uniform rate of 28% on the profit.</p>
              <p>Real Regime can only be declared using E-Tax.</p>
              <p>Small taxpayers who opt to pay tax on actual profit are able to avail of a simplified accounting method. These taxpayers are required to record:</p>
              <ul>
                <li>A record of all daily sales.</li>
                <li>A record of all daily purchases.</li>
                <li>A record of all monetary transactions.</li>
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
          `<strong>IQP calculation</strong>`,
          `<p>Quarterly prepayment tax is calculated from tax paid for the previous annual tax period divided by the turnover of the same tax period, times the current quarterly turnover.</p>`,
          `<strong>IQP declaration</strong>`,
          `<p>The IQP can be declared using M-Declaration (*800#) or <a href="https://etax.rra.gov.rw/" target="_blank" rel="noopener noreferrer">E-Tax</a>. It is important to note that only declarations using E-Tax can deduct withholding taxes paid on behalf of the taxpayer within the preceding quarter.</p>`,
          `<ol>
            <li>
              <strong>IQP declaration using E-Tax</strong>
              <p>The declaration process for IQP using E-Tax is similar to other domestic taxes. The process is the same whether declaring the tax type is PIT or CIT and for each of the regimes.</p>
              <p>Firstly, if the taxpayer has had any tax withheld and paid on their behalf during the tax period, they must download the IQP Annexures from the E-Tax website, see page 96 for more detail on downloading annexures.</p>
              <p>The taxpayer must choose the relevant PIT or CIT annexure, but the details required are the same.</p>
              <p>If the taxpayer has not had any tax withheld and paid on their behalf during the tax period, they can continue straight to the IQP declaration form below.</p>
              <ol>
                <li>
                  <strong>Annexures</strong>
                  <p>The IQP annexure has two tabs. Only the tabs that are applicable in that tax period need to be completed, validated and saved.</p>
                  <ol>
                    <li>
                      <strong>5% Withholding Tab</strong>
                      <p>This tab is applicable to any taxpayer who has paid withholding tax on imports of 5% (WHT 5%) during the tax period. This does not include any other types of withholding tax, which must be declared in the ‘Withholding’ tab.</p>
                    </li>
                    <li>
                      <strong>Withholding Tab</strong>
                      <p>This tab is applicable to any taxpayers who have had tax withheld and paid on their behalf during the tax period. This includes WHT 15%, WHT 3%, Gaming Tax and Mining Royalty Tax. This does not include WHT 5% on imports that is included in the ‘Withholding 5%’ tab.</p>
                    </li>
                  </ol>
                </li>
                <li>
                  <strong>IQP Declaration Form</strong>
                  <p>After all applicable IQP annexures, if any, have been completed, validated and saved in the folder C:/RRA in the user’s local machine, the taxpayer can return to E-Tax to complete the IQP declaration. The taxpayer must choose the relevant PIT or CIT declaration, but the details required are the same.</p>
                  <p>The IQP declaration form requires data on:</p>
                  <ul>
                    <li>Income Tax Payable: Enter the ‘Income Tax Payable’ declared in the previous annual Income Tax declaration.</li>
                    <li>Total Withholding on Payments (3%): Enter the amount of WHT 3% that has been withheld on behalf of the taxpayer.</li>
                    <li>Total Withholding on Imports (5%): Enter the amount of WHT 5% that has been withheld on behalf of the taxpayer. This should equal the total combined values in the ‘Withholding 5%’ annexure.</li>
                    <li>Total Withholding on other Payments (15% and/or 10%): Enter the amount of all other withholdings that have been withheld on behalf of the taxpayer. This includes WHT 15%, Gaming Tax and Mining Royalty Tax. This does not include WHT 5% or WHT 3%.</li>
                  </ul>
                  <p>Once all relevant white boxes have been entered, click ‘save’ to calculate the grey boxes automatically.</p>
                  <p>After saving the IQP regime declaration form, if the taxpayer has not had any tax withheld and paid on their behalf during the tax period, click ‘Submit without Annexures’ to submit the declaration.</p>
                  <p>If the taxpayer has had any tax withheld and paid on their behalf during the tax period, upload the IQP annexures and then compare with the declaration form.</p>
                  <p>Once all the annexures and declaration values are equal, correct and certified, click ‘Submit’ the declaration. After successfully submitting, this screen will load.</p>
                  <p>Click ‘View Acknowledgement Receipt’ to view the RRA reference number and the total tax due that are required for payment. Remember that payment must also be made before the deadline to avoid penalties and fines.</p>
                </li>
              </ol>
            </li>
            <li>
              <strong>IQP declaration using M-Declaration</strong>
              <p>M-Declaration is a mobile phone-based system designed to allow taxpayers to access certain tax services including income tax declaration, motor vehicle income tax declaration, business income tax declaration, local government tax and fees declaration and some EBM services.</p>
              <p>The process for declaring income tax using M-Declaration is slightly different when declaring Flat Tax or Lump Sum Income Tax compared to Motor Vehicle Income Tax.</p>
            </li>
          </ol>`,
        ],
      },
    },
    {
      id: 'declaring-flat-tax-lump-sum-and-iqp-income-tax-using-m-declaration',
      title: {
        en: 'Declaring Flat Tax, Lump Sum and IQP Income Tax using M-Declaration',
        fr: 'Déclarer Flat Tax, Lump Sum et IQP avec M-Declaration',
        rw: 'Kumenyekanisha Flat Tax, Lump Sum na IQP ukoresheje M-Declaration',
      },
      content: {
        en: [
          `If Income Tax is the taxpayer’s only registered domestic tax type, and if the taxpayer has a Rwandan ID in the case of PIT, the taxpayer may declare Flat Tax or Lump Sum using M-Declaration. If not, Flat Tax and Lump Sum Income Tax can always be declared using E-Tax.`,
          `<ol>
            <li>
              <strong>M-Declaration process</strong>
              <p>The first time a taxpayer uses M-Declaration from that specific mobile phone, the taxpayer must first register.</p>
              <p>The M-Declaration system for both registering and declaring is accessed by dialing *800#. The M-Declaration system has a series of screens, with number options, that are navigated by entering and sending the relevant number.</p>
              <p>The first screen requests the taxpayer to select a language, either English or Kinyarwanda. The next screen requests to select which M-Declaration service is required. To declare Flat Tax, Lump Sum and IQP, select ‘2. Other Business Activities’.</p>
              <p>The next screen shows the ‘Welcome to Domestic Taxes’ menu. This menu offers three options:</p>
              <ol>
                <li>Registration</li>
                <li>Declaration</li>
                <li>Change Mobile Number</li>
              </ol>
            </li>
            <li>
              <strong>Registration for M-Declaration</strong>
              <p>From the ‘Welcome to Domestic Taxes’ menu, select ‘1. Registration’ to begin the registration process.</p>
              <p>The details required for registration are:</p>
              <ul>
                <li>Taxpayer Identification Number (TIN).</li>
                <li>Rwanda National ID number.</li>
              </ul>
              <p>For PIT registered taxpayers, their Rwanda National ID number is required. It is not currently possible to use passports to declare PIT using M-Declaration; E-Tax must be used instead.</p>
              <p>For CIT registered taxpayers of any nationality, the Rwanda National ID number can be entered as ‘9999999999999999’ (sixteen ‘9’s).</p>
              <p>Submit the required details in the relevant screens to register for M-Declaration of Flat Tax, Lump Sum and IQP Income Tax.</p>
            </li>
            <li>
              <strong>M-Declaration of Income Tax</strong>
              <p>From the ‘Welcome to Domestic Taxes’ menu, select ‘2. Declaration’ to begin the declaration process.</p>
              <p>The taxpayer must have already registered the TIN with the mobile phone that they are declaring from. In addition, they must select:</p>
              <ul>
                <li>Whether they are a new taxpayer, meaning if this is their first Income Tax declaration of any kind.</li>
                <li>The business turnover or total sales during the tax period being declared.</li>
                <li>The year and quarter for the tax period being declared.</li>
                <li>For example, for annual declarations that are due by 31st March 2017, the year is ‘2016’ and the quarter is ‘annual’.</li>
                <li>For example, for IQP declarations that are due by 30th June 2017 for the preceding quarter, the year is ‘2017’ and the quarter is ‘1’.</li>
              </ul>
              <p>Based on this turnover, the system calculates the tax to be paid, and generates the RRA Reference Number required for paying taxes.</p>
            </li>
          </ol>`,
        ],
      },
    },
    {
      id: 'step-by-step-declaration-guide',
      title: {
        en: 'Step by step declaration guide',
        fr: 'Guide de déclaration étape par étape',
        rw: 'Uko kumenyekanisha intambwe ku ntambwe',
      },
      content: {
        en: [
          `<ol>
            <li>
              <strong>Step-by-Step guide to declaring and paying Flat Tax, Lump Sum regime, or IQP using M-Declaration</strong>
              <p>Flat Tax, Lump Sum or Instalment Quarterly Prepayments (IQP) Income Tax can be declared on mobile phones using M-Declaration.</p>
              <ol>
                <li><strong>Keep records of all income.</strong><p>Keep records of all income to calculate annual turnover.</p></li>
                <li><strong>Register for M-Declaration.</strong><p>Using the mobile phone, dial *800#. Select a language, ‘2. Other Business Activities’ and then ‘1. Registration’. Enter the TIN and Rwanda National ID number. This step is only required for first-time users of M-Declaration.</p></li>
                <li><strong>M-Declaration of Income Tax.</strong><p>Using the mobile phone, dial *800#. Select a language, ‘2. Other Business Activities’ and then ‘2. Declaration’. Enter the tax period, whether the taxpayer is ‘new’ or ‘usual’ to M-Declaration and the tax period business income.</p></li>
                <li><strong>Receive payment details and pay taxes.</strong><p>Note the RRA reference number and pay all tax due with E-Payment, MTN Mobile Money, Mobicash, or at a bank.</p></li>
              </ol>
            </li>
            <li>
              <strong>Step-by-Step guide to declaring and paying Motor Vehicle Income Tax or IQP using M-Declaration</strong>
              <ol>
                <li><strong>Register Motor Vehicle for Transport Income use.</strong><p>Visit any RRA offices and register the motor vehicle for transport income use. This use also requires specific insurance to be purchased for the motor vehicle. This step is only required the first time using M-Declaration.</p></li>
                <li><strong>M-Declaration of Income Tax.</strong><p>Using your mobile phone, dial *800#. Select a language, ‘1. Motor Cycles/Vehicles’. Enter the TIN, number plate of the motor vehicle, tax period and whether you are a ‘new’ taxpayer or a ‘usual taxpayer’.</p></li>
                <li><strong>Receive payment details and pay taxes.</strong><p>Note the RRA reference number and pay all tax due with E-Payment, MTN/Airtel Mobile Money, Mobicash, or at a bank.</p></li>
              </ol>
            </li>
            <li>
              <strong>Step-by-Step guide to declaring and paying Flat Tax regime using E-Tax</strong>
              <ol>
                <li><strong>Keep records of all income.</strong><p>Keep records of all income to calculate annual turnover.</p></li>
                <li><strong>Login to <a href="https://etax.rra.gov.rw" target="_blank" rel="noopener noreferrer">E-Tax</a>.</strong></li>
                <li><strong>Complete form and submit.</strong><p>Complete the declaration form and submit the Income Tax declaration.</p></li>
                <li><strong>View acknowledgement receipt and pay taxes.</strong><p>Note the RRA reference number and pay all tax due with E-Payment, MTN/Airtel Mobile Money, Mobicash, or at a bank.</p></li>
              </ol>
            </li>
            <li>
              <strong>Step-by-Step guide to declaring and paying Real Regime using E-Tax</strong>
              <ol>
                <li><strong>Bookkeeping.</strong><p>Ensure accurate bookkeeping of all business matters.</p></li>
                <li><strong>Certify the financial statements.</strong><p>Submit the financial statements to ICPAR members for validation. This step is only required if the taxpayer had annual turnover of more than FRW 600,000,000.</p></li>
                <li><strong>Login to <a href="https://etax.rra.gov.rw" target="_blank" rel="noopener noreferrer">E-Tax</a>.</strong></li>
                <li><strong>Download, complete, validate and save annexures.</strong><p>Download, complete, validate and save the applicable Real Regime annexures, including the Balance Sheet, Profit and Loss Statement and Company Representative annexures.</p></li>
                <li><strong>Upload certified financials.</strong><p>Approved certifying audit firm uploads certified financials on behalf of their clients through their E-Tax portals.</p></li>
                <li><strong>Complete form, upload annexures and submit.</strong><p>Complete the declaration form, upload annexures, confirm accuracy and submit the Income Tax declaration.</p></li>
                <li><strong>View acknowledgement receipt and pay taxes.</strong><p>Note the RRA reference number and pay all tax due with E-Payment, MTN/Airtel Mobile Money, Mobicash, or at a bank.</p></li>
              </ol>
            </li>
            <li>
              <strong>Step-by-Step guide to declaring and paying Instalment Quarterly Prepayments (IQP) using E-Tax</strong>
              <p>If the taxpayer has had any tax withheld and paid on their behalf during the tax period, also follow the italics steps.</p>
              <ol>
                <li><strong>Bookkeeping.</strong><p>Keep records of all tax withheld and paid on their behalf.</p></li>
                <li><strong>Login to <a href="https://etax.rra.gov.rw" target="_blank" rel="noopener noreferrer">E-Tax</a>.</strong></li>
                <li><strong>Download, complete, validate and save annexures.</strong><p>Download, complete, validate and save any applicable IQP Annexures.</p></li>
                <li><strong>Complete declaration form, upload annexures and submit.</strong><p>Complete the declaration form, upload annexures, confirm accuracy and submit the IQP declaration.</p></li>
                <li><strong>View acknowledgement receipt and pay taxes.</strong><p>Note the RRA reference number and pay all tax due with E-Payment, MTN/Airtel Mobile Money, Mobicash, or at a bank.</p></li>
              </ol>
            </li>
          </ol>`,
        ],
      },
    },
  ],
  lastUpdated: centralTaxLastUpdated,
};
