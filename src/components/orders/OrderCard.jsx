"use client";

import { Box, Check, ChevronRight, Star, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import ReviewForm from "../forms/ReviewForm";

export default function OrderCard({ orderList }) {
  const [hoverStar, setHoveStar] = useState(null);

  return (
    <>
      {orderList.map(
        ({
          status,
          date,
          productImage,
          brandName,
          description,
          size,
          exchangeReturnTime,
          ratting,
          review,
          reviewImages,
        }) => (
          <div key={description} className="px-5 py-3 bg-white">
            <div className="flex items-center gap-2 mb-3">
              <span className="relative bg-blue-50 rounded-full p-2">
                <Box strokeWidth={1} height={30} width={30} />
                <span className="absolute bg-green-600 rounded-full p-0.5 right-1.5 bottom-1.5">
                  <Check
                    width={10}
                    height={10}
                    stroke="white"
                    strokeWidth={3}
                  />
                </span>
              </span>
              <div className="flex flex-col">
                <span className="text-green-600 font-bold capitalize">
                  {status}
                </span>
                <span className="text-sm font-light text-gray-600 capitalize">
                  on {date}
                </span>
              </div>
            </div>
            <div className="border border-gray-200 rounded-2xl bg-linear-to-b from-gray-200 to-white">
              <div className="border-b rounded-2xl border-gray-200 bg-white p-3 cursor-pointer transition-colors duration-300 hover:bg-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-5">
                    <div className="relative h-25 w-20 rounded-lg overflow-hidden">
                      <Image
                        src={productImage}
                        alt={description}
                        fill
                        sizes="100%"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">{brandName}</h3>
                      <p className="text-sm text-gray-500">{description}</p>
                      <p className="text-sm text-gray-500">Size: {size}</p>
                    </div>
                  </div>
                  <ChevronRight strokeWidth={1} />
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <span className="bg-gray-500 p-0.75 rounded-full">
                    <X width={12} height={12} stroke="white" strokeWidth={3} />
                  </span>
                  <span className="text-gray-600 text-sm">
                    Exchange/Return window closed on {exchangeReturnTime}
                  </span>
                </div>
              </div>
              <div className="p-3 flex items-start justify-between">
                <div>
                  <span className="font-semibold text-sm text-gray-500 mb-2 inline-block">
                    Ratting
                  </span>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        onMouseEnter={() => setHoveStar({ index, description })}
                        onMouseLeave={() => setHoveStar(null)}
                        className={`cursor-pointer`}
                        fill={
                          hoverStar !== null &&
                          hoverStar.description === description
                            ? index <= hoverStar.index
                              ? "red"
                              : "white"
                            : index < parseInt(ratting)
                              ? "red"
                              : "white"
                        }
                        key={index}
                        stroke={
                          hoverStar !== null &&
                          hoverStar.description === description
                            ? index <= hoverStar.index
                              ? "red"
                              : "lightGray"
                            : index < parseInt(ratting)
                              ? "red"
                              : "lightGray"
                        }
                        strokeWidth={1}
                      />
                    ))}
                  </div>
                </div>
                {ratting && (
                  <ReviewForm
                    review={review}
                    reviewImages={reviewImages}
                    ratting={ratting}
                    description={description}
                    productImage={productImage}
                  />
                )}
              </div>
            </div>
          </div>
        ),
      )}
    </>
  );
}
