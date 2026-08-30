export default function DataTable({ title, columns, data, renderCell }) {
  return (
    <div className="rounded-[20px] bg-white p-4 shadow-[0_3px_18px_rgba(0,0,0,0.04)] md:p-5">
      <h3 className="mb-4 text-[15px] font-semibold text-[#111827]">{title}</h3>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[750px] border-collapse">
          <thead>
            <tr className="bg-[#eef2ff]">
              {columns.map((column, index) => (
                <th
                  key={column.key}
                  className={`px-4 py-3 text-left text-xs font-medium text-[#687386] ${
                    index === 0 ? "rounded-l-xl" : ""
                  } ${index === columns.length - 1 ? "rounded-r-xl" : ""}`}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.map((row, rowIndex) => (
              <tr
                key={row.id || rowIndex}
                className="border-b border-[#edf0f3] last:border-0"
              >
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className="px-4 py-4 text-xs text-[#687386]"
                  >
                    {renderCell ? renderCell(row, column.key) : row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
