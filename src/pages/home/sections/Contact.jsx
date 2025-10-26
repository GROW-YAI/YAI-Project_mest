// import React, { useEffect, useState } from "react"; 
// import { motion } from "framer-motion";
// import Navbar from "../../../components/Navbar";

// const containerVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { 
//     opacity: 1, 
//     y: 0, 
//     transition: { staggerChildren: 0.2, duration: 0.6 } 
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
// };

// const Contact = () => {
//   const [isHome, setIsHome] = useState(false);

  
//   useEffect(() => {
//     setIsHome(window.location.pathname === "/");
//   }, []);

//   return (
//     <div>
//       <Navbar />
//       <div className={`flex flex-col justify-center items-center bg-[#F0FDF4] bg-lime-50 px-4 py-[150px] ${!isHome ? "mt-16 md:mt-20" : ""}`}>
//       {/* <div className={`flex flex-col justify-center items-center min-h-screen bg-lime-50 px-4 ${!isHome ? "mt-16 md:mt-20" : ""}`}>  */}
//         <motion.form 
//           action="https://formspree.io/f/movjgvgr" 
//           method="POST" 
//           className="flex flex-col bg-green-600 gap-6 p-8 w-full max-w-md rounded"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={containerVariants}
//         >
//           <motion.h4 variants={itemVariants} className="text-3xl sm:text-4xl text-lime-50 font-bold text-center">
//             Contact Us
//           </motion.h4>

//           <motion.input 
//             variants={itemVariants} 
//             className="bg-white p-3 rounded text-gray-800"  
//             type="text" 
//             name="Fullname" 
//             placeholder="Fullname"
//           />

//           <motion.input 
//             variants={itemVariants} 
//             className="bg-white p-3 rounded text-gray-800" 
//             type="email" 
//             name="Email" 
//             placeholder="Email"
//           />

//           <motion.textarea 
//             variants={itemVariants} 
//             className="bg-white p-3 rounded text-gray-800" 
//             name="message" 
//             id="message" 
//             placeholder="Please enter your request"
//             rows="4"
//           />

//           <motion.button 
//             type="Submit" 
//             variants={itemVariants} 
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-white text-green-600 font-bold py-3 px-6 rounded hover:bg-gray-200 transition"
//           >
//             Submit
//           </motion.button>
//         </motion.form>
//       </div>
//     </div>
//   );
// };

