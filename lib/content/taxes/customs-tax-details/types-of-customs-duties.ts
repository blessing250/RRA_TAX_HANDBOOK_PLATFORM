import type { LocalTaxDetailSection } from "@/lib/content/taxes/local-tax-details/shared"

export const typesOfCustomsDutiesSection: LocalTaxDetailSection = {
  id: "types-of-customs-duties",
  title: {
    en: "Types of customs duties",
    fr: "Types de droits de douane",
    rw: "Ubwoko bw'amahoro ya gasutamo",
  },
  content: {
    en: [
   `<strong> Taxes paid on imports that are also paid on domestic goods</strong>`,
   `<ul>
      <li>Value Added Tax (VAT)</li>
     <li>  Excise Duty</li>
           </ul>`,
   ` <strong>    Taxes that are specifically paid on imports</strong>`,
     `<ul>
          <li>Import Duty (ID)</li>
           <li>      Withholding Tax of 5% (WHT 5%)</li>
            <li> Infrastructure Development Levy (IDL)</li>
             <li>  Strategic Reserves Levy (SRL)</li>
             <li>  African Union Levy (AUL)</li>
             <li>  Environmental levy on imported items that are packaged in plastic materials.</li>
             <li>  Levy on petrol, gas oil and motor vehicles for road maintenance.</li>
             </ul>`,
          `<strong> Taxes that are specifically paid on exports</strong>`,
          `<ul>          
               <li>Export Duty on Raw Hides and Skins</li>
               <li>Export Tax - Minerals</li>
          <ul>`,

           `<strong>    Small fees on imports and exports </strong>`,
           `<ul>
              <li> Computer Processing Fee </li>
              <li> Quality Inspection Fee (QIF)</li>
                </ul>`,
              `  Customs duties ensure that local and foreign business can compete fairly, by ensuring a level playing field (VAT and Excise Duty), encouraging intra-regional trade (Import Duty), ensuring compliance of Income Tax (WHT 5%), funding beneficial projects (IDL, SRL and AUL) and supporting domestic manufacturing industries (Export Duty on Raw Hides and Skins), and by ensuring economic benefit, environmental stewardship, and social equity in the exploitation of mineral resources (Export Tax – Minerals). `,
                  `<strong> 1) Import Duty</strong>`,
                             ` Import Duty is a tax paid specifically on imported goods originating from outside of the EAC. The EAC Customs Union ensures a zero (0%) rate of Import Duty on all imports on goods originating from within the EAC. `,
                             `The EAC Customs Union means that the rates of import duty are agreed in the Common External Tariff (CET). The CET sets Import Duty rates on a product-by-product basis for each HS Code. The CET is available on the <a href=" https://www.rra.gov.rw/fileadmin/user_upload/EAC_CET_2022_version_JULY_23.pdf">  RRA website.</a>`,
                           ` The Common External Tariff (CET) applies a range of import duty rates across four tariff bands, with rates varying from a minimum of 0% to a maximum of 35%, depending on the type of goods:`,
                           `<ul>
                              <li>    Capital goods and raw materials = 0%</li>
                              <li>   Intermediate goods = 10%</li>
                              <li>    Finished goods = 25%</li>
                            <li>      Finished goods available in EAC = 35%</li>
                              </ul>`,
                             ` In addition to these standard rates, certain products are classified as sensitive goods, which may be subject to specific tariff rates or trade restrictions.`,
                             ` Some examples of sensitive goods which attract higher rate than 35% include:`,
                             `<ul>
                              <li>     0402.10.00 - In powder, granules or other solid forms, of a fat content, by weight, not exceeding 1.5% at a rate of 60% of CIF.</li>
                              <li>   1006.40.00 - Broken Rice at a rate of 75% of CIF or $345/MT whichever is higher.</li>
                              <li>    1701.99.10 - White refined sugar (for industrial use) at a rate of 100% of CIF or $ 460/MT whichever is higher</li>
                              <li>     1701.99.20 - Other sugar (for industrial use) at a rate of 100% of CIF or$ 460/MT whichever is higher. </li>
                              </ul>`,
                             `There are two exceptions where the above tariff rates can be temporally modified: ‘Stay of Applications’ and the ‘Duty Remission Scheme’.`,
                             `The amount of Import Duty to be paid is calculated by:`,
                             `Import Duty = CIF * Import Duty rate`,
                             ` In import declarations and assessment notices, Import Duty is referred to under code ‘C’, for example ‘C02’.`,
                           `<strong> 2) Handling Fees (HF)</strong>`,
                           `  Handling Fees are not actually paid, but are included in VAT and Excise Duty calculations. HF is calculated by:`,
                            `  Handling Fees (HF) = Net Weight (kg) * FRW 10 (FRW 10 per kg)`,
                            ` Net Weight (kg) refers to the weight of the goods in the consignment in kilograms.`,
                 `<strong>  3) Excise Duty </strong>`,
                                       ` Excise Duty is paid on specific products, regardless of whether they are produced domestically or imported. For more details on the products subject to Excise Duty, the basis and the rates.`,
                                       ` Excise Duty = (CIF + Import Duty + HF) * Excise Rate`,
                                       `In import declarations and assessment notices, Excise Duty is referred to under code ‘E’, for example ‘E01’.`,
                       `<strong>          4) Value Added Tax (VAT) </strong>`,
                                     `   VAT is paid on the majority of products, regardless of whether they are produced domestically or imported. The normal rate of VAT in Rwanda is 18%. For details on products that are exempted or zero-rated.`,
                                      ` Therefore, the VAT to be paid on imported goods is calculated by:`,
                                       ` VAT = (CIF + Import Duty + Excise Duty + HF) * VAT rate`,
                                       `Any VAT previously paid in a foreign country is not offset when calculating the VAT that is to be paid at Customs. This is expected to be refunded at the country of origin.`,
                                      `  Once VAT has been paid on imports at Customs, this amount can be claimed back in subsequent domestic VAT declarations. See page 222 for the information required when claiming back VAT paid on imports.`,
                                      ` In import declarations and assessment notices, VAT is referred to under code ‘V’, for example ‘V02’.`,
                        `<strong>        5) Withholding Tax of 5% (WHT 5%) </strong>`,
                                      `  WHT 5% is a tax paid specifically on imported goods. WHT 5% is paid by all taxpayers except for taxpayers with a valid Compliance Certificate (Quitus Fiscal), and persons exempted from income tax.`,
                                       `The WHT 5% to be paid on imported goods is calculated by:`,
                                      `  Withholding Tax of 5% (WHT 5%) = CIF * 5%`,
                                      ` Once WHT 5% has been paid at Customs, this amount can be claimed back in subsequent domestic Income Tax (PIT or CIT) declarations by the importing taxpayers. This can be claimed back in the annual declarations. `,
                                       ` In import declarations and assessment notices, WHT 5% is referred to under code ‘W’, for example ‘W01’.`,
                       `<strong>  6) Infrastructure Development Levy (IDL) </strong>`,
                                      `  IDL is a tax paid specifically on imported goods from outside of the EAC. IDL contributes to regional trade-facilitation infrastructure projects. IDL is paid on all imported goods, with the exception of those detailed in Article 5 of Law N°34/2015 of 30/06/2015 establishing the infrastructure development levy on imported goods, including:`,
                                      `<ul>
                                        <li>      Goods imported certifying the East African Community Rules of Origin.</li>
                                        <li>   Goods imported specified in the Fifth Schedule of the East African Customs Management Act.</li>
                                        <li>     Imported goods exempted from taxes as provided for in East African Community and industrial goods imported in Rwanda entitled to remission.</li>
                                        <Li>    Reproductive animals and reproductive plants.</li>
                                        <li>     Pharmaceutical products.</li>
                                        <li>     Veterinary and phytosanitary products.</li>
                                        <li>   Medical equipment appearing on the list made by the Minister in charge of health and approved by the Minister in charge of taxes.</li>
                                        <li>     Veterinary and phytosanitary equipment appearing on the list made by the Minister in charge of agriculture and animal husbandry and approved by the Minister in charge of taxes.</li>
                                        <li>      Industrial machinery and equipment for energy and water sectors, as well as for investment projects with investment certificate.</li>
                                        <li>      Organic and inorganic chemicals.</li>
                                        <li>     Machinery and equipment approved by the Commissioner General.</li>
                                        </ul>`,
                                       ` The IDL to be paid on imported goods is calculated by:`,
                                       ` Infrastructure Development Levy (IDL) = CIF * 1.5%`,
                          `<strong>      7) Strategic Reserves Levy (SRL) </strong>`,
                                       ` SRL is a tax paid specifically on imported fuel and petroleum products. SRL funds the purchase and safe maintenance of greater reserves of fuel. The SRL is paid at a specific rate per litre of fuel, calculated by:`,
                                       ` Strategic Reserves Levy (SRL) = FRW 50 per litre of fuel.`,
                            `<strong>     8) African Union Levy (AUL)</strong>`,
                                       `AUL is a tax paid specifically on imported goods. AUL contributes to the financing of African Union activities. AUL is paid on all imported goods, except for those subject to exemptions by the 5th Schedule of the EAC CMA, Duty Remission or VAT.`,
                                       ` The AUL paid on imported goods is calculated by:`,
                                       `African Union Levy (AUL) = CIF * 0.2%`,
                                       `In import declarations and assessment notices, AUL is referred to under code ‘AU’, for example ‘AU0’.`,
                           `<strong>    9) Environmental levy</strong>`,
                                      `  Environmental levy is a tax paid specifically on imported items that are packaged in plastic materials for the management of the resulting waste.`,
                                     `   Imported items provided for by the law are subjected to a levy of 0.2% to be calculated on their customs value. Items subject to environmental levy on imported items packaged in plastic materials are:`,
                                     `<ul>
                                       <li>Water</li>
                                        <li>    All types of juice, energy drinks and carbonated non-alcoholic beverages</li>
                                       <li> Peanut butter, honey and derived products</li>
                                      <li> All types of body lotions, petroleum jelly and shampoos</li>
                                     <li>  Mattresses</li>
                                    <li>   Clothes</li>
                                     <li>  Shoes</li>
                                     <li>  All types of soaps</li>
                                    <li>   Toilet papers</li>
                                        </ul>`,
                                       ` In import declarations and assessment notices, Environmental levy is referred to under code ‘EPL’.`,
                            `<strong>    10) Motor Vehicle Registration Fees (MVF)</strong>`,
                                      ` MVF are paid specifically on imported motor vehicles. MVF must be paid regardless of the type of vehicxle or the exemptions available to the importing taxpayer.`,
                                       ` MVF vary depending upon the engine capacity of the vehicle as measured in cubic centimetres (cc):`,
     {
            type: "table",
            headers: ["Engine Capacity(cc) between",  "Motor Vehicle Fees(MVF) for all Motor Vehicles"],
            rows: [
                       [" 0 to 1,000", "FRW 75,000"],
                      [" 1,001 to 1,500"," FRW 285,000"],
                      [ " 1,501 to 3,000FRW",   " 445,000"],
                      [" 3,001 to 4,500",  "FRW 748,000"],
                      ["  4,501 and above", " FRW 997,000"],
                      ["  Special Engine/Other categories",  " FRW 1,000,000 ",],
                      ["  Electric Vehicles",  "FRW 285,000",],
                      [ " All Electric Motorcycles", " FRW 75,000"] ,
                      ["  Personalized Plate Number", "  FRW 5,000,000"],           
            ],
          },
         ` The special engine category includes semi-trailers, construction vehicles and other very heavy vehicles.`,
      `<strong>   11)  Road Toll </strong>`,
               ` Road Toll is a fee paid specifically on foreign registered trucks entering Rwanda. Road Toll contributes to the Road Maintenance Fund (RMF) in Rwanda.`,
               `It is important to note that the Road Toll is paid per truck entering Rwanda, not per declaration. Therefore, this is paid separately to other Customs Duties.`,
               ` The Road Toll has two different rates, depending on the size of the trucks. The Road Toll must be paid by trucks every time they enter Rwanda. The rate of Road Toll is:`,
             `  <ul>
                 <li>    $76 USD for simple trucks</li>
                  <li>    $152 USD for semi-trailer, and trailer</li>
                </ul>`,
               `Road Toll is referred to as ‘FER’ in assessment notices.`,
          `<strong> 12)  Fuel Levy</strong>`,
                ` Fuel Levy is a tax paid specifically on imported fuel and petroleum products. Fuel Levy contributes to the Road Maintenance Fund (RMF) in Rwanda. The Fuel Levy is paid at a specific rate per litre of fuel. The Fuel Levy to be paid on imported fuel is calculated by:`,
                 `Fuel Levy = 15% of CIF`,
                 ` As with the Fuel Levy, Road Toll is referred to as ‘FER’ in import declarations and assessment notices.`,
         `<strong> 13) Export Duty on Raw Hides and Skins</strong>`,
                      `  Export Duty on Raw Hides and Skins is paid on all exports of unprocessed hides and skins to outside of the EAC.  The rate of Export Duty on Raw Hides and Skins is either:`,
                     ` <ul>
                        <li>          80% of FOB, or $0.52 per Kg, whichever is higher</li>
                        </ul>`,
                       ` In export declarations and assessment notices, Export Duty on Raw Hides and Skins is referred to as code ‘EX1’.`,
                        
           `<strong>      14) Export Tax – Minerals</strong>`,
                       ` Minerals exported in raw form are subject to an export tax as follows:`,
                      ` <ul>
                        <li>     2% of the norm value for the mineral category of base metals.</li>
                        <li>    3% of the norm value for the category of gemstones.</li>
                        <li>     2% of the norm value for the category of platinum group metals.</li>
                        <li>     1% of the norm value for the category of rare earth elements.</li>
                        <li>    2% of the norm value for the category of energy minerals.</li>
                        <li>    0.5% of the norm value for the category of gold.</li>
                        <ul>`,
                       `<strong>However, the law provides exemptions on Export Tax – Minerals as follows:</strong>`,
                       `-          Samples of minerals exported for the purpose of essay, analysis or any other examination are exempted from tax on minerals. A regulation of the competent authority determines the quantity of samples of minerals exempt from the tax on minerals.`,
                       `-          The processed minerals and imported minerals to be re-exported, except gold, are exempted from tax on minerals at export point.`,
                        
            `<strong>    15) Computer Processing Fee</strong>`,
                      ` The Computer Processing Fee is a fee paid for every import or export declaration that is submitted.`,
                       ` The Computer Processing Fee is:`,
                      ` -          FRW 3,000 per regular declaration`,
                       ` -          FRW 500 per simplified declaration`,
                     `   Computer Processing Fee is listed as a ‘global fee’ in import/export declarations and assessment notices.`,
              `<strong>   16) Quality Inspection Fees (QIF) </strong>`,
                      `  Quality Inspection Fees (QIF) are fees paid on specific imported products. Rwanda Inspectorate, Competition and Consumer Protection Authority (RICA), and Rwanda Food and Drugs Authority (Rwanda FDA) are institutions which both designates which products are required to be inspected and carry out the inspections. RRA collects QIF on behalf of related regulatory agencies mentioned above. The QIF to be paid on imported goods is calculated by:`,
                       `Quality Inspection Fees (QIF) = FOB * 0.2%`,
                       ` In import declarations and assessment notices, QIF are referred to under code ‘QIF’.`,
               `<strong>  17) Warehousing Fees </strong>`,
                      `  Warehousing Fees are paid when storing consignments in warehouses. It is important to note that these are paid directly to the warehouse owner and not to RRA. Rates may vary according to the warehouse, the size and weight of the consignment and how long it has been stored for.`,
                 `<blockquote>
                      <strong>Example : </strong>
                   <p>  Rukundo is importing a consignment of sports shoes packed in plastic materials from the United Kingdom. The HS Code is 6404.11.00 ‘Sports footwear…’. The net weight of the consignment is 75kg. The CIF value of the consignment is:</p>
                   <p>  -          Cost = FRW 2,800,000</p>
                   <p>  -          Insurance = FRW 75,000</p>
                  <p>  -          Freight = FRW 350,000</p>
                  <p>   -          CIF (Cost + Insurance + Freight) = FRW 3,225,000</p>

                 <p>    The Customs Duties that must be paid are:</p>
                 <p>    -          Import Duty = FRW 3,225,000 * 35% = FRW 1,125,750</p>
                <p>     -          Handling Fees (not paid) = FRW 10/kg * 75kg = FRW 750</p>
                 <p>    -          VAT = (FRW 3,225,000 + FRW 1,125,750 + FRW 750) * 18% = FRW 797,175</p>
                <p>     -          WHT 5% = FRW 3,225,000 * 5% = FRW 161,250</p>
                <p>     -          IDL = FRW 3,225,000 * 1.5% = FRW 48,375</p>
               <p>      -          AUL = FRW 3,225,000 * 0.2% = FRW 6,450</p>
                <p>     -          Environmental Levy = FRW 3,225,000 * 0.2% = FRW 6,450</p>
               <p>      -          Computer Processing Fee = FRW 3,000</p>
                   <p>  Therefore, the total duties to be paid are FRW 2,149,200.<p>
                   <p> Of this, the VAT of FRW 797,175 can be claimed back in domestic VAT declarations (as Rukundo is not the final consumer), and the WHT 5% of FRW 161,250 can be claimed back in domestic Income Tax declarations.<p>
                       </blockqoute>`,
                       `<blockquote>
                        <strong>     Example :</strong>
                      <p>Ubumwe is importing a consignment of Tusker beer from Kenya and presented EAC Certificate of Origin. The HS Code is 2203.00.90 ‘Beer made from malt’. The net weight of the consignment is 1,400kg. The CIF value of the consignment is:</p>
                     <p>-          Cost = FRW 1,100,000</p>
                     <p>  -       Insurance = FRW 55,000</p>
                     <p>-          Freight = FRW 450,000</p>
                    <p> -          Since the goods are on EAC territory, Customs Value does not include Insurance and Freight. Therefore, CIF = FRW 1,100,000</p
                   <p>  The customs duties that must be paid are:</p>
                  <p>   -          Import Duty = FRW 1,100,000 * 0% = FRW 0</p>
                   <p>  -          Handling Fee (not paid) = FRW 10/kg * 1,400kg = FRW 14,000</p>
                   <p>  -          Excise Duty = (FRW 1,100,000 + FRW 0 + FRW 14,000) * 65% = FRW 724,100</p>
                   <p>  -          VAT = (FRW 1,100,000 + FRW 0 + FRW 14,000 + FRW 724,100) * 18% = FRW 330,858</p>
                    <p> -          WHT 5% = FRW 1,100,000 * 5% = FRW 55,000</p>
                     <p>-          Computer Processing Fee = FRW 3,000</p>
                     <p>-          QIF = (FRW 1,100,000) * 0.2% = FRW 2,200</p>
                     <p>As Kenya is in the EAC Customs Unions the total duties to be paid are FRW 1,129,158.</p>
                   <p> Of this, the VAT of FRW 330,858 can be claimed back in domestic VAT declarations (as Ubumwe is not the final consumer), and the WHT 5% of FRW 55,000 can be claimed back in domestic Income Tax declarations.</p>
                       
                       </blockqoute>`,
                       `<blockquote>
              <strong>       Example: </strong>
                  <p>   Amahoro is importing a consignment of petrol from the United States of America. The HS Code is 2710.12.20 ‘Motor Spirit (gasoline) regular’. The consignment is 9,000 litres being transported in a semi-trailer truck. The CIF value of the consignment is:
                   <p>  -          Cost = FRW 6,500,000</p>
                   <p>  -          Insurance = FRW 400,000</p>
                   <p>  -          Freight = FRW 600,000</p>
                   <p>  -          CIF (Cost + Insurance + Freight) = FRW 7,500,000</p>
                  <p>   The Customs Duties that must be paid are:</p>
                   <p>  -          Excise Duty = FRW 183/litre * 9,000 litres = FRW 1,647,000</p>
                  <p>   -          VAT = FRW 275.1/litre * 9,000 litres = 2,475,900</p>
                   <p>  -          WHT 5% = FRW 7,500,000 * 5% = FRW 375,000</p>
                   <p>  -          IDL = FRW 7,500,000 * 1.5% = FRW 172,500</p>
                   <p>  -          SRL = FRW 50/litre * 9,000 litres = FRW 450,000</p>
                   <p>  -          Road Toll = $152 * FRW 832/$ = FRW 126,464</p>
                   <p>  -          Fuel Levy = FRW 7,500,000 * 15% = FRW 1,125,000</p>
                   <p>  -          AUL= FRW 6,500,000 * 0.2% = FRW 13,000</p>
                    <p> -          Computer Processing Fee = FRW 3,000</p>
                    <p> Therefore, the total duties to be paid are FRW 6,387,864.</p>
                    <p> Of this, the WHT 5% of FRW 375,000 can be claimed back in domestic Income Tax declarations</p>
                        </blockqoute>`,



    ],
  },
}
