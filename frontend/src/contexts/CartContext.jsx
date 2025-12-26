import { createContext, useReducer } from "react";

export const CartContext = createContext()

function cartReducer(cart, action) {
    switch (action.type) {
        case "ADD_PRODUCT": {
            const existing = cart.find((product) => product.id === action.payload.id)

            if (existing) {
                return cart.map((product) => 
                    product.id === action.payload.id
                    ? { ...product, quantity: product.quantity + action.payload.quantity}
                    : product
                )
            }

            return [...cart, action.payload]
        }
    }
}

export function CartProvider({ children }) {
    const [cart, dispatch] = useReducer(cartReducer, [])
    function addToCart(product, quantity) {
        dispatch({

            type: "ADD_PRODUCT",
            payload: {
                id: product.id,
                price: product.price,
                name: product.name,
                image: product.image.mobile,
                quantity
            }
        }
        )
    }
    return (
        <CartContext.Provider value={{ cart, addToCart, dispatch }}>
            {children}
        </CartContext.Provider>
    )
}
