"use client";

import { useState } from "react";
import Modal from "../shared/Modal";

export default function AddressDelete() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Modal
      button={"Remove"}
      buttonStyle={
        "text-center py-2 uppercase text-sm font-bold text-blue-600 cursor-pointer transition-colors duration-200 hover:bg-blue-600 hover:text-white"
      }
      header={"Delete Confirmation"}
      body={
        <>
          <p className="mb-5 text-gray-500 font-light">
            Are you sure you want to delete this address?
          </p>
          <div className="grid grid-cols-2 py-1 border-t border-gray-200">
            <button
              onClick={() => setIsOpen(false)}
              type="button"
              className="uppercase text-sm font-bold p-2 text-gray-500 cursor-pointer border-r border-gray-200 transition-colors duration-300 hover:bg-gray-200"
            >
              cancel
            </button>
            <button
              onClick={() => setIsOpen(false)}
              type="button"
              className="uppercase text-sm font-bold p-2 text-red-500 cursor-pointer transition-colors duration-300 hover:bg-gray-200"
            >
              delete
            </button>
          </div>
        </>
      }
      open={isOpen}
      onOpenChange={setIsOpen}
    />
  );
}
