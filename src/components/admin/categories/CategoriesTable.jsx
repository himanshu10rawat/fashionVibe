"use client";

import Image from "next/image";
import React from "react";
import AdminTable from "../AdminTable";

export default function CategoriesTable() {
  const categoryList = [
    {
      id: 1,
      name: "Men",
      slug: "men",
      products: 85,
      status: "active",
      image: "/products/shoes1.jpg",
      createdAt: "Jun 12, 2025",
    },
    {
      id: 2,
      name: "Women",
      slug: "women",
      products: 72,
      status: "active",
      image: "/products/shoes1.jpg",
      createdAt: "Jun 11, 2025",
    },
    {
      id: 3,
      name: "Kids",
      slug: "kids",
      products: 34,
      status: "active",
      image: "/products/shoes1.jpg",
      createdAt: "Jun 10, 2025",
    },
    {
      id: 4,
      name: "Shoes",
      slug: "shoes",
      products: 28,
      status: "active",
      image: "/products/shoes1.jpg",
      createdAt: "Jun 9, 2025",
    },
    {
      id: 5,
      name: "Accessories",
      slug: "accessories",
      products: 26,
      status: "inactive",
      image: "/products/shoes1.jpg",
      createdAt: "Jun 8, 2025",
    },
    {
      id: 6,
      name: "Beauty",
      slug: "beauty",
      products: 19,
      status: "active",
      image: "/products/shoes1.jpg",
      createdAt: "Jun 7, 2025",
    },
    {
      id: 7,
      name: "Watches",
      slug: "watches",
      products: 14,
      status: "active",
      image: "/products/shoes1.jpg",
      createdAt: "Jun 6, 2025",
    },
  ];

  const categoryColumns = [
    {
      key: "name",
      label: "Category",
      render: (row) => (
        <div className="flex items-center gap-2">
          <div className="relative w-10 h-10 bg-gray-200 rounded-sm overflow-hidden">
            <Image
              src={row.image}
              alt={row.name}
              sizes={"100%"}
              fill
              className="object-cover object-top"
            />
          </div>
          <div>
            <h3 className="text-gray-800 font-semibold mb-1">{row.name}</h3>
            <p className="text-gray-500 font-medium">{row.slug}</p>
          </div>
        </div>
      ),
    },
    { key: "products", label: "Products" },
    {
      key: "status",
      label: "Status",
      render: (row) => (
        <span
          className={`${
            row.status.toLowerCase() === "active"
              ? "text-green-500 bg-green-100"
              : "text-red-500 bg-red-100"
          } font-semibold px-3 py-1.5 rounded-sm capitalize`}
        >
          {row.status}
        </span>
      ),
    },
    { key: "createdAt", label: "Created At" },
  ];
  return (
    <AdminTable
      tableData={categoryList}
      columns={categoryColumns}
      page={"category"}
      urlTitle={"categories"}
    />
  );
}
