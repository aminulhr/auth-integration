import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Root = () => {
  return (
    <div className="w-10/12 mx-auto pt-20">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
