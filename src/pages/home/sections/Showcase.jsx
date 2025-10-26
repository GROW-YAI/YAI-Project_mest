// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { Award, Users, Target, Heart, Star, MapPin, TrendingUp, Handshake, Store, UserCheck } from 'lucide-react';
// import Navbar from '../../../components/Navbar';

// const awards = [
//   { 
//     icon: Award, 
//     title: "Hollard Ghana Streetwise Competition", 
//     year: "Feb 2024",
//     description: "Winners of the prestigious business competition"
//   },
//   { 
//     icon: Star, 
//     title: "HSBC Winners", 
//     year: "2023",
//     description: "Recognized for excellence in entrepreneurship"
//   },
//   { 
//     icon: Users, 
//     title: "GRASAG Entrepreneur of the Year", 
//     year: "2022",
//     description: "University of Cape Coast recognition"
//   },
//   { 
//     icon: Target, 
//     title: "GIZ Green SME Finalist", 
//     year: "2023",
//     description: "Selected for green business innovation"
//   },
//   { 
//     icon: TrendingUp, 
//     title: "GIZ Access to Finance Competition", 
//     year: "2023",
//     description: "1st Runner Up in Cape Coast"
//   },
//   { 
//     icon: Heart, 
//     title: "CEBA Cape Coast Sponsorship", 
//     year: "2023",
//     description: "Citation of Recognition for community support"
//   }
// ];

// const galleryItems = [
//   {
//     category: "Empowering and educating the youth",
//     image: "/images/p1.jpeg",
//     description: "University interns learning at our facility"
//   },
//   {
//     category: "Community impact and development projects",
//     image: "/images/p2.jpeg",
//     description: "Northern Ghana community initiatives"
//   },
//   {
//     category: "JNELP Craft Class",
//     image: "/images/p3.jpeg",
//     description: "Skill development and training programs"
//   },
//   {
//     category: "Expos & Showcases",
//     image: "/images/buy 9.webp",
//     description: "Sharing our journey at various exhibitions"
//   },
//   {
//     category: "Skill Training",
//     image: "/images/carrot.webp",
//     description: "Empowering youth with practical skills"
//   },
//   {
//     category: "Kids Craft Classes",
//     image: "/images/blacksoap.webp",
//     description: "Nurturing creativity in young minds"
//   }
// ];

// const partnershipOpportunities = [
//   {
//     icon: Store,
//     title: "Become a Stockist",
//     description: "Join our retail network and stock JNELP products in your store. Reach more customers with our authentic African skincare line.",
//     benefits: [
//       "Competitive wholesale pricing",
//       "Marketing support and materials",
//       "Regular product training",
//       "Priority access to new products"
//     ],
//     ctaText: "Apply to Stock Our Products",
//     ctaLink: "/become-stockist"
//   },
//   {
//     icon: UserCheck,
//     title: "Brand Ambassador",
//     description: "Represent JNELP in your community and help spread the message of African-made skincare excellence.",
//     benefits: [
//       "Commission-based earnings",
//       "Product knowledge training",
//       "Marketing collateral",
//       "Community recognition"
//     ],
//     ctaText: "Join Our Ambassador Program",
//     ctaLink: "/brand-ambassador"
//   }
// ];

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2
//     }
//   }
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: "easeOut"
//     }
//   }
// };

// function OurStory() {
//   const [isHome, setIsHome] = useState(false);

//   useEffect(() => {
//     setIsHome(window.location.pathname === "/");
//   }, []);

//   return (
//     <div>
//       <Navbar />
      
//       {/* Hero Section */}
//       <section className={`bg-gradient-to-br from-green-50 to-lime-100 py-20 px-4 md:px-8 ${!isHome ? "mt-16" : ""}`}>
//         <div className="max-w-6xl mx-auto text-center">
//           <motion.h1 
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-5xl md:text-6xl font-bold text-green-800 mb-6"
//           >
//             Our Story
//           </motion.h1>
//           <motion.p 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="text-xl text-gray-600 max-w-3xl mx-auto"
//           >
//             From a heartfelt mission to a thriving enterprise, transforming lives through skincare and community empowerment
//           </motion.p>
//         </div>
//       </section>

