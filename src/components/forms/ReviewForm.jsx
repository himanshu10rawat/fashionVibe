"use client";
import { useForm, useWatch } from "react-hook-form";
import Image from "next/image";
import Modal from "../shared/Modal";
import { Images, Star, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ReviewForm({
  review,
  reviewImages,
  ratting,
  description,
  productImage,
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [reviewImagesData, setReviewImagesData] = useState(reviewImages);
  const [error, setError] = useState(null);
  const reviewBefore = review;
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      useReview: review,
    },
  });

  const useReview = useWatch({
    control,
    name: "useReview",
  });

  const removeReviewImage = (image) => {
    setReviewImagesData(reviewImages.filter((img) => img !== image));
  };

  const onSubmit = (data) => {
    if (reviewBefore === useReview) {
      setError("Please edit the review before submitting again.");
      setTimeout(() => {
        setError(null);
      }, 2000);
    } else {
      console.log(data);
      console.log("Api calling...");
      setModalOpen(false);
    }
  };
  return (
    <Modal
      open={modalOpen}
      onOpenChange={setModalOpen}
      buttonStyle={
        "font-bold text-sm text-red-400 capitalize cursor-pointer transition-colors duration-200 hover:text-red-500"
      }
      button={"view review"}
      header={"Write Review"}
      body={
        <>
          <div className="flex items-start gap-4">
            <div className="relative h-20 w-15 rounded-xl overflow-hidden">
              <Image
                src={productImage}
                alt={description}
                fill
                sizes="100%"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-gray-600 mb-1">{description}</p>
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    height={20}
                    width={20}
                    key={index}
                    strokeWidth={1}
                    stroke={index < ratting ? "red" : "lightGray"}
                    fill={index < ratting ? "red" : "white"}
                  />
                ))}
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <textarea
              className="block w-full p-2 outline-0 border border-gray-200 mb-3 text-gray-800"
              rows={10}
              name="review"
              id="review"
              placeholder="Please write product review here."
              {...register("useReview")}
            ></textarea>
            <div className="flex gap-3 items-center mb-5">
              <input type="file" name="addImage" id="addImage" hidden />
              <label
                htmlFor="addImage"
                className="w-15 h-15 border-dashed border border-gray-800 flex items-center justify-center rounded-sm cursor-pointer transition-colors duration-200 hover:bg-gray-100 active:bg-red-100"
              >
                <Images />
              </label>
              {reviewImagesData &&
                reviewImagesData.map((image, index) => (
                  <div key={index} className="relative w-15 h-15 rounded-sm">
                    <Image
                      src={image}
                      alt="Review image"
                      fill
                      sizes="100%"
                      className="object-cover rounded-sm"
                    />
                    <button
                      onClick={() => removeReviewImage(image)}
                      type="button"
                      className="absolute -top-2 -right-2 bg-gray-800 p-1 z-10 rounded-full cursor-pointer"
                    >
                      <X stroke="white" height={15} width={15} />
                    </button>
                  </div>
                ))}
            </div>
            <p className="text-gray-600 text-xs mb-3">
              By submitting review you give us consent to publish and process
              personal information in accordance with{" "}
              <Link className="font-bold text-red-500" href={""}>
                Terms of use
              </Link>{" "}
              and{" "}
              <Link className="font-bold text-red-500" href={""}>
                Privacy Policy
              </Link>
            </p>
            {error && (
              <p className="absolute p-2 bottom-15 rounded-lg text-xs font-semibold left-1/2 -translate-x-1/2 bg-red-600 text-white mb-3 text-center">
                {error}
              </p>
            )}
            <button
              type="submit"
              className="uppercase bg-red-400 text-white font-bold py-2.5 px-10 cursor-pointer transition-colors duration-200 hover:bg-red-500 mx-auto block"
            >
              submit
            </button>
          </form>
        </>
      }
    />
  );
}
