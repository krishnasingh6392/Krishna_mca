import React from "react";
import photo from "../images/placement.avif";
import classroom from "../images/classroom.webp";
import hackathon from "../images/hackathon.png";
import csse from "../images/csse-team.png";
import society from "../images/society.jpg";
import convocation from "../images/convocation.jpg";
import studentachievement from "../images/student-achievement.jpg";

const Galleries = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-center text-blue-800 mt-8">
        MCA Galleries
      </h2>

      <div className="flex justify-between items-center p-24 mt-8 bg-gradient-to-br from-blue-400 to-red-300">
        <div className="">
          <p className="text-6xl h-60 w-96 bg-blue-100 rounded-r-full pt-20 text-blue-500 pl-8 font-serif">
            Glimpses
          </p>
        </div>
        <div className="w-1/2 mt-12">
          <p className="text-justify text-lg text-slate-900 leading-normal">
            MCA Gallery – Capturing Moments of Learning & Growth The MCA Gallery
            showcases the vibrant academic and extracurricular life of the
            Master of Computer Applications department at MMMUT. From coding
            workshops, project presentations, and tech fests to cultural
            celebrations and alumni visits, each photo reflects the passion,
            talent, and teamwork of our students and faculty. These moments not
            only highlight our achievements but also the spirit of innovation,
            collaboration, and lifelong learning that defines the MCA community
            at MMMUT.
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center mt-16 px-12">
        <div>
          <img
            src={classroom}
            className="w-72 h-60 shadow-xl rounded-md"
            alt=""
          />
          <p className="text-center text-blue-700 font-semibold mt-4">
            1. Classroom & Lab Activities
          </p>
        </div>

        <div>
          <img
            src={hackathon}
            className="w-72 h-60 shadow-xl rounded-md"
            alt=""
          />
          <p className="text-center font-semibold text-blue-700 mt-4">
            2. Technical Events & Hackathons
          </p>
        </div>

        <div>
          <img
            src={studentachievement}
            className="w-72 h-60 shadow-xl rounded-md object-fill"
            alt=""
          />
          <p className="text-center font-semibold text-blue-700 mt-4">
            3. Student Achievements
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center mt-12 px-12">
        <div>
          <img src={csse} className="w-72 h-60 shadow-xl rounded-md" alt="" />
          <p className="text-center font-semibold text-blue-700 mt-4">
            5. Cultural & Festive Moments
          </p>
        </div>

        <div>
          <img
            src={society}
            className="w-72 h-60 shadow-xl rounded-md"
            alt=""
          />
          <p className="text-center font-semibold text-blue-700 mt-4">
            7.MCA Society Activities
          </p>
        </div>
        <div>
          <img
            src={convocation}
            className="w-72 h-60 shadow-xl rounded-md"
            alt=""
          />
          <p className="text-center font-semibold text-blue-700 mt-4">
            7.MCA Society Activities
          </p>
        </div>
      </div>
    </div>
  );
};

export default Galleries;
