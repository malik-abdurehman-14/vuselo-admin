"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { status: "Pending", value: 1.75 },
  { status: "Processing", value: 1.18 },
  { status: "Shipped", value: 0.68 },
  { status: "Delivered", value: 0.52 },
  { status: "Returned", value: 1.0 },
  { status: "Cancelled", value: 0.3 },
];

export default function OrdersStatusChart() {
  return (
    <div className="rounded-[20px] bg-white p-5 shadow-[0_3px_18px_rgba(0,0,0,0.04)]">
      <div>
        <h3 className="text-[15px] font-semibold text-[#111827]">
          Orders by Status
        </h3>

        <p className="mt-1 text-xs text-[#7c8aa0]">
          Overview of order fulfillment progress
        </p>
      </div>

      <div className="mt-5 h-[220px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 5,
              left: -25,
              bottom: 0,
            }}
          >
            <CartesianGrid
              stroke="#e9ecef"
              strokeDasharray="2 3"
              vertical={false}
            />

            <XAxis
              dataKey="status"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#737b88",
                fontSize: 10,
              }}
            />

            <YAxis
              domain={[0, 2]}
              ticks={[0, 0.5, 1, 1.5, 2]}
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#737b88",
                fontSize: 10,
              }}
            />

            <Tooltip
              cursor={{ fill: "#f7f7f7" }}
              formatter={(value) => [value, "Orders"]}
            />

            <Bar
              dataKey="value"
              radius={[5, 5, 0, 0]}
              barSize={12}
              fill="#35ced0"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
