type HandbookSectionProps = {
  id?: string
  paragraphs: string[]
}

export function HandbookSection({ id, paragraphs }: HandbookSectionProps) {
  return (
    <div
      id={id}
      className="scroll-mt-28 space-y-4 text-sm leading-7 text-muted-foreground sm:text-base"
    >
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  )
}
