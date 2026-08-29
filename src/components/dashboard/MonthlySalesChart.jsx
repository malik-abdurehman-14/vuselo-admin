"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", sales: 1480 },
  { month: "Feb", sales: 1410 },
  { month: "Mar", sales: 1730 },
  { month: "Apr", sales: 1260 },
  { month: "May", sales: 1680 },
  { month: "Jun", sales: 1490 },
];

function CustomTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-lg border border-[#eeeeee] bg-white px-3 py-2 shadow-lg">
      <p className="text-xs text-[#737b88]">{payload[0].payload.month}</p>

      <p className="mt-1 text-sm font-semibold text-[#111827]">
        {payload[0].value.toLocaleString()} sales
      </p>
    </div>
  );
}

export default function MonthlySalesChart() {
  return (
    <div className="rounded-[20px] bg-white p-5 shadow-[0_3px_18px_rgba(0,0,0,0.04)]">
      <div>
        <h3 className="text-[15px] font-semibold text-[#111827]">
          Monthly Sales Volume
        </h3>

        <p className="mt-1 text-xs text-[#737b88]">
          Track product sales over time
        </p>
      </div>

      <div className="mt-5 h-[260px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 5,
              left: -20,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2fd0d2" stopOpacity={0.28} />

                <stop offset="100%" stopColor="#2fd0d2" stopOpacity={0.04} />
              </linearGradient>
            </defs>

            <CartesianGrid
              stroke="#e9ecef"
              strokeDasharray="2 3"
              vertical={false}
            />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#737b88",
                fontSize: 11,
              }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              domain={[0, 2500]}
              ticks={[0, 500, 1000, 1500, 2000, 2500]}
              tick={{
                fill: "#737b88",
                fontSize: 11,
              }}
            />

            <Tooltip
              content={<CustomTooltip />}
              cursor={{
                stroke: "#2fd0d2",
                strokeDasharray: "4 4",
              }}
            />

            <Area
              type="monotone"
              dataKey="sales"
              stroke="#2fd0d2"
              strokeWidth={2}
              fill="url(#salesGradient)"
              dot={false}
              activeDot={{
                r: 5,
                fill: "#2fd0d2",
                stroke: "#fff",
                strokeWidth: 2,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
