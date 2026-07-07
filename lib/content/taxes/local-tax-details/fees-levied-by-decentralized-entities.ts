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
        `The list of local government fees is detailed in the <a href="https://www.rra.gov.rw/fileadmin/user_upload/Iteka_rya_Perezida_04.12.2023_ku_mahoro_kuri_serivise_n_ibyemezo_bitangwa_2023.pdf"target="_blank" rel="noopener noreferrer"> Presidential Order Determining Fees Levied For Public Services And Certificates Delivered by Decentralized Entities are displayed below:</a> `,
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
                    <li>A cow: FRW 3,000.</li>
                    <li>A goat: FRW 500.</li>
                    <li>A pig: FRW 700.</li>
                    <li>A sheep: FRW 500.</li>
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
          `<div><img src="/images/lgt-login.png" alt="LGT login example" /></div>`,
         ` The language can be changed by clicking on the flag icons in the top right corner, respectively English, Kinyarwanda and French.`,
        ` Click ‘Taxes’ for the following LGT system login screen:`,
         `<div><img src="/images/login-two.png" alt="LGT login screen" /></div>`,
        ` If a taxpayer does not know their password, it can be reset by clicking ‘Forgot Password’ on the LGT system login and receiving a new password by SMS or email.`,
          "<strong>Step 2: Select the correct Decentralised Entities Taxes or fee to declare</strong>",
          `After logging in, the LGT system home page is loaded.`,
          `<div><img src="/images/afterlogin.png" alt="LGT  screen" /></div>`,
             `There are four menus available on the left of the screen: ‘Registration’, ‘Declaration’, ‘Fee Payment Ticket’ and ‘Change Password’. Each of these menus is discussed in turn.`,
              `As taxpayers must register with LGT System staff and cannot use the ‘Registration’ menu to register. However, it does display confirmation of registration, and allows for printing of Trading License Tax Certificates.`,
              `The taxpayer is also required to indicate building characteristics such as roofing, wall material, sewage system etc that was previously displayed on registration form as per below screen:`,
             `<div><img src="/images/registration-lgt.png" alt="LGT  screen" /></div>`,
             `The ‘Declaration’ menu is where the four types of Decentralised Entities Taxes are declared. Click ‘Declaration’ and the drop-down ‘Taxes’ option. Then choose the tax type and tax period that is being declared and click ‘Submit’. Finally, click on the document number of the applicable declaration.`,
             `<blockquote>
             <strong>Example:</strong> 
              <p>A taxpayer clicks ‘Declaration’ then ‘Taxes’ and sees the following screen. The only Decentralised Entities Tax the taxpayer is registered for is ‘Rental Income’. They select this tax type and the tax year that is being declared, and click ‘Submit’</p>
              </blockquote>`,
               `<div><img src="/images/declaration form.png" alt="declaration form" /></div>`,
              `This loads the following screen. It displays each of the properties registered by that taxpayer for Rental Income Tax, for this taxpayer only one. For each property, the taxpayer clicks the ‘Document No’ to begin the declaration.`,
               `<div><img src="/images/declaration2.png" alt="declaration2" /></div>`,
             `The ‘Fees Payment Ticket’ menu is where fees can be declared and the drop-down provides the choice of a range of fee declarations:`,
             `<ul>
                       <li>     Fees on civil marriage conducted on a day other than an official business day.</li>
                         <li>   Fees on services and documents of immovable property.</li>
                          <li>  Fees on official certificates of a decentralized entity.</li>
                          <li>  Fees on authorisation to make or burn clay bricks, tiles, or charcoal.</li>
                           <li> Market fees.</li>
                         <li>   Fees on parking.</li>
                           <Li> Fees on public parking.</li>
                           <li> Parking fees on boats.</li>
                            <li>Fees on small-scale quarry exploitation.</li>
                           <li> Fees on advertising.</li>
                         <li> Fees for boat number plates.</li>
                          <li>  Fees on bicycle number plates.</li>
                           <li> Fees on communication towers.</li>
                           <li> Fees on transport of materials from quarries and forests.</li>
                           </ul>`,
                  `The‘Change Password’ menu requires the taxpayer to enter the previous password, and the new password. The taxpayer is automatically required to change their password when first logging in to the LGT system with the RRA provided password.`,
                  ` <strong>Step 3: Complete declaration form and submit </strong>`,
                 ` Having selected the correct Decentralised Entities Tax or fee, enter the required information in the declaration form. The information that is required depends upon the type of Decentralised Entities Tax or fee. These are displayed in turn below.`,              
                `<strong> Immovable Property Tax </strong>`,
               ` The declaration for the Immovable Property Tax generally consists of three parts:`,
              ` <ol>
                  <p>1.     Part referring to the land.</p>
             <p>   2.  Part referring to the building – if there is a building on the land.</p>
             <p>  3.     Part referring to the entire immovable property.</p>
                </ol>`,
                `In the first part of the declaration, the taxpayer does not have to enter any information about the land. Instead, the LGT system automatically displays all information determining the tax due on the land.`,
                 ` Note that if the construction of a building has been completed on the plot during the tax period so that the land is no longer undeveloped, the taxpayer needs to visit an RRA office to update the registration of the Immovable Property Tax to indicate that land is developed.`,
                 `In the second part of the declaration, the taxpayer needs to provide information on the building (for developed land, only). In particular, the taxpayer needs to indicate the market value of the building.`,
                 ` In the following section, the taxpayer is asked to indicate the total market value of the immovable property, which includes both the building component and the land component.`,
                 `Once the required information has been entered, click ‘Calculate Tax’. The LGT system automatically displays:`,
                ` <ol>
                <p> 1.     The tax due on the land component, depending on the surface area of the plot and the tax rate on land.</p>
                 <p>2.     The tax due on the building component, based on the market value and the tax rate on building.</p>
                 <p>3.     The total tax due on the immovable property, potential penalties and interests in case of late declaration, as well as the total amount due.</p>
                    </ol>`,
                  `  Afterwards, certify that the declaration was done correctly before you ‘Submit’.`,
             `<blockquote>
                <strong>Example </strong>
                 <p>An example of a filled in declaration form for Immovable Property Tax is shown below. The tax due on the land is FRW 14,460. The tax due on the building is FRW 125,000. Therefore, the total Immovable Property Tax due to be paid with this declaration is FRW 139,460.</p>
              </blockquote>`,
                `<div><img src="/images/proporty-tax declaration.png" alt="property-tax-declaration" /></div>`,
                 `<div><img src="/images/property2.png" alt="property2" /></div>`,
             `<strong>Trading License Tax</strong>`,
                    `  Select Trading License Tax from the ‘Taxes’ menu, choose annual or quarterly: If the previous annual turnover exists, the system retrieves it and fills it automatically. Otherwise, the system classifies a taxpayer under ‘Other profit-oriented activities’ category and charges trading licence tax accordingly.`,
                     `If all the information is correct, click ‘Calculate Tax’ to display the tax due, and click to ‘Submit’ the declaration.`,
                   `<blockquote>
                  <strong>Example </strong>
                <p> The Trading License Tax due for a business with an annual turnover of FRW 20 million is FRW 160,000.<p></blockquote>`,
                  `<blockquote>
              <p><strong>   Example</strong></p>
                    The Trading License Tax due for a business with unknown previous fiscal year turnover is FRW 60,000 if the taxpayer is located in urban zone or FRW 30,000 if the taxpayer is located rural zone as per ‘other profit-oriented activities’ category.
                  </blockquote>`,
                `<strong>    Rental Income Tax</strong>`,
              ` Having clicked on the document number of the relevant property for the tax type and tax period that is being declared, the following declaration form is displayed for Rental Income Tax.`,
              `<div><img src="/images/rental-income.png" alt="Rental Income Declaration" /></div>`,
              `The taxpayer must enter the monthly rent and the total amount of rental income received during the tax year. In addition, if bank interest is being paid on this property, the taxpayer must change ‘Is Bank Interest paid’ to ‘Yes’ and enter the additional required details including rent contract copy.`,
                 `Once all required information has been entered, click ‘Continue with Declaration’. This generates an additional ‘Rental Income Declaration’ section. If all the information is correct, click ‘Calculate Tax’ to display the tax due, and click to ‘Submit’ the declaration.`,
                 `<blockquote>
                 <strong>   Example </strong>
               <p> An example Rental Income Tax declaration form is entered below. The total Rental Income Tax due to be paid with this declaration is FRW 584,000.</p>
                  </blockquote>`,
              `<div><img src="/images/rental2.png" alt="Rental Income Declaration" /></div>`,
                   
                 `<strong>Tax on a sale of Immovable Property Tax</strong>`,
                 ` A rate of 2% is levied on the sale value of an immovable property for commercial use if the seller is a taxpayer registered for income tax. This tax is considered as a deductible expense.`,
                     `A rate of 2.5% is levied on the sale value of an immovable property sold by a person not registered for income tax.`,
                      `Tax on a sale of immovable property is levied on the balance of the sale value of the property after deduction of FRW 5,000,000 which is not subject to tax.`,
                ` <strong> Decentralised Entities Fees</strong>`,
                       ` The process of declaring Decentralised Entities fees varies depending upon the type of fee. In general, having selected the correct type of ‘Fee Payment Ticket’, enter the required information, and click ‘Submit’. This Tax Handbook uses two examples to demonstrate the general processes of declaring Decentralised Entities fees.`,
                       `Fees for civil marriage conducted on days other than official business days.`,
                       ` The taxpayer must enter their personal details including their national ID number or passport number, name, date of birth, mobile number and the province, district and sector where they live. Some of these details may be automatically generated after entering the ID number.`,
                      ` The taxpayer can then choose the type of service that is required. This may include further drop-down options. Once selected, this automatically generates the correct amount that must be paid for that service, and the taxpayer can click to ‘Submit’ the fee declaration.`,
               ` <blockquote>
               <strong> Example</strong>
                 <p>   An example fee declaration to pay for civil marriage done not on official business days is entered below. The amount that must be paid for this service is FRW 10,000.</p>
                </blockquote>`,
                 `<div><img src="/images/Decentralised.png" alt="Rental Income Declaration" /></div>`,
                   `<strong>Step 4: View payment details via the Acknowledgement Receipt, email or SMS, and pay the total amount due.</strong>`,
                   ` After successfully submitting the declaration, click to view the Acknowledgement Receipt. Alternatively, receive the payment details by email or SMS by entering an email address or phone number and clicking ‘Send Email’ or ‘Send SMS’.`,
                 `<div><img src="/images/submitting the declaration.png" alt="submitting the declaration" /></div>`,
                 ` Use the RRA Reference Number to pay the total amount due. This must be paid before the deadline to avoid penalties and fines.`,
               `<strong> Declaring Decentralised Entities Taxes and Fees using M-Declaration. </strong>`,
                         `Taxpayers can use M-declaration for the following local government tax and fees:`,
                        ` <ul>
                          <li>Trading License Tax</li>
                          <li> Immovable Property Tax (available for plots without buildings, only)</li>
                          <li>   Outsourced Fees (available for Ngali Holding Ltd, only).</li>
                          </ul>`,
                         ` The process for declaring these Decentralised Entities Taxes and fees using M-declaration is explained below.`,
                `<strong> M-Declaration Process</strong>`,
                                ` The M-Declaration system is accessed by dialling *800#. The M-Declaration system has a series of screens, with number options, that are navigated by entering and sending the relevant number.`,
                                ` On the first screen, select a language: either English or Kinyarwanda.`,
                                 ` On the next screen select which M-Declaration service is required. To declare Decentralised Entities Taxes and fees, select ‘3. Local Government Taxes’.`,
                                ` At the following screen, select the type of tax or fee:`,
                               `<ol>
                              <p>1. Land lease</p>
                              <p> 2.  Trading license</p>
                              <P>5.Property tax</p>
                                  </ol>`,
                                 ` When the desired type of tax or fee is selected, first enter the ‘TIN’ and then follow the on-screen instructions, depending on the tax type.`,
                                 `Having entered all required information, the system calculates the tax to be paid, and generates the RRA Reference Number required for paying. `,
                                                 
            ],
      },
    },
    {
      id: "penalties-and-fines",
      title: { en: "Penalties and fines", fr: "Penalites et amendes", rw: "Ibihano n'amande" },
      content: {
        en: [
          `<strong>i) Penalties for late declaration of Decentralised Entities Taxes and Fees</strong>`,
         ` A Decentralised Entities Tax and Fee registered taxpayer who has failed to submit a tax declaration within the required time must still declare and pay, and is subject to an additional three penalties:`,
         `<ul>
            <li>  1.5% interest of the unpaid tax due per month.</li>
            <li> A fine equal to 40% of the tax due if the declaration is submitted late.</li>
            <li>   An additional fine for late payment of 10% of the tax due, up to a maximum of FRW 100,000.</li>
          </ul>`,
          `<blockquote>
         <strong >Example</strong>
              <p> Amahoro declared Trading License Tax for the 2024 tax period. Instead of declaring by the 31st January 2024, she finally declared and paid on 18th March 2024 (within two months late). The tax due for this tax period was FRW 160,000.</p>
               <p>Amahoro’s penalty for declaring late is:</p>
              <p> (1) FRW 160,000 * 1.5% * 2 = FRW 4,800</p>
              <p> (2) FRW 160,000 * 40% = FRW 64,000</p>
              <p> (3) FRW 160,000 * 10% = FRW 16,000.</p>
              <p> In addition to the FRW 160,000 tax due, Amahoro must thus pay FRW 4,800 + FRW 64,000 + FRW 16,000 = FRW 84,800.</p>
           </blockquote>`,
          ` <strong>  What are the penalties for late payment of Decentralised Entities Taxes and fees?</strong>`,
         `  A Decentralised Entities Tax and Fee registered taxpayer who has submitted a tax declaration, but failed to pay the full amount of taxes due within the required time must still pay the full amount of taxes due, and is subject to two additional penalties:`,
               `<ul>      
              <li> 1.5% interest of the unpaid tax due per month.</li>
              <li>   10% of the unpaid tax due, up to a maximum of FRW 100,000.</li>
              </ul>`,
                        ` The same penalties also apply to late payment of Decentralised Entities fees.`,
                       `<strong> What are the penalties for not registering for Trading License Tax or not presenting a Trading License Tax certificate when requested?</strong>`,
                       ` It is illegal to conduct business activities without having declared and paid Trading License Tax for the concerned tax period. Failure to present a valid Trading License Tax certificate when requested is subject to a penalty of FRW 10,000. In addition, the district has the right to temporarily close down any business activities.`,
                   `<strong>  What are the penalties for a taxpayer who declares incomplete, incorrect or fraudulent information?</strong>`,
                       ` A taxpayer who submits a declaration, but is found to have declared incomplete, incorrect or fraudulent information, must pay the unpaid tax due and is subject to an additional penalty of 40% of the tax due.`,
       
     

        ],
      },
    },
  ],
  lastUpdated: localTaxLastUpdated,
}
