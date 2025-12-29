import { Link } from "react-router";
import { useCart } from "../hooks/useCart";
import { useNavigate } from "react-router";

export default function CartModal({ setIsOpen }) {
  const { cart, updateQty, clearCart } = useCart();
  const totalPrice = cart.reduce((sum, item) => sum + (item.quantity * item.price), 0)

  const navigate = useNavigate()

  function handleCheckout() {
    setIsOpen(false)
    navigate("/checkout")
  }

  if (totalPrice === 0 ) {
    return (
      <div
        className="bg-white rounded-lg p-6 w-full flex flex-col gap-8 md:w-[377px] justify-center items-center"
      onClick={(e) => e.stopPropagation()} // prevent close on content click
      >
        <h5 className="font-bold text-center">Your cart is empty</h5>
        <svg width="23" height="20" xmlns="http://www.w3.org/2000/svg" ><path d="M8.625 15.833c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.054-.935-2.054-2.083 0-1.15.922-2.084 2.054-2.084zm9.857 0c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.053-.935-2.053-2.083 0-1.15.92-2.084 2.053-2.084zm-9.857 1.39a.69.69 0 00-.685.694.69.69 0 00.685.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zm9.857 0a.69.69 0 00-.684.694.69.69 0 00.684.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zM4.717 0c.316 0 .59.215.658.517l.481 2.122h16.47a.68.68 0 01.538.262c.127.166.168.38.11.579l-2.695 9.236a.672.672 0 01-.648.478H7.41a.667.667 0 00-.673.66c0 .364.303.66.674.66h12.219c.372 0 .674.295.674.66 0 .364-.302.66-.674.66H7.412c-1.115 0-2.021-.889-2.021-1.98 0-.812.502-1.511 1.218-1.816L4.176 1.32H.674A.667.667 0 010 .66C0 .296.302 0 .674 0zm16.716 3.958H6.156l1.797 7.917h11.17l2.31-7.917z" fill="#000000" fill-rule="nonzero"/></svg>
      </div>
          
    )
  }
  return (
    <div
      className="bg-white rounded-lg p-6 w-full flex flex-col gap-8 md:w-[377px]"
      onClick={(e) => e.stopPropagation()} // prevent close on content click
    >
      <div className="w-full flex justify-between items-center">
        <h4 className="font-bold text-[18px] leading-[1.3px] uppercase">
          cart ({cart.length})
        </h4>
        <button className="font-[400px] opacity-50 leading-[25px] cursor-pointer hover:text-[#D87D4A]"
        onClick={() => clearCart()}
        >
          Remove all
        </button>
      </div>
      <div className="flex flex-col gap-6">
        {
        cart.map((item) => {
          return (
            <div className="flex justify-between items-center">
              <div className="flex justify-center items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="size-16 rounded-lg"
                />
                <div className="flex flex-col gap-2">
                  <h6 className="font-bold leading-[15px]">{item.name}</h6>
                  <p className="text-sm font-bold opacity-50">$ {item.price}</p>
                </div>
              </div>
              <div className="flex justify-between p-[7px] w-20 bg-[#F1F1F1] text-[13px]">
                <button
                  onClick={()=>updateQty(item.id, Math.max(1, item.quantity-1))}
                  className="opacity-25 cursor-pointer hover:text-[#D87D4A]"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateQty(item.id, item.quantity+1)}
                  className="opacity-25 cursor-pointer hover:text-[#D87D4A]"
                >
                  +
                </button>
              </div>
            </div>
          );
        })
        }
      </div>
      <div className="flex justify-between items-center">
        <p className="font-[400px] opacity-50 leading-[25px] uppercase">Total</p>
        <h6 className="font-bold text-[18px] leading-0">$ {totalPrice}</h6>
      </div>
      <button className="bg-[#D87D4A] cursor-pointer w-full py-[15px] px-16 hover:bg-[#FBAF85] text-[13px] text-white tracking-px uppercase" onClick={handleCheckout}>checkout</button>
    </div>
  );
}
