import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import Headphones from "../pages/Category/Headphones/Headphones";
import HeadphoneDetail from "../pages/Category/Headphones/ProductDetail";
import Earphones from "../pages/Category/Earphones/Earphones";
import EarphoneDetail from "../pages/Category/Earphones/ProductDetail";
import Speakers from "../pages/Category/Speakers/Speakers";
import SpeakerDetail from "../pages/Category/Speakers/ProductDetail";


const routes = [
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element:<Home />},
            { path: "headphones", element: <Headphones />},
            { path: "headphones/:id", element: <HeadphoneDetail />},
            { path: "earphones", element: <Earphones />},
            { path: "earphones/:id", element: <EarphoneDetail />},
            { path: "speakers", element: <Speakers />},
            { path: "speakers/:id", element: <SpeakerDetail />},
        ]  
    }
];

export default routes;