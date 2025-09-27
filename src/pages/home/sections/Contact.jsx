import React, { useEffect, useState } from "react"; 
import { motion } from "framer-motion";
import Navbar from "../../../components/Navbar";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { staggerChildren: 0.2, duration: 0.6 } 
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Contact = () => {
  const [isHome, setIsHome] = useState(false);

  
  useEffect(() => {
    setIsHome(window.location.pathname === "/");
  }, []);

  return (
    <div>
      <Navbar />
      <div className={`flex flex-col justify-center items-center bg-lime-50 px-4 py-[150px] ${!isHome ? "mt-16 md:mt-20" : ""}`}>
      {/* <div className={`flex flex-col justify-center items-center min-h-screen bg-lime-50 px-4 ${!isHome ? "mt-16 md:mt-20" : ""}`}>  */}
        <motion.form 
          action="https://formspree.io/f/movjgvgr" 
          method="POST" 
          className="flex flex-col bg-green-600 gap-6 p-8 w-full max-w-md rounded"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h4 variants={itemVariants} className="text-3xl sm:text-4xl text-lime-50 font-bold text-center">
            Contact Us
          </motion.h4>

          <motion.input 
            variants={itemVariants} 
            className="bg-white p-3 rounded text-gray-800"  
            type="text" 
            name="Fullname" 
            placeholder="Fullname"
          />

          <motion.input 
            variants={itemVariants} 
            className="bg-white p-3 rounded text-gray-800" 
            type="email" 
            name="Email" 
            placeholder="Email"
          />

          <motion.textarea 
            variants={itemVariants} 
            className="bg-white p-3 rounded text-gray-800" 
            name="message" 
            id="message" 
            placeholder="Please enter your request"
            rows="4"
          />

          <motion.button 
            type="Submit" 
            variants={itemVariants} 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-green-600 font-bold py-3 px-6 rounded hover:bg-gray-200 transition"
          >
            Submit
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
