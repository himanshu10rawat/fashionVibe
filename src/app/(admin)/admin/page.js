import TotalRecord from "@/components/admin/dashboard/TotalRecord";
import DateRangePicker from "@/components/admin/DateRangePicker";
import { Package, ShoppingCart, Users, Wallet } from "lucide-react";

export default function Dashboard() {
  const totalRecordList = [
    {
      icon: <Wallet />,
      title: "Total Revenue",
      amount: "125000",
      percentDiff: "15.6",
    },
    {
      icon: <ShoppingCart />,
      title: "Total Orders",
      amount: "158",
      percentDiff: "12.4",
    },
    {
      icon: <Users />,
      title: "Total Customers",
      amount: "87",
      percentDiff: "8.3",
    },
    {
      icon: <Package />,
      title: "Total Products",
      amount: "245",
      percentDiff: "3.2",
    },
  ];
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

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
        {totalRecordList.map((totalRecord) => (
          <TotalRecord key={totalRecord.title} totalRecord={totalRecord} />
        ))}
      </div>
    </div>
  );
}
