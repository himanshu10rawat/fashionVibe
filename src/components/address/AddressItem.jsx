import AddressForm from "../forms/AddressForm";
import AddressDelete from "./AddressDelete";

export default function AddressItem({
  id,
  isDefault,
  username,
  landmark,
  address,
  city,
  pincode,
  state,
  contact,
}) {
  return (
    <div key={id} className="bg-white shadow shadow-gray-200">
      <div className="px-3 pt-3 pb-5">
        <div className="flex items-center justify-between mb-3">
          <span className="font-bold text-gray-500 text-sm">{username}</span>
        </div>
        <div className="flex flex-col text-gray-500 text-sm">
          <span>{address}</span>
          <span>{landmark}</span>
          <span>
            {city} - {pincode}
          </span>
          <span>{state}</span>
          <span className="mt-4">Mobile: {contact}</span>
        </div>
        {!isDefault && (
          <button
            type="button"
            className="mt-3 text-green-500 uppercase font-bold text-xs cursor-pointer transition-transform duration-200 hover:translate-x-0.5"
          >
            make this default
          </button>
        )}
      </div>
      <div className="grid grid-cols-2 p-1 border-t border-gray-200">
        <AddressForm
          button={"Edit"}
          buttonStyle={
            "border-r border-gray-200 text-center py-2 uppercase text-sm font-bold text-blue-600 cursor-pointer transition-colors duration-200 hover:bg-blue-600 hover:text-white"
          }
          header={"Edit address"}
          username={username}
          mobile={contact}
          pincode={pincode}
          state={state}
          address={address}
          landmark={landmark}
          city={city}
          isDefaultAddress={isDefault}
        />
        <AddressDelete />
      </div>
    </div>
  );
}
