import React from "react";
import vinay from "../images/vinay jain.png";
import javed from "../images/javed khan.png";
import soren from "../images/soren.png";

const Alumni = () => {
  // Array of alumni objects
  const alumniData = [
    {
      id: 1,
      name: "Vinay Kumar Jain",
      image: vinay,
      company: "Accenture",
      linkedin: "https://www.linkedin.com/in/jainvinay/",
    },
    {
      id: 2,
      name: "Sonika Sharan",
      image: soren,
      company: "PureSoftware Ltd",
      linkedin: "https://www.linkedin.com/in/sonika-sharan-12a5a2158/",
    },
    {
      id: 3,
      name: "Javed Khan",
      image: javed,
      company: "Go Developer",
      linkedin: "https://www.linkedin.com/in/javed9700/",
    },
  ];

  return (
    <div className="text-center py-10">
      <h2 className="text-3xl font-semibold mb-6">Our Alumni</h2>
      <div className="flex justify-center gap-8 flex-wrap">
        {alumniData.map((alumni) => (
          <div
            key={alumni.id}
            className="w-64 p-4 border border-gray-300 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105"
          >
            <img
              src={alumni.image}
              alt={alumni.name}
              className="h-32 w-32 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-1">{alumni.name}</h3>
            <p className="text-gray-600 mb-2">{alumni.company}</p>
            <a
              href={alumni.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View LinkedIn Profile
            </a>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <a
          href="/Alumni" // Replace with your actual route/page
          className="bg-blue-400 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-600 transition duration-300"
        >
          View Alumni
        </a>
      </div>
    </div>
  );
};

export default Alumni;
