import React from "react";
import { motion } from "framer-motion"; // Importing framer-motion
import adminstartiveblock from "../images/adminstrative_block.jpg";
import mmmutLogo from "../images/logo.png";

const Landing = () => {
  return (
    <div>
      {/* Animated Administrative Block Image */}
      <motion.div
        className="adminstrative-block"
        initial={{ opacity: 0, y: -50 }} // Start with opacity 0 and y-axis moved
        animate={{ opacity: 1, y: 0 }} // Animate to full opacity and y=0 (normal position)
        transition={{ duration: 1 }} // Transition duration
      >
        <img
          src={adminstartiveblock}
          className="w-full h-96 rounded-md"
          alt="MMMUT Administrative Block"
        />
      </motion.div>

      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <p className="text-center text-3xl my-2 font-semibold font-raleway text-blue-600">
          Madan Mohan Malviya University of Technology, Gorakhpur (U.P) India
        </p>
        <p className="text-center text-xl text-slate-800 font-raleway font-semibold">
          Department of Information Technology & Computer Application (I.T.C.A)
        </p>
      </motion.div>

      {/* Animated MMMUT Logo */}
      <motion.div
        className="mmmut-logo flex justify-center items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <img
          src={mmmutLogo}
          className="rounded-full h-40 m-4"
          alt="MMMUT Logo"
        />
      </motion.div>
    </div>
  );
};

export default Landing;
