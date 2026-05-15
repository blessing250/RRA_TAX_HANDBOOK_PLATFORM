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
              ` General procedure when declaring imports or exports at Border Posts or at Dry Ports`,
           `<strong>Step 1:</strong>     Taxpayer prepares all necessary documents and contracts a Clearing Agent.`,
        `<strong>  Step 2: </strong>          The Clearing Agent prepares and submits an import or export declaration to RRA using the Rwanda electronic Single Window (ReSW).`,
         `<strong>Step 3:</strong>    The Clearing Agent receives assessment notices, containing the amounts of customs duties due. The taxpayer pays all customs duties due, either directly or through the Clearing Agent. The assessment notice may contain different ‘Doc IDs’ for different tax types. If so, these must each be paid separately.`,
         `<strong>  Step 4:</strong> The ReSW system allocates the consignment to a certain Customs channel. If verification is required, Customs Officers will request the necessary documents and/or access to the consignment. If there are any problems, further action may be required.`,
          `<strong>Step 5:</strong> After successful verification, the Customs Officer provides the taxpayer with a release order.`,
         `<strong> Step 6:</strong>     The taxpayer pays any due warehousing fees, if applicable, to the warehouse owner.`,
       `<strong>   Step 7:</strong>         The taxpayer receives an exit note and may leave with their consignment.`,
              `<strong> When consignments are continuing to Dry Ports for declaration, what is the procedure at Border Posts?</strong>`,
                `  When declaring at Dry Ports except airports, see page 383, there are three steps to be fulfilled at the Border Posts whilst on the way to the Dry Ports. These are:`,
                `<ul>
                  <li> The consignment is sealed to ensure that it is not opened or altered before reaching the Dry Port.</li>
                  <li>   The Customs Officer generates a Warehousing Document on the Rwanda electronic Single Window (ReSW) system. This is provided for free.</li>
                  <li>   The consignment may continue to the Dry Port and begins declaration as explained on page 400.</li>
                  </ul>`,
         `<strong> What is the procedure at the ports of Dar es Salaam or Mombasa when importing?</strong>`,
                 ` There are two options available to taxpayers when importing through the Dar Es Salaam or Mombasa ports.`,
                 `Firstly, the full declaration process as explained on page 400 can be carried out at the port, including payment of Customs Duties and all necessary verifications.`,
                 ` Alternatively, the process for when consignments are continuing to Dry Ports for declaration as explained above can be carried out at the port, including sealing the consignment and generating a Warehousing Document. The document are then checked again at the Border Post on the way to the Dry Port and new seals are added. `,

    ],
  },
}
