import AddressItem from "./AddressItem";

export default function AddressCard({ addresses }) {
  const defaultAddress = addresses.find((address) => address.isDefault);

  const otherAddresses = addresses.filter((address) => !address.isDefault);

  return (
    <>
      <div className="uppercase font-bold text-xs text-gray-800 mb-2">
        {"default address"}
      </div>
      <AddressItem
        id={defaultAddress.id}
        isDefault={defaultAddress.isDefault}
        username={defaultAddress.username}
        landmark={defaultAddress.landmark}
        address={defaultAddress.address}
        city={defaultAddress.city}
        pincode={defaultAddress.pincode}
        state={defaultAddress.state}
        contact={defaultAddress.contact}
      />
      <div className="uppercase font-bold text-xs text-gray-800 mb-2">
        {"other addresses"}
      </div>
      {otherAddresses.map(
        ({
          id,
          isDefault,
          username,
          landmark,
          address,
          city,
          pincode,
          state,
          contact,
        }) => (
          <AddressItem
            key={id}
            id={id}
            isDefault={isDefault}
            username={username}
            landmark={landmark}
            address={address}
            city={city}
            pincode={pincode}
            state={state}
            contact={contact}
          />
        ),
      )}
    </>
  );
}
