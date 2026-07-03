import WishlistCard from "@/components/wishlist/WishlistCard";

export default function Wishlist() {
  const wishlistItems = [
    {
      id: 1,
      image: "/modal-images/men1.jpg",
      title: "STUDIO NEXX Men Straight Fit Mid-Rise Jeans",
      price: "898",
      discountPrice: "1,999",
      offer: "55%",
    },
    {
      id: 2,
      image: "/modal-images/men1.jpg",
      title: "STUDIO NEXX Men Slim Fit Stretch Chinos",
      price: "749",
      discountPrice: "1,599",
      offer: "53%",
    },
    {
      id: 3,
      image: "/modal-images/men1.jpg",
      title: "STUDIO NEXX Men Relaxed Fit Cargo Pants",
      price: "999",
      discountPrice: "2,499",
      offer: "60%",
    },
    {
      id: 4,
      image: "/modal-images/men1.jpg",
      title: "STUDIO NEXX Men Tapered Fit Jogger Jeans",
      price: "649",
      discountPrice: "1,299",
      offer: "50%",
    },
    {
      id: 5,
      image: "/modal-images/men1.jpg",
      title: "STUDIO NEXX Men Regular Fit Formal Trousers",
      price: "849",
      discountPrice: "1,799",
      offer: "53%",
    },
    {
      id: 6,
      image: "/modal-images/men1.jpg",
      title: "STUDIO NEXX Men Bootcut Denim Jeans",
      price: "929",
      discountPrice: "2,199",
      offer: "58%",
    },
    {
      id: 7,
      image: "/modal-images/men1.jpg",
      title: "STUDIO NEXX Men Skinny Fit Stretch Jeans",
      price: "799",
      discountPrice: "1,699",
      offer: "53%",
    },
    {
      id: 8,
      image: "/modal-images/men1.jpg",
      title: "STUDIO NEXX Men Wide Leg Denim Trousers",
      price: "1,099",
      discountPrice: "2,299",
      offer: "52%",
    },
    {
      id: 9,
      image: "/modal-images/men1.jpg",
      title: "STUDIO NEXX Men Distressed Slim Fit Jeans",
      price: "879",
      discountPrice: "1,999",
      offer: "56%",
    },
    {
      id: 10,
      image: "/modal-images/men1.jpg",
      title: "STUDIO NEXX Men Pleated Fit Chinos",
      price: "699",
      discountPrice: "1,499",
      offer: "53%",
    },
    {
      id: 11,
      image: "/modal-images/men1.jpg",
      title: "STUDIO NEXX Men Ankle Length Slim Jeans",
      price: "749",
      discountPrice: "1,599",
      offer: "53%",
    },
    {
      id: 12,
      image: "/modal-images/men1.jpg",
      title: "STUDIO NEXX Men Washed Straight Jeans",
      price: "829",
      discountPrice: "1,899",
      offer: "56%",
    },
    {
      id: 13,
      image: "/modal-images/men1.jpg",
      title: "STUDIO NEXX Men Cropped Fit Trousers",
      price: "679",
      discountPrice: "1,399",
      offer: "51%",
    },
    {
      id: 14,
      image: "/modal-images/men1.jpg",
      title: "STUDIO NEXX Men Double Knee Cargo Jeans",
      price: "1,149",
      discountPrice: "2,599",
      offer: "56%",
    },
    {
      id: 15,
      image: "/modal-images/men1.jpg",
      title: "STUDIO NEXX Men Raw Hem Slim Jeans",
      price: "859",
      discountPrice: "1,899",
      offer: "55%",
    },
    {
      id: 16,
      image: "/modal-images/men1.jpg",
      title: "STUDIO NEXX Men Acid Wash Loose Jeans",
      price: "919",
      discountPrice: "2,099",
      offer: "56%",
    },
    {
      id: 17,
      image: "/modal-images/men1.jpg",
      title: "STUDIO NEXX Men Biker Fit Stretch Jeans",
      price: "979",
      discountPrice: "2,199",
      offer: "55%",
    },
    {
      id: 18,
      image: "/modal-images/men1.jpg",
      title: "STUDIO NEXX Men Slim Fit Linen Trousers",
      price: "749",
      discountPrice: "1,649",
      offer: "55%",
    },
    {
      id: 19,
      image: "/modal-images/men1.jpg",
      title: "STUDIO NEXX Men Comfort Fit Track Pants",
      price: "599",
      discountPrice: "1,199",
      offer: "50%",
    },
    {
      id: 20,
      image: "/modal-images/men1.jpg",
      title: "STUDIO NEXX Men High Rise Straight Jeans",
      price: "949",
      discountPrice: "2,099",
      offer: "55%",
    },
  ];
  return (
    <section className="p-10">
      <h1 className="text-gray-800 text-lg mb-10">
        <b>My Wishlist</b> 519 items
      </h1>
      <div className="grid grid-cols-5 gap-10">
        <WishlistCard wishlistItems={wishlistItems} />
      </div>
    </section>
  );
}