//       {/* How We Started */}
//       <section className="py-20 px-4 md:px-8 bg-white">
//         <div className="max-w-6xl mx-auto">
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
//           >
//             <motion.div variants={itemVariants}>
//               <h2 className="text-4xl font-bold text-green-800 mb-6">How We Started</h2>
//               <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
//                 <p>
//                   Established by <strong>Portia Sackey</strong> in 2017, JNELP Innovations originated from a heartfelt desire to assist two young brothers from the Apewosika community, who had become dear friends to our founder.
//                 </p>
//                 <p>
//                   What began as a mission to create job opportunities and uplift families has blossomed into a visionary dream. Today, JNELP Innovations is at the forefront of pioneering innovative formulations and skincare solutions.
//                 </p>
//               </div>
//             </motion.div>
            
//             <motion.div variants={itemVariants} className="relative">
//               <div className="bg-green-100 rounded-2xl p-6">
//                 <img 
//                   src="/images/about.jpg" 
//                   alt="Portia Sackey - Founder" 
//                   className="w-full h-64 object-cover rounded-lg shadow-lg"
//                 />
//                 <div className="mt-4 text-center">
//                   <p className="font-semibold text-green-800">Portia Sackey</p>
//                   <p className="text-gray-600">Founder & Visionary</p>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* Continued Text with Image */}
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
//           >
//             <motion.div variants={itemVariants} className="order-2 lg:order-1">
//               <img 
//                 src="/images/p1.webp" 
//                 alt="Community Impact" 
//                 className="w-full h-64 object-cover rounded-2xl shadow-lg"
//               />
//             </motion.div>
            
//             <motion.div variants={itemVariants} className="order-1 lg:order-2">
//               <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
//                 <p>
//                   This dream inspires us to develop products that not only provide effective results but also transform lives, particularly by empowering women and youth.
//                 </p>
//                 <p>
//                   Beyond skincare, we are dedicated to youth empowerment and community projects, investing in initiatives that uplift and support our communities.
//                 </p>
//                 <p className="font-semibold text-green-800">
//                   With a commitment to quality and affordability, our solutions are crafted by Africans, for Africans, and beyond, reflecting our dedication to fostering positive change and making a difference.
//                 </p>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Where We Are Now */}
//       <section className="py-20 px-4 md:px-8 bg-lime-50">
//         <div className="max-w-6xl mx-auto">
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             <motion.h2 variants={itemVariants} className="text-4xl font-bold text-green-800 text-center mb-16">
//               Where We Are Now
//             </motion.h2>
            
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//               <motion.div variants={itemVariants} className="space-y-6">
//                 <div className="bg-white rounded-2xl p-8 shadow-lg">
//                   <p className="text-gray-700 text-lg leading-relaxed mb-6">
//                     From humble beginnings in a dorm room, JNELP has evolved into a thriving enterprise with its own production space. Our journey has seen remarkable growth, with <strong>37 sales representatives</strong> spanning across <strong>8 regions of Ghana</strong>.
//                   </p>
//                   <p className="text-gray-700 text-lg leading-relaxed">
//                     We're proud to have our products in numerous shops in Cape Coast, with key distributors and wholesalers established in <strong>Tanzania and Liberia</strong>. Our reach is expanding, as we continue to strive towards making quality skincare accessible and affordable in every African home.
//                   </p>
//                 </div>
//               </motion.div>
              
//               <motion.div variants={itemVariants} className="space-y-6">
//                 <div className="bg-green-800 text-white rounded-2xl p-8 shadow-lg">
//                   <h3 className="text-2xl font-bold mb-4">Achievements & Recognition</h3>
//                   <ul className="space-y-3 text-green-100">
//                     <li className="flex items-start">
//                       <Star className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
//                       Listed among emerging businesses at 2022 Cape Coast Expo
//                     </li>
//                     <li className="flex items-start">
//                       <Award className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
//                       Winner of Hollard Streetwise Business Challenge
//                     </li>
//                     <li className="flex items-start">
//                       <Target className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
//                       Finalist for KIC AGRITECH PRO
//                     </li>
//                     <li className="flex items-start">
//                       <Users className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
//                       Entrepreneur of the Year 2022 - GRASAG, University of Ghana
//                     </li>
//                     <li className="flex items-start">
//                       <TrendingUp className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
//                       Listed among 100 most successful women in business by Elevate by Ecobank
//                     </li>
//                   </ul>
//                 </div>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Partner With Us Section */}
//       <section className="py-20 px-4 md:px-8 bg-white">
//         <div className="max-w-6xl mx-auto">
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             <motion.div variants={itemVariants} className="text-center mb-16">
//               <Handshake className="w-16 h-16 text-green-600 mx-auto mb-4" />
//               <h2 className="text-4xl font-bold text-green-800 mb-4">Partner With Us</h2>
//               <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                 Join our mission to bring authentic African skincare to more communities and create lasting impact together
//               </p>
//             </motion.div>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//               {partnershipOpportunities.map((opportunity, index) => (
//                 <motion.div
//                   key={index}
//                   variants={itemVariants}
//                   className="bg-gradient-to-br from-green-50 to-lime-50 rounded-2xl p-8 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300"
//                 >
//                   <div className="flex items-center mb-6">
//                     <opportunity.icon className="w-12 h-12 text-green-600 mr-4" />
//                     <h3 className="text-2xl font-bold text-green-800">{opportunity.title}</h3>
//                   </div>
                  
