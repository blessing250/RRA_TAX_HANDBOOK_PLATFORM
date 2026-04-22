import Link from "next/link";

import { getHandbookSections, getHomepageContent } from "../../lib/api/handbook";
import { routes } from "../../lib/constants/routes";
import { getHomepageBranchHref } from "../../lib/content/homepageBranches";
import type { HandbookSectionSummary, HomepageContent } from "../../types/handbook";

const fallbackCopy = {
  en: {
    unavailableTitle: "Content unavailable",
    unavailableMessage:
      "The handbook service could not be reached. Verify the backend is running and the public frontend has a valid API base URL.",
    entryPointsLabel: "Handbook entry points",
    openSection: "Open section",
    lastUpdated: "This page was last updated on:",
  },
  rw: {
    unavailableTitle: "Ibirimo ntibibonetse",
    unavailableMessage:
      "Serivisi ya handbook ntibashije kuyigeraho. Reba ko backend iri gukora kandi public frontend ifite API base URL nyayo.",
    entryPointsLabel: "Aho watangirira muri handbook",
    openSection: "Fungura icyiciro",
    lastUpdated: "Iyi paji yaherukaga kuvugururwa ku wa:",
  },
  fr: {
    unavailableTitle: "Contenu indisponible",
    unavailableMessage:
      "Le service du manuel est inaccessible. Verifiez que le backend est en cours d'execution et que le frontend public dispose d'une URL de base API valide.",
    entryPointsLabel: "Points d'entree du manuel",
    openSection: "Ouvrir la section",
    lastUpdated: "Cette page a ete mise a jour le :",
  },
} as const;

function buildSectionTree(sections: HandbookSectionSummary[]) {
  return sections
    .filter((section) => section.parentId === null)
    .map((section) => ({
      ...section,
      children: sections
        .filter((candidate) => candidate.parentId === section.id)
        .sort((a, b) => a.sortOrder - b.sortOrder),
    }))
    .sort((a, b) => a.sortOrder - b.sortOrder);
}

function normalizeLabel(value: string) {
  return value.trim().toLowerCase();
}

function findSectionByNames(
  sections: Array<HandbookSectionSummary & { children: HandbookSectionSummary[] }>,
  names: string[],
) {
  return sections.find((section) => names.includes(normalizeLabel(section.name)));
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const copy = fallbackCopy[locale as keyof typeof fallbackCopy] ?? fallbackCopy.en;
  let homepageContent: HomepageContent | null = null;
  let homeCards: Array<{ key: string; title: string; description: string; href: string }> = [];

  try {
    homepageContent = await getHomepageContent(locale);
    homeCards = homepageContent.cards.map((card) => ({
      key: `${card.sectionId}-${card.slug}`,
      title: card.title,
      description: card.description,
      href: getHomepageBranchHref(locale, card.title, card.slug),
    }));
  } catch {
    try {
      const sections = await getHandbookSections(locale);
      const topLevelSections = buildSectionTree(sections);
      const generalInformationSection = findSectionByNames(topLevelSections, ["general information"]);
      const taxesSection = findSectionByNames(topLevelSections, [
        "taxes administered in rwanda",
        "taxes in rwanda",
      ]);
      const otherServicesSection = findSectionByNames(topLevelSections, ["other services"]);
      const guidesSection = findSectionByNames(topLevelSections, [
        "user guides and examples",
        "guides",
      ]);

      homeCards = [
        {
          key: "general-information",
          title: "General Information",
          description:
            "See the tax handbook introduction, purpose of the tax handbook, history of taxation and other general information.",
          href: generalInformationSection
            ? routes.section(locale, generalInformationSection.slug)
            : `/${locale}/general-information`,
        },
        {
          key: "taxes",
          title: "Taxes administered in Rwanda",
          description:
            "Find information on different taxes, their rates, how to file and pay taxes and non-compliance penalties.",
          href: taxesSection ? routes.section(locale, taxesSection.slug) : `/${locale}/taxes`,
        },
        {
          key: "other-services",
          title: "Other services",
          description:
            "Find information on other tax-related services such VAT Rewards& Refund, Debt Management, Audit, Certificates offered by RRA and Motor Vehicle Services among others.",
          href: otherServicesSection
            ? routes.section(locale, otherServicesSection.slug)
            : `/${locale}/other-services`,
        },
        {
          key: "guides",
          title: "User guides and examples",
          description:
            "Here you will find user guides on filing different taxes and various examples to help your understanding on various tax types.",
          href: guidesSection ? routes.section(locale, guidesSection.slug) : `/${locale}/guides`,
        },
      ];
    } catch {
      homeCards = [];
    }
  }

  return (
    <div className="page-stack">
      {homeCards.length === 0 ? (
        <section className="content-panel home-entry-panel">
          <h2 className="section-h2">{copy.unavailableTitle}</h2>
          <div className="rich-copy">
            <p>{copy.unavailableMessage}</p>
          </div>
        </section>
      ) : (
        <section className="home-grid home-entry-section" aria-label={copy.entryPointsLabel}>
          {homeCards.map((card) => (
            <article key={card.key} className="home-card">
              <Link className="home-card-title-row" href={card.href}>
                <h2 className="home-card-title">{card.title}</h2>
                <span className="home-card-arrow" aria-hidden="true">→</span>
              </Link>
              <p className="home-card-desc">{card.description}</p>
              <Link className="home-card-link" href={card.href}>
                {copy.openSection}
              </Link>
            </article>
          ))}
        </section>
      )}

      {homepageContent?.updatedAt ? (
        <p className="last-updated">
          {copy.lastUpdated}{" "}
          {new Intl.DateTimeFormat("en-GB").format(new Date(homepageContent.updatedAt))}
        </p>
      ) : null}
    </div>
  );
}
