import React from "react";
import dssingh from "../images/ds-singh.jpg";
import shivaPrakash from "../images/shiva-prakash.jpeg";
import spsingh from "../images/sarvapal-singh.jpg";
import ucjaiswal from "../images/uc-jaiswal.jpg";
import jp from "../images/jp.jpg";
import rkd from "../images/rkd.jpg";
import kumud from "../images/kumud patel.jpeg";
import prachi from "../images/prachi.jpeg";
import preeti from "../images/preeti.jpeg";
import vijay from "../images/vijay tiwari.jpg";
import ashish from "../images/ashish srivastav.jpeg";
import anithuram from "../images/arinutham.jpeg";
import pranjal from "../images/pranjal.png";

// Faculty and Research Scholars data with bio and image
const facultyData = [
  {
    id: 1,
    name: "Dr. D. S. Singh",
    designation: "Professor & Head",
    phone: "9235500535, 9452449239",
    email: "dssitca@mmmut.ac.in, dss_mec@yahoo.co.in",
    bio: "	Cryptography & Network Security, Neural Network, DBMS, Operating System and Software Engineering",
    image: dssingh,
  },

  {
    id: 2,
    name: "Prof. Shiva Prakash",
    designation: "Professor",
    phone: "9235500533, 9140500376",
    email: "spitca@mmmmut.ac.in, shiva_pkec@yahoo.com",
    bio: "	Wired/Wireless Networks, IoT, Software Defined Networking (SDN), Blockchain Technology, Mobile and Cloud Computing, Fog Computing, WSN, Algorithm Design & Analysis",
    image: shivaPrakash,
  },
  {
    id: 3,
    name: "Prof. S. P. Singh",
    designation: "Professor",
    phone: "9235500532, 9450437539",
    email: "singh_sarvpal@yahoo.co.in, spsingh@mmmut.ac.in",
    bio: "	Wired/Wireless networking, Mobile & Cloud Computing, Linux OS",
    image: spsingh,
  },
  {
    id: 4,
    name: "Prof. U.C. Jaiswal",
    designation: "Professor",
    phone: "9235500528, 9956947264",
    email: "ucjitca@mmmut.ac.in, ucj_jaiswal@yahoo.com",
    bio: "Professor with a deep understanding of network security and computer science.",
    image: ucjaiswal,
  },

  {
    id: 5,
    name: "Dr. Jay Prakash",
    designation: "Professor",
    phone: "9235500536, 9026039050",
    email: "jpr_1998@yahoo.co.in, jpitca@mmmut.ac.in",
    bio: "Computer Science & Engineering",
    image: jp,
  },
  {
    id: 6,
    name: "Dr. R.K. Dwivedi",
    designation: "Associate Professor",
    phone: "9235501648, 8005384720",
    email: "rkditca@mmmut.ac.in",
    bio: "	RESEARCH INTEREST: Sensor Cloud, IoT, Wireless Sensor Networks, Cloud Computing, Machine Learning, Deep Learning, Data Analytics, Blockchain Technology",
    image: rkd,
  },
  {
    id: 7,
    name: "Dr. Audithan Sivaraman",
    designation: "Associate Professor",
    phone: "9443402775",
    email: "asitca@mmmut.ac.in",
    bio: "Focused on research in embedded systems and communication networks.",
    image: anithuram,
  },
  {
    id: 8,
    name: "Mr. Vijay Kumar Tiwari",
    designation: "Assistant Professor",
    phone: "6307095924",
    email: "vijaybiet05@gmail.com, vktitca@mmmut.ac.in",
    bio: "Internet of Things, Blockchain, Operating System, Computer Network",
    image: vijay,
  },
  {
    id: 9,
    name: "Ms. Pranjal Maurya",
    designation: "Assistant Professor",
    phone: "7571836347",
    email: "pranjalmaurya1996@gmail.com",

    image: pranjal,
  },
  {
    id: 10,
    name: "Ms. Preeti Singh",
    designation: "Assistant Professor",
    phone: "8765357675",
    email: "singh.preeti294@gmail.com, psitca@mmmut.ac.in",
    bio: "Experienced in web development and digital technologies.",
    image: preeti,
  },
  {
    id: 11,
    name: "Ms. Kumud Patel",
    designation: "Assistant Professor",
    phone: "7348163693",
    email: "kpitca@mmmut.ac.in",
    bio: "	Deep Learning, Machine Learning, Time Series Analysis, Neural Network, Biomedical Signals, and Image Processing.",
    image: kumud,
  },
  {
    id: 12,
    name: "Ms. Prachi Verma",
    designation: "Assistant Professor",
    phone: "7233801539",
    email: "prachi.verma1499@gmail.com",
    bio: "	Machine Learning, Deep Learning Cyber Security Blockchain",
    image: prachi,
  },
  {
    id: 13,
    name: "Mr. Manish Kumar Gupta",
    designation: "Assistant Professor",
    phone: "8318185984",
    email: "manish.testing09@gmail.com",

    image: "https://via.placeholder.com/150",
  },
  {
    id: 14,
    name: "Ms. Nida Shakeel",
    designation: "Guest Faculty",
    phone: "9140768375",
    email: "nidashakeel251@gmail.com",

    image: "https://via.placeholder.com/150",
  },
  {
    id: 15,
    name: "Ms. Alka Maurya",
    designation: "Guest Faculty",
    phone: "8808383581",
    email: "Mauryaalka09@gmail.com",

    image: "https://via.placeholder.com/150",
  },
  {
    id: 16,
    name: "Mr. Kamlesh Kumar Gautam",
    designation: "Guest Faculty",
    phone: "8585928191",
    email: "Gautam.kamlesh@gmail.com",

    image: "https://via.placeholder.com/150",
  },
  {
    id: 17,
    name: "Ms. Neelam Chauhan",
    designation: "Guest Faculty",
    phone: "6386804498",
    email: "get2itm@gmail.com",

    image: "https://via.placeholder.com/150",
  },
  {
    id: 18,
    name: "Ms. Anju Verma",
    designation: "Guest Faculty",
    phone: "9140886202",
    email: "vanju5901@gmail.com",

    image: "https://via.placeholder.com/150",
  },
  {
    id: 19,
    name: "Mr. Anand Kumar",
    designation: "Guest Faculty",
    phone: "5863836546",
    email: "Anandkumargupta929@gmail.com",

    image: "https://via.placeholder.com/150",
  },
  {
    id: 20,
    name: "Ms. Hemani",
    designation: "Research Scholar",
    phone: "7252021124",
    email: "23singhhemani@gmail.com",

    image: "https://via.placeholder.com/150",
  },

  {
    id: 22,
    name: "Mr. Durgesh Kumar",
    designation: "Research Scholar",
    phone: "8853802621",
    email: "ydurgesh120@gmail.com",
    bio: "Works on research related to cloud computing and IoT.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 23,
    name: "Mr. Sumit Kumar",
    designation: "Research Scholar",
    phone: "9454054893",
    email: "mr.sumitmg@gmail.com",

    image: "https://via.placeholder.com/150",
  },
  {
    id: 24,
    name: "Ms. Rajani Kumari",
    designation: "Research Scholar",
    phone: "8299693479",
    email: "Kumarirajani035@gmail.com",
    bio: "Researching in the field of software engineering and AI.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 25,
    name: "Ms. Niharika Singh",
    designation: "Research Scholar",
    phone: "6388967055",
    email: "niharikasingh2419@gmail.com",
    bio: "Focused on IoT and its applications in the real world.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 26,
    name: "Mr. Dharmesh Kumar Sonkar",
    designation: "Research Scholar",
    phone: "6392452226",
    email: "dharmeshsonkar22@gmail.com",
    bio: "Research Scholar working on network security and encryption.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 27,
    name: "Dr. Deepak Rao",
    designation: "Associate Professor",
    phone: "9140768375",
    email: "deepakrao@univ.edu",
    bio: "Specializes in cloud computing, DevOps, and big data technologies.",
    image: "https://via.placeholder.com/150",
  },
];

// FacultyList Component
const FacultyList = ({ facultyData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {facultyData.map((faculty) => (
        <div
          key={faculty.id}
          className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center transition-transform transform hover:scale-105"
        >
          <img
            src={faculty.image}
            alt={faculty.name}
            className="w-32 h-32 rounded-full mb-4 border-4 border-blue-500"
          />
          <h3 className="text-2xl font-semibold text-center mb-2">
            {faculty.name}
          </h3>
          <p className="text-gray-600 text-center mb-2">
            {faculty.designation}
          </p>
          <p className="text-gray-500 text-center mb-2">
            Phone: {faculty.phone}
          </p>
          <p className="text-gray-500 text-center mb-4">
            Email:{" "}
            <a href={`mailto:${faculty.email}`} className="text-blue-600">
              {faculty.email}
            </a>
          </p>
          <p className="text-gray-700 text-center">{faculty.bio}</p>
        </div>
      ))}
    </div>
  );
};

// App Component
function App() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Faculty and Research Scholars
      </h1>
      <FacultyList facultyData={facultyData} />
    </div>
  );
}

export default App;
