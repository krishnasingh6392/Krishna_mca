import React from "react";
import dssingh from "../images/ds-singh.jpg";
import rkd from "../images/rkd.jpg";
import shivaPrakash from "../images/shiva-prakash.jpeg";
import prachi from "../images/prachi.png";
import csseTeam from "../images/csse-team.png";
import csselogo from "../images/csse-logo.png";

const CSSE = () => {
  return (
    <div>
      <div className="society flex justify-center items-center gap-12 bg-gradient-to-br from-blue-400 to-red-300 p-20 mt-12">
        <div className="csse-tag text-9xl text-blue-600 mb-4 font-raleway underline decoration-wavy decoration-blue-500 underline-offset-8 mt-4">
          CSSE
        </div>
        <div className="mt-4">
          <p className="text-3xl">
            Computer Society of Software Engineers Departmental society of
          </p>
          <div className="overflow-x-auto">
            <p className="text-2xl text-center mt-4 text-blue-600 animate-marquee">
              MCA Department, MMMUT Gorakhpur
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-evenly items-center mt-8">
        <div className="csse-logo">
          <img src={csselogo} className="h-56" alt="" />
        </div>
        <div>
          <h1 className="text-3xl font-semibold">About Society</h1>
          <ul className="list-disc mt-4 font-raleway text-slate-800 text-xl">
            <li>
              Founded in the year 2013, by Alumni Respected
              <span className="font-semibold text-blue-600">
                {" "}
                Ankit Porwal{" "}
              </span>{" "}
              and
              <span className="font-semibold text-blue-600">Vivek Samele.</span>
            </li>
            <li>The basic OBJECTIVES of the society are:</li>
            <li>to develop the managerial and soft skills of the students</li>
            <li>
              to organize activities for social awareness and social benefits.
            </li>
            <li>To increase mutual bonding among each other.</li>
          </ul>
        </div>
      </div>
      <h2 className="text-4xl font-bold text-center text-blue-900 mt-12">
        Faculty Heads
      </h2>
      <div className="faculty-heads flex justify-evenly items-center mt-16 pt-12 px-16">
        <div className="bbg-green h-48 w-48">
          <img src={shivaPrakash} className="h-48 rounded-lg" alt="error" />
          <p className="text-center font-normal">Shiva Prakash</p>
          <p className="font-semibold font-raleway text-blue-500 text-center text-lg">
            faculty president
          </p>
        </div>
        <div className="bbg-green h-48 w-48">
          <img src={dssingh} className="rounded-lg" alt="error" />
          <p className="text-center font-normal">D.S Singh</p>
          <p className="font-semibold text-blue-500 text-center text-lg">
            faculty vice-president
          </p>
        </div>
        <div className="bbg-green h-48 w-48">
          <img src={rkd} className="rounded-lg" alt="error" />
          <p className="text-center font-normal">R.K Dwivedi</p>
          <p className="font-semibold font-raleway text-blue-500 text-center text-lg">
            faculty secretary
          </p>
        </div>
        <div className="bbg-green h-48 w-48">
          <img src={prachi} className="h-48 w-48 rounded-lg" alt="error" />
          <p className="text-center font-normal">Prachi Verma</p>
          <p className="font-semibold font-raleway text-blue-600 text-center text-lg">
            faculty treasurer
          </p>
        </div>
      </div>

      <h2 className="text-4xl font-bold text-center text-blue-900 mt-32">
        Society Events
      </h2>

      <div className="society-events flex justify-between items-center mt-24 px-10">
        <div className="flower">
          <ul className="h-80 w-80 ml-8 bg-gradient-to-br from-blue-300 to-blue-200 text-justify pl-12 rounded-b-full">
            <h2 className="text-2xl font-bold text-center pt-8 underline underline-offset-4 text-blue-600">
              Formal Events
            </h2>
            <li className="text-xl mt-4 text-center font-raleway">
              Techinical Presentation
            </li>
            <li className="text-xl text-center font-raleway">Debate</li>
            <li className="text-xl text-center font-raleway">Extempore</li>
            <li className="text-xl text-center font-raleway">
              Group Discussion
            </li>
            <li className="text-xl text-center font-raleway">Web Wonders</li>
            <li className="text-xl text-center font-raleway">
              Creative Writting
            </li>
            <li className="text-xl ml-2 text-center font-raleway">Hackathon</li>
          </ul>
        </div>

        <div>
          <ul className="h-80 w-80 ml-2 bg-gradient-to-br from-blue-300 to-blue-200 text-justify pl-12 rounded-b-full">
            <h2 className="text-2xl font-bold text-center pt-8 underline underline-offset-4 text-blue-600">
              Informal Events
            </h2>
            <li className="text-xl mt-4 text-center font-raleway">
              Singing Solo & Group
            </li>
            <li className="text-xl text-center font-raleway">
              Dancing Solo & Group
            </li>
            <li className="text-xl text-center font-raleway">Art & Craft</li>
            <li className="text-xl text-center font-raleway">
              MehAndi & Open mic
            </li>
            <li className="text-xl text-center font-raleway">
              Drama & Fashion Show
            </li>
            <li className="text-xl text-center font-raleway">
              Creative Writting
            </li>
            <li className="text-xl text-center font-raleway">Hackathon</li>
          </ul>
        </div>

        <div>
          <ul className="h-80 w-80 ml-2 bg-gradient-to-br from-blue-300 to-blue-200 text-justify pl-12 rounded-b-full">
            <h2 className="text-2xl font-bold text-center pt-8 underline underline-offset-4 text-blue-600">
              formal Events
            </h2>
            <li className="text-xl mt-4 text-center font-raleway">
              Techinical Presentation
            </li>
            <li className="text-xl text-center font-raleway">Debate</li>
            <li className="text-xl text-center font-raleway">Extempore</li>
            <li className="text-xl text-center font-raleway">
              Group Discussion
            </li>
            <li className="text-xl text-center font-raleway">Web Wonders</li>
            <li className="text-xl text-center font-raleway">
              Creative Writting
            </li>
            <li className="text-xl text-center font-raleway">Hackathon</li>
          </ul>
        </div>
      </div>
      <div className="csse-team mt-8">
        <img src={csseTeam} className="w-full h-auto" alt="" />
      </div>
      <div className="flex justify-center mt-6">
        <a
          href="/csse" // Replace with your actual route/page
          className="bg-blue-400 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-600 transition duration-300"
        >
          View society
        </a>
      </div>
    </div>
  );
};

export default CSSE;
