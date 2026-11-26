import {
  centralTaxLastUpdated,
  type CentralTaxDetailPage,
} from '@/lib/content/taxes/central-tax-details/shared';
import { View } from 'lucide-react';

export const payeDetail: CentralTaxDetailPage = {
  slug: 'pay-as-you-earn',
  title: {
    en: 'Pay As You Earn (PAYE)',
    fr: 'Pay As You Earn (PAYE)',
    rw: 'Pay As You Earn (PAYE)',
  },
  intro: {
    en: [
      'PAYE is a tax on employment income. It is withheld by employers on behalf of their employees for efficient collection.',
          ' If the employer is not required to withhold employment income tax under a ratified international agreement, the employee must declare and pay the tax within 15 days after the end of each month. ',
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
          `Any person who pays employees salaries, allowances, or benefits in cash or in kind must register for PAYE, declare it, and pay the tax on behalf of their employees.`,
          `<ul>
            <li><strong>Cash payments:</strong> Money paid in notes or electronically.</li>
            <li><strong>Payments in kind:</strong> Goods or services provided instead of money. (For more information on the taxation of benefits in kind, see Article 18 of the Income Tax Law of 2022, available<a href="https://www.rra.gov.rw/fileadmin/user_upload/Income_Tax_law_of_2022.pdf" target="_blank" rel="noopener noreferrer"> here</a>. ) </li>
            </ul>`,

          `<blockquote><strong>Example</strong>
            <p>Amahoro owns a small shop. She has one employee, Ubumwe. Amahoro must withhold, declare and pay PAYE on Ubumwe’s employment income. This is done by Amahoro on behalf of Ubumwe so Ubumwe does not need to declare or pay any further taxes on this income.</p>
          </blockquote>`,
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
           `Taxable employment income includes all payments to an employee in cash or in kind.`,
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
          `Employment income that is exempt from taxation is:
            <ul>
              <li>
                Reimbursement of expenses incurred by the employee if wholly and exclusively for business activities of the employer. 
              </li>
              <li>
                Retirement contributions or pension payments made by the employer on behalf of the employee to Rwanda Social Security Board (RSSB).
              </li>
              <li>
                Pension payment from the public institution in charge of social security or from a qualified pension fund.
              </li>
                <li>Employment income received by an employee who is not a citizen of Rwanda from a foreign government or NGO under an agreement signed by the Government of Rwanda and when the income is received in performance of aid services in Rwanda.
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
          `For PAYE purposes, employees are grouped into three categories:`,
          `<ul>
          <li><strong>Permanent employees:</strong> They are considered permanent unless they meet the conditions for casual labourers or employees with more than one employer.</li>
          <li><strong>Casual labourers:</strong> Employees who perform unskilled work, do not use specialised machinery or equipment, and work for an employer for 30 days or less during a tax period.</li>
          <li><strong>Employees with more than one employer:</strong> Where an employee works for several employers, the first employer is the one who provides the employee with the main or longest-term employment and professional income.</li>
          </ul>`
        ],
      },
    },
    {
      id: 'tax-rates',
      title: {
        en: 'Tax rate',
        fr: "Taux d'imposition",
        rw: "Ibipimo by'umusoro",
      },
      content: {
        en: [
           `<strong>1.Tax rates for permanent employees</strong>`,
          `The groupings of income are called tax brackets. The tax rates for each tax bracket are:`,
              {
            type: 'table',
            headers: ['Monthly taxable income in Rwandan Francs', 'Tax rate'],
            rows: [
              ['FRW 0 - FRW 60,000', '0%'],
              ['FRW 60,001 - FRW 100,000', '10%'],
              ['FRW 100,001 - FRW 200,000', '20%'],
              ['Above FRW 200,000', '30%'],
            ],
          },
          `For PAYE Calculation, refer to the tax calculator available<a href="https://www.rra.gov.rw/en/tax-calculator/paye-calculator" target="_blank"> here</a>`,
           '<strong>2. Tax rates for casual labourers</strong>',
           `Income from a casual laborer is subject to tax on the special rate of 15%. `,
            `However, in computing casual laborer’s tax, an income not exceeding sixty thousand Rwandan francs (60,000 FRW) per month is rated at 0%.`, 
            `<blockquote>        
         <strong>Example 1: </strong>
                           <p> Lucie employs Roy in an unskilled role on a temporary basis. Roy works for less than thirty days and Lucie pays him taxable income of FRW 80,000. As Roy is a casual labourer, the first FRW 60,000 is taxed at a rate of 0%, and the remaining FRW 20,000 is taxed at a rate of 15%. </p>
                           <p>The PAYE due on behalf of Roy is:</p>
                           <p> (FRW 60,000 * 0) + (FRW 20,000 * 15%) = FRW 0 + FRW 3,000 = FRW3,000.</p>
                           </blockquote>`,
                           `<strong>3. Employees with more than one employer</strong>`,
                           `The first employer declares the employee as a ‘permanent employee’ as normal. Any additional employers must withhold PAYE at the rate of 30% on all taxable income.`,
                           ` This may mean that the employee pays a higher amount of tax than would normally be expected if the income had come from just one employer. Resident individuals in Rwanda are able to claim a refund for excess Income Tax paid.`,
                            `<blockquote>
                           <strong>Example 1: </strong>
                            <p>Charles works separately for two employers, Lucie and Fred. Charles receives monthly taxable income of FRW 120,000 from Lucie and FRW 100,000 from Fred.  As he has a permanent contract from Lucie, Lucie is the first employer who declares PAYE as normal on behalf of Charles. The PAYE due declared by Lucie on behalf of Charles is:</p>
                           <p> (FRW 60,000 * 0) +(FRW 40,000 * 10%) + (FRW 20,000 * 20%) = FRW 0 + FRW 4,000+FRW 4,000= FRW 8,000 </p>
                           <p> As Fred is not the first employer of Charles, he withholds PAYE of 30% on Charles’ monthly taxable income. Fred withholds FRW 100,000 * 30% = FRW 30,000.</p>
                           <p> This shows that Charles has contributed PAYE equal to FRW 8,000+FRW 30,000=FRW 38,000</p>
                           <p> Assume that taxable income of FRW 220,000 came from one employer and computed as per normal PAYE brackets. The PAYE due would have been FRW 30,000.</p>
                            <p>Charles is entitled to submit a Personal Income Tax (PIT) declaration to claim a tax refund of FRW 38,000-FRW 30,000=FRW 8,000.</p>
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
          ` PAYE is normally declared and paid monthly, by the 15th of the following month.`,
          `Taxpayers with annual turnover below FRW 200 million may request to declare PAYE quarterly.`,
          `<ul>
          <li>	Jan–Mar: 15 April</li>
          <li>	Apr–Jun: 15 July</li>
          <li>Jul–Sep: 15 October</li>
          <li>Oct–Dec: 15 January</li>
          </ul>`,
          `<strong>Note:</strong> Even when PAYE is declared quarterly, RSSB contributions must still be declared monthly.`,

        ],
      },
    },
  ],
  lastUpdated: centralTaxLastUpdated,
};
