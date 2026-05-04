import {
  localTaxLastUpdated,
  section,
  type LocalTaxDetailPage,
} from "@/lib/content/taxes/local-tax-details/shared"

export const tradingLicenseDetail: LocalTaxDetailPage = {
  slug: "trading-license",
  title: {
    en: "Trading license",
    fr: "Licence commerciale",
    rw: "Icyangombwa cy'ubucuruzi",
  },
  intro: {
    en: [
      "Trading License Tax, also informally known as 'patent', is a tax levied on business activities carried out in defined boundaries of decentralized entities.",
      "The trading license can be declared and paid either annually or quarterly.",
    ],
  },
  sections: [
    section("tax-period", "Tax period"),
    section("registration", "Registration"),
    section("exemptions", "Exemptions"),
    section("trading-license-calculation", "Trading license calculation"),
    section("declaration-and-payment", "Declaration and payment"),
    section("trading-license-tax-certificate", "Trading License Tax Certificate"),
  ],
  lastUpdated: localTaxLastUpdated,
}
