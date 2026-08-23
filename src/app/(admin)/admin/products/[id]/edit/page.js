import ProductForm from "@/components/forms/ProductForm";

export default function EditProduct() {
  const product = {
    id: 1,
    name: "Nike Air Max 270",
    brand: "Nike",
    description: "Nike Air Max 270...",
    category: "Men",
    subCategory: "Shoes",
    price: 4599,
    discountPrice: 3999,
    sku: "NK270001",
    stock: 24,
    stockStatus: "out of stock",
    status: "active",
    sizes: ["S", "M", "XL"],
    colors: ["black", "white", "blue"],
    images: [
      { preview: "/products/shoes1.jpg", isExisting: true },
      { preview: "/products/shoes4.jpg", isExisting: true },
    ],
  };

  return <ProductForm product={product} isEdit={true} />;
}
