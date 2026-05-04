import type { LocalTaxDetailSection } from "@/lib/content/taxes/local-tax-details/shared"

export const declaringImportsAndExportsSection: LocalTaxDetailSection = {
  id: "declaring-imports-and-exports",
  title: {
    en: "Declaring Imports and Exports",
    fr: "Déclaration des importations et exportations",
    rw: "Kumenyekanisha ibitumizwa n'ibyoherezwa hanze",
  },
  content: {
    en: [
      "<strong>General procedure when declaring imports or exports at Border Posts or Dry Ports</strong>",
      "<ol><li>Taxpayer prepares all necessary documents and contracts a Clearing Agent.</li><li>The Clearing Agent prepares and submits an import or export declaration to RRA using the Rwanda electronic Single Window (ReSW).</li><li>The Clearing Agent receives assessment notices containing the amounts of customs duties due. The taxpayer pays all customs duties due, either directly or through the Clearing Agent. The assessment notice may contain different Doc IDs for different tax types; if so, each must be paid separately.</li><li>The ReSW system allocates the consignment to a Customs channel. If verification is required, Customs Officers request the necessary documents or access to the consignment.</li><li>After successful verification, the Customs Officer provides the taxpayer with a release order.</li><li>The taxpayer pays any due warehousing fees, if applicable, to the warehouse owner.</li><li>The taxpayer receives an exit note and may leave with the consignment.</li></ol>",
      "<strong>When consignments are continuing to Dry Ports for declaration</strong>",
      "<ul><li>The consignment is sealed to ensure that it is not opened or altered before reaching the Dry Port.</li><li>The Customs Officer generates a Warehousing Document on the Rwanda electronic Single Window (ReSW) system. This is provided for free.</li><li>The consignment may continue to the Dry Port and declaration begins there.</li></ul>",
      "When importing through the Dar Es Salaam or Mombasa ports, taxpayers may either carry out the full declaration process at the port, including payment and verification, or carry out the process for consignments continuing to Dry Ports, including sealing the consignment and generating a Warehousing Document.",
    ],
  },
}
