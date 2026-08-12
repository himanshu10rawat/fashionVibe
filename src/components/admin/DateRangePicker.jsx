"use client";

import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { CalendarDays, ChevronDown } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { format } from "date-fns";

export default function DateRangePicker() {
  const [date, setDate] = useState({
    from: new Date(),
    to: new Date(),
  });

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          className="flex items-center gap-3 border border-gray-200 rounded-lg px-4 py-2.5 bg-white hover:bg-gray-50 transition-colors"
        >
          <CalendarDays size={18} />

          <span className="text-sm font-medium">
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "MMM d")} –{" "}
                  {format(date.to, "MMM d, yyyy")}
                </>
              ) : (
                format(date.from, "MMM d, yyyy")
              )
            ) : (
              "Select date"
            )}
          </span>

          <ChevronDown size={16} />
        </button>
      </PopoverTrigger>

      <PopoverContent className="w-auto p-0" align="end">
        <Calendar
          mode="range"
          selected={date}
          onSelect={setDate}
          numberOfMonths={2}
        />
      </PopoverContent>
    </Popover>
  );
}
