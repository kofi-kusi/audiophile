import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import "./index.css";
import App from "./App.jsx";
import router from "./routes";
import { ProductsProvider } from "./contexts/ProductsContext.jsx";
import { CartProvider } from "./contexts/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <ProductsProvider>
        <RouterProvider router={router} />
      </ProductsProvider>
    </CartProvider>
  </StrictMode>,
);
