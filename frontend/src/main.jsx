import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import "./index.css";
import App from "./App.jsx";
import router from "./routes";
import { ProductsProvider } from "./contexts/ProductsContext.jsx";
import { CartProvider } from "./contexts/CartContext.jsx";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <ProductsProvider>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </ProductsProvider>
    </CartProvider>
  </StrictMode>,
);
