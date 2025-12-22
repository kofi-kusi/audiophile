import React, { Children, createContext } from 'react'
import productList from "../data.json"

const ProductsContext = createContext()

function ProductsProvider( {children} ) {
  return (
    <ProductsContext.Provider value={productList}>
        {children}
    </ProductsContext.Provider>
  )
}

export {ProductsContext, ProductsProvider}
