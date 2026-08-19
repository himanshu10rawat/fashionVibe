"use client";

import { useForm } from "react-hook-form";
import FormCard from "../admin/addProduct/FormCard";
import Input from "../shared/Input";
import Select from "../shared/Select";
import Textarea from "../shared/Textarea";
import ImageInput from "../shared/ImageInput";
import CheckboxInput from "../shared/CheckboxInput";
import RadioInput from "../shared/RadioInput";

export default function AddProductForm() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      productName: "",
      brand: "",
      description: "",
      category: "",
      subCategory: "",
      price: "",
      discountPrice: "",
      tax: "",
      productImages: null,
      sku: "",
      stockQuantity: "",
      lowStockThreshold: "",
      stockStatus: "",
      productSize: "",
      productColor: "",
      productStatus: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Product Data", data);
  };

  const brandOptions = [
    "select brand",
    "nike",
    "puma",
    "adidas",
    "fossil",
    "zara",
    "skybags",
    "ray-ban",
    "minimalist",
  ];

  const categoryOptions = [
    "select category",
    "men",
    "women",
    "accessories",
    "beauty",
  ];

  const subCategoryOptions = [
    "select sub category",
    "men shirt",
    "women jean",
    "accessories",
    "beauty",
  ];

  const stockStatusOptions = [
    "select stock status",
    "in stock",
    "out of stock",
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
              id={"brand"}
              label={"Brand"}
              name={"brand"}
              required={true}
              options={brandOptions}
              register={register}
              errors={errors}
              setValue={setValue}
              watch={watch}
            />
            <Textarea
              id={"description"}
              name={"description"}
              label={"Description"}
              maxCharacter={500}
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
              id={"category"}
              name={"category"}
              label={"Category"}
              required={true}
              options={categoryOptions}
              register={register}
              errors={errors}
              setValue={setValue}
              watch={watch}
            />
            <Select
              id={"subCategory"}
              name={"subCategory"}
              label={"Sub Category"}
              required={true}
              options={subCategoryOptions}
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
              autoComplete={"number"}
              id={"price"}
              type={"number"}
              adminForm={true}
              placeholder={"0.00"}
              required={true}
              isPrice={true}
              focusBorderColor={"focus:border-red-500"}
            />
            <Input
              register={register}
              errors={errors}
              label={"Discount Price"}
              name={"discountPrice"}
              autoComplete={"number"}
              id={"discountPrice"}
              type={"number"}
              adminForm={true}
              placeholder={"0.00"}
              isPrice={true}
              focusBorderColor={"focus:border-red-500"}
            />
            <Input
              register={register}
              errors={errors}
              label={"Tax (%)"}
              name={"tax"}
              autoComplete={"number"}
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
            id={"productImages"}
            name={"productImages"}
            label={"Upload Images (JPG, PNG or WebP, Max 2MB)"}
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
              autoComplete={"sku"}
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
              autoComplete={"stock-quantity"}
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
                autoComplete={"low-stock-threshold"}
                adminForm={true}
                focusBorderColor={"focus:border-red-500"}
              />
              <div className="text-xs text-gray-400 mt-1.5 font-medium">
                Get notified when stock is below this value
              </div>
            </div>

            <Select
              id={"stockStatus"}
              name={"stockStatus"}
              label={"Stock Status"}
              required={true}
              options={stockStatusOptions}
              register={register}
              errors={errors}
              setValue={setValue}
              watch={watch}
            />
          </div>
        </FormCard>

        <FormCard heading={"Product Variants"}>
          <CheckboxInput
            label={"Sizes"}
            name={"sizes"}
            defaultOptions={["XS", "S", "M", "L", "XL", "XXL"]}
            placeholder={"size"}
          />
          <CheckboxInput
            label={"Colors"}
            name={"colors"}
            defaultOptions={["black", "white", "gray", "blue", "red", "green"]}
            placeholder={"color"}
            isColorInput={true}
          />
        </FormCard>

        <FormCard heading={"Product Status"}>
          <RadioInput
            name={"status"}
            options={["active", "draft", "inactive"]}
            required={true}
          />
        </FormCard>
      </div>

      <div className="shadow-[0_0_5px_rgba(0,0,0,0.1)] p-4 rounded-md bg-white flex items-center justify-end gap-2.5">
        <button
          type="reset"
          className="rounded-sm border border-white bg-white hover:bg-white hover:text-red-500 shadow-[0_0_2px_rgba(0,0,0,0.2)] transition-colors duration-300 ease-in-out cursor-pointer text-gray-600 text-sm font-semibold py-2.5 px-5"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="flex items-center rounded-sm gap-1.5 border border-red-500 bg-red-500 hover:bg-white hover:text-red-500 transition-colors duration-500 ease-in-out cursor-pointer text-white text-sm font-semibold py-2.5 px-5"
        >
          Add Product
        </button>
      </div>
    </form>
  );
}
