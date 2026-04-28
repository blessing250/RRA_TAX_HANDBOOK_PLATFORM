import type { ReactNode } from "react"

import { Container } from "@/components/layout/container"
import { cn } from "@/lib/utils"

type PageHeroProps = {
  eyebrow?: string
  title: string
  summary: string
  actions?: ReactNode
  className?: string
}

export function PageHero({
  actions,
  className,
  eyebrow,
  summary,
  title,
}: PageHeroProps) {
  return (
    <section className={cn("border-b bg-muted/30", className)}>
      <Container className="grid gap-6 py-10 sm:py-14 lg:grid-cols-[1fr_auto] lg:items-end lg:py-16">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="mb-3 text-sm font-medium text-muted-foreground">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-balance text-3xl font-semibold tracking-normal sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
            {summary}
          </p>
        </div>
        {actions ? <div className="flex flex-wrap gap-2">{actions}</div> : null}
      </Container>
    </section>
  )
}
