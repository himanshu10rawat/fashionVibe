"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function ProductImage({ images }) {
  const [previewImg, setPreviewImg] = useState(images.length ? images[0] : "");

  return (
    <div className="flex gap-3">
      <div className="grid grid-rows-4 gap-2.5 peer">
        {images.map((img, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setPreviewImg(img)}
            className="cursor-pointer"
          >
            <div
              className={`relative overflow-hidden aspect-square w-25 border-2 ${previewImg === img ? "border-red-500" : "border-gray-200"} p-3 rounded-sm bg-gray-100`}
            >
              <Image
                src={img}
                alt="Sports Shoes"
                fill
                sizes="100%"
                className="object-cover"
              />
            </div>
          </button>
        ))}
      </div>
      <div className="bg-gray-200 p-5 rounded-md w-[calc(100%-100px)] overflow-hidden relative aspect-square">
        <Image
          src={previewImg}
          alt="Sports Shoes"
          fill
          sizes="100%"
          className="object-cover"
        />
      </div>
    </div>
  );
}
