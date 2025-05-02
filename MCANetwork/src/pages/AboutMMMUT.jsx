import React from "react";
import mmmutMaingate from "../images/mmut-maingate.png";

const AboutMMMUT = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">
        About MMMUT
      </h2>

      <div className="flex justify-between gap-2 px-12 mt-8">
        <div className="h-72 w-1/2 about-mmmut-img">
          <img 
            src={mmmutMaingate} 
            className="h-72 rounded-md" 
            alt="MMMUT Main Gate" 
          />
        </div>
        <div className="h-72 w-1/2 about-mmmut-para">
          <p className="text-justify text-gray-900 rounded-md text-base leading-relaxed mx-auto p-8 bg-blue-200">
            Madan Mohan Malaviya University of Technology (MMMUT), located in
            Gorakhpur, Uttar Pradesh, is a state technical university committed
            to academic excellence, innovation, and holistic student
            development. Established with a vision to nurture technical talent
            and promote research, MMMUT offers undergraduate, postgraduate, and
            doctoral programs in engineering, technology, and management. The
            university boasts modern infrastructure, well-equipped laboratories,
            and a dedicated faculty committed to providing quality education.
            With a focus on industry-academia collaboration, MMMUT prepares
            students to meet global challenges and contribute to technological
            advancement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMMMUT;
