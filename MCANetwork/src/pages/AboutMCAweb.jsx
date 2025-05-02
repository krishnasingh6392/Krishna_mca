import React from "react";
import mcabanner from "../images/mca-poster.jpeg";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  GlobeAltIcon,
  UsersIcon,
  SparklesIcon,
  ArrowTrendingUpIcon,
  BuildingLibraryIcon,
  StarIcon,
  QuestionMarkCircleIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

const AboutMCA = () => {
  return (
    <div className="bg-gray-50 text-gray-800 px-4 md:px-16 py-10 space-y-16">
      {/* Banner */}
      <img
        src={mcabanner}
        alt="MCA Banner"
        className="w-full h-96  rounded-2xl shadow-lg object-fill"
      />

      {/* Title */}
      <section className="text-center">
        <h1 className="text-5xl font-bold text-blue-700 mb-4">
          About MCA at MMMUT
        </h1>
        <p className="text-lg max-w-3xl mx-auto">
          The{" "}
          <span className="font-semibold text-blue-600">
            Master of Computer Applications (MCA)
          </span>{" "}
          program is designed to prepare students for the dynamic world of
          computing, tech innovations, and digital transformation.
        </p>
      </section>

      {/* Why Choose MCA at MMMUT */}
      <section>
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Why Choose MCA at MMMUT?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow space-y-2">
            <StarIcon className="h-8 w-8 text-yellow-500" />
            <p>
              <strong>AICTE Approved & Nationally Ranked</strong>
            </p>
            <p>Recognized by top institutions and industries.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow space-y-2">
            <BuildingLibraryIcon className="h-8 w-8 text-green-500" />
            <p>
              <strong>Industry-Driven Curriculum</strong>
            </p>
            <p>Regular updates as per trends like AI, Cloud, Data Science.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow space-y-2">
            <GlobeAltIcon className="h-8 w-8 text-indigo-500" />
            <p>
              <strong>Global Exposure</strong>
            </p>
            <p>Collaborations with foreign universities and industries.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow space-y-2">
            <UsersIcon className="h-8 w-8 text-pink-500" />
            <p>
              <strong>Strong Alumni Network</strong>
            </p>
            <p>Supportive community working in TCS, Amazon, Google, etc.</p>
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section>
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Meet Our Faculty
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Dr. Dayashankar Singh",
            "Dr. shiva Prakash",
            "Dr. sarvapal singh",
            "Dr. uc jaiswal",
            "Dr. jp",
            "Dr. rkd",
          ].map((name) => (
            <div key={name} className="bg-white p-6 rounded-xl shadow">
              <AcademicCapIcon className="h-8 w-8 text-purple-500 mb-2" />
              <p className="font-semibold">{name}</p>
              <p className="text-sm text-gray-600">
                Professor, Dept. of Computer Applications
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Societies */}
      <section>
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          CSSE Society
        </h2>
        <div className="grid md:grid-cols-2 gap-6 justify-center">
          <div className="bg-white p-12 rounded-xl shadow">
            <SparklesIcon className="h-8 w-8 text-indigo-600 mb-2" />
            <p className="text-gray-700">
              <strong>CSSE Society</strong> – The Computer Science and Software
              Engineering Society (CSSE) is a vibrant student-driven community
              that aims to bring together students passionate about technology.
              The society organizes a variety of events including hackathons,
              coding battles, seminars, workshops, and industrial visits to
              provide exposure to real-world scenarios and foster innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Events & Conferences */}
      {/* <section>
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Events & Conferences
        </h2>
        <ul className="list-disc ml-6 space-y-2 text-lg">
          <li>
            Annual National Level Tech Fest – <strong>Abhivyakti</strong>
          </li>
          <li>International Conference on Computing and AI</li>
          <li>Weekly TechTalks by Alumni and Industry Experts</li>
          <li>Workshops on Web3, Blockchain, Python, DevOps</li>
        </ul>
      </section> */}

      {/* Research & Innovation */}
      <section className="bg-white p-8 rounded-xl shadow">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Research & Innovation
        </h2>
        <p className="text-lg">
          Students and faculty of MCA at MMMUT regularly contribute to
          international journals and conferences. Active research areas include:
        </p>
        <ul className="list-disc ml-6 mt-3 space-y-1">
          <li>Artificial Intelligence & ML</li>
          <li>Cybersecurity & Ethical Hacking</li>
          <li>IoT & Smart Systems</li>
          <li>Cloud Computing & Big Data Analytics</li>
        </ul>
      </section>

      {/* Placement Statistics */}
      <section>
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          top recruiters
        </h2>
        <div className="text-center space-y-3">
          <p className="text-lg font-semibold text-green-700">
            Top Recruiters:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-700 font-medium mt-8">
            <span>TCS</span>
            <span>IBM</span>
            <span>ACCENTURE</span>
            <span>TO THE NEW</span>
            <span>QSS</span>
            <span>JOSH TECHNOLOGY</span>
            <span>STREEBO</span>
            <span>HIREMI</span>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-blue-100 p-8 rounded-xl shadow">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">
          Contact the MCA Department
        </h2>
        <div className="space-y-2">
          <p>
            <EnvelopeIcon className="h-5 w-5 inline mr-1" /> Email:
            hod.mca@mmmut.ac.in
          </p>
          <p>
            📍 Department of Computer Applications, MMMUT, Gorakhpur - 273010
          </p>
          <p>📞 Phone: +91-551-2273958</p>
        </div>
      </section>

      {/* FAQs */}
      <section>
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Frequently Asked Questions (FAQs)
        </h2>
        <div className="grid gap-4">
          <div className="bg-white p-5 rounded-xl shadow">
            <QuestionMarkCircleIcon className="h-6 w-6 inline text-blue-600 mr-2" />
            <strong>Q: What is the eligibility for MCA?</strong>
            <p>
              A: A Bachelor's degree in any stream with Mathematics at 10+2 or
              Graduation level.
            </p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow">
            <QuestionMarkCircleIcon className="h-6 w-6 inline text-blue-600 mr-2" />
            <strong>Q: Is placement support provided?</strong>
            <p>
              A: Yes, we have a dedicated Training & Placement Cell with strong
              recruiter ties.
            </p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow">
            <QuestionMarkCircleIcon className="h-6 w-6 inline text-blue-600 mr-2" />
            <strong>Q: Can I pursue research after MCA?</strong>
            <p>
              A: Absolutely! Many of our students pursue PhDs and research roles
              in India and abroad.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-6">
        &copy; {new Date().getFullYear()} MMMUT – Department of Computer
        Applications
      </footer>
    </div>
  );
};

export default AboutMCA;
