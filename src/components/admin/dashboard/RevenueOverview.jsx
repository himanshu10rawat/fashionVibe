import RevenueChart from "../RevenueChart";

export default function RevenueOverview() {
  return (
    <div className="bg-white rounded-xl p-3 shadow-[0_0_5px_rgba(0,0,0,0.1)]">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-semibold text-gray-900">
          Revenue Overview
        </h2>

        <select className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none">
          <option>This Month</option>
          <option>Last Month</option>
          <option>Last 3 Months</option>
          <option>This Year</option>
        </select>
      </div>

      <RevenueChart />
    </div>
  );
}
