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
//   const [activeTab, setActiveTab] = useState("general"); // "general" or "wholesale"

//   useEffect(() => {
//     setIsHome(window.location.pathname === "/");
//   }, []);

//   return (
//     <div>
//       <Navbar />
//       <div className={`flex flex-col justify-center items-center bg-[#F0FDF4] px-4 py-12 ${!isHome ? "mt-16 md:mt-20" : ""}`}>
        
//         {/* Header Section */}
//         <motion.div 
//           className="text-center mb-12 max-w-3xl"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={containerVariants}
//         >
//           <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
//             Let's Work Together!
//           </motion.h1>
//           <motion.p variants={itemVariants} className="text-lg text-gray-700 mb-8">
//             We'd love to hear from you. Whether you're a potential wholesale partner or have general inquiries, 
//             we're here to help.
//           </motion.p>
//         </motion.div>

//         {/* Tab Navigation */}
//         <motion.div 
//           className="flex mb-8 bg-white rounded-lg p-1 shadow-md"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={containerVariants}
//         >
//           <button
//             onClick={() => setActiveTab("general")}
//             className={`px-6 py-3 rounded-md font-medium transition-colors ${
//               activeTab === "general" 
//                 ? "bg-green-600 text-white" 
//                 : "text-gray-600 hover:text-green-700"
//             }`}
//           >
//             General Inquiries
//           </button>
//           <button
//             onClick={() => setActiveTab("wholesale")}
//             className={`px-6 py-3 rounded-md font-medium transition-colors ${
//               activeTab === "wholesale" 
//                 ? "bg-green-600 text-white" 
//                 : "text-gray-600 hover:text-green-700"
//             }`}
//           >
//             Wholesale Partnership
//           </button>
//         </motion.div>

//         <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-8">
//           {/* Wholesale Partnership Info */}
//           {activeTab === "wholesale" && (
//             <motion.div 
//               className="lg:w-1/2 bg-white rounded-2xl p-8 shadow-lg"
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={containerVariants}
//             >
//               <motion.h2 variants={itemVariants} className="text-3xl font-bold text-green-800 mb-6">
//                 Become Our Wholesale Partner
//               </motion.h2>
              
//               <motion.p variants={itemVariants} className="text-gray-700 mb-6 text-lg">
//                 We'd love to see our products on your shelves!
//               </motion.p>
              
//               <motion.p variants={itemVariants} className="text-gray-700 mb-6">
//                 We are always looking to expand our reach across Africa and the rest of the 
//                 world by partnering with brands who share our values - from beauty 
//                 platforms to concept stores and spas.
//               </motion.p>

//               <motion.div variants={itemVariants} className="mb-8">
//                 <h3 className="text-xl font-semibold text-green-700 mb-4">What We Offer:</h3>
//                 <ul className="space-y-3 text-gray-700">
//                   <li className="flex items-start">
//                     <span className="text-green-500 mr-2">✓</span>
//                     <span>Broad range of products with reasonable minimum order quantities</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-green-500 mr-2">✓</span>
//                     <span>Flexible payment terms</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-green-500 mr-2">✓</span>
//                     <span>Affordable shipping rates</span>
//                   </li>
//                 </ul>
//               </motion.div>

//               <motion.div variants={itemVariants} className="bg-green-50 p-6 rounded-lg border border-green-200">
//                 <p className="text-gray-700 mb-4">
//                   To help us assess your suitability and fit as a wholesale partner, please fill out the form. 
//                   We will review your application and respond with an email within 5 business days!
//                 </p>
//               </motion.div>
//             </motion.div>
//           )}

//           {/* General Inquiries Info */}
//           {activeTab === "general" && (
//             <motion.div 
//               className="lg:w-1/2 bg-white rounded-2xl p-8 shadow-lg"
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={containerVariants}
//             >
//               <motion.h2 variants={itemVariants} className="text-3xl font-bold text-green-800 mb-6">
//                 Get In Touch
//               </motion.h2>
              
