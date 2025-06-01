import React from "react";
import photo1 from "../images/ds-singh.jpg";
import photo2 from "../images/shiva-prakash.jpeg";
import photo3 from "../images/rkd.jpg";
import photo4 from "../images/prachi.png";
import ucjaiswal from "../images/uc-jaiswal.jpg";
import jp from "../images/jp.jpg";
import prachi from "../images/prachi.jpeg";
import sp from "../images/sarvapal-singh.jpg";
import preeti from "../images/preeti.jpeg";
import vijay from "../images/vijay tiwari.jpg";

const facultyMembers = [
  {
    name: "D.S Singh",
    designation: "Professor & Head",
    src: photo1,
  },
  {
    name: "Prof. Shiva Prakash",
    designation: "Professor",
    src: photo2,
  },
  {
    name: "Prof. U.C. Jaiswal",
    designation: "Professor",
    src: ucjaiswal,
  },
  {
    name: "Prof S.P singh",
    designation: " Professor",
    src: sp,
  },
  {
    name: "Prof R.K.dwiedi",
    designation: "ASSISTANT PROFESSOR",
    src: photo3,
  },
  {
    name: "vijay Tiwari",
    designation: " Assistant Professor",
    src: vijay,
  },
  {
    name: "Prachi Verma",
    designation: " Assistant Professor",
    src: prachi,
  },
  {
    name: "Preeti Singh",
    designation: "Assistant Professor",
    src: preeti,
  },
];

const MCAFaculty = () => {
  return (
    <div className="mt-8">
      <h2 className="text-3xl font-bold text-center text-blue-800">
        Our Faculty Members
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 px-8">
        {facultyMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md 
              hover:shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <img
              src={member.src}
              className="w-48 h-48 object-cover rounded-full"
              alt={`${member.name} - ${member.designation}`}
            />
            <h3 className="mt-4 text-xl font-semibold text-blue-700">
              {member.name}
            </h3>
            <p className="text-gray-600">{member.designation}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <a
          href="/Faculty" // Replace with your actual route/page
          className="bg-blue-400 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-600 transition duration-300"
        >
          View Faculties
        </a>
      </div>
    </div>
  );
};

export default MCAFaculty;
