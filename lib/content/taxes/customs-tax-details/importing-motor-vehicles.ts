import type { LocalTaxDetailSection } from "@/lib/content/taxes/local-tax-details/shared"

export const importingMotorVehiclesSection: LocalTaxDetailSection = {
  id: "importing-motor-vehicles",
  title: {
    en: "Importing Motor Vehicles",
    fr: "Importation de véhicules",
    rw: "Kuzana ibinyabiziga mu gihugu",
  },
  content: {
    en: [
      "Imported motor vehicles must be declared at DPW - Masaka or Magerwa - Gikondo Dry Port. If the motor vehicle does not have a number plate, it receives a transit number plate until the process is completed.",
      "The process for declaring imported motor vehicles is similar to declarations of other goods, with the additional step of vehicle registration. Registration first requires the owner to have a Taxpayer Identification Number (TIN). The owner must also provide a passport photo and either a Rwandan ID card or passport.",
      "<strong>Valuation of imported brand new motor vehicles</strong>",
      "Brand new imported motor vehicles are valued at Cost, Insurance and Freight (CIF) using transaction price invoices or equivalent documents as normal. When a customs officer is not satisfied with the transaction price, other customs valuation methods can be applied.",
      "<strong>Valuation of used imported motor vehicles</strong>",
      "Used or second-hand imported motor vehicles are valued using the depreciation method. The transaction price may also be used in special circumstances.",
      {
        type: "table",
        headers: ["Date of manufacture", "Depreciation"],
        rows: [
          ["Less than 1 year ago", "0%"],
          ["Between 1 and 2 years ago", "20%"],
          ["Between 2 and 3 years ago", "30%"],
          ["Between 3 and 4 years ago", "40%"],
          ["Between 4 and 5 years ago", "50%"],
          ["Between 5 and 6 years ago", "55%"],
          ["Between 6 and 7 years ago", "60%"],
          ["Between 7 and 8 years ago", "65%"],
          ["Between 8 and 9 years ago", "70%"],
          ["Between 9 and 10 years ago", "75%"],
          ["More than 10 years ago", "80%"],
        ],
      },
      "<strong>Customs Duties on imported motor vehicles</strong>",
      "The rates of Customs Duties on imported motor vehicles depend on the vehicle category. A flat Motor Vehicle Registration Fee is also charged on all imported motor vehicles without exemptions.",
      {
        type: "table",
        headers: ["Vehicle category", "Import Duty", "Excise Duty", "VAT", "IDL", "WHT 5%", "AUL"],
        rows: [
          ["Non-utility: engine capacity below 1,500cc", "25%", "5%", "18%", "1.5%", "5%", "0.2%"],
          ["Non-utility: engine capacity 1,501cc to 2,500cc", "25%", "10%", "18%", "1.5%", "5%", "0.2%"],
          ["Non-utility: engine capacity above 2,501cc", "25%", "15%", "18%", "1.5%", "5%", "0.2%"],
          ["Utility: tractors", "0%", "0%", "18%", "1.5%", "5%", "0.2%"],
          ["Utility: minibuses with less than 25 seats", "25%", "0%", "18%", "1.5%", "5%", "0.2%"],
          ["Utility: buses with 25 seats or more", "10%", "0%", "18%", "1.5%", "5%", "0.2%"],
          ["Utility: pick-up truck", "25%", "0%", "18%", "1.5%", "5%", "0.2%"],
          ["Utility: truck carrying capacity below 20 tonnes", "10%", "0%", "18%", "1.5%", "5%", "0.2%"],
          ["Utility: truck carrying capacity 20 tonnes and above", "0%", "0%", "18%", "1.5%", "5%", "0.2%"],
        ],
      },
      "<strong>Special number plates and exemptions</strong>",
      "Normal number plates for Rwandan motor vehicles begin with RA. Some international institutions and foreign investors are exempt from all customs duties except Motor Vehicle Registration Fees. Special number plates include IT, CD and UN, and require supporting documents from public institutions.",
      "When transferring ownership of any motor vehicle with IT, CD or UN number plates to a buyer without the same status, the buyer must pay all Customs Duties due on imported motor vehicles, except Motor Vehicle Registration Fees already paid for that motor vehicle.",
      "Right-Hand Drive motor vehicles are not allowed to be imported into Rwanda except for diplomats, drivers with a medical condition with permission from the Ministry of Infrastructure, and trucks with carrying capacity above 20 tonnes.",
    ],
  },
}
