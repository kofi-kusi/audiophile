import React from "react";
import { useForm } from "react-hook-form";

export default function CheckoutForm({ setIsOpen}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
    setIsOpen(true)
  }
  return (
    <form
      action=""
      className="bg-[#FFFFFF] rounded-lg p-6 flex flex-col justify-between gap-8 lg:w-7/10 caret-[#D87D4A]"
      id="checkoutForm"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h4 className="text-[28px] uppercase leading-[38px] tracking-[2px] font-bold md:text-[32px] leading-[36px] tracking-px">
        Checkout
      </h4>

      <fieldset className="flex flex-col justify-between">
        <legend className="font-bold text-[13px] leading-[25px] tracking-px text-[#D87D4A] uppercase">
          Billing details
        </legend>

        <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-6 mt-4">
          <div className="flex flex-col justify-between gap-2">
            {errors.name ? (
              <div className="flex justify-between text-[12px] text-[#CD2C2C]">
                <label htmlFor="name" className="font-bold">
                  Name
                </label>
                <p className="font-normal">{errors.name.message}</p>
              </div>
            ) : (
              <label htmlFor="name" className="text-[12px] font-bold">
                Name
              </label>
            )}

            <input
              placeholder="Kofi Kusi"
              className={`
                        border rounded-lg px-6 py-[18px] focus:outline-none
                        ${
                          errors.name
                            ? "border-red-500 focus:border-red-500"
                            : "border-[#CFCFCF] focus:border-[#D87D4A]"
                        }
                    `}
              {...register("name", {
                required: "Name is required",
              })}
            />
          </div>

          <div className="flex flex-col justify-between gap-2">
            {errors.email ? (
              <div className="flex justify-between text-[12px] text-[#CD2C2C]">
                <label htmlFor="name" className="font-bold">
                  Email
                </label>
                <p className="font-normal">{errors.email.message}</p>
              </div>
            ) : (
              <label htmlFor="name" className="text-[12px] font-bold">
                Email
              </label>
            )}

            <input
              id="email"
              placeholder="kofi@example.com"
              className={`
                        border rounded-lg px-6 py-[18px] focus:outline-none
                        ${
                          errors.email
                            ? "border-[#CD2C2C] focus:border-[#CD2C2C]"
                            : "border-[#CFCFCF] focus:border-[#D87D4A]"
                        }
                    `}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid email",
                },
              })}
            />
          </div>

          <div className="flex flex-col justify-between gap-2">
            {errors.phone ? (
              <div className="flex justify-between text-[12px] text-[#CD2C2C]">
                <label htmlFor="name" className="font-bold">
                  Phone Number
                </label>
                <p className="font-normal">{errors.phone.message}</p>
              </div>
            ) : (
              <label htmlFor="name" className="text-[12px] font-bold">
                Phone Number
              </label>
            )}

            <input
              type="tel"
              placeholder="+233 12-345-6789"
              className={`
                        border rounded-lg px-6 py-[18px] focus:outline-none
                        ${
                          errors.phone
                            ? "border-red-500 focus:border-red-500"
                            : "border-[#CFCFCF] focus:border-[#D87D4A]"
                        }
                    `}
              {...register("phone", {
                required: "Phone number is required",
              })}
            />
          </div>
        </div>
      </fieldset>

      <fieldset className="flex flex-col justify-between">
        <legend className="font-bold text-[13px] leading-[25px] tracking-px text-[#D87D4A] uppercase">
          shipping info
        </legend>

        <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-6 mt-4">
          <div className="flex flex-col md:col-span-2 justify-between gap-2">
            {errors.address ? (
              <div className="flex justify-between text-[12px] text-[#CD2C2C]">
                <label htmlFor="name" className="font-bold">
                  Your Address
                </label>
                <p className="font-normal">{errors.address.message}</p>
              </div>
            ) : (
              <label htmlFor="name" className="text-[12px] font-bold">
                Your Address
              </label>
            )}

            <input
              type="text"
              placeholder="1111 Stewart Avenue"
              className={`
                        border rounded-lg px-6 py-[18px] focus:outline-none
                        ${
                          errors.address
                            ? "border-red-500 focus:border-red-500"
                            : "border-[#CFCFCF] focus:border-[#D87D4A]"
                        }
                    `}
              {...register("address", {
                required: "Your Address is required",
              })}
            />
          </div>

          <div className="flex flex-col justify-between gap-2">
            {errors.zipCode ? (
              <div className="flex justify-between text-[12px] text-[#CD2C2C]">
                <label htmlFor="zipCode" className="font-bold">
                  Zip Code
                </label>
                <p className="font-normal">{errors.zipCode.message}</p>
              </div>
            ) : (
              <label htmlFor="zipCode" className="text-[12px] font-bold">
                Zip Code
              </label>
            )}

            <input
              id="zipCode"
              type="text"
              placeholder="10001"
              className={`
                        border rounded-lg px-6 py-[18px] focus:outline-none
                        ${
                          errors.phone
                            ? "border-red-500 focus:border-red-500"
                            : "border-[#CFCFCF] focus:border-[#D87D4A]"
                        }
                    `}
              {...register("zipCode", {
                required: "Zip code is required",
              })}
            />
          </div>

          <div className="flex flex-col justify-between gap-2">
            {errors.city ? (
              <div className="flex justify-between text-[12px] text-[#CD2C2C]">
                <label htmlFor="city" className="font-bold">
                  City
                </label>
                <p className="font-normal">{errors.city.message}</p>
              </div>
            ) : (
              <label htmlFor="city" className="text-[12px] font-bold">
                City
              </label>
            )}

            <input
              id="city"
              type="text"
              placeholder="Kumasi"
              className={`
                        border rounded-lg px-6 py-[18px] focus:outline-none
                        ${
                          errors.city
                            ? "border-red-500 focus:border-red-500"
                            : "border-[#CFCFCF] focus:border-[#D87D4A]"
                        }
                    `}
              {...register("city", {
                required: "City is required",
              })}
            />
          </div>

          <div className="flex flex-col justify-between gap-2">
            {errors.country ? (
              <div className="flex justify-between text-[12px] text-[#CD2C2C]">
                <label htmlFor="country" className="font-bold">
                  Country
                </label>
                <p className="font-normal">{errors.country.message}</p>
              </div>
            ) : (
              <label htmlFor="country" className="text-[12px] font-bold">
                Country
              </label>
            )}

            <input
              id="country"
              type="text"
              placeholder="10001"
              className={`
                        border rounded-lg px-6 py-[18px] focus:outline-none
                        ${
                          errors.country
                            ? "border-red-500 focus:border-red-500"
                            : "border-[#CFCFCF] focus:border-[#D87D4A]"
                        }
                    `}
              {...register("country", {
                required: "Country is required",
              })}
            />
          </div>
        </div>
      </fieldset>

      <fieldset className="flex flex-col justify-between">
        <legend className="font-bold text-[13px] leading-[25px] tracking-px text-[#D87D4A] uppercase">
          payment details
        </legend>

        <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-6 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 md:col-span-2 justify-between gap-2">
            <label htmlFor="paymentMethod" className="text-[12px] font-bold">
              Payment Method
            </label>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 border border-[#CFCFCF] rounded-lg px-6 py-[18px]">
                <input
                  type="radio"
                  id="method"
                  name="method"
                  className="border border-[#CFCFCF] rounded-lg px-6 py-[18px]"
                  placeholder="1111 Stewart Avenue"
                />
                <p className="font-bold text-[14px]">e-Money</p>
              </div>

              <div className="flex items-center gap-4 border border-[#CFCFCF] rounded-lg px-6 py-[18px]">
                <input
                  type="radio"
                  id="method"
                  name="method"
                  className="border border-[#CFCFCF] rounded-lg px-6 py-[18px]"
                  placeholder="1111 Stewart Avenue"
                />
                <p className="font-bold text-[14px]">Cash on Delivery</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-2">
            {errors.eMoneyNum ? (
              <div className="flex justify-between text-[12px] text-[#CD2C2C]">
                <label htmlFor="eMoneyNum" className="font-bold">
                  e-Money Number
                </label>
                <p className="font-normal">{errors.eMoneyNum.message}</p>
              </div>
            ) : (
              <label htmlFor="name" className="text-[12px] font-bold">
                e-Money Number
              </label>
            )}

            <input
              id="eMoneyNum"
              type="text"
              placeholder="10001"
              className={`
                        border rounded-lg px-6 py-[18px] focus:outline-none
                        ${
                          errors.eMoneyNum
                            ? "border-red-500 focus:border-red-500"
                            : "border-[#CFCFCF] focus:border-[#D87D4A]"
                        }
                    `}
              {...register("eMoneyNum", {
                required: "e-Money number is required",
              })}
            />
          </div>

          <div className="flex flex-col justify-between gap-2">
            {errors.eMoneyPin ? (
              <div className="flex justify-between text-[12px] text-[#CD2C2C]">
                <label htmlFor="eMoneyPin" className="font-bold">
                  e-Money Pin
                </label>
                <p className="font-normal">{errors.eMoneyPin.message}</p>
              </div>
            ) : (
              <label htmlFor="name" className="text-[12px] font-bold">
                e-Money Pin
              </label>
            )}

            <input
              id="eMoneyPin"
              type="text"
              placeholder="10001"
              className={`
                        border rounded-lg px-6 py-[18px] focus:outline-none
                        ${
                          errors.eMoneyPin
                            ? "border-red-500 focus:border-red-500"
                            : "border-[#CFCFCF] focus:border-[#D87D4A]"
                        }
                    `}
              {...register("eMoneyPin", {
                required: "e-Money Pin is required",
              })}
            />
          </div>
        </div>
      </fieldset>
    </form>
  );
}
