const Navbar = () => {
  return (
    <div className="bg-blue-900 flex flex-row py-2 px-4 items-center justify-between">
      <section className="flex items-center gap-2">
        <img
          src="../New Tab_files/aclc-logo.png"
          alt="ACLC"
          className="rounded-full w-14 aspect-square"
        />
        <h1 className="text-white font-sans text-wrap w-26">
          ACLC College of Ormoc
        </h1>
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
    </div>
  );
};

export default Navbar;
