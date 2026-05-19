import { cn } from '@/lib/utils';

type HandbookTableProps = {
  caption?: string;
  headers: string[];
  rows: string[][];
};

export function HandbookTable({ caption, headers, rows }: HandbookTableProps) {
  return (
    <div className="my-8 overflow-x-auto rounded-sm border border-rra-black/10">
      <table className="min-w-full border-collapse text-left text-sm text-rra-black">
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
          {rows.map((row, rowIndex) => {
            const isGroupRow = row.length === 1;

            return (
              <tr
                key={row.join('|') || rowIndex}
                className={cn(!isGroupRow && rowIndex % 2 === 1 && 'bg-rra-black/[0.02]')}
              >
                {isGroupRow ? (
                  <td
                    colSpan={headers.length}
                    className="border border-rra-black/20 bg-rra-light-blue/10 px-4 py-3 text-center align-top font-bold text-rra-black"
                    dangerouslySetInnerHTML={{ __html: row[0] }}
                  />
                ) : (
                  row.map((cell, cellIndex) => (
                    <td
                      key={`${rowIndex}-${cellIndex}-${cell}`}
                      className="border border-rra-black/20 px-4 py-3 align-top"
                      dangerouslySetInnerHTML={{ __html: cell }}
                    />
                  ))
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
