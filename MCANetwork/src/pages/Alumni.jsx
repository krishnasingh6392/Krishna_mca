import React from "react";
import photo1 from "../images/shiva-prakash.jpeg";

const alumni = [
  {
    name: "Gaurav Dixit",
    src: photo1,
    batch: 2024,
    company: "Galgotias University",
    linkedin: "https://www.linkedin.com/in/krishna-nand-kn/",
    message:
      "Gaurav Dixit, a proud alumnus of the MCA program at MMMUT, is currently serving as an Assistant Professor at Galgotias University. His dedication to education and continuous learning reflects the values and academic excellence instilled during his time at the university.",
  },
  {
    name: "Krishna Singh",
    src: photo1,
    batch: 2024,
    company: "Galgotias University",
    linkedin: "https://www.linkedin.com/in/krishna-nand-kn/",
    message:
      "Krishna Singh, a proud alumnus of the MCA program at MMMUT, is currently serving as an Assistant Professor at Galgotias University. His dedication to education and continuous learning reflects the values and academic excellence instilled during his time at the university.",
  },
  {
    name: "Krishna Singh",
    src: photo1,
    batch: 2024,
    company: "Galgotias University",
    linkedin: "https://www.linkedin.com/in/krishna-nand-kn/",
    message:
      "Krishna Singh, a proud alumnus of the MCA program at MMMUT, is currently serving as an Assistant Professor at Galgotias University. His dedication to education and continuous learning reflects the values and academic excellence instilled during his time at the university.",
  },
  {
    name: "Gaurav Dixit",
    src: photo1,
    batch: 2024,
    company: "Galgotias University",
    linkedin: "https://www.linkedin.com/in/krishna-nand-kn/",
    message:
      "Gaurav Dixit, a proud alumnus of the MCA program at MMMUT, is currently serving as an Assistant Professor at Galgotias University. His dedication to education and continuous learning reflects the values and academic excellence instilled during his time at the university.",
  },
  {
    name: "Krishna Singh",
    src: photo1,
    batch: 2024,
    company: "Galgotias University",
    linkedin: "https://www.linkedin.com/in/krishna-nand-kn/",
    message:
      "Krishna Singh, a proud alumnus of the MCA program at MMMUT, is currently serving as an Assistant Professor at Galgotias University. His dedication to education and continuous learning reflects the values and academic excellence instilled during his time at the university.",
  },
  {
    name: "Krishna Singh",
    src: photo1,
    batch: 2024,
    company: "Galgotias University",
    linkedin: "https://www.linkedin.com/in/krishna-nand-kn/",
    message:
      "Krishna Singh, a proud alumnus of the MCA program at MMMUT, is currently serving as an Assistant Professor at Galgotias University. His dedication to education and continuous learning reflects the values and academic excellence instilled during his time at the university.",
  },
];

const Alumni = () => {
  return (
    <div className="p-8">
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-8">
        Our Alumni
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {alumni.map((alumniItem, index) => (
          <div
            key={index}
            className="card bg-gradient-to-br from-blue-200 to-blue-100 w-96 shadow-md hover:shadow-lg transition-shadow p-6 rounded-lg"
          >
            <figure className="flex flex-col items-center gap-4">
              <img
                src={alumniItem.src}
                className="rounded-xl h-48 w-48 object-cover"
                alt={`${alumniItem.name} - MCA Alumni`}
              />
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  {alumniItem.name}
                </h3>
                <p className="text-gray-600">Batch: {alumniItem.batch}</p>
                <p className="text-gray-600">Company: {alumniItem.company}</p>
                <a
                  href={alumniItem.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 underline"
                >
                  LinkedIn Profile
                </a>
              </div>
              <p className="text-justify bg-blue-50 w-full p-4 rounded-lg shadow-sm">
                {alumniItem.message}
              </p>
            </figure>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <a
          href="/alumni" // Replace with your actual route/page
          className="bg-blue-400 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-600 transition duration-300"
        >
          View Alumni
        </a>
      </div>
    </div>
  );
};

export default Alumni;
