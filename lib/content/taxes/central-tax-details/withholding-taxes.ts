import {
  centralTaxLastUpdated,
  type CentralTaxDetailPage,
} from "@/lib/content/taxes/central-tax-details/shared"

export const withholdingTaxesDetail: CentralTaxDetailPage = {
  slug: "withholding-taxes",
  title: {
    en: "Withholding Taxes",
    fr: "Retenues a la source",
    rw: "Imisoro ifatirwa",
  },
  intro: {
    en: [
      "Withholding taxes are paid on transactions on particular types of income. They are declared and paid by the taxpayer who is the source of the transaction, but on behalf of the recipient.",
      "The recipient is then able to claim the tax paid back in their Income Tax declarations.",
      "Withholding taxes ensure compliance by withholding tax on sources of income that might otherwise be difficult to trace. This increases the fairness of the tax system.",
    ],
  },
  sections: [
    {
      id: "types-of-withholding-taxes",
      title: {
        en: "Types of withholding taxes",
        fr: "Types de retenues a la source",
        rw: "Ubwoko bw'imisoro ifatirwa",
      },
      content: {
        en: [
          "Withholding taxes include WHT 15% and WHT 3%, which are withheld on different types of income.",
          "<strong>Withholding Tax of 15%</strong>",
          "This tax is withheld and paid on income received by non-registered businesses or registered businesses without proof of their most recent income tax declaration. It applies to:",
          "<ul><li>Interest income.</li><li>Dividend income.</li><li>Royalty income.</li><li>Service fees.</li><li>Performance payments.</li><li>Gambling proceeds.</li><li>Payments for goods.</li><li>Public tender income.</li></ul>",
          "Interest income includes income from loans, deposits, guarantees, current accounts, government securities, bonds, and negotiable securities. Dividend income includes income from shares and similar income distributed by companies. Royalty income includes payments received for the use of copyright, trademarks, designs, software, patents, industrial or scientific equipment, or rights to exploit natural resources.",
          "Service fees include payments to a person other than an employee for managerial, technical, or consultancy services. Board members allowance attracts 30% withholding tax.",
          "<strong>Withholding Tax of 3%</strong>",
          "WHT 3% is withheld and paid by public institutions on payments to successful bidders of public tenders who are registered and have proof of their recent income tax declaration. Tax Compliance Certificate holders are not required to have WHT 3% withheld on their behalf.",
          "<strong>Other withholdings</strong>",
          "Double Taxation Agreements may reduce withholding tax rates. Other withholding taxes include preferential tax on investments, tax on partners in partnerships, WHT of 5% on imports for commercial use, WHT of 18% on VAT withheld by a public procuring entity, and mining-related withholding tax of 0.5% or 3% depending on the type of mineral.",
        ],
      },
    },
    {
      id: "registration",
      title: { en: "Registration", fr: "Registration", rw: "Kwiyandikisha" },
      content: {
        en: [
          "Any taxpayer who makes payments of income that are subject to any withholding tax is required to register with the tax administration.",
        ],
      },
    },
    {
      id: "calculation",
      title: { en: "Calculation", fr: "Calcul", rw: "Kubara" },
      content: {
        en: [
          "Withholding taxes are calculated before transmitting transactions of taxable income. The net amount of income transmitted is equal to taxable income minus tax due.",
          {
            type: "table",
            headers: ["Formula", "Meaning"],
            rows: [
              ["Net Amount = Taxable Income - Tax Due", "Amount transmitted after withholding tax"],
              ["Tax Due = Taxable Income * Tax Rate", "Withholding tax amount"],
            ],
          },
          "The taxable income excludes any other taxes due on the transaction, such as Value Added Tax (VAT). In specific circumstances, transactions may be subject to reduced withholding tax rates because of double taxation avoidance agreements.",
        ],
      },
    },
    {
      id: "declaration",
      title: { en: "Declaration", fr: "Declaration", rw: "Kumenyekanisha" },
      content: {
        en: [
          "Withholding taxes, including WHT 15% and WHT 3%, are declared and paid on a monthly basis. The withheld tax should be declared and paid to the Tax Administration within fifteen days following the month in which the tax was withheld.",
          "Declaration is done electronically through the e-Tax system. A separate declaration is required for each type of withholding tax, including the different income types subject to WHT 15%.",
          "<strong>Annexures</strong>",
          "Download the withholding annexures from the e-Tax website. Each withholding tax type must complete its own annexure and declaration separately before beginning the next type.",
          "The withholding annexure file has three tabs. Only the Withholdings tab needs to be completed, validated, and saved for withholding taxes. The other tabs are for Gaming Taxes.",
          "The Withholdings tab is applicable for any taxpayer who has withheld tax of 15%, except on gambling proceeds, or 3%. Each row is for a separate transaction where tax has been withheld.",
          "For each transaction, enter the withholdee TIN, withholdee name, invoice or transaction number, date of withholding, nature of goods or services, amount on which to withhold, rate used, and amount withheld.",
          "After completing the annexure, select the correct withholding tax type in e-Tax, complete the declaration form, upload the annexure, compare the values, certify, and submit.",
        ],
      },
    },
    {
      id: "penalties-and-fines",
      title: { en: "Penalties and fines", fr: "Penalites et amendes", rw: "Ibihano n'amande" },
      content: {
        en: [
          "Any penalties and fines are the liability of the withholding agent. The withholding agent is the source of the taxable income who is required to declare and pay the withholding tax.",
          "A withholding agent who fails to withhold tax at the point of transaction is still liable to declare and pay the withholding tax, including penalties and fines.",
          "The withholding agent is entitled to recover the principal amount from the recipient of the income.",
          "Taxpayers may claim back withholding taxes that have been withheld and paid on their behalf in Income Tax declarations.",
        ],
      },
    },
  ],
  lastUpdated: centralTaxLastUpdated,
}
