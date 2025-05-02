import React from "react";

const resources = [
  {
    title: "Junior Year, Semester-I",
    data: [
      { paperCode: "MCA-111", subject: "Oops with C++", credit: 5 },
      {
        paperCode: "MCA-112",
        subject: "Database Management System",
        credit: 5,
      },
      { paperCode: "MCA-113", subject: "COA", credit: 4 },
      { paperCode: "MCA-114", subject: "Software Engineering", credit: 4 },
      { paperCode: "MCA-115", subject: "Software Lab-1", credit: 2 },
      { paperCode: "Audit Subject", subject: "Bhm", credit: 0 },
    ],
    totalCredit: 20,
  },
  {
    title: "Junior Year, Semester-II",
    data: [
      { paperCode: "MCA-201", subject: "JAVA Programming", credit: 5 },
      {
        paperCode: "MCA-202",
        subject: "Data Structures & Applications",
        credit: 5,
      },
      { paperCode: "MCA-203", subject: "Web Technologies", credit: 5 },
      { paperCode: "MCA-204", subject: "Operating System Concepts", credit: 5 },
      { paperCode: "MCA-205", subject: "Software Lab-2", credit: 2 },
      { paperCode: "Audit Subject", subject: "CBM", credit: 0 },
    ],
    totalCredit: 22,
  },
  {
    title: "Senior Year, Semester-III",
    data: [
      { paperCode: "MCA-301", subject: "Artificial Intelligence", credit: 5 },
      { paperCode: "MCA-302", subject: "Computer Network", credit: 5 },
      {
        paperCode: "MCA-303",
        subject: "Design & Analysis of Algorithms",
        credit: 5,
      },
      { paperCode: "MCA-305", subject: "Mini Project", credit: 2 },
      { paperCode: "MCA-306", subject: "Python Programming", credit: 5 },
      {
        paperCode: "MCA-IND",
        subject: "Industrial/Practical Training",
        credit: 0,
      },
      { paperCode: "MCA-359", subject: "Distributed System", credit: 4 },
    ],
    totalCredit: 26,
  },
  {
    title: "Senior Year, Semester-IV",
    data: [
      { paperCode: "MCA-401", subject: "Internet of Things", credit: 5 },
      { paperCode: "Audit", subject: "Seminar", credit: 0 },
      { paperCode: "MCA-456", subject: "Data Science and Analysis", credit: 4 },
      { paperCode: "MCA-Project", subject: "Project", credit: 10 },
    ],
    totalCredit: 19,
  },
];

const Resources = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-center text-blue-900 mt-8">
        MCA Resources
      </h2>
      <div className="flex justify-center items-center gap-8 px-4 py-8 flex-wrap">
        {resources.map((semester, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br from-blue-200 to-blue-100 w-full md:w-1/3 h-auto rounded-lg shadow-lg p-4`}
          >
            <p className="text-center text-2xl mt-2 text-blue-600 font-semibold">
              {semester.title}
            </p>
            <table className="table-auto border mx-4 my-2">
              <thead>
                <tr>
                  <th className="border border-blue-500 px-1 py-2">
                    Paper Code
                  </th>
                  <th className="border border-blue-500 px-24 py-2">Subject</th>
                  <th className="border border-blue-500 px-6 py-2">Credit</th>
                </tr>
              </thead>
              <tbody>
                {semester.data.map((course, index) => (
                  <tr key={index}>
                    <td className="border border-blue-500 px-1 py-2 text-center">
                      {course.paperCode}
                    </td>
                    <td className="border border-blue-500 px-1 py-2 text-center">
                      {course.subject}
                    </td>
                    <td className="border border-blue-500 px-6 py-2 text-center">
                      {course.credit}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-center font-semibold text-lg text-blue-600">
              Total Credit: {semester.totalCredit}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <a
          href="/Resources" // Replace with your actual route/page
          className="bg-blue-400 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-600 transition duration-300"
        >
          View Resources
        </a>
      </div>
    </div>
  );
};

export default Resources;
