"use client"

import type { ReactNode } from "react"
import { useEffect, useMemo, useState } from "react"

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
}

export function HandbookAccordion({ defaultValue, items }: HandbookAccordionProps) {
  const itemValues = useMemo(() => items.map((item) => item.value), [items])
  const [value, setValue] = useState(defaultValue ?? "")

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
      className="w-full rounded-lg border bg-card px-4 sm:px-5"
    >
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger className="py-4 text-base font-semibold text-rra-light-blue">
            {item.title}
          </AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
