import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeftIcon, SearchIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '@/components/i18n/language-switcher';
import type { Dictionary } from '@/lib/i18n/get-dictionary';
import type { Locale } from '@/lib/i18n/config';

type SiteHeaderProps = {
  dict: Dictionary;
  lang: Locale;
};

export function SiteHeader({ dict, lang }: SiteHeaderProps) {
  return (
    <header className="relative z-40 border-b-4 border-rra-blue bg-rra-white text-rra-black md:sticky md:top-0">
      <div className="bg-rra-blue text-rra-white">
        <div className="flex min-h-10 flex-wrap items-center justify-end gap-3 px-4 py-2 text-sm sm:px-6 lg:px-8">
          <LanguageSwitcher lang={lang} label={dict.nav.language} />
          <form action={`/${lang}/search`} className="relative w-full max-w-64 sm:w-64">
            <SearchIcon className="pointer-events-none absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-rra-blue/70" />
            <input
              aria-label={dict.common.search}
              name="q"
              type="search"
              placeholder={dict.common.search}
              className="h-8 w-full rounded-md border border-rra-white/20 bg-rra-white pl-9 pr-3 text-sm font-medium text-rra-black shadow-sm outline-none placeholder:text-rra-blue/55 focus:border-rra-orange focus:ring-2 focus:ring-rra-orange/40"
            />
          </form>
        </div>
      </div>

      <div className="grid min-h-24 gap-4 px-4 py-4 sm:grid-cols-[11rem_1fr] sm:items-center sm:px-6 lg:min-h-28 lg:grid-cols-[13rem_1fr] lg:px-8">
        <Link href={`/${lang}`} className="flex w-full justify-start" aria-label={dict.nav.home}>
          <Image
            src="/images/Rwanda-Revenue-Authority-logo.png"
            alt="Rwanda Revenue Authority"
            width={360}
            height={120}
            unoptimized
            className="h-auto w-36 max-w-full sm:w-40 lg:w-48"
          />
        </Link>

        <div className="min-w-0">
          <Button
            asChild
            variant="link"
            className="mb-3 h-auto gap-2 p-0 text-sm font-semibold text-rra-light-blue underline-offset-4 hover:text-rra-blue"
          >
            <a href="https://www.rra.gov.rw/" rel="noreferrer" target="_blank">
              <ArrowLeftIcon className="size-4" />
              Go to rra.gov.rw
            </a>
          </Button>

          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <Link href={`/${lang}`} className="min-w-0">
              <span className="block text-balance text-2xl font-bold leading-tight text-rra-black sm:text-3xl">
                Tax Handbook- {new Date().getFullYear()} Edition
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
