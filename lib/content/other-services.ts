import type { HandbookSection, LocalizedText } from '@/lib/types/handbook';

export const otherServicesPage = {
  slug: 'other-services',
  title: {
    en: 'Other services',
    fr: 'Autres services',
    rw: 'Izindi serivisi',
  },
  summary: {
    en: `This section includes information on paying taxes, business registration, E-tax system, EBM, importing and exporting of products, Motor vehicle ownership transfer, tax laws and related documents, tax audit, bookkeeping, tax refund, debt management, appeals,VAT refund and Voluntary diclosure.`,
    fr: `ccédez aux services et références liés aux obligations des contribuables, notamment les décisions, les audits, les remboursements, les recours, la gestion des dettes, les certificats, les services relatifs aux véhicules automobiles et l'échange d'informations.`,
    rw:`Reba serivisi n'inyandiko zifasha ku nshingano z'abasora, zirimo ibisobanuro by'amategeko, ubugenzuzi, gusubizwa imisoro, ubujurire, gucunga imyenda, ibyemezo, serivisi z'ibinyabiziga no guhana amakuru.`,
  },
  lastUpdated: {
    en: 'This page was last updated on: 05/03/2026',
    fr: 'Cette page a été mise à jour le : 05/03/2026',
    rw: 'Iyi paji iherukaga kuvugururwa ku wa: 05/03/2026',
  },
} satisfies {
  lastUpdated: LocalizedText;
  slug: string;
  summary: LocalizedText;
  title: LocalizedText;
};

