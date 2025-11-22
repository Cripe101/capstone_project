import EventBox from "./EventBox";

const HomePage = () => {
  return (
    <div className="">
      <section className="grid grid-cols-[1fr_1fr_3fr] py-5 px-20 bg-blue-900">
        <img
          src="../New Tab_files/aclc-logo-text.png"
          alt=""
          className="w-60 p-2 bg-white rounded-lg"
        />
        <p className="text-white font-serif">
          {" "}
          ACLC College is a member of the AMA Education System and is one of the
          leading computer schools in the country.
        </p>
      </section>
      <EventBox />
    </div>
  );
};

export default HomePage;
