import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRightIcon } from 'lucide-react';

import { Container } from '@/components/layout/container';
import { localizedText } from '@/lib/content/handbook';
import { homeCards } from '@/lib/content/home';
import { getDictionary } from '@/lib/i18n/get-dictionary';
import { isLocale, type Locale } from '@/lib/i18n/config';

export default async function LocaleHomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const locale = lang as Locale;
  const dict = getDictionary(locale);

  return (
    <Container className="py-10 sm:py-14">
      <h1 className="sr-only">{dict.home.title}</h1>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-2">
        {homeCards.map((card) => (
          <Link
            key={card.id}
            href={card.href(locale)}
            className="group flex min-h-56 flex-col items-center justify-between rounded-lg border border-border bg-card p-6 text-center text-card-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:border-rra-light-blue hover:bg-[#CFE3F8] hover:shadow-md focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            <span>
              <span className="block text-xl font-semibold leading-7 text-[#1362AE]">
                {localizedText(card.title, locale)}
              </span>
              <span className="mt-4 block text-sm leading-7 text-rra-black">
                {localizedText(card.summary, locale)}
              </span>
            </span>
            <span className="mt-6 flex size-9 items-center justify-center rounded-full text-rra-blue transition-colors group-hover:bg-rra-blue group-hover:text-rra-white">
              <ArrowRightIcon className="size-5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </span>
          </Link>
        ))}
      </div>
    </Container>
  );
}
