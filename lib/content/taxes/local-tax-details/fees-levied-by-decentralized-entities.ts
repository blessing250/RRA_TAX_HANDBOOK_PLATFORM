import {
  localTaxLastUpdated,
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
           ` Fees levied on services and certificates delivered by decentralised entities as follows:`,
           `<ul>
            <li>fees on the use of public domain of State.
            <li>fees on services delivered by decentralised entities.
            <li> charges levied as fees.
            <ul>`,
            `However, a decentralised entity is prohibited to set any other kind of fees or charges levied as fees not specified in the Presidential Order nº 075/01 of 04/12/2023 determining fees levied on services and certificates delivered by decentralised entities.`,

    ],
  },
  sections: [
    {
      id: "third-parties-that-collect-decentralised-entities-fees",
      title: { en: "Third parties that collect decentralised entities fees", fr: "Tiers collecteurs", rw: "Abandi bakusanya amahoro" },
      content: {
        en: [
              `Ngali Holdings Ltd is mandated to support RRA in collecting all local government fees. Millennium Savings and Investment Cooperative (MISIC) also collects parking fees.`,
              `In addition, the declaration and payment of the following decentralized entities fees is now processed through the e-Government platform known as Irembo or Rwanda Online:`,
              `<ul>
                <li> Civil status certificates, including Birth, Marriage and Death certificates.
                <li> Transfer of land titles.
                <ul>`,

        ],
      },
    },
    {
      id: "declaration-and-payment",
      title: { en: "Declaration and payment", fr: "Declaration et paiement", rw: "Kumenyekanisha no kwishyura" },
      content: {
        en: [
              `The deadline to declare and pay decentralized entities fees depends upon the basis of the fee. Fees charged for a service, such as fees on official certificates and documents to be notified by the public notary, must be declared and paid before the service is delivered.`,
              `Fees payable on an annual basis, such as fees on advertising, must be declared and paid no later than 31st December of that year.`,
        ],
      },
    },
    {
      id: "decentralized-entities-fees-and-rates",
      title: { en: "Decentralized entities' fees and rates", fr: "Frais et taux", rw: "Amahoro n'ibipimo" },
      content: {
        en: [
       ` The rates of many decentralized entities fees are variable, within certain thresholds, depending upon certain factors such as the location, i.e., urban, trading centre, or rural, or the vehicle details. The exact rate, within the thresholds, is determined by the District Council on an annual basis by the 30th June.`,
        `The list of local government fees is detailed in the <a href="https://www.rra.gov.rw/fileadmin/user_upload/Iteka_rya_Perezida_04.12.2023_ku_mahoro_kuri_serivise_n_ibyemezo_bitangwa_2023.pdf"> Presidential Order Determining Fees Levied For Public Services And Certificates Delivered by Decentralized Entities are displayed below:</a> `,
        `<strong>Fees charged on public parking on road:</stron>`,
          `<ul>
           <li>FRW 200 per hour – FRW 30,000 per month
           <ul>`,
              `<strong>Fees charged on fenced public parking:</strong>`,
              `<ul>
             <li> A vehicle used for public transport not more than 18 seats and small cars used as taxis: FRW 500 per day.
             <li> A vehicle of 19 to 30 seats used for public transport: FRW 1,000 per day.
              <li>A vehicle of 31 to 50 seats used for public transport: fee ranges from FRW 1,500 to FRW 3,000 per day.
              <li>A vehicle of more than 50 seats used for public transport: fee ranges from FRW 3,500 to FRW 10,000 per day.
             <li> A vehicle not used for public transport which enters in a public parking is subject to FRW 200 every time it enters a public parking.
            </ul>`,
                  `<strong>Fees levied on boat public parking:</strong>`,
                  `<ul>
                   <li> Motor boat with loading capacity of equal to or less than five tons:</li>
                   <ul> 
                      <li>FRW 150 per day.</li>
                      <li>FRW 4,000 per month.</li>
                      </ul>
                   <li> Motor boat with loading capacity exceeding five tons:</li>
                   <ul>
                     <li>FRW 200 per day</li>
                     <li>FRW 5,000 per month</li>
                     </ul>
                   <li> A small boat without engine:</li>
                   <ul>   
                      <li>FRW 100 per day.</li>
                      <li>FRW 3,000 per month</li>
                      </ul>
                    <li>Fee for use of public market:</li>
                    <ul>
                   <li> FRW 500 per day.</li>
                   </ul>
                    <li>Livestock trade Fee:</li>
                    <ul>
                    <li>a cow: FRW 3,000.</li>
                    <li>a goat: FRW 500.</li>
                    <li>a pig: FRW 700.</li>
                    <li>a sheep: FRW 500.</li>
                    </ul>
                    <li>Fee for use of slaughterhouse organised by a decentralised entity:</li>
                    <ul>
                    <li>A cow: FRW 2,000.</li>
                    <li>A goat: FRW 500.</li>
                   <li> A pig: FRW 1,000.</li>
                    <li>A sheep: FRW 500.</li>
                    <ul>
                  </ul>`,
                  `<strong>Civil marriage on a day different from the day fixed by the Council of a decentralised entity:</strong>`,
                  `<ul>
                      <li>     FRW 50,000</li>
                      </ul>`,
                      `<strong> Building permit, renewal of the building permit or for authorisation to change reasons based on the request for the building permit:</strong>`,
                      `<ul>
                        <li>        FRW 20,000 for the floor area not exceeding 100 sqm.</li>
                          <li>FRW 100,000 for the floor area ranging from above 100 sqm to 200 sqm.</li>
                            <li>    FRW 150,000 for the floor area ranging from above 200 sqm to 500 sqm.</li>
                              <li>  FRW 200,000 for a floor area of more than 500 sqm.</li>
                      <ul>`,
                    `<strong> Records, certificates and services</strong>`,
                    `<ul>
                         <li>      A civil status record: FRW 1,500</li>
                             <li>   An extract of a civil status record: FRW 1,000.</li>
                              <li>  An identity card: FRW 500.</li>
                              <li>  A certificate for the loss of an identity card: FRW 3,000.</li>
                               <li> A birth certificate: FRW 500</li>
                               <li> A marriage certificate: FRW 500</li>
                                <li>A celibacy certificate: FRW 500</li>
                                <li>A divorce certificate: FRW 500</li>
                                <li>Public auction conducted by a non-professional bailiff on immovable property: FRW 5,000.</li>
                      </ul>`,

                    ` <strong> Documents notarized by a public notary</strong>`,
                      `<ul>
                             <li>   Authentication of signature on a document: FRW 1,200.</li>
                             <li>   Certification of document authenticity: FRW 1,500.</li>
                              <li>  Certification of the conformity of a copy to the original: FRW 1,500.</li>
                                <li>Authentication of signatures: FRW 1,200.</li>
                                <li>Certification of by-laws: FRW 500 for each page.</li>
                                <li>Certification of any contract is FRW 500 for each page</li>
                                <li>Issuance of other notarial deeds provided for by law: FRW 500 for each page.</li>
                      </ul>`,
                     `<strong> Non-electronic advertising billboards are fixed as follows:</strong>`,
                            `<ul>
                              <li>In the City of Kigali: FRW 20,000 per sqm per year.</li>
                              <li> In satellite or secondary cities: FRW 15,000 per sqm per year</li>
                              <li> Elsewhere in the country: 10,000 FRW per sqm per year.</li>
                               <ul>`,
                      `Electronic advertising billboard: FRW 100,000 per year, regardless of its size and its location. This fee can be valued and paid quarterly at the request of the advertiser.`,
                     ` Other advertising billboards with non-permanent messages require authorization from the competent authority and are subject to a fee of 5,000 FRW per day.`,
                      `If the advertising billboard advertises on both sides, each side is subject to charges.`,
                      `Fee for use of loudspeaker for advertisement`,
                      `<ul>
                              <li>  In the City of Kigali: FRW 100,000 per day.</li>
                              <li> In satellite or secondary cities: FRW 50,000 per day.</li>
                              <li> Elsewhere in the country: FRW 10,000 per day.</li>
                              <li> Use of a banner is FRW 7,500 per day.</li>
                      </ul>`,
                     `Fee on advertisement means not specified in the Presidential Order is FRW 10,000 per quarter or FRW 1,000 per day.`,
                      `Fees on boat number plate:`,
                      `<ul>
                            <li>    A motor boat: FRW 15,000.</li>
                            <li>    A non-motorised boat: FRW 5,000.</li>
                      </ul>`,
                      `Fees on communication towers:`,
                      `<ul>
                           <li>    FRW 2,000 on every meter of the tower’s vertical length per year.</li>
                             <li>   The height of the building or structure on which the tower is erected is charged FRW 1,000 per meter of the vertical length per year.</li>
                      </ul>`,
                     ` Commercial transportation of quarry materials:`,
                     `<ul>
                      <li>    Per round of the vehicle, on commercial transportation of quarry materials is FRW 1,000 per m3.</li>
                      </ul>`,
                      `Commercial transportation of bricks or tiles:`,
                      `<ul>
                             <li>   FRW 1,000 per m3 per round of the vehicle transporting bricks.</li>
                            <li> FRW 500 per m3 per round of the vehicle transporting tiles.</li>
                      <ul>`,
                      `Forest products:`,
                      `<ul>
                            <li>    FRW 150 per plank, payable by the producer of planks.</li>
                               <li> FRW 150 per bag of charcoal paid by the charcoal maker.</li>
                             <li>   FRW 1,000 per m3 of firewood, payable by the woodcutter.</li>
                              <li>  FRW 1,000 per m3 of beams, payable by the woodcutter.</li>
                      <ul>`,
                      `The process for declaring these fees varies, depending upon the type of fee. These different processes for declaring are explained in more detail on page 338.`,
                      `Note that vulnerable people may request a waiver from fees by the District Council for all of the following fees.`,
         
      
  ],
},
    },
    {
      id: "registration",
      title: { en: "Registration for Decentralised Entities Taxes and Fees", fr: "Registration", rw: "Kwiyandikisha" },
      content: {
        en: [ 
            `Taxpayers must register for Decentralised Entities Taxes and fees with the help of staff at tax centres, except for Trading License Tax for which registration is done upon registering a business in the RDB system.`, 
            `In order to register on the LGT system, the taxpayer must provide identification: either a Rwandan ID or Passport. The taxpayer must also provide their address and a mobile phone number. The taxpayer will be registered on the LGT system, and tax accounts will be set up for the relevant Decentralised Entities Taxes and fees by RRA staff.`,
            `In addition, when registering for Rental Income Tax, Immovable Property Tax, or Tax on Sale of Immovable Property, taxpayers must provide the Unique Plot Identifier (UPI) for each of their properties.`,
            `Once registered, the taxpayer will be provided with a username, TIN and a password for the LGT system. The taxpayer will also receive an SMS and/or email confirming the registration.`,
            `If the taxpayer later is required to pay any additional Decentralised Entities Taxes and fees for which they are not yet registered for, the taxpayer must return to any tax centre or RRA offices to set up the accounts for each of those Decentralised Entities Taxes and fees.`,

        ],
      },
    },
    {
      id: "declaring-using-lgt-system",
      title: { en: "Declaring Decentralised Entities Taxes and Fees using the LGT system", fr: "Declaration dans le systeme LGT", rw: "Kumenyekanisha ukoresheje LGT" },
      content: {
        en: [
        `The four types of Decentralised Entities Taxes which are Rental Income Tax, Trading License Tax, Immovable Property Tax, and Tax on Sale of Immovable Property, and Decentralised Entities fees can be declared using the LGT system. The process of declaring each is similar, and described below.`,
          "<strong>Step 1: Login to the LGT system</strong>",
          `Access the LGT system at <a href ="https://localgov.rra.gov.rw/"> https://localgov.rra.gov.rw</a> or through the RRA website at <a href ="https://www.rra.gov.rw/en/home">https://www.rra.gov.rw/en/home</a> and clicking on ‘Pay District taxes here’ on the right of the screen. This loads the following login screen:`,
          "<strong>Step 2: Select the correct tax or fee</strong>",
          "The LGT system has Registration, Declaration, Fee Payment Ticket, and Change Password menus. Taxes are declared through Declaration, while fees are declared through Fee Payment Ticket.",
          "Fee Payment Ticket includes civil marriage fees, immovable property service fees, official certificates, clay brick and charcoal authorization, market fees, parking fees, small-scale quarry exploitation fees, advertising fees, boat and bicycle number plate fees, communication tower fees, and transport of materials from quarries and forests.",
          "<strong>Step 3: Complete declaration form and submit</strong>",
          "Enter the required information in the declaration form. Required information depends on the tax or fee selected. After completion, calculate tax, certify the declaration, and submit.",
          "<strong>Step 4: View payment details and pay</strong>",
          "After successfully submitting the declaration, view the acknowledgement receipt or receive payment details by email or SMS. Use the RRA reference number to pay before the deadline.",
          "<strong>M-Declaration</strong>",
          "Taxpayers can use M-Declaration for Trading License Tax, Immovable Property Tax for plots without buildings, and outsourced fees available for Ngali Holdings Ltd. Dial *800#, select a language, choose Local Government Taxes, select the tax or fee type, enter the TIN, and follow the on-screen instructions.",
        ],
      },
    },
    {
      id: "penalties-and-fines",
      title: { en: "Penalties and fines", fr: "Penalites et amendes", rw: "Ibihano n'amande" },
      content: {
        en: [
          "A Decentralised Entities Tax and Fee registered taxpayer who fails to submit a tax declaration within the required time must still declare and pay and is subject to three penalties: 1.5% interest per month, a fine equal to 40% of the tax due for late declaration, and an additional late-payment fine of 10% of the tax due up to FRW 100,000.",
          "A taxpayer who submits a declaration but fails to pay the full amount due on time must pay the full amount due, 1.5% interest per month, and 10% of the unpaid tax due up to FRW 100,000.",
          "It is illegal to conduct business activities without declaring and paying Trading License Tax for the concerned tax period. Failure to present a valid Trading License Tax certificate when requested is subject to a penalty of FRW 10,000, and the district may temporarily close the business.",
          "A taxpayer who declares incomplete, incorrect, or fraudulent information must pay the unpaid tax due and an additional penalty of 40% of the tax due.",
        ],
      },
    },
  ],
  lastUpdated: localTaxLastUpdated,
}