//               <motion.p variants={itemVariants} className="text-gray-700 mb-6">
//                 Have questions about our products, need support, or want to learn more about our brand? 
//                 We're here to help! Fill out the form and our team will get back to you as soon as possible.
//               </motion.p>

//               <motion.div variants={itemVariants} className="mb-6">
//                 <h3 className="text-xl font-semibold text-green-700 mb-4">Why Contact Us?</h3>
//                 <ul className="space-y-3 text-gray-700">
//                   <li className="flex items-start">
//                     <span className="text-green-500 mr-2">✓</span>
//                     <span>Product information and recommendations</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-green-500 mr-2">✓</span>
//                     <span>Customer support and assistance</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-green-500 mr-2">✓</span>
//                     <span>Collaboration opportunities</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-green-500 mr-2">✓</span>
//                     <span>Feedback and suggestions</span>
//                   </li>
//                 </ul>
//               </motion.div>

//               <motion.div variants={itemVariants} className="bg-green-50 p-6 rounded-lg border border-green-200">
//                 <p className="text-gray-700">
//                   We value your inquiries and typically respond within 24-48 hours. For urgent matters, 
//                   please indicate "URGENT" in your message.
//                 </p>
//               </motion.div>
//             </motion.div>
//           )}

//           {/* Contact Form */}
//           <motion.div 
//             className={`${activeTab === "wholesale" ? "lg:w-1/2" : "lg:w-full max-w-2xl mx-auto"}`}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={containerVariants}
//           >
//             <motion.form 
//               action="https://formspree.io/f/movjgvgr" 
//               method="POST" 
//               className="flex flex-col bg-green-600 gap-6 p-8 w-full rounded-2xl shadow-lg"
//               variants={containerVariants}
//             >
//               <motion.h4 variants={itemVariants} className="text-3xl text-lime-50 font-bold text-center">
//                 {activeTab === "wholesale" ? "Wholesale Application" : "Contact Form"}
//               </motion.h4>

//               {/* Hidden field to indicate inquiry type */}
//               <input type="hidden" name="Inquiry Type" value={activeTab} />

//               <motion.input 
//                 variants={itemVariants} 
//                 className="bg-white p-3 rounded-lg text-gray-800 border border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition"  
//                 type="text" 
//                 name="Fullname" 
//                 placeholder="Full Name"
//                 required
//               />

//               <motion.input 
//                 variants={itemVariants} 
//                 className="bg-white p-3 rounded-lg text-gray-800 border border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition" 
//                 type="email" 
//                 name="Email" 
//                 placeholder="Email Address"
//                 required
//               />

//               {activeTab === "wholesale" && (
//                 <motion.input 
//                   variants={itemVariants} 
//                   className="bg-white p-3 rounded-lg text-gray-800 border border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition" 
//                   type="text" 
//                   name="Business Name" 
//                   placeholder="Business Name"
//                   required
//                 />
//               )}

//               {activeTab === "wholesale" && (
//                 <motion.input 
//                   variants={itemVariants} 
//                   className="bg-white p-3 rounded-lg text-gray-800 border border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition" 
//                   type="text" 
//                   name="Business Type" 
//                   placeholder="Business Type (e.g., Beauty Platform, Concept Store, Spa)"
//                   required
//                 />
//               )}

//               <motion.textarea 
//                 variants={itemVariants} 
//                 className="bg-white p-3 rounded-lg text-gray-800 border border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition resize-none" 
//                 name="message" 
//                 id="message" 
//                 placeholder={activeTab === "wholesale" ? "Tell us about your business and why you'd like to partner with us..." : "Please enter your message or inquiry..."}
//                 rows="5"
//                 required
//               />

//               <motion.button 
//                 type="Submit" 
//                 variants={itemVariants} 
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-white text-green-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition shadow-md"
//               >
//                 {activeTab === "wholesale" ? "Submit Application" : "Send Message"}
//               </motion.button>
//             </motion.form>
//           </motion.div>
//         </div>
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
    transition: { staggerChildren: 0.2, duration: 0.3 } 
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
};

