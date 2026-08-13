"use client";

import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const orderData = [
  {
    name: "Delivered",
    value: 85,
    color: "#22c55e",
  },
  {
    name: "Processing",
    value: 42,
    color: "#3b82f6",
  },
  {
    name: "Pending",
    value: 21,
    color: "#f59e0b",
  },
  {
    name: "Cancelled",
    value: 10,
    color: "#ef4444",
  },
];

const total = orderData.reduce((sum, item) => sum + item.value, 0);

export default function OrdersOverview() {
  return (
    <div className="bg-white rounded-xl p-3 shadow-[0_0_5px_rgba(0,0,0,0.1)]">
      <h2 className="text-sm font-semibold text-gray-900 mb-4">
        Orders Overview
      </h2>

      <div className="flex items-center justify-between gap-8 mr-10">
        <div className="relative w-50 h-50 shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={orderData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={85}
                startAngle={90}
                endAngle={-270}
                paddingAngle={0}
                stroke="#ffffff"
                strokeWidth={1}
              >
                {orderData.map((item) => (
                  <Cell key={item.name} fill={item.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-2xl font-bold text-gray-900">{total}</span>

            <span className="text-xs text-gray-500 mt-0.5">Total</span>
          </div>
        </div>

        <div className="flex-1">
          {orderData.map((item) => {
            const percentage = ((item.value / total) * 100).toFixed(1);

            return (
              <div
                key={item.name}
                className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{
                      backgroundColor: item.color,
                    }}
                  />

                  <span className="text-sm text-gray-700">{item.name}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-900">
                    {item.value}
                  </span>

                  <span className="text-sm text-gray-700">({percentage}%)</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
