import { useCart } from "../hooks/useCart";

export default function CartModal() {
  const { cart, updateQty } = useCart();
  
  return (
    <div
      className="bg-white rounded-lg p-6 w-full flex flex-col gap-8 md:w-[377px]"
      onClick={(e) => e.stopPropagation()} // prevent close on content click
    >
      <div className="w-full flex justify-between items-center">
        <h4 className="font-bold text-[18px] leading-[1.3px] uppercase">
          cart ({cart.length})
        </h4>
        <button className="font-[400px] opacity-50 leading-[25px]">
          Remove all
        </button>
      </div>
      <div className="flex flex-col gap-6">
        {cart.map((item) => {
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
                  className="opacity-25 cursor-pointer"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateQty(item.id, item.quantity+1)}
                  className="opacity-25 cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
