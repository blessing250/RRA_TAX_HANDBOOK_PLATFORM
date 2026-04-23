import { SectionLandingPage } from "../../../components/handbook/SectionLandingPage";

function getAboutSectionSlug(locale: string) {
  if (locale === "fr") return "a-propos";
  if (locale === "rw") return "ibyerekeye-rra";
  return "about";
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return <SectionLandingPage locale={locale} slug={getAboutSectionSlug(locale)} />;
}
