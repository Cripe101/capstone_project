import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Copyright from "../components/Copyright";

const HomeLayout = () => {
  return (
    <div>
      <div className="flex flex-col">
        <div>
          <Navbar />
        </div>
        <div className="h-full">
          <Outlet />
        </div>
      </div>
      <div className="">
        <Copyright />
      </div>
    </div>
  );
};

export default HomeLayout;
