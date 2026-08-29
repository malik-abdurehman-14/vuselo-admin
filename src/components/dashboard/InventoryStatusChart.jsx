"use client";

import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  {
    name: "In Stock",
    value: 98,
  },
  {
    name: "Low Stock",
    value: 32,
  },
  {
    name: "Out of Stock",
    value: 12,
  },
  {
    name: "Discontinued",
    value: 14,
  },
];

const COLORS = ["#2fd0d2", "#f59e0b", "#ef3340", "#111111"];

export default function InventoryStatusChart() {
  return (
    <div className="rounded-[20px] bg-white p-5 shadow-[0_3px_18px_rgba(0,0,0,0.04)]">
      <div>
        <h3 className="text-[15px] font-semibold text-[#111827]">
          Inventory Status
        </h3>

        <p className="mt-1 text-xs text-[#737b88]">
          Summary of stock levels across all SKUs
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
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={entry.name} fill={COLORS[index]} />
                ))}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>

          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-sm text-[#111827]">Products</span>

            <strong className="text-[20px] font-semibold text-[#111827]">
              156
            </strong>
          </div>
        </div>

        <div className="space-y-4">
          {data.map((item, index) => (
            <div key={item.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{
                    backgroundColor: COLORS[index],
                  }}
                />

                <span className="text-xs text-[#737b88]">{item.name}</span>
              </div>

              <span className="text-xs font-semibold text-[#27303b]">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
