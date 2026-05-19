"use client"

import Link from "next/link"
import { useEffect, useMemo, useState } from "react"
import { SearchIcon } from "lucide-react"

import type { HandbookSearchItem } from "@/lib/search/handbook-search"

const MAX_QUERY_LENGTH = 80
const MAX_SEARCH_TERMS = 8

type HandbookSearchProps = {
  initialQuery?: string
  items: HandbookSearchItem[]
  labels: {
    noResults: string
    placeholder: string
    resultCountPlural: string
    resultCountSingular: string
    search: string
  }
}

function sanitizeQuery(value: string) {
  return value
    .normalize("NFKC")
    .replace(/[\u0000-\u001F\u007F<>`{}[\]\\]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, MAX_QUERY_LENGTH)
}

function normalize(value: string) {
  return sanitizeQuery(value).toLowerCase()
}

function buildSnippet(item: HandbookSearchItem, query: string) {
  const fallback = item.summary || item.body
  const cleanQuery = normalize(query)

  if (!cleanQuery) {
    return fallback
  }

  const body = item.body || fallback
  const index = body.toLowerCase().indexOf(cleanQuery)

  if (index === -1) {
    return fallback
  }

  const start = Math.max(index - 80, 0)
  const end = Math.min(index + cleanQuery.length + 140, body.length)
  const prefix = start > 0 ? "..." : ""
  const suffix = end < body.length ? "..." : ""

  return `${prefix}${body.slice(start, end).trim()}${suffix}`
}

export function HandbookSearch({
  initialQuery = "",
  items,
  labels,
}: HandbookSearchProps) {
  const [query, setQuery] = useState(initialQuery)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const urlQuery = params.get("q")

    if (urlQuery) {
      const timer = window.setTimeout(() => setQuery(sanitizeQuery(urlQuery)), 0)

      return () => window.clearTimeout(timer)
    }

    return undefined
  }, [])

  const results = useMemo(() => {
    const terms = normalize(query)
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, MAX_SEARCH_TERMS)

    if (terms.length === 0) {
      return items
    }

    return items
      .map((item) => {
        const score = terms.reduce((total, term) => {
          if (item.title.toLowerCase().includes(term)) return total + 5
          if (item.summary.toLowerCase().includes(term)) return total + 3
          if (item.keywords.includes(term)) return total + 1
          return total
        }, 0)

        return { item, score }
      })
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title))
      .map(({ item }) => item)
  }, [items, query])

  return (
    <section className="mx-auto max-w-4xl">
      <label className="sr-only" htmlFor="handbook-search">
        {labels.search}
      </label>
      <div className="relative">
        <SearchIcon className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-rra-blue/65" />
        <input
          id="handbook-search"
          type="search"
          value={query}
          maxLength={MAX_QUERY_LENGTH}
          onChange={(event) => setQuery(sanitizeQuery(event.target.value))}
          placeholder={labels.placeholder}
          className="h-12 w-full rounded-md border border-rra-light-blue/45 bg-rra-white pl-12 pr-4 text-base font-medium text-rra-black shadow-sm outline-none placeholder:text-rra-blue/55 focus:border-rra-orange focus:ring-2 focus:ring-rra-orange/35"
        />
      </div>

      <p className="mt-4 text-sm font-medium text-rra-black">
        {results.length === 1
          ? labels.resultCountSingular
          : `${results.length} ${labels.resultCountPlural}`}
      </p>

      {results.length > 0 ? (
        <div className="mt-6 grid gap-4">
          {results.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group rounded-lg border border-rra-light-blue/35 bg-rra-white p-5 transition-colors hover:border-rra-blue hover:bg-muted/30 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              <span className="block text-xs font-semibold uppercase tracking-normal text-rra-light-blue">
                {item.category}
              </span>
              <span className="mt-2 block text-xl font-bold leading-7 text-rra-black group-hover:text-rra-blue">
                {item.title}
              </span>
              <span className="mt-3 block text-sm leading-7 text-rra-black">
                {buildSnippet(item, query)}
              </span>
            </Link>
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-lg border border-rra-light-blue/35 bg-rra-white p-6 text-sm leading-7 text-rra-black">
          {labels.noResults}
        </div>
      )}
    </section>
  )
}
