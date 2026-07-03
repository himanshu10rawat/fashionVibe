import Banner from "@/components/home/Banner";
import Card from "@/components/home/Card";
import CategoriesCard from "@/components/category/CategoriesCard";
import LuxCard from "@/components/category/LuxCard";
import TopBrandCard from "@/components/category/TopBrandCard";
import TrendingCard from "@/components/category/TrendingCard";

export default async function ProductCategory({ params }) {
  const { productCategory } = await params;

  const banners = [
    {
      src: "/banner-images/banner1.jpg",
      alt: "Fashion lady banner 1st",
    },
    {
      src: "/banner-images/banner2.jpg",
      alt: "Fashion lady banner 2nd",
    },
    {
      src: "/banner-images/banner3.jpg",
      alt: "Fashion lady banner 3rd",
    },
    {
      src: "/banner-images/banner4.jpg",
      alt: "Fashion lady banner 4th",
    },
  ];

  return (
    <>
      <Banner banners={banners} controlButtons={true} />
      <section className="px-3 py-5 md:p-10">
        <h2 className="text-xl md:text-4xl mb-3 md:mb-8 font-bold uppercase tracking-widest">
          biggest deals on top brands
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
          <TopBrandCard arrayLength={8} />
        </div>
      </section>
      <section className="px-3 py-5 md:p-10">
        <h2 className="text-xl md:text-4xl mb-3 md:mb-8 font-bold uppercase tracking-widest">
          Categories To Bag
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-5">
          <CategoriesCard arrayLength={6} />
        </div>
      </section>
      <section className="px-3 py-5 md:p-10">
        <h2 className="text-xl md:text-4xl mb-3 md:mb-8 font-bold uppercase tracking-widest">
          Explore Top Brands
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-5">
          <TopBrandCard arrayLength={5} />
        </div>
      </section>
      <section className="px-3 py-5 md:p-10">
        <h2 className="text-xl md:text-4xl mb-3 md:mb-8 font-bold uppercase tracking-widest">
          Myntra Luxe
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-5">
          <LuxCard arrayLength={6} />
        </div>
      </section>
      <section className="px-3 py-5 md:p-10">
        <h2 className="text-xl md:text-4xl mb-3 md:mb-8 font-bold uppercase tracking-widest">
          Trending In Indian Wear
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-5">
          <TrendingCard arrayLength={5} />
        </div>
      </section>
      <section className="px-3 py-5 md:p-10">
        <h2 className="text-xl md:text-4xl mb-3 md:mb-8 font-bold uppercase tracking-widest">
          Trending In Sports Wear
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-5">
          <TrendingCard arrayLength={5} />
        </div>
      </section>
      <section className="px-3 py-5 md:p-10">
        <h2 className="text-xl md:text-4xl mb-3 md:mb-8 font-bold uppercase tracking-widest">
          Trending In Footwear
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-5">
          <TrendingCard arrayLength={5} />
        </div>
      </section>
      <section className="px-3 py-5 md:p-10">
        <h2 className="text-xl md:text-4xl mb-3 md:mb-8 font-bold uppercase tracking-widest">
          Trending In Accessories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-5">
          <TrendingCard arrayLength={5} />
        </div>
      </section>
    </>
  );
}
