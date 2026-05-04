import {
  centralTaxLastUpdated,
  section,
  type CentralTaxDetailPage,
} from "@/lib/content/taxes/central-tax-details/shared"

export const gamingTaxesDetail: CentralTaxDetailPage = {
  slug: "gaming-taxes",
  title: { en: "Gaming Taxes", fr: "Taxes sur les jeux", rw: "Imisoro ku mikino" },
  intro: {
    en: [
      "Gaming taxes include Gaming Tax and Withholding Tax of 25% on Gambling Proceeds, also referred to as Withholding on Payments (WOP) on Gaming or 'WOP-Gaming'. These taxes are applied on the proceeds of gambling activities and can therefore help to reduce the negative social impacts associated with gambling.",
      "Gaming Tax is paid by the taxpayer on their income from gaming activities, whilst WOP-Gaming is withheld by the betting company on behalf of the player on their gambling proceeds.",
      "In each case, the taxpayer or player who is withheld from is then able to claim the tax paid back in income declarations. These tax types are both types of withholding taxes.",
    ],
  },
  sections: [
    section("registration", "Registration"),
    section("gambling-proceeds", "Gambling proceeds"),
    section("tax-rates", "Tax rates"),
    section("declaration", "Declaration"),
    section("gaming-taxes-penalties-and-fines", "Gaming Taxes Penalties and Fines"),
    section("gaming-taxes-penalties-and-fines-2", "Gaming Taxes Penalties and Fines"),
  ],
  lastUpdated: centralTaxLastUpdated,
}