//                   <p className="text-gray-700 mb-6 leading-relaxed">
//                     {opportunity.description}
//                   </p>
                  
//                   <div className="mb-6">
//                     <h4 className="font-semibold text-green-800 mb-3">Benefits:</h4>
//                     <ul className="space-y-2">
//                       {opportunity.benefits.map((benefit, benefitIndex) => (
//                         <li key={benefitIndex} className="flex items-start">
//                           <Star className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
//                           <span className="text-gray-600">{benefit}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
                  
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={() => window.location.href = opportunity.ctaLink}
//                     className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors duration-300 font-semibold"
//                   >
//                     {opportunity.ctaText}
//                   </motion.button>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Awards and Recognitions */}
//       <section className="py-20 px-4 md:px-8 bg-lime-50">
//         <div className="max-w-6xl mx-auto">
//           <motion.h2 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl font-bold text-green-800 text-center mb-16"
//           >
//             Awards & Recognitions
//           </motion.h2>
          
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//           >
//             {awards.map((award, index) => (
//               <motion.div
//                 key={index}
//                 variants={itemVariants}
//                 className="bg-gradient-to-br from-green-50 to-lime-50 rounded-2xl p-6 shadow-lg border border-green-100 hover:shadow-xl transition-shadow duration-300"
//               >
//                 <div className="flex items-center mb-4">
//                   <award.icon className="w-8 h-8 text-green-600 mr-3" />
//                   <div>
//                     <h3 className="font-semibold text-green-800">{award.title}</h3>
//                     <p className="text-green-600 text-sm">{award.year}</p>
//                   </div>
//                 </div>
//                 <p className="text-gray-600 text-sm">{award.description}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Gallery of Impact */}
//       <section className="py-20 px-4 md:px-8 bg-white">
//         <div className="max-w-6xl mx-auto">
//           <motion.h2 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl font-bold text-green-800 text-center mb-16"
//           >
//             Gallery of Impact & Social Responsibility
//           </motion.h2>
          
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//           >
//             {galleryItems.map((item, index) => (
//               <motion.div
//                 key={index}
//                 variants={itemVariants}
//                 className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
//               >
//                 <img 
//                   src={item.image} 
//                   alt={item.category}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-6">
//                   <h3 className="font-semibold text-green-800 mb-2">{item.category}</h3>
//                   <p className="text-gray-600 text-sm">{item.description}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default OurStory;










// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { Award, Users, Target, Star, TrendingUp, Handshake } from 'lucide-react';
// import Navbar from '../../../components/Navbar';

// const awards = [
//   { 
//     icon: Award, 
//     title: "Hollard Streetwise Competition", 
//     year: "2024"
//   },
//   { 
//     icon: Star, 
//     title: "GRASAG Entrepreneur of the Year", 
//     year: "2022"
//   },
//   { 
//     icon: Target, 
//     title: "GIZ Green SME Finalist", 
//     year: "2023"
//   },
//   { 
//     icon: TrendingUp, 
//     title: "KIC AGRITECH PRO Finalist", 
//     year: "2023"
//   },
//   { 
//     icon: Users, 
//     title: "Elevate 100 Women in Business", 
//     year: "2023"
//   }
// ];

