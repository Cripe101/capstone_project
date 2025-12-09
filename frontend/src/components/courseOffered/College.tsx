import { useNavigate } from "react-router-dom";

const College = () => {
  const data = [
    {
      id: "asjdfasdojasdk",
      course: "Bachelor of Science in Computer Science ( BSCS )",
      description: `a four-year degree program that focuses on the theoretical and
          mathematical foundations of computing, including algorithms,
          programming, and software development. It prepares students for
          careers in areas like software engineering, data analysis, and
          research, or for further graduate studies.`,
    },
    {
      id: "asdiufashiocjaw",
      course: "Bachelor of Science in Information Technology ( BSIT )",
      description: `an degree program focused on the practical application of technology to solve problems for individuals and organizations. The curriculum covers core areas like software, hardware, networking, and databases, preparing graduates for roles that involve installing, customizing, managing, and maintaining information technology infrastructure. `,
    },
    {
      id: "khjgfgahjsacs",
      course: "Bachelor of Science in Business Administration ( BSBA )",
      description: `a four-year degree that provides students with a strong foundation in core business principles like accounting, finance, marketing, and management. Unlike a BBA (Bachelor of Business Administration), a BSBA degree emphasizes quantitative skills, analysis, and the technical aspects of business, making it suitable for students who want to pursue specialized, data-driven roles. `,
    },
    {
      id: "wertyuiksjdb",
      course: "Bachelor of Science in Hospitality Management ( BSHM )",
      description: `a four-year degree program that prepares students for leadership and management careers in the hospitality and tourism industries. The curriculum combines business principles with hands-on experience in areas like hotel operations, food and beverage service, events management, and tourism planning. The program emphasizes developing practical and managerial skills to manage operations and serve guests in various sectors, from hotels and restaurants to cruise lines and event venues. `,
    },
  ];

  const navigate = useNavigate();
  return (
    <div className="p-10 grid grid-cols-2 gap-5">
      {data.map((data) => (
        <section
          onClick={() => navigate(`/course-offered-college-info/${data.id}`)}
          className="line-clamp-8 bg-linear-to-br from-blue-900 to-red-700 py-2 px-4 text-white rounded-md hover:to-blue-900 hover:cursor-pointer duration-200"
        >
          <h1 className="font-semibold text-xl text-red-50">{data.course}</h1>
          <p>{data.description}</p>
        </section>
      ))}
    </div>
  );
};

export default College;
