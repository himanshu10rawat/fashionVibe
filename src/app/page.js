import Banner from "@/components/home/Banner";
import Card from "@/components/home/Card";
import MultiCarousel from "@/components/home/MultiCarousel";

export default function Home() {
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
          Trending
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          <Card arrayLength={5} />
        </div>
      </section>
      <section className="px-3 py-5 md:p-10">
        <h2 className="text-xl md:text-4xl mb-3 md:mb-8 font-bold uppercase tracking-widest">
          shop by category
        </h2>
        <MultiCarousel />
      </section>
    </>
  );
}
