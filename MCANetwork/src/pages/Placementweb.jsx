import React from "react";
import vkDwiedi from "../images/vk dwiedi.jpg";
import ashutosh from "../images/ashutosh.png";
import purva from "../images/purva_rai.png";
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
import alok from "../images/alok.png";
import divyanshu from "../images/divyanshu.png";
import ranjeet from "../images/ranjeet.png";
import siddharth from "../images/sidharth.png";
import utkarsh from "../images/utkarsh.png";
import krishna from "../images/krishna_nand.png";
import faraz from "../images/faraz.png";
import sidhant from "../images/siddhnat.png";
import saurabh from "../images/saurabh.png";

const Placementweb = () => {
  return (
    <div className=" bg-white rounded-xl shadow-md p-8 m-8">
      {/* About TNP Cell with TPO Image and Message */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-center text-blue-600 bg-blue-300 p-4 rounded-xl">
          About TNP Cell
        </h2>
        <div className="flex justify-center mt-4">
          <img
            src={vkDwiedi}
            alt="TPO Image"
            className="w-48 h-48 object-cover rounded-full shadow-md"
          />
        </div>
        <p className="text-center text-xl font-semibold">Vk Dwiedi</p>
        <p className="text-center text-blue-600 font-semibold">
          (Training & placement officer)
        </p>
        <p className="text-center">6392806914</p>
        <p className="text-center text-blue-600">kn168679@gmail.com</p>

        <p className="text-center mt-8 px-16 text-lg  ">
          "The Training and Placement Cell (TNP) at MMMUT facilitates the
          overall development of students and assists them in securing job
          opportunities. The TPO (Training and Placement Officer) leads this
          effort, ensuring that the students are well-prepared for recruitment
          processes.""
        </p>
      </section>

      {/* MCA Student Coordinators Section */}
      <section className="mb-10 mt-16">
        <h2 className="text-3xl font-semibold text-center text-blue-600 bg-blue-300 p-4 rounded-xl">
          MCA Student Coordinators
        </h2>
        <div className="flex gap-6 flex-wrap justify-evenly mt-16">
          <div className="flex flex-col items-center">
            <img
              src={ashutosh}
              alt="Krishna Sharma"
              className="w-40 h-40 object-cover rounded-xl shadow-xl"
            />
            <p className="mt-2 text-lg">Ashutosh Shukla (M.C.A 1st)</p>
            <p className="text-center text-blue-600 font-semibold">
              (TnP Student Coordinator)
            </p>
            <p>6392806914</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={purva}
              alt="Purva rai"
              className="w-40 h-40 object-cover rounded-xl shadow-xl
               "
            />
            <p className="mt-2 text-lg">Purva Rai (M.C.A 1st)</p>
            <p className="text-center text-blue-600 font-semibold">
              (TnP Student Coordinator)
            </p>
            <p>6392806914</p>
          </div>
        </div>
      </section>

      {/* Top Recruiters Section */}
      <section className="mb-10 mt-16">
        <h2 className="text-3xl font-semibold text-center text-blue-600 bg-blue-300 p-4 rounded-xl">
          Top Recruiters for MCA
        </h2>
        <div className="flex gap-6 flex-wrap justify-evenly mt-12">
          <div className="w-48 h-48">
            <img
              src={ibm}
              alt="Infosys"
              className="object-contain h-full w-full rounded-md shadow-lg"
            />
            <p>ltimindtree</p>
          </div>
          <div className="w-48 h-48">
            <img
              src={accenture}
              alt="Infosys"
              className="object-contain h-full w-full rounded-md shadow-lg"
            />
          </div>
          <div className="w-48 h-48">
            <img
              src={streebo}
              alt="Infosys"
              className="object-contain h-full w-full rounded-md shadow-lg"
            />
          </div>
          <div className="w-48 h-48">
            <img
              src={tothenew}
              alt="Infosys"
              className="object-contain h-full w-full rounded-md shadow-lg"
            />
          </div>
        </div>
        <div className="flex gap-6 flex-wrap justify-evenly mt-12">
          <div className="w-48 h-48">
            <img
              src={qss}
              alt="Infosys"
              className="object-contain h-full w-full rounded-md shadow-lg"
            />
          </div>
          <div className="w-48 h-48">
            <img
              src={josh}
              alt="Infosys"
              className="object-contain h-full w-full rounded-md shadow-lg"
            />
          </div>
          <div className="w-48 h-48">
            <img
              src={cyfuture}
              alt="Infosys"
              className="object-contain h-full w-full rounded-md shadow-lg"
            />
          </div>
          <div className="w-48 h-48">
            <img
              src={gfg}
              alt="Infosys"
              className="object-contain h-full w-full rounded-md shadow-lg"
            />
          </div>
        </div>
        <div className="flex gap-6 flex-wrap justify-evenly mt-12">
          <div className="w-48 h-48">
            <img
              src={hiremi}
              alt="Infosys"
              className="object-contain h-full w-full rounded-md shadow-lg"
            />
          </div>
          <div className="w-48 h-48">
            <img
              src={bit}
              alt="Infosys"
              className="object-contain h-full w-full rounded-md shadow-lg"
            />
          </div>
          <div className="w-48 h-48">
            <img
              src={xfanatical}
              alt="Infosys"
              className="object-contain h-full w-full rounded-md shadow-lg"
            />
          </div>
          <div className="w-48 h-48">
            <img
              src={ltimind}
              alt="Infosys"
              className="object-contain h-full w-full rounded-md shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Round for Companies Section */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-center text-blue-600 bg-blue-300 p-4 rounded-xl">
          Rounds for Companies
        </h2>
        <p className="text-center mt-8 text-xl">
          Most companies follow a standardized recruitment process that includes
          multiple rounds such as:
        </p>
        <ul className="list-disc ml-6 mt-8  flex justify-center gap-48 ">
          <li className="text-lg font-semibold text-blue-500">
            Quant & Aptitude Round
          </li>
          <li className="text-lg font-semibold text-blue-500">Coding Round</li>
          <li className="text-lg font-semibold text-blue-500">
            Technical Interview
          </li>
          <li className="text-lg font-semibold text-blue-500">HR Interview</li>
        </ul>
      </section>

      {/* Selected Candidate Image with Message */}
      <section className="mb-10 mt-24">
        <h2 className="text-3xl font-semibold text-center text-blue-600 bg-blue-300 p-4 rounded-xl">
          Selected Candidates
        </h2>
        <p className="text-2xl text-center mt-8 text-blue-500">
          mca batch 2025
        </p>
        <div className="flex justify-evenly items-center mt-16">
          <div className=" mt-4">
            <img
              src={alok}
              alt="Selected Candidate"
              className="w-32 h-32 object-cover rounded-full shadow-md"
            />
            <p className="text-center font-semibold">Alok Verma</p>
            <p className="text-center text-blue-600 font-semibold">IBM</p>
          </div>
          <div className=" mt-4">
            <img
              src={utkarsh}
              alt="Selected Candidate"
              className="w-32 h-32 object-cover rounded-full shadow-md"
            />
            <p className="text-center font-semibold">utkarsh tiwari</p>
            <p className="text-center text-blue-600">STREEBO</p>
          </div>
          <div className=" mt-4">
            <img
              src={krishna}
              alt="Selected Candidate"
              className="w-32 h-32 object-cover rounded-full shadow-md"
            />
            <p className="text-center font-semibold">krishna</p>
            <p className="text-center text-blue-600">BIT</p>
          </div>
          <div className=" mt-4">
            <img
              src={faraz}
              alt="Selected Candidate"
              className="w-32 h-32 object-cover rounded-full shadow-md"
            />
            <p className="text-center font-semibold">faraz</p>
            <p className="text-center text-blue-600">LTIMINDTREE</p>
          </div>
        </div>

        <div className="flex justify-evenly items-center mt-16">
          <div className=" mt-4">
            <img
              src={ranjeet}
              alt="Selected Candidate"
              className="w-32 h-32 object-cover rounded-full shadow-md"
            />
            <p className="text-center">ranjeet</p>
            <p className="text-center text-blue-600">LTIMINDTREE</p>
          </div>
          <div className=" mt-4">
            <img
              src={divyanshu}
              alt="Selected Candidate"
              className="w-32 h-32 object-cover rounded-full shadow-md"
            />
            <p className="text-center">Divyanshu Kannaujiya</p>
            <p className="text-center text-blue-600">LTIMINDTREE</p>
          </div>
          <div className=" mt-4">
            <img
              src={sidhant}
              alt="Selected Candidate"
              className="w-32 h-32 object-cover rounded-full shadow-md"
            />
            <p className="text-center">Siddhant tiwari</p>
            <p className="text-center font-semibold ">BIT</p>
          </div>
          <div className=" mt-4">
            <img
              src={saurabh}
              alt="Selected Candidate"
              className="w-32 h-32 object-cover rounded-full shadow-md"
            />
            <p className="text-center ">Saurabh Pandey</p>
            <p className="text-center font-semibold text-blue-600">
              GREY ORANGE
            </p>
          </div>
        </div>
        <p className="text-center mt-12 text-blue-600 text-3xl">
          Congratulations to all the selected candidates! The journey ahead will
          be full of new challenges and opportunities.
        </p>
      </section>

      {/* Placement Preparation Tips & Interview Tips */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-center text-blue-600 bg-blue-300 p-4 rounded-xl">
          Placement Preparation Tips
        </h2>
        <p className="text-center mt-4 text-lg">
          Here are a few tips to help you succeed:
        </p>
        <ul className="list-disc ml-6 mt-8 text-blue-500 text-lg font-semibold space-y-2">
          <li>Work on your communication and presentation skills.</li>
          <li>Prepare for technical and aptitude rounds with mock tests.</li>
          <li>
            Research the companies you are applying for — understand their
            products, culture, and recent news.
          </li>
          <li>
            Stay updated on the latest trends and technologies in your field.
          </li>
          <li>
            Build a strong LinkedIn profile and expand your network with
            industry professionals.
          </li>
          <li>
            Practice data structures, algorithms, and system design regularly on
            platforms like LeetCode, GFG, and InterviewBit.
          </li>
          <li>
            Join technical communities, coding clubs, or GitHub discussions to
            learn and collaborate.
          </li>
          <li>
            Keep your resume clean, concise, and well-formatted — avoid jargon
            and exaggeration.
          </li>
          <li>Tailor your resume for different companies/roles.</li>
          <li>
            Be confident in explaining your academic and project work —
            recruiters often ask deep follow-ups.
          </li>
          <li>
            Participate in hackathons, coding contests, and technical fests for
            experience and visibility.
          </li>
          <li>
            Understand the job role and prepare accordingly — whether it's SDE,
            analyst, QA, or core tech.
          </li>
          <li>
            Use STAR (Situation, Task, Action, Result) technique to answer
            behavioral questions.
          </li>
          <li>
            Prepare at least 2-3 projects you can confidently talk about
            end-to-end.
          </li>
          <li>
            Read Glassdoor interview reviews for company-specific rounds and
            questions.
          </li>
          <li>
            Revise your core MCA subjects (DBMS, OOPs, OS, CN) and CS
            fundamentals.
          </li>
          <li>
            Don’t ignore HR and behavioral rounds — practice mock interviews
            with peers or mentors.
          </li>
          <li>
            Stay consistent and keep a daily preparation schedule — don’t burn
            out.
          </li>
          <li>
            Keep soft copies of resume, documents, and certificates organized
            and backed up.
          </li>
          <li>
            Always follow up with a thank-you note/email post-interview — it
            leaves a positive impression.
          </li>
        </ul>
      </section>

      {/* Placement Important Questions */}
      <section class="px-6 py-10 bg-gray-50 text-gray-800">
        <h2 class="text-3xl font-bold text-center text-blue-700 mb-10">
          🎯 Ultimate Placement Preparation Content
        </h2>

        <div class="space-y-8 max-w-4xl mx-auto text-lg leading-relaxed">
          <div>
            <h3 class="text-2xl font-semibold text-blue-600">
              📌 1. Resume Building
            </h3>
            <ul class="list-disc ml-6 mt-2">
              <li>Write an ATS-friendly resume.</li>
              <li>Include Summary, Projects, Skills, Experience, Education.</li>
              <li>Use Overleaf LaTeX, Canva, or Novoresume.</li>
              <li>Add GitHub and LinkedIn links.</li>
              <li>Do not lie; be ready to explain everything.</li>
            </ul>
          </div>

          <div>
            <h3 class="text-2xl font-semibold text-blue-600">
              🛠️ 2. Project Portfolio
            </h3>
            <ul class="list-disc ml-6 mt-2">
              <li>Have 2-3 strong projects on GitHub.</li>
              <li>Show tech stack like MERN, Java, Python, etc.</li>
              <li>Include internships or freelance work.</li>
              <li>Add a short video/demo for extra impact.</li>
            </ul>
          </div>

          <div>
            <h3 class="text-2xl font-semibold text-blue-600">
              💬 3. Communication Skills
            </h3>
            <ul class="list-disc ml-6 mt-2">
              <li>Practice mock interviews with peers.</li>
              <li>Join group discussions to improve fluency.</li>
              <li>Work on email writing and LinkedIn networking.</li>
            </ul>
          </div>

          <div>
            <h3 class="text-2xl font-semibold text-blue-600">
              🧠 4. Aptitude & Logical Reasoning
            </h3>
            <p class="mt-2">Focus Areas:</p>
            <ul class="list-disc ml-6">
              <li>Quantitative aptitude</li>
              <li>Logical reasoning</li>
              <li>Data interpretation</li>
              <li>Verbal ability</li>
            </ul>
            <p class="mt-2">
              Platforms: IndiaBix, RS Aggarwal PDF, Testbook, Oliveboard
            </p>
          </div>

          <div>
            <h3 class="text-2xl font-semibold text-blue-600">
              🖥️ 5. Coding & DSA
            </h3>
            <ul class="list-disc ml-6 mt-2">
              <li>Focus on arrays, strings, recursion, etc.</li>
              <li>Use: LeetCode, GFG, HackerRank, InterviewBit</li>
              <li>Master 3 languages: C++, Java, Python</li>
            </ul>
          </div>

          <div>
            <h3 class="text-2xl font-semibold text-blue-600">
              🖥️ 6. Core Subjects
            </h3>
            <ul class="list-disc ml-6 mt-2">
              <li>DBMS (Normalization, Joins, Transactions)</li>
              <li>OS (Processes, Scheduling, Deadlock)</li>
              <li>CN (OSI, TCP/IP, protocols)</li>
              <li>OOPs (4 pillars, Inheritance, Abstraction)</li>
              <li>SQL queries (Joins, Group By, Nested)</li>
            </ul>
          </div>

          <div>
            <h3 class="text-2xl font-semibold text-blue-600">
              🏢 7. Company-Specific Preparation
            </h3>
            <ul class="list-disc ml-6 mt-2">
              <li>Check past questions on Glassdoor, LeetCode Discuss</li>
              <li>Study company patterns (Amazon, TCS, Wipro)</li>
              <li>Know their tech stack, culture, values</li>
            </ul>
          </div>

          <div>
            <h3 class="text-2xl font-semibold text-blue-600">
              💡 8. Interview Rounds
            </h3>
            <ul class="list-disc ml-6 mt-2">
              <li>HR: Strengths, personality, culture fit</li>
              <li>Technical: Coding + CS subjects</li>
              <li>Managerial: Project discussion, teamwork</li>
              <li>GD: Stay logical and calm</li>
            </ul>
          </div>

          <div>
            <h3 class="text-2xl font-semibold text-blue-600">
              🎙️ 9. HR Behavioral Questions
            </h3>
            <ul class="list-disc ml-6 mt-2">
              <li>Tell me about yourself</li>
              <li>Why should we hire you?</li>
              <li>Biggest failure?</li>
              <li>Team conflict resolution (use STAR method)</li>
            </ul>
          </div>

          <div>
            <h3 class="text-2xl font-semibold text-blue-600">
              📚 10. Resources
            </h3>
            <p>YouTube: Apna College, Love Babbar, Placement Boat</p>
            <p>Books:</p>
            <ul class="list-disc ml-6">
              <li>Cracking the Coding Interview</li>
              <li>Let Us C – Yashwant Kanetkar</li>
              <li>DSA Made Easy – Narasimha Karumanchi</li>
            </ul>
          </div>

          <div>
            <h3 class="text-2xl font-semibold text-blue-600">📋 11. FAQs</h3>
            <ul class="list-disc ml-6 mt-2">
              <li>
                <strong>What to wear for interviews?</strong>
                <p class="ml-6">
                  Wear formal, professional attire such as a suit, dress shirt,
                  and polished shoes. Avoid flashy colors, and ensure that your
                  clothes are clean and well-fitted.
                </p>
              </li>
              <li>
                <strong>DSA or Web Dev?</strong>
                <p class="ml-6">
                  For placements, DSA (Data Structures & Algorithms) is crucial
                  as it is commonly asked in interviews. However, web
                  development can be important for companies looking for
                  full-stack developers. Balance both depending on your target
                  role.
                </p>
              </li>
              <li>
                <strong>Is CP important?</strong>
                <p class="ml-6">
                  Competitive Programming (CP) helps in developing strong
                  problem-solving skills and prepares you for technical rounds.
                  It’s highly beneficial, but not mandatory for all companies.
                  Focus on the job role you're targeting.
                </p>
              </li>
              <li>
                <strong>What if I don’t know the answer?</strong>
                <p class="ml-6">
                  Be honest and calm. If you don't know the answer, it’s okay to
                  admit it. Show your willingness to learn and problem-solving
                  approach. Offer to talk through how you would approach solving
                  it if you had more time or resources.
                </p>
              </li>
              <li>
                <strong>How many projects are enough?</strong>
                <p class="ml-6">
                  At least 2-3 strong, relevant projects are good. Ensure these
                  projects are well-documented, hosted (on GitHub, for example),
                  and showcase a variety of your skills. Quality over quantity!
                </p>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-2xl font-semibold text-blue-600">
              🎯 12. Soft Skills
            </h3>
            <ul class="list-disc ml-6 mt-2">
              <li>Body language matters</li>
              <li>Confident tone</li>
              <li>Send thank-you emails</li>
            </ul>
          </div>

          <div>
            <h3 class="text-2xl font-semibold text-blue-600">
              🧾 13. Resume Templates
            </h3>
            <ul class="list-disc ml-6 mt-2">
              <li>1 Page – Overleaf LaTeX</li>
              <li>2 Column – Canva, Novoresume</li>
            </ul>
          </div>

          <div>
            <h3 class="text-2xl font-semibold text-blue-600">
              🎥 14. Must-Watch Videos
            </h3>
            <ul class="list-disc ml-6 mt-2">
              <li>How to Prepare for Placements – Love Babbar</li>
              <li>Resume Building – Apna College</li>
              <li>Interview Strategy – Striver</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Resume Template */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-center bg-blue-300 rounded-xl p-4">
          Resume Template
        </h2>
        <p className="text-center mt-4">
          <a
            href="/resume-template"
            className="text-blue-500  text-xl underline"
          >
            Download the Resume Template here.
          </a>
        </p>
      </section>

      {/* How to Build the Resume Video */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-center">
          How to Build Your Resume
        </h2>
        <div className="flex justify-center mt-4">
          <iframe
            src="https://www.youtube.com/embed/IIGWpw1FXhk?start=10"
            title="How to Build Your Resume"
            className="w-full h-96"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-10 p-6 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">
          FAQs
        </h2>
        <ul className="space-y-6">
          <li className="bg-white p-4 rounded-lg shadow-md">
            <strong className="text-xl font-medium text-blue-500">
              What is the eligibility for placement?
            </strong>
            <p className="mt-2 text-gray-700">
              Generally, the eligibility criteria for placement include a
              minimum percentage (e.g., 60%) in your academic records, no active
              backlogs, and a good attendance record. Some companies may have
              specific eligibility requirements based on their hiring needs.
            </p>
          </li>
          <li className="bg-white p-4 rounded-lg shadow-md">
            <strong className="text-xl font-medium text-blue-500">
              How do I prepare for the interview?
            </strong>
            <p className="mt-2 text-gray-700">
              To prepare for interviews, focus on core subjects, practice coding
              problems (DSA), improve communication skills, and research the
              company you're interviewing with. Mock interviews and group
              discussions are highly beneficial.
            </p>
          </li>
          <li className="bg-white p-4 rounded-lg shadow-md">
            <strong className="text-xl font-medium text-blue-500">
              What documents do I need for placement interviews?
            </strong>
            <p className="mt-2 text-gray-700">
              Typically, you will need your updated resume, academic
              transcripts, ID proof (e.g., Aadhar card), and sometimes, a
              passport-sized photograph. Some companies may also require
              additional documents such as an internship certificate or
              recommendation letter.
            </p>
          </li>
          <li className="bg-white p-4 rounded-lg shadow-md">
            <strong className="text-xl font-medium text-blue-500">
              What is the salary package offered during placements?
            </strong>
            <p className="mt-2 text-gray-700">
              The salary package during placements can vary depending on the
              company and role. Entry-level salaries in tech companies can range
              from ₹3 LPA to ₹10 LPA or more, depending on the company's size
              and the job position.
            </p>
          </li>
          <li className="bg-white p-4 rounded-lg shadow-md">
            <strong className="text-xl font-medium text-blue-500">
              How many rounds are there in the placement process?
            </strong>
            <p className="mt-2 text-gray-700">
              The placement process typically includes an initial screening
              round, an aptitude test, a technical interview, a managerial
              interview, and an HR interview. Some companies may also conduct
              group discussions or psychometric tests.
            </p>
          </li>
          <li className="bg-white p-4 rounded-lg shadow-md">
            <strong className="text-xl font-medium text-blue-500">
              How should I dress for placement interviews?
            </strong>
            <p className="mt-2 text-gray-700">
              Dressing formally is essential. Men should opt for a formal suit
              or shirt and trousers, while women should wear formal attire (a
              formal blouse and skirt or a simple dress). Ensure your clothes
              are neat, clean, and well ironed.
            </p>
          </li>
          <li className="bg-white p-4 rounded-lg shadow-md">
            <strong className="text-xl font-medium text-blue-500">
              What skills are most important for placement?
            </strong>
            <p className="mt-2 text-gray-700">
              Key skills for placement include problem-solving ability (coding
              and DSA), strong communication skills, aptitude skills, domain
              knowledge, and the ability to work in a team. Additionally, having
              hands-on experience with projects or internships adds significant
              value.
            </p>
          </li>
          <li className="bg-white p-4 rounded-lg shadow-md">
            <strong className="text-xl font-medium text-blue-500">
              Is work experience required for placement?
            </strong>
            <p className="mt-2 text-gray-700">
              While most companies do not require work experience for fresh
              graduates, having internships or personal projects can give you an
              edge. It shows that you're proactive and have practical
              experience.
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Placementweb;
