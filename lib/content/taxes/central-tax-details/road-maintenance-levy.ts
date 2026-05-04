import {
  centralTaxLastUpdated,
  section,
  type CentralTaxDetailPage,
} from "@/lib/content/taxes/central-tax-details/shared"

export const roadMaintenanceLevyDetail: CentralTaxDetailPage = {
  slug: "road-maintenance-levy",
  title: { en: "Road Maintenance Levy", fr: "Taxe d'entretien routier", rw: "Amafaranga yo gufata neza imihanda" },
  intro: {
    en: [
      "Road Maintenance Levy is a tax imposed on petrol, gas oil, and motor vehicles to fund road maintenance. The levy on petrol and gas oil is collected at the customs point.",
      "The levy on new or already registered motor vehicles is declared and paid annually to the Domestic Taxes Department, no later than 31st December of each year.",
    ],
  },
  sections: [
    section("registration", "Registration"),
    section("tax-rates", "Tax rates"),
    section("exemptions", "Exemptions"),
    section("application-for-road-levy-maintenance-exemption", "Application for Road Levy Maintenance exemption"),
    section("declaration", "Declaration"),
  ],
  lastUpdated: centralTaxLastUpdated,
}
