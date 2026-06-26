import { Check } from "lucide-react";

export default function Filter({ items, isColor = false }) {
  return (
    <div className="flex flex-col gap-1.5">
      {items.map(({ item, length }) => (
        <div key={item} className="flex items-center gap-3">
          <div className="relative w-4 h-4 flex items-center justify-center">
            <input
              id={item}
              type="checkbox"
              name={item}
              className="w-4 h-4 cursor-pointer appearance-none border border-gray-400 rounded-xs checked:bg-pink-500 checked:border-pink-500 peer"
            />
            <Check
              width={"80%"}
              height={"80%"}
              strokeWidth={"3"}
              className="absolute pointer-events-none text-white left-1/2 top-1/2 -translate-1/2 hidden peer-checked:block"
            />
          </div>
          <div className="flex items-center gap-1.5">
            {isColor && (
              <span
                style={{ "--itemColor": item.toLowerCase() }}
                className={`inline-block h-4 w-4 border border-gray-300 rounded-[50%] bg-(--itemColor)`}
              ></span>
            )}
            <label
              htmlFor={item}
              className="capitalize text-sm text-gray-700 cursor-pointer"
            >
              {item}{" "}
              {length && (
                <span className="text-xs text-gray-400 font-light">
                  ({length})
                </span>
              )}
            </label>
          </div>
        </div>
      ))}
    </div>
  );
}
