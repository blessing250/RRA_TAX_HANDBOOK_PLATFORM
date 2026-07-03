import {
  centralTaxLastUpdated,
  type CentralTaxDetailPage,
} from '@/lib/content/taxes/central-tax-details/shared';

export const payeDetail: CentralTaxDetailPage = {
  slug: 'pay-as-you-earn',
  title: {
    en: 'Pay As You Earn (PAYE)',
    fr: 'Pay As You Earn (PAYE)',
    rw: 'Pay As You Earn (PAYE)',
  },
  intro: {
    en: [
      'PAYE is tax on employment income. It is withheld by employers on behalf of their employees for efficient collection.',
    ],
  },
  sections: [
    {
      id: 'registration',
      title: {
        en: 'Registration',
        fr: 'Registration',
        rw: 'Iyandikishirizwa',
      },
      content: {
        en: [
          `Any taxpayer who pays employees in cash, benefits-in-kind or allowances is required to register for PAYE, declare and pay on behalf of their employees. Payments in cash refer to monetary payments in notes or electronically in any currency. Payments in kind refer to non-monetary payments of goods or services.`,
          `<blockquote><strong>Example</strong>
            <p>Amahoro owns a small shop. She has one employee, Ubumwe. Amahoro must withhold, declare and pay PAYE on Ubumwe’s employment income. This is done by Amahoro on behalf of Ubumwe so Ubumwe does not need to declare or pay any further taxes on this income.</p>
          </blockquote>`,
          `In the event that an employer has special authorisation from the Government of Rwanda that they are not required to declare and pay taxes on income, employees are required to register with RRA, declare and pay PAYE on their own behalf. `,
          `Employers are required to provide each employee with a statement each tax period showing:`,
          `<ul>
          <li>The employee’s name.</li>
          <li>The amount and type(s) of income received.</li>
          <li>The amount of PAYE and RSSB contributions that have been withheld and paid on their behalf.</li>
          </ul>`,
        ],
      },
    },
    {
      id: 'taxable-employment-income',
      title: {
        en: 'Taxable employment income',
        fr: "Revenu d'emploi imposable",
        rw: "Inyungu y'akazi isoreshwa",
      },
      content: {
        en: [
          `Taxable employment income includes all payments to an employee in cash or in kind such as:
          <ul>
           <li>Wages, salary, leave pay, sick pay and medical allowance, payment in lieu of leave, fees, commissions, bonuses, gratuity and incentives.</li>
          <li>Allowances including any cost of living, subsistence, entertainment, accommodation, rent, or travel allowance.</li>
          <li>Payments to the employee for their acceptance to work in any conditions of employment.</li>
          <li>Payments for redundancy, loss or termination of employment.</li>
          <li>Other payments made in respect of current, previous or future employment.</li>
           </ul>`,
        ],
      },
    },
    {
      id: 'exempted-employment-income',
      title: {
        en: 'Exempted employment income',
        fr: "Revenu d'emploi exonere",
        rw: "Inyungu y'akazi itasoreshwa",
      },
      content: {
        en: [
          `Employment income that is exempt from taxation includes:
            <ul>
              <li>
                Reimbursement of expenses incurred by the employee if wholly and exclusively for the business
                activities of the employer.
              </li>
              <li>
                Retirement contributions or pension payments made by the employer on behalf of the employee to
                Rwanda Social Security Board (RSSB).
              </li>
              <li>
                Retirement contributions made by the employer on behalf of the employee and/or contributions
                made by the employee to a qualified pension fund up to a maximum of 10% of the employee's
                employment income or FRW 1,200,000 per year, whichever is lower.
              </li>
              <li>
                Employment income received by an employee who is not a citizen of Rwanda from a foreign
                government or NGO under an agreement signed by the Government of Rwanda, when the income is
                received in performance of aid services in Rwanda.
              </li>
            </ul>
            `,
        ],
      },
    },
    {
      id: 'types-of-employees',
      title: {
        en: 'Types of employees',
        fr: "Types d'employes",
        rw: "Ubwoko bw'abakozi",
      },
      content: {
        en: [
          `There are three types of employees for the purposes of declaring PAYE. These are: permanent employees, casual labourers and employees with more than one employer.`,
          `All employees are regarded as permanent employees unless they fulfil the criteria for casual labourers or employees with more than one employer.`,
          `A casual labourer is an employee who performs unskilled labour activities, who does not use machinery or equipment requiring special skills, and who is engaged by an employer for not longer than thirty days during a tax period. `,
          `If an employee is employed by more than one employer, the employer who pays an annual professional income arising from a permanent work or from a longer contract than other employers may offer is referred to as the ’first employer. `,
        ],
      },
    },
    {
      id: 'paye-calculation',
      title: {
        en: 'PAYE calculation',
        fr: 'Calcul du PAYE',
        rw: 'Kubara PAYE',
      },
      content: {
        en: [
          `<strong>Benefits in kind</strong>`,
          `Benefits in kind can be more difficult to value than regular employment income. As a result, the valuation of benefits in kind includes:`,
          `<ul>
            <li>Providing an employee with access to and use of a motor vehicle during a tax period is valued at 10% of the employment income, excluding benefits in kind.</li>
            <li>Providing an employee with accommodation during a tax period is valued at 20% of the employment income, excluding benefits in kind.</li>
            <li>For a benefit on a loan including advance on salary exceeding three (3) months’ salary given to an employee, there is a difference between interests calculated at a rate of interest offered to commercial banks by National Bank of Rwanda and the actual interests paid by employees.</li>
          </ul>`,
          `<blockquote>
          <strong>Example</strong>
          <p>Innocent employs one employee called Ubumwe. In one tax period, Innocent pays Ubumwe FRW 35,000 in salary, a transport allowance of FRW 5,000 and provides Ubumwe with accommodation to live in.</p> 
           <p>The FRW 35,000 salary and the FRW 5,000 transport allowance are fully taxable. The accommodation benefit in kind that Ubumwe is provided with is valued at 20% of the taxable employment income. This is calculated as:</p>
          <p>(FRW 35,000 + FRW 5,000) * 20% = FRW 8,000.</p>
          <p>Therefore, the total taxable income that Innocent must declare PAYE for on behalf of Ubumwe is: </p>
          <p>FRW 35,000 + FRW 5,000 + FRW 8,000 = FRW 48,000</p>
          </blockquote>`,
          `<strong>Note that the rent of a house or motor vehicle directly paid by an employer for an employee is taxed as any other employment income.</strong>`,
          `<strong>Tax rates for permanent employees</strong>`,
          `There are different marginal tax rates for permanent employees depending upon their taxable employment income. The groupings of income are called tax brackets. The tax rates for each tax bracket are:`,
          {
            type: 'table',
            headers: ['Monthly taxable income', 'Marginal tax rate'],
            rows: [
              ['FRW 0 - FRW 60,000', '0%'],
              ['FRW 60,001 - FRW 100,000', '10%'],
              ['FRW 100,001 - FRW 200,000', '20%'],
              ['Above FRW 200,000', '30%'],
            ],
          },
          `It is important to note that these tax rates are marginal. This means that for each person each month, the first FRW 60,000 that they earn is taxed at 0%, the next FRW 40,000 they earn is taxed at 10%, the next FRW 140,000 they earn is taxed at 20%and any remaining income is taxed at 30%. This means that no taxpayer is made worse off by receiving income in a higher tax bracket. `,
          ` <blockquote>
<strong>Example </strong>
           <p>Amahoro employs two full-time employees, Rukundo and Lucie. Rukundo’s monthly taxable income is FRW 40,000. Lucie’s monthly taxable income is FRW 300,000. Amahoro declares PAYE on their behalf. </p>
          <p>Rukundo’s FRW 40,000 taxable income is in the first tax bracket. The first FRW 60,000 is taxed at 0%. The monthly PAYE tax due on behalf of Rukundo is: </p>
          <p> (FRW 40,000 * 0= FRW 0. </p>
          <p>Lucie’s FRW 360,000 taxable income is in the fourth tax bracket. The first FRW 60,000 is taxed at 0%, the next FRW 40,000 is taxed at 10%, the next FRW 100,000 is taxed at 20%, the remaining FRW 100,000 is taxed at 30%. The monthly PAYE tax due on behalf of Lucie is: </p>
          <p> (FRW 60,000 * 0) + (FRW 40,000 * 10%) + (FRW 100,000 * 20%) + (FRW 100,000 * 30%) = FRW 0 + FRW 4,000 + FRW 20,000 + FRW 30,000= FRW 54,000. </p>
</blockquote>`,

          '<strong>Tax rates for casual labourers</strong>',
          ` Similarly, there are different marginal tax rates for casual employees depending upon their taxable employment income. The groupings of income are called tax brackets. The tax rates for each tax bracket are:`,
          {
            type: 'table',
            headers: ['Monthly taxable income', 'Marginal tax rate'],
            rows: [
              ['FRW 0 - FRW 60,000', '0%'],
              ['Above FRW 60,000', '15%'],
            ],
          },
          `<blockquote>        
         <strong>Example 1</strong>
                           <p> Lucie employs Roy in an unskilled role on a temporary basis. Roy works for less than thirty days and Lucie pays him taxable income of FRW 80,000. As Roy is a casual labourer, the first FRW 60,000 is taxed at a rate of 0%, and the remaining FRW 20,000 is taxed at a rate of 15%. </p>
                           <p>The PAYE due on behalf of Roy is:</p>
                           <p> (FRW 60,000 * 0) + (FRW 20,000 * 15%) = FRW 0 + FRW 3,000 = FRW3,000.</p>
                          <p>  What are the tax rates for ‘employees with more than one employer’?</p>
                          <p>  The first employer declares the employee as a ‘permanent employee’ as normal. Any additional employers must withhold PAYE at the rate of 30% on all taxable income. </p>
                          <p>  This may mean that the employee pays a higher amount of tax than would normally be expected if the income had come from just one employer. Resident individuals in Rwanda are able to claim a refund for excess Income Tax paid if the tax refund payable exceeds FRW 5,000.</p>
                          </blockquote>`,
                          `<blockquote>
                          <strong>Example 2</strong>
                            <p>Charles works separately for two employers, Lucie and Fred. Charles receives monthly taxable income of FRW 120,000 from Lucie and FRW 100,000 from Fred.  As he has a permanent contract from Lucie, Lucie is the first employer who declares PAYE as normal on behalf of Charles. The PAYE due declared by Lucie on behalf of Charles is:</p>
                          <p>  (FRW 60,000 * 0) +(FRW 40,000 * 10%) + (FRW 20,000 * 20%) = FRW 0 + FRW 4,000+FRW 4,000= FRW 8,000 </p>
                           <p> As Fred is not the first employer of Charles, he withholds PAYE of 30% on Charles’ monthly taxable income. Fred withholds FRW 100,000 * 30% = FRW 30,000.</p>
                            <p>This shows that Charles has contributed PAYE equal to FRW 8,000+FRW 30,000=FRW 38,000
                            Assume that taxable income of FRW 220,000 came from one employer and computed as per normal PAYE brackets. The PAYE due would have been FRW 30,000.<p>
                           <p> Charles is entitled to submit a Personal Income Tax (PIT) declaration to claim a tax refund of FRW 38,000-FRW 30,000=FRW 8,000 since the tax refund payable is more than FRW 5,000.</p>
                          </blockquote>`,

        ],
      },
    },
    {
      id: 'paye-declaration',
      title: {
        en: 'PAYE declaration',
        fr: 'Declaration PAYE',
        rw: 'Kumenyekanisha PAYE',
      },
      content: {
        en: [
          `The process for declaring PAYE is different to the process for declaring other domestic taxes as this tax is declared in the RSSB system called <a href="https://ishema.rssb.rw/en" target="_blank" rel="noopener noreferrer"> ISHEMA</a>`,
          `In this system, a process of declaring PAYE, Pension, Maternity scheme, Medical scheme, and Community Based Health Insurance (CBHI) is using a single declaration at the end of which, a taxpayer gets acknowledgement receipts of each of the contribution and tax above. This is because all of them are based on the employee remuneration by the employer.`,
          ` The process for declaring PAYE, Pension, Medical, Maternity and CBHI is as follow:`,
          `<ul>
          <li>Using any internet browser, go to www.ishema.rssb.rw and input your personal phone number then click on login.</li>
          <li>Enter Company's TIN and Confirm Company Details: provide company's Tax Identification Number (TIN) and verify the details. Please ensure that the TIN entered is accurate and matches the official records.</li>
          <li>Provide Personal Information: provide personal information, including full name, email address, and phone number. Additionally, enter the password you currently use to log in to RRA's e-Tax system.</li>
         <strong>Note:</strong> that Steps above are one-time processes during initial registration. For subsequent logins, you will only be required to provide your phone number to access the platform.
          <li><strong>Login:</strong> To log in, a One-Time Password (OTP) is needed. To generate the OTP, simply dial *876*4044# on the registered phone. Enter the prompted code, and log in Ishema successfully. Enter this code when prompted, and you will be able to log in successfully.</li>
          </ul>`,
          `On the first page of the platform, you will have access to various activities, including: `,
          `<strong> 	View your company's information: </strong>You can review and manage the details of the company, as well as add additional users to the company's account. `,
          `Check your compliance status: easily monitor the taxpayer compliance status and track declaration history. This helps to staying informed about the tax obligations and ensure timely filings. `,
          `<strong>File declarations:</strong> The platform allows taxpayer to conveniently file a declaration, making the process efficient and streamlined. A taxpayer can submit tax-related information and document with ease.`,
          `<ul>
            <li>If this is your first time using the ISHEMA system, kindly download the provided Excel template file (Unified annexure). Populate the file with your employees' salary details.</li>
            <li>Once completed, select "Choose a file from your computer" and upload the Excel file into the system.</li>
            <li>Select the desired month for filing.</li>
          </ul>`,
          `<strong>There are two methods to file a declaration: </strong>`,
          `<ul>
          <li>Click on the "File declaration" button and select the desired month for filing.</li>
          <li>Alternatively, you can directly click on the specific month from the screen displayed below to proceed with the declaration.</li>
          <li>Upon uploading the file, the system will validate provided data. In case of accurate data, the system will display “success”. Click “Next” to continue. If any errors are detected in the data, they will be shown on the screen, rectify them by revisiting the Excel file. You will need to correct the errors before re-uploading the file to proceed further.</li>
          <li>Review and verify the pre-calculated amounts displayed by the system. These amounts represent the total payment for each scheme. Click "Next" to confirm and proceed.</li>
          <li>Read the message below attentively and ensure that the salary data provided for your employees is true and accurate. If you confirm its accuracy, click "Confirm" to continue. </li>
          <li>You successfully filed a declaration. Print the acknowledgment receipt for your records or click "View Details" to access additional information about your declaration.</li>
          </ul>`,
          `<strong> Note that after declaration, a taxpayer can, immediately or after a given time, proceed with a revision. A revision is initiated by clicking on ‘Revision Declaration as is shown in the following image.</strong>`,
          `<strong>Unified annexure</strong>`,
          `A unified annexure for PAYE, Pension, Maternity, Medial and CBHI has only one tab for a tax period. It needs to be completed and uploaded as Excel contrary to the annexure of E-Tax that needs to be downloaded, validated and saved, then uploaded in E-Tax.`,
          `<ul>
            <li>Name: Enter the employee’s name.</li>
            <li>Another name: Enter the employee’s other name.</li>
            <li>RSSB Number: Enter the employee’s Social Security Number (SSN) from RSSB.</li>
            <li>NID or Passport: Enter the employee’s National Identity Document (ID) number or employee passport number.</li>
            <li>Employee Category:
              <ul>
                <li>P = Permanent</li>
                <li>C = Casual, </li>
                <li>E = Exempted, </li>
                <li>S = Second Employer</li>
              </ul>
            </li>
            <li>Is an Employee A Rama Member?
              <ul>
                <li>Y = Yes,</li>
                <li>N = No</li>
              </ul>
            </li>
            <li>Employee Pays Pension?
              <ul>
                <li>Y = Yes,</li>
                <li>N = No</li>
              </ul>
            </li>
            <li>Employee Pays Mat Leave?
              <ul>
                <li>Y = Yes,</li>
                <li>N = No</li>
              </ul>
            </li>
            <li>Employee Pays CBHI?
              <ul>
                <li>Y = Yes,</li>
                <li>N = No</li>
              </ul>
            </li>
            <li><strong>Basic Salary:</strong> Enter the basic salary of the employee in Rwandan francs during the tax period.</li>
            <li><strong>Benefit in Kind Transport:</strong> If the employee benefits from access to and use of a motor vehicle provided by the employer during the tax period, enter 10% of the taxable income in FRW, excluding other benefits in kind.</li>
            <li><strong>Benefit in Kind House:</strong> If the employee benefits from accommodation provided by the employer during the tax period, enter 20% of the taxable income in FRW, excluding other benefits in kind.</li>
            <li><strong>Benefit in Kind Others:</strong> If the employee benefits from any benefits in kind from the employer other than transport or accommodation during the tax period, these are entered at market value in FRW.</li>
            <li><strong>Lump sum Transport:</strong> Amount Lump sum allowance.</li>
            <li><strong>Other Medical Deductions:</strong> Fill the amount if any.</li>
            <li><strong>Terminal Benefit End Contract:</strong> Fill the amount if any.</li>
            <li><strong>Retirement Benefits:</strong> Fill the amount if any.</li>
            <li><strong>Ejo-Heza Contribution:</strong> Fill the amount if any.</li>
            <li><strong>Other Pension Funds:</strong> Fill the amount if any.</li>
          </ul>`,
          `The system itself computes all components of tax and contributions based on legal provision. Upon filing in Ishema, the filed information and payment, if made, are automatically sent to E-Tax `,
        ],
      },
    },

    {
      id: 'paye-payment',
      title: {
        en: 'PAYE payment',
        fr: 'Paiement PAYE',
        rw: 'Kwishyura PAYE',
      },
      content: {
        en: [
          `PAYE is declared and paid on a monthly basis. Alternatively, taxpayers with annual turnover below FRW 200,000,000 may request to declare on a quarterly basis. `,
          `Whether monthly or quarterly, the PAYE declaration must be submitted and any tax paid by the 15th of the month following the end of the tax period.`,
          `For monthly, this means that PAYE monthly declarations concerning the tax period between March 1st and March 31st must be declared and paid by April 15th. Then declarations concerning the tax period between April 1st and April 30th must be declared and paid by May 15th and so on throughout the year.`,
          `The quarters for taxpayers declaring PAYE on a quarterly basis concern the tax period between:`,
          `<ul>
            <li>1st January to 31st March must be declared and paid by 15th April.</li>
            <li>1st April to 30th June must be declared and paid by 15th July.</li>
            <li>1st July to 30th September must be declared and paid by 15th October.</li>
            <li>1st October to 31st December must be declared and paid by 15th January.</li>
          </ul>`,
          `However, it is important to note that even if PAYE is declared quarterly, RSSB contributions must still be declared on a monthly basis. `,
        ],
      },
    },
  ],
  lastUpdated: centralTaxLastUpdated,
};
