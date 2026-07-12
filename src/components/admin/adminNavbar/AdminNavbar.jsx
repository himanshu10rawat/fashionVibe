import SearchInput from "@/components/shared/SearchInput";
import { Bell, Menu, Sun, User } from "lucide-react";

export default function AdminNavbar() {
  return (
    <header className="bg-white shadow py-3 px-10 flex items-center justify-between">
      <div className="flex items-center gap-5">
        <button type="button" className="cursor-pointer">
          <Menu />
        </button>
        <SearchInput
          placeholder={"Search anything..."}
          placeholderColor="text-gray-900"
          rounded="rounded-sm"
          strokeWidth="2"
          strokeColor="gray"
          bgColor="bg-gray-100"
          width="w-100"
        />
      </div>
      <div className="flex items-center gap-8">
        <button type="button" className="cursor-pointer relative">
          <Bell />
          <span className="absolute -top-1.5 -right-1 bg-red-600 text-xs text-white w-4 h-4 rounded-full flex items-center justify-center">
            8
          </span>
        </button>
        <button type="button" className="cursor-pointer">
          <Sun />
        </button>
        <button type="button" className="cursor-pointer">
          <span className="flex items-center justify-center rounded-full h-9 w-9 bg-gray-700">
            <User stroke="white" />
          </span>
        </button>
      </div>
    </header>
  );
}
