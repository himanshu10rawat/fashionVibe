"use client";

import { useForm } from "react-hook-form";
import FormCard from "../admin/addProduct/FormCard";
import Input from "../shared/Input";
import Textarea from "../shared/Textarea";
import ImageInput from "../shared/ImageInput";
import RadioInput from "../shared/RadioInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { productSchema } from "../validations/productSchema";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

function FormButtons({ onCancel, isEdit }) {
  return (
    <>
      <button
        type="button"
        onClick={onCancel}
        className="rounded-sm border border-white bg-white hover:bg-white hover:text-red-500 shadow-[0_0_2px_rgba(0,0,0,0.2)] transition-colors duration-300 ease-in-out cursor-pointer text-gray-600 text-sm font-semibold py-2.5 px-5"
      >
        Cancel
      </button>
      <button
        type="submit"
        className="flex items-center rounded-sm gap-1.5 border border-red-500 bg-red-500 hover:bg-white hover:text-red-500 transition-colors duration-500 ease-in-out cursor-pointer text-white text-sm font-semibold py-2.5 px-5"
      >
        {isEdit ? "Update Category" : "Add Category"}
      </button>
    </>
  );
}

export default function CategoryForm({ product = null, isEdit = false }) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(productSchema),
    defaultValues: {
      categoryName: "",
      slug: "",
      description: "",
      categoryImage: "",
      categoryStatus: "",
    },
  });

  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    if (product) {
      reset({
        categoryName: product.name,
        slug: product.slug,
        description: product.description,
        categoryImage: product.image,
        categoryStatus: product.status,
      });
    }
  }, [product, reset]);

  const handleCancel = () => {
    reset();
    setResetKey((prev) => prev + 1);
  };

  const onInvalid = (errors) => {
    console.log("VALIDATION ERRORS:", errors);
  };

  const onSubmit = (data) => {
    if (isEdit) {
      console.log("Update Product", data);
    } else {
      console.log("Product Data", data);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onInvalid)}>
      <div className="flex items-start justify-between mb-5">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">
            {isEdit ? "Update Category" : "Add Category"}
          </h1>
          <div className="text-sm text-gray-500 font-medium flex items-center gap-2 mb-2">
            <Link className="flex items-center gap-0.5" href={"/admin"}>
              Dashboard <ChevronRight size={16} />
            </Link>
            <Link
              className="flex items-center gap-0.5"
              href={"/admin/categories"}
            >
              Categories <ChevronRight size={16} />
            </Link>
            <span className="text-red-500">
              {isEdit ? "Update Category" : "Add Category"}
            </span>
          </div>
          <p className="text-sm text-gray-500">
            Create a new product category to organize your products.
          </p>
        </div>
        <div className="flex items-center gap-2.5">
          <FormButtons onCancel={handleCancel} isEdit={isEdit} />
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[60%_40%] gap-3 mb-3">
        <FormCard heading={"Basic Information"}>
          <div className="flex flex-col gap-3">
            <div>
              <Input
                register={register}
                errors={errors}
                label={"Category Name"}
                name={"categoryName"}
                id={"categoryName"}
                type={"text"}
                adminForm={true}
                placeholder={"Enter category name"}
                required={true}
                focusBorderColor="focus:border-red-500"
              />
              <p className="text-sm text-gray-500 py-2">
                Enter a unique and descriptive name for the category.
              </p>
            </div>

            <div>
              <Input
                register={register}
                errors={errors}
                label={"Slug"}
                name={"slug"}
                id={"slug"}
                type={"text"}
                adminForm={true}
                placeholder={"Enter category slug"}
                required={true}
                focusBorderColor="focus:border-red-500"
              />
              <p className="text-sm text-gray-500 py-2">
                Slug is used in the URL. Use lowercase letters, numbers and
                hyphens only.
              </p>
            </div>

            <div>
              <Textarea
                id={"description"}
                name={"description"}
                label={"Description"}
                placeholder={"Enter category description"}
                rows={5}
                register={register}
                errors={errors}
                watch={watch}
              />
              <p className="text-sm text-gray-500">
                Provide a short description about this category.
              </p>
            </div>
          </div>
        </FormCard>

        <div className="flex flex-col gap-3">
          <FormCard heading={"Category Image"}>
            <ImageInput
              key={`categoryImage-${resetKey}`}
              id={"categoryImage"}
              name={"categoryImage"}
              label={"Upload Category Image (JPG, PNG or WebP, Max 2MB)"}
              register={register}
              setValue={setValue}
              errors={errors}
              selectedImages={product && product.image}
              singleImage={true}
            />
          </FormCard>

          <FormCard heading={"Category Status"}>
            <RadioInput
              key={`categoryStatus-${resetKey}`}
              label={"Status"}
              name={"categoryStatus"}
              options={["active", "inactive"]}
              required={true}
              register={register}
              setValue={setValue}
              errors={errors}
              status={product && product.status}
            />
          </FormCard>
        </div>
      </div>

      <div className="shadow-[0_0_5px_rgba(0,0,0,0.1)] p-4 rounded-md bg-white flex items-center justify-end gap-2.5">
        <FormButtons onCancel={handleCancel} isEdit={isEdit} />
      </div>
    </form>
  );
}
