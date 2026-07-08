"use client";

import React from "react";
import Modal from "../shared/Modal";
import { useForm, useWatch } from "react-hook-form";
import Input from "../shared/Input";
import Button from "../shared/Button";

export default function AddressForm({
  button,
  buttonStyle,
  header,
  onMouseEnter,
  onMouseLeave,
  username,
  mobile,
  pincode,
  state,
  address,
  landmark,
  city,
  isDefaultAddress,
}) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: username ? username : "",
      mobile: mobile ? mobile : "",
      pincode: pincode ? pincode : "",
      state: state ? state : "",
      address: address ? address : "",
      landmark: landmark ? landmark : "",
      city: city ? city : "",
      makeDefault: isDefaultAddress ? isDefaultAddress : false,
    },
  });

  const makeDefault = useWatch({
    control,
    name: "makeDefault",
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Modal
      buttonStyle={buttonStyle}
      button={button}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      header={header}
      body={
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5 mt-5"
        >
          <Input
            register={register}
            errors={errors}
            id={"username"}
            name={"username"}
            label={"Name*"}
            autoComplete={"name"}
            rounded={false}
            borderTop="border-t-0"
            borderLeft="border-l-0"
            borderRight="border-r-0"
            paddingX="px-0"
            labelLeft="left-0"
            focusBorderColor="focus:border-green-500"
            focusLabelTextColor="peer-focus:text-green-500"
          />
          <Input
            register={register}
            errors={errors}
            id={"mobile"}
            name={"mobile"}
            label={"Mobile*"}
            autoComplete={"tel"}
            type="tel"
            rounded={false}
            borderTop="border-t-0"
            borderLeft="border-l-0"
            borderRight="border-r-0"
            paddingX="px-0"
            labelLeft="left-0"
            focusBorderColor="focus:border-green-500"
            focusLabelTextColor="peer-focus:text-green-500"
          />
          <div className="flex justify-between items-center gap-5">
            <Input
              register={register}
              errors={errors}
              id={"pincode"}
              name={"pincode"}
              label={"Pincode*"}
              autoComplete={"postal-code"}
              rounded={false}
              borderTop="border-t-0"
              borderLeft="border-l-0"
              borderRight="border-r-0"
              paddingX="px-0"
              labelLeft="left-0"
              focusBorderColor="focus:border-green-500"
              focusLabelTextColor="peer-focus:text-green-500"
            />
            <Input
              register={register}
              errors={errors}
              id={"state"}
              name={"state"}
              label={"State*"}
              autoComplete={"address-level1"}
              rounded={false}
              borderTop="border-t-0"
              borderLeft="border-l-0"
              borderRight="border-r-0"
              paddingX="px-0"
              labelLeft="left-0"
              focusBorderColor="focus:border-green-500"
              focusLabelTextColor="peer-focus:text-green-500"
            />
          </div>
          <Input
            register={register}
            errors={errors}
            id={"address"}
            name={"address"}
            label={"Address (Building, Street, Area)*"}
            autoComplete={"address-line1"}
            rounded={false}
            borderTop="border-t-0"
            borderLeft="border-l-0"
            borderRight="border-r-0"
            paddingX="px-0"
            labelLeft="left-0"
            focusBorderColor="focus:border-green-500"
            focusLabelTextColor="peer-focus:text-green-500"
          />
          <Input
            register={register}
            errors={errors}
            id={"landmark"}
            name={"landmark"}
            label={"Landmark/Street*"}
            autoComplete={"address-line2"}
            rounded={false}
            borderTop="border-t-0"
            borderLeft="border-l-0"
            borderRight="border-r-0"
            paddingX="px-0"
            labelLeft="left-0"
            focusBorderColor="focus:border-green-500"
            focusLabelTextColor="peer-focus:text-green-500"
          />
          <Input
            register={register}
            errors={errors}
            id={"city"}
            name={"city"}
            label={"City/District*"}
            autoComplete={"address-level2"}
            rounded={false}
            borderTop="border-t-0"
            borderLeft="border-l-0"
            borderRight="border-r-0"
            paddingX="px-0"
            labelLeft="left-0"
            focusBorderColor="focus:border-green-500"
            focusLabelTextColor="peer-focus:text-green-500"
          />
          <div className="flex items-center gap-2">
            <input
              className="w-4 h-4"
              type="checkbox"
              {...register("makeDefault")}
              name="makeDefault"
              id="makeDefault"
              checked={makeDefault}
            />
            <label htmlFor="makeDefault" className="text-gray-500">
              Make this as my default address
            </label>
          </div>
          <div className="flex items-center">
            <Button
              bgColor="bg-gray-100"
              textColor="text-black"
              bgHoverColor="hover:bg-gray-200"
              areaLabel="cancel"
            >
              Cancel
            </Button>
            <Button
              bgColor="bg-red-400"
              bgHoverColor="hover:bg-red-500"
              areaLabel="save"
            >
              Save
            </Button>
          </div>
        </form>
      }
      //   open={open}
      //   onOpenChange={onOpenChange}
    />
  );
}
