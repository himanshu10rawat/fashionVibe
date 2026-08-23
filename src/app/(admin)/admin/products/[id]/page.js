import ActionButtons from "@/components/admin/productDetails/ActionButtons";
import Container from "@/components/admin/productDetails/Container";
import ProductId from "@/components/admin/productDetails/ProductId";
import ProductImage from "@/components/admin/productDetails/ProductImage";
import { ArrowLeft, IndianRupee } from "lucide-react";
import Link from "next/link";

const product = {
  id: "PRD-00001",
  name: "Nike Air Max 270",
  brand: "Nike",
  category: "Men",
  subCategory: "Shoes",
  sku: "NK270001",

  price: 4599,
  discountPrice: 3999,
  stock: 24,

  status: "Active",

  stockStatus: "In Stock",

  description:
    "Nike Air Max 270 combines modern style with lightweight comfort. Designed for everyday wear with a breathable upper and responsive cushioning.",

  images: [
    "/products/shoes1.jpg",
    "/products/shoes2.jpg",
    "/products/shoes3.jpg",
    "/products/shoes4.jpg",
  ],

  sizes: ["7", "8", "9", "10", "11"],
  colors: ["Black", "White", "Blue"],

  createdAt: "Jun 12, 2025",
  updatedAt: "Jun 13, 2025",
};

export default function ProductDetails() {
  const productId = <ProductId />;
  return (
    <div>
      <Link
        href={"/admin/products"}
        className="flex items-center gap-2 text-red-500 font-medium mb-5"
      >
        <ArrowLeft size={18} /> Back to Products
      </Link>
      <div className="flex justify-between mb-10">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Product Details: {productId}
          </h1>
          <p className="text-sm text-gray-500">
            View complete information about this product.
          </p>
        </div>
        <ActionButtons />
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        <Container>
          <ProductImage images={product.images} />
        </Container>
        <Container>
          <h2 className="text-lg font-semibold text-gray-800">
            Product Information
          </h2>
          <div className="border-b border-gray-200 py-5 grid grid-cols-2">
            <span className="text-gray-600">Product Name</span>{" "}
            <span className="text-gray-800 font-semibold">{product.name}</span>
          </div>
          <div className="border-b border-gray-200 py-5 grid grid-cols-2">
            <span className="text-gray-600">Brand</span>{" "}
            <span className="text-gray-800 font-semibold">{product.brand}</span>
          </div>
          <div className="border-b border-gray-200 py-5 grid grid-cols-2">
            <span className="text-gray-600">Category</span>{" "}
            <span className="text-gray-800 font-semibold">
              {product.category}/{product.subCategory}
            </span>
          </div>
          <div className="border-b border-gray-200 py-5 grid grid-cols-2">
            <span className="text-gray-600">SKU</span>{" "}
            <span className="text-gray-800 font-semibold">{product.sku}</span>
          </div>
          <div className="border-b border-gray-200 py-5 grid grid-cols-2">
            <span className="text-gray-600">Status</span>{" "}
            <span
              className={`text-gray-800 font-semibold py-2 px-4 rounded-sm w-max ${product.status.toLowerCase() === "active" ? "text-green-500 bg-green-100" : ""}`}
            >
              {product.status}
            </span>
          </div>
        </Container>
        <Container>
          <h2 className="text-lg font-semibold text-gray-800">
            Pricing & Inventory
          </h2>
          <div className="border-b border-gray-200 py-5 grid grid-cols-2">
            <span className="text-gray-600">Price</span>{" "}
            <span className="text-gray-800 font-semibold flex items-center">
              <IndianRupee size={16} /> {product.price}
            </span>
          </div>
          <div className="border-b border-gray-200 py-5 grid grid-cols-2">
            <span className="text-gray-600">Discount Price</span>{" "}
            <span className="text-red-500 font-semibold flex items-center">
              <IndianRupee size={16} /> {product.discountPrice}
            </span>
          </div>
          <div className="border-b border-gray-200 py-5 grid grid-cols-2">
            <span className="text-gray-600">Stock Quantity</span>{" "}
            <span className="text-gray-800 font-semibold">{product.stock}</span>
          </div>
          <div className="border-b border-gray-200 py-5 grid grid-cols-2">
            <span className="text-gray-600">Stock Status</span>{" "}
            <span
              className={`text-gray-800 font-semibold py-2 px-4 rounded-sm w-max ${product.stockStatus.toLowerCase() === "in stock" ? "text-green-500 bg-green-100" : ""}`}
            >
              {product.stockStatus}
            </span>
          </div>
        </Container>
        <Container>
          <h2 className="text-lg font-semibold text-gray-800 mb-5">
            Descriptions
          </h2>
          <p className="text-gray-500">{product.description}</p>
        </Container>
        <Container>
          <h2 className="text-lg font-semibold text-gray-800 mb-5">
            Product Variants
          </h2>
          <div className="mb-8">
            <h3 className="font-semibold text-gray-600 mb-4">Sizes</h3>
            <div className="flex items-center gap-4">
              {product.sizes.map((size) => (
                <span
                  key={size}
                  className="bg-white rounded-sm h-12 w-12 flex items-center justify-center shadow-[0_0_3px_rgba(0,0,0,0.3)]"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-600 mb-4">Colors</h3>
            <div className="flex items-center gap-4">
              {product.colors.map((color) => (
                <div key={color} className="flex items-center gap-2">
                  <span
                    className="block w-8 h-8 rounded-full border-2"
                    style={{ backgroundColor: color }}
                  ></span>
                  <span className="font-medium">{color}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
        <Container>
          <h2 className="text-lg font-semibold text-gray-800 mb-5">
            Product Information
          </h2>
          <div className="border-b border-gray-200 py-5 grid grid-cols-2">
            <span className="text-gray-600">Created At</span>{" "}
            <span className="text-gray-800 font-semibold">
              {product.createdAt}
            </span>
          </div>
          <div className="border-b border-gray-200 py-5 grid grid-cols-2">
            <span className="text-gray-600">Last Updated</span>{" "}
            <span className="text-gray-800 font-semibold">
              {product.updatedAt}
            </span>
          </div>
          <div className="border-b border-gray-200 py-5 grid grid-cols-2">
            <span className="text-gray-600">Product ID</span>{" "}
            <span className="text-gray-800 font-semibold">{product.id}</span>
          </div>
        </Container>
      </div>
    </div>
  );
}
