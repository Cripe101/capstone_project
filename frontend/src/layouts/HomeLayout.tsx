import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Copyright from "../components/Copyright";
import About from "../components/About";
import Announcement from "../components/Announcement";
import InBar from "../components/InBar";

const HomeLayout = () => {
  return (
    <div>
      <div className="flex flex-col">
        <div>
          <Navbar />
          <InBar />
        </div>
        <div className="h-full pt-5 grid grid-cols-[2fr_1fr] gap-1">
          <Outlet />
          <section className="p-10 flex items-center border border-slate-600 rounded-md m-10">
            <Announcement />
          </section>
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
