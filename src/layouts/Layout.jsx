import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="bg-black md:px-5">  
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
