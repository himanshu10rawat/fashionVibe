"use client";

import { Sliders } from "lucide-react";
import Modal from "../shared/Modal";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function OrderFilter({ filterItems, filterTitles }) {
  const [modalOpen, setModalOpen] = useState(false);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      status: "all",
      time: "anytime",
    },
  });

  const onSubmit = (data) => {
    console.log("data:", data);

    setModalOpen(false);
  };
  return (
    <Modal
      open={modalOpen}
      onOpenChange={setModalOpen}
      button={
        <>
          <Sliders
            className="rotate-90"
            width={17}
            height={17}
            stroke="#1e2939"
          />
          filters
        </>
      }
      header={"Filter Orders"}
      body={
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="max-h-[calc(100dvh-300px)] overflow-auto">
            {filterTitles.map((title, index) => (
              <div
                key={title}
                className={`${index === 0 && "border-b"} border-gray-200 pb-5`}
              >
                <h2 className="font-semibold text-gray-800 capitalize mb-3">
                  {title}
                </h2>
                <ul className="flex flex-col gap-4">
                  {filterItems[title].map((item) => (
                    <li key={item} className="flex items-center w-fit">
                      <input
                        type="radio"
                        name={title}
                        id={item.replaceAll(" ", "-")}
                        {...register(title)}
                        value={item}
                        className="appearance-none w-4.5 h-4.5 rounded-full border border-gray-500 checked:border-red-500 checked:ring-3 checked:ring-inset checked:ring-white checked:bg-red-500 cursor-pointer"
                      />
                      <label
                        className="capitalize font-light text-gray-800 pl-2 cursor-pointer"
                        htmlFor={item.replaceAll(" ", "-")}
                      >
                        {item}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="w-full grid grid-cols-2 gap-3 pt-4 border-t border-gray-200">
            <button
              onClick={() => reset({ status: "all", time: "anytime" })}
              type="button"
              className="uppercase cursor-pointer font-semibold bg-white text-gray-800 border border-gray-200 transition-opacity duration-200 hover:opacity-75"
            >
              clear filters
            </button>
            <button
              type="submit"
              className="uppercase cursor-pointer font-semibold bg-red-500 text-white p-3 border border-red-500 transition-opacity duration-200 hover:opacity-75"
            >
              apply
            </button>
          </div>
        </form>
      }
    />
  );
}
