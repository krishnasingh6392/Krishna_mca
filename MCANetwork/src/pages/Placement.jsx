import React from "react";

import tcs from "../images/logo.png";
import ibm from "../images/ibm.jpg";
import accenture from "../images/accenture.png";
import streebo from "../images/streebo.jpeg";
import ltimind from "../images/ltimindtree.webp";
import cyfuture from "../images/cyfuture.png";
import josh from "../images/josh.png";
import qss from "../images/qss.png";

import gfg from "../images/gfg.jpg";
import hiremi from "../images/hiremi.png";
import xfanatical from "../images/x fanatical.webp";
import tothenew from "../images/to the new.jpg";
import bit from "../images/bit.png";

const companies = [
  {
    src: ibm,
    name: "IBM",
  },
  {
    src: accenture,
    name: "ACCENTURE",
  },
  {
    src: tothenew,
    name: "TO THE NEW",
  },
  {
    src: hiremi,
    name: "HIREMI",
  },
  {
    src: qss,
    name: "QSS",
  },
  {
    src: bit,
    name: "BIT",
  },
  {
    src: streebo,
    name: "STTREEBO",
  },
  {
    src: ltimind,
    name: "LTIMINDTREE",
  },
  {
    src: cyfuture,
    name: "CYFUTURE",
  },
  {
    src: gfg,
    name: "GFG",
  },
  {
    src: xfanatical,
    name: "X FANATICAL",
  },
  {
    src: josh,
    name: "JOSH TECHNOLOGY",
  },
];

const Placement = () => {
  return (
    <div>
      <div className="mt-8">
        <h2 className="text-3xl font-bold text-center text-blue-800">
          Our Recruiters
        </h2>
        <div className="grid grid-cols-4 gap-8 mt-8 px-8">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition"
            >
              <img
                src={company.src}
                className="w-24 h-24 object-contain"
                alt={`${company.name} Logo`}
              />
              <p className="mt-2 font-semibold text-blue-700">{company.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <a
          href="/placement" // Replace with your actual route/page
          className="bg-blue-400 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition duration-300"
        >
          View Placements
        </a>
      </div>
    </div>
  );
};

export default Placement;
