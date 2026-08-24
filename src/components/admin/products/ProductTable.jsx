"use client";

import Modal from "@/components/shared/Modal";
import { ChevronLeft, ChevronRight, Eye, Pencil, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const productList = [
  {
    id: 1,
    name: "Nike Air Max 270",
    sku: "NK270001",
    category: "Men",
    brand: "Nike",
    price: "₹4,599",
    stock: 24,
    status: "Active",
    createdAt: "Jun 12, 2025",
    image: "/modal-images/men1.jpg",
  },
  {
    id: 2,
    name: "Puma Essentials Hoodie",
    sku: "PUHOOD001",
    category: "Men",
    brand: "Puma",
    price: "₹2,999",
    stock: 12,
    status: "Active",
    createdAt: "Jun 11, 2025",
    image: "/modal-images/men1.jpg",
  },
  {
    id: 3,
    name: "Adidas Running Shoes",
    sku: "ADRUN001",
    category: "Men",
    brand: "Adidas",
    price: "₹3,499",
    stock: 8,
    status: "Active",
    createdAt: "Jun 10, 2025",
    image: "/modal-images/men1.jpg",
  },
  {
    id: 4,
    name: "Fossil Chronograph Watch",
    sku: "FOSCH001",
    category: "Men",
    brand: "Fossil",
    price: "₹7,999",
    stock: 3,
    status: "Out of Stock",
    createdAt: "Jun 9, 2025",
    image: "/modal-images/men1.jpg",
  },
  {
    id: 5,
    name: "Zara Midi Dress",
    sku: "ZARMD001",
    category: "Women",
    brand: "Zara",
    price: "₹3,299",
    stock: 18,
    status: "Active",
    createdAt: "Jun 8, 2025",
    image: "/modal-images/men1.jpg",
  },
  {
    id: 6,
    name: "Skybags Laptop Backpack",
    sku: "SKYBP001",
    category: "Accessories",
    brand: "Skybags",
    price: "₹2,499",
    stock: 0,
    status: "Out of Stock",
    createdAt: "Jun 7, 2025",
    image: "/modal-images/men1.jpg",
  },
  {
    id: 7,
    name: "Ray-Ban Wayfarer",
    sku: "RAYWB001",
    category: "Accessories",
    brand: "Ray-Ban",
    price: "₹8,499",
    stock: 15,
    status: "Active",
    createdAt: "Jun 6, 2025",
    image: "/modal-images/men1.jpg",
  },
  {
    id: 8,
    name: "Minimalist Face Serum",
    sku: "MINFS001",
    category: "Beauty",
    brand: "Minimalist",
    price: "₹799",
    stock: 32,
    status: "Active",
    createdAt: "Jun 5, 2025",
    image: "/modal-images/men1.jpg",
  },
];

export default function ProductTable() {
  const [openProductId, setOpenProductId] = useState(null);

  const handleProductDelete = (productId) => {
    console.log("Product Id:", productId);
    setOpenProductId(null);
  };

  return (
    <>
      <div className="overflow-x-auto bg-white mt-5 shadow-[0_0_5px_rgba(0,0,0,0.1)] rounded-xl">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 text-left text-gray-500 text-sm">
              <th className="p-3">
                <div className="flex items-center justify-center">
                  <input
                    type="checkbox"
                    name="selectAll"
                    id="selectAll"
                    className="w-4 h-4"
                  />
                </div>
              </th>
              <th className="p-3 font-semibold">Product</th>
              <th className="p-3 font-semibold">Category</th>
              <th className="p-3 font-semibold">Brand</th>
              <th className="p-3 font-semibold">Price</th>
              <th className="p-3 font-semibold">Stock</th>
              <th className="p-3 font-semibold">Status</th>
              <th className="p-3 font-semibold">Created At</th>
              <th className="p-3 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {productList.map(
              ({
                id,
                name,
                sku,
                category,
                brand,
                price,
                stock,
                status,
                createdAt,
                image,
              }) => (
                <tr key={id} className="border-b border-gray-100 text-sm">
                  <td className="p-3">
                    <div className="flex items-center justify-center">
                      <input
                        type="checkbox"
                        name={name}
                        id={id}
                        className="w-4 h-4"
                      />
                    </div>
                  </td>
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <div className="relative w-10 h-10 bg-gray-200 rounded-sm overflow-hidden">
                        <Image
                          src={image}
                          alt={name}
                          sizes={"100%"}
                          fill
                          className="object-cover object-top"
                        />
                      </div>
                      <div>
                        <h3 className="text-gray-800 font-semibold mb-1">
                          {name}
                        </h3>
                        <p className="text-gray-500 font-medium ">SKU: {sku}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-3">
                    <span
                      className={`py-2 px-4 font-semibold rounded-sm ${category.toLowerCase() === "men" ? "bg-violet-100 text-violet-500" : category.toLowerCase() === "women" ? "bg-red-100 text-red-500" : category.toLowerCase() === "accessories" ? "bg-blue-100 text-blue-500" : "bg-pink-100 text-pink-500"}`}
                    >
                      {category}
                    </span>
                  </td>
                  <td className="p-3 font-semibold text-gray-700">{brand}</td>
                  <td className="p-3 font-semibold text-gray-700">{price}</td>
                  <td
                    className={`${stock <= 5 ? "text-red-500" : stock <= 15 ? "text-orange-500" : "text-green-500"} p-3 font-semibold`}
                  >
                    {stock}
                  </td>
                  <td className="p-3">
                    <span
                      className={`${status.toLowerCase() === "active" ? "text-green-500 bg-green-100" : "text-red-500 bg-red-100"} font-semibold px-3 py-1.5 rounded-sm`}
                    >
                      {status}
                    </span>
                  </td>
                  <td className="p-3 text-gray-500">{createdAt}</td>
                  <td className="p-3">
                    <div className="flex items-center gap-2.5">
                      <Link
                        href={`/admin/products/${id}`}
                        className="bg-white p-2 rounded-sm shadow-[0_0_5px_rgba(0,0,0,0.2)] cursor-pointer"
                      >
                        <Eye size={12} stroke="gray" />
                      </Link>
                      <Link
                        href={`/admin/products/${id}/edit`}
                        className="bg-white p-2 rounded-sm shadow-[0_0_5px_rgba(0,0,0,0.2)] cursor-pointer"
                      >
                        <Pencil size={12} stroke="gray" />
                      </Link>
                      <Modal
                        button={<Trash stroke="red" size={12} />}
                        buttonStyle={
                          "bg-white p-2 rounded-sm shadow-[0_0_5px_rgba(0,0,0,0.2)] cursor-pointer"
                        }
                        header={"Delete Product?"}
                        body={
                          <>
                            <p className="mb-5 text-gray-500 font-light">
                              Are you sure you want to delete &quot;{name}
                              &quot;? This action cannot be undone.
                            </p>
                            <div className="grid grid-cols-2 py-1 border-t border-gray-200">
                              <button
                                onClick={() => setOpenProductId(null)}
                                type="button"
                                className="uppercase text-sm font-bold p-2 text-gray-500 cursor-pointer border-r border-gray-200 transition-colors duration-300 hover:bg-gray-100"
                              >
                                cancel
                              </button>
                              <button
                                onClick={() => handleProductDelete(id)}
                                type="button"
                                className="uppercase text-sm font-bold p-2 text-red-500 cursor-pointer transition-colors duration-300 hover:bg-gray-100"
                              >
                                Delete Product
                              </button>
                            </div>
                          </>
                        }
                        open={openProductId === id}
                        onOpenChange={(val) =>
                          setOpenProductId(val ? id : null)
                        }
                      />
                    </div>
                  </td>
                </tr>
              ),
            )}
          </tbody>
        </table>
        <div className="flex items-center justify-between p-3">
          <div className="text-sm font-medium text-gray-500">
            Showing 1 to 8 of 245 products
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-white p-2 rounded-sm shadow-[0_0_5px_rgba(0,0,0,0.2)] cursor-pointer h-8 w-8 text-sm flex items-center justify-center text-gray-600">
              <ChevronLeft size={14} />
            </button>
            <button className="bg-red-500 text-white p-2 rounded-sm shadow-[0_0_5px_rgba(0,0,0,0.2)] cursor-pointer h-8 w-8 text-sm flex items-center justify-center">
              1
            </button>
            <button className="bg-white p-2 rounded-sm shadow-[0_0_5px_rgba(0,0,0,0.2)] cursor-pointer h-8 w-8 text-sm flex items-center justify-center text-gray-600">
              2
            </button>
            <button className="bg-white p-2 rounded-sm shadow-[0_0_5px_rgba(0,0,0,0.2)] cursor-pointer h-8 w-8 text-sm flex items-center justify-center text-gray-600">
              3
            </button>
            <button className="bg-white p-2 rounded-sm shadow-[0_0_5px_rgba(0,0,0,0.2)] cursor-pointer h-8 w-8 text-sm flex items-center justify-center text-gray-600">
              4
            </button>
            <span className="text-sm">...</span>
            <button className="bg-white p-2 rounded-sm shadow-[0_0_5px_rgba(0,0,0,0.2)] cursor-pointer h-8 w-8 text-sm flex items-center justify-center text-gray-600">
              31
            </button>
            <button className="bg-white p-2 rounded-sm shadow-[0_0_5px_rgba(0,0,0,0.2)] cursor-pointer h-8 w-8 text-sm flex items-center justify-center text-gray-600">
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
