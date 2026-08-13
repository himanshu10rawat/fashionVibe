import { ArrowUp, Package, ShoppingCart, Users, Wallet } from "lucide-react";
import MiniChart from "../MiniChart";

export default function TotalRecord() {
  const dashboardStats = [
    {
      title: "Total Revenue",
      value: "₹1,25,000",
      percentage: "15.6%",
      color: "purple",
      data: [
        { value: 20 },
        { value: 25 },
        { value: 22 },
        { value: 35 },
        { value: 30 },
        { value: 45 },
        { value: 40 },
        { value: 55 },
        { value: 48 },
        { value: 65 },
      ],
    },

    {
      title: "Total Orders",
      value: "158",
      percentage: "12.4%",
      color: "green",
      data: [
        { value: 20 },
        { value: 18 },
        { value: 30 },
        { value: 25 },
        { value: 40 },
        { value: 35 },
        { value: 50 },
        { value: 45 },
        { value: 60 },
        { value: 70 },
      ],
    },

    {
      title: "Total Customers",
      value: "87",
      percentage: "8.3%",
      color: "orange",
      data: [
        { value: 15 },
        { value: 25 },
        { value: 20 },
        { value: 35 },
        { value: 28 },
        { value: 40 },
        { value: 35 },
        { value: 50 },
        { value: 45 },
        { value: 60 },
      ],
    },

    {
      title: "Total Products",
      value: "245",
      percentage: "3.2%",
      color: "blue",
      data: [
        { value: 30 },
        { value: 25 },
        { value: 35 },
        { value: 30 },
        { value: 45 },
        { value: 40 },
        { value: 50 },
        { value: 45 },
        { value: 55 },
        { value: 70 },
      ],
    },
  ];
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
      {dashboardStats.map(({ title, value, percentage, color, data }) => (
        <div
          key={title}
          className="bg-white rounded-xl p-3 shadow-[0_0_5px_rgba(0,0,0,0.1)]"
        >
          <div className="flex gap-3 items-start">
            <div
              className={`rounded-xl p-2.5 ${
                title === "Total Revenue"
                  ? "bg-purple-100"
                  : title === "Total Orders"
                    ? "bg-green-100"
                    : title === "Total Customers"
                      ? "bg-orange-100"
                      : "bg-blue-100"
              }`}
            >
              {title === "Total Revenue" ? (
                <Wallet stroke="purple" />
              ) : title === "Total Orders" ? (
                <ShoppingCart stroke="green" />
              ) : title === "Total Customers" ? (
                <Users stroke="orange" />
              ) : (
                <Package stroke="blue" />
              )}
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-gray-600 text-sm mb-1">
                {title}
              </span>
              <span className="text-xl text-gray-800 font-semibold mb-1.5">
                {value}
              </span>
              <span className="font-semibold text-xs flex items-center gap-1">
                <span className="bg-green-100 rounded-full p-0.5">
                  <ArrowUp
                    stroke="oklch(72.3% 0.219 149.579)"
                    strokeWidth={4}
                    width={10}
                    height={10}
                  />
                </span>
                <span className="text-green-500">{percentage}</span>
                <span className="text-gray-500">vs last 7 days</span>
              </span>
            </div>
          </div>
          <MiniChart data={data} color={color} />
        </div>
      ))}
    </div>
  );
}
