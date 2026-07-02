import Link from "next/link";
import {
  ArrowRightIcon,
  BookOpenCheckIcon,
  HandshakeIcon,
  InfoIcon,
  ReceiptTextIcon,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { SiteShell } from "@/components/layout/site-shell";
import { localizedText } from "@/lib/content/handbook";
import { homeCards } from "@/lib/content/home";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/config";

const homeCardIcons: Record<string, typeof InfoIcon> = {
  "general-information": InfoIcon,
  "taxes-administered-in-rwanda": ReceiptTextIcon,
  "other-services": HandshakeIcon,
  "user-guides-and-examples": BookOpenCheckIcon,
};

export default function Home() {
  const locale: Locale = "en";
  const dict = getDictionary(locale);

  return (
    <SiteShell dict={dict} lang={locale}>
      <Container className="py-10 sm:py-14">
        <h1 className="sr-only">{dict.home.title}</h1>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-2">
          {homeCards.map((card) => {
            const CardIcon = homeCardIcons[card.id];

            return (
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
                <span className="mt-6 flex items-center justify-center gap-3">
                  <span className="flex size-9 items-center justify-center rounded-full bg-rra-light-blue/10 text-rra-light-blue transition-colors group-hover:bg-rra-white group-hover:text-rra-blue">
                    <CardIcon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="flex size-9 items-center justify-center rounded-full text-rra-blue transition-colors group-hover:bg-rra-blue group-hover:text-rra-white">
                    <ArrowRightIcon className="size-5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      </Container>
    </SiteShell>
  );
}
