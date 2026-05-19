import type { LocalTaxDetailSection } from '@/lib/content/taxes/local-tax-details/shared';

export const importingMotorVehiclesSection: LocalTaxDetailSection = {
  id: 'importing-motor-vehicles',
  title: {
    en: 'Importing Motor Vehicles',
    fr: 'Importation de véhicules',
    rw: 'Kuzana ibinyabiziga mu gihugu',
  },
  content: {
    en: [
      `Imported motor vehicles must be declared at ‘DPW – Masaka, Magerwa - Gikondo’ Dry Port. If the motor vehicle does not have a number plate, they will receive a transit number plate until the process is completed.`,
      `Once at DPW – Masaka or Magerwa - Gikondo, the process for declaring imported motor vehicles is similar to declarations of other types of goods, see page 394. The only difference is the additional step of registration of the motor vehicle.`,
      `Registration of the motor vehicle first requires the owner to have a unique Taxpayer Identification Number (TIN). If they do not already have a TIN, they are provided with one. Secondly, the owner must provide a passport photo and either a Rwandan ID card or passport.`,
      ` Finally, they are registered as owner of the motor vehicle, and provided with a Rwandan number plate and ‘Yellow Card’ logbook. This initial registration service and the provision of the number plate has already been paid for within the Motor Vehicle Registration Fee (MVF).`,
      `<strong>    i) Valuation of imported brand new motor vehicles .</strong>`,
      `  Brand new imported motor vehicles are valued at Cost, Insurance and Freight (CIF) using the transaction price invoices or equivalent documents as normal. When a customs officer is not satisfied with the transaction price, other customs valuation methods can be applied to determine customs value.`,
      `<strong>    ii) Valuation of used imported used motor vehicles.</strong>`,
      `  Used or second-hand imported motor vehicles are valued using the depreciation method. The transaction price may also be used in special circumstances.`,
      `The first step of the depreciation method is to download the valuation database. The link to the spreadsheet is available on the <a href="https://www.rra.gov.rw/en/customs-services/valuation-gateway"> RRA website</a> `,
      ` The valuation database contains details on the brand, mark, engine, drive, year and body style. Identify the exact description of the motor vehicle, and then note the ‘When New Price ($)’. This price, in US Dollars, is the base of the depreciation. Contact RRA if you cannot identify the appropriate motor vehicle. An example view of the valuation database is shown below.`,
      `The depreciation method then uses a standardised depreciation rate depending upon the age of the car. The depreciation schedule is shown below:`,
      {
        type: 'table',
        headers: ['Date of manufacture', 'Depreciation'],
        rows: [
          ['Less than 1 year ago', '0%'],
          ['Between 1 and 2 years ago', '20%'],
          ['Between 2 and 3 years ago', '30%'],
          ['Between 3 and 4 years ago', '40%'],
          ['Between 4 and 5 years ago', '50%'],
          ['Between 5 and 6 years ago', '55%'],
          ['Between 6 and 7 years ago', '60%'],
          ['Between 7 and 8 years ago', '65%'],
          ['Between 8 and 9 years ago', '70%'],
          ['Between 9 and 10 years ago', '75%'],
          ['More than 10 years ago', '80%'],
        ],
      },
      `<strong> iii) Customs Duties on imported motor vehicles<strong>`,
      `The rates of Customs Duties on imported motor vehicles are summarised below. In addition, a flat rate Motor Vehicle Registration Fee (MVF) is charged upon all imported motor vehicles without any exemptions. `,
      `The final tab of the depreciation method spreadsheet, titled ‘Depreciation Schedule’ can be used to estimate the Customs Duties due for imported motor vehicles.`,
      `<blockquote>
         <strong>    Example 85</strong>
               <p> Rukundo is importing a 1997 Rav4 with a 1.8 litre engine, 2 Wheel Drive (2WD) and three doors. In the valuation database, the listed Price When New ($) is USD 13,200.</p>
               <p> In the ‘Depreciation Schedule’ tab, Rukundo enters the necessary details in the yellow boxes as shown below</p>
      </blockquote>`,
      {
        type: 'table',
        headers: [
          'Vehicles',
          'Category',
          'Import Duty',
          'Excise Duty',
          'VAT',
          'IDL',
          'WHT 5%',
          'AUL',
        ],
        rows: [
          ['Non-utility motor vehicles'],
          ['Engine capacity less than 1,500cc', 'A', '25%', '5%', '18%', '1.5%', '5%', '0.2%'],
          [
            ' Engine capacity between 1,501cc and 2,500cc',
            'B',
            '25%',
            '10%',
            '18%',
            '1.5%',
            '5%',
            '0.2%',
          ],
          ['Engine capacity more than 2,501cc', 'C', '25%', '15%', '18%', '1.5%', '5%', '0.2%'],
          ['Utility motor vehicles'],
          ['Tractors', 'D', '0%', '0%', '18%', '1.5%', '5%', '0.2%'],
          ['Minibuses (with less than 25 seats)', 'E', '25%', '0%', '18%', '1.5%', '5%', '0.2%'],
          ['Buses (with 25 seats or more)', 'F', '10%', '0%', '18%', '1.5%', '5%', '0.2%'],
          ['Pick-up truck', 'G', '25%', '0%', '18%', '1.5%', '5%', '0.2%'],
          [
            'Truck (carrying capacity below 20 tonnes)',
            'H',
            '10%',
            '0%',
            '18%',
            '1.5%',
            '5%',
            '0.2%',
          ],
          [
            'Truck (carrying capacity 20 tonnes and above)',
            'I',
            '0%',
            '0%',
            '18%',
            '1.5%',
            '5%',
            '0,2%',
          ],
        ],
      },
      `<strong> iv) Requirements for receiving special number plates and exemption from certain Customs Duties when importing motor vehicles</strong>`,
      `<strong> a)  Normal number plates</strong>`,
      ` The normal number plate provided for Rwandan motor vehicles begins with ‘RA’. There are also public institution number plates such as ‘RDF’, ‘RNP’ or ‘GR’. These vehicles must have all customs duties due paid as normal.`,
      `On the other hand, some international institutions and foreign investors are exempt from all customs duties, except for Motor Vehicle Registration Fees (MVF).  The number plates are issued by RRA, but require supporting documents from other public institutions. These include:`,
      `<strong>b)‘IT’</strong>`,
      ` It is commonly given to foreign Investors and other foreign persons for temporally residence.`,
      `This requires a recommendation letter to the Commissioner for Customs Services Department (CSD) of RRA from a concerned public institution. ‘IT’ number plate is only valid for one year, before requiring renewal.`,
      `<strong>  Other requirements include:</strong>`,
      `<ul>
                  <li>    Guarantee letter</li>
                  <li>   Valid passport</li>
                  <li>     Valid VISA</li>
                  <li>     Valid ID Card for foreigners</li>
                  </ul>`,
      `<strong>      c)  CD</strong>`,
      `It is for Diplomatic and Consular staff`,
      ` This requires a letter from the Ministry of Foreign Affairs and Cooperation (MINAFFET) to the Commissioner for CSD of RRA, highlighting their diplomatic status and a reciprocal letter of approval.`,
      `<strong>c) CD</strong>`,
      ` These number plates are reserved for the United Nations agencies.`,
      ` This requires a letter from the Ministry of Foreign Affairs and Cooperation (MINAFFET) to the Commissioner for CSD of RRA, highlighting their UN status, and a reciprocal letter of approval.`,
      `<strong>V. Customs duties paid when transferring ownership of motor vehicles with IT, CD or UN number plates to a buyer without the same status. <strong>`,
      ` When transferring ownership of any motor vehicles with IT, CD or UN number plates to a buyer who is not subject to the same privileges, the buyer must pay all Customs Duties due on imported motor vehicles, see page 408, except for Motor Vehicle Registration Fees (MVF) that have already been paid for that motor vehicle.`,
      `<strong>   vi) Importing Right-Hand Drive motor vehicles.</strong>`,
      ` Right-Hand Drive (RHD) motor vehicles, where the steering wheel is on the right-hand side of the car, are not allowed to be imported into Rwanda, except for:`,
      `<ul>
                  <li>    Diplomats or drivers with a medical condition. In both these cases, this requires permission from the Ministry of Infrastructure (MININFRA).</li>
                  <li>   Trucks with a carrying capacity above 20 tonnes</li>
                  </ul>`,
    ],
  },
};
