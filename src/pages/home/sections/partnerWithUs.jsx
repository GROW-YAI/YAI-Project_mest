import React, { useEffect, useState } from "react"; 
import { motion } from "framer-motion";
import Navbar from "../../../components/Navbar";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { staggerChildren: 0.1, duration: 0.3 } 
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

const JoinUs = () => {
  const [isHome, setIsHome] = useState(false);
  const [activeTab, setActiveTab] = useState("wholesale");

  useEffect(() => {
    setIsHome(window.location.pathname === "/");
    
    const urlParams = new URLSearchParams(window.location.search);
    const tab = urlParams.get('tab');
    if (tab === 'ambassador' || tab === 'wholesale') {
      setActiveTab(tab);
    }
  }, []);
  

  // Wholesale Content
  const wholesaleContent = (
    <motion.div
      key="wholesale-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
        <motion.h2 variants={itemVariants} className="text-3xl font-bold text-green-800 mb-6">
            Become Our Wholesale Partner
        </motion.h2>
        <motion.p variants={itemVariants} className="text-gray-700 mb-6 text-lg">
           We'd love to see our products on your shelves!
        </motion.p>
      <p className="text-gray-700 mb-6">
        We are always looking to expand our reach across Africa and the rest of the 
        world by partnering with brands who share our values - from beauty 
        platforms to concept stores and spas.
      </p>
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-green-700 mb-4">What We Offer:</h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span>Broad range of products</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span>Reasonable minimum order quantities</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span>Flexible payment terms</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span>Affordable shipping rates</span>
          </li>
        </ul>
      </div>

      <motion.div variants={itemVariants} className="bg-green-50 p-6 rounded-lg border border-green-200">
            <p className="text-gray-700 mb-4">
                To help us assess your suitability and fit as a wholesale partner, please fill out the form. 
                We will review your application and respond with an email within 5 business days!
            </p>
        </motion.div>
    </motion.div>
  );

  // Ambassador Content
  const ambassadorContent = (
    <motion.div
      key="ambassador-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-3xl font-bold text-green-800 mb-6">Brand Ambassador Program</h2>
      <p className="text-gray-700 mb-6">
        Love our products and want to share them with the world? Join our brand ambassador 
        program and become the face of our brand in your community!
      </p>
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-green-700 mb-4">Program Benefits:</h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span>Earn commissions on sales</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span>Free products and exclusive merchandise</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span>Early access to new launches</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span>Featured on our social media</span>
          </li>
        </ul>
      </div>
      <motion.div variants={itemVariants} className="bg-green-50 p-6 rounded-lg border border-green-200">
        <p className="text-gray-700 mb-4">
            We're excited to learn more about you! Please fill out the application form so we can see if you'd be a great fit for our ambassador family. 
            We review all applications and will respond within 3-5 business days.
        </p>
    </motion.div>
    </motion.div>
  );

  // Wholesale Form
  const wholesaleForm = (
    <motion.form 
      key="wholesale-form"
      action="https://formspree.io/f/movjgvgr" 
      method="POST" 
      className="flex flex-col bg-green-600 gap-6 p-8 w-full rounded-2xl shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h4 className="text-3xl text-lime-50 font-bold text-center">Wholesale Application</h4>
      <input type="hidden" name="Application Type" value="wholesale" />
      <input 
        className="bg-white p-3 rounded-lg text-gray-800 border border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition"  
        type="text" 
        name="Fullname" 
        placeholder="Full Name"
        required
      />
      <input 
        className="bg-white p-3 rounded-lg text-gray-800 border border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition" 
        type="email" 
        name="Email" 
        placeholder="Email Address"
        required
      />
      <input 
        className="bg-white p-3 rounded-lg text-gray-800 border border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition" 
        type="text" 
        name="Phone" 
        placeholder="Phone Number"
        required
      />
      <input 
        className="bg-white p-3 rounded-lg text-gray-800 border border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition" 
        type="text" 
        name="Business Name" 
        placeholder="Business Name"
        required
      />
      <input 
        className="bg-white p-3 rounded-lg text-gray-800 border border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition" 
        type="text" 
        name="Business Type" 
        placeholder="Business Type (e.g., Store, Spa, Cosmetics)"
        // required
      />
      <textarea 
        className="bg-white p-3 rounded-lg text-gray-800 border border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition resize-none" 
        name="message" 
        placeholder="Tell us about your business and why you'd like to partner with us..."
        rows="5"
        required
      />
      <motion.button 
        type="Submit" 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white text-green-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition shadow-md"
      >
        Submit Application
      </motion.button>
    </motion.form>
  );

  // Ambassador Form
  const ambassadorForm = (
    <motion.form 
      key="ambassador-form"
      action="https://formspree.io/f/movjgvgr" 
      method="POST" 
      className="flex flex-col bg-green-600 gap-6 p-8 w-full rounded-2xl shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h4 className="text-3xl text-lime-50 font-bold text-center">Ambassador Application</h4>
      <input type="hidden" name="Application Type" value="ambassador" />
      <input 
        className="bg-white p-3 rounded-lg text-gray-800 border border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition"  
        type="text" 
        name="Fullname" 
        placeholder="Full Name"
        required
      />
      <input 
        className="bg-white p-3 rounded-lg text-gray-800 border border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition" 
        type="email" 
        name="Email" 
        placeholder="Email Address"
        required
      />
      <input 
        className="bg-white p-3 rounded-lg text-gray-800 border border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition" 
        type="text" 
        name="Phone" 
        placeholder="Phone Number"
        required
      />
      <input 
        className="bg-white p-3 rounded-lg text-gray-800 border border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition" 
        type="text" 
        name="Social Media" 
        placeholder="Social Media Handles (Optional)"
      />
      <textarea 
        className="bg-white p-3 rounded-lg text-gray-800 border border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition resize-none" 
        name="message" 
        placeholder="Tell us about yourself and why you want to be a brand ambassador..."
        rows="5"
        required
      />
      <motion.button 
        type="Submit" 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white text-green-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition shadow-md"
      >
        Apply Now
      </motion.button>
    </motion.form>
  );

  return (
    <div>
      <Navbar />
      <div className={`flex flex-col justify-center items-center bg-[#F0FDF4] px-4 py-12 ${!isHome ? "mt-16 md:mt-20" : ""}`}>
        
        {/* Header Section */}
        <motion.div 
          className="text-center mb-12 max-w-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            Partner With Us!
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg text-gray-700 mb-8">
            Let's work together! Join our growing family of wholesale partners and brand ambassadors.
          </motion.p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div 
          className="flex mb-8 bg-white rounded-lg p-1 shadow-md"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <button
            onClick={() => setActiveTab("wholesale")}
            className={`px-6 py-3 rounded-md font-medium transition-colors ${
              activeTab === "wholesale" 
                ? "bg-green-600 text-white" 
                : "text-gray-600 hover:text-green-700"
            }`}
          >
            Wholesale Partnership
          </button>
          <button
            onClick={() => setActiveTab("ambassador")}
            className={`px-6 py-3 rounded-md font-medium transition-colors ${
              activeTab === "ambassador" 
                ? "bg-green-600 text-white" 
                : "text-gray-600 hover:text-green-700"
            }`}
          >
            Brand Ambassador
          </button>
        </motion.div>

        <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-8">
          {/* Content Section - Always rendered, just changing content */}
          <div className="lg:w-1/2 bg-white rounded-2xl p-8 shadow-lg">
            {activeTab === "wholesale" ? wholesaleContent : ambassadorContent}
          </div>

          {/* Form Section - Always rendered, just changing form */}
          <div className="lg:w-1/2">
            {activeTab === "wholesale" ? wholesaleForm : ambassadorForm}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;