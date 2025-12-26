import { useCart } from '../hooks/useCart'

export default function CartModal() {
  const { cart } = useCart()
  return (
    <div
        className="bg-white rounded-lg p-6 w-full md:w-[377px]"
        onClick={(e) => e.stopPropagation()} // prevent close on content click
      >
        <div className='w-full flex justify-between items-center'>
            <h4 className='font-bold text-[18px] leading-[1.3px] uppercase'>cart (3)</h4>
            <button className='font-[400px] opacity-50 leading-[25px]'>Remove all</button>
        </div>
        <div>
          {
            cart.map(item => {
              return (
                <div>
                  <p>
                    {item.name}
                  </p>
                  <p>{item.quantity}</p>

                </div>
              )
            })
          }
        </div>
        
      </div>
  )
}
