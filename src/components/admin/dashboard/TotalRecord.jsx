import { ArrowUp } from "lucide-react";

export default function TotalRecord({ totalRecord }) {
  const { icon, title, amount, percentDiff } = totalRecord;
  return (
    <div className="bg-white rounded-xl p-3 shadow-[0_0_5px_rgba(0,0,0,0.1)]">
      <div className="flex gap-3 items-start">
        <div className="rounded-xl bg-purple-100 p-2.5">{icon}</div>{" "}
        <div className="flex flex-col">
          <span className="font-semibold text-gray-600 text-sm mb-1">
            {title}
          </span>
          <span className="text-xl text-gray-800 font-semibold mb-1.5">
            {amount}
          </span>
          <span className="font-semibold text-xs flex items-center gap-1">
            <span className="bg-green-100 rounded-full p-0.5">
              <ArrowUp
                stroke="oklch(72.3% 0.219 149.579)"
                strokeWidth={4}
                width={10}
                height={10}
              />
            </span>
            <span className="text-green-500">{percentDiff}%</span>
            <span className="text-gray-500">vs last 7 days</span>
          </span>
        </div>
      </div>
    </div>
  );
}
