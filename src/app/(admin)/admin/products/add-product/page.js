import AddProductForm from "@/components/forms/AddProductForm";
import { ChevronRight, Plus } from "lucide-react";
import Link from "next/link";

export default function AddProduct() {
  return (
    <>
      <div className="flex items-start justify-between mb-5">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">
            Add Product
          </h1>
          <div className="text-sm text-gray-400 font-medium flex items-center gap-2">
            <Link className="flex items-center gap-0.5" href={"/admin"}>
              Home <ChevronRight size={16} />
            </Link>
            <Link
              className="flex items-center gap-0.5"
              href={"/admin/products"}
            >
              Products <ChevronRight size={16} />
            </Link>
            <span className="text-red-500">Add Product</span>
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            className="rounded-sm border border-white bg-white hover:bg-white hover:text-red-500 shadow-[0_0_2px_rgba(0,0,0,0.2)] transition-colors duration-300 ease-in-out cursor-pointer text-gray-600 text-sm font-semibold py-2.5 px-5"
          >
            Cancel
          </button>
          <button
            type="button"
            className="flex items-center rounded-sm gap-1.5 border border-red-500 bg-red-500 hover:bg-white hover:text-red-500 transition-colors duration-500 ease-in-out cursor-pointer text-white text-sm font-semibold py-2.5 px-5"
          >
            <Plus strokeWidth={3} size={18} />
            Add Product
          </button>
        </div>
      </div>

      <AddProductForm />
    </>
  );
}
