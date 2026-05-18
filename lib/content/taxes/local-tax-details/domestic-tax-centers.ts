import {
  localTaxLastUpdated,
  type LocalTaxDetailPage,
} from "@/lib/content/taxes/local-tax-details/shared"

export const domesticTaxCentersDetail: LocalTaxDetailPage = {
  slug: "domestic-tax-centers",
  title: {
    en: "Domestic Tax Centers",
    fr: "Centres des impots domestiques",
    rw: "Ibigo by'imisoro y'imbere mu gihugu",
  },
  intro: {
    en: [
       `Domestic Tax Centres can be used to register and declare both domestic taxes and local government taxes and fees. In addition, domestic tax offices are available to help with a wide range of issues facing taxpayers.`,
               ` There is at least one Domestic Tax Centre in every District. The opening hours of each domestic tax centre is 09:00 to 17:00 on Monday to Friday, excluding national holidays.`,
               `The contact details of Domestic Tax Centres are listed by province below:`,
        
    ],
  },
  sections: [
    {
      id: "city-of-kigali",
      title: { en: "City of Kigali", fr: "Ville de Kigali", rw: "Umujyi wa Kigali" },
      content: {
        en: [
          {
            type: "table",
            headers: ["District", "Contact"],
            rows: [
              ["RRA Headquarters",  "078818 5516"],
              ["Gasabo", "078818 5784 "],
              ["Kicukiro ",  "078818 5579"],
              [" Nyarugenge",  " 078818 5515"],
            ],
          },
        ],
      },
    },
    {
      id: "eastern-province",
      title: { en: "Eastern Province", fr: "Province de l'Est", rw: "Intara y'Iburasirazuba" },
      content: {
        en: [
          {
            type: "table",
            headers: ["District", "Contact"],
            rows: [
             [" Bugesera", 	"078818 5781"],
             ["  Gatsibo",  "  078818 5606"],
             [ "  Kayonza",   "078818 5806"],
              [" Kirehe ",    " 078818 5805"],
             [ "  Ngoma",      "078818 5821"],
             [ "  Nyagatare",  " 078818 5542"],
             [  " Rwamagana ",  " 078818 5569"],

            ],
          },
        ],
      },
    },
    {
      id: "southern-province",
      title: { en: "Southern Province", fr: "Province du Sud", rw: "Intara y'Amajyepfo" },
      content: {
        en: [
           {
            type: "table",
            headers: ["District", "Contact"],
            rows: [
                ["Gisagara",    "078818 5815" ],
                [" Huye ",      " 078818 5604"],
               ["  Kamonyi",   " 078818 5810" ],
               ["  Nyamagabe",  " 078818 5533"],
               [" Nyanza",       " 078818 5536" ],
               ["  Nyaruguru ",   " 078818 5666"],
               ["  Ruhango",    "  078818 5535" ],
            ],
          },
        ],
      },
    },
    {
      id: "western-province",
      title: { en: "Western Province", fr: "Province de l'Ouest", rw: "Intara y'Iburengerazuba" },
      content: {
        en: [
                {
            type: "table",
            headers: ["District", "Contact"],
            rows: [
          [" Karongi",     " 078818 5532"],
        [" Ngororero ",   " 078818 5811"],
        [" Nyabihu ",     " 078818 5838"],
       ["  Nyamasheke",   " 078818 5549"],
       [" Rubavu",        " 078818 5629 "],   
       [ " Rusizi ",      " 078818 5537"],
       ["  Rutsiro",      " 078818 5813"],


            ],
          },
        ],
      },
    },
    {
      id: "northern-province",
      title: { en: "Northern Province", fr: "Province du Nord", rw: "Intara y'Amajyaruguru" },
      content: {
        en: [
           {
            type: "table",
            headers: ["District", "Contact"],
            rows: [
                  ["  Burera",            "   078818 5812"],
                   [ " Gakenke",           "   078818 5808"],
                   [ "   Gicumbi",          "  078818 5568"],
                   ["   Musanze ",           "  078818 5628"],
                   [ "   Rulindo ",          "   078818 5832"],


            ],
          },
        ],
      },
    },
  ],
  lastUpdated: localTaxLastUpdated,
}
