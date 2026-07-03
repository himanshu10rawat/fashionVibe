import Link from "next/link";

export default function ProfileDetails() {
  const detailsList = [
    { title: "full name", value: "Himanshu Rawat" },
    { title: "mobile number", value: "9217656745" },
    { title: "email ID", value: "hr14638@gmail.com" },
    { title: "gender", value: "Male" },
    { title: "date of birth", value: "20/08/1998" },
    { title: "location", value: "Noida" },
    { title: "alternate mobile", value: "8448701868" },
  ];
  return (
    <div className="border border-gray-300 px-50 py-10">
      <h2 className="text-gray-800 capitalize text-lg font-bold border-b border-gray-300 pb-5 mb-10">
        Profile Details
      </h2>
      <ul className="flex flex-col gap-5">
        {detailsList.map(({ title, value }) => (
          <li
            key={title}
            className="flex items-center justify-between text-gray-600"
          >
            <span className="capitalize w-1/2">{title}</span>
            <span className="w-1/2">{value}</span>
          </li>
        ))}
      </ul>
      <Link
        href={"/profile/edit"}
        className="uppercase bg-red-400 text-white text-sm font-bold cursor-pointer transition-colors duration-300 hover:bg-red-500 p-3 mt-10 w-full block text-center"
      >
        edit
      </Link>
    </div>
  );
}
