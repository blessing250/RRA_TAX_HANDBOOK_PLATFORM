import Link from 'next/link';

import { Container } from '@/components/layout/container';
import type { Locale } from '@/lib/i18n/config';

type SiteFooterProps = {
  lang: Locale;
};

export function SiteFooter({ lang }: SiteFooterProps) {
  return (
    <footer className="border-t-4 border-rra-blue bg-[#CFE3F8]">
      <Container className="grid gap-3 py-10 text-sm font-semibold text-rra-black md:grid-cols-[1fr_auto_1fr] md:items-center">
        <nav className="flex justify-center md:justify-start" aria-label="Footer">
          <Link
            className="text-rra-light-blue underline underline-offset-2 hover:text-rra-blue"
            href={`/${lang}`}
          >
            About Rwanda Revenue Authority
          </Link>
        </nav>

        <p className="text-center md:whitespace-nowrap">
          Copyright &copy;{new Date().getFullYear()} All Rights Reserved by Rwanda Revenue Authority
        </p>

        <nav className="flex justify-center md:justify-end" aria-label="Contact">
          <Link
            className="text-rra-light-blue underline underline-offset-2 hover:text-rra-blue"
            href={`/${lang}/search`}
          >
            Contact Us
          </Link>
        </nav>
      </Container>
    </footer>
  );
}
