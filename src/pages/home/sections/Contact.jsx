import React from "react";
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
  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center h-[100vh] bg-lime-50 mt-20">
        <motion.form 
          action="https://formspree.io/f/xldeezyn" 
          method="POST" 
          className="flex flex-col bg-green-600 gap-8 mt-2 mb-2 p-8 w-100 rounded"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h4 variants={itemVariants} className="text-4xl text-lime-50 font-bold text-center">
            Contact Us
          </motion.h4>

          <motion.input 
            variants={itemVariants} 
            className="bg-white p-2"  
            type="text" 
            name="Fullname" 
            placeholder="Fullname"
          />

          <motion.input 
            variants={itemVariants} 
            className="bg-white p-2" 
            type="email" 
            name="Email" 
            placeholder="Email"
          />

          <motion.textarea 
            variants={itemVariants} 
            className="bg-white p-2" 
            name="message" 
            id="message" 
            placeholder="Please enter your request"
          />

          <motion.button 
            type="Submit" 
            variants={itemVariants} 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 p-2 border-white text-lime-50 justify-center"
          >
            Submit
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
