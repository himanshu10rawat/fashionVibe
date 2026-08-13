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

const revenueData = [
  { date: "Jun 1", revenue: 12000 },
  { date: "Jun 2", revenue: 18000 },
  { date: "Jun 3", revenue: 20000 },
  { date: "Jun 4", revenue: 28000 },
  { date: "Jun 5", revenue: 35000 },
  { date: "Jun 6", revenue: 42000 },
  { date: "Jun 7", revenue: 65430 },
  { date: "Jun 8", revenue: 44000 },
  { date: "Jun 9", revenue: 44000 },
  { date: "Jun 10", revenue: 35000 },
  { date: "Jun 11", revenue: 47000 },
  { date: "Jun 12", revenue: 60000 },
  { date: "Jun 13", revenue: 60000 },
];

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) {
    return null;
  }

  const revenue = payload[0].value;

  return (
    <div className="rounded-lg border border-gray-100 bg-white px-3 py-2 shadow-lg">
      <p className="text-sm font-semibold text-gray-900">
        ₹{revenue.toLocaleString("en-IN")}
      </p>

      <p className="mt-1 text-xs text-gray-500">{label}, 2025</p>
    </div>
  );
}

export default function RevenueChart() {
  return (
    <div className="h-50 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={revenueData}
          margin={{
            top: 10,
            right: 20,
            left: 5,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7c3aed" stopOpacity={0.18} />

              <stop offset="100%" stopColor="#7c3aed" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid
            vertical={false}
            stroke="#e5e7eb"
            strokeDasharray="0"
          />

          <XAxis
            dataKey="date"
            tickLine={false}
            axisLine={false}
            tick={{
              fontSize: 12,
              fill: "#64748b",
            }}
            interval={1}
            tickMargin={15}
          />

          <YAxis
            domain={[0, 80000]}
            ticks={[0, 20000, 40000, 60000, 80000]}
            tickLine={false}
            axisLine={false}
            tick={{
              fontSize: 12,
              fill: "#64748b",
            }}
            tickFormatter={(value) => {
              if (value === 0) return "₹0";

              return `₹${value / 1000}K`;
            }}
            width={45}
            tickMargin={15}
          />

          <Tooltip
            content={<CustomTooltip />}
            cursor={{
              stroke: "#cbd5e1",
              strokeDasharray: "4 4",
            }}
          />

          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#7c3aed"
            strokeWidth={2}
            fill="url(#revenueGradient)"
            dot={true}
            activeDot={{
              r: 5,
              fill: "#7c3aed",
              stroke: "#ffffff",
              strokeWidth: 2,
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
