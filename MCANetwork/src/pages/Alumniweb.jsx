import React from "react";
import vinayjain from "../images/vinay jain.png";

const Alumniweb = () => {
  return (
    <div>
      <section className="py-10 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
          👨‍🎓 Notable Alumni
        </h2>
        <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2 px-6">
          {/* Alumni Card 1 */}
          <div className="bg-white rounded-xl shadow p-4 text-center transform transition duration-300 hover:scale-105 hover:shadow-lg">
            <img
              src={vinayjain}
              alt="Vinay Kumar Jain"
              className="w-32 h-32 mx-auto rounded-full mb-4 object-cover hover:scale-105 transition-transform duration-300"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Vinay Kumar Jain
            </h3>
            <p className="text-sm text-gray-500">
              Managing Director, Accenture
            </p>
            <a
              href="https://www.linkedin.com/in/jainvinay/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-800 hover:underline text-sm mt-2 block transition duration-300"
            >
              LinkedIn Profile
            </a>
          </div>

          {/* Alumni Card 2 */}
          <div className="bg-white rounded-xl shadow p-4 text-center transform transition duration-300 hover:scale-105 hover:shadow-lg">
            <img
              src="images/alumni2.jpg"
              alt="Rohan Mehta"
              className="w-32 h-32 mx-auto rounded-full mb-4 object-cover hover:scale-105 transition-transform duration-300"
            />
            <h3 className="text-xl font-semibold text-gray-800">Rohan Mehta</h3>
            <p className="text-sm text-gray-500">Data Analyst, Google</p>
            <a
              href="https://www.linkedin.com/in/rohanmehta"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-800 hover:underline text-sm mt-2 block transition duration-300"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Alumniweb;
