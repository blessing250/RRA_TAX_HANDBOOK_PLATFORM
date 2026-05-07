import type { HandbookSection, LocalizedText } from "@/lib/types/handbook"

export const userGuidesPage = {
  slug: "user-guides-and-examples",
  title: {
    en: "User guides and examples",
    fr: "Guides d'utilisation et exemples",
    rw: "Imfashanyigisho n'ingero",
  },
  summary: {
    en: "Find practical guidance, examples, and step-by-step support for common tax processes.",
    fr: "Trouvez des orientations pratiques, des exemples et un accompagnement étape par étape pour les procédures fiscales courantes.",
    rw: "Bona ubuyobozi bufatika, ingero n'ubufasha bw'intambwe ku ntambwe ku bikorwa bisanzwe by'imisoro.",
  },
  lastUpdated: {
    en: "This page was last updated on: 05/03/2026",
    fr: "Cette page a été mise à jour le : 05/03/2026",
    rw: "Iyi paji iherukaga kuvugururwa ku wa: 05/03/2026",
  },
} satisfies {
  lastUpdated: LocalizedText
  slug: string
  summary: LocalizedText
  title: LocalizedText
}

export const userGuideSections: HandbookSection[] = [
  {
    id: "business-registration",
    title: {
      en: "Step-by-step guide to business registration",
      fr: "Guide étape par étape pour l'enregistrement d'une entreprise",
      rw: "Uko kwandikisha ubucuruzi intambwe ku ntambwe",
    },
    content: {
      en: [
        "Access the RDB business registration system at <a href=\"https://brs.rdb.rw/busregonline\">https://brs.rdb.rw/busregonline</a>.",
        "<strong>Step 1: Register on the RDB business registration portal</strong>",
        "New users must create an account by clicking 'Register Here', enter the required personal details and submit. RDB sends an email containing a validation link. After activation, return to the system and log in.",
        "<strong>Step 2: Choose the business category to be registered</strong>",
        "After login, the system asks whether the company already has a Taxpayer Identification Number. If it does not, continue and select the type of business being registered. The 'Name Reservation' option only reserves a name and does not register a business.",
        "<strong>Step 3: Complete the business registration application</strong>",
        "Complete all required tabs for the selected business type. Each major tab has smaller tabs that must be completed before submission. Use the Preview tab to check details before clicking Submit.",
        "After submission, RDB validates the information. If approved, an SMS informs the taxpayer that the application has been sent to RRA to issue a Taxpayer Identification Number. A second SMS confirms business registration after the TIN is issued.",
        "<strong>Step 4: Print certificates</strong>",
        "After confirmation, log back into the RDB Business Registration system, open Certificates, choose the certificate type that matches the application type, download and print it. Also download and print the Memorandum certificate and any other applicable certificate, such as VAT.",
        "If an individual taxpayer does not know their TIN, they may visit RRA offices, call the RRA call centre toll-free on 3004, or use the RRA TIN search by National ID service.",
      ],
    },
  },
  {
    id: "declaring-domestic-taxes",
    title: {
      en: "Step-by-step guide to declaring domestic taxes",
      fr: "Guide étape par étape pour déclarer les impôts domestiques",
      rw: "Uko kumenyekanisha imisoro y'imbere mu gihugu",
    },
    content: {
      en: [
        "<strong>Step 1: Log in to E-Tax</strong>",
        "Access E-Tax at <a href=\"https://etax.rra.gov.rw\">https://etax.rra.gov.rw</a> or through the RRA website by clicking 'Pay Domestic taxes here'. Log in using the TIN and E-Tax password.",
        "If the taxpayer does not know their password, it can be reset by clicking 'Get Password?' on the E-Tax login screen. A new password is sent by SMS and email to the address used during registration.",
        "<strong>Step 2: Download, complete, validate and save annexures</strong>",
        "After logging in, download the annexures for the tax type from Annexure Downloads. The file opens in Microsoft Excel or another spreadsheet tool.",
        "Annexures differ depending on the tax type. Each annexure includes an Instructions tab and at least one tab to complete. Only relevant tabs for the tax period need to be completed, validated and saved.",
        "For VAT, the annexure is titled 'VatAnnexure_1.1.xlsm' and includes tabs such as Instructions, Sales, Purchases, VAT Importation, Deductible VAT Reverse and VAT Retained.",
        "After annexures are completed and validated, the taxpayer continues the declaration process in E-Tax and submits the declaration before paying the amount due.",
      ],
    },
  },
  {
    id: "m-declaration",
    title: {
      en: "Using M-Declaration for Flat Tax, Lump Sum and IQP",
      fr: "Utiliser M-Declaration pour la taxe forfaitaire, le montant forfaitaire et l'IQP",
      rw: "Gukoresha M-Declaration ku musoro wa Flat Tax, Lump Sum na IQP",
    },
    content: {
      en: [
        "M-Declaration is a mobile phone-based system that allows taxpayers to access certain tax services, including income tax declaration, motor vehicle income tax declaration, business income tax declaration, local government tax and fees declaration and some EBM services.",
        "The system is accessed by dialing <strong>*800#</strong>. It uses numbered options that are selected and sent by the taxpayer.",
        "For Flat Tax, Lump Sum and IQP, the taxpayer selects a language, chooses '2. Other Business Activities', and then uses the Domestic Taxes menu.",
        "<strong>Register for M-Declaration</strong>",
        "From the Domestic Taxes menu, select Registration. The taxpayer enters the Taxpayer Identification Number and Rwanda National ID number. PIT taxpayers must use their Rwanda National ID; passports are not currently supported for PIT through M-Declaration.",
        "<strong>Declare income tax</strong>",
        "From the Domestic Taxes menu, select Declaration. The taxpayer must already have registered the TIN with the mobile phone used for declaration.",
        "The taxpayer selects whether they are a new taxpayer, enters the business turnover or total sales for the tax period, and selects the year and quarter being declared. The system calculates the tax to be paid and generates the RRA Reference Number required for payment.",
      ],
    },
  },
  {
    id: "importing-exporting",
    title: {
      en: "Step-by-step guide to importing or exporting",
      fr: "Guide étape par étape pour importer ou exporter",
      rw: "Uko gutumiza cyangwa kohereza ibicuruzwa hanze",
    },
    content: {
      en: [
        "<ol><li>The taxpayer prepares all necessary documents and contracts a Clearing Agent.</li><li>The Clearing Agent prepares and submits an import or export declaration to RRA using the Rwanda electronic Single Window.</li><li>The Clearing Agent receives assessment notices showing customs duties due. The taxpayer pays all customs duties, either directly or through the Clearing Agent. If the assessment notice contains different Doc IDs for different tax types, each must be paid separately.</li><li>The system allocates the consignment to a Customs channel. If verification is required, Customs Officers request documents or access to the consignment.</li><li>After successful verification, the Customs Officer provides a release order.</li><li>The taxpayer pays any due warehousing fees to the warehouse owner, if applicable.</li><li>The taxpayer receives an exit note and may leave with the consignment.</li></ol>",
      ],
    },
  },
  {
    id: "motor-vehicle-ownership-transfer",
    title: {
      en: "Step-by-step guide to motor vehicle ownership transfer",
      fr: "Guide étape par étape pour le transfert de propriété d'un véhicule",
      rw: "Uko guhererekanya uburenganzira ku kinyabiziga",
    },
    content: {
      en: [
        "<strong>Step 1: Online motor vehicle transfer request</strong>",
        "The seller applies for online motor vehicle transfer in E-Tax. If the seller transfers the vehicle to a new owner, they use 'Transfer from Myself to Another Person'. If a new owner acquires the vehicle through auction, succession or court order, the applicant uses 'Transfer to Myself'.",
        "<strong>Step 2: Pay the transfer fee</strong>",
        "The taxpayer pays the transfer fee. The transfer fee is FRW 30,000 for motorcycles and FRW 60,000 for other motor vehicles.",
        "<strong>Step 3: Register the buyer with RRA</strong>",
        "If the buyer does not yet have a Taxpayer Identification Number, they provide RRA staff with a valid National ID or Passport. The TIN and certificate are provided free.",
        "<strong>Step 4: Provide required documents</strong>",
        "The buyer provides all required documents, including documents connected to ownership and payment.",
        "<strong>Step 5: Receive the updated Yellow Card</strong>",
        "If all required documents are valid, RRA staff provide the buyer with the updated Yellow Card containing the buyer's details after receiving the old yellow card and plate number. The buyer is then the legal owner of the motor vehicle.",
      ],
    },
  },
  {
    id: "paying-taxes-after-declaration",
    title: {
      en: "Paying taxes after declaration",
      fr: "Payer les impôts après la déclaration",
      rw: "Kwishyura imisoro nyuma yo kuyimenyekanisha",
    },
    content: {
      en: [
        "After declaring, all types of taxes and fees can be paid online using Internet Banking and E-Payment, on mobile phones or through agents using MTN or Airtel Mobile Money, through Mobicash agents, or in person at a bank.",
        "The benefits of paying online or on mobile phones include paying taxes anytime and anywhere, avoiding travel costs, avoiding queuing time at banks, and avoiding safety risks of carrying cash.",
        "The two main details needed when paying taxes are the RRA Reference Number, also called Doc No, Doc ID or RRA Ref No, and the total amount of tax due.",
        "Both details are found in the acknowledgement receipt generated after submitting a tax declaration.",
      ],
    },
  },
]
