"use client";

import Modal from "@/components/shared/Modal";
import { ChevronLeft, ChevronRight, Eye, Pencil, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function AdminTable({ tableData, page, urlTitle }) {
  const [openItemId, setOpenItemId] = useState(null);

  const titles = Object.keys(tableData[0]);

  const handleSelect = (itemId) => {
    console.log(`${page} Id:`, itemId);
  };

  const handleSelectAll = () => {};

  const handleDelete = (itemId) => {
    console.log(`${page} Id:`, itemId);
    setOpenItemId(null);
  };

  return (
    <>
      <div className="overflow-x-auto bg-white mt-5 shadow-[0_0_5px_rgba(0,0,0,0.1)] rounded-xl">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 text-left text-gray-500 text-sm bg-gray-100">
              <th className="p-4">
                <div className="flex items-center justify-center">
                  <input
                    onChange={handleSelectAll}
                    type="checkbox"
                    name="selectAll"
                    id="selectAll"
                    className="w-4 h-4"
                  />
                </div>
              </th>
              {titles.map((title) => {
                if (
                  title === "id" ||
                  title === "sku" ||
                  title === "image" ||
                  title === "slug"
                )
                  return;

                if (title === "name")
                  return (
                    <th key={title} className="p-4 font-semibold capitalize">
                      {page}
                    </th>
                  );
                if (title === "createdAt")
                  return (
                    <th key={title} className="p-4 font-semibold capitalize">
                      created at
                    </th>
                  );
                return (
                  <th key={title} className="p-4 font-semibold capitalize">
                    {title}
                  </th>
                );
              })}
              <th className="p-4 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map(
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
                products,
                slug,
              }) => (
                <tr key={id} className="border-b border-gray-100 text-sm">
                  <td className="p-3">
                    <div className="flex items-center justify-center">
                      <input
                        onChange={() => handleSelect(id)}
                        type="checkbox"
                        name={name}
                        id={id}
                        className="w-4 h-4"
                      />
                    </div>
                  </td>
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      {image && (
                        <div className="relative w-10 h-10 bg-gray-200 rounded-sm overflow-hidden">
                          <Image
                            src={image}
                            alt={name}
                            sizes={"100%"}
                            fill
                            className="object-cover object-top"
                          />
                        </div>
                      )}
                      {(name || sku || slug) && (
                        <div>
                          {name && (
                            <h3 className="text-gray-800 font-semibold mb-1">
                              {name}
                            </h3>
                          )}

                          {(sku || slug) && (
                            <p className="text-gray-500 font-medium ">
                              {sku ? `SKU: ${sku}` : slug}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  </td>
                  {category && (
                    <td className="p-3">
                      <span
                        className={`py-2 px-4 font-semibold rounded-sm ${category.toLowerCase() === "men" ? "bg-violet-100 text-violet-500" : category.toLowerCase() === "women" ? "bg-red-100 text-red-500" : category.toLowerCase() === "accessories" ? "bg-blue-100 text-blue-500" : "bg-pink-100 text-pink-500"}`}
                      >
                        {category}
                      </span>
                    </td>
                  )}
                  {brand && (
                    <td className="p-3 font-semibold text-gray-700">{brand}</td>
                  )}
                  {price !== undefined && (
                    <td className="p-3 font-semibold text-gray-700">{price}</td>
                  )}
                  {stock !== undefined && (
                    <td
                      className={`${stock <= 5 ? "text-red-500" : stock <= 15 ? "text-orange-500" : "text-green-500"} p-3 font-semibold`}
                    >
                      {stock}
                    </td>
                  )}
                  {products && (
                    <td className="p-3 text-gray-500">{products}</td>
                  )}
                  {status && (
                    <td className="p-3">
                      <span
                        className={`${status.toLowerCase() === "active" ? "text-green-500 bg-green-100" : "text-red-500 bg-red-100"} font-semibold px-3 py-1.5 rounded-sm capitalize`}
                      >
                        {status}
                      </span>
                    </td>
                  )}
                  {createdAt && (
                    <td className="p-3 text-gray-500">{createdAt}</td>
                  )}
                  <td className="p-3">
                    <div className="flex items-center gap-2.5">
                      {page === "product" && (
                        <Link
                          href={`/admin/${urlTitle}/${id}`}
                          className="bg-white p-2 rounded-sm shadow-[0_0_5px_rgba(0,0,0,0.2)] cursor-pointer"
                        >
                          <Eye size={12} stroke="gray" />
                        </Link>
                      )}

                      <Link
                        href={`/admin/${urlTitle}/${id}/edit`}
                        className="bg-white p-2 rounded-sm shadow-[0_0_5px_rgba(0,0,0,0.2)] cursor-pointer"
                      >
                        <Pencil size={12} stroke="gray" />
                      </Link>

                      <Modal
                        button={<Trash stroke="red" size={12} />}
                        buttonStyle={
                          "bg-white p-2 rounded-sm shadow-[0_0_5px_rgba(0,0,0,0.2)] cursor-pointer"
                        }
                        header={`Delete ${page}?`}
                        body={
                          <>
                            <p className="mb-5 text-gray-500 font-light">
                              Are you sure you want to delete &quot;{name}{" "}
                              <span className="capitalize">{page}</span>&quot;?
                              This action cannot be undone.
                            </p>
                            <div className="grid grid-cols-2 py-1 border-t border-gray-200">
                              <button
                                onClick={() => setOpenItemId(null)}
                                type="button"
                                className="uppercase text-sm font-bold p-2 text-gray-500 cursor-pointer border-r border-gray-200 transition-colors duration-300 hover:bg-gray-100"
                              >
                                cancel
                              </button>
                              <button
                                onClick={() => handleDelete(id)}
                                type="button"
                                className="uppercase text-sm font-bold p-2 text-red-500 cursor-pointer transition-colors duration-300 hover:bg-gray-100"
                              >
                                Delete {page}
                              </button>
                            </div>
                          </>
                        }
                        open={openItemId === id}
                        onOpenChange={(val) => setOpenItemId(val ? id : null)}
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
            Showing 1 to 8 of 245 {urlTitle}
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
