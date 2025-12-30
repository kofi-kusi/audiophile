import React from "react";
import checkMarkIcon from "../assets/shared/desktop/icon-check-mark.svg";
import { useCart } from "../hooks/useCart";
import { Link } from "react-router";

export default function CheckoutModal({ grandTotal }) {
  const { cart } = useCart();
  const firstCartItem = cart[0];
  return (
    <div className="bg-white rounded-lg p-8 flex flex-col gap-8">
      <img src={checkMarkIcon} alt="Check mark icon" className="size-16" />
      <div className="text-left flex flex-col gap-4">
        <div className="font-bold text-[24px] leading-[33px] tracking-[1.7px] md:text-[32px] md:leading-[36px]">
          <h5 >
            THANK YOU
          </h5>
          <h5>
            FOR YOUR ORDER
          </h5>
        </div>
        <p className="font-medium leading-[25px] tracking-0 opacity-50">
          You will receive an email confirmation shortly.
        </p>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="p-6 bg-[#F1F1F1] rounded-t-lg flex flex-col gap-3 md:rounded-l-lg md:rounded-tr-none">
          <div className="flex justify-between">
            <div className="flex justify-between">
              <img
                src={firstCartItem.image}
                alt={firstCartItem.name}
                className="size-16"
              />
              <div className="flex flex-col justify-center">
                <p className="font-bold leading-[20px] tracking-0 max-w-[150px]">
                  {firstCartItem.name}
                </p>
                <p className="font-bold leading-[25px] tracking-0 text-[14px] opacity-50">
                  $ {firstCartItem.price}
                </p>
              </div>
            </div>
            <p className="font-bold opacity-50">x{firstCartItem.quantity}</p>
          </div>
          {cart.length > 1 && (
            <>
              <hr className="opacity-10 h-px" />
              <p className="text-[12px] font-bold opacity-50 text-center">
                and {cart.length - 1} item(s)
              </p>
            </>
          )}
        </div>
        <div className="text-white bg-black p-6 rounded-b-lg flex flex-col justify-center gap-4 md:rounded-r-lg md:rounded-bl-none">
          <p className="font-medium uppercase opacity-50">Grand total</p>
          <p className="text-[18px] tracking-0 font-bold">$ {grandTotal}</p>
        </div>
      </div>
      <Link
        to="/"
        className="bg-[#D87D4A] text-white text-[13px] uppercase py-[15px] text-center font-bold"
      >
        back to home
      </Link>
    </div>
  );
}
