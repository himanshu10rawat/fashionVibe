import OrderCard from "@/components/orders/OrderCard";
import OrderFilter from "@/components/orders/OrderFilter";
import Profile from "@/components/profile/Profile";
import SearchInput from "@/components/shared/SearchInput";

export default function Orders() {
  const orderList = [
    {
      status: "delivered",
      date: "Thu, 30 Apr, 5:30 PM",
      productImage: "/modal-images/men1.jpg",
      brandName: "Roadster",
      description: "The Life Co. Men Light Stretchable jeans",
      size: "32",
      exchangeReturnTime: "Thu, 7 May",
      ratting: "4",
      review: "Good Quality and Comfortable",
      reviewImages: [
        "/modal-images/men1.jpg",
        "/modal-images/men1.jpg",
        "/modal-images/men1.jpg",
        "/modal-images/women1.jpg",
      ],
    },
    {
      status: "shipped",
      date: "Mon, 12 May, 2:15 PM",
      productImage: "/modal-images/men1.jpg",
      brandName: "H&M",
      description: "Men Slim Fit Cotton Casual Shirt",
      size: "L",
      exchangeReturnTime: "Mon, 19 May",
      ratting: "5",
      review: "Excellent fabric, fits perfectly",
      reviewImages: ["/modal-images/men1.jpg", "/modal-images/men1.jpg"],
    },
    {
      status: "cancelled",
      date: "Wed, 21 May, 11:00 AM",
      productImage: "/modal-images/women1.jpg",
      brandName: "Zara",
      description: "Women Floral Print A-Line Dress",
      size: "M",
      exchangeReturnTime: "N/A",
    },
    {
      status: "out for delivery",
      date: "Fri, 6 Jun, 9:45 AM",
      productImage: "/modal-images/women1.jpg",
      brandName: "Levi's",
      description: "Women High Rise Skinny Fit Jeans",
      size: "30",
      exchangeReturnTime: "Fri, 13 Jun",
      ratting: "3",
      review: "Decent but color faded after wash",
      reviewImages: [
        "/modal-images/women1.jpg",
        "/modal-images/women1.jpg",
        "/modal-images/men1.jpg",
      ],
    },
    {
      status: "delivered",
      date: "Sun, 15 Jun, 6:20 PM",
      productImage: "/modal-images/men1.jpg",
      brandName: "Puma",
      description: "Men Running Sports Shoes",
      size: "9",
      exchangeReturnTime: "Sun, 22 Jun",
      ratting: "4",
      review: "Very comfortable for daily jogging",
      reviewImages: ["/modal-images/men1.jpg"],
    },
  ];

  return (
    <Profile>
      <div className="flex items-center justify-between">
        <div className="text-gray-800">
          <h2 className="text-lg font-semibold ">All orders</h2>
          <p className="text-sm">from anytime</p>
        </div>
        <div className="flex items-center gap-2">
          <SearchInput
            placeholder={"Search"}
            width="80"
            focusBorderColor="has-focus:border-gray-800"
            textColor="text-gray-800"
            placeholderColor="placeholder:text-gray-800"
            strokeColor="#1e2939"
            strokeWidth="2"
          />
          <OrderFilter />
        </div>
      </div>
      <div className="p-3 bg-gray-100 mt-5">
        <OrderCard orderList={orderList} />
      </div>
    </Profile>
  );
}
