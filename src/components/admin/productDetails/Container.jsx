import React from "react";

export default function Container({ children }) {
  return (
    <div className="shadow-[0_0_5px_rgba(0,0,0,0.1)] p-5 rounded-md bg-white">
      {children}
    </div>
  );
}
