import type { ReactNode } from "react";

import { HandbookBreadcrumb } from "@/components/handbook/handbook-breadcrumb";
import { Container } from "@/components/layout/container";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type BreadcrumbItem = ComponentProps<typeof HandbookBreadcrumb>["items"][number];

type HandbookPageLayoutProps = {
  title: string;
  summary?: ReactNode;
  breadcrumbs: BreadcrumbItem[];
  children: ReactNode;
  lastUpdated?: string;
  contentClassName?: string;
};

export function HandbookPageLayout({
  breadcrumbs,
  children,
  contentClassName,
  lastUpdated,
  summary,
  title,
}: HandbookPageLayoutProps) {
  return (
    <>
      <section className="border-b bg-muted/30">
        <Container className="py-8 sm:py-10 lg:max-w-5xl">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-balance text-3xl font-bold tracking-normal text-rra-black sm:text-4xl">
              {title}
            </h1>
            {summary ? (
              <div className="mt-4 max-w-2xl text-sm leading-7 text-rra-black [&>*+*]:mt-3 sm:text-base">
                {summary}
              </div>
            ) : null}
          </div>
        </Container>
      </section>

      <Container className="py-8 sm:py-10 lg:max-w-5xl">
        <article className={cn("mx-auto max-w-3xl", contentClassName)}>
          <div className="mb-8 sm:mb-10">
            <HandbookBreadcrumb items={breadcrumbs} />
          </div>

          {children}

          {lastUpdated ? (
            <p className="mt-16 text-sm text-rra-black">{lastUpdated}</p>
          ) : null}
        </article>
      </Container>
    </>
  );
}
