import Image from "next/image";
import Link from "next/link";

export default function LowStockProducts() {
  const productList = [
    {
      name: "Nike Air Max 270",
      stock: 4,
      image: "/fashion-logo.png",
    },
    {
      name: "Puma Essentials Hoodie",
      stock: 6,
      image: "/fashion-logo.png",
    },
    {
      name: "Adidas Running Shoes",
      stock: 8,
      image: "/fashion-logo.png",
    },
    {
      name: "Fossil Chronograph Watch",
      stock: 3,
      image: "/fashion-logo.png",
    },
  ];
  return (
    <div className="bg-white rounded-xl p-3 shadow-[0_0_5px_rgba(0,0,0,0.1)]">
      <div className="flex items-center justify-between mb-2">
        <h2 className="font-bold text-gray-800 text-sm">Low Stock Products</h2>
        <Link
          className="text-sm text-blue-500 font-bold"
          href={"/low-stock-products"}
        >
          View All
        </Link>
      </div>
      {productList.map(({ name, stock, image }) => (
        <div
          key={name}
          className="border-b last:border-0 border-gray-200 py-1.5 flex justify-between items-center"
        >
          <div className="flex items-center gap-2.5">
            <div className="rounded-sm bg-gray-100 p-2">
              <div className="relative h-8 w-8">
                <Image
                  src={image}
                  className="object-cover"
                  alt={name}
                  fill
                  sizes="100%"
                />
              </div>
            </div>
            <div className="text-xs font-semibold">
              <h3 className="text-gray-800 mb-1">{name}</h3>
              <div className="text-red-600">
                Stock: <span>{stock}</span>
              </div>
            </div>
          </div>
          <button className="shadow-[0_0_2px_rgba(0,0,0,0.2)] text-xs text-gray-800 px-3 rounded-sm py-1.5 cursor-pointer">
            View
          </button>
        </div>
      ))}
    </div>
  );
}
