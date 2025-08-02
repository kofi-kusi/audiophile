import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <div className="bg-black md:px-6">
        <Header />
      </div>
      <main className="md:px-6">
        <Outlet />
      </main>
      <div className="bg-black md:px-6">
        <Footer />
      </div>
    </div>
  );
}
