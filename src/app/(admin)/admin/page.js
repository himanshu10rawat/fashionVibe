import OrdersOverview from "@/components/admin/dashboard/OrdersOverview";
import RecentOrders from "@/components/admin/dashboard/RecentOrders";
import RevenueOverview from "@/components/admin/dashboard/RevenueOverview";
import TotalRecord from "@/components/admin/dashboard/TotalRecord";
import DateRangePicker from "@/components/admin/DateRangePicker";

export default function Dashboard() {
  return (
    <div>
      <div className="flex items-end justify-between">
        <div>
          <h1 className="font-bold mb-1 text-xl text-gray-800">
            Welcome back, Himanshu! 👋
          </h1>
          <p className="text-gray-600 text-sm">
            Here&apos;s what&apos;s happening with your store today.
          </p>
        </div>
        <DateRangePicker />
      </div>

      <TotalRecord />
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mt-4">
        <RevenueOverview />
        <OrdersOverview />
        <RecentOrders />
      </div>
    </div>
  );
}
