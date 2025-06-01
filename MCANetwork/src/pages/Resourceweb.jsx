import React from "react";
import { Link } from "react-router-dom";

const resources = [
  {
    subject: "oops with c++",
    units: [
      {
        name: "Unit 1",
        link: "/files/Unit-1_oops.pdf",
      },
      { name: "Unit 2", link: "/files/Unit-2_oops.pdf" },
      { name: "Unit 3", link: "/files/Unit-3_oops.pdf" },
      { name: "Unit 4", link: "/files/Unit-4_oops.pdf" },
    ],
  },
  {
    subject: "database management system",
    units: [
      { name: "Unit 1", link: "/files/Unit-1_dbms.pdf" },
      { name: "Unit 2", link: "/files/Unit-2_dbms.pdf" },
      { name: "Unit 3", link: "/files/Unit-3_dbms.pdf" },
      { name: "Unit 4", link: "/files/Unit-4_dbms.pdf" },
    ],
  },
  {
    subject: "COA",
    units: [
      { name: "Unit 1", link: "/files/unit1.pdf" },
      { name: "Unit 2", link: "/ds_unit2.pdf" },
      { name: "Unit 3", link: "/ds_unit3.pdf" },
      { name: "Unit 4", link: "/ds_unit3.pdf" },
    ],
  },
  {
    subject: "SOFTWARE ENGINEERING",
    units: [
      { name: "Unit 1", link: "/files/unit1.pdf" },
      { name: "Unit 2", link: "/ds_unit2.pdf" },
      { name: "Unit 3", link: "/ds_unit3.pdf" },
      { name: "Unit 4", link: "/ds_unit3.pdf" },
    ],
  },
  {
    subject: "JAVA Programming",
    units: [
      { name: "Unit 1", link: "/files/unit1.pdf" },
      { name: "Unit 2", link: "/ds_unit2.pdf" },
      { name: "Unit 3", link: "/ds_unit3.pdf" },
      { name: "Unit 4", link: "/ds_unit3.pdf" },
    ],
  },
  {
    subject: "Data Structures & Applications",
    units: [
      { name: "Unit 1", link: "/files/unit1.pdf" },
      { name: "Unit 2", link: "/ds_unit2.pdf" },
      { name: "Unit 3", link: "/ds_unit3.pdf" },
      { name: "Unit 4", link: "/ds_unit3.pdf" },
    ],
  },
  {
    subject: "Web Technologies",
    units: [
      { name: "Unit 1", link: "/files/unit1.pdf" },
      { name: "Unit 2", link: "/ds_unit2.pdf" },
      { name: "Unit 3", link: "/ds_unit3.pdf" },
      { name: "Unit 4", link: "/ds_unit3.pdf" },
    ],
  },
  {
    subject: "Operating System Concepts",
    units: [
      { name: "Unit 1", link: "/files/unit1.pdf" },
      { name: "Unit 2", link: "/ds_unit2.pdf" },
      { name: "Unit 3", link: "/ds_unit3.pdf" },
      { name: "Unit 4", link: "/ds_unit3.pdf" },
    ],
  },
  {
    subject: "Artificial Intelligence",
    units: [
      { name: "Unit 1", link: "/files/unit1.pdf" },
      { name: "Unit 2", link: "/ds_unit2.pdf" },
      { name: "Unit 3", link: "/ds_unit3.pdf" },
      { name: "Unit 4", link: "/ds_unit3.pdf" },
    ],
  },
  {
    subject: "Computer Network",
    units: [
      { name: "Unit 1", link: "/files/unit1.pdf" },
      { name: "Unit 2", link: "/ds_unit2.pdf" },
      { name: "Unit 3", link: "/ds_unit3.pdf" },
      { name: "Unit 4", link: "/ds_unit3.pdf" },
    ],
  },
  {
    subject: "Design & Analysis of Algorithms",
    units: [
      { name: "Unit 1", link: "/files/unit1.pdf" },
      { name: "Unit 2", link: "/ds_unit2.pdf" },
      { name: "Unit 3", link: "/ds_unit3.pdf" },
      { name: "Unit 4", link: "/ds_unit3.pdf" },
    ],
  },
  {
    subject: "Python Programming",
    units: [
      { name: "Unit 1", link: "/files/unit1.pdf" },
      { name: "Unit 2", link: "/ds_unit2.pdf" },
      { name: "Unit 3", link: "/ds_unit3.pdf" },
      { name: "Unit 4", link: "/ds_unit3.pdf" },
    ],
  },
  {
    subject: "distributed system",
    units: [
      { name: "Unit 1", link: "/files/unit1.pdf" },
      { name: "Unit 2", link: "/ds_unit2.pdf" },
      { name: "Unit 3", link: "/ds_unit3.pdf" },
      { name: "Unit 4", link: "/ds_unit3.pdf" },
    ],
  },
  {
    subject: "Internet of Things",
    units: [
      { name: "Unit 1", link: "/files/unit1.pdf" },
      { name: "Unit 2", link: "/ds_unit2.pdf" },
      { name: "Unit 3", link: "/ds_unit3.pdf" },
      { name: "Unit 4", link: "/ds_unit3.pdf" },
    ],
  },
  {
    subject: "Data science and analysis",
    units: [
      { name: "Unit 1", link: "/files/unit1.pdf" },
      { name: "Unit 2", link: "/ds_unit2.pdf" },
      { name: "Unit 3", link: "/ds_unit3.pdf" },
      { name: "Unit 4", link: "/ds_unit3.pdf" },
    ],
  },
];

const pyqsYearly = [
  {
    year: "2024",
    type: "Minor",
    link: "/files/pyq_minor_2024.pdf",
  },
  {
    year: "2024",
    type: "Major",
    link: "/files/pyq_major_2024.pdf",
  },
  {
    year: "2023",
    type: "Minor",
    link: "/files/pyq_minor_2023.pdf",
  },
  {
    year: "2023",
    type: "Major",
    link: "/files/pyq_major_2023.pdf",
  },
  {
    year: "2022",
    type: "Minor",
    link: "/files/pyq_minor_2022.pdf",
  },
  {
    year: "2022",
    type: "Major",
    link: "/files/pyq_major_2022.pdf",
  },
];

const Resourceweb = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-5">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-12">
        Subject-Wise Notes
      </h1>

      {resources.length === 0 ? (
        <p className="text-center text-gray-600">No resources available.</p>
      ) : (
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.map((subject, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
            >
              <h2 className="text-2xl font-semibold text-blue-600 mb-4 text-center">
                {subject.subject}
              </h2>
              <ul className="space-y-3">
                {subject.units.map((unit, idx) => (
                  <li key={idx + "" + unit.link}>
                    {unit?.link ? (
                      <a
                        href={unit.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:underline"
                        aria-label={`Download ${unit.name}`}
                        title={`Download ${unit.name}`}
                      >
                        📄 Download {unit.name}
                      </a>
                    ) : (
                      <span className="text-gray-500">No link available</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      <h2 className="text-3xl font-bold text-center text-blue-700 mt-12 mb-6">
        PYQs (Year-wise)
      </h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {pyqsYearly.map((pyq, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
          >
            <h3 className="text-2xl font-semibold text-blue-600 mb-4 text-center">
              {pyq.year} - {pyq.type} Exam
            </h3>
            <a
              href={pyq.link}
              download
              className="text-green-600 hover:underline block text-center w-full"
              aria-label={`Download ${pyq.year} ${pyq.type} Exam`}
              title={`Download ${pyq.year} ${pyq.type} Exam`}
            >
              📥 Download PYQ
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resourceweb;
