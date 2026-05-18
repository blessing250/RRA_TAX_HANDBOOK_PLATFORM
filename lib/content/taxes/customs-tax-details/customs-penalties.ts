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
    ` Penalties for Customs offences concerning both imports and exports are listed in Articles from 93 to 218 of the EAC Customs Management Act (CMA). This Tax Handbook gives some examples of the offences and penalties. The latest version of the EAC CMA is available  <a href="https://www.rra.gov.rw/fileadmin/user_upload/eac_cma__2004_updated.pdf">on the RRA website</a>`,
  ` Note that penalties described as ‘not exceeding’ may be reduced through amicable agreement with the taxpayer`,
 `<strong> a)  When can goods be seized by RRA</strong>`,
           `RRA has the right to forfeiture (seize without compensation) any of the following types of goods:`,
            `<ul>
           <li> 	Prohibited goods.</li>
           <li>   	Restricted goods dealt with contrary to regulations.</li>
            <li>	Uncustomed goods, where goods have not followed full and correct customs procedures.</li>
           <li>Concealed goods, or goods mislabelled or contained in any way likely to deceive any officer.</li>
         <li>Smuggled goods.</li>
        <li>	Falsely documented or declared goods.</li>
      <li>  	Goods subject to Customs control which are without authorisation moved, altered or interfered with.</li>
     </ul>`,
          ` <strong> b) What are the penalties for concealing, smuggling or mislabelling goods</strong>`,
                 ` Anyone who is found concealing or smuggling any goods, or which are mislabelled or contained in anyway likely to deceive any officer is liable on conviction to:`,
                 `<ul>
                <li>Pay any unpaid Customs duties.</li>
              <li>	Imprisonment not exceeding five years.</li>
               <li>Fine not exceeding 50% of the dutiable value (CIF) of the goods.</li>
               <li>Confiscation of goods.</li>
              <li>	Additional fines provided under VAT and Excise Duty laws may also apply.</li>
                    </ul>`,
                `<strong> c) Penalties for submitting false documents or declarations.</strong>`,
                `  Anyone who submits any documents that are found to be false or incorrect is liable on conviction to:`,
                `<ul>
                <li>  Pay any unpaid Customs duties.</li>
               <li>Imprisonment not exceeding three years.</li>
              <li>	Fine not exceeding USD 10,000 (ten thousand US dollars).</li>
             <li> Additional fines provided under VAT and Excise Duty laws may also apply.</li>
             </ul>`,
         `<strong>d)  Penalties for interfering with goods subject to Customs control without authorisation </strong>`,
                 ` Anyone who moves, alters, interferes with goods subject to Customs control without authorisation is liable on conviction to:`,
                 `<ul>
                 <li>	Pay any unpaid Customs duties.</li>
               <li>Imprisonment not exceeding three years.</li>
              <li>	Fine not exceeding USD 1,000 (one thousand US dollars).</li>
              </ul>`,
          `<strong> e)  Penalty for aiding or abetting any offences</strong>`,
                `  Anyone who aids, abets, counsels or procures the commission of an offence is liable to the same penalty prescribed for that offence. `,

  ],
  },
}
