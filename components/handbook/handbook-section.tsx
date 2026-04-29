type HandbookSectionProps = {
  id?: string
  paragraphs: string[]
}

export function HandbookSection({ id, paragraphs }: HandbookSectionProps) {
  return (
    <div
      id={id}
      className="scroll-mt-28 space-y-4 text-sm leading-7 text-muted-foreground sm:text-base [&_a]:text-rra-light-blue [&_a]:underline [&_a]:underline-offset-2 [&_strong]:text-foreground"
    >
      {paragraphs.map((paragraph) => (
        <p key={paragraph} dangerouslySetInnerHTML={{ __html: paragraph }} />
      ))}
    </div>
  )
}
