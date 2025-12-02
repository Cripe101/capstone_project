import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="z-100 w-full fixed bg-blue-900 grid grid-cols-[1fr_3fr] py-2 px-4 items-center border-b border-b-white/60">
      <section className="flex items-center gap-2">
        <img
          src="../New Tab_files/aclc-logo.png"
          alt="ACLC"
          className="rounded-full w-14 aspect-square"
        />
        <h1 className="text-white font-sans text-wrap w-26">ACLC Ormoc</h1>
      </section>
      <span className="flex justify-between items-center">
        <section className="text-white flex">
          <button
            onClick={() => navigate("/")}
            className="px-4 py-4 rounded-sm hover:bg-blue-950 hover:cursor-pointer duration-300"
          >
            Home
          </button>
          <button className="flex group relative items-center gap-2 px-4 py-4 rounded-sm hover:bg-blue-950 duration-300">
            <p>About</p> <p className="text-xs">&#9660;</p>
            <section className="hidden overflow-hidden text-sm rounded-sm group-hover:absolute group-hover:flex bg-blue-900 -bottom-22 w-42 left-0 flex-col">
              <h1
                onClick={() => navigate("/mission-vision")}
                className="border-b border-b-white/50 p-2 hover:bg-blue-950 hover:cursor-pointer duration-200"
              >
                Mission, Vision & Core values
              </h1>
              <h1
                onClick={() => navigate("/history")}
                className="border-b border-b-white/50 p-2 hover:bg-blue-950 hover:cursor-pointer duration-200"
              >
                History
              </h1>
            </section>
          </button>
          <button className="flex group relative items-center gap-2 px-4 py-4 rounded-sm hover:bg-blue-950 duration-300">
            <p>Course Offered </p>
            <p className="text-xs">&#9660;</p>
            <section className="hidden overflow-hidden text-sm rounded-sm group-hover:absolute group-hover:flex bg-blue-900 -bottom-18 w-42 left-0 flex-col">
              <h1
                onClick={() => navigate("/course-offered-college")}
                className="border-b border-b-white/50 p-2 hover:bg-blue-950 hover:cursor-pointer duration-200"
              >
                College
              </h1>
              <h1
                onClick={() => navigate("/course-offered-seniorhigh")}
                className="border-b border-b-white/50 p-2 hover:bg-blue-950 hover:cursor-pointer duration-200"
              >
                Senior High
              </h1>
            </section>
          </button>
        </section>
        <section className="flex items-center gap-3 pr-20">
          <button
            type="button"
            className="bg-red-700 border-2 border-red-700 px-4 py-2 text-sm rounded-2xl font-bold font-serif text-slate-200 hover:cursor-pointer active:scale-90 duration-200"
          >
            PRE-REGISTER
          </button>
          <button
            type="button"
            className="bg-blue-900 border-2 border-white px-4 py-2 text-sm rounded-2xl font-bold font-serif text-white hover:border-red-700 active:scale-90 duration-200"
          >
            ENROLL ONLINE
          </button>
        </section>
      </span>
    </div>
  );
};

export default Navbar;
