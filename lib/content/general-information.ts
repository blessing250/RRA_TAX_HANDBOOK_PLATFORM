import type { HandbookTopic } from '@/lib/types/handbook';

export const generalInformation: HandbookTopic = {
  slug: 'general-information',
  category: 'general',
  title: {
    en: 'General Information',
    fr: 'Informations generales',
    rw: 'Amakuru rusange',
  },
  summary: {
    en: 'The RRA Tax Handbook is a simplified guide for taxpayers to understand the tax laws and procedures for all tax types in Rwanda.',
  },
  sections: [
    {
      id: 'introduction',
      title: {
        en: 'Introduction',
        fr: 'Introduction',
        rw: 'Intangiriro',
      },
      content: {
        en: [
          `<blockquote>"We cannot rely on foreign aid forever. We are a population of 13.2 million people and those paying taxes are doing a good thing; however, if the national budget is to be fully supported by Rwandans, then we must carry on sensitizing people on their role of contributing to the country's development.</blockquote>`,
          `<blockquote>"If we work hard and ensure that our budget is fully funded by domestic resources, then we shall have only one master - our people." -  His Excellency Paul Kagame, President of Rwanda speaking at the 2013 Taxpayers Appreciation Day. </blockquote>`,
          `The task ahead is to sustain and raise this growth, and use our resources productively. We cannot count on anyone else to finance our development and well-being. Our most important asset as a nation is our capable young people. It is your task, as young Rwandans, to sustain what we have built, and take it further." - New Year 2026 Message by President Kagame | Kigali, 31 December 2025.`,
        ],
      },
    },
    {
      id: 'purpose-of-this-tax-handbook',
      title: {
        en: 'Purpose of this tax handbook',
        fr: 'Objectif de ce guide fiscal',
        rw: "Intego y'iki gitabo cy'imisoro",
      },
      content: {
        en: [
          'The RRA Tax Handbook is a simplified guide for taxpayers to understand the tax laws and procedures for all tax types in Rwanda. It covers how to register, declare and pay each of the domestic taxes, Local Government Taxes (LGT) and fees, and customs duties.',
          'This Tax Handbook will be updated periodically. If there are any tax policy or administration changes in the interim, RRA uses the media, the RRA website and seminars to try and reach all taxpayers and ensure they are made aware of the new policies and procedures. In addition, an updated Tax Handbook is always available on the RRA website.',
          'However, it is important to note that this Tax Handbook is intended for the purpose of guidance only. It does not override the tax laws, and in the case of any uncertainty, please refer to these laws, ministerial orders and rulings available on the <a href="https://www.rra.gov.rw/en/laws-policies-and-rulings">RRA website</a>.',
         ` Taxes are the mandatory contribution from citizens to a government in order to fund public expenditures.`,
          `Since 1997, Rwanda Revenue Authority (RRA) has been legally mandated by the Government of Rwanda with the task of assessing, collecting and accounting for taxes, customs duties, local government taxes and fees and non-tax revenues.`,
          `RRA’s vision is “to be a model revenue administration optimally financing national needs” and RRA’s mission statement is to “efficiently mobilise revenue and facilitate trade through transparent and innovative services to drive economic growth.”`,
        ],
      },
    },
    {
      id: 'foreword-by-the-commissioner-general',
      title: {
        en: 'Foreword by the Commissioner General',
        fr: 'Avant-propos du Commissaire General',
        rw: "Ijambo ry'ibanze rya Komiseri Mukuru",
      },
      content: {
        en: [
       ` It gives me great pleasure to present to you the 2nd edition of the Rwanda Revenue Authority (RRA) Tax Handbook. This Tax Handbook is a very important demonstration of RRA’s strong commitment to be ‘Here For You, To Serve’. This means that at RRA we are striving to provide the best possible service to you, our taxpayers.`,
       `This Tax Handbook attempts to answer any questions that taxpayers might have about how, when, where, which taxes, what amount and even why they pay taxes. In this printed edition, we include an update on the new tax laws concerning Income, Value Added Tax, sources of revenue and property of decentralized entities, excise duty, automatic exchange of information for tax purposes, and tax procedures. `,
      `This covers all aspects of domestic taxes, local government taxes and fees, and customs duties. This means that all of Rwanda’s tax laws, processes and procedures are summarised in one place for the benefit of all taxpayers.`,
      `Another important aim of this Handbook is to show taxpayers the ease with which they can declare and pay taxes online or on their mobile phones. Simple step-by-step guides to illustrate how to declare taxes using E-Tax, M-Declaration and the Local Government Taxes (LGT) system. `,
      `After declaring, taxes can then easily be paid using systems such as E-Payment, Online Banking, MTN Mobile Money and Mobicash. All of these systems mean that it has never been easier, and never taken less time, to comply with your tax obligations.`,
      `In addition, the sections on general RRA information are very important to show taxpayers the processes by which RRA monitors tax compliance, negotiates payment of unpaid due taxes, allows for fair hearings and penalises non-compliance.`,
      `Finally, the ultimate aim of this Tax Handbook is to help taxpayers. We want taxpayers to fully understand their tax obligations. We want taxpayers to know that RRA is working for them. We want taxpayers to tell their friends, suppliers, customers and competitors that paying their taxes has never been easier and has never been more important in financing the development of our country. `,
      `<strong>NIWENSHUTI Ronald</strong>`,
       `<strong>Commissioner General, Rwanda Revenue Authority</strong>`,
        ],
      },
    },
    {
      id: 'benefits-of-taxes',
      title: {
        en: 'Benefits of Taxes',
        fr: 'Avantages des impots',
        rw: "Akamaro k'imisoro",
      },
      content: {
        en: [
          'Taxes are a vital and hugely beneficial requirement of modern society. Taxes are necessary to pay for public goods and services, which provide benefits to all members of the population. Some of these are more tangible such as:',
          '<ul ><li>- Infrastructure.</li><li>- National security.</li><li>- Education.</li><li>- Healthcare.</li><li>- Access to utilities such as water and electricity.</li></ul>',
          'There are also a range of less tangible benefits that arise from taxes, such as:',
          `<ul class= "tax-benefits"><li><strong> • Good governance</strong> - when citizens are paying taxes, the government is held more responsible for improving public services.</li>
          <li><strong> • Social responsibility</strong> - citizens are more likely to protect those public services and can be proud of contributing to Rwanda\'s development.</li>
          <li><strong> • Self-reliance</strong> - tax revenues are the backbone of national self-reliance, reducing the country\'s dependency on unpredictable foreign aid and donors.</li></ul>`,
        ],
      },
    },
    {
      id: 'principles-of-taxation',
      title: {
        en: 'Principles of Taxation',
        fr: "Principes de l'imposition",
        rw: "Amahame y'imisoro",
      },
      content: {
        en: [
          'There are four key principles of good taxation systems, which RRA strives to attain and uphold:',
          `<ul><li><strong> • Equity</strong> - taxes are fair such that the tax system does not discriminate between taxpayers, but that those with higher incomes, and who are more able to, pay a higher proportion of taxes. </li>
          <li><strong> • Certainty</strong> - taxpayers should know how much, when, where, how and why they have to pay. This increases trust and enables taxpayers to manage income and expenditure.</li>
          <li><strong> • Convenience</strong> - tax authorities should make every effort to reduce the difficulties of paying taxes, taking into account locations, methods and times of declaration and payment.</li>
          <li><strong> • Economy</strong> - tax authorities should try to minimise the administrative costs of collecting taxes to ensure the greatest benefits to government and taxpayers.</li></ul>`,
        ],
      },
    },
    {
      id: 'history-of-taxes-in-rwanda',
      title: {
        en: 'History of Taxes in Rwanda',
        fr: 'Histoire des impots au Rwanda',
        rw: "Amateka y'imisoro mu Rwanda",
      },
      content: {
        en: [
         ` The formal, monetary tax system in Rwanda has been in effect for more than one hundred years, when the first property tax was implemented in August 1912. This was joined by a profit tax established in June 1925.`,
         `After independence, taxes were formally inducted into Rwandan law in the June 1964 law on profit tax, and the July 1968 law on customs and excise duties.`,
         `Up to this point, administration of taxes had been carried out by the Ministry of Finance and Economic Planning (MINECOFIN).`,
         ` However, after the Genocide against the Tutsi in 1994, the ambitious new government identified the benefits of improved tax administration to a growing economy, leading to the creation of the semi-autonomous Rwanda Revenue Authority (RRA) in November 1997.`,
        ],
      },
    },
    {
      id: 'rra-modernisation-and-reforms',
      title: {
        en: 'RRA Modernisation and Reforms',
        fr: 'Modernisation et reformes de la RRA',
        rw: "Ivugurura n'iterambere rya RRA",
      },
      content: {
        en: [
        `Since its creation, RRA has implemented a wide range of reforms, and the Government of Rwanda has introduced new tax types, to bring Rwandan tax policy and administration in line with 21st century best practices. The introduction of Value Added Tax (VAT) in 2001 and the introduction of the E-Tax system in 2012 are two notable examples of this dedication to improve and modernise revenue collections.`,
        `A further milestone was reached in 2009 when Rwanda joined the East African Community (EAC) customs union. Allowing duty free trade within the EAC, and a common external tariff with trade from outside the EAC, has benefited Rwanda greatly through the increase in trade, regional integration and larger export markets. RRA continues to facilitate trade through Northern and Central Corridor Integration projects, one-stop border posts, Rwanda electronic Single Window (ReSW) system, Authorised Economic Operator (AEO) and the Rwanda electronic Cargo Tracking System (ReCTS) amongst other initiatives.`,
        `To further consolidate the goals of the Customs Union and to address the challenges experienced, the Summit of Heads of State decided on the implementation of the Single Customs Territory which commenced in July 2014. This was a major milestone and final stage towards the attainment of a fully fledged Customs Union. Under SCT assessment and payment of duties is done at the destination Partner State while goods are still at the first point of entry.`,
        `The Single Customs Territory has been implemented to facilitate faster clearance and improvement in cargo movement along the two corridors (Northern and Central) and the now Standard Gauge Railway line.`,
         `The AfCFTA entered into force on May 30, 2019, after 24 Member States deposited their Instruments of Ratification following a series of continuous continental engagements spanning since 2012. It was launched at the 12th Extraordinary Session of the AU Assembly of Heads of State and Government in Niamey – Niger, in July 2019.`,
          `The commencement of trading under the AfCFTA was on January 1, 2021. RRA’s focus on facilitating taxpayers for voluntary tax compliance has been highlighted in the launch of the “Here For You, To Serve” campaign in 2016. The focus of the campaign is a promise to serve taxpayers in a friendly, helpful and professional manner. The long-term intention of RRA is to increase revenue collections through reducing the costs of compliance and making it as easy as possible to declare and pay taxes. This Tax Handbook is intended to support this “Here For You, To Serve” promise and further promote voluntary tax compliance.`,

        ],
      },
    },
    {
      id: 'rra-structure',
      title: {
        en: 'RRA Structure',
        fr: 'Structure de la RRA',
        rw: 'Imiterere ya RRA',
      },
      content: {
        en: [
          'RRA is a semi-autonomous revenue authority accountable to the Ministry of Finance and Economic Planning (MINECOFIN). RRA collects tax revenues on behalf of the Government of Rwanda. RRA is also responsible for advising the Government of Rwanda on matters relating to tax policy and revenue collections.',
          'The RRA is governed by a Board of Directors under a Board Chairperson who is appointed by the Cabinet. The Board is responsible for the formulation and monitoring the implementation of the corporate strategy of RRA.',
          'The Commissioner General is the head of the authority and is responsible for its daily management. The Deputy Commissioner General assists the Commissioner General in his everyday duties and coordinates activities of all support departments. Read more about the Authority’s profile here:<a href="https://www.rra.gov.rw/en/about-us/rra-profile" target="_blank">RRA Profile</a>.',
        ],
      },
    },
    {
      id: 'rra-service-charter',
      title: {
        en: 'RRA Service Charter',
        fr: 'Charte de service de la RRA',
        rw: 'Amasezerano ya serivisi ya RRA',
      },
      content: {
        en: [
        ` The RRA Service Charter contains details on taxpayers’ rights and obligations, as well as the range of services offered by RRA. Some of these services, such as issuance of tax clearance certificates or motor vehicle number plates, charge a cost. The RRA Service Charter contains the requirements, timelines and costs of each of these services. To view the RRA Service Charter, visit the ‘Publication’ section of the RRA <a href="https://www.rra.gov.rw/en/rra-service-charter-iv" target="_blank">RRA website</a>.`,
        ],
      },
    },
    {
      id: 'definitions',
      title: {
        en: 'Definitions',
        fr: 'Definitions',
        rw: 'Ibisobanuro',
      },
      content: {
        en: [
          `<ul><li><strong>Taxpayer</strong> - any individual, legal entity such as a company, organisation or institution, or association of individuals such as a cooperative, that is subjected to tax according to Rwandan tax laws. Each taxpayer must have a TIN.</li>
          <li><strong>TIN</strong> – ‘TIN’ refers to the Taxpayer Identification Number. This is a unique reference number to be used in all interactions with RRA. No taxpayer should ever have more than one TIN for the same business.</li>
          <li><strong>Registration</strong> – There are two types of ‘registration’ concerning RRA. Firstly, taxpayers must register their business, or register as an individual, and receive their unique Taxpayer Identification Number (TIN). Secondly, taxpayers must also register for each relevant tax type, as soon as they fulfil the requirements for that tax type.</li>
          <li><strong>Declaration</strong>– Taxpayers must submit a tax ‘declaration’ each tax period for each tax type for which they are registered. Declaring is also referred to as ‘tax filing’. The tax declaration contains all the information, including annexures and declaration forms, required by RRA to determine the amount of tax due for that tax period.</li>
          <li><strong>Payment</strong> – After submitting a tax declaration, the taxpayer must then pay any tax due to the correct RRA account. The RRA reference number received after declaring ensures each payment is to the correct account.</li>
          <li><strong>Tax period</strong>– The ‘tax period’ refers to the period of time that the declaration refers to, which varies by tax type. The declaration concerns the taxable activities during the tax period. Note that the tax period is often not the same as the deadline or the date at the time of declaration.</li>
          <li><strong>Deadline</strong> – The deadline refers to the date that tax declarations and payments must be submitted in order to avoid penalties and fines. Taxes can be declared and paid at any time between the end of the tax period and the deadline. This is referred to as the ‘filing period’. Transaction – A ‘transaction’ refers to any payment or exchange of goods or services being bought or sold.</li>
          <li><strong>Annexures</strong> – During the declaration process, many tax types require additional information to be submitted in ‘annexures’. Typically, annexures are spreadsheets, with separate ‘tabs’ for different aspects, and are completed for every relevant transaction during the tax period.</li>
          <li><strong>Declaration Form</strong> – During the declaration process, each tax type also requires the key information to be submitted in a ‘declaration form’. This requires the total of all relevant transactions during the tax period.</li><li><strong>Turnover</strong> – ‘Turnover’ refers to the total value of sales made by a taxpayer in a tax period. This may also be referred to as revenue, business income or total sales. Note that turnover is not the same as profit, as profit takes into account the taxpayer’s business costs.</li>
          <li><strong>Compliance</strong> – ‘Compliance’ refers to the extent to which taxpayers fulfil all their tax obligations, including registering, declaring accurately and paying taxes on time. Businesses or individuals that are ‘non-compliant’ may face penalties, fines and other enforcement measures. </li>
          <li><strong>Arrears</strong> – ‘Arrears’ refers to any amount owed by taxpayers to RRA. This includes any unpaid taxes after the deadline, and unpaid penalties, fines and interests.</li><li><strong>Refunds</strong>  – ‘Refunds’ refers to any amount of VAT owed by RRA to taxpayers. These are also referred to as ‘tax credits’ for other tax types. ‘Refunds’ can be received by taxpayers in the form of ‘cash’ while tax credits in the form of ‘credit notes’ that can be deducted against future taxes, or cash.</li>
          <li><strong>Consignment</strong>  – A ‘consignment’ refers to any group of goods that is declared together when importing or exporting. Typically, this refers to the ‘container load’ or ‘truck load’ that is being transported together.</li>
          <li><strong>FRW</strong> - Rwandan Francs, the currency of Rwanda and the currency in which declarations and payments must be made unless otherwise specified.</li></ul>`,
        ],
      },
    },
    {
      id: 'acronyms',
      title: {
        en: 'Acronyms',
        fr: 'Acronymes',
        rw: 'Impine',
      },
      content: {
        en: [
          `AEO: Authorised Economic Operator`,
          `AEOI: Automatic Exchange of Information`,
          `AfCFTA: African Continental Free Trade Area`,
          `AUL: African Union Levy`,
          `BDF: Business Development Fund`,
          `BNR: National Bank of Rwanda`,
          `BRD: Development Bank of Rwanda`,
          `CBHI: Community Based Health Insurance`,
          `CD: Corps Diplomatic`,
          `CET: Common External Tariff`,
          `CG: Commissioner General`,
          `CIF: Cost, Insurance and Freight`,
          `CIT: Corporate Income Tax`,
          `CMA: Customs Management Act`,
          `COMESA: Common Market of Eastern and Southern Africa`,
          `CRS: Common Reporting Standard`,
          `CSD: Customs Services Department`,
          `DAD: Dédouanement à Domicile`,
          `DC: Deputy Commissioner`,
          `DCG: Deputy Commissioner General`,
          `DMC: Déclaration de Mise à la Consommation`,
          `DPW: Dubai Port World`,
          `DRC: Democratic Republic of Congo`,
          `DTD: Domestic Taxes Department`,
          `EAC: East African Community`,
          `EBM: Electronic Billing Machine`,
          `EIS: Electronic Invoicing System`,
          `EO: Executive Organ`,
          `EOI: Exchange of Information`,
          `EOIR: Exchange of Information on Request`,
          `FER: Fonds d’Entretien Routier`,
          `FOB: Free On Board`,
          `FRW: Franc Rwandais`,
          `HF: Handling Fee`,
          `IDL: Infrastructure Development Levy`,
          `IGO: Inter-Governmental Organisation`,
          `IQP: Instalment Quarterly Payment`,
          `IT: Immatriculation Temporaire`,
          `LGT: Local Government Taxes`,
          `MINAFFET: Ministry of Foreign Affairs, Cooperation and East African Community`,
          `MINECOFIN: Ministry of Finance and Economic Planning`,
          `MINICOM: Ministry of Trade and Industry`,
          `MININFRA: Ministry of Infrastructure`,
          `MINIRENA: Ministry of Natural Resources`,
          `MSIC: Millennium Savings & Investment Cooperative`,
          `MTN: Mobile Telephone Networks`,
          `MVF: Motor Vehicle Registration Fee`,
          `NGO: Non-Governmental Organisation`,
          `NID: National Identification`,
          `NISR: National Institute of Statistics Rwanda`,
          `OECD: Organisation for Economic Co-operation and Development`,
          `ORG: Office of the Registrar General`,
          `OS: Operating System`,
          `OSBP: One-Stop Border Post`,
          `PAYE: Pay As You Earn`,
          `PCA: Post-Clearance Audit`,
          `PIT: Personal Income Tax`,
          `PSF: Private Sector Federation`,
          `QIF: Quality Inspection Fee`,
          `RAMA: Rwandaise d’Assurance Maladie`,
          `RCA: Rwanda Cooperatives Authority`,
          `RDB: Rwanda Development Board`,
          `RECTS: Rwanda Electronic Cargo Tracking System`,
          `ReSW: Rwanda electronic Single Window`,
          `RGB: Rwanda Governance Board`,
          `RICA: Rwanda Inspectorate, Competition and Consumer Protection Authority`,
          `RIED: Revenue Investigation and Enforcement Dept`,
          `RMB: Rwanda Mines, Petroleum and Gas Board`,
          `RMF: Road Maintenance Fund`,
          `RRA: Rwanda Revenue Authority`,
          `RSSB: Rwanda Social Security Board`,
          `SMS: Short Message Service`,
          `SRL: Strategic Reserves Levy`,
          `TCC: Tax Clearance Certificates`,
          `TIN: Taxpayer Identification Number`,
          `TP: Transfer Pricing`,
          `UN: United Nations`,
          `USD: United States Dollars`,
          `USSD: Unstructured Supplementary Service Data`,
          `VAT: Value Added Tax`,
          `VDS: Voluntary Disclosure Scheme`,
          `VSDC: Virtual Sales Data Controller`,
          `WHT: Withholding Tax`,
          `WOP: Withholding on Payments`

        ],
      },
    },
  ],
};
