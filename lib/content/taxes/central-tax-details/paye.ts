import {
  centralTaxLastUpdated,
  type CentralTaxDetailPage,
} from "@/lib/content/taxes/central-tax-details/shared"

export const payeDetail: CentralTaxDetailPage = {
  slug: "pay-as-you-earn",
  title: {
    en: "Pay As You Earn (PAYE)",
    fr: "Pay As You Earn (PAYE)",
    rw: "Pay As You Earn (PAYE)",
  },
  intro: {
    en: [
      "PAYE is tax on employment income. It is withheld by employers on behalf of their employees for efficient collection.",
    ],
  },
  sections: [
    {
      id: "registration",
      title: {
        en: "Registration",
        fr: "Registration",
        rw: "Iyandikishirizwa",
      },
      content: {
        en: [
          "Any taxpayer who pays employees in cash, benefits in kind, or allowances is required to register for PAYE, declare, and pay on behalf of their employees. Payments in cash refer to monetary payments in notes or electronically in any currency. Payments in kind refer to non-monetary payments of goods or services.",
          "If an employer has special authorisation from the Government of Rwanda and is not required to declare and pay taxes on income, employees are required to register with RRA, declare, and pay PAYE on their own behalf.",
          "Employers are required to provide each employee with a statement for each tax period showing:",
          "<ul><li>The employee's name.</li><li>The amount and type of income received.</li><li>The amount of PAYE and RSSB contributions withheld and paid on the employee's behalf.</li></ul>",
        ],
      },
    },
    {
      id: "taxable-employment-income",
      title: {
        en: "Taxable employment income",
        fr: "Revenu d'emploi imposable",
        rw: "Inyungu y'akazi isoreshwa",
      },
      content: {
        en: [
          "Taxable employment income includes all payments to an employee in cash or in kind, such as:",
          "<ul><li>Wages, salary, leave pay, sick pay and medical allowance, payment in lieu of leave, fees, commissions, bonuses, gratuity, and incentives.</li><li>Allowances including cost of living, subsistence, entertainment, accommodation, rent, or travel allowance.</li><li>Payments to the employee for accepting to work in any conditions of employment.</li><li>Payments for redundancy, loss, or termination of employment.</li><li>Other payments made in respect of current, previous, or future employment.</li></ul>",
        ],
      },
    },
    {
      id: "exempted-employment-income",
      title: {
        en: "Exempted employment income",
        fr: "Revenu d'emploi exonere",
        rw: "Inyungu y'akazi itasoreshwa",
      },
      content: {
        en: [
          "Employment income that is exempt from taxation includes:",
          "<ul><li>Reimbursement of expenses incurred by the employee if wholly and exclusively for the business activities of the employer.</li><li>Retirement contributions or pension payments made by the employer on behalf of the employee to Rwanda Social Security Board (RSSB).</li><li>Retirement contributions made by the employer on behalf of the employee and/or contributions made by the employee to a qualified pension fund up to a maximum of 10% of the employee's employment income or FRW 1,200,000 per year, whichever is lower.</li><li>Employment income received by an employee who is not a citizen of Rwanda from a foreign government or NGO under an agreement signed by the Government of Rwanda, when the income is received in performance of aid services in Rwanda.</li></ul>",
        ],
      },
    },
    {
      id: "types-of-employees",
      title: {
        en: "Types of employees",
        fr: "Types d'employes",
        rw: "Ubwoko bw'abakozi",
      },
      content: {
        en: [
          "There are three types of employees for the purposes of declaring PAYE: permanent employees, casual labourers, and employees with more than one employer.",
          "All employees are regarded as permanent employees unless they fulfil the criteria for casual labourers or employees with more than one employer.",
          "A casual labourer is an employee who performs unskilled labour activities, does not use machinery or equipment requiring special skills, and is engaged by an employer for not longer than thirty days during a tax period.",
          "If an employee is employed by more than one employer, the employer who pays an annual professional income arising from permanent work or from a longer contract than other employers is referred to as the first employer.",
        ],
      },
    },
    {
      id: "paye-calculation",
      title: {
        en: "PAYE calculation",
        fr: "Calcul du PAYE",
        rw: "Kubara PAYE",
      },
      content: {
        en: [
          "<strong>Benefits in kind</strong>",
          "Benefits in kind can be more difficult to value than regular employment income. As a result, the valuation of benefits in kind includes:",
          "<ul><li>Providing an employee with access to and use of a motor vehicle during a tax period is valued at 10% of the employment income, excluding benefits in kind.</li><li>Providing an employee with accommodation during a tax period is valued at 20% of the employment income, excluding benefits in kind.</li><li>For a benefit on a loan, including an advance on salary exceeding three months' salary, the taxable benefit is the difference between interest calculated at the rate offered to commercial banks by the National Bank of Rwanda and the actual interest paid by the employee.</li></ul>",
          "Note that the rent of a house or motor vehicle directly paid by an employer for an employee is taxed as any other employment income.",
          "<blockquote><p><strong>Example</strong>: Innocent employs one employee called Ubumwe. In one tax period, Innocent pays Ubumwe FRW 35,000 in salary, a transport allowance of FRW 5,000, and provides Ubumwe with accommodation to live in.</p><p>The salary and transport allowance are fully taxable. The accommodation benefit in kind is valued at 20% of taxable employment income: (FRW 35,000 + FRW 5,000) * 20% = FRW 8,000.</p><p>Therefore, the total taxable income that Innocent must declare PAYE for on behalf of Ubumwe is FRW 35,000 + FRW 5,000 + FRW 8,000 = FRW 48,000.</p></blockquote>",
          "<strong>Tax rates for permanent employees</strong>",
          "There are different marginal tax rates for permanent employees depending on taxable employment income. The groupings of income are called tax brackets.",
          {
            type: "table",
            headers: ["Monthly taxable income", "Marginal tax rate"],
            rows: [
              ["FRW 0 - FRW 60,000", "0%"],
              ["FRW 60,001 - FRW 100,000", "10%"],
              ["FRW 100,001 - FRW 200,000", "20%"],
              ["Above FRW 200,000", "30%"],
            ],
          },
          "These tax rates are marginal. This means the first FRW 60,000 earned each month is taxed at 0%, the next FRW 40,000 is taxed at 10%, the next FRW 100,000 is taxed at 20%, and any remaining income is taxed at 30%.",
          "<blockquote><p><strong>Example</strong>: Amahoro employs two full-time employees, Rukundo and Lucie. Rukundo's monthly taxable income is FRW 40,000. Lucie's monthly taxable income is FRW 300,000. Amahoro declares PAYE on their behalf.</p><p>Rukundo's income is in the first tax bracket, so the monthly PAYE due is FRW 40,000 * 0% = FRW 0.</p><p>Lucie's monthly PAYE due is (FRW 60,000 * 0%) + (FRW 40,000 * 10%) + (FRW 100,000 * 20%) + (FRW 100,000 * 30%) = FRW 54,000.</p></blockquote>",
          "<strong>Tax rates for casual labourers</strong>",
          "Casual labourers also use marginal tax rates depending on their taxable employment income.",
          {
            type: "table",
            headers: ["Monthly taxable income", "Marginal tax rate"],
            rows: [
              ["FRW 0 - FRW 60,000", "0%"],
              ["Above FRW 60,000", "15%"],
            ],
          },
          "<blockquote><p><strong>Example</strong>: Lucie employs Roy in an unskilled role on a temporary basis. Roy works for less than thirty days and Lucie pays him taxable income of FRW 80,000.</p><p>As Roy is a casual labourer, the first FRW 60,000 is taxed at 0%, and the remaining FRW 20,000 is taxed at 15%: (FRW 60,000 * 0%) + (FRW 20,000 * 15%) = FRW 3,000.</p></blockquote>",
          "<strong>Employees with more than one employer</strong>",
          "The first employer declares the employee as a permanent employee. Any additional employers must withhold PAYE at the rate of 30% on all taxable income.",
          "This may mean that the employee pays a higher amount of tax than would normally be expected if the income came from one employer. Resident individuals in Rwanda may claim a refund for excess Income Tax paid if the tax refund payable exceeds FRW 5,000.",
          "<blockquote><p><strong>Example</strong>: Charles works for two employers, Lucie and Fred. Charles receives monthly taxable income of FRW 120,000 from Lucie and FRW 100,000 from Fred.</p><p>Lucie is the first employer and declares PAYE as normal: (FRW 60,000 * 0%) + (FRW 40,000 * 10%) + (FRW 20,000 * 20%) = FRW 8,000.</p><p>Fred is not the first employer, so Fred withholds PAYE of 30% on Charles's monthly taxable income: FRW 100,000 * 30% = FRW 30,000.</p><p>Charles has contributed PAYE equal to FRW 38,000. If his income had come from one employer, the PAYE due would have been FRW 30,000. Charles is entitled to submit a Personal Income Tax declaration to claim a refund of FRW 8,000, since the refund payable is more than FRW 5,000.</p></blockquote>",
        ],
      },
    },
    {
      id: "paye-declaration",
      title: {
        en: "PAYE declaration",
        fr: "Declaration PAYE",
        rw: "Kumenyekanisha PAYE",
      },
      content: {
        en: [
          "The process for declaring PAYE is different from other domestic taxes because PAYE is declared in the RSSB system called <a href=\"https://ishema.rssb.rw/en\">ISHEMA</a>.",
          "In ISHEMA, PAYE, pension, maternity scheme, medical scheme, and Community Based Health Insurance (CBHI) are declared through a single declaration. At the end of the process, the taxpayer receives acknowledgement receipts for each contribution and tax.",
          "The process for declaring PAYE, pension, medical, maternity, and CBHI is as follows:",
          "<ol><li>Using any internet browser, go to www.ishema.rssb.rw and input your personal phone number, then click login.</li><li>Enter the company's Tax Identification Number (TIN) and confirm company details.</li><li>Provide personal information, including full name, email address, phone number, and the password currently used to log in to RRA's e-Tax system.</li><li>For subsequent logins, use your phone number and One-Time Password (OTP). To generate the OTP, dial *876*4044# on the registered phone.</li></ol>",
          "On the first page of the platform, users can view company information, check compliance status, and file declarations.",
          "If this is your first time using ISHEMA, download the Excel template file called the unified annexure, populate it with employee salary details, select the desired month for filing, and upload the file.",
          "After upload, the system validates the data. If the data is accurate, the system displays a success message and allows the user to continue. If errors are detected, they must be corrected in the Excel file and the file must be uploaded again.",
          "After reviewing the pre-calculated amounts, confirm that the salary data provided for employees is true and accurate, then submit the declaration and print the acknowledgement receipt for records.",
          "<strong>Unified annexure</strong>",
          "The unified annexure for PAYE, pension, maternity, medical, and CBHI has one tab for a tax period. It is completed and uploaded as an Excel file.",
          "The unified annexure includes employee identity fields, employee category, scheme membership fields, basic salary, benefits in kind, lump sum transport, medical deductions, terminal benefits, retirement benefits, Ejo Heza contribution, and other pension funds.",
          "The system computes all components of tax and contributions based on legal provisions. Upon filing in ISHEMA, the filed information and payment, if made, are automatically sent to e-Tax.",
        ],
      },
    },
    {
      id: "paye-payment",
      title: {
        en: "PAYE payment",
        fr: "Paiement PAYE",
        rw: "Kwishyura PAYE",
      },
      content: {
        en: [
          "PAYE is declared and paid on a monthly basis. Alternatively, taxpayers with annual turnover below FRW 200,000,000 may request to declare on a quarterly basis.",
          "Whether monthly or quarterly, the PAYE declaration must be submitted and any tax paid by the 15th of the month following the end of the tax period.",
          "For monthly declarations, this means the PAYE declaration for the tax period between March 1 and March 31 must be declared and paid by April 15. The declaration for April 1 to April 30 must be declared and paid by May 15, and so on throughout the year.",
          "The quarters for taxpayers declaring PAYE on a quarterly basis are:",
          "<ul><li>January 1 to March 31 must be declared and paid by April 15.</li><li>April 1 to June 30 must be declared and paid by July 15.</li><li>July 1 to September 30 must be declared and paid by October 15.</li><li>October 1 to December 31 must be declared and paid by January 15.</li></ul>",
          "Even if PAYE is declared quarterly, RSSB contributions must still be declared on a monthly basis.",
        ],
      },
    },
  ],
  lastUpdated: centralTaxLastUpdated,
}
