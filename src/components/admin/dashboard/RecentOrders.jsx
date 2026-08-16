import { Eye } from "lucide-react";
import Link from "next/link";

export default function RecentOrders() {
  const orderList = [
    {
      orderId: "#ORD-12541",
      customer: "Rahul Sharma",
      amount: "₹4,599",
      status: "Delivered",
      date: "Jun 13, 2025",
    },
    {
      orderId: "#ORD-12540",
      customer: "Sneha Verma",
      amount: "₹2,999",
      status: "Processing",
      date: "Jun 13, 2025",
    },
    {
      orderId: "#ORD-12539",
      customer: "Amit Kumar",
      amount: "₹1,299",
      status: "Pending",
      date: "Jun 12, 2025",
    },
    {
      orderId: "#ORD-12538",
      customer: "Priya Singh",
      amount: "₹5,499",
      status: "Delivered",
      date: "Jun 12, 2025",
    },
    {
      orderId: "#ORD-12537",
      customer: "Karan Patel",
      amount: "₹899",
      status: "Cancelled",
      date: "Jun 11, 2025",
    },
  ];

  const orderListHeading = Object.keys(orderList[0]);

  return (
    <div className="bg-white rounded-xl shadow-[0_0_5px_rgba(0,0,0,0.1)]">
      <div className="flex p-3 items-center justify-between">
        <h2 className="font-bold text-gray-800 text-sm">Recent Orders</h2>
        <Link
          className="text-sm text-blue-500 font-bold"
          href={"/recent-orders"}
        >
          View All
        </Link>
      </div>
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200 bg-gray-50">
            {orderListHeading.map((heading) => (
              <th
                key={heading}
                className="text-left capitalize px-3 py-1.5 text-xs font-normal text-gray-800"
              >
                {heading}
              </th>
            ))}
            <th className="text-left capitalize px-3 py-1.5 text-xs font-normal text-gray-800">
              action
            </th>
          </tr>
        </thead>
        <tbody>
          {orderList.map(({ orderId, customer, amount, status, date }) => (
            <tr
              key={orderId}
              className=" border-b border-gray-200 last:border-0"
            >
              <td className="px-3 py-1.5 text-xs text-gray-800 font-semibold">
                {orderId}
              </td>
              <td className="px-3 py-1.5 text-xs text-gray-800 font-semibold">
                {customer}
              </td>
              <td className="px-3 py-1.5 text-xs text-gray-800 font-semibold">
                {amount}
              </td>
              <td className="px-3 py-1.5 text-xs text-gray-800 font-semibold">
                {status}
              </td>
              <td className="px-3 py-1.5 text-xs text-gray-800 font-semibold">
                {date}
              </td>
              <td className="px-3 py-1.5 text-xs text-gray-800 font-semibold">
                <button
                  type="button"
                  className="shadow-[0_0_5px_rgba(0,0,0,0.1)] bg-white px-3 py-1.5 rounded-sm cursor-pointer"
                >
                  <Eye size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
