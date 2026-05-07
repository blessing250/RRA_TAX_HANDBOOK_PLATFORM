import { customsTaxSections } from "@/lib/content/taxes/customs-tax-details"
import {
  localTaxLastUpdated,
  type LocalTaxDetailPage,
} from "@/lib/content/taxes/local-tax-details/shared"

export const customsTaxesDetail: LocalTaxDetailPage = {
  slug: "customs-taxes",
  title: {
    en: "Customs Duties",
    fr: "Droits de douane",
    rw: "Amahoro ya gasutamo",
  },
  intro: {
    en: [
      "Customs duties are defined as all taxes, duties, levies and fees that are required to be paid to RRA on imported or exported goods. There is only a nominal processing fee for exports. Customs duties are paid by the importer or exporter of the goods, typically through a Clearing Agent.",
    ],
    fr: [
      "Les droits de douane désignent les taxes, droits, prélèvements et frais qui doivent être payés à la RRA sur les marchandises importées ou exportées. Pour les exportations, seuls des frais de traitement nominaux s'appliquent. Les droits de douane sont généralement payés par l'importateur ou l'exportateur des marchandises, souvent par l'intermédiaire d'un agent en douane.",
    ],
    rw: [
      "Amahoro ya gasutamo ni imisoro, amahoro, levy n'andi mafaranga agomba kwishyurwa RRA ku bicuruzwa bitumizwa mu mahanga cyangwa byoherezwa hanze. Ku bicuruzwa byoherezwa hanze hishyurwa gusa amafaranga make yo gutunganya inyandiko. Amahoro ya gasutamo yishyurwa n'uwatumije cyangwa uwohereje ibicuruzwa, akenshi abinyujije ku mukomisiyoneri wa gasutamo.",
    ],
  },
  sections: customsTaxSections,
  lastUpdated: localTaxLastUpdated,
}
