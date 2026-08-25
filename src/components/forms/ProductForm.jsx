"use client";

import { useForm } from "react-hook-form";
import FormCard from "../admin/addProduct/FormCard";
import Input from "../shared/Input";
import Select from "../shared/Select";
import Textarea from "../shared/Textarea";
import ImageInput from "../shared/ImageInput";
import CheckboxInput from "../shared/CheckboxInput";
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
        {isEdit ? "Update Product" : "Add Product"}
      </button>
    </>
  );
}

export default function ProductForm({ product = null, isEdit = false }) {
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
      productName: "",
      brand: "",
      description: "",
      category: "",
      subCategory: "",
      price: "",
      discountPrice: "",
      tax: "",
      productImages: [],
      sku: "",
      stockQuantity: "",
      lowStockThreshold: "",
      stockStatus: "",
      productSizes: [],
      productColors: [],
      productStatus: "",
    },
  });

  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    if (product) {
      reset({
        productName: product.name,
        brand: product.brand,
        description: product.description,
        category: product.category,
        subCategory: product.subCategory,
        price: String(product.price),
        discountPrice: String(product.discountPrice),
        tax: product.tax,
        productImages: product.images,
        sku: product.sku,
        stockQuantity: String(product.stock),
        lowStockThreshold: product.threshold,
        stockStatus: product.stockStatus,
        productStatus: product.status,
        productSizes: product.sizes,
        productColors: product.colors,
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
            {isEdit ? "Update Product" : "Add Product"}
          </h1>
          <div className="text-sm text-gray-400 font-medium flex items-center gap-2">
            <Link className="flex items-center gap-0.5" href={"/admin"}>
              Dashboard <ChevronRight size={16} />
            </Link>
            <Link
              className="flex items-center gap-0.5"
              href={"/admin/products"}
            >
              Products <ChevronRight size={16} />
            </Link>
            <span className="text-red-500">
              {isEdit ? "Update Product" : "Add Product"}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <FormButtons onCancel={handleCancel} isEdit={isEdit} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 mb-3">
        <FormCard heading={"Product Information"}>
          <div className="flex flex-col gap-3">
            <Input
              register={register}
              errors={errors}
              label={"Product Name"}
              name={"productName"}
              id={"productName"}
              type={"text"}
              adminForm={true}
              placeholder={"Enter product name"}
              required={true}
              focusBorderColor="focus:border-red-500"
            />
            <Select
              key={`brand-${resetKey}`}
              id={"brand"}
              label={"Brand"}
              name={"brand"}
              required={true}
              options={[
                "select brand",
                "nike",
                "puma",
                "adidas",
                "fossil",
                "zara",
                "skybags",
                "ray-ban",
                "minimalist",
              ]}
              register={register}
              errors={errors}
              setValue={setValue}
              watch={watch}
            />
            <Textarea
              id={"description"}
              name={"description"}
              label={"Description"}
              placeholder={"Enter product description..."}
              rows={5}
              register={register}
              errors={errors}
              watch={watch}
            />
          </div>
        </FormCard>

        <FormCard heading={"Category & Pricing"}>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
            <Select
              key={`category-${resetKey}`}
              id={"category"}
              name={"category"}
              label={"Category"}
              required={true}
              options={[
                "select category",
                "men",
                "women",
                "accessories",
                "beauty",
              ]}
              register={register}
              errors={errors}
              setValue={setValue}
              watch={watch}
            />
            <Select
              key={`subCategory-${resetKey}`}
              id={"subCategory"}
              name={"subCategory"}
              label={"Sub Category"}
              required={true}
              options={[
                "select sub category",
                "men shirt",
                "women jean",
                "accessories",
                "beauty",
              ]}
              register={register}
              errors={errors}
              setValue={setValue}
              watch={watch}
            />
            <Input
              register={register}
              errors={errors}
              label={"Price"}
              name={"price"}
              id={"price"}
              type={"number"}
              adminForm={true}
              placeholder={"0.00"}
              required={true}
              focusBorderColor={"focus:border-red-500"}
            />
            <Input
              register={register}
              errors={errors}
              label={"Discount Price"}
              name={"discountPrice"}
              id={"discountPrice"}
              type={"number"}
              adminForm={true}
              placeholder={"0.00"}
              focusBorderColor={"focus:border-red-500"}
            />
            <Input
              register={register}
              errors={errors}
              label={"Tax (%)"}
              name={"tax"}
              id={"tax"}
              type={"number"}
              adminForm={true}
              placeholder={"0"}
              focusBorderColor={"focus:border-red-500"}
            />
          </div>
        </FormCard>

        <FormCard heading={"Product Images"}>
          <ImageInput
            key={`productImages-${resetKey}`}
            id={"productImages"}
            name={"productImages"}
            label={"Upload Images (JPG, PNG or WebP, Max 2MB)"}
            register={register}
            setValue={setValue}
            errors={errors}
            selectedImages={product && product.images}
          />
        </FormCard>

        <FormCard heading={"Inventory"}>
          <div className="mb-3">
            <Input
              register={register}
              errors={errors}
              label={"SKU (Stock keeping Unit)"}
              required={true}
              placeholder={"Enter SKU"}
              id={"sku"}
              name={"sku"}
              adminForm={true}
              focusBorderColor={"focus:border-red-500"}
            />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
            <Input
              register={register}
              errors={errors}
              label={"Stock Quantity"}
              required={true}
              placeholder={"Enter stock quantity"}
              id={"stockQuantity"}
              name={"stockQuantity"}
              type={"number"}
              adminForm={true}
              focusBorderColor={"focus:border-red-500"}
            />

            <div>
              <Input
                register={register}
                errors={errors}
                label={"Low Stock Threshold"}
                placeholder={"Enter threshold"}
                id={"lowStockThreshold"}
                name={"lowStockThreshold"}
                type={"number"}
                adminForm={true}
                focusBorderColor={"focus:border-red-500"}
              />
              <div className="text-xs text-gray-400 mt-1.5 font-medium">
                Get notified when stock is below this value
              </div>
            </div>

            <Select
              key={`stockStatus-${resetKey}`}
              id={"stockStatus"}
              name={"stockStatus"}
              label={"Stock Status"}
              required={true}
              options={["select stock status", "in stock", "out of stock"]}
              register={register}
              errors={errors}
              setValue={setValue}
              watch={watch}
            />
          </div>
        </FormCard>

        <FormCard heading={"Product Variants"}>
          <CheckboxInput
            key={`productSizes-${resetKey}`}
            label={"Sizes"}
            name={"productSizes"}
            defaultOptions={["XS", "S", "M", "L", "XL", "XXL"]}
            placeholder={"size"}
            register={register}
            setValue={setValue}
            errors={errors}
            checkedOptions={product && product.sizes}
          />
          <CheckboxInput
            key={`productColors-${resetKey}`}
            label={"Colors"}
            name={"productColors"}
            defaultOptions={["black", "white", "gray", "blue", "red", "green"]}
            placeholder={"color"}
            isColorInput={true}
            register={register}
            setValue={setValue}
            errors={errors}
            checkedOptions={product && product.colors}
          />
        </FormCard>

        <FormCard heading={"Product Status"}>
          <RadioInput
            key={`productStatus-${resetKey}`}
            label={"Status"}
            name={"productStatus"}
            options={["active", "draft", "inactive"]}
            required={true}
            register={register}
            setValue={setValue}
            errors={errors}
            status={product && product.status}
          />
        </FormCard>
      </div>

      <div className="shadow-[0_0_5px_rgba(0,0,0,0.1)] p-4 rounded-md bg-white flex items-center justify-end gap-2.5">
        <FormButtons onCancel={handleCancel} isEdit={isEdit} />
      </div>
    </form>
  );
}
