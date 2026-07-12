import AddressButton from "@/components/address/AddressButton";
import AddressCard from "@/components/address/AddressCard";
import Profile from "@/components/profile/Profile";

export default function Address() {
  const addresses = [
    {
      id: "addr_001",
      isDefault: true,
      username: "Rahul Verma",
      landmark: "MK School",
      address: "House No. 24, Street No. 5, Model Town",
      city: "Ghaziabad",
      pincode: "201001",
      state: "Uttar Pradesh",
      contact: "9876543210",
    },
    {
      id: "addr_002",
      isDefault: false,
      username: "Rahul Verma",
      landmark: "MK School",
      address: "Plot No. 18, Sector 62, IT Park",
      city: "Noida",
      pincode: "201309",
      state: "Uttar Pradesh",
      contact: "9123456780",
    },
    {
      id: "addr_003",
      isDefault: false,
      username: "Priya Sharma",
      landmark: "MK School",
      address: "Flat No. 302, Sunshine Apartments, Sector 10",
      city: "Lucknow",
      pincode: "226001",
      state: "Uttar Pradesh",
      contact: "9988776655",
    },
  ];

  return (
    <Profile>
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-gray-800 capitalize font-bold text-lg">
          saved addresses
        </h2>
        <AddressButton />
      </div>
      <div className="flex flex-col gap-5">
        <AddressCard addresses={addresses} />
      </div>
    </Profile>
  );
}
