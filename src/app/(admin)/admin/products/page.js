import ProductFilter from "@/components/admin/products/ProductFilter";
import ProductTable from "@/components/admin/products/ProductTable";
import SearchInput from "@/components/shared/SearchInput";
import Shorting from "@/components/shared/Shorting";
import { Filter, Plus } from "lucide-react";
import Link from "next/link";

export default function products() {
  const sortingOptions = [
    "Newest",
    "Popularity",
    "Better Discount",
    "Price: High to Low",
    "Price: Low to High",
  ];

  const categoryOptions = [
    "All categories",
    "Jeans",
    "Shirt",
    "Top",
    "T-shirt",
  ];

  return (
    <>
      <div className="flex items-start justify-between mb-5">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Products</h1>
          <p className="text-sm text-gray-500">
            Manage and organize your store products.
          </p>
        </div>
        <Link
          href={"/admin/products/add"}
          className="flex items-center rounded-sm gap-1.5 border border-red-500 bg-red-500 hover:bg-white hover:text-red-500 transition-colors duration-500 ease-in-out cursor-pointer text-white text-sm font-semibold py-2.5 px-5"
        >
          <Plus strokeWidth={3} size={18} />
          Add Product
        </Link>
      </div>

      <div className="bg-white rounded-xl p-4 shadow-[0_0_5px_rgba(0,0,0,0.1)]">
        <div className="flex items-center justify-between">
          <SearchInput
            placeholder={"Search products..."}
            textColor="text-gray-400"
            rounded="rounded-md"
            width="w-80"
            strokeWidth="2"
            strokeColor="gray"
            name="search-products"
            focusBorderColor="has-focus:border-gray-400"
          />

          <div className="flex items-center gap-2">
            <Shorting
              sortOptions={categoryOptions}
              width="w-45"
              borderRadius="rounded-md"
              ulOptionsRadius="group-hover:rounded-b-md"
              sortBy={false}
            />
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
          </div>
        </div>
        <ProductFilter />
      </div>

      <ProductTable />
    </>
  );
}
