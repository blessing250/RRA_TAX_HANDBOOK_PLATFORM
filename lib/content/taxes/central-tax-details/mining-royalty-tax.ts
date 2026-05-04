import {
  centralTaxLastUpdated,
  section,
  type CentralTaxDetailPage,
} from "@/lib/content/taxes/central-tax-details/shared"

export const miningRoyaltyTaxDetail: CentralTaxDetailPage = {
  slug: "mining-royalty-tax",
  title: { en: "Mining Royalty Tax", fr: "Redevance miniere", rw: "Umusoro ku bucukuzi bw'amabuye y'agaciro" },
  intro: {
    en: [
      "Mining Royalty Tax is a tax withheld from local mining operators by either a domestic mineral processing facility or an individual/entity exporting minerals from Rwanda.",
      "Tax on Minerals ensures that all Rwandans share in the benefits from the country's natural resources when these are taken out of Rwanda.",
      "Mining Royalty Tax is a type of withholding tax but cannot be claimed back in Income Tax declarations.",
    ],
  },
  sections: [
    section("registration", "Registration"),
    section("valuation-method-of-mining-royalty-tax", "Valuation method of Mining Royalty Tax"),
    section("tax-rates-per-minerals-category", "Tax rates per minerals category"),
    section("declaration", "Declaration"),
  ],
  lastUpdated: centralTaxLastUpdated,
}
