import AdminFilter from "@/components/admin/AdminFilter";
import AdminTable from "@/components/admin/AdminTable";
import SearchInput from "@/components/shared/SearchInput";
import Shorting from "@/components/shared/Shorting";
import { ChevronRight, Filter, Plus } from "lucide-react";
import Link from "next/link";

export default function products() {
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
          <div className="text-sm text-gray-400 font-medium flex items-center gap-1 mt-2 mb-3">
            <Link className="flex items-center gap-0.5" href={"/admin"}>
              Dashboard <ChevronRight size={16} />
            </Link>
            <span className="text-red-500">Products</span>
          </div>
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
        <AdminFilter />
      </div>

      <AdminTable
        tableData={productList}
        page={"product"}
        urlTitle={"products"}
      />
    </>
  );
}
