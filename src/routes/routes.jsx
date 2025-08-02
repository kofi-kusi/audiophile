import Layout from "../layouts/Layout";
import Home from "../pages/Home";

const routes = [
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element:<Home/>},
        ]  
    }
];

export default routes;