"use client";

import React from "react";
import AdminTable from "../AdminTable";
import Image from "next/image";

export default function ProductsTable() {
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

  const productColumns = [
    {
      key: "name",
      label: "Product",
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
            <p className="text-gray-500 font-medium">SKU: {row.sku}</p>
          </div>
        </div>
      ),
    },
    {
      key: "category",
      label: "Category",
      render: (row) => (
        <span
          className={`py-2 px-4 font-semibold rounded-sm ${
            row.category.toLowerCase() === "men"
              ? "bg-violet-100 text-violet-500"
              : row.category.toLowerCase() === "women"
                ? "bg-red-100 text-red-500"
                : row.category.toLowerCase() === "accessories"
                  ? "bg-blue-100 text-blue-500"
                  : "bg-pink-100 text-pink-500"
          }`}
        >
          {row.category}
        </span>
      ),
    },
    { key: "brand", label: "Brand" },
    { key: "price", label: "Price" },
    {
      key: "stock",
      label: "Stock",
      render: (row) => (
        <span
          className={
            row.stock <= 5
              ? "text-red-500"
              : row.stock <= 15
                ? "text-orange-500"
                : "text-green-500"
          }
        >
          {row.stock}
        </span>
      ),
    },
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
      tableData={productList}
      columns={productColumns}
      page={"product"}
      urlTitle={"products"}
    />
  );
}