const Contact = () => {
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    setIsHome(window.location.pathname === "/");
  }, []);

  return (
    <div>
      <Navbar />
      <div className={`min-h-screen bg-[#F7FEE7] px-4 py-12 ${!isHome ? "mt-16 md:mt-20" : ""}`}>
        <div className="max-w-6xl mx-auto">
          {/* Header Section - Centered */}
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
              Get In Touch
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-2xl mx-auto">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Contact Information - Left Side */}
            <motion.div 
              className="lg:col-span-1 space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              {/* Contact Card 1 */}
              <motion.div 
                variants={itemVariants}
                className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-green-800 mb-2">Email Support</h3>
                    <p className="text-gray-600">For general inquiries and questions</p>
                    <p className="text-green-600 font-medium mt-1 break-all text-sm sm:text-base">jnelpinnovations@gmail.com</p>
                  </div>
                </div>
              </motion.div>

              {/* Contact Card 2 */}
              <motion.div 
                variants={itemVariants}
                className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-1m6-9a5 5 0 11-10 0 5 5 0 0110 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-green-800 mb-2">Quick Response</h3>
                    <p className="text-gray-600">We typically reply within</p>
                    <p className="text-green-600 font-medium mt-1">24-48 hours</p>
                  </div>
                </div>
              </motion.div>

              {/* Contact Card 3 */}
              <motion.div 
                variants={itemVariants}
                className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 8v-5m0 5h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-green-800 mb-2">Business Partnerships</h3>
                    <p className="text-gray-600">Interested in working together?</p>
                    <a href="/partner-with-us" className="text-green-600 font-medium mt-1 underline hover:text-green-700 break-all text-sm sm:text-base">
                      Visit Partner With Us →
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Info Box */}
              <motion.div 
                variants={itemVariants}
                className="bg-green-50 rounded-xl p-6 border border-green-200"
              >
                <div className="flex items-start space-x-3">
                  <div className="bg-green-500 rounded-full p-1 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-green-800 font-medium mb-1">Need urgent assistance?</p>
                    <p className="text-green-700 text-sm">Include "URGENT" in your message subject for priority response.</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form - Right Side (Spans 2 columns) */}
            <motion.div 
              className="lg:col-span-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.div 
                className="bg-gradient-to-br from-green-700 to-green-800 rounded-2xl p-8 shadow-xl"
                variants={containerVariants}
              >
                <motion.h2 variants={itemVariants} className="text-3xl text-white font-bold mb-2 text-center">
                  Send Us a Message
                </motion.h2>
                <motion.p variants={itemVariants} className="text-green-100 text-center mb-8">
                  Fill out the form below and we'll get back to you soon
                </motion.p>

                <motion.form 
                  action="https://formspree.io/f/movjgvgr" 
                  method="POST" 
                  className="space-y-6"
                  variants={containerVariants}
                >
                  <input type="hidden" name="Inquiry Type" value="General Contact" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.input 
                      variants={itemVariants} 
                      className="bg-white p-4 rounded-xl text-gray-800 border border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition w-full"  
                      type="text" 
                      name="Fullname" 
                      placeholder="Full Name"
                      required
                    />

                    <motion.input 
                      variants={itemVariants} 
                      className="bg-white p-4 rounded-xl text-gray-800 border border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition w-full" 
                      type="email" 
                      name="Email" 
                      placeholder="Email Address"
                      required
                    />
                  </div>

                  <motion.input 
                    variants={itemVariants} 
                    className="bg-white p-4 rounded-xl text-gray-800 border border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition w-full" 
                    type="text" 
                    name="Subject" 
                    placeholder="Subject"
                    required
                  />

                  <motion.textarea 
                    variants={itemVariants} 
                    className="bg-white p-4 rounded-xl text-gray-800 border border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition resize-none w-full" 
                    name="message" 
                    placeholder="Tell us how we can help you..."
                    rows="6"
                    required
                  />

                  <motion.button 
                    type="Submit" 
                    variants={itemVariants} 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white text-green-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-50 transition shadow-lg w-full text-lg"
                  >
                    Send Message
                  </motion.button>
                </motion.form>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
