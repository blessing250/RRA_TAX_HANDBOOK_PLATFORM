import {
  centralTaxLastUpdated,
  type CentralTaxDetailPage,
} from "@/lib/content/taxes/central-tax-details/shared"

export const gamingTaxesDetail: CentralTaxDetailPage = {
  slug: "gaming-taxes",
  title: {
    en: "Gaming Taxes",
    fr: "Taxes sur les jeux",
    rw: "Imisoro ku mikino",
  },
  intro: {
    en: [
      "Gaming taxes include Gaming Tax and Withholding Tax of 25% on Gambling Proceeds, also referred to as Withholding on Payments (WOP) on Gaming or WOP-Gaming.",
      "These taxes are applied on the proceeds of gambling activities and can help reduce the negative social impacts associated with gambling.",
      "Gaming Tax is paid by the taxpayer on their income from gaming activities, while WOP-Gaming is withheld by the betting company on behalf of the player on their gambling proceeds.",
    ],
  },
  sections: [
    {
      id: "registration",
      title: { en: "Registration", fr: "Registration", rw: "Kwiyandikisha" },
      content: {
        en: [
          "Any operator of gaming activities is required to register for both Gaming Tax and WOP-Gaming.",
          "Gaming activities refer to any game played with cards, dice, tickets, equipment, or any machine where the result depends on the skill of the player or operator, the element of chance, or both, and is played for money or any representative of value.",
          "National lottery is exempted from Gaming Tax and WOP-Gaming.",
        ],
      },
    },
    {
      id: "gambling-proceeds",
      title: { en: "Gambling proceeds", fr: "Produits des jeux", rw: "Inyungu iva mu mikino" },
      content: {
        en: [
          "Gambling proceeds are defined as the difference between the winnings of a player and the amount of money invested by the player from the start until the end of the game.",
          "If this amount is negative, meaning the taxpayer received more money than they paid out, then the gambling proceeds are subject to Gaming Tax.",
          "If this amount is positive, meaning the player received more money than they paid out, then the gambling proceeds are subject to WOP-Gaming.",
        ],
      },
    },
    {
      id: "tax-rates",
      title: { en: "Tax rates", fr: "Taux d'imposition", rw: "Ibipimo by'umusoro" },
      content: {
        en: [
          "All gambling proceeds to the taxpayer are subject to Gaming Tax of 40%. Gambling proceeds paid to the player are subject to WOP-Gaming of 25%.",
          {
            type: "table",
            headers: ["Tax type", "Rate"],
            rows: [
              ["Gaming Tax", "40%"],
              ["WOP-Gaming", "25%"],
            ],
          },
          "<blockquote><p><strong>Example</strong>: Rukundo places a bet of FRW 24,000 with ABC Betting Ltd and loses the bet. His gambling proceeds are FRW 0 - FRW 24,000 = FRW -24,000.</p><p>Because the gambling proceeds are negative, ABC Betting Ltd declares and pays Gaming Tax of FRW 24,000 * 40% = FRW 9,600.</p></blockquote>",
          "<blockquote><p><strong>Example</strong>: Lucie cashes in FRW 160,000 with Rwanda Casinos Ltd and cashes out FRW 280,000, including her initial buy-in. Her gambling proceeds are FRW 280,000 - FRW 160,000 = FRW 120,000.</p><p>Rwanda Casinos Ltd withholds WOP-Gaming of FRW 120,000 * 25% = FRW 30,000, so the net amount transmitted to Lucie is FRW 250,000.</p></blockquote>",
        ],
      },
    },
    {
      id: "declaration",
      title: { en: "Declaration", fr: "Declaration", rw: "Kumenyekanisha" },
      content: {
        en: [
          "Both Gaming Tax and WOP-Gaming are declared and paid on a monthly basis. The declaration must be submitted and any tax paid within fifteen days of the end of the tax period in which the payment was made.",
          "Gaming Tax at 40% and Withholding Tax of 25% on Gambling Proceeds must each be declared separately, but in a similar manner.",
          "The declaration process for gaming taxes is similar to other domestic taxes. For both tax types, download the withholding annexures from the e-Tax website.",
          "The Withholding on Gaming 40% tab is applicable to transactions where gambling proceeds are negative and the betting company wins. The Withholding on Gaming 25% tab is applicable where gambling proceeds are paid out to the player.",
          "After completing, validating, and saving the relevant annexures, the taxpayer returns to e-Tax to complete the declarations, upload the annexures, compare values, certify, and submit.",
        ],
      },
    },
    {
      id: "gaming-taxes-penalties-and-fines",
      title: {
        en: "Gaming Taxes penalties and fines",
        fr: "Penalites et amendes sur les taxes de jeux",
        rw: "Ibihano n'amande ku misoro y'imikino",
      },
      content: {
        en: [
          "The penalties and fines for gaming taxes are similar to other domestic taxes. This includes penalties and fines for late declaration, late payment, declaring less than the correct tax due, and paying less than the tax due declared.",
          "These penalties apply separately to both Gaming Tax and Withholding Tax of 25% on Gambling Proceeds.",
          "Failure to declare or pay one tax type results in penalties and fines applying only to that tax type. Failure to declare or pay both tax types results in penalties and fines applying to both tax types.",
        ],
      },
    },
  ],
  lastUpdated: centralTaxLastUpdated,
}
