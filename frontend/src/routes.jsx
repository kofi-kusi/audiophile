import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout"
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {index: true, Component: HomePage}
        ]
    }
])

export default router;