// const galleryItems = [
//   {
//     category: "Youth Empowerment",
//     image: "/images/p1.jpeg",
//   },
//   {
//     category: "Community Projects",
//     image: "/images/p2.jpeg",
//   },
//   {
//     category: "Skill Training",
//     image: "/images/p3.jpeg",
//   },
//   {
//     category: "Expos & Showcases",
//     image: "/images/buy 9.webp",
//   }
// ];

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2
//     }
//   }
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.5,
//       ease: "easeOut"
//     }
//   }
// };

// function OurStory() {
//   const [isHome, setIsHome] = useState(false);

//   useEffect(() => {
//     setIsHome(window.location.pathname === "/");
//   }, []);

//   return (
//     <div>
//       <Navbar />
      
//       {/* Hero Section - More Compact */}
//       <section className={`bg-gradient-to-br from-green-50 to-lime-100 py-16 px-4 md:px-8 ${!isHome ? "mt-16" : ""}`}>
//         <div className="max-w-4xl mx-auto text-center">
//           <motion.h1 
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-4xl md:text-5xl font-bold text-green-800 mb-4"
//           >
//             Our Journey
//           </motion.h1>
//           <motion.p 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="text-lg text-gray-600"
//           >
//             From passion to purpose - transforming lives through authentic African skincare
//           </motion.p>
//         </div>
//       </section>

//       {/* Our Story - Combined Section */}
//       <section className="py-16 px-4 md:px-8 bg-white">
//         <div className="max-w-4xl mx-auto">
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
//           >
//             <motion.div variants={itemVariants}>
//               <h2 className="text-3xl font-bold text-green-800 mb-6">Our Foundation</h2>
//               <div className="space-y-4 text-gray-700">
//                 <p>
//                   Founded by <strong>Portia Sackey</strong> in 2017, JNELP began as a mission to create opportunities in the Apewosika community. What started with helping two young brothers has grown into a movement empowering women and youth across Ghana.
//                 </p>
//                 <p>
//                   We believe in more than just skincare - we're committed to community transformation. Our products are crafted by Africans, for Africans, making quality skincare accessible while creating meaningful impact.
//                 </p>
//               </div>
//             </motion.div>
            
//             <motion.div variants={itemVariants} className="flex justify-center">
//               <div className="bg-green-100 rounded-xl p-4 max-w-xs">
//                 <img 
//                   src="/images/about.jpg" 
//                   alt="Portia Sackey - Founder" 
//                   className="w-full h-48 object-cover rounded-lg"
//                 />
//                 <div className="mt-3 text-center">
//                   <p className="font-semibold text-green-800">Portia Sackey</p>
//                   <p className="text-gray-600 text-sm">Founder</p>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Growth & Impact - Compact */}
//       <section className="py-16 px-4 md:px-8 bg-lime-50">
//         <div className="max-w-4xl mx-auto">
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             <motion.h2 variants={itemVariants} className="text-3xl font-bold text-green-800 text-center mb-12">
//               Our Growth & Impact
//             </motion.h2>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               <motion.div variants={itemVariants} className="space-y-4">
//                 <div className="bg-white rounded-xl p-6">
//                   <h3 className="font-bold text-green-800 text-lg mb-3">Where We Are Today</h3>
//                   <p className="text-gray-700">
//                     From a dorm room to our own production space, we now have <strong>37 representatives</strong> across <strong>8 regions</strong> of Ghana, with distributors in Tanzania and Liberia.
//                   </p>
//                 </div>
                
//                 {/* Compact Partnership Section */}
//                 <div className="bg-green-800 text-white rounded-xl p-6">
//                   <div className="flex items-center mb-3">
//                     <Handshake className="w-5 h-5 mr-2" />
//                     <h3 className="font-bold text-lg">Join Our Mission</h3>
//                   </div>
//                   <div className="space-y-2 text-green-100 text-sm">
//                     <a href="/become-stockist" className="block hover:text-white transition-colors">
//                       ↗ Become a Stockist
//                     </a>
//                     <a href="/brand-ambassador" className="block hover:text-white transition-colors">
//                       ↗ Brand Ambassador
//                     </a>
//                   </div>
//                 </div>
//               </motion.div>
              
