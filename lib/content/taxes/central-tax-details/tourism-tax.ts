import {
  centralTaxLastUpdated,
  section,
  type CentralTaxDetailPage,
} from "@/lib/content/taxes/central-tax-details/shared"

export const tourismTaxDetail: CentralTaxDetailPage = {
  slug: "tourism-tax",
  title: { en: "Tourism Tax", fr: "Taxe touristique", rw: "Umusoro ku bukerarugendo" },
  intro: {
    en: [
      "Tourism Tax is a levy paid on accommodation service, which consists of providing a room or place to sleep or rest.",
    ],
  },
  sections: [
    section("obligations", "Obligations"),
    section("registration", "Registration"),
    section("tax-rates", "Tax rates"),
    section("declaration", "Declaration"),
  ],
  lastUpdated: centralTaxLastUpdated,
}
