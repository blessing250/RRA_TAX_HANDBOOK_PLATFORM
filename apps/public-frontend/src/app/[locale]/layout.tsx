import Link from 'next/link';
import { notFound } from 'next/navigation';

import { LanguageSwitcher } from '../../components/common/LanguageSwitcher';
import { routing } from '../../lib/i18n/routing';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const currentYear = new Date().getFullYear();

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="util-bar" aria-label="Language and search">
          <LanguageSwitcher locale={locale} />
          <Link className="util-button" href={`/${locale}/search`}>
            Search
          </Link>
        </div>

        <div className="site-header-main">
          <Link className="site-logo" href={`/${locale}`} aria-label="RRA Tax Handbook home">
            <img
              className="site-logo-image"
              src="/assets/bg_rra_logo.png"
              alt="Rwanda Revenue Authority"
            />
          </Link>
          <div className="header-copy">
            <a className="back-link" href="https://www.rra.gov.rw" target="_blank" rel="noreferrer">
              <span aria-hidden="true">←</span>
              <span>Go to rra.gov.rw</span>
            </a>
            <div className="header-title">
              <span>Tax Handbook-Edition {currentYear}</span>
            </div>
          </div>
        </div>
      </header>

      <main className="site-main">{children}</main>

      <footer className="site-footer">
        <Link className="footer-link footer-link-left" href={`/${locale}/about`}>
          About Rwanda Revenue Authority
        </Link>
        <span className="footer-copy">
          Copyright ©{currentYear} All Rights Reserved by Rwanda Revenue Authority
        </span>
        <Link className="footer-link footer-link-right" href={`/${locale}/contact`}>
          Contact Us
        </Link>
      </footer>
    </div>
  );
}
