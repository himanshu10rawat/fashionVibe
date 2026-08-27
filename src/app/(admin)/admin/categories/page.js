import CategoriesTable from "@/components/admin/categories/CategoriesTable";
import SearchInput from "@/components/shared/SearchInput";
import Shorting from "@/components/shared/Shorting";
import { ChevronRight, Download, Filter, Plus } from "lucide-react";
import Link from "next/link";

export default function categories() {
  const sortingOptions = [
    "Newest",
    "Popularity",
    "Better Discount",
    "Price: High to Low",
    "Price: Low to High",
  ];

  return (
    <>
      <div className="flex items-start justify-between mb-5">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Categories</h1>
          <div className="text-sm text-gray-500 font-medium flex items-center gap-1 mt-2 mb-3">
            <Link className="flex items-center gap-0.5" href={"/admin"}>
              Dashboard <ChevronRight size={16} />
            </Link>
            <span className="text-red-500">Categories</span>
          </div>
          <p className="text-sm text-gray-500">
            Manage all product categories from here. You can add, edit or remove
            categories.
          </p>
        </div>
        <Link
          href={"/admin/categories/add"}
          className="flex items-center rounded-sm gap-1.5 border border-red-500 bg-red-500 hover:bg-white hover:text-red-500 transition-colors duration-500 ease-in-out cursor-pointer text-white text-sm font-semibold py-2.5 px-5"
        >
          <Plus strokeWidth={3} size={18} />
          Add Category
        </Link>
      </div>

      <div className="bg-white rounded-xl p-4 shadow-[0_0_5px_rgba(0,0,0,0.1)]">
        <div className="flex items-center justify-between">
          <SearchInput
            placeholder={"Search categories..."}
            textColor="text-gray-400"
            rounded="rounded-md"
            width="w-80"
            strokeWidth="2"
            strokeColor="gray"
            name="search-categories"
            bgColor="bg-gray-50"
            focusBgColor="hover:bg-white"
            focusBorderColor="has-focus:border-gray-400"
          />

          <div className="flex items-center gap-2">
            <Shorting
              sortOptions={sortingOptions}
              width="w-45"
              borderRadius="rounded-md"
              ulOptionsRadius="group-hover:rounded-b-md"
            />
            <button
              type="button"
              className="flex items-center gap-2 h-[41.6px] rounded-md border border-gray-300 text-sm py-2 px-3 text-gray-800 bg-white cursor-pointer font-semibold duration-300 ease-in-out transition-shadow hover:drop-shadow"
            >
              <Filter size={18} /> Filters
            </button>
            <button
              type="button"
              className="flex items-center gap-2 h-[41.6px] rounded-md border border-gray-300 text-sm py-2 px-3 text-gray-800 bg-white cursor-pointer font-semibold duration-300 ease-in-out transition-shadow hover:drop-shadow"
            >
              <Download size={18} /> Export
            </button>
          </div>
        </div>
      </div>

      <CategoriesTable />
    </>
  );
}
