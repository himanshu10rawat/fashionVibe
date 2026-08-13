"use client";

import { ResponsiveContainer, AreaChart, Area } from "recharts";

export default function MiniChart({ data, color = "#7c3aed" }) {
  return (
    <div className="w-full h-12 mt-4">
      <ResponsiveContainer width={"100%"} height={"100%"}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id={color} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity={0.25} />

              <stop offset="100%" stopColor={color} stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type={"monotone"}
            dataKey={"value"}
            stroke={color}
            strokeWidth={1}
            fill={`url(#${color})`}
            dot={false}
            activeDot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
