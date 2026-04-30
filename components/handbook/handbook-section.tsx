import { cn } from '@/lib/utils';

type HandbookSectionProps = {
  id?: string
  paragraphs: string[]
}

export function HandbookSection({ id, paragraphs }: HandbookSectionProps) {
  return (
    <div
      id={id}
      className={cn(
        'scroll-mt-28 space-y-4 text-sm leading-7 text-muted-foreground sm:text-base [&_a]:text-rra-light-blue [&_a]:underline [&_a]:underline-offset-2 [&_strong]:text-foreground',
        id === 'definitions' &&
          'text-base leading-9 text-foreground sm:text-[1.1rem] sm:leading-[2.8rem] [&_ul]:list-disc [&_ul]:space-y-10 [&_ul]:pl-8 [&_li]:pl-2 [&_li]:marker:text-foreground [&_strong]:font-semibold [&_strong]:text-foreground',
        id === 'acronyms' &&
          'grid gap-x-10 gap-y-2 space-y-0 text-foreground sm:grid-cols-2 [&_p]:m-0'
      )}
    >
      {paragraphs.map((paragraph) => {
        const trimmedParagraph = paragraph.trim()
        const isBlockHtml =
          trimmedParagraph.startsWith('<ul') ||
          trimmedParagraph.startsWith('<ol') ||
          trimmedParagraph.startsWith('<blockquote')

        if (isBlockHtml) {
          return <div key={paragraph} dangerouslySetInnerHTML={{ __html: paragraph }} />
        }

        return <p key={paragraph} dangerouslySetInnerHTML={{ __html: paragraph }} />
      })}
    </div>
  )
}
