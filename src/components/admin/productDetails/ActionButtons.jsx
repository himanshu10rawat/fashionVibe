"use client";

import { Edit, MoreVertical } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ActionButtons() {
  const { id } = useParams();
  return (
    <div className="flex items-center gap-2.5">
      <Link
        href={`/admin/products/${id}/edit`}
        className="bg-red-500 text-white flex gap-2 items-center px-5 py-3 rounded-sm cursor-pointer transition-shadow duration-300 ease-in-out hover:shadow-md hover:shadow-gray-400"
      >
        <Edit size={20} /> Edit Product
      </Link>
      <button
        type="button"
        className="bg-white text-gray-800 flex items-center p-3 rounded-sm border border-gray-300 cursor-pointer transition-colors duration-300 ease-in-out hover:bg-gray-100"
      >
        <MoreVertical size={20} />
      </button>
    </div>
  );
}
