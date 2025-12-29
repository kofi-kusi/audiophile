import React from "react";
import GoBack from "../components/ui/GoBack";
import { useCart } from "../hooks/useCart";

export default function CheckoutPage() {
  const { cart } = useCart();
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0,
  );
  const shippingFee = 50;
  const vat = 1079;

  return (
    <main className="max-w-[1150px] mx-auto px-6 mt-4 md:mt-8 lg:mt-20">
      <GoBack />
      <div className="mt-6 mb-24 flex flex-col justify-between gap-8">
        <form
          action=""
          className="bg-[#FFFFFF] rounded-lg p-6 flex flex-col justify-between gap-8"
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

        <aside className="bg-[#FFFFFF] py-8 px-6 flex flex-col justify-between gap-8 rounded-lg">
          <h6 className="text-[18px] uppercase leading-[24px] tracking-[1.3px] font-bold">
            summary
          </h6>
          <div className="flex flex-col justify-between gap-6">
            {cart.map((cartItem) => {
              return (
                <div className="flex justify-between">
                  <div className="flex gap-4">
                    <img
                      src={cartItem.image}
                      alt=""
                      className="size-16 rounded-lg"
                    />
                    <div className="flex flex-col ">
                      <p className="font-bold leading-[25px] tracking-0">
                        {cartItem.name}
                      </p>
                      <p className="font-bold text-[14px] opacity-50 leading-[25px] tracking-0">
                        $ {cartItem.price}
                      </p>
                    </div>
                  </div>
                  <div className="opacity-50 leading-[25px] tracking-0 font-bold">
                    x{cartItem.quantity}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col justify-between gap-2">
            <div className="flex justify-between items-center">
              <p className="uppercase font-medium leading-[25px] tracking-0 opacity-50">
                Total
              </p>
              <p className="font-bold uppercase text-[18px] leading-0">
                $ {totalPrice}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p className="uppercase font-medium leading-[25px] tracking-0 opacity-50">
                Shipping
              </p>
              <p className="font-bold uppercase text-[18px] leading-0">
                $ {shippingFee}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p className="uppercase font-medium leading-[25px] tracking-0 opacity-50">
                Vat (Included)
              </p>
              <p className="font-bold uppercase text-[18px] leading-0">
                $ {vat}
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="uppercase font-medium leading-[25px] tracking-0 opacity-50">
              Grand total
            </p>
            <p className="font-bold uppercase text-[18px] leading-0 text-[#D87D4A]">
              $ {vat + shippingFee + totalPrice}
            </p>
          </div>
          <button className="bg-[#D87D4A] text-[#FFFFFF] text-[13px] font-bold leading-px uppercase h-12 py-[15px] px-auto ">Continue & pay</button>
        </aside>
      </div>
    </main>
  );
}
