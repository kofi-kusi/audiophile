import React from "react";
import GoBack from "../components/ui/GoBack";

export default function CheckoutPage() {
  return (
    <main className="max-w-[1150px] mx-auto px-6 mt-4 md:mt-8 lg:mt-20">
      <GoBack />
      <div className="mt-6">
        <form
          action=""
          className="bg-[#FFFFFF] rounded-lg p-6 flex flex-col justify-between gap-8"
        >
          <h4 className="text-[28px] uppercase leadin-[38px] tracking-[2px] font-bold">
            Checkout
          </h4>

          <fieldset className="flex flex-col justify-between">
            <legend className="font-bold text-[13px] leading-[25px] tracking-px text-[#D87D4A] uppercase">
              Billing details
            </legend>

            <div className="flex flex-col justify-between gap-6 mt-4">
              <div className="flex flex-col justify-between gap-2">
                <label htmlFor="name" className="text-[12px] font-bold">
                  Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  className="border border-[#CFCFCF] rounded-lg px-6 py-[18px]"
                  placeholder="Kofi Kusi"
                />
              </div>

              <div className="flex flex-col justify-between gap-2">
                <label htmlFor="email" className="text-[12px] font-bold">
                  Email
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  className="border border-[#CFCFCF] rounded-lg px-6 py-[18px]"
                  placeholder="kofi@mail.com"
                />
              </div>

              <div className="flex flex-col justify-between gap-2">
                <label htmlFor="phone" className="text-[12px] font-bold">
                  Phone Number
                </label>

                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="border border-[#CFCFCF] rounded-lg px-6 py-[18px]"
                  placeholder="+233 12-345-6789"
                />
              </div>
            </div>
          </fieldset>

          <fieldset className="flex flex-col justify-between">
            <legend className="font-bold text-[13px] leading-[25px] tracking-px text-[#D87D4A] uppercase">
              shipping info
            </legend>

            <div className="flex flex-col justify-between gap-6 mt-4">
              <div className="flex flex-col justify-between gap-2">
                <label htmlFor="address" className="text-[12px] font-bold">
                  Your Address
                </label>

                <input
                  type="text"
                  id="address"
                  name="address"
                  className="border border-[#CFCFCF] rounded-lg px-6 py-[18px]"
                  placeholder="1111 Stewart Avenue"
                />
              </div>

              <div className="flex flex-col justify-between gap-2">
                <label htmlFor="zipCode" className="text-[12px] font-bold">
                  Zip Code
                </label>

                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  className="border border-[#CFCFCF] rounded-lg px-6 py-[18px]"
                  placeholder="10001"
                />
              </div>

              <div className="flex flex-col justify-between gap-2">
                <label htmlFor="city" className="text-[12px] font-bold">
                  City
                </label>

                <input
                  type="text"
                  id="city"
                  name="city"
                  className="border border-[#CFCFCF] rounded-lg px-6 py-[18px]"
                  placeholder="Kumasi"
                />
              </div>

              <div className="flex flex-col justify-between gap-2">
                <label htmlFor="city" className="text-[12px] font-bold">
                  Country
                </label>

                <input
                  type="text"
                  id="country"
                  name="country"
                  className="border border-[#CFCFCF] rounded-lg px-6 py-[18px]"
                  placeholder="Ghana"
                />
              </div>
            </div>
          </fieldset>

          <fieldset className="flex flex-col justify-between">
            <legend className="font-bold text-[13px] leading-[25px] tracking-px text-[#D87D4A] uppercase">
              payment details
            </legend>

            <div className="flex flex-col justify-between gap-6 mt-4">
              <div className="flex flex-col justify-between gap-2">
                <label
                  htmlFor="paymentMethod"
                  className="text-[12px] font-bold"
                >
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
                <label htmlFor="zipCode" className="text-[12px] font-bold">
                  e-Money Number
                </label>

                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  className="border border-[#CFCFCF] rounded-lg px-6 py-[18px]"
                  placeholder="233123456789"
                />
              </div>

              <div className="flex flex-col justify-between gap-2">
                <label htmlFor="city" className="text-[12px] font-bold">
                  e-Money Pin
                </label>

                <input
                  type="text"
                  id="city"
                  name="city"
                  className="border border-[#CFCFCF] rounded-lg px-6 py-[18px]"
                  placeholder="6891"
                />
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </main>
  );
}
