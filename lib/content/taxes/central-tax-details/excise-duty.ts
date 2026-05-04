import {
  centralTaxLastUpdated,
  section,
  type CentralTaxDetailPage,
} from "@/lib/content/taxes/central-tax-details/shared"

export const exciseDutyDetail: CentralTaxDetailPage = {
  slug: "excise-duty",
  title: { en: "Excise Duty", fr: "Droits d'accise", rw: "Amahoro ku bicuruzwa byihariye" },
  intro: {
    en: [
      "Excise Duty is a tax applied to specific products. This means that it is able to discourage consumption with negative social impacts. This can reduce the costs of healthcare and policing, whilst raising significant revenues for further government spending. As Excise Duties are charged on the consumption of certain products, it is also referred to as an 'excise tax'.",
    ],
  },
  sections: [
    section("registration", "Registration"),
    section("obligations-of-taxpayers-registered-for-excise-duty", "Obligations of taxpayers registered for Excise Duty"),
    section("who-pays-excise-duty", "Who pays Excise Duty"),
    section("valuation-methods-of-excise-duty", "Valuation methods of Excise Duty"),
    section("taxable-products-and-rates", "Taxable products and rates"),
    section("exemptions-for-excise-duty", "Exemptions for Excise Duty"),
    section("tax-stamps", "Tax stamps"),
    section("annexures", "Annexures"),
    section("declaration-and-payment", "Declaration and payment"),
    section("penalties-for-tax-stamp-non-compliance", "Penalties for tax stamp non compliance"),
  ],
  lastUpdated: centralTaxLastUpdated,
}
