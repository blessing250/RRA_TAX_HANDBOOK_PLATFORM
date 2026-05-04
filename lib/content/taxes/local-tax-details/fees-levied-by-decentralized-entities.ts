import {
  localTaxLastUpdated,
  section,
  type LocalTaxDetailPage,
} from "@/lib/content/taxes/local-tax-details/shared"

export const feesLeviedByDecentralizedEntitiesDetail: LocalTaxDetailPage = {
  slug: "fees-levied-by-decentralized-entities",
  title: {
    en: "Fees Levied by Decentralized entities",
    fr: "Frais preleves par les entites decentralisees",
    rw: "Amahoro y'inzego zegerejwe abaturage",
  },
  intro: {
    en: [
      "Fees levied on services and certificates delivered by decentralised entities include fees on the use of public domain of State, fees on services delivered by decentralised entities, and charges levied as fees.",
      "However, a decentralised entity is prohibited to set any other kind of fees or charges levied as fees not specified in the Presidential Order determining fees levied on services and certificates delivered by decentralised entities.",
    ],
  },
  sections: [
    section("third-parties-that-collect-decentralised-entities-fees", "Third parties that collect decentralised entities fees"),
    section("declaration-and-payment", "Declaration and payment"),
    section("decentralized-entities-fees-and-rates", "Decentralized entities' fees and rates"),
    section("registration", "Registration for Decentralised Entities Taxes and Fees"),
    section("declaring-using-lgt-system", "Declaring Decentralised Entities Taxes and Fees using the LGT system"),
    section("penalties-and-fines", "Penalties and Fines"),
  ],
  lastUpdated: localTaxLastUpdated,
}
