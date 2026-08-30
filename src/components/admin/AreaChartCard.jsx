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

function CustomTooltip({ active, payload, label, valuePrefix = "" }) {
  if (!active || !payload?.length) {
    return null;
  }

  return (
    <div className="rounded-lg border border-[#eeeeee] bg-white px-3 py-2 shadow-lg">
      <p className="text-xs text-[#737b88]">{label}</p>

      <p className="mt-1 text-sm font-semibold text-[#111827]">
        {valuePrefix}
        {Number(payload[0].value).toLocaleString()}
      </p>
    </div>
  );
}

export default function AreaChartCard({
  title,
  subtitle,
  data,
  dataKey = "value",
  xAxisKey = "label",
  yDomain = [0, "auto"],
  yTicks,
  valuePrefix = "",
  height = 260,
}) {
  return (
    <div className="rounded-[20px] bg-white p-5 shadow-[0_3px_18px_rgba(0,0,0,0.04)]">
      <div>
        <h3 className="text-[15px] font-semibold text-[#111827]">{title}</h3>

        <p className="mt-1 text-xs text-[#737b88]">{subtitle}</p>
      </div>

      <div className="mt-5 w-full" style={{ height }}>
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
              <linearGradient
                id="areaChartGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
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
              dataKey={xAxisKey}
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#737b88",
                fontSize: 11,
              }}
            />

            <YAxis
              domain={yDomain}
              ticks={yTicks}
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#737b88",
                fontSize: 11,
              }}
            />

            <Tooltip
              content={<CustomTooltip valuePrefix={valuePrefix} />}
              cursor={{
                stroke: "#2fd0d2",
                strokeDasharray: "4 4",
              }}
            />

            <Area
              type="monotone"
              dataKey={dataKey}
              stroke="#2fd0d2"
              strokeWidth={2}
              fill="url(#areaChartGradient)"
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
