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
          '<blockquote>"We cannot rely on foreign aid forever. We are a population of 13.2 million people and those paying taxes are doing a good thing; however, if the national budget is to be fully supported by Rwandans, then we must carry on sensitizing people on their role of contributing to the country\'s development."</blockquote>',
          '<blockquote>"If we work hard and ensure that our budget is fully funded by domestic resources, then we shall have only one master - our people."</blockquote>',
          'His Excellency Paul Kagame, President of Rwanda, speaking at the 2013 Taxpayers Appreciation Day.',
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
          'This Tax Handbook will be updated periodically. If there are any tax policy or administration changes in the interim, RRA uses the media, the RRA website and seminars to reach taxpayers and ensure they are aware of the new policies and procedures.',
          'However, it is important to note that this Tax Handbook is intended for guidance only. It does not override tax laws. In the case of any uncertainty, please refer to laws, ministerial orders and rulings available on the <a href="https://www.rra.gov.rw/en/laws-policies-and-rulings">RRA website</a>.',
          'Taxes are the mandatory contribution from citizens to a government in order to fund public expenditures.',
          'Since 1997, Rwanda Revenue Authority (RRA) has been legally mandated by the Government of Rwanda with the task of assessing, collecting and accounting for taxes, customs duties, local government taxes and fees and non-tax revenues.',
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
          "It gives me great pleasure to present to you the 2nd edition of the Rwanda Revenue Authority (RRA) Tax Handbook. This Tax Handbook is a very important demonstration of RRA's strong commitment to be 'Here For You, To Serve'. This means that at RRA we are striving to provide the best possible service to you, our taxpayers.",
          'This Tax Handbook attempts to answer questions that taxpayers might have about how, when, where, which taxes, what amount and why they pay taxes. In this printed edition, we include an update on the new tax laws concerning Income, Value Added Tax, sources of revenue and property of decentralized entities, excise duty, automatic exchange of information for tax purposes, and tax procedures.',
          "This covers all aspects of domestic taxes, local government taxes and fees, and customs duties. This means that all of Rwanda's tax laws, processes and procedures are summarised in one place for the benefit of all taxpayers.",
          'Another important aim of this Handbook is to show taxpayers the ease with which they can declare and pay taxes online or on their mobile phones. Simple step-by-step guides illustrate how to declare taxes using E-Tax, M-Declaration and the Local Government Taxes (LGT) system.',
          'After declaring, taxes can easily be paid using systems such as E-Payment, Online Banking, MTN Mobile Money and Mobicash. All of these systems mean that it has never been easier, and never taken less time, to comply with tax obligations.',
          'In addition, the sections on general RRA information are very important to show taxpayers the processes by which RRA monitors tax compliance, negotiates payment of unpaid due taxes, allows for fair hearings and penalises non-compliance.',
          'Finally, the ultimate aim of this Tax Handbook is to help taxpayers. We want taxpayers to fully understand their tax obligations. We want taxpayers to know that RRA is working for them. We want taxpayers to tell their friends, suppliers, customers and competitors that paying their taxes has never been easier and has never been more important in financing the development of our country.',
          '<strong>NIWENSHUTI Ronald</strong>',
          '<strong>Commissioner General, Rwanda Revenue Authority</strong>',
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
          'Taxes are a vital and hugely beneficial requirement of modern society. Taxes are necessary to pay for public goods and services, which provide benefits to all members of the population.',
          '<strong>Some tangible benefits include:</strong>',
          '<ul><li>Infrastructure.</li><li>National security.</li><li>Education.</li><li>Healthcare.</li><li>Access to utilities such as water and electricity.</li></ul>',
          '<strong>Less tangible benefits include:</strong>',
          '<ul><li><strong>Good governance</strong> - when citizens are paying taxes, the government is held more responsible for improving public services.</li><li><strong>Social responsibility</strong> - citizens are more likely to protect those public services and can be proud of contributing to Rwanda\'s development.</li><li><strong>Self-reliance</strong> - tax revenues are the backbone of national self-reliance, reducing the country\'s dependency on unpredictable foreign aid and donors.</li></ul>',
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
          '<ul><li><strong>Equity</strong> - taxes are fair such that the tax system does not discriminate between taxpayers, but those with higher incomes and greater ability to pay contribute a higher proportion of taxes.</li><li><strong>Certainty</strong> - taxpayers should know how much, when, where, how and why they have to pay. This increases trust and enables taxpayers to manage income and expenditure.</li><li><strong>Convenience</strong> - tax authorities should make every effort to reduce the difficulties of paying taxes, taking into account locations, methods and times of declaration and payment.</li><li><strong>Economy</strong> - tax authorities should try to minimise the administrative costs of collecting taxes to ensure the greatest benefits to government and taxpayers.</li></ul>',
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
          'The formal, monetary tax system in Rwanda has been in effect for more than one hundred years, when the first property tax was implemented in August 1912. This was joined by a profit tax established in June 1925.',
          'After independence, taxes were formally inducted into Rwandan law in the June 1964 law on profit tax, and the July 1968 law on customs and excise duties.',
          'Up to this point, administration of taxes had been carried out by the Ministry of Finance and Economic Planning (MINECOFIN). However, after the Genocide against the Tutsi in 1994, the ambitious new government identified the benefits of improved tax administration to a growing economy, leading to the creation of the semi-autonomous Rwanda Revenue Authority (RRA) in November 1997.',
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
          'Since its creation, RRA has implemented a wide range of reforms, and the Government of Rwanda has introduced new tax types, to bring Rwandan tax policy and administration in line with 21st century best practices. The introduction of Value Added Tax (VAT) in 2001 and the introduction of the E-Tax system in 2012 are two notable examples.',
          'A further milestone was reached in 2009 when Rwanda joined the East African Community (EAC) Customs Union. Duty free trade within the EAC and a common external tariff with trade from outside the EAC have benefited Rwanda through increased trade, regional integration and larger export markets.',
          'RRA continues to facilitate trade through Northern and Central Corridor Integration projects, one-stop border posts, Rwanda electronic Single Window (ReSW) system, Authorised Economic Operator (AEO) and the Rwanda electronic Cargo Tracking System (ReCTS), among other initiatives.',
          'To further consolidate the goals of the Customs Union and address challenges experienced, the Summit of Heads of State decided on implementation of the Single Customs Territory, which commenced in July 2014. Under SCT, assessment and payment of duties is done at the destination Partner State while goods are still at the first point of entry.',
          'The Single Customs Territory has been implemented to facilitate faster clearance and improvement in cargo movement along the Northern and Central corridors.',
          'The African Continental Free Trade Area (AfCFTA) entered into force on May 30, 2019 and trading commenced on January 1, 2021.',
          "RRA's focus on facilitating taxpayers for voluntary tax compliance has been highlighted in the launch of the 'Here For You, To Serve' campaign in 2016. The long-term intention of RRA is to increase revenue collections by reducing compliance costs and making it as easy as possible to declare and pay taxes.",
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
          'RRA is a semi-autonomous revenue authority accountable to the Ministry of Finance and Economic Planning (MINECOFIN). RRA collects tax revenues on behalf of the Government of Rwanda and advises the Government of Rwanda on matters relating to tax policy and revenue collections.',
          'RRA is governed by a Board of Directors under a Board Chairperson appointed by Cabinet. The Board is responsible for formulating and monitoring implementation of the corporate strategy of RRA.',
          'The Commissioner General is the head of the authority and is responsible for its daily management. The Deputy Commissioner General assists the Commissioner General in daily duties and coordinates activities of all support departments. Read more about the Authority profile here: <a href="https://www.rra.gov.rw/en/about-us/rra-profile" target="_blank">RRA Profile</a>.',
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
          "The RRA Service Charter contains details on taxpayers' rights and obligations, as well as the range of services offered by RRA. Some services, such as issuance of tax clearance certificates or motor vehicle number plates, charge a cost.",
          'The RRA Service Charter contains the requirements, timelines and costs of each service. To view the RRA Service Charter, visit the Publication section of the <a href="https://www.rra.gov.rw/en/rra-service-charter-iv" target="_blank">RRA website</a>.',
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
          '<ul><li><strong>Taxpayer</strong> - any individual, legal entity such as a company, organisation or institution, or association of individuals such as a cooperative, that is subjected to tax according to Rwandan tax laws. Each taxpayer must have a TIN.</li><li><strong>TIN</strong> - Taxpayer Identification Number. This is a unique reference number used in all interactions with RRA. No taxpayer should ever have more than one TIN for the same business.</li><li><strong>Registration</strong> - taxpayers must register their business, or register as an individual, and receive a Taxpayer Identification Number. Taxpayers must also register for each relevant tax type as soon as they fulfil the requirements for that tax type.</li><li><strong>Declaration</strong> - taxpayers must submit a tax declaration each tax period for each tax type for which they are registered. Declaring is also referred to as tax filing.</li><li><strong>Payment</strong> - after submitting a tax declaration, the taxpayer must pay any tax due to the correct RRA account. The RRA reference number received after declaring ensures each payment is made to the correct account.</li><li><strong>Tax period</strong> - the period of time that the declaration refers to, which varies by tax type. The declaration concerns taxable activities during the tax period.</li><li><strong>Deadline</strong> - the date that tax declarations and payments must be submitted in order to avoid penalties and fines.</li><li><strong>Annexures</strong> - additional information submitted during the declaration process, often as spreadsheets with separate tabs for different aspects.</li><li><strong>Declaration Form</strong> - the form used to submit key information and totals for relevant transactions during the tax period.</li><li><strong>Turnover</strong> - the total value of sales made by a taxpayer in a tax period. It may also be referred to as revenue, business income or total sales.</li><li><strong>Compliance</strong> - the extent to which taxpayers fulfil all tax obligations, including registering, declaring accurately and paying taxes on time.</li><li><strong>Arrears</strong> - any amount owed by taxpayers to RRA, including unpaid taxes, penalties, fines and interest.</li><li><strong>Refunds</strong> - any amount of VAT owed by RRA to taxpayers. These may also be referred to as tax credits for other tax types.</li><li><strong>Consignment</strong> - any group of goods declared together when importing or exporting, typically a container load or truck load transported together.</li><li><strong>FRW</strong> - Rwandan Francs, the currency of Rwanda and the currency in which declarations and payments must be made unless otherwise specified.</li></ul>',
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
          'AEO: Authorised Economic Operator',
          'AEOI: Automatic Exchange of Information',
          'AfCFTA: African Continental Free Trade Area',
          'AUL: African Union Levy',
          'BDF: Business Development Fund',
          'BNR: National Bank of Rwanda',
          'BRD: Development Bank of Rwanda',
          'CBHI: Community Based Health Insurance',
          'CD: Corps Diplomatic',
          'CET: Common External Tariff',
          'CG: Commissioner General',
          'CIF: Cost, Insurance and Freight',
          'CIT: Corporate Income Tax',
          'CMA: Customs Management Act',
          'COMESA: Common Market of Eastern and Southern Africa',
          'CRS: Common Reporting Standard',
          'CSD: Customs Services Department',
          'DAD: Dedouanement a Domicile',
          'DC: Deputy Commissioner',
          'DCG: Deputy Commissioner General',
          'DMC: Declaration de Mise a la Consommation',
          'DPW: Dubai Port World',
          'DRC: Democratic Republic of Congo',
          'DTD: Domestic Taxes Department',
          'EAC: East African Community',
          'EBM: Electronic Billing Machine',
          'EIS: Electronic Invoicing System',
          'EOI: Exchange of Information',
          'EOIR: Exchange of Information on Request',
          'FER: Fonds d Entretien Routier',
          'FOB: Free On Board',
          'FRW: Franc Rwandais',
          'HF: Handling Fee',
          'IDL: Infrastructure Development Levy',
          'IQP: Instalment Quarterly Payment',
          'IT: Immatriculation Temporaire',
          'LGT: Local Government Taxes',
          'MINAFFET: Ministry of Foreign Affairs, Cooperation and East African Community',
          'MINECOFIN: Ministry of Finance and Economic Planning',
          'MINICOM: Ministry of Trade and Industry',
          'MININFRA: Ministry of Infrastructure',
          'MVF: Motor Vehicle Registration Fee',
          'NID: National Identification',
          'NISR: National Institute of Statistics Rwanda',
          'OECD: Organisation for Economic Co-operation and Development',
          'OSBP: One-Stop Border Post',
          'PAYE: Pay As You Earn',
          'PCA: Post-Clearance Audit',
          'PIT: Personal Income Tax',
          'QIF: Quality Inspection Fee',
          'RDB: Rwanda Development Board',
          'RECTS: Rwanda Electronic Cargo Tracking System',
          'ReSW: Rwanda electronic Single Window',
          'RICA: Rwanda Inspectorate, Competition and Consumer Protection Authority',
          'RMB: Rwanda Mines, Petroleum and Gas Board',
          'RMF: Road Maintenance Fund',
          'RRA: Rwanda Revenue Authority',
          'RSSB: Rwanda Social Security Board',
          'SRL: Strategic Reserves Levy',
          'TCC: Tax Clearance Certificates',
          'TIN: Taxpayer Identification Number',
          'UN: United Nations',
          'USD: United States Dollars',
          'USSD: Unstructured Supplementary Service Data',
          'VAT: Value Added Tax',
          'WHT: Withholding Tax',
        ],
      },
    },
  ],
};