// export default Contact;



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
  const [activeTab, setActiveTab] = useState("general"); // "general" or "wholesale"

  useEffect(() => {
    setIsHome(window.location.pathname === "/");
  }, []);

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
            Let's Work Together!
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg text-gray-700 mb-8">
            We'd love to hear from you. Whether you're a potential wholesale partner or have general inquiries, 
            we're here to help.
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
            onClick={() => setActiveTab("general")}
            className={`px-6 py-3 rounded-md font-medium transition-colors ${
              activeTab === "general" 
                ? "bg-green-600 text-white" 
                : "text-gray-600 hover:text-green-700"
            }`}
          >
            General Inquiries
          </button>
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
        </motion.div>

        <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-8">
          {/* Wholesale Partnership Info */}
          {activeTab === "wholesale" && (
            <motion.div 
              className="lg:w-1/2 bg-white rounded-2xl p-8 shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.h2 variants={itemVariants} className="text-3xl font-bold text-green-800 mb-6">
                Become Our Wholesale Partner
              </motion.h2>
              
              <motion.p variants={itemVariants} className="text-gray-700 mb-6 text-lg">
                We'd love to see our products on your shelves!
              </motion.p>
              
              <motion.p variants={itemVariants} className="text-gray-700 mb-6">
                We are always looking to expand our reach across Africa and the rest of the 
                world by partnering with brands who share our values - from beauty 
                platforms to concept stores and spas.
              </motion.p>

              <motion.div variants={itemVariants} className="mb-8">
                <h3 className="text-xl font-semibold text-green-700 mb-4">What We Offer:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Broad range of products with reasonable minimum order quantities</span>
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
              </motion.div>

              <motion.div variants={itemVariants} className="bg-green-50 p-6 rounded-lg border border-green-200">
                <p className="text-gray-700 mb-4">
                  To help us assess your suitability and fit as a wholesale partner, please fill out the form. 
                  We will review your application and respond with an email within 5 business days!
                </p>
              </motion.div>
            </motion.div>
          )}

          {/* General Inquiries Info */}
          {activeTab === "general" && (
            <motion.div 
              className="lg:w-1/2 bg-white rounded-2xl p-8 shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.h2 variants={itemVariants} className="text-3xl font-bold text-green-800 mb-6">
                Get In Touch
              </motion.h2>
              
              <motion.p variants={itemVariants} className="text-gray-700 mb-6">
                Have questions about our products, need support, or want to learn more about our brand? 
                We're here to help! Fill out the form and our team will get back to you as soon as possible.
              </motion.p>

              <motion.div variants={itemVariants} className="mb-6">
                <h3 className="text-xl font-semibold text-green-700 mb-4">Why Contact Us?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Product information and recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Customer support and assistance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Collaboration opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Feedback and suggestions</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-green-50 p-6 rounded-lg border border-green-200">
                <p className="text-gray-700">
                  We value your inquiries and typically respond within 24-48 hours. For urgent matters, 
                  please indicate "URGENT" in your message.
                </p>
              </motion.div>
            </motion.div>
          )}

          {/* Contact Form */}
          <motion.div 
            className={`${activeTab === "wholesale" ? "lg:w-1/2" : "lg:w-full max-w-2xl mx-auto"}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.form 
              action="https://formspree.io/f/movjgvgr" 
              method="POST" 
              className="flex flex-col bg-green-600 gap-6 p-8 w-full rounded-2xl shadow-lg"
              variants={containerVariants}
            >
              <motion.h4 variants={itemVariants} className="text-3xl text-lime-50 font-bold text-center">
                {activeTab === "wholesale" ? "Wholesale Application" : "Contact Form"}
              </motion.h4>

              {/* Hidden field to indicate inquiry type */}
              <input type="hidden" name="Inquiry Type" value={activeTab} />

              <motion.input 
                variants={itemVariants} 
                className="bg-white p-3 rounded-lg text-gray-800 border border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition"  
                type="text" 
                name="Fullname" 
                placeholder="Full Name"
                required
              />

              <motion.input 
                variants={itemVariants} 
                className="bg-white p-3 rounded-lg text-gray-800 border border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition" 
                type="email" 
                name="Email" 
                placeholder="Email Address"
                required
              />

              {activeTab === "wholesale" && (
                <motion.input 
                  variants={itemVariants} 
                  className="bg-white p-3 rounded-lg text-gray-800 border border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition" 
                  type="text" 
                  name="Business Name" 
                  placeholder="Business Name"
                  required
                />
              )}

              {activeTab === "wholesale" && (
                <motion.input 
                  variants={itemVariants} 
                  className="bg-white p-3 rounded-lg text-gray-800 border border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition" 
                  type="text" 
                  name="Business Type" 
                  placeholder="Business Type (e.g., Beauty Platform, Concept Store, Spa)"
                  required
                />
              )}

              <motion.textarea 
                variants={itemVariants} 
                className="bg-white p-3 rounded-lg text-gray-800 border border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition resize-none" 
                name="message" 
                id="message" 
                placeholder={activeTab === "wholesale" ? "Tell us about your business and why you'd like to partner with us..." : "Please enter your message or inquiry..."}
                rows="5"
                required
              />

              <motion.button 
                type="Submit" 
                variants={itemVariants} 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition shadow-md"
              >
                {activeTab === "wholesale" ? "Submit Application" : "Send Message"}
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
