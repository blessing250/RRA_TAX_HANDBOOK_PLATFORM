import { capitalGainsTaxDetail } from "@/lib/content/taxes/central-tax-details/capital-gains-tax"
import { exciseDutyDetail } from "@/lib/content/taxes/central-tax-details/excise-duty"
import { gamingTaxesDetail } from "@/lib/content/taxes/central-tax-details/gaming-taxes"
import { incomeTaxDetail } from "@/lib/content/taxes/central-tax-details/income-tax"
import { miningRoyaltyTaxDetail } from "@/lib/content/taxes/central-tax-details/mining-royalty-tax"
import { payeDetail } from "@/lib/content/taxes/central-tax-details/paye"
import { roadMaintenanceLevyDetail } from "@/lib/content/taxes/central-tax-details/road-maintenance-levy"
import { tourismTaxDetail } from "@/lib/content/taxes/central-tax-details/tourism-tax"
import { vatDetail } from "@/lib/content/taxes/central-tax-details/vat"
import { withholdingTaxesDetail } from "@/lib/content/taxes/central-tax-details/withholding-taxes"
import type { CentralTaxDetailPage } from "@/lib/content/taxes/central-tax-details/shared"

export type { CentralTaxDetailPage } from "@/lib/content/taxes/central-tax-details/shared"

export const centralTaxDetailPages: Record<string, CentralTaxDetailPage> = {
  [incomeTaxDetail.slug]: incomeTaxDetail,
  [payeDetail.slug]: payeDetail,
  [vatDetail.slug]: vatDetail,
  [exciseDutyDetail.slug]: exciseDutyDetail,
  [withholdingTaxesDetail.slug]: withholdingTaxesDetail,
  [gamingTaxesDetail.slug]: gamingTaxesDetail,
  [capitalGainsTaxDetail.slug]: capitalGainsTaxDetail,
  [miningRoyaltyTaxDetail.slug]: miningRoyaltyTaxDetail,
  [roadMaintenanceLevyDetail.slug]: roadMaintenanceLevyDetail,
  [tourismTaxDetail.slug]: tourismTaxDetail,
}

export function getCentralTaxDetailPage(slug: string) {
  return centralTaxDetailPages[slug]
}
