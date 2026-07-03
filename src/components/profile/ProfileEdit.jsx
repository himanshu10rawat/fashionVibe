import { Verified } from "lucide-react";

export default function ProfileEdit() {
  const contactDetails = [
    {
      title: "mobile number",
      value: "9217656745",
    },
    {
      title: "email",
      value: "hr14638@gmail.com",
    },
  ];
  return (
    <div className="border border-gray-300 p-10">
      <h2 className="text-gray-800 capitalize text-lg font-bold border-b border-gray-300 pb-5 mb-10">
        Edit Details
      </h2>
      <div className="flex flex-col gap-5">
        {contactDetails.map(({ title, value }) => (
          <div
            key={title}
            className="flex items-center justify-between p-4 border border-gray-300"
          >
            <div className="flex flex-col">
              <span className="text-xs capitalize text-gray-400 mb-1.5">
                {title}
              </span>
              <div className="flex items-center gap-0.5">
                <span className="text-sm text-gray-800">{value}</span>{" "}
                <Verified
                  strokeWidth={2}
                  stroke="white"
                  fill="green"
                  width={20}
                  height={20}
                />
              </div>
            </div>
            <button
              type="button"
              className="uppercase text-sm font-bold text-gray-800 border border-gray-300 w-1/2 p-3 cursor-pointer transition-colors duration-300 hover:bg-gray-100"
            >
              change
            </button>
          </div>
        ))}
      </div>
      <button
        type="button"
        className="uppercase bg-red-400 text-white text-sm font-bold cursor-pointer transition-colors duration-300 hover:bg-red-500 p-3 mt-10 w-full block"
      >
        save details
      </button>
    </div>
  );
}
