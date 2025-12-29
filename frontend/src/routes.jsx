import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage"

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      {
        path: ":category",
        Component: CategoryPage,
      },
      { path: ":category/:slug", Component: ProductPage},
      { path: "checkout", Component: CheckoutPage }
    ],
  },
]);

export default router;
