import vcImg from "../images/jp saini.gif";
import chancellorImg from "../images/chancellor.jpg";
import cp1 from "../images/campus-life1.jpeg";
import cp2 from "../images/campus-life2.jpeg";
import cp3 from "../images/campus-life3.jpeg";
import cp4 from "../images/campus-life4.jpeg";
import cp5 from "../images/campus-life5.jpeg";
import cp6 from "../images/campus-life6.jpeg";

const AboutMMMUTweb = () => {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto space-y-12 text-gray-800">
      {/* VC & Chancellor */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="text-center space-y-3">
          <img
            src={vcImg}
            alt="Vice Chancellor"
            className="mx-auto w-48 h-48 object-fill  rounded-xl shadow-lg"
          />
          <h2 className="text-xl font-semibold"> Prof. Jai Prakash Saini</h2>
          <p className="italic text-blue-600 font-semibold">
            (Vice Chancellor)
          </p>
          <blockquote className="text-lg">
            "Welcome to MMMUT, where we build innovators and leaders of
            tomorrow."
          </blockquote>
        </div>
        <div className="text-center space-y-3">
          <img
            src={chancellorImg}
            alt="Chancellor"
            className="mx-auto w-48 h-48 object-cover rounded-xl shadow-lg"
          />
          <h2 className="text-xl font-semibold">Hon. Governor of UP</h2>
          <p className="italic text-blue-600 font-semibold">(Chancellor)</p>
          <blockquote className="text-lg ">
            "We are committed to empowering youth through quality education and
            research."
          </blockquote>
        </div>
      </div>

      {/* Courses Offered */}
      <section class="py-10 bg-gray-50">
        <h2 class="text-3xl font-bold text-center text-blue-700 mb-8">
          🎓 Courses Offered at MMMUT
        </h2>

        <div class="grid md:grid-cols-2 gap-6 px-6">
          <div class="bg-white p-6 rounded-xl shadow">
            <h3 class="text-xl font-semibold text-indigo-600 mb-2">
              Undergraduate Programs
            </h3>
            <ul class="list-disc list-inside space-y-1 text-gray-700">
              <li>
                <strong>B.Tech</strong> in:
                <ul class="ml-5 list-disc">
                  <li>Chemical Engineering</li>
                  <li>Civil Engineering</li>
                  <li>Computer Science & Engineering</li>
                  <li>Electrical Engineering</li>
                  <li>Electronics & Communication Engineering</li>
                  <li>Electronics & Comm. Engg. (IoT)</li>
                  <li>Information Technology</li>
                  <li>Mechanical Engineering</li>
                </ul>
              </li>
              <li>B.B.A</li>
              <li>B.Pharm</li>
            </ul>
          </div>

          <div class="bg-white p-6 rounded-xl shadow">
            <h3 class="text-xl font-semibold text-indigo-600 mb-2">
              Postgraduate Programs
            </h3>
            <ul class="list-disc list-inside space-y-1 text-gray-700">
              <li>
                <strong>M.Tech</strong> in various specializations
              </li>
              <li className="font-semibold">M.C.A</li>
              <li>
                <strong>M.B.A</strong> (Dual Specializations in HR, Marketing,
                Finance, IT, IB, Entrepreneurship, Operations)
              </li>
              <li>M.Sc in Physics, Chemistry, and Mathematics</li>
            </ul>
          </div>

          <div class="bg-white p-6 rounded-xl shadow col-span-full">
            <h3 class="text-xl font-semibold text-indigo-600 mb-2">
              Ph.D. Programs
            </h3>
            <p class="text-gray-700">
              Offered in Civil, CSE, IT, EEE, ECE, ME, Chemical Engineering,
              Physics, Chemistry, Mathematics, English, and Economics.
            </p>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section>
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">
          📅 Important Milestones
        </h2>
        <ul className="space-y-2 pl-4 border-l-4 border-purple-400">
          <li className="pl-4">
            <strong>1962:</strong> Established as Madan Mohan Malaviya
            Engineering College
          </li>
          <li className="pl-4">
            <strong>2013:</strong> Became a Technical University (MMMUT)
          </li>
          <li className="pl-4">
            <strong>2021:</strong> NAAC Accreditation received
          </li>
        </ul>
      </section>

      {/* Campus Life Gallery */}
      <section>
        <h2 class="text-3xl font-bold mb-4 border-b pb-2">
          📸 Campus Life Gallery
        </h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-16">
          <img
            src={cp1}
            alt="Campus 1"
            class="h-60 w-full object-cover rounded-lg shadow"
          />
          <img
            src={cp2}
            alt="Campus 2"
            class="h-60 w-full object-cover rounded-lg shadow"
          />
          <img
            src={cp3}
            alt="Campus 3"
            class="h-60 w-full object-cover rounded-lg shadow"
          />
          <img
            src={cp4}
            alt="Campus 4"
            class="h-60 w-full object-cover rounded-lg shadow"
          />
          <img
            src={cp5}
            alt="Campus 5"
            class="h-60 w-full object-cover rounded-lg shadow"
          />
          <img
            src={cp6}
            alt="Campus 6"
            class="h-60 w-full object-cover rounded-lg shadow"
          />
        </div>
      </section>

      {/* Innovation & Startups */}
      <section>
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">
          💡 Innovation & Startups
        </h2>
        <p className="text-gray-700">
          MMMUT encourages entrepreneurship through its{" "}
          <strong>Innovation & Incubation Center</strong>, supporting student
          startups with mentoring, funding assistance, and infrastructure.
        </p>
      </section>

      {/* Location & How to Reach */}
      <section>
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">
          📍 Location & How to Reach
        </h2>
        <p className="text-gray-700 mb-2">
          MMMUT is located in Gorakhpur, Uttar Pradesh.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Nearest Railway Station: Gorakhpur Junction (~9 km)</li>
          <li>Nearest Airport: Gorakhpur Airport (~12 km)</li>
        </ul>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28647.038787465665!2d83.3120399!3d26.760554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991435c7b67d153%3A0x162deabc32d8c7de!2sMMMUT!5e0!3m2!1sen!2sin!4v1615963921759!5m2!1sen!2sin"
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
          className="rounded-lg border shadow-md"
        ></iframe>
      </section>

      {/* Contact Information */}
      <section>
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">
          📞 Contact Information
        </h2>
        <p>
          <strong>Address:</strong> MMMUT, Deoria Road, Gorakhpur - 273010, UP,
          India
        </p>
        <p>
          <strong>Email:</strong> info@mmmut.ac.in
        </p>
        <p>
          <strong>Phone:</strong> +91-551-2273958
        </p>
      </section>

      {/* Collaborations & MOUs */}
      <section>
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">
          🌍 Collaborations & MOUs
        </h2>
        <p>
          MMMUT has signed MOUs with organizations such as ISRO, IITs, and
          international universities for research, student exchange, and
          training.
        </p>
      </section>

      {/* Student Clubs */}
      <section>
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">
          🎯 Student Clubs & Societies
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>CSSE Society (Computer Science & Software Engineering)</li>
          <li>Technical Clubs: Coding Ninjas, Robotics Club</li>
          <li>Cultural Clubs: Music, Dance, and Drama</li>
        </ul>
      </section>

      {/* News & Achievements Carousel */}
      <section>
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">
          📰 News & Achievements
        </h2>
        <div className="overflow-x-auto flex gap-6 py-4">
          {[
            "NIRF Ranking 2024",
            "Techfest Winners",
            "Placement 90%+",
            "Startup Expo 2025",
          ].map((item, index) => (
            <div
              key={index}
              className="min-w-[250px] bg-purple-50 p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="font-semibold">{item}</h3>
              <p className="text-sm text-gray-600">
                Brief description about the event or achievement.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutMMMUTweb;
