import {
  localTaxLastUpdated,
  type LocalTaxDetailPage,
} from "@/lib/content/taxes/local-tax-details/shared"

export const domesticTaxPenaltiesAndFinesDetail: LocalTaxDetailPage = {
  slug: "domestic-tax-penalties-and-fines",
  title: {
    en: "Domestic Tax penalties and fines",
    fr: "Penalites et amendes fiscales domestiques",
    rw: "Ibihano n'amande ku misoro y'imbere mu gihugu",
  },
  intro: {
    en: [
              ` A taxpayer who has failed to submit a tax declaration and payment within the required deadline must still declare and pay, and is subject to:`,
        
    ],
  },
  sections: [
    {
      id: "administrative-fine-for-non-declaration-and-non-payment",
      title: { en: "Administrative fine for non-declaration and non-payment", fr: "Amende administrative", rw: "Ihane ryo kutamenyekanisha no kutishyura" },
      content: {
        en: [
         `   A taxpayer who fails to declare and pay tax within the time limit provided by law pays such a tax and is liable to an administrative fine as follows:`,
                    `<ol>
                   <li>   20% of the tax due if the time limit for declaration and payment has not been exceeded by thirty (30) days.</li>
                   <li> 40% of the tax due if the time limit for declaration and payment has been exceeded by thirty (30) days but has not been exceeded by sixty (60) days.</li>
                    <li>  60% of due taxes if the time limit for declaration and payment has been exceeded by sixty (60) days.</li>
                     </ol>`,
        ],
      },
    },
    {
      id: "interest-rates-for-late-payment",
      title: { en: "Interest rates for late payment", fr: "Interets de retard", rw: "Inyungu z'ubukererwe" },
      content: {
        en: [
       ` <ol>
                      <p>a) 0.5%, if the taxpayer has recorded a delay not exceeding six (6) months with respect to the time limit for payment.</p>
                       <p> b)  1% if the taxpayer has recorded a delay of six (6) months in tax payment but not more than twelve (12) months.</p>
                       <p> c)   1.5% if the taxpayer has recorded a delay of more than twelve (12) months.</p>
                            </ol>`,
        ],
      },
    },
    {
      id: "fixed-administrative-fines-for-late-filing",
      title: { en: "Fixed administrative fines for late filing", fr: "Amendes fixes pour depot tardif", rw: "Amande agenwe yo gutinda kumenyekanisha" },
      content: {
        en: [
              `<ul>
              <p>a)  FRW 50,000 for taxpayers with annual turnover below FRW 20,000,000.</p>
             <p>b)    FRW 300,000 for taxpayers with annual turnover above FRW 20,000,000, a public institution or a non-profit making organization.</p>
            <p> c)  FRW 500,000 for taxpayers who have been informed by RRA that they are in the category of ‘large’ taxpayers.</p>
                  </ul>`,
                  `<blockquote>
          <strong>Example </strong>
            <p>Ubumwe declared his monthly Value Added Tax (VAT) for the tax period of January 2024 late. Instead of declaring by the 15th February 2024, he declared and paid on 25th February 2024. The VAT Due for this tax period was FRW 80,000. Ubumwe is a small taxpayer. This was the first time that Ubumwe had declared late. Ubumwe’s penalty for declaring late is: - FRW 80,000 * 20% = FRW 16,000 - FRW 80,000 * 0.5% * 1 month = FRW 400 interest - FRW 50,000 administrative fine In addition to the FRW 80,000 tax due, Ubumwe must pay: FRW 16,000 + FRW 400 + FRW 50,000 = FRW 66,400.<p>
                  </blockquote>`,
        ],
      },
    },
    {
      id: "penalties-for-late-payment-despite-timely-declaration",
      title: { en: "Penalties for late payment despite timely declaration", fr: "Penalites pour paiement tardif", rw: "Ibihano byo gutinda kwishyura" },
      content: {
        en: [
          
                `  A taxpayer who declared the requisite tax on time, but did not pay, is subject to a fine for late payment depending on the period:`,
               ` <ol>
             <p> a) Five percent (5%) of the tax due when the time limit for payment has not been exceeded by thirty (30) days.</p>
             <p>b)  Ten percent (10%) of the tax due when the time limit for payment has been exceeded by thirty (30) days but not exceeded by sixty (60) days.</p>
            <p>C) Thirty percent (30%) of due taxes if the time limit for payment has been exceeded by sixty (60) days.</p>
                  <ol>`,
                 `<strong> Note:</strong>  A taxpayer to whom the Commissioner General granted extension for submitting tax declaration is not subject to administrative fine for late payment, unless the taxpayer failed to respect the extension period. However, interests for late payment remain due.`,
        ],
      },
    },
    {
      id: "repeat-the-offense",
      title: { en: "Repeat the offense", fr: "Recidive", rw: "Gusubira mu ikosa" },
      content: {
        en: [
            `  Administrative fines double for a second late filing and triple for the third and subsequent offenses of the same tax type if repeated within five years.`,
        ],
      },
    },
    {
      id: "penalties-for-tax-underdeclaration",
      title: { en: "Penalties for tax underdeclaration", fr: "Penalites pour sous-declaration", rw: "Ibihano byo kumenyekanisha make" },
      content: {
        en: [
            ` Penalties depend on whether the taxpayer rectifies their own tax declaration or whether the taxpayer is found by RRA to have declared less than the correct amount.`,
          ` <ul>
                      <p> a)  A taxpayer who submits a declaration, and is found by RRA to have declared lower tax due that is at least 10% of the correct amount but not exceeding 20% of the correct amount, must pay the difference and is subject to a fine of 10% of the amount of the understatement.
                      <p> b)  A taxpayer who submits a declaration, and is found by RRA to have declared lower tax due that is more than 20% of the correct amount, must pay the difference and is subject to a fine of 20% of the amount of the understatement and 1.5% interest on a monthly basis. 
                      <p>c) A taxpayer who submits a declaration, but realises that they have declared a lower amount due than the correct amount and conducts self-reassessment after the deadline but before notification of an imminent audit, must pay the difference and:
                     <p><strong>    A fine of:</strong></p>
                    <p>     i) Five percent (5%) of the tax due, if the time limit for declaration and payment has not been exceeded by thirty (30) days.</p>
                     <p>    ii) Ten percent (10%) of the tax due, if the time limit for declaration and payment has been exceeded by thirty (30) days but not exceeded by sixty (60) days.</p>
                     <p>    iii) Thirty percent (30%) of the tax due, if the time limit for declaration and payment has been exceeded by sixty (60) days.</p>
          </ul>`,
          `<blockquote>
          <strong>Example </strong>
               <p>Immaculée declares Pay As You Earn (PAYE) due of FRW 125,000 for a tax period. However, during an audit four months later RRA discovers that she should have declared PAYE due of FRW 165,000. The understatement is: - 1 – (FRW 125,000 / FRW 165,000) = 24.2%. Immaculée has to pay the FRW 40,000 difference and the penalty and interests of: - FRW 40,000 * 1.5% * 4 months = FRW 2,400 - FRW 40,000 * 10% * 2 = FRW 8,000</p>
               <p>In addition to paying the FRW 40,000 difference, Immaculée must pay FRW 8,000 + FRW 2,400= FRW 10,400.</p>
             </blockquote>`,
        ],
      },
    },
    {
      id: "rules-concerning-interest-fixed-fines-and-repeat-offenders",
      title: { en: "Rules concerning interest, fixed administrative fines and repeat offenders", fr: "Regles sur interets et recidive", rw: "Amategeko agenga inyungu n'isubiracyaha" },
      content: {
        en: [
       `<ul>
              <p> i) Interest is non-compounding. This means that interest is always on the principal amount, i.e., the tax due, there is no interest charged on interest. Interest is charged from the first day after the tax should have been paid until the day of payment, which is included. 
              <p>ii) Every month that begins is considered as a complete month. The interest cannot exceed 100% of the original tax due.
             <p>iii) If an offence is repeated on another occasion within two years, the fixed administrative fine is doubled. If the offence is repeated on any other occasions within two years, the fixed administrative fine is quadrupled. Taxpayers are informed by RRA whether they are categorised as small, medium or large taxpayers.
          </ul>`,
        ],
      },
    },
    {
      id: "payment-allocation-rule",
      title: { en: "Rule for payment allocation between principal tax, penalties, and interest", fr: "Regle d'affectation du paiement", rw: "Uko ubwishyu bugabanywa" },
      content: {
        en: [
           ` When a taxpayer makes a payment after being subjected to penalties and interest, the system allocates the payment as follows:`,
               ` <ul>
            <p>  a) Principal tax </p>
            <p> b)  Penalties</p>
            <p>c) Interests</p>
               <ul>`,
        ],
      },
    },
  ],
  lastUpdated: localTaxLastUpdated,
}
