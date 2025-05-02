import { Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import AboutMMMUT from "./pages/AboutMMMUT";
import MCAFaculty from "./pages/MCAFaculty";
import Resource from "./pages/Resource";
import CSSE from "./pages/CSSE";
import Alumni from "./pages/Alumni";
import Placement from "./pages/Placement";
import AboutMCA from "./pages/AboutMCA";
import Galleries from "./pages/Galleries";
import FacultyWeb from "./pages/FacultyWeb";
import Resourceweb from "./pages/Resourceweb";
import Csseweb from "./pages/Csseweb";
import AboutMCAweb from "./pages/AboutMCAweb";
import AboutMMMUTweb from "./pages/AboutMMMUTweb";
import Placementweb from "./pages/Placementweb";
import Alumniweb from "./pages/Alumniweb";
import ContactForm from "./pages/Contact";
import AdminContacts from "./pages/AdminContacts";

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.02,
    boxShadow:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: {
      duration: 0.3,
    },
  },
};

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="fixed bg-[url('/src/assets/pattern.png')] opacity-5"></div>
      <Nav />
      <main className="pt-20">
        <Routes>
          <Route
            path="/"
            element={
              <div className="flex flex-col gap-12 py-8 px-4 md:px-8 relative z-10">
                <motion.div
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  variants={pageVariants}
                  className="bg-gradient-to-r from-white to-purple-50 rounded-xl shadow-md p-6 border border-purple-100"
                >
                  <Landing />
                </motion.div>

                <motion.div
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  variants={pageVariants}
                  className="bg-gradient-to-r from-purple-50 to-white rounded-xl shadow-md p-6 border border-purple-100"
                >
                  <AboutMMMUT />
                </motion.div>

                <motion.div
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  variants={pageVariants}
                  className="bg-gradient-to-r from-purple-50 to-white rounded-xl shadow-md p-6 border border-purple-100"
                >
                  <MCAFaculty />
                </motion.div>

                {/* <motion.div
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  variants={pageVariants}
                  className="bg-gradient-to-r from-white to-purple-50 rounded-xl shadow-md p-6 border border-purple-100"
                >
                  <FacultyWeb />
                </motion.div> */}

                <motion.div
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  variants={pageVariants}
                  className="bg-gradient-to-r from-purple-50 to-white rounded-xl shadow-md p-6 border border-purple-100"
                >
                  <Resource />
                </motion.div>

                <motion.div
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  variants={pageVariants}
                  className="bg-gradient-to-r from-white to-purple-50 rounded-xl shadow-md p-6 border border-purple-100"
                >
                  <CSSE />
                </motion.div>

                <motion.div
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  variants={pageVariants}
                  className="bg-gradient-to-r from-purple-50 to-white rounded-xl shadow-md p-6 border border-purple-100"
                >
                  <Alumni />
                </motion.div>

                <motion.div
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  variants={pageVariants}
                  className="bg-gradient-to-r from-white to-purple-50 rounded-xl shadow-md p-6 border border-purple-100"
                >
                  <Placement />
                </motion.div>

                <motion.div
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  variants={pageVariants}
                  className="bg-gradient-to-r from-white to-purple-50 rounded-xl shadow-md p-6 border border-purple-100"
                >
                  <AboutMCA />
                </motion.div>
                <motion.div
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  variants={pageVariants}
                  className="bg-gradient-to-r from-purple-50 to-white rounded-xl shadow-md p-6 border border-purple-100"
                >
                  <Galleries />
                </motion.div>
              </div>
            }
          />

          <Route path="/about-mmmut" element={<AboutMMMUTweb />} />
          <Route path="/mca-faculty" element={<MCAFaculty />} />
          <Route path="/resources" element={<Resourceweb />} />
          <Route path="/csse" element={<Csseweb />} />
          <Route path="/admin/contacts" element={<AdminContacts />} />
          <Route path="/alumni" element={<Alumniweb />} />
          <Route path="/placement" element={<Placementweb />} />
          <Route path="/about-mca" element={<AboutMCAweb />} />
          <Route path="/galleries" element={<Galleries />} />
          <Route path="/faculty" element={<FacultyWeb />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
