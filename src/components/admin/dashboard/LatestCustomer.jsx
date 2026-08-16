import Image from "next/image";
import Link from "next/link";

export default function LatestCustomer() {
  const customers = [
    {
      name: "Rohit Sharma",
      email: "rohit@gmail.com",
      date: "Jun 13, 2025",
      avatar: "/modal-images/men1.jpg",
    },
    {
      name: "Anjali Mehta",
      email: "anjali@gmail.com",
      date: "Jun 13, 2025",
      avatar: "/modal-images/women1.jpg",
    },
    {
      name: "Vikram Joshi",
      email: "vikram@gmail.com",
      date: "Jun 12, 2025",
      avatar: "/modal-images/men1.jpg",
    },
    {
      name: "Neha Gupta",
      email: "neha@gmail.com",
      date: "Jun 12, 2025",
      avatar: "/modal-images/women1.jpg",
    },
    {
      name: "Arjun Malhotra",
      email: "arjun@gmail.com",
      date: "Jun 11, 2025",
      avatar: "/modal-images/men1.jpg",
    },
  ];
  return (
    <div className="bg-white rounded-xl p-3 shadow-[0_0_5px_rgba(0,0,0,0.1)]">
      <div className="flex items-center justify-between mb-2">
        <h2 className="font-bold text-gray-800 text-sm">Latest Customers</h2>
        <Link
          className="text-sm text-blue-500 font-bold"
          href={"/latest-customers"}
        >
          View All
        </Link>
      </div>

      {customers.map(({ name, email, date, avatar }) => (
        <div
          key={name}
          className="border-b last:border-0 border-gray-200 py-1.5 flex justify-between items-center"
        >
          <div className="flex items-center gap-2.5">
            <div className="relative h-8 w-8 rounded-full bg-gray-100 overflow-hidden">
              <Image
                src={avatar}
                className="object-cover object-top"
                alt={name}
                fill
                sizes="100%"
              />
            </div>
            <div className="text-xs">
              <h3 className="text-gray-800 mb-1 font-semibold">{name}</h3>
              <div className="text-gray-600">{email}</div>
            </div>
          </div>
          <div className="text-xs text-gray-800">{date}</div>
        </div>
      ))}
    </div>
  );
}
