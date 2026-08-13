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
    <div className="bg-white rounded-xl p-3 shadow-[0_0_5px_rgba(0,0,0,0.1)]">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-bold text-gray-800 text-sm">Recent Orders</h2>
        <Link
          className="text-sm text-blue-500 font-bold"
          href={"/view-all-recent-orders"}
        >
          View All
        </Link>
      </div>

      <table className="w-full">
        <thead>
          <tr>
            {orderListHeading.map((heading) => (
              <th key={heading} className="text-left capitalize">
                {heading}
              </th>
            ))}
            <th className="text-left capitalize">action</th>
          </tr>
        </thead>
        <tbody>
          {orderList.map(({ orderId, customer, amount, status, date }) => (
            <tr key={orderId}>
              <td>{orderId}</td>
              <td>{customer}</td>
              <td>{amount}</td>
              <td>{status}</td>
              <td>{date}</td>
              <td className="text-center">
                <Eye size={16} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
