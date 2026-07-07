import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';

import type { Locale } from '@/lib/i18n/config';

type TaxTopicCardProps = {
  lang: Locale;
  slug: string;
  summary: string;
  title: string;
};

export function TaxTopicCard({ lang, slug, summary, title }: TaxTopicCardProps) {
  return (
    <Link
      href={`/${lang}/taxes/${slug}`}
      className="group flex min-h-44 flex-col justify-between rounded-lg border border-border bg-card p-5 text-card-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:border-rra-light-blue hover:bg-[#CFE3F8] hover:shadow-md focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
    >
      <span>
        <span className="text-lg font-semibold leading-7">{title}</span>
        <span className="mt-3 block text-sm leading-6 text-rra-black">{summary}</span>
      </span>
      <span className="mt-6 flex size-8 items-center justify-center self-end rounded-full text-rra-blue transition-colors group-hover:bg-rra-blue group-hover:text-rra-white">
        <ArrowRightIcon className="size-5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      </span>
    </Link>
  );
}
