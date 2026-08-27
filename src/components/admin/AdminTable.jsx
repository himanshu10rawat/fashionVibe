"use client";

import Modal from "@/components/shared/Modal";
import { ChevronLeft, ChevronRight, Eye, Pencil, Trash } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function AdminTable({ tableData, page, urlTitle, columns }) {
  const [openItemId, setOpenItemId] = useState(null);

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
              {columns.map((col) => (
                <th key={col.key} className="p-4 font-semibold capitalize">
                  {col.label}
                </th>
              ))}
              <th className="p-4 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr key={row.id} className="border-b border-gray-100 text-sm">
                <td className="p-3">
                  <div className="flex items-center justify-center">
                    <input
                      onChange={() => handleSelect(row.id)}
                      type="checkbox"
                      id={row.id}
                      name={row.name}
                      className="w-4 h-4"
                    />
                  </div>
                </td>
                {columns.map((col) => (
                  <td key={col.key} className="p-3">
                    {col.render ? col.render(row) : row[col.key]}
                  </td>
                ))}
                <td className="p-3">
                  <div className="flex items-center gap-2.5">
                    {page === "product" && (
                      <Link
                        href={`/admin/${urlTitle}/${row.id}`}
                        className="bg-white p-2 rounded-sm shadow-[0_0_5px_rgba(0,0,0,0.2)] cursor-pointer"
                      >
                        <Eye size={12} stroke="gray" />
                      </Link>
                    )}

                    <Link
                      href={`/admin/${urlTitle}/${row.id}/edit`}
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
                            Are you sure you want to delete &quot;{row.name}{" "}
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
                      open={openItemId === row.id}
                      onOpenChange={(val) => setOpenItemId(val ? row.id : null)}
                    />
                  </div>
                </td>
              </tr>
            ))}
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