//               <motion.div variants={itemVariants}>
//                 <div className="bg-white rounded-xl p-6">
//                   <h3 className="font-bold text-green-800 text-lg mb-4">Recognition</h3>
//                   <div className="space-y-3">
//                     <div className="flex items-start">
//                       <Award className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
//                       <span className="text-gray-700 text-sm">Winner - Hollard Streetwise Business Challenge</span>
//                     </div>
//                     <div className="flex items-start">
//                       <Star className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
//                       <span className="text-gray-700 text-sm">Entrepreneur of the Year 2022 - GRASAG</span>
//                     </div>
//                     <div className="flex items-start">
//                       <Users className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
//                       <span className="text-gray-700 text-sm">100 Most Successful Women in Business - Elevate by Ecobank</span>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Awards - More Compact */}
//       <section className="py-16 px-4 md:px-8 bg-white">
//         <div className="max-w-4xl mx-auto">
//           <motion.h2 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-3xl font-bold text-green-800 text-center mb-12"
//           >
//             Awards & Recognition
//           </motion.h2>
          
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="grid grid-cols-2 md:grid-cols-3 gap-4"
//           >
//             {awards.map((award, index) => (
//               <motion.div
//                 key={index}
//                 variants={itemVariants}
//                 className="bg-green-50 rounded-lg p-4 text-center border border-green-100"
//               >
//                 <award.icon className="w-6 h-6 text-green-600 mx-auto mb-2" />
//                 <h3 className="font-semibold text-green-800 text-sm mb-1">{award.title}</h3>
//                 <p className="text-green-600 text-xs">{award.year}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Gallery - Compact */}
//       <section className="py-16 px-4 md:px-8 bg-lime-50">
//         <div className="max-w-4xl mx-auto">
//           <motion.h2 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-3xl font-bold text-green-800 text-center mb-12"
//           >
//             Our Impact in Action
//           </motion.h2>
          
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="grid grid-cols-2 md:grid-cols-4 gap-4"
//           >
//             {galleryItems.map((item, index) => (
//               <motion.div
//                 key={index}
//                 variants={itemVariants}
//                 className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
//               >
//                 <img 
//                   src={item.image} 
//                   alt={item.category}
//                   className="w-full h-32 object-cover"
//                 />
//                 <div className="p-3">
//                   <h3 className="font-semibold text-green-800 text-sm text-center">{item.category}</h3>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default OurStory;




import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target, Star, TrendingUp, Handshake, Heart, MapPin, Globe } from 'lucide-react';
import Navbar from '../../../components/Navbar';

const awards = [
  { 
    icon: Award, 
    title: "Hollard Streetwise Competition", 
    year: "2024",
    highlight: "Winner"
  },
  { 
    icon: Star, 
    title: "GRASAG Entrepreneur", 
    year: "2022",
    highlight: "Of the Year"
  },
  { 
    icon: Target, 
    title: "GIZ Green SME", 
    year: "2023",
    highlight: "Finalist"
  },
  { 
    icon: TrendingUp, 
    title: "KIC AGRITECH PRO", 
    year: "2023",
    highlight: "Finalist"
  },
  { 
    icon: Users, 
    title: "Elevate 100 Women", 
    year: "2023",
    highlight: "Honoree"
  },
  { 
    icon: Heart, 
    title: "Community Impact", 
    year: "2023",
    highlight: "Award"
  }
];

