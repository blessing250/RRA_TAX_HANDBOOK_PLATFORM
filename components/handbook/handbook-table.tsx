import { cn } from '@/lib/utils';

type HandbookTableProps = {
  caption?: string;
  headers: string[];
  rows: string[][];
};

export function HandbookTable({ caption, headers, rows }: HandbookTableProps) {
  return (
    <div className="my-8 overflow-x-auto">
      <table className="min-w-full border-collapse overflow-hidden rounded-sm border border-rra-black/25 text-left text-sm text-rra-black">
        {caption ? (
          <caption className="mb-3 text-left font-semibold text-rra-black">{caption}</caption>
        ) : null}
        <thead className="bg-rra-black/5">
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                scope="col"
                className="border border-rra-black/25 px-4 py-3 align-top font-bold text-rra-black"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={row.join('|') || rowIndex} className={cn(rowIndex % 2 === 1 && 'bg-rra-black/[0.02]')}>
              {row.map((cell, cellIndex) => (
                <td
                  key={`${rowIndex}-${cellIndex}-${cell}`}
                  className="border border-rra-black/20 px-4 py-3 align-top"
                  dangerouslySetInnerHTML={{ __html: cell }}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
