type TableCell = {
  label: string;
  colSpan?: number;
  align?: "left" | "center" | "right";
};

type PricingTableProps = {
  headerRows: TableCell[][];
  rows: string[][];
  footnotes?: string[];
};

export default function PricingTable({ headerRows, rows, footnotes }: PricingTableProps) {
  return (
    <div className="w-full overflow-x-auto bg-white rounded-xl shadow border border-[#E5E7EB]">
      <table className="w-full min-w-[640px] text-sm md:text-base">
        <thead className="bg-[#0B2D4A] text-white">
          {headerRows.map((headerRow, rowIndex) => (
            <tr key={`header-${rowIndex}`}>
              {headerRow.map((cell, cellIndex) => (
                <th
                  key={`header-cell-${rowIndex}-${cellIndex}`}
                  colSpan={cell.colSpan ?? 1}
                  className={`px-6 py-4 font-semibold uppercase tracking-wide ${
                    cell.align === "left" ? "text-left" : "text-center"
                  }`}
                >
                  {cell.label}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={`row-${rowIndex}`} className="border-t border-[#E5E7EB]">
              {row.map((cell, cellIndex) => (
                <td
                  key={`cell-${rowIndex}-${cellIndex}`}
                  className={`px-6 py-5 ${
                    cellIndex === 0
                      ? "font-semibold text-[#1D2B53]"
                      : "text-center text-[#2C2C2C]"
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {footnotes && footnotes.length > 0 ? (
        <div className="px-6 py-4 text-sm text-[#2C2C2C] border-t border-[#E5E7EB] space-y-2 font-sans">
          {footnotes.map((note) => (
            <p key={note}>{note}</p>
          ))}
        </div>
      ) : null}
    </div>
  );
}
