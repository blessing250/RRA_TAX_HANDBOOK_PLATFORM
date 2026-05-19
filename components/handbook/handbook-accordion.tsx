"use client"

import type { ReactNode } from "react"
import { useEffect, useMemo, useRef, useState } from "react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

type HandbookAccordionItem = {
  content: ReactNode
  title: string
  value: string
}

type HandbookAccordionProps = {
  defaultValue?: string
  items: HandbookAccordionItem[]
  variant?: "card" | "minimal"
}

export function HandbookAccordion({
  defaultValue,
  items,
  variant = "card",
}: HandbookAccordionProps) {
  const itemValues = useMemo(() => items.map((item) => item.value), [items])
  const [value, setValue] = useState(defaultValue ?? "")
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({})
  const isMinimal = variant === "minimal"

  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash.replace("#", "")

      if (itemValues.includes(hash)) {
        setValue(hash)
      } else if (!defaultValue) {
        setValue("")
      }
    }

    applyHash()
    window.addEventListener("hashchange", applyHash)

    return () => window.removeEventListener("hashchange", applyHash)
  }, [defaultValue, itemValues])

  function handleValueChange(nextValue: string) {
    const normalizedValue = nextValue || ""

    setValue(normalizedValue)

    if (normalizedValue) {
      window.requestAnimationFrame(() => {
        const itemElement = itemRefs.current[normalizedValue]

        if (!itemElement) {
          return
        }

        const headerOffset = window.matchMedia("(max-width: 767px)").matches ? 24 : 96
        const itemTop = itemElement.getBoundingClientRect().top + window.scrollY

        window.scrollTo({
          top: Math.max(itemTop - headerOffset, 0),
          behavior: "smooth",
        })
      })
    }

    if (normalizedValue) {
      window.history.replaceState(null, "", `#${normalizedValue}`)
      window.dispatchEvent(new HashChangeEvent("hashchange"))
    } else if (window.location.hash) {
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}${window.location.search}`
      )
      window.dispatchEvent(new HashChangeEvent("hashchange"))
    }
  }

  return (
    <Accordion
      type="single"
      collapsible
      value={value}
      onValueChange={handleValueChange}
      className={
        isMinimal
          ? "w-full border-y border-rra-black/35"
          : "w-full rounded-lg border bg-card px-4 sm:px-5"
      }
    >
      {items.map((item) => (
        <AccordionItem
          key={item.value}
          ref={(node) => {
            itemRefs.current[item.value] = node
          }}
          value={item.value}
        >
          <AccordionTrigger
            className={
              isMinimal
                ? "rounded-none py-3 text-sm font-bold text-rra-light-blue hover:no-underline"
                : "py-4 text-base font-semibold text-rra-light-blue"
            }
          >
            {item.title}
          </AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
