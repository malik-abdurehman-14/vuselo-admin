"use client";

import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  {
    name: "Vape Devices",
    value: 53529,
    percentage: 42,
  },
  {
    name: "Nicotine Pouches",
    value: 44608,
    percentage: 35,
  },
  {
    name: "Pods & Refills",
    value: 29314,
    percentage: 23,
  },
];

const COLORS = ["#31cdd0", "#5bd9db", "#b7eff0"];

function formatCurrency(value) {
  return `£${value.toLocaleString()}`;
}

export default function RevenueCategoryChart() {
  return (
    <div className="rounded-[20px] bg-white p-5 shadow-[0_3px_18px_rgba(0,0,0,0.04)]">
      <div>
        <h3 className="text-[15px] font-semibold text-[#111827]">
          Revenue by Category
        </h3>

        <p className="mt-1 text-xs text-[#737b88]">
          Breakdown of revenue across product categories
        </p>
      </div>

      <div className="mt-4 grid grid-cols-1 items-center gap-4 md:grid-cols-[220px_1fr]">
        <div className="relative mx-auto h-[220px] w-[220px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                innerRadius={65}
                outerRadius={97}
                paddingAngle={0}
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={entry.name} fill={COLORS[index]} />
                ))}
              </Pie>

              <Tooltip formatter={(value) => formatCurrency(Number(value))} />
            </PieChart>
          </ResponsiveContainer>

          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-sm text-[#737b88]">Total</span>

            <strong className="mt-1 text-[20px] font-semibold text-[#111827]">
              £127.4K
            </strong>
          </div>
        </div>

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
                    backgroundColor: COLORS[index],
                  }}
                />

                <span className="truncate text-xs text-[#737b88]">
                  {item.name} ({item.percentage}%)
                </span>
              </div>

              <span className="shrink-0 text-xs font-semibold text-[#27303b]">
                {formatCurrency(item.value)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
