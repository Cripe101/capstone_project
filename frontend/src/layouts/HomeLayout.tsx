import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Copyright from "../components/Copyright";
import About from "../components/About";

const HomeLayout = () => {
  return (
    <div>
      <div className="flex flex-col">
        <div>
          <Navbar />
        </div>
        <div className="h-full pt-18">
          <Outlet />
        </div>
      </div>
      <div className="">
        <About />
        <Copyright />
      </div>
    </div>
  );
};

export default HomeLayout;
