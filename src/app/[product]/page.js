import Filter from "@/components/ui/Filter";
import FilterSearch from "@/components/ui/FilterSearch";
import PriceFilter from "@/components/ui/PriceFilter";
import ProductCard from "@/components/ui/ProductCard";
import Shorting from "@/components/ui/Shorting";
import SizeFilter from "@/components/ui/SizeFilter";

export default async function Product({ params }) {
  const { product } = await params;

  const productList = [
    {
      image: "/modal-images/men1.jpg",
      title: "Austin Wood",
      description: "Men striped polo collar t-shirt collection",
      price: "Rs. 413",
      discountPrice: "Rs. 1499",
      offer: "72% off",
      const: "M",
      rating: 4.2,
      reviews: 1832,
    },
    {
      image: "/modal-images/men1.jpg",
      title: "Roadster",
      description: "Men slim fit casual cotton shirt",
      price: "Rs. 539",
      discountPrice: "Rs. 1799",
      offer: "70% off",
      const: "L",
      rating: 4.5,
      reviews: 3421,
    },
    {
      image: "/modal-images/men1.jpg",
      title: "H&M",
      description: "Men regular fit crew neck sweatshirt",
      price: "Rs. 799",
      discountPrice: "Rs. 2499",
      offer: "68% off",
      const: "XL",
      rating: 4.1,
      reviews: 987,
    },
    {
      image: "/modal-images/men1.jpg",
      title: "Puma",
      description: "Men solid round neck sports t-shirt",
      price: "Rs. 629",
      discountPrice: "Rs. 1999",
      offer: "69% off",
      const: "S",
      rating: 4.3,
      reviews: 2154,
    },
    {
      image: "/modal-images/men1.jpg",
      title: "Nike",
      description: "Men dri-fit training polo t-shirt",
      price: "Rs. 999",
      discountPrice: "Rs. 2999",
      offer: "67% off",
      const: "XL",
      rating: 4.6,
      reviews: 5643,
    },
    {
      image: "/modal-images/men1.jpg",
      title: "Levis",
      description: "Men washed denim casual shirt",
      price: "Rs. 874",
      discountPrice: "Rs. 2799",
      offer: "69% off",
      const: "M",
      rating: 4.4,
      reviews: 3876,
    },
    {
      image: "/modal-images/men1.jpg",
      title: "Arrow",
      description: "Men formal slim fit printed shirt",
      price: "Rs. 749",
      discountPrice: "Rs. 2499",
      offer: "70% off",
      const: "L",
      rating: 4.0,
      reviews: 1243,
    },
    {
      image: "/modal-images/men1.jpg",
      title: "Peter England",
      description: "Men self design mandarin collar kurta",
      price: "Rs. 649",
      discountPrice: "Rs. 2199",
      offer: "70% off",
      const: "M",
      rating: 3.9,
      reviews: 876,
    },
    {
      image: "/modal-images/men1.jpg",
      title: "Van Heusen",
      description: "Men checked slim fit casual shirt",
      price: "Rs. 899",
      discountPrice: "Rs. 2999",
      offer: "70% off",
      const: "S",
      rating: 4.2,
      reviews: 2341,
    },
    {
      image: "/modal-images/men1.jpg",
      title: "Adidas",
      description: "Men solid polo neck sports t-shirt",
      price: "Rs. 749",
      discountPrice: "Rs. 2299",
      offer: "67% off",
      const: "XL",
      rating: 4.5,
      reviews: 4532,
    },
    {
      image: "/modal-images/men1.jpg",
      title: "Zara",
      description: "Men textured slim fit henley t-shirt",
      price: "Rs. 1199",
      discountPrice: "Rs. 3499",
      offer: "66% off",
      const: "L",
      rating: 4.3,
      reviews: 1987,
    },
    {
      image: "/modal-images/men1.jpg",
      title: "US Polo Assn",
      description: "Men striped slim fit polo collar shirt",
      price: "Rs. 674",
      discountPrice: "Rs. 1999",
      offer: "66% off",
      const: "M",
      rating: 4.1,
      reviews: 3109,
    },
    {
      image: "/modal-images/men1.jpg",
      title: "Monte Carlo",
      description: "Men self design round neck sweatshirt",
      price: "Rs. 849",
      discountPrice: "Rs. 2599",
      offer: "67% off",
      const: "S",
      rating: 3.8,
      reviews: 654,
    },
    {
      image: "/modal-images/men1.jpg",
      title: "Reebok",
      description: "Men solid training round neck t-shirt",
      price: "Rs. 579",
      discountPrice: "Rs. 1799",
      offer: "68% off",
      const: "XL",
      rating: 4.4,
      reviews: 2876,
    },
    {
      image: "/modal-images/men1.jpg",
      title: "Wrogn",
      description: "Men graphic print oversized t-shirt",
      price: "Rs. 449",
      discountPrice: "Rs. 1499",
      offer: "70% off",
      const: "M",
      rating: 4.0,
      reviews: 1432,
    },
    {
      image: "/modal-images/men1.jpg",
      title: "Being Human",
      description: "Men solid slim fit casual shirt",
      price: "Rs. 699",
      discountPrice: "Rs. 2299",
      offer: "70% off",
      const: "L",
      rating: 3.9,
      reviews: 765,
    },
    {
      image: "/modal-images/men1.jpg",
      title: "Jack & Jones",
      description: "Men printed crew neck full sleeve t-shirt",
      price: "Rs. 524",
      discountPrice: "Rs. 1699",
      offer: "69% off",
      const: "S",
      rating: 4.2,
      reviews: 2198,
    },
    {
      image: "/modal-images/men1.jpg",
      title: "Tommy Hilfiger",
      description: "Men logo embroidered polo collar t-shirt",
      price: "Rs. 1499",
      discountPrice: "Rs. 3999",
      offer: "63% off",
      const: "M",
      rating: 4.7,
      reviews: 6234,
    },
    {
      image: "/modal-images/men1.jpg",
      title: "Calvin Klein",
      description: "Men solid slim fit crew neck t-shirt",
      price: "Rs. 1299",
      discountPrice: "Rs. 3499",
      offer: "63% off",
      const: "XL",
      rating: 4.6,
      reviews: 4321,
    },
    {
      image: "/modal-images/men1.jpg",
      title: "Dennison",
      description: "Men camouflage print round neck t-shirt",
      price: "Rs. 349",
      discountPrice: "Rs. 1199",
      offer: "71% off",
      const: "L",
      rating: 3.7,
      reviews: 543,
    },
    {
      image: "/modal-images/men1.jpg",
      title: "Highlander",
      description: "Men solid slim fit mandarin collar shirt",
      price: "Rs. 449",
      discountPrice: "Rs. 1499",
      offer: "70% off",
      const: "M",
      rating: 4.0,
      reviews: 1876,
    },
    {
      image: "/modal-images/men1.jpg",
      title: "Locomotive",
      description: "Men washed slim fit jeans style shirt",
      price: "Rs. 524",
      discountPrice: "Rs. 1699",
      offer: "69% off",
      const: "S",
      rating: 3.8,
      reviews: 432,
    },
    {
      image: "/modal-images/men1.jpg",
      title: "Flying Machine",
      description: "Men solid slim fit casual denim shirt",
      price: "Rs. 674",
      discountPrice: "Rs. 2199",
      offer: "69% off",
      const: "XL",
      rating: 4.1,
      reviews: 1654,
    },
    {
      image: "/modal-images/men1.jpg",
      title: "Spykar",
      description: "Men printed slim fit polo collar t-shirt",
      price: "Rs. 399",
      discountPrice: "Rs. 1299",
      offer: "69% off",
      const: "M",
      rating: 3.9,
      reviews: 876,
    },
    {
      image: "/modal-images/men1.jpg",
      title: "Pepe Jeans",
      description: "Men solid regular fit round neck t-shirt",
      price: "Rs. 524",
      discountPrice: "Rs. 1699",
      offer: "69% off",
      const: "L",
      rating: 4.3,
      reviews: 2543,
    },
    {
      image: "/modal-images/men1.jpg",
      title: "Lee",
      description: "Men checked regular fit casual shirt",
      price: "Rs. 749",
      discountPrice: "Rs. 2399",
      offer: "69% off",
      const: "S",
      rating: 4.2,
      reviews: 1987,
    },
    {
      image: "/modal-images/men1.jpg",
      title: "Woodland",
      description: "Men solid slim fit outdoor t-shirt",
      price: "Rs. 599",
      discountPrice: "Rs. 1899",
      offer: "68% off",
      const: "XL",
      rating: 4.0,
      reviews: 1123,
    },
    {
      image: "/modal-images/men1.jpg",
      title: "Killer",
      description: "Men printed regular fit casual shirt",
      price: "Rs. 474",
      discountPrice: "Rs. 1599",
      offer: "70% off",
      const: "M",
      rating: 3.8,
      reviews: 654,
    },
    {
      image: "/modal-images/men1.jpg",
      title: "Breakbounce",
      description: "Men solid slim fit polo neck t-shirt",
      price: "Rs. 374",
      discountPrice: "Rs. 1249",
      offer: "70% off",
      const: "L",
      rating: 3.7,
      reviews: 432,
    },
    {
      image: "/modal-images/men1.jpg",
      title: "Hubberholme",
      description: "Men striped regular fit casual shirt",
      price: "Rs. 449",
      discountPrice: "Rs. 1499",
      offer: "70% off",
      const: "S",
      rating: 4.1,
      reviews: 987,
    },
  ];

  const categories = [
    { item: "T-Shirts", length: "354569" },
    { item: "Casual Shirts", length: "128743" },
    { item: "Formal Shirts", length: "89234" },
    { item: "Sweatshirts", length: "76521" },
    { item: "Jackets", length: "98432" },
    { item: "Jeans", length: "243876" },
    { item: "Trousers", length: "112345" },
    { item: "Shorts", length: "67890" },
    { item: "Track Pants", length: "54321" },
    { item: "Ethnic Wear", length: "43210" },
  ];

  const brands = [
    { item: "Nike", length: "354569" },
    { item: "Adidas", length: "128743" },
    { item: "Puma", length: "89234" },
    { item: "Levi's", length: "76521" },
    { item: "H&M", length: "98432" },
    { item: "Zara", length: "243876" },
    { item: "Allen Solly", length: "112345" },
    { item: "Peter England", length: "67890" },
    { item: "Van Heusen", length: "54321" },
    { item: "Arrow", length: "43210" },
  ];

  const colors = [
    { item: "Red", length: "354569" },
    { item: "Blue", length: "128743" },
    { item: "Green", length: "89234" },
    { item: "Yellow", length: "76521" },
    { item: "Black", length: "98432" },
    { item: "White", length: "243876" },
    { item: "Purple", length: "112345" },
    { item: "Pink", length: "67890" },
    { item: "Orange", length: "54321" },
    { item: "Gray", length: "43210" },
  ];

  const discountRanges = [
    {
      item: "10% and above",
    },
    {
      item: "20% and above",
    },
    {
      item: "30% and above",
    },
    {
      item: "40% and above",
    },
    {
      item: "50% and above",
    },
    {
      item: "60% and above",
    },
    {
      item: "70% and above",
    },
    {
      item: "80% and above",
    },
    {
      item: "90% and above",
    },
  ];

  return (
    <>
      <div className="px-5 pt-5">
        <h1 className="font-bold text-gray-800 capitalize">
          {product
            .split("")
            .map((letter) => (letter === "-" ? " " : letter))
            .join("")}{" "}
          <span className="font-normal text-gray-500">- 747110 items</span>
        </h1>
      </div>
      <div className="flex items-baseline border-b border-gray-200 px-5 pt-5 pb-3">
        <div className="w-75 shrink-0">
          <h2 className="uppercase font-bold text-gray-800">Filters</h2>
        </div>
        <div className="flex-1 flex items-center justify-between">
          <SizeFilter />
          <Shorting />
        </div>
      </div>
      <div className="flex">
        <aside className="sticky top-20 self-start w-75 shrink-0 border-r border-gray-200">
          <div className="p-5 border-b border-gray-200">
            <h3 className="uppercase font-semibold text-gray-800 text-sm mb-3">
              categories
            </h3>
            <Filter items={categories} />
          </div>
          <div className="p-5 border-b border-gray-200">
            <FilterSearch filterName={"brand"} />
            <Filter items={brands} />
          </div>
          <div className="p-5 border-b border-gray-200">
            <h3 className="uppercase font-semibold text-gray-800 text-sm mb-3">
              price
            </h3>
            <PriceFilter />
          </div>
          <div className="p-5 border-b border-gray-200">
            <FilterSearch filterName={"color"} />
            <Filter items={colors} isColor={true} />
          </div>
          <div className="p-5 border-b border-gray-200">
            <h3 className="uppercase font-semibold text-gray-800 text-sm mb-3">
              discount range
            </h3>
            <Filter items={discountRanges} />
          </div>
        </aside>
        <main className="flex-1 p-5">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            <ProductCard productList={productList} productCategory={product} />
          </div>
        </main>
      </div>
    </>
  );
}