export const otherServiceSections: HandbookSection[] = [
  {
    id: 'paying-taxes-and-fees',
    title: {
      en: 'Paying taxes and fees ',
      fr: 'Inscription des entreprises',
      rw: 'Ubwungeza ibintu by’abashuri',
    },
    content: {
      en: [
       ` Taxpayers should submit tax declarations before paying taxes. Tax declarations provide the necessary information to calculate the correct amount of tax due.`,
           `The process of submitting the relevant tax declarations is different for each tax type, and is discussed in greater detail in their respective chapters of the Tax Handbook. `,
           ` However, after declaring, the methods of paying taxes are the same for all types of domestic taxes, customs duties and local government taxes and fees. There are four possible methods of paying all types of taxes and fees:`,
           `<ul>
             <li>Online using Internet Banking and E-Payment.
            <li>On mobile phones or through agents using MTN Mobile Money and airtel money.
            <li>Through Mobicash agents.
            <li>In person at a bank outlet.
            </ul>`,
               ` It is important to note that it is not possible to pay taxes in cash at RRA offices. `,
               `The details needed for each method of paying taxes are the same. However, there are many advantages for taxpayers to pay taxes online or through mobile phones. This Tax Handbook aims to provide the information necessary for all methods of paying taxes. `,
               ` For all methods of paying taxes, it is important to save any receipts confirming the payment. `,
              `<strong>    a. Advantages of digital payment modes</strong>`,
                   ` The benefits of paying online, on mobile phones or through licensed agents are: `,
                   `<ul>
                <li>Pay taxes anytime, anywhere.</li>
                <li>Avoid travel costs of visiting a bank.</li>
                <li>Avoid queuing times at banks.</li>
                <li>Avoid safety risks of carrying cash.</li>
                    </ul>`,
                 `<strong>  b. What is needed when paying taxes</strong>`,
                  ` There are two main details needed when paying taxes. `,
                  `<ul>
                   <li><strong>  RRA Reference Number  </strong> of the declaration that has been submitted. </li>
                 <li><strong>Amount of tax due to be paid:</strong>  The amount due may also include any penalties and fines referring to that declaration.</li>
                   </ul>`,
                   ` Both these details are in the ‘Acknowledgement Receipts’ generated after submitting all tax declarations. `,
                  `<strong>  c. Acknowledgement Receipts</strong>`,
                   ` After submitting a declaration, for all types of taxes and fees, there is an option to download and view the acknowledgement receipt.`,
                  ` Acknowledgement receipts confirm the details of the taxpayer, contain details of the taxes and fees that must be paid, and provide the RRA Reference Number for the account the tax must be paid into. This RRA Reference Number is also known as the ‘Doc ID’, or ‘Doc No’. `,
                   ` The RRA Reference Number is very important to ensure that the taxes are paid into the correct RRA tax account, and that the payment is attributed to the correct taxpayer. The RRA Reference Number and total tax due is highlighted in the examples for each broad tax type below.`,
                   `<strong>  Acknowledgement receipt domestic taxes </strong>`,
                  ` In the case of domestic taxes on the E-Tax system, acknowledgement receipts can be viewed by clicking on ‘View Acknowledgement Receipt’ immediately after submitting the declaration, as seen below. `,
                   `<div><img src="/images/Acknowledgement.png" alt="Acknowledgement" /></div>`,
                 ` Alternatively, from the E-Tax homepage, hover the mouse on ‘Tax Declaration’ and click on ‘Submitted Declarations’.`,
                  `  Choose the year of the tax period, and optionally the tax type, then click submit. Find the relevant submitted tax declaration, click on the Document Number, and the following options appear. Again, click on ‘View Acknowledgement Receipt’.`,
                 `<div><img src="/images/view2.png" alt="view2" /></div>`,
                `  An example acknowledgement receipt for domestic tax declarations is displayed below. The associated RRA Reference Number and total tax due are highlighted.`,
                `<div><img src="/images/rr.png" alt="rr" /></div>`,
             `<strong>  Acknowledgment for Customs Duties </strong>`,
                   ` In the case of customs duties, the acknowledgement receipt is more commonly referred to as the ‘Assessment Notice’. This can be accessed by Clearing Agents through the Rwanda electronic Single Window (ReSW) system. The Clearing Agent then provides the taxpayer with the assessment notice in order to pay the taxes and fees due. `,
                   `Different types of customs duties can be required to be paid to different accounts. Therefore, each assessment notice may have multiple RRA Reference Numbers with different amounts of tax due. The associated RRA Reference Numbers and amounts of tax due are highlighted in different colours in the example below.`,
                    `<div><img src="/images/Duties33.png" alt="assessment" /></div>`,
                `<strong>  Acknowledgement for receipt for Local Government Taxes and Fees </strong>`,
                     ` In the case of Local Government Taxes (LGT) and Fees on the LGT system, this can vary slightly for the type of tax or fee. Typically, acknowledgement receipts can be viewed by clicking ‘Get Acknowledgement’ immediately after submitting the declaration, as seen below. `,
                     `<div><img src="/images/submitted.png" alt="LGT" /></div>`,
                    ` The taxpayer can also enter their email address or phone number to receive the RRA Reference Number and tax due. An example acknowledgement receipt for LGT and fees declarations is displayed below. The associated RRA Reference Number and total tax due are highlighted.`,
                 `<div><img src="/images/reference.png" alt="reference" /></div>`,
              `<strong>d.Tax payment methods</strong>`,
                     ` After all tax declarations, taxpayers may pay the due taxes or penalties if any, using the following methods:`,
              `<strong>Internet banking systems</strong>`,
                     ` All commercial banks in Rwanda now offer internet banking services. However, the process of using these internet banking systems varies depending on the bank. It is not possible to cover each system in this Tax Handbook, but bank staff will be able to assist with registering and using internet banking, including explaining how to pay taxes.`,
              `<strong> Domestic Taxes E-Payment system</strong>`,
                    `  After submitting the declaration it is possible to directly access the domestic taxes E-Payment system, by clicking ‘Epayment’.  `,
                     `This shows the following screen. Clicking on the ‘Select Bank to Pay’ drop-down menu lists the banks that are linked with the domestic taxes E-Payment system. `,
                                      `<div><img src="/images/accepted.png" alt="accepted" /></div>`,

                    ` It is important to note that taxpayers may need to register for internet banking directly with their bank before paying taxes on the E-Payment system.`,
                            ` After the taxpayer has selected their bank from the drop-down menu and clicked ‘submit’, they will be directed to the online banking system of their bank. Follow the bank instructions to complete the payment. The exact steps may vary by bank. `,
               `<strong>MTN Mobile Money / Airtel Money</strong>`,        
                             ` This can be done individually, or through a Telecom agent. To pay taxes individually, register on Telecom Mobile Money requires a SIM-card, and registering an account at any Telecom Mobile Money agent. The taxpayer does not need to register with MTN/Airtel to pay taxes through an agent.`,
                             `It is important to note that there are small additional transaction fees payable to MTN that vary depending upon the amount of tax being paid.`,
                             ` Once registered, and with sufficient funds in the account to cover the amount payable, including transaction fees, follow these steps to pay taxes individually:`,
                             `<ul>
                              -	Dial *182# to enter the mobile money platform. 
                              -	Choose the Language.
                              -	Choose the ‘Pay Bill’ option.
                              -	Choose the ‘RRA’ payment option.
                              -	Enter the RRA Reference Number from the Acknowledgement Receipt. 
                              -	This will then show the Amount and Taxpayer Name. If these details are correct, enter ‘1’ to proceed with payment.
                              -	Enter Mobile Money PIN to confirm the payment.
                              </ul>`,
                             ` To pay through an MTN Mobile Money agent, provide the agent with the RRA Reference Number from the Acknowledgement Receipt and sufficient funds to cover the amount payable, including transaction fees.`,
                  `<strong>    Bank</strong>`,
                             ` Taxes can be paid at all registered commercial banks in Rwanda. This can be done using a cash deposit slip or by bank cheque. Any payments of FRW 500,000 (five hundred thousand Rwandan francs) or more must be paid by bank cheque only.`,
                             `When writing a bank cheque, make it out to ‘Rwanda Revenue Authority’, and ensure to include the RRA Reference Number, total tax due and tax type.`,
                             ` On the Cash Deposit Slip, enter the following details:`,
                   `<strong>   Beneficiary:</strong>`,
                   `  <ul>
                         <li>Account Number – Write the RRA Reference Number from the Acknowledgement Receipt.</li>
                         <li> Of – Write ‘Rwanda Revenue Authority’.</li>
                              </u>`,
                       `<strong>Amount:</strong>`,
                           `<li>Write the ‘Total Tax Due’.</li>`,
                    `<strong>  Paid in by:</strong>`,
                         `<li> Name – Write the Taxpayer Name.</li>`,
                          `<li>Address – Write the address of the business or the PO Box number if applicable.</li>`,
                     `<strong>Comment:</strong>`,
                      `<li>   Write the tax type, e.g ‘VAT’.</li>`,
     ],
    },
  },
  {
   id:'how-to-register-a-business-and-get-a-TIN',
   title: {
      en: 'How to register a business and get a TIN',
      fr: 'Comment enregistrer une entreprise et obtenir un NIF',
      rw: "Uburyo bukora igihugu n'akongera TIN'",
    },
    content: {
      en: [
       `<strong>Businesses registration</strong>`,
              `  Business registration in Rwanda is carried out by the Office of the Registrar General (ORG) within the Rwanda Development Board (RDB). A business must register with the Register General when the business is established.`,
               `This is carried out online on the RDB portal rather than RRA in order to facilitate the aftercare and investment promotion facilities that RDB offers. `,
               ` RDB has developed the business registration system to make it easier for taxpayers to register their business. The RDB system is an online portal through which all businesses are registered.`,
               `It is important to note that although all business registrations go through the RDB system, this can still be done with the help of RDB staff at RDB offices. `,
               ` Nevertheless, there are many advantages for taxpayers to register online. This Tax Handbook aims to provide all the information necessary for taxpayers to be able to register online.`,
               `Any questions during the registration process can be answered by calling the RDB call centre toll-free on 1415. `,
             ` The RDB, RCA, and RRA computer systems are integrated to ensure a smooth registration process that provides a single, unique Taxpayer Identification Number (TIN) and a clear understanding of the taxpayer’s obligations.`,
               `According to the World Bank Ease of Doing Business Index 2019, Rwanda was the simplest and fastest country in East Africa in which to start a business. This Tax Handbook tries to promote this further, with a basic guide to business registration, for further questions visit the<a href="https://urs.rdb.rw/auth/login"> RDB website .</a> `,
               ` When registering your business, the following are the steps to follow: `,
          `<strong>step 1: Register and login on the RDB system</strong>`,
                           ` Access the RDB business registration system at<a href="https://urs.rdb.rw/auth/login"> RDB website .</a>and click on ‘Register Here’. Submit the required details. Click the link in the validation email. Return to the RDB system to login.`,
           `<strong> Step 2: Choose the business category to be registered</strong>`,
                           ` The taxpayer must register as a ‘Domestic’ company, individual ‘Enterprise’ or ‘Foreign’ company. `,
           `<strong> Step 3: Complete the business registration application</strong>`,
                           ` Enter all the required business information, including attaching scanned versions of any required documents. Submit the application to register the business and receive the Taxpayer Identification Number (TIN) by SMS. `,
             `<strong>      Step 4: Print Certificates</strong>`,
                           ` Login to the RDB system to print the required certificates, including the business certificate and memorandum. The taxpayer is registered and must fulfil all tax obligations.`,
                `<strong>     Benefits of business registration</strong>`,
                           ` As well as being a legal requirement, there are many advantages to registering as a business. These include:`,
                           `<ul>
                            <li>   Ensuring the business benefits from the protections provided by business laws, such as limited liability.</li>
                            <li>   Improving access to credit from financial institutions.</li>
                            <li>   Inspiring trust in customers with proof of being a registered business.</li>
                            </ul>`,
                `<strong> Limited liability</strong>`,
                          ` Liability refers to the responsibility for any debts that are owed by the business. One of the advantages of registering a business as a company, as opposed to an individual enterprise, is that all debts incurred by the company are the responsibility of the company, they are not the legal liability of the shareholders or the directors. In this way, the liability of the people who run the company is said to be ‘limited’. They are not responsible for all the debts of the company, only to the extent of the stake they have in the company, see page 78 for more details.`,
                `<strong>  Cost of business registration</strong>`,
                           ` It is free to register a business in Rwanda. It is free to register online and at RDB office. However, some private internet cafés/Irembo Agents also offer assistance with business registration and can charge a fee for this service.`,
                  `<strong>Categories of businesses</strong>`,
                           `There are three categories of business that can be registered. On the RDB business registration system these are: ‘Domestic’ company, individual ‘Enterprise’ and ‘Foreign’ company.`,
                          `  Registering as<strong>‘Domestic’</strong> is for domestic companies or for subsidiaries of foreign companies.`,
                          ` Registering as an<strong>‘Enterprise’</strong> is for sole traders or partnerships and is the simplest way to start and conduct business in Rwanda. ‘Enterprise’ typically refers to a business whose turnover is less than FRW 10,000 per day.`,
                          `  Registering as ‘Foreign’ is for companies which already exist and are registered in a foreign country that are undertaking business in Rwanda. It is important to note that this does not include domestic subsidiaries of foreign companies.`,
                   `<strong>Types of ‘Domestic’ companies</strong>`,
                           `Within the ‘Domestic’ company business category, the Rwanda Companies Act recognises four legal types of companies. These are: limited by shares, limited by guarantee, limited by shares and guarantee or unlimited.`,
                           ` Limited by shares is the most common business type, and is suitable for most profit-oriented businesses. Limited by guarantee is suitable for non-profit organisations and charities.  Limited by shares and guarantee, and unlimited, are rare business types and should not be selected without consultation with RDB.`,
                           `These four types of companies all follow the same registration procedure, although requirements vary.`,
                           ` Companies limited by shares must register a chairman of the board, a managing director and at least one shareholder. However, these can all be the same person.`,
                 `<strong>  Needed documents for business registration</strong>`,
                           ` The requirements for registering vary depending on the category of business. These must be scanned and attached whilst completing the business registration application. The documents that are required for each business category are listed below:`,
                `<strong >    ‘Domestic’ company:</strong>`,
                `<ul>
                            <li>      Rwanda National ID or Passport (for all shareholders, directors, company secretaries, accountants)</li>
                             <li>     Notarised articles of association (if applicable)</li>
                             <li>     Notarised company resolution to open a subsidiary company (if a subsidiary)</li>
                             <li>     Notarised certificate of incorporation issued by the registration company in the country of incorporation (if a foreign subsidiary)</li>
                            </ul>`,
                  `<strong>Individual ‘Enterprise’:</strong>`,
                          `<li>  Rwanda National ID or Passport</li>`,
                  `<strong>  ‘Foreign’ company:</strong>`,
                 ` <ul>
                            <li>     Rwanda National ID or Passport (for all shareholders, directors, company secretaries, accountants residing in Rwanda)</li>
                            <li>    Notarised power of attorney to present the company in Rwanda</li>
                            <li>   Notarised articles of association</li>
                            <li>   Notarised certificate of incorporation issued by the registration institution in the country of incorporation</li>
                            <li>   Notarised company resolution to open a branch in RwandaTaxpayers receive a unique Taxpayer Identification Number (TIN) when registering their business with Rwanda Development Board (RDB) for all businesses, and Rwanda Cooperatives Agency (RCA) for cooperatives.</li>
                            </ul>`,
                          `  However, there are also circumstances where RRA registers taxpayers and provides them with TINs directly:`,
                          `  -          Local Government Taxes (LGT) and fees`,
                           `-          Non-business registration, for example for:`,
                          `<ul>
                           <li>Motor vehicle ownership</li>
                          <li>Tax Clearance Certificates (TCCs)</li>
                          <li> Non-governmental organisations (NGOs), after approval from Rwanda Governance Board (RGB)</li>
                         <li>Government institutions and projects</li>
                         </ul>`,
                           `As the processes are separate, this Tax Handbook focuses on business registration with RDB in this section. For cooperative registration, visit any RCA office.`,
                           ` For all non-business registration purposes, visit any RRA office with a Rwanda National ID or a Passport.`,
                 `<strong>   How to choose the type of ‘Business Activity’</strong>`,
                           ` The RDB business registration system asks taxpayers to identify the type of business activities that they plan to conduct. This is not binding, taxpayers can at any time carry out business activities that they do not include here.`,
                           `However, it is important that this ‘Business Activity’ category is completed as accurately as possible when registering. This uses the International Standard Industrial Classification (ISIC), also used by the National Institute of Statistics (NISR), The National Bank of Rwanda (BNR) and the Ministry of Finance (MINECOFIN) to improve statistics and policy making.`,
                           ` The RDB system is designed to make it easier for taxpayers to choose their business activities, by first choosing the broad sector, and then choosing the more specific activity within that sector.`,
                           ` The RDB system allows taxpayers to choose as many different activities as they intend to carry out, and then requests that they choose one of these to designate as their main business activity. This should be the business activity that they expect will contribute the largest share of their value added, i.e., to the selling price of their products, compared to the price of their inputs.`,
                           `<blockquote>
                        <strong>   Example </strong>
                        <p> Amahoro is starting a butchery business. She intends to buy livestock and process the meat. She expects to sell to other shops as well as directly to consumers.</p>
                       <p>  Processing meat is within the ‘manufacture’ sector. Selling to other shops refers to ‘wholesale’. Selling directly to customers refers to ‘retail sale’. Amahoro selects ‘C1010 - Processing and preserving of meat’, ‘G4630 – Wholesale of food, beverages and tobacco’ and ‘G4721 – Retail sale of food in specialised stores’.</p>
                       <p>  Of these three activities, Amahoro expects her greatest value added to be from the processing of the meat so she chooses this as her main business activity.</p>
                       </blockquote>`,
                      `<div><img src="/images/rdb.png" alt="Business Activity" /></div>`,
                 `<strong>How to register for different tax types</strong>`,
                             ` All businesses are immediately registered for Income Tax during business registration. This is either Personal Income Tax (PIT) for individual businesses or Corporate Income Tax (CIT) for companies.`,
                             `All businesses must also register for Trading License Tax.  Businesses registered by RDB are automatically registered on Trading License Tax which is exempted for two years from registration date. The Trading License Tax certificate, available after declaring and paying Trading License Tax, is required for all profit-oriented activities.`,
                             ` In addition, when registering, certain questions prompt the registration of tax accounts for other tax types. These include:`,
                 `<strong>VAT:</strong>  ‘General Info’ → ‘Request for Value Added Tax’ →  ‘Would you like to request for VAT Certificate?’ →  ‘Yes’ →  Enter expected turnover amount.`,
                 `<strong> PAYE:</strong>    ‘Employment Info’ →  ‘Does the company have employees?’ →  ‘Yes’ →  Enter required details.`,
                             `Registration for any additional tax types in the future, a taxpayer can do it online via the E-tax system. `,
                             `<strong> When to start declaring and paying taxes after registration<strong>`,
                             `Tax declarations for all registered tax types must be submitted for tax periods from the date the taxpayer was registered.`,
                            `  Even if there is no business activity within the first, or subsequent, tax periods, the declarations must still be submitted to avoid non-declaration penalties. This includes domestic taxes such as Income Tax and also Local Government Taxes such as Trading License Tax.`,
                        `<blockquote>
                   <strong> Example </strong>
                 <p>Rukundo is starting a private business of a retail shop. He is starting the business himself using his own capital and with no staff, partners or shareholders. He expects a daily turnover of approximately FRW 20,000, equivalent to an annual turnover of approximately FRW 8,000,000.</p>
                <p> He wants to be protected by limited liability. Rukundo selects a ‘domestic’ business, with the company category ‘private’, the type ‘limited by shares’ and his position as ‘managing director’.  As shown below:</p>
                </blockquote>`,
               `<div><img src="/images/business.png" alt="businesss" /></div>`,
                `<blockquote>
                  <p> On the share info tab, he lists himself as the only shareholder. On the members of the board tab, he enters himself as the only member of the board. On the business activity tab, he enters the business sector as ‘G – Wholesale or Retail Trade; Repair of Motor Vehicles and Motorcycles’ and then chooses ‘G4711 – Retail sale in non-specialised stores with food, beverages or tobacco predominating’.</p>
                 <p>As his annual turnover is expected to be below FRW 20,000,000, he does not have to request for a VAT certificate. As he has no employees, he does not register for PAYE.</p>
                 <p>Rukundo is automatically registered for Personal Income Tax (PIT), which must be declared and paid on an annual basis by 31st March of the following year, Trading License Tax which must be declared and paid after the expiration of the exemption period of two years from registration date.</p>
                 </blockquote>`,
                   `<strong>Step-by-Step Guide to Business Registration</strong>`,
                    `<strong>Step 1: Register on the RDB business registration portal</strong>`,
                    ` Access the RDB business registration system at <a href="https://brs.rdb.rw/busregonline" target="_blank">RDB website</a>`,
                     `The RDB business registration login page is shown below.`,
                     `<div><img src="/images/rdb2.png" alt="businesss" /></div>`,
                     `New users must first create an account by clicking on ‘Register Here’. This leads to the ‘Create New Online User’ screen.`, `Enter the required personal details and click submit to register an account.`,
                      `The RDB system will then send an email to the given email address containing a website link. Click on the link provided to validate and activate this account.`,
                      `Once the account has been activated, return to the RDB business registration system and enter the chosen login details to begin the business registration process`,
                      `<strong>Step 2: Choose the business category to be registered</strong>`,
                       ` Once logged in, an initial message advises that if the company already has a unique Taxpayer Identification Number (TIN), then do not use this system to register.`,
                        `<div><img src="/images/rdb3.png" alt="businesss" /></div>`,
                        ` If the company does not yet have a TIN, click OK to continue to the business registration system screen below.`,
                        `Note that the ‘Name Reservation’ option does not register a business, but can be used to reserve a business name for registration in the future.`,
                        `For each of the categories, ‘Your Position’ within the business must be noted. In addition, ‘Domestic’ requires a choice of ‘Company Category’ which can be public or private and ‘Type’. `,
                        `<strong>Step 3: Complete the business registration application</strong>`,
                        `Depending upon the business type selected, the details that must be completed differ slightly. The screen below shows the tabs after selecting a domestic, private, limited by shares company registration.`,
                        `<div><img src="/images/rdb5.png" alt="businesss" /></div>`,
                        `Note that each of the major tabs (‘General Info’, ‘Share Info’ etc.) has separate minor tabs (‘Company Name’, ‘Articles of Association’ etc.) Ensure to complete all tabs before submitting the registration.`,
                        `Once all tabs are completed, click the ‘Preview’ tab to check that all the details entered are correct, before clicking ‘Submit’ to submit the business registration application.`,
                        `After submitting, RDB will validate that the information entered is correct. If this is approved, an SMS will be sent to inform the taxpayer that the application has been sent to RRA to issue a Taxpayer Identification Number (TIN). Once the TIN is issued, another SMS will be sent to inform the taxpayer that his/her business has been registered.`,
                        `<strong>Step 4: Print Certificates</strong>`,
                        `After receiving the second SMS, confirming that RDB has validated the business registration application and RRA has issued a TIN, the taxpayer must log back in to the RDB Business Registration system.`,
                        `Once logged in, click on the ‘Certificates’ option on the left-hand side. There are two certificates that must be printed and kept securely. `,
                         `<div><img src="/images/rdb6.png" alt="businesss" /></div>`,
                         `Firstly, choose the ‘Certificate Type’ that matches the application type, for example ‘Domestic’ if the business type that was registered was a domestic company. Once selected, download and print this certificate. Secondly, choose the ‘Certificate Type’ titled ‘Memorandum’ and also download and print this certificate. If there are any other applicable certificates, for example a ‘Value Added Tax’ certificate, then these should also be printed at this stage.`,
                         `Once registered, the business can operate and declare and pay taxes as normal.`,
                        `<strong> Find your TIN using ID <strong>`,
                          `If a taxpayer does not know their TIN, they can visit RRA offices or call the RRA call centre toll-free on 3004.`,
                          `In addition, if an individual taxpayer (i.e., not a company) does not know their TIN, they can visit the RRA website or uses below link:<a href="https://etax.rra.gov.rw/nidAssignedTIN/" target="_blank">etax.rra.gov.rw</a>  and click ‘Search for TIN using National ID’ as per the following screen:`,
                          `<div><img src="/images/etax.png" alt="etax" /></div>`,
                          `This leads to the following screen asking whether the taxpayer registered their TIN using a Rwandan National ID or a Passport. After clicking on the relevant choice, the National ID or Passport Number can be entered, and the associated TIN is displayed by clicking ‘Show TIN’.`,
                          `<div><img src="/images/etax2.png" alt="etax" /></div>`,

            
      ],
    },
  },
{
  id: 'e-tax-system',
    title: {
      en: 'E-tax-system',
      fr: 'Système fiscal électronique',
      rw:" Sisitemu yo gukoresha imisoro",
    },
    content: {
      en: [
         ` Each of the domestic taxes can be declared using E-Tax. This is an online portal that makes it easier for taxpayers to declare domestic taxes. This can be done online. The process of declaring using E-Tax is similar for all domestic taxes. `,
           `Taxpayers are automatically registered for E-Tax when their business is registered. `,
         `<strong>   E-Tax password</strong>`,
                 ` If a taxpayer does not know their E-Tax password, reset it by clicking on ‘Forgot Password’ or visiting RRA offices.`,
                 ` What are the causes of an annexure not validating?`,
                `  When completing annexures, ensure to:`,
                `<ul>
              <li>‘Enable content’ after opening the spreadsheet.</li>
              <li>Use the required date format (dd/mm/yyyy) for the dates entered and the computer’s settings.</li>
              <li>Avoid blank cells for rows that have been started</li>
              <li>Click to ‘Validate’.</li>
              </ul>`,
      ],
      },
    },
    {
    id:'ebm',
    title: {
      en: 'EBM',
      fr: 'EBM',
      rw: "EBM",
    },
    content: {
      en: [
               ` Taxpayers who are required to issue EBM invoices can do so by adopting either:`,
              `  -	EBM2.1`,
              ` -	A Virtual Sales Data Controller (VSDC)`,
               ` EIS/EBMs must be used to produce EIS/EBM invoices for every sales transaction, both to other businesses and final consumers. RRA staff train taxpayers on how to set up, program and use their EIS/EBMs.`,
               `The typical process for using EIS/EBMs is to enter the quantity, price and code of each item that is being sold. The taxpayer must then print the EIS/EBM invoice, give this to the consumer and keep a duplicate EIS/EBM invoice.`,
               ` If there is any period where the EIS/EBM is not working, for whatever reason, taxpayers must notify RRA.`,
      ],
    },
  },
{
  id: 'step-by-step-guide-to-importing-or-exporting',
    title: {
      en: 'Step-by-Step guide to importing or exporting',
      fr:`Guide étape par étape pour l'importation ou l'exportation`,
      rw: "Intambwe-ku-ntambwe iganisha ku gutumiza cyangwa kohereza hanze",
    },
    content: {
      en: [
                `<strong> Step 1:</strong> Taxpayer prepares all necessary documents and contracts a Clearing Agent. `,
                `<strong> Step 2:</strong> The Clearing Agent prepares and submits an import or export declaration to RRA using the Rwanda electronic Single Window (ReSW). `,
                `<strong>Step 3:</strong>     The Clearing Agent receives assessment notices, containing the amounts of customs duties due. The taxpayer pays all customs duties due, either directly or through the Clearing Agent. The assessment notice may contain different ‘Doc IDs’ for different tax types. If so, these must each be paid separately. `,
               `<strong>  Step 4:</strong> The ReSW system allocates the consignment to a certain Customs channel. If verification is required, Customs Officers will request the necessary documents and/or access to the consignment. If there are any problems, further action may be required.`,
              `<strong>    Step 5:</strong>After successful verification, the Customs Officer provides the taxpayer with a release order.`,
               `<strong>  Step 6:</strong>   The taxpayer pays any due warehousing fees, if applicable, to the warehouse owner.`,
                `<strong>   Step 7:</strong>    The taxpayer receives an exit note and may leave with their consignment. `,

   
      ],    
},
},
{
  id: 'step-by-Step-guide-to-motor-vehicle-ownership-transfer',
    title: {
      en: 'Step-by-Step Guide to Motor Vehicle Ownership Transfer',
      fr: "Guide étape par étape pour le transfert de propriété d'un véhicule automobile",
      rw: "Intambwe-ku-ntambwe yo kuyobora ibinyabiziga bifite ihererekanyabubasha",
    },
    content: {
      en: [
                 `<strong>    Step 1: Online Motor Vehicle Transfer Request</strong>`,
             ` The seller applies for online motor vehicle transfer in E-Tax.`,
       `<strong>  Step 2: Visit RRA offices and pay the transfer fee</strong>`,
             ` Visit any RRA offices. If the seller of the motor vehicle has no outstanding tax arrears, RRA staff will provide an assessment notice for the Registration Transfer Fee. This must be paid by either the buyer or the seller.`,
    `<strong>  Step 3: Register the buyer with RRA</strong>`,
             ` If the buyer on the motor vehicle does not yet have a unique Taxpayer Identification Number (TIN), provide RRA staff with a valid Identity Document (ID) or Passport. `,
     `<strong>Step 4: Provide all required documents</strong>`,
             ` The buyer must provide RRA staff with all the required documents. `,
      `<strong>Step 5: Updated Yellow Card is provided to the buyer</strong>`,
             `RRA staff will provide the buyer of the motor vehicle with the updated Yellow Card containing the buyer’s details. The process is now finished and the buyer is now the legal owner of the motor vehicle. `,

      ],
    },
},
   {
    id: 'laws-ministerial-orders-and-rulings',
    title: {
      en: 'Laws, Ministerial Orders and Rulings',
      fr: 'Lois, arrêtés ministériels et décisions',
      rw: "Amategeko, amabwiriza ya Minisitiri n'ibyemezo",
    },
    content: {
      en: [
      `All laws, ministerial orders, Commissioner General (CG) rulings, public rulings and ruling cases governing tax administration are available on the <a href="https://www.rra.gov.rw/en/laws-policies-and-rulings">RRA website</a>`,
       `<strong> How can taxpayers ask for rulings if anything is unclear?</strong>`,
                    `If there are any aspects that are unclear, or not covered, by the existing laws, ministerial orders or previous rulings then taxpayers may ask for an official clarification or ruling to be made by RRA.  `,
                    `In order to request a ruling, taxpayers must write a letter addressed to the Commissioner General of RRA. This letter should:`,
                    `<ul>
                      <li>      Identify the taxpayer’s name and TIN.</li>
                    <li>     Identify the relevant sections of laws, ministerial orders or previous rulings.</li>
                    <li>       State the reason(s) that a ruling is required.</li>
                    </ul>`,
                   ` RRA will consider the request and inform the taxpayer of the official ruling directly. In the event that the ruling is considered to be useful to taxpayers more generally, this will also be published as an official ruling on the RRA website on the link above.`,

      ],
    },
  },
  {
    id: 'obligations-and-bookkeeping',
    title: {
      en: 'Obligations and Bookkeeping',
      fr: 'Obligations et tenue de comptabilité',
      rw: "Inshingano no kubika ibitabo by'ibaruramari",
    },
    content: {
      en: [
                `  The general obligations of all taxpayers include:`,
                `<ul>
                  <li>   Keeping RRA informed of any changes in contact details or physical address. Any changes must be reported to RRA within ten (10) days.</li>
                  <li>   Keeping books of account, see below.</li>
                  <li>   Submitting tax declarations and paying due taxes.</li>
                  <li>    Cooperating fully with all RRA officers and correspondence.</li>
                  </ul>`,
                  `For additional obligations of taxpayers that are registered for specific tax types, see the relevant chapters of this Tax Handbook.`,
                  `<strong>What are ‘Books of Account’ and what bookkeeping is required of taxpayers?</strong>`,
                 ` Books of account are very helpful for businesses to keep track of their cash-flow and profitability. The minimum information required by RRA is for taxpayers to record each sale transaction, with the date, client, nature of goods and amount recorded.`,
                  `Taxpayers with annual turnover between FRW 12,000,000 and FRW 20,000,000 must keep record of daily purchases, record of all financial transactions, tax liability, withheld tax, and a declaration of withheld tax in addition to record of sales.`,
                  `Taxpayers with annual turnover above FRW 20,000,000 must also keep a record of assets and liabilities, records of daily income and expenses, records of stock inventory at the end of the period and information related to controlled transactions.`,
                  `Taxpayers with annual turnover above FRW 20,000,000 must register for VAT; must also declare Real Regime Income Tax and fulfill other additional bookkeeping requirements.`,
                  `How long must taxpayers keep relevant tax documents? `,
                  `Taxpayers are required to keep all documents and invoices relating to all tax declarations and payments for 10 years.`,

      ],
    },
  },
  {
    id: 'audits',
    title: {
      en: 'Audits',
      fr: 'Audits',
      rw: 'Ubugenzuzi',
    },
    content: {
      en: [
                    `  An audit is one of the methods RRA uses to ensure that taxpayers are correctly declaring and paying their taxes. Audits involve RRA checking the relevant documents concerning a taxpayer’s tax obligations for any tax period(s) within the past five years.`,
                    `  If there is evidence of non-compliance, the taxpayer will be issued with an assessment notice. This contains details of the offence(s), and the unpaid tax due, as well as additional penalties or fines that must be paid.`,
                     ` It is important to note that being selected for an audit does not necessarily mean that RRA suspects the taxpayer of non-compliance. Instead, RRA wishes to check a taxpayer’s declarations and payments in more detail, to encourage a high level of compliance across all taxpayers.`,
                      `The processes for audits are similar for domestic taxes, Local Government Taxes (LGT) and fees, and for Post-Clearance Audits (PCAs) regarding customs duties.`,
                   `<strong>   Different types of audits</strong>`,
                      `There are three main types of audits:`,
                    `<ul>
                      <li>  Comprehensive audit.</li>
                      <li>  Issue-oriented audit</li>
                      <li>  Desk audit.</li>
                        <li>   Transfer pricing audit</li>
                      <li>      Refund audit</li>
                      </ul>`,
                     ` Comprehensive audits are more in-depth and time-intensive. These are usually conducted by RRA staff whilst visiting the taxpayer’s business premises and reviewing all relevant documents.`,
                      `Issue-oriented audits are usually focussed on a single tax type, single aspect or single tax period. Issue audits may be desk-based or involve visits to the taxpayer’s business premises.`,
                      `Desk audits are conducted by RRA staff using information that has already been submitted to RRA. Transfer pricing audit focuses on related party transactions.`,
                      `Refund audits are a type of issue audit, focused on tax declarations claiming refunds from RRA.`,
                       `<strong>       When are taxpayers informed about audits? </strong>`,
                     ` In the case of desk audits, taxpayers may not be informed about the audit unless a specific problem is identified. Taxpayers will always be invited to offer explanations before being issued with assessment notices.`,
                      `In the case of issue audits, taxpayers will be notified at least three working days beforehand. The postponement of such an issue-oriented audit cannot exceed seven (7) working days.`,
                      `In the case of comprehensive audits, taxpayers will be notified at least seven working days beforehand. If the taxpayer is not ready, they may write to RRA requesting an extension, up to a maximum of thirty days.`,
                      `Taxpayers will be informed of what is required of them, the documents required by RRA, their rights, the anticipated timeframe, and the process of the audit during the notification of the audit or the initial meeting.`,
                      `Any unpaid taxes or additional penalties or fines must be paid within seven days of receipt of the assessment notice.`,

      ],
    },
  },
  {
    id: 'refunds-tax-credits',
    title: {
      en: 'Refunds/Tax credits',
      fr: "Remboursements et crédits d'impôt",
      rw: "Gusubizwa imisoro n'inguzanyo z'imisoro",
    },
    content: {
      en: [
               `<strong> What are the different types of refunds/tax credits?</strong>`,
                      `There are situations where it is possible for taxpayers to have overpaid the amount of taxes due, and require refunds/tax credits. These situations occur most frequently for:`,
                     ` <ul>
                      <li>        VAT – where the VAT paid on inputs exceeds the output VAT, particularly in the case of zero-rated products and exports.</li>
                      <li>       Income Tax – where the Instalment Quarterly Prepayments paid by the taxpayer and the Withholding Taxes withheld and paid on behalf of the taxpayer exceed the Income Tax due.</li>
                      <li>       Audits – where the result of an audit finds that the taxpayer has over declared and over paid.</li>
                      <li>       Appeals – where the taxpayer pays the taxes due, and is subsequently successful in their appeal.</li>
                      <li>       Any accidental overpayment.</li>
                      </ul>`,
                      `There is also a special allowance of VAT Refunds for Privileged Persons. `,
                      `<strong>What is the process for taxpayers to receive refunds?</strong>`,
                      `In the case of VAT refunds, the refund process requires no initial action from the taxpayer. For higher value refunds, the claims are refunded to the taxpayer’s bank account. For lower value refunds, the claims may be deducted against future payments. `,
                      `In the case of refunds/tax credits due to successful appeals, the refund/tax credits process requires no additional action from the taxpayer.`,
                     ` For all tax credits, the taxpayer must write a letter addressed to the tax administration. This means either addressed to the ‘Assistant Commissioner in charge of Filing and Payment Monitoring Division in case of tax credits resulting from taxpayers’ self-assessment’, or the ‘Assistant Commissioner in charge of Debt Management Division’ for tax credits resulting from tax administration assessments. This letter should:`,
                     `<ul>
                      <li>      Identify the taxpayer’s name and TIN.</li>
                      <li>       Identify the tax period and tax type(s) concerned.</li>
                      <li>       State the reason(s) for the refund request.</li>
                      <li>       State the amount of refund claimed.</li>
                      <li>       Be signed by the taxpayer or legal representative.</li>
                      </ul>`,
                      `RRA will provide the taxpayer with a Refund/tax credit Claim Notification reply, informing them whether their refund/tax credit claim has been accepted, adjusted or rejected and the reason for this decision. Tax credit is used to pay current or future liability.`,

      ],
    },
  },
  {
    id: 'appeals',
    title: {
      en: 'Appeals',
      fr: 'Recours',
      rw: 'Ubujurire',
    },
    content: {
      en: [
                   `<strong>         When can taxpayers appeal?</strong>`,
                   ` Taxpayers may appeal to RRA against decisions within 30 days following the conclusion of audits and/or receiving any assessment notices of taxes or penalties. However, disputes related to a notice of assessment generated by electronic tax system based on declaration made by a taxpayer may be administratively resolved without recourse to appeal procedure. `,
                `<strong>   Do taxes and fines still have to be paid when appealing?</strong>`,
                   `It is important to note that taxpayers are still required to pay any taxes or penalties within the original deadlines. Failure to do so will result in penalties and interest applying as normal. If the appeals are successful, taxpayers will receive refunds or credit notes. However, when the taxpayer has paid the undisputed portion of the tax, the Commissioner General suspends the collection of tax that is subject of appeal.`,
                 `<strong>   What is the process, timeframe and level of appeal? </strong>`,
                   ` In order to appeal, taxpayers must write a letter addressed to the Commissioner General of RRA within 30 days of receiving notice of the decision they wish to appeal. This letter should:`,
                   `<ul>
                    <li>       Identify the taxpayer’s name and TIN.</li>
                    <li>       Identify the tax period and tax type(s) concerned.</li>
                    <li>       State the decision that is being appealed.</li>
                    <li>       State the reason(s) for the appeal.</li>
                    <li>       Contain all supporting documents, proofs and legal arguments against the assessment.</li>
                    <li>       Be signed by the taxpayer or legal representative.</li>
                    </ul>`,
                    `RRA is required to respond to the appeal of the taxpayer within 30 days. During this period, RRA will then either accept the appeal, invite the taxpayer to come to RRA offices to further explain the reasons for their appeal or may extend an addition of 30 days and inform the taxpayer. If the taxpayer is not satisfied with the result of the appeal, s/he may apply to RRA to reach an ‘amicable agreement’ or file the case to the competent court within 30 days.`,
                `<strong>  What is the cost of appeal?</strong>`,
                    `There is no cost of appealing to RRA. However, there may be fees incurred when appealing to the Courts.`,
                  `<strong>  What documents might be used to support an appeal?</strong>`,
                    `The types of supporting documents may vary depending upon the circumstances of the appeal, but typically include: invoices, proof of payment, books of account, financial statements and similar.`,
                    `It is important to note any documents used to support appeals following the conclusion of audits must have also been provided at the time of the audit.`,
                `<strong>    Can appeals make assessments worse for the taxpayer?</strong>`,
                    `There is no penalty or fine for making unsuccessful appeals. However, appeals could potentially lead to further assessment of the case and the uncovering of new information leading to additional penalties or fines.`,

      ],
    },
  },
  {
    id: 'debt-management',
    title: {
      en: 'Debt Management',
      fr: 'Gestion des dettes',
      rw: "Gucunga imyenda y'imisoro",
    },
    content: {
      en: [
                   `<strong>  What is a tax debt?</strong>`,
                        `A tax debt is the amount of money a taxpayer (individual or business) owes to a tax authority due to:`,
                        `<ul>
                        <li>      Unpaid taxes from previous periods</li>
                        <li>       Underreported income or incorrect tax filings</li>
                        <li>       Penalties and interest for late payments or non-compliance.</li>
                        </ul>`,
                       `<strong> When does a tax become a debt?</strong>`,
                       ` Tax debt arises when the tax due is not paid in full by the deadline upon reception of notice of assessment automatically generated by the system or after audit. It remains a liability until it is settled through payment, offset, or other arrangements like installment plans or waivers.`,
                       `<strong> What is the procedure for paying taxes in instalments?</strong>`,
                        `Taxpayers who are unable to pay tax arrears or assessment notices at once may apply to pay in instalments.`,
                        `In order to apply to pay in instalments, the taxpayer must pay at least 10% of the tax due before applying. The payment plan must show an intention to pay the full amount within a maximum period of 12 months. However, the Commissioner General may extend this period by another period not exceeding 24 months if the taxpayer has justified reasons. The taxpayer should also offer, and provide evidence of, a guarantee, that could be seized by RRA in the event of non-compliance with the approved payment plan.`,
                        `Taxpayers must then write a letter addressed to the Commissioner General of RRA. This letter should:`,
                        `<ul>
                        <li>      Identify the taxpayer’s name and TIN </li>
                        <li>       Identify the tax period and tax type(s) concerned</li>
                        <li>       State the amount of tax due</li>
                        <li>       State the reason(s) for not being able to pay the whole amount of tax due at once</li>
                        <li>       Contain their instalment payment plan</li>
                        <li>       Contain proof of payment of at least 10% of the amount due</li>
                        <li>       Contain evidence of a guarantee</li>
                        <li>       Be signed by the taxpayer or legal representative</li>
                        </ul>`,
                       ` If the instalment payment plan is approved, the taxpayer and RRA will sign an official agreement detailing the instalment payment plan. Any failure to comply with the payment plan results in the immediate enforcement of the total amount due, and may result in the seizure of the guarantee.`,
                      `<strong>  What is the procedure for waivers of any taxes due?</strong>`,
                        `In special circumstances, taxpayers may also request for taxes or penalties to be waived or dropped. Although these requests must be made to RRA, the decision to grant any waivers waive any fines or interest due is the responsibility of the Ministry of Finance and Economic Planning (MINECOFIN). However, waiving the principal tax is done by the Cabinet upon request of MINECOFIN.`,
                        `In order to request a waiver, taxpayers must write a letter addressed to the Commissioner General of RRA. This letter should:`,
                        `<ul>
                        <li>      Identify the taxpayer’s name and TIN.</li>
                        <li>       Identify the tax period and tax type(s) concerned.</li>
                        <li>       State the amount of tax due.</li>
                        <li>       State the reason(s) for the waiver request.</li>
                        <li>       Contain any supporting evidence as required.</li>
                        <li>       Be signed by the taxpayer or legal representative.</li>
                        </ul>`,
                        `RRA will acknowledge receipt of the letter, but the timeline, result and communication of the decision is the responsibility of MINECOFIN.`,
                       `<strong> What is the procedure for the enforcement of arrears?</strong>`,
                        `There are many enforcement actions legally available to RRA for the collection of unpaid tax arrears. The typical process is in three steps. Firstly, the taxpayer receives a warning letter from RRA, requesting they visit RRA offices to discuss the arrears situation and repayment options.`,
                        `If there is no response within fifteen days, RRA may begin ‘garnishment’. This means that RRA may work with third parties, such as banks, to freeze the taxpayers’ accounts. Finally, RRA may begin search and seizure of movable and immovable assets. This can be sold at auction. A publication of auction must be made (in a public newspaper) at least 15 days before the auction is conducted. `,

      ],
    },
  },
  {
    id: 'certificates',
    title: {
      en: 'Certificates - VAT, Compliance Certificates and Tax Clearance Certificates',
      fr: 'Certificats TVA, certificats de conformité et quitus fiscaux',
      rw: "Ibyemezo bya TVA, kubahiriza amategeko n'ibyemezo by'uko nta mwenda w'imisoro",
    },
    content: {
      en: [
                        `<strong>  What are the different certificates available from RRA?</strong>`,
                      `There are six main types of certificates available from RRA. These are:`,
                      `<ul>
                      <li>      Value Added Tax (VAT) certificate</li>
                      <li>       Tax Clearance Certificates (TCCs)</li>
                      <li>       Compliance Certificate (Quitus Fiscal)</li>
                      <li>       Foreign Tax Credit certificate</li>
                      <li>       Trading License Tax certificate</li>
                      <li>    Electronic Billing Machine (EBM) Certificate</li>
                      </ul>`,
                      `The Foreign Tax Credit certificate is available for taxpayers to prove that they have paid taxes in Rwanda. The Foreign Tax Credit certificate must be requested from RRA offices, and is processed on a case-by-case basis.`,
                     `<strong> What is Value Added Tax (VAT) certificates?</strong>`,
                     ` VAT certificates certify that the taxpayer is registered for VAT.  All VAT registered taxpayers are required to clearly display the VAT registration certificate in plain view at their main place of business. `,
                     ` VAT certificates are available free of charge. They can be obtained through three channels:`,
                      `- The Rwanda Development Board (RDB) system during business registration`,
                     ` -  Through the E-Tax system`,
                      `<strong>What is Electronic Billing Machine (EBM) Certificate?</strong>`,
                      `It is a document certifying that a taxpayer adopted and uses an RRA certified electronic billing machine.`,
                      `EBM Certificate is obtained by writing to the Assistant Commissioner in charge of Tax Control and Operational Support Division. The letter should indicate:`,
                      `<ul>
                      <li>      Taxpayer name</li>
                      <li>       Taxpayer Identification Number (TIN)</li>
                      <li>       Reason of requesting</li>
                      </ul>`,
                     `<strong> What is Compliance Certificate (Quitus Fiscal)?</strong>`,
                      `Compliance Certificate (Quitus Fiscal) is a privileged status available, upon request, to taxpayers who have a good compliance record with RRA. Compliance Certificate (Quitus Fiscal) is proof of this status. There are two types of Quitus Fiscal, for withholding tax on public tenders of 3% (WHT 3%) and for withholding tax on imports of 5% and public tenders of 3% (WHT 5% & 3%). `,
                      `Taxpayers with Compliance Certificate (Quitus Fiscal) are not required to pay WHT 5%, or have WHT 3% withheld and paid on their behalf, depending upon the type of Compliance Certificate (Quitus Fiscal). This does not reduce the overall tax payable by the taxpayer, as any income from imports or public tenders are required to be declared in the annual Income Tax (PIT or CIT) declarations. However, Compliance Certificate (Quitus Fiscal) benefit their cash flow as the taxes do not have to be paid up front.`,
                      `The cost of applying for Compliance Certificate (Quitus Fiscal) is FRW 10,000. `,
                      `There is a distinction between Compliance Certificate (Quitus Fiscal) and Tax Clearance Certificate, as described below.`,
                      `<strong>What are Tax Clearance Certificates (TCCs)?</strong>`,
                      `Tax Clearance Certificates (TCCs) are available, upon online request through E-Tax, to prove that taxpayers have no unpaid arrears with RRA. This may be needed in order to bid for public tenders, apply for bank loans or a range of other reasons.`,
                      `The cost of applying for TCCs is FRW 5,000.`,
                      `<strong>What is the process of applying for and obtaining Certificates?</strong>`,
                     ` Certificates can be obtained through the RRA website for non-business individuals (Tax Clearance Certificate – TCC only), and through E-Tax for businesses.`,
                      `TIN holders wishing to apply and obtain Tax Clearance Certificates (TCCs) should first visit the<a href="http://www.rra.gov.rw/"> RRA website</a> and log in into E-tax, click on ‘TCC Quitus & other application’, then click on ‘Apply here’.  This loads the following screen, the Certificates portal.`,
                      `The taxpayer can submit the request for the listed certificates, check the progress, and download the certificate.`,
                       `<div><img src="/images/certificates1.png" alt="businesss" /></div>`,
                      `Business taxpayers wishing to apply and obtain VAT Certificate, Compliance Certificate (Quitus Fiscal), Withholding Certificate, and Tax Clearance Certificate (TCC) should login into RRA E-Tax and click on ‘TCC, Quitus & Other applications’. This menu displays three options: ‘Apply here’, ‘View request’, ‘Tax arrears’ as per below screen:`,
                        `<div><img src="/images/certificates2.png" alt="businesss" /></div>`,
                       `  The ‘Apply here’ allows you to send a certificate request to RRA. Available certificate types are displayed in the following screen`,
                       `<div><img src="/images/certificates3.png" alt="businesss" /></div>`,
                       `If the taxpayer selects ‘QUITUS’, they must also select ‘3%’ or ‘5% & 3%’ from the ‘Quitus Certificate Type’ drop-down menu. This refers to the type of Withholding Tax from which they wish to be exempted`,
                        `<div><img src="/images/certificates4.png" alt="businesss" /></div>`,
                         `If the taxpayer selects ‘VAT’, no other selection is required. If the taxpayer selects ‘TCC’, the system allows a taxpayer to enter remarks/comment. If the taxpayer selects ‘Withholding Certificate’, the system requires additional information as per below screen:`,
                       `<div><img src="/images/certificates5.png" alt="businesss" /></div>`,
                       `After all required information has been entered for any certificate, click ‘Submit’ to confirm the certificate application. Note that the system generates acknowledgement receipt for ‘TCC’ and ‘Compliance Certificate (Quitus Fiscal)’ indicating the cost to be paid as processing fees mentioned above.`,
                      `The ‘View Requests’ allows taxpayers to check the status of the submitted request. ‘Tax Arrears’ displays arrears details if any. It is advised to check tax arrears before applying for TCC and Compliance Certificate (Quitus Fiscal).`,


      ],
    },
  },
  {
    id: 'voluntary-disclosure-scheme',
    title: {
      en: 'Voluntary Disclosure Scheme (VDS)',
      fr: 'Régime de divulgation volontaire',
      rw: 'Uburyo bwo kwiyandikisha no kumenyekanisha ku bushake',
    },
    content: {
      en: [
                      `  VDS is an opportunity provided by the Law to non-compliant persons to declare and pay their tax with reduced sanctions. VDS facilitates the following:`,
                      `<ul>
                        <li>        Automatic waiver of penalties and interests for late payment</li>
                        <li>       Payment effected in 30 days</li>
                        <li>       A certificate for Voluntary Disclosure</li>
                        </ul>`,
                       `<strong> The basis of VDS</strong>`,
                        `Article 94 of Law No. 020/2023 of 31/03/2023 on Tax Procedures provides that interest and penalties do not apply to taxpayers who voluntarily disclose.`,
                        `To implement Article 94, Ministerial Order No. 001/24/03/TC of 08/03/2024 set out the procedures and conditions for accessing voluntary disclosure incentives.`,
                       `<strong> Who is eligible</strong>`,
                       `<ul>
                        <li>         A registered taxpayer before being notified of audit.</li>
                        <li>       A taxpayer not registered.</li>
                        <li>       A taxpayer with tax period beyond five years of being audited.</li>
                        <li>       Any other status as may be communicated by the Minister.</li>
                        </ul>`,
                       `<strong> Where to apply </strong>`,
                       ` During VDS period, applications are submitted online via <a href="http://www.rra.gov.rw/"> RRA website</a>`,
                        
      ] 
    },
  },
  {
    id:`vat-reward`,
    title: {
      en: 'VAT Reward',
      fr: 'Récompense TVA',
      rw: 'Igice cya VAT',
    },
    content: {
      en: [
    
                      ` This scheme was established by tax law to address the following concerns at the level of final consumer:`,
                      `<ul>
                        <li>       Non-compliance with the issuance of EBM invoice </li>
                        <li>       Issuance of invoice with incorrect price value (under-pricing)</li>
                        <li>       Low culture of invoice demand amongst consumers</li>
                        <li>       Lack of incentives to final consumers</li>
                        <li>       Limited information of consumer contribution</li>
                        </ul>`,
                        `<strong>Eligibility criteria</strong>`,
                       ` Individuals who fulfil the following:`,
                       `<ul>
                        <li>       Being registered in the VAT reward system.</li>
                        <li>       Having received an EBM invoice from a VAT registered taxpayer indicating her or his recorded mobile telephone number.</li>
                        </ul>`,
                        `A final consumer who makes a payment and requests an invoice but does not receive one must declare this in the system as prescribed by the tax administration.`,
                        `<strong>How to register</strong>`,
                        `Using USSD technology, dial *800#, select your preferred language, then follow these steps:`,
                        `<ul>
                       <p> 1. 	Choose option 4 – EBM Services</p>
                        <p>2. 	Select option 1 – VAT Reward Services</p>
                       <p> 3. 	Choose option 1 – VAT Reward Registration</p>
                        <p>4. 	Enter the requested information: your National ID number and the mobile phone number where the reward should be sent.
                        </ul>`,
                        `<strong>Rate of VAT Reward</strong>`,
                       ` A final consumer is rewarded 10% of the VAT amount as shown on the EBM invoice issued.`,
                       `<strong> When is the VAT Reward disbursed</strong>`,
                       ` The VAT reward is deposited to the mobile money or bank account designated by the last consumer on quarterly basis, within 15 days following the declaration period of that quarter.`,
      ],
    },
  },
  {
    id: 'communicate',
    title: {
      en: 'Communicate to RRA',
      fr: 'Communiquer avec le RRA',
      rw: 'Ganira na RRA',
    },
    content: {
      en: [
                  
                        `<strong>i) Sending letters through E-Correspondence system</strong>`,
                        `Official communication with RRA is done via the E-Correspondence System. To send a letter to RRA whether you have a TIN or not, visit RRA website then click on “CLICK HERE TO SEND YOUR LETTER TO RRA” as per below screenshot:`,
                           `<div><img src="/images/letter.png" alt="businesss" /></div>`,
                        `Then follow all steps by filling all requested information. The letter to be sent should be signed, stamped, and saved as PDF.`,
                          `<strong>     ii) Online Requests via E-tax</strong>`,
                                `Taxpayers can access various services through the online requests menu in the e-tax system. These include:`,
                                `<ul>
                                <li>CIT/PIT requests: Services related to Income tax Filling and Payment;
                                <li>VAT/PAYE filling frequency change: Request to change the filing frequency from quarterly to monthly for VAT or PAYE.</li>
                               <li> Requests for revision downwards: Submit a request to reduce previously declared tax.</li>
                               <li> Document generation: Allows taxpayers to generate a document number when one is missing for a given declaration period</li>
                               <li> Business closure: Submit a request to close a business entirely or close a specific tax type.</li>
                               <li> Instalment Payment Request: For taxpayers with tax arrears, this service allows them to request payment in instalments.</li>
                               </ul>`,
                               `<strong> iii) Online requests via MyRRA</strong>`,
                                `Taxpayers who need to request for EBM are required to login to the MyRRA system and submit their applications by clicking on “Service request button”. Once the application receives a feedback (approval/rejection due to a reason), a taxpayer receives a notification on their phone number via sms or email.`,
                                `<strong>  iv) Social media</strong>`,
                               ` RRA utilizes several social media channels to handle tax enquiries and service challenges:`,
                               `<ul>
                               <li> WhatsApp+250 739 008 010 (Primary query line) / +250 785 569 363 (Recruitment) </li>                             
                              <li>  YouTube:<a href="https://www.youtube.com/@rwandarevenueauthority6148">  Rwanda Revenue Authority</a> </li>
                              <li>  X (Twitter):<a href="https://x.com/rrainfo"> @rrainfo</a></li>
                              <li>  Instagram:<a href="https://www.instagram.com/rwandarevenue/?fbclid=IwY2xjawQKSAJleHRuA2FlbQIxMQBicmlkETI0dkwwQlk5MURnRVRNM1Bqc3J0YwZhcHBfaWQBMAABHlbV9wpE_PBjQSNTHfJowZa6BAO_cnA_zp-uiURLa0e022xHGc3N-vNoEl7P_aem_Ib3OIieXuttBZWYxjAtChQ"> @rwandarevenue</a></li>
                             <li>   TikTok:<a href="https://www.tiktok.com/@rrataxtoks"> @rrataxtoks</a></li>
                             <li>   Facebook:<a href="https://web.facebook.com/RwandaRevenueAuthority/?_rdc=1&_rdr#"> Rwanda Revenue Authority</a></li>
                             <li>   LinkedIn:<a href="https://www.linkedin.com/company/rwanda-revenue-authority/posts/?feedView=all">Rwanda Revenue Authority</a></li>
                             <li>   Flickr:<a href="https://www.flickr.com/photos/197597413@N06/albums/"> Rwanda Revenue Authority</a></li>
                             </ul>`,
                          `<strong>      v) Call Center</strong>`,
                               ` RRA Call Center serves as a central hub for taxpayer support, designed to simplify tax compliance and provide immediate technical assistance.`,
                               ` The center is accessible via the toll-free short code 3004 (for local calls) or +250 788 185 500 for international calls.`,
                              `<strong>  vi) By post</strong>`,
                                `Rwanda Revenue Authority`,
                                `Silverback Mall, Kicukiro - Sonatube, Kigali, Rwanda`,
                               ` P. O. Box 3987`,

      ],
    },
  },
  {
    id: 'motor-vehicle-services',
    title: {
      en: 'Motor Vehicle Services',
      fr: 'Services relatifs aux véhicules automobiles',
      rw: "Serivisi z'ibinyabiziga",
    },
    content: {
      en: [
     ` <strong>When to transfer motor vehicles </strong>`,
             ` Transfer of motor vehicles is required when the ownership of the vehicle changes. `,
             `It can happen due to the following reasons:`,
             ` Normal sale,donation, inheritance (Succession), public/private auction and court orders.`,
       `<strong> The cost of motor vehicle transfer</strong>`,
             ` The Transfer Fee is FRW 30,000 for motorcycles and FRW 60,000 for all other motor vehicles.`,
     `<strong> Required documents for motor vehicle transfer</strong>`,
             ` The documents required for motor vehicle transfer are:`,
             `<ul>
              <li>  Notarised Sale Contract (containing the date, location, value and the names, phone numbers, NID, identification of motor vehicles and signatures of both the buyer and the seller). If done outside the country, the Embassy and MINAFET may approve it.</li>
              <li>    Registration Transfer Fee payment receipt (FRW 30,000-FRW 60,000)</li>
              <li>    Latest Yellow Card and plate number for the motor vehicle</li>
              <li>   The buyer’s TIN</li>
              <li>   Historical insurance information (only required if the vehicle will be used as a business such as a taxi).</li>
              <li>  No tax arrears on the vehicle owner’s TIN</li>
              </ul>`,
           `<strong> Motor vehicle ownership transfer process</strong>`,
       `<strong> Step 1:</strong>The seller logs in into E-Tax, goes to ‘Motor Vehicle’ then clicks on ‘Ownership Transfer’. The system displays the following screen:`,
       `<div><img src="/images/transfer.png" alt="businesss" /></div>`,
      ` If the seller is transferring the owned motor vehicle to a new owner; the seller uses the first option ‘Transfer from Myself to Another Person’. If a new owner wants to acquire the motor vehicle for the following specific reasons:`,
            `<li>          Auction</li>`,
             `<li>         Succession</li>`,
            `<li>            Court order</li>`,
                `  The applicant uses the ‘Transfer to Myself’ option.`,
         `<strong>  Step 2:</strong> The taxpayer pays the Transfer Fee.`,
       `<strong>   Step 3:</strong>  If the buyer of the motor vehicle does not have a unique Taxpayer Identification Number (TIN), they must provide RRA staff with a valid NID or Passport. The TIN and certificate are provided free. `,
      `<strong>   Step 4:</strong>   The buyer must provide RRA staff with all the required documents.`,
       `<strong>   Step 5:</strong>If all required documents are valid, RRA staff will provide the buyer of the motor vehicle with the updated Yellow Card containing the buyer’s details after receiving the old yellow card and plate number.`,
     `<strong>  Step 6:</strong>  The process is finished and the buyer is now the legal owner of the motor vehicle.`,
       `<strong>  Motor vehicle-related services accessible online</strong>`,
                `  To access online Motor vehicle services, log into E-Tax, click on Motor vehicle menu, choose any of the following services as displayed by the system:`,
                `  -          Motor vehicle (MV) Declaration`,
                ` -          Motor vehicle (MV) Acknowledgment Receipt`,
                `  -          New Inactivity Request`,
                ` -          Duplicate Request`,
                `  -          View Duplicate requests`,
                 `-          Owner Ship Transfer`,
                 ` -          View Owner Ship Transfer Requests`,
                 `-          Ownership Certificate Request`,
                `  -          View Ownership Certificate Requests`,



      ],
    },
  },
  {
    id: 'my-rra',
    title: {
      en: 'MyRRA',
      fr: 'MonRRA',
      rw: 'MyRRA',
    },
    content: {
      en: [
   ` The MyRRA system is a unified gateway that allows taxpayers to access a range of tax services provided by the Rwanda Revenue Authority. `,
       `<strong>  How to Login into MyRRA?</strong>`,
                 ` Visit RRA website and click on the top right menu labelled “Login to MyRRA" as per the below picture:`,
                 `<div><img src="/images/rra1.png" alt="businesss" /></div>`,
                ` Or use the following <a href="https://myrra.rra.gov.rw/indexMain" >link</a>`,
                 `  Once clicked, the following access picture will be displayed on the screen:`,
              `<div><img src="/images/rra2.png" alt="businesss" /></div>`,
                   ` Click on 'Sign Up' to access MyRRA for the first time, or 'Login' if you already have credentials. If you have forgotten your password, the system provides an option to reset it by clicking on 'Forgot your Password'.`,
               `<strong>Services available through MyRRA</strong>`,
                     `MyRRA offers various features including the following:`,
                     `-  View current tax declarations`,
                     ` -  View undeclared taxes`,
                     `-  View unpaid taxes `,
                     ` - Request EBM `,
                     `- Registration on VAT Reward`, 
                     ` - Checking your VAT Reward information details`,
                     `In addition to the above services, through MyRRA, a taxpayer can access other information displayed on the following picture: `,
                    `<div><img src="/images/rra3.png" alt="businesss" /></div>`,

      ],
    },},
  {
    id: 'exchange-of-information',
    title: {
      en: 'Exchange of Information',
      fr: "Échange d'informations",
      rw: 'Guhana amakuru',
    },
    content: {
      en: [
                 ` In 2017, Rwanda joined the international crusade against tax evasion and fraud by becoming a member of Global Forum on Transparency and Exchange of Information for Tax purposes and acceded to the convention on Mutual Administrative Assistance in Tax Matters as amended by the 2010 Protocol on 11 August 2021. `,
                   `<strong> Exchange of Information on Request (EOIR)</strong>`,
                        `Rwanda implemented the Exchange of Information on Request (EOIR) standard of the Global Forum that allows tax authorities to request specific financial and legal information from other countries to support audits and investigations and ensure compliance with tax laws.`,
                        `<strong>   Requirements for the EOIR partner countries</strong>`,
                       ` Country partner of EOIR is required to provide partner jurisdictions with access to:`,
                       `<ul>
                        <li>Bank account information</li>
                        <li>     Legal and beneficial ownership records</li>
                        <li>   Accounting and financial documentation.</li>
                        </ul>`,
                       ` Partner jurisdictions of Rwanda are also required to avail the above-mentioned information for Rwanda to access them.`,
                     `<strong>  What does this mean for taxpayers and entities?</strong>`,
                       ` All individuals, businesses, and legal entities must maintain complete and accurate financial and ownership records, including the identity of beneficial owners. These records may be shared with other partner jurisdictions upon request, so as they can share the same information with Rwanda upon request.`,
                     `<strong>EOIR Non-compliance consequences to taxpayers</strong>`,
                       ` Failure to provide required information or intentional non-disclosure may result in fines, legal action, or criminal prosecution, in accordance with the Tax Procedure Law.`,
               `<strong> Automatic Exchange of Information (AEOI)</strong>`,
                      `  It is a country commitment to implementing the Automatic Exchange of Information (AEOI) standard under the OECD’s Common Reporting Standard (CRS). This allows for the annual automatic exchange of financial account information between jurisdictions.`,
                       `All financial institutions in Rwanda must report information on financial accounts held by non-residents through the AEOI portal, not later than 30 April each year. The first data exchange is scheduled for September 2025.`,
                `<strong>Consequences of AEOI non-compliance by financial institutions</strong>`,
                       ` The Tax Administration is vested with powers to impose administrative sanctions for the faults provided for under law n° 021/2023 of 31/03/2023 governing the automatic exchange of information for tax purposes.`,
                 `<Strong>  Security of shared information </strong>`,
                       `The Government of Rwanda is committed to high standards of data security and confidentiality. Information collected locally or from foreign jurisdictions is strictly protected and used solely for tax purposes, in line with national laws and international agreements.`,
                 `<strong>  Step-by-Step guide to declaring domestic taxes</strong>`,
                 `<strong>    Step 1: Log-in to E-Tax</strong>`,
                ` Access the E-Tax website at<a href=" https://etax.rra.gov.rw">  https://etax.rra.gov.rw/</a> or through the RRA website <a href ="https://www.rra.gov.rw/">  https://www.rra.gov.rw</a>  and clicking on ‘Pay Domestic taxes here’ on the right of the screen. This loads the following login screen:`,
                 `<div><img src="/images/rra4.png" alt="businesss" /></div>`,
                   ` Login using the TIN and E-Tax password.`,
               ` If a taxpayer does not know their password, it can be reset by clicking ‘Get Password?’ on the E-Tax system login and receiving a new password by SMS and email to the address used when registering.`,
                `<strong>       Step 2: Download, complete, validate and save annexures</strong>`,
               `After logging in, the E-Tax home page is loaded as shown below.`,
                 `<div><img src="/images/rra6.png" alt="businesss" /></div>`,
              ` The first step of declaring domestic taxes is to download, complete and save the annexures of that tax type.`,
               `To download annexures, hover the mouse over ‘Annexure Downloads’ on the top-right hand side of the E-Tax homepage, and click on the applicable tax type to download the annexures.`,
               ` This will start a download of a spreadsheet file which can be opened in Microsoft Excel or other spreadsheet software.`,
               `The annexures differ depending upon the tax type. For details on a specific tax type, view the relevant chapter of this Tax Handbook.`,
               ` Annexures have an ‘Instructions’ tab and at least one other tab to be completed. Only the tabs that are relevant to the taxpayer in that tax period need to be completed. Each relevant tab must be completed, validated and saved separately. `,
                `<div><img src="/images/rra5.png" alt="businesss" /></div>`,
              ` The first step of declaring domestic taxes is to download, complete and save the annexures of that tax type.`,
                 `To download annexures, hover the mouse over ‘Annexure Downloads’ on the top-right hand side of the E-Tax homepage, and click on the applicable tax type to download the annexures.`,
                 ` This will start a download of a spreadsheet file which can be opened in Microsoft Excel or other spreadsheet software.`,
                 `The annexures differ depending upon the tax type. For details on a specific tax type, view the relevant chapter of this Tax Handbook.`,
                 ` Annexures have an ‘Instructions’ tab and at least one other tab to be completed. Only the tabs that are relevant to the taxpayer in that tax period need to be completed. Each relevant tab must be completed, validated and saved separately. `,
             `<blockquote>
              <strong>  Example </strong>
               <p>   For VAT, the annexure is titled ‘VatAnnexure_1.1.xlsm’. The VAT annexure has six tabs: Instructions, Sales, Purchases, VAT Importation, Deductible VAT Reverse and VAT Retained. </p>
               </blockquote>`,

      ],
    },
  },
];
