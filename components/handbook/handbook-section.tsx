import { cn } from '@/lib/utils';
import type { HandbookContentBlock } from '@/lib/types/handbook';

import { HandbookTable } from '@/components/handbook/handbook-table';

type HandbookSectionProps = {
  id?: string;
  paragraphs: HandbookContentBlock[];
};

export function HandbookSection({ id, paragraphs }: HandbookSectionProps) {
  return (
    <div
      id={id}
      className={cn(
        'scroll-mt-28 space-y-4 text-sm leading-7 text-rra-black sm:text-base [&_a]:text-rra-light-blue [&_a]:underline [&_a]:underline-offset-2 [&_strong]:text-rra-black [&_.text-blue-emphasis]:text-rra-light-blue',
        id === 'definitions' &&
          'text-base leading-9 sm:text-[1.1rem] sm:leading-[2.8rem] [&_ul]:list-disc [&_ul]:space-y-10 [&_ul]:pl-8 [&_li]:pl-2 [&_li]:marker:text-rra-black [&_strong]:font-semibold',
        id === 'acronyms' && 'grid gap-x-10 gap-y-2 space-y-0 sm:grid-cols-2 [&_p]:m-0',
      )}
    >
      {paragraphs.map((paragraph, index) => {
        if (typeof paragraph !== 'string') {
          return (
            <HandbookTable
              key={`${paragraph.type}-${paragraph.caption ?? index}`}
              caption={paragraph.caption}
              headers={paragraph.headers}
              rows={paragraph.rows}
            />
          );
        }

        const trimmedParagraph = paragraph.trim();
        const isBlockHtml =
          trimmedParagraph.startsWith('<ul') ||
          trimmedParagraph.startsWith('<ol') ||
          trimmedParagraph.startsWith('<blockquote');

        if (isBlockHtml) {
          return <div key={paragraph} dangerouslySetInnerHTML={{ __html: paragraph }} />;
        }

        return <p key={paragraph} dangerouslySetInnerHTML={{ __html: paragraph }} />;
      })}
    </div>
  );
}
