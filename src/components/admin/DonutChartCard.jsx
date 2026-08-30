"use client";

import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";

export default function DonutChartCard({
  title,
  subtitle,
  data,
  total,
  totalLabel = "Total",
  valuePrefix = "£",
  colors = ["#31cdd0", "#5bd9db", "#b7eff0"],
}) {
  const formatValue = (value) => {
    return `${valuePrefix}${Number(value).toLocaleString()}`;
  };

  return (
    <div className="rounded-[20px] bg-white p-5 shadow-[0_3px_18px_rgba(0,0,0,0.04)]">
      <div>
        <h3 className="text-[15px] font-semibold text-[#111827]">{title}</h3>

        <p className="mt-1 text-xs text-[#737b88]">{subtitle}</p>
      </div>

      <div className="mt-4 grid grid-cols-1 items-center gap-5 md:grid-cols-[220px_1fr]">
        {/* Chart */}
        <div className="relative mx-auto h-[220px] w-[220px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                innerRadius={65}
                outerRadius={97}
                stroke="none"
              >
                {data.map((item, index) => (
                  <Cell key={item.name} fill={colors[index % colors.length]} />
                ))}
              </Pie>

              <Tooltip formatter={(value) => formatValue(value)} />
            </PieChart>
          </ResponsiveContainer>

          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-sm text-[#737b88]">{totalLabel}</span>

            <strong className="mt-1 text-[20px] font-semibold text-[#111827]">
              {total}
            </strong>
          </div>
        </div>

        {/* Legend */}
        <div className="space-y-5">
          {data.map((item, index) => (
            <div
              key={item.name}
              className="flex items-center justify-between gap-4"
            >
              <div className="flex min-w-0 items-center gap-2">
                <span
                  className="h-2 w-2 shrink-0 rounded-full"
                  style={{
                    backgroundColor: colors[index % colors.length],
                  }}
                />

                <span className="truncate text-xs text-[#737b88]">
                  {item.name}
                  {item.percentage ? ` (${item.percentage}%)` : ""}
                </span>
              </div>

              <span className="shrink-0 text-xs font-semibold text-[#27303b]">
                {formatValue(item.value)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
