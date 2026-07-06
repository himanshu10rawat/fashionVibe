import OrderFilter from "@/components/orders/OrderFilter";
import Profile from "@/components/profile/Profile";
import SearchInput from "@/components/shared/SearchInput";

export default function Orders() {
  const filterItems = {
    status: ["all", "on the way", "delivered", "cancelled", "returned"],
    time: ["anytime", "last 30 days", "last 6 months", "last year"],
  };

  const filterTitles = Object.keys(filterItems);

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
          <OrderFilter filterItems={filterItems} filterTitles={filterTitles} />
        </div>
      </div>
    </Profile>
  );
}