const galleryItems = [
  {
    category: "Youth Empowerment",
    image: "../src/assets/images/p1.jpeg",
    description: "Training future leaders"
  },
  {
    category: "Community Projects",
    image: "../src/assets/images/p2.jpeg", 
    description: "Northern Ghana initiatives"
  },
  {
    category: "Skill Training",
    image: "../src/assets/images/p3.jpeg",
    description: "Practical workshops"
  },
  {
    category: "Expos & Showcases",
    image: "../src/assets/images/buy 9.webp",
    description: "Sharing our journey"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

function OurStory() {
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    setIsHome(window.location.pathname === "/");
  }, []);

  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <section className={`bg-gradient-to-br from-green-50 to-lime-100 py-20 px-4 md:px-8 ${!isHome ? "mt-16" : ""}`}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-green-800 mb-6"
          >
            Our Journey
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            More than skincare - a movement empowering communities through authentic African products
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-green-800 mb-6">Built on Passion & Purpose</h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  In 2017, <strong>Portia Sackey</strong> founded JNELP with a simple mission: create opportunities in her community. What began with helping two young brothers in Apewosika has blossomed into a thriving social enterprise.
                </p>
                <p>
                  We've grown from a dorm room to our own production space, now reaching 8 regions of Ghana with 37 representatives and expanding to Tanzania and Liberia.
                </p>
                <p className="font-semibold text-green-800">
                  Every product tells a story of African excellence, community empowerment, and sustainable growth.
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex justify-center">
              <div className="bg-green-100 rounded-2xl p-6 max-w-sm">
                <img 
                  src="../src/assets/images/about.jpg" 
                  alt="Portia Sackey - Founder" 
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
                <div className="mt-4 text-center">
                  <p className="font-semibold text-green-800 text-lg">Portia Sackey</p>
                  <p className="text-gray-600">Founder & Visionary Leader</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Impact & Partnership */}
      <section className="py-20 px-4 md:px-8 bg-lime-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Our Reach */}
              <motion.div variants={itemVariants} className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-green-800 mb-4">Our Growing Reach</h3>
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <MapPin className="w-5 h-5 text-green-600 mr-3" />
                        <div>
                          <h4 className="font-semibold text-green-800">National Presence</h4>
                          <p className="text-gray-600 text-sm">Active in 8 regions across Ghana with local representatives</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <Globe className="w-5 h-5 text-green-600 mr-3" />
                        <div>
                          <h4 className="font-semibold text-green-800">International Expansion</h4>
                          <p className="text-gray-600 text-sm">Distributors established in Tanzania and Liberia</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <Users className="w-5 h-5 text-green-600 mr-3" />
                        <div>
                          <h4 className="font-semibold text-green-800">Team Growth</h4>
                          <p className="text-gray-600 text-sm">37 dedicated representatives driving our mission forward</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <Target className="w-5 h-5 text-green-600 mr-3" />
                        <div>
                          <h4 className="font-semibold text-green-800">Future Vision</h4>
                          <p className="text-gray-600 text-sm">Expanding to 5 more African countries by 2026</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Partnership */}
                <div className="bg-green-800 text-white rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <Handshake className="w-6 h-6 mr-3" />
                    <h3 className="text-xl font-bold">Join Our Movement</h3>
                  </div>
                  <p className="text-green-100 mb-4">
                    Be part of our mission to bring authentic African skincare to more communities.
                  </p>
                  <div className="space-y-3">
                    <a href="mailto:jnelpinnovations@gmail.com" className="block bg-white text-green-800 py-2 px-4 rounded-lg text-center font-semibold hover:bg-green-50 transition-colors">
                      Become a Stockist
                    </a>
                    <a href="mailto:jnelpinnovations@gmail.com" className="block border border-white text-white py-2 px-4 rounded-lg text-center font-semibold hover:bg-white hover:text-green-800 transition-colors">
                      Brand Ambassador
                    </a>
                  </div>
                </div>
              </motion.div>
              
              {/* Recognition */}
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-bold text-green-800 mb-6">Recognition & Awards</h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-start mb-3">
                      <Award className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-green-800">Hollard Streetwise Business Challenge</h4>
                        <p className="text-gray-600 text-sm">Winner 2024</p>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm">Recognized for innovative business model and community impact</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-start mb-3">
                      <Star className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-green-800">Entrepreneur of the Year</h4>
                        <p className="text-gray-600 text-sm">GRASAG 2022</p>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm">Honoring Portia's leadership and vision for African entrepreneurship</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-start">
                      <Users className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-green-800">100 Most Successful Women</h4>
                        <p className="text-gray-600 text-sm">Elevate by Ecobank 2023</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Awards Grid */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-green-800 text-center mb-12"
          >
            Awards & Honors
          </motion.h2>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 gap-6"
          >
            {awards.map((award, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-green-50 rounded-xl p-5 text-center border border-green-100 hover:shadow-md transition-shadow"
              >
                <award.icon className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-green-800 text-sm mb-1">{award.title}</h3>
                <p className="text-green-600 text-xs font-semibold mb-1">{award.highlight}</p>
                <p className="text-gray-500 text-xs">{award.year}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-4 md:px-8 bg-lime-50">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-green-800 text-center mb-12"
          >
            Making Impact Together
          </motion.h2>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {galleryItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <img 
                  src={item.image} 
                  alt={item.category}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-green-800 text-sm mb-1">{item.category}</h3>
                  <p className="text-gray-600 text-xs">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default OurStory;