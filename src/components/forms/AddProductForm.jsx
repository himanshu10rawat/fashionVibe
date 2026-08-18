"use client";

import { useForm } from "react-hook-form";
import FormCard from "../admin/addProduct/FormCard";
import Input from "../shared/Input";
import Select from "../shared/Select";
import Textarea from "../shared/Textarea";
import ImageInput from "../shared/ImageInput";
import CheckboxInput from "../shared/CheckboxInput";

export default function AddProductForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      productName: "",
      brand: "",
      description: "",
      category: "",
      subcategory: "",
      price: "",
      discountPrice: "",
      tax: "",
      mainImage: "",
      additionalImages: [""],
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3"
    >
      <FormCard heading={"Product Information"}>
        <div className="flex flex-col gap-3">
          <Input
            register={register}
            errors={errors}
            label={"Product Name"}
            name={"productName"}
            id={"productName"}
            autoComplete={"name"}
            type={"text"}
            adminForm={true}
            placeholder={"Enter product name"}
            required={true}
            focusBorderColor="focus:border-red-500"
          />
          <Select
            id={"brand"}
            name={"brand"}
            label={"Brand"}
            required={true}
            options={brandOptions}
          />
          <Textarea
            id={"description"}
            name={"description"}
            label={"Description"}
            maxCharacter={500}
            placeholder={"Enter product description..."}
            rows={5}
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
          />
          <Select
            id={"subCategory"}
            name={"subCategory"}
            label={"Sub Category"}
            required={true}
            options={subCategoryOptions}
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
          id={"images"}
          name={"images"}
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

      <FormCard heading={"Product Status"}></FormCard>
    </form>
  );
}
