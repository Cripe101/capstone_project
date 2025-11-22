const About = () => {
  return (
    <div className="grid grid-cols-3 gap-5 bg-blue-900 p-5 text-white">
      <section className="flex flex-col items-center font-semibold text-white">
        <img
          src="../New Tab_files/aclc-logo.png"
          alt=""
          className="w-40 rounded-full"
        />
        <p>ACLC College of Ormoc, INC.</p>
      </section>
      <section>
        <h1 className="font-bold text-red-300">COLLEGE</h1>
        <p className="text-sm hover:text-red-300 duration-200">
          Bachelor's of Science in Information Technology
        </p>
        <p className="text-sm hover:text-red-300 duration-200">
          Bachelor's of Science in Computer Science
        </p>
        <p className="text-sm hover:text-red-300 duration-200">
          Bachelor's of Science in Hospitality Management
        </p>
        <p className="text-sm hover:text-red-300 duration-200">
          Bachelor's of Science in Business Administration
        </p>
      </section>
      <section>
        <h1 className="font-bold text-red-300">SENIOR HIGH</h1>
        <p className="text-sm hover:text-red-300 duration-200">STEM</p>
        <p className="text-sm hover:text-red-300 duration-200">GAS</p>
        <p className="text-sm hover:text-red-300 duration-200">HUMS</p>
        <p className="text-sm hover:text-red-300 duration-200">CSS</p>
      </section>
    </div>
  );
};

export default About;
