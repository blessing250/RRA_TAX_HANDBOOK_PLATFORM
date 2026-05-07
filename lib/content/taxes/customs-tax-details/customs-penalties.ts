import type { LocalTaxDetailSection } from "@/lib/content/taxes/local-tax-details/shared"

export const customsPenaltiesSection: LocalTaxDetailSection = {
  id: "customs-penalties",
  title: {
    en: "Customs Penalties",
    fr: "Pénalités douanières",
    rw: "Ibihano bya gasutamo",
  },
  content: {
    en: [
      "Penalties for Customs offences concerning both imports and exports are listed in Articles 93 to 218 of the EAC Customs Management Act (CMA). Penalties described as not exceeding may be reduced through amicable agreement with the taxpayer.",
      "<strong>When can goods be seized by RRA?</strong>",
      "<ul><li>Prohibited goods.</li><li>Restricted goods dealt with contrary to regulations.</li><li>Uncustomed goods, where goods have not followed full and correct customs procedures.</li><li>Concealed goods, mislabelled goods, or goods contained in any way likely to deceive any officer.</li><li>Smuggled goods.</li><li>Falsely documented or declared goods.</li><li>Goods subject to Customs control moved, altered or interfered with without authorisation.</li></ul>",
      "<strong>Penalties for concealing, smuggling or mislabelling goods</strong>",
      "<ul><li>Pay any unpaid Customs duties.</li><li>Imprisonment not exceeding five years.</li><li>Fine not exceeding 50% of the dutiable value (CIF) of the goods.</li><li>Confiscation of goods.</li><li>Additional fines provided under VAT and Excise Duty laws may also apply.</li></ul>",
      "<strong>Penalties for submitting false documents or declarations</strong>",
      "<ul><li>Pay any unpaid Customs duties.</li><li>Imprisonment not exceeding three years.</li><li>Fine not exceeding USD 10,000.</li><li>Additional fines provided under VAT and Excise Duty laws may also apply.</li></ul>",
      "<strong>Penalties for interfering with goods subject to Customs control without authorisation</strong>",
      "<ul><li>Pay any unpaid Customs duties.</li><li>Imprisonment not exceeding three years.</li><li>Fine not exceeding USD 1,000.</li></ul>",
      "Anyone who aids, abets, counsels or procures the commission of a Customs offence is liable to the same penalty prescribed for that offence.",
    ],
  },
}
