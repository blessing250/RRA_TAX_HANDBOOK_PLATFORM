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
      "A taxpayer who fails to submit a tax declaration and payment within the required deadline must still declare and pay, and is subject to penalties and fines.",
    ],
  },
  sections: [
    {
      id: "administrative-fine-for-non-declaration-and-non-payment",
      title: { en: "Administrative fine for non-declaration and non-payment", fr: "Amende administrative", rw: "Ihane ryo kutamenyekanisha no kutishyura" },
      content: {
        en: [
          "A taxpayer who fails to declare and pay tax within the time limit provided by law pays the tax due and is liable to an administrative fine.",
          {
            type: "table",
            headers: ["Delay", "Administrative fine"],
            rows: [
              ["Deadline exceeded by not more than 30 days", "20% of tax due"],
              ["Deadline exceeded by more than 30 days but not more than 60 days", "40% of tax due"],
              ["Deadline exceeded by more than 60 days", "60% of tax due"],
            ],
          },
        ],
      },
    },
    {
      id: "interest-rates-for-late-payment",
      title: { en: "Interest rates for late payment", fr: "Interets de retard", rw: "Inyungu z'ubukererwe" },
      content: {
        en: [
          {
            type: "table",
            headers: ["Delay period", "Interest rate"],
            rows: [
              ["Delay not exceeding 6 months", "0.5%"],
              ["Delay of 6 months but not more than 12 months", "1%"],
              ["Delay of more than 12 months", "1.5%"],
            ],
          },
        ],
      },
    },
    {
      id: "fixed-administrative-fines-for-late-filing",
      title: { en: "Fixed administrative fines for late filing", fr: "Amendes fixes pour depot tardif", rw: "Amande agenwe yo gutinda kumenyekanisha" },
      content: {
        en: [
          {
            type: "table",
            headers: ["Taxpayer category", "Fixed fine"],
            rows: [
              ["Annual turnover below FRW 20,000,000", "FRW 50,000"],
              ["Annual turnover above FRW 20,000,000, public institution, or non-profit organization", "FRW 300,000"],
              ["Large taxpayer category", "FRW 500,000"],
            ],
          },
        ],
      },
    },
    {
      id: "penalties-for-late-payment-despite-timely-declaration",
      title: { en: "Penalties for late payment despite timely declaration", fr: "Penalites pour paiement tardif", rw: "Ibihano byo gutinda kwishyura" },
      content: {
        en: [
          "A taxpayer who declared tax on time but did not pay is subject to a fine for late payment depending on the period.",
          {
            type: "table",
            headers: ["Payment delay", "Fine"],
            rows: [
              ["Payment deadline exceeded by not more than 30 days", "5% of tax due"],
              ["Payment deadline exceeded by more than 30 days but not more than 60 days", "10% of tax due"],
              ["Payment deadline exceeded by more than 60 days", "30% of tax due"],
            ],
          },
          "A taxpayer granted an extension for submitting a tax declaration is not subject to administrative fine for late payment unless the taxpayer fails to respect the extension period. Interest for late payment remains due.",
        ],
      },
    },
    {
      id: "repeat-the-offense",
      title: { en: "Repeat the offense", fr: "Recidive", rw: "Gusubira mu ikosa" },
      content: {
        en: [
          "Administrative fines double for a second late filing and triple for the third and subsequent offences of the same tax type if repeated within five years.",
        ],
      },
    },
    {
      id: "penalties-for-tax-underdeclaration",
      title: { en: "Penalties for tax underdeclaration", fr: "Penalites pour sous-declaration", rw: "Ibihano byo kumenyekanisha make" },
      content: {
        en: [
          "Penalties depend on whether the taxpayer rectifies their own declaration or whether RRA finds that the taxpayer declared less than the correct amount.",
          "If RRA finds that the declared tax due is at least 10% but not more than 20% lower than the correct amount, the taxpayer must pay the difference and a fine of 10% of the understatement.",
          "If RRA finds that the declared tax due is more than 20% lower than the correct amount, the taxpayer must pay the difference, a fine of 20% of the understatement, and monthly interest of 1.5%.",
          "If a taxpayer self-reassesses after the deadline but before notification of an imminent audit, the fine is 5%, 10%, or 30% depending on whether the declaration and payment deadline was exceeded by not more than 30 days, by 30 to 60 days, or by more than 60 days.",
        ],
      },
    },
    {
      id: "rules-concerning-interest-fixed-fines-and-repeat-offenders",
      title: { en: "Rules concerning interest, fixed administrative fines and repeat offenders", fr: "Regles sur interets et recidive", rw: "Amategeko agenga inyungu n'isubiracyaha" },
      content: {
        en: [
          "Interest is non-compounding. Interest is charged on the principal amount, not on interest.",
          "Interest is charged from the first day after the tax should have been paid until the day of payment, which is included. Every month that begins is considered a complete month.",
          "Interest cannot exceed 100% of the original tax due.",
          "If an offence is repeated within two years, the fixed administrative fine is doubled. If repeated again within two years, the fixed administrative fine is quadrupled.",
        ],
      },
    },
    {
      id: "payment-allocation-rule",
      title: { en: "Rule for payment allocation between principal tax, penalties, and interest", fr: "Regle d'affectation du paiement", rw: "Uko ubwishyu bugabanywa" },
      content: {
        en: [
          "When a taxpayer makes a payment after being subjected to penalties and interest, the system allocates payment in this order:",
          "<ol><li>Principal tax.</li><li>Penalties.</li><li>Interest.</li></ol>",
        ],
      },
    },
  ],
  lastUpdated: localTaxLastUpdated,
}
