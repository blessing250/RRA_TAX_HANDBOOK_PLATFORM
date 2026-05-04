import {
  localTaxLastUpdated,
  section,
  type LocalTaxDetailPage,
} from "@/lib/content/taxes/local-tax-details/shared"

export const customsTaxesDetail: LocalTaxDetailPage = {
  slug: "customs-taxes",
  title: {
    en: "Customs Taxes",
    fr: "Taxes douanieres",
    rw: "Imisoro ya gasutamo",
  },
  intro: {
    en: [
      "Customs duties are defined as all taxes, duties, levies and fees that are required to be paid to RRA on imported or exported goods. There is only a nominal processing fee for exports. Customs duties are paid by the importer or exporter of the goods, typically through a Clearing Agent.",
    ],
  },
  sections: [
    section("types-of-customs-duties", "Types of customs duties"),
    section("border-posts-and-dry-ports", "Border Posts and Dry Ports"),
    section("border-posts-and-dry-ports-facilities", "Border Posts and Dry Ports"),
    section("customs-clearing-agents", "Customs (clearing ) Agents"),
    section("declaring-imports-and-exports", "Declaring Imports and Exports"),
    section("customs-facilities", "Customs facilities"),
    section("mobile-cargo-scanners", "Mobile Cargo Scanners"),
    section("importing-motor-vehicles", "Importing Motor Vehicles"),
    section("customs-penalties", "Customs Penalties"),
  ],
  lastUpdated: localTaxLastUpdated,
}
