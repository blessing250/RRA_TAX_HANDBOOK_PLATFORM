import { cn } from '@/lib/utils';
import type { HandbookContentBlock } from '@/lib/types/handbook';

import { HandbookTable } from '@/components/handbook/handbook-table';

type HandbookSectionProps = {
  id?: string;
  paragraphs: HandbookContentBlock[];
};

function normalizeParagraphs(paragraphs: HandbookContentBlock[]) {
  const normalized: HandbookContentBlock[] = [];
  let listBuffer: string[] = [];
  let listType: 'ul' | 'ol' | null = null;

  const normalizeListItem = (item: string) => {
    const trimmedItem = item.trim();

    if (!listType || trimmedItem.startsWith('<li') || trimmedItem.startsWith(`<${listType}`)) {
      return item;
    }

    if (/^[-•]\s+/.test(trimmedItem) || /^[a-zA-Z0-9]\)\s+/.test(trimmedItem)) {
      return `<li>${trimmedItem.replace(/^[-•]\s+/, '').replace(/^[a-zA-Z0-9]\)\s+/, '')}</li>`;
    }

    return item;
  };

  const flushList = () => {
    if (!listBuffer.length) {
      return;
    }

    const hasOpeningTag = listBuffer.some((item) => item.trim().startsWith(`<${listType}`));
    const hasClosingTag = listBuffer.some((item) => item.trim().startsWith(`</${listType}`));
    const body = listBuffer.map(normalizeListItem).join('');

    normalized.push(
      `${hasOpeningTag ? '' : `<${listType}>`}${body}${hasClosingTag ? '' : `</${listType}>`}`,
    );
    listBuffer = [];
    listType = null;
  };

  for (const paragraph of paragraphs) {
    if (typeof paragraph !== 'string') {
      flushList();
      normalized.push(paragraph);
      continue;
    }

    const trimmedParagraph = paragraph.trim();
    const startsList =
      trimmedParagraph.startsWith('<ul') ||
      trimmedParagraph.startsWith('<ol') ||
      trimmedParagraph.startsWith('<li');
    const closesList = trimmedParagraph.startsWith('</ul') || trimmedParagraph.startsWith('</ol');
    const isBufferedListLine =
      Boolean(listType) &&
      (/^[-•]\s+/.test(trimmedParagraph) || /^[a-zA-Z0-9]\)\s+/.test(trimmedParagraph));

    if (startsList || closesList || isBufferedListLine) {
      listType =
        listType ??
        (trimmedParagraph.startsWith('<ol') || trimmedParagraph.startsWith('</ol') ? 'ol' : 'ul');
      listBuffer.push(paragraph);

      if (trimmedParagraph.startsWith(`</${listType}`)) {
        flushList();
      }

      continue;
    }

    flushList();
    normalized.push(paragraph);
  }

  flushList();

  return normalized;
}

function sanitizeHtml(html: string) {
  return html
    .replaceAll('â€™', '’')
    .replaceAll('â€˜', '‘')
    .replaceAll('â€œ', '“')
    .replaceAll('â€', '”')
    .replaceAll('â€“', '–')
    .replaceAll('â€”', '—')
    .replaceAll('â€¢', '•')
    .replaceAll('Â°', '°')
    .replaceAll('Âº', 'º')
    .replaceAll('Â ', ' ')
    .replaceAll('</.li>', '</li>')
    .replaceAll('<strong/>', '</strong>')
    .replace(/<\/i\s*$/g, '')
    .replace(
      /<li>((?:(?!<\/li>|<li>|<\/ul>|<\/ol>)[\s\S])*)(?=<li>|<\/ul>|<\/ol>|$)/g,
      '<li>$1</li>',
    )
    .replace(/<ul>\s*<ul>/g, '<ul>')
    .replace(/<ol>\s*<ol>/g, '<ol>')
    .replace(/<\/ul>\s*<\/ul>/g, '</ul>')
    .replace(/<\/ol>\s*<\/ol>/g, '</ol>');
}

export function HandbookSection({ id, paragraphs }: HandbookSectionProps) {
  const normalizedParagraphs = normalizeParagraphs(paragraphs);

  return (
    <div
      id={id}
      className={cn(
        'scroll-mt-28 space-y-4 text-sm leading-7 text-rra-black sm:text-base [&_a]:text-rra-light-blue [&_a]:underline [&_a]:underline-offset-2 [&_blockquote]:rounded-r-lg [&_blockquote]:border-l-4 [&_blockquote]:border-rra-light-blue/45 [&_blockquote]:bg-rra-light-blue/10 [&_blockquote]:p-4 [&_li]:my-1.5 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 [&_strong]:font-semibold [&_strong]:text-rra-black [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_.text-blue-emphasis]:text-rra-light-blue',
        id === 'definitions' &&
          'text-base leading-9 sm:text-[1.1rem] sm:leading-[2.8rem] [&_ul]:list-disc [&_ul]:space-y-10 [&_ul]:pl-8 [&_li]:pl-2 [&_li]:marker:text-rra-black [&_strong]:font-semibold',
        id === 'acronyms' && 'grid gap-x-10 gap-y-2 space-y-0 sm:grid-cols-2 [&_p]:m-0',
      )}
    >
      {normalizedParagraphs.map((paragraph, index) => {
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
        const html = sanitizeHtml(paragraph);
        const isBlockHtml =
          trimmedParagraph.startsWith('<div') ||
          trimmedParagraph.startsWith('<p') ||
          trimmedParagraph.startsWith('<strong') ||
          trimmedParagraph.startsWith('<ul') ||
          trimmedParagraph.startsWith('<ol') ||
          trimmedParagraph.startsWith('<blockquote');

        if (isBlockHtml) {
          return <div key={`paragraph-${index}`} dangerouslySetInnerHTML={{ __html: html }} />;
        }

        return <p key={`paragraph-${index}`} dangerouslySetInnerHTML={{ __html: html }} />;
      })}
    </div>
  );
}
