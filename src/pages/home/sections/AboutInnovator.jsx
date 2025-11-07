import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Award, Heart, ArrowRight, Users, Lightbulb, Network, MessageCircle, Handshake } from 'lucide-react';
import about from "../../../assets/images/about.webp";
import aboutUs1 from "../../../assets/images/aboutUs1.jpg";
import Navbar from '../../../components/Navbar';
import { useLocation, Link } from 'react-router-dom';

const stats = [
  { number: "350+", label: "Impacts Made"},
  { number: "7+", label: "Years of Experience" },
  { number: "3+", label: "Products Created" }
];

const pinValues = [
  {
    icon: Users,
    title: "People",
    description: "We empower communities — from the women in rural Ghana who supply our raw black soaps, butters, and natural ingredients, to the youth and women we train in skills and employ, to the wider African community whose mindset and taste we are helping to shape towards Made in Africa products. People are at the heart of everything we do."
  },
  {
    icon: Lightbulb,
    title: "Innovations",
    description: "At JNELP, innovation is practical and purposeful. We use what Africa already has — black soap and other agricultural by-products — and find new ways to turn them into skincare that is quality, affordable, and eco-friendly. Our formulations combine traditional knowledge with creative methods, showing that African resources can stand proudly on shelves at home and abroad."
  },
  {
    icon: Network,
    title: "Networks",
    description: "For too long, skincare shelves across Africa have been dominated by products made elsewhere, leaving African-made cosmetics with less than 3% of the space. At JNELP, we are changing that story — one shop, one home, one community, and one country at a time. We are empowering Made in Africa products to rise on shelves across the continent and beyond."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const pinItemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

function AboutInnovator() {
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    setIsHome(window.location.pathname === "/");
  }, []);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div>
      <Navbar />
      
      {/* Who We Are Section bg-green-800*/}
      <section className={`py-20 px-4 md:px-8 bg-[#019A28] ${!isHome ? "mt-16 md:mt-20" : ""}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            {/* Left Column - Image */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[480px] md:h-[480px] mx-auto">
                <div className="absolute inset-0 rounded-full bg-[#FFA726]" />
                <img
                  src={aboutUs1}
                  alt="Portia Sackey"
                  className="absolute inset-0 w-full h-full object-cover rounded-full"
                />
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div variants={itemVariants} className="text-white">
              <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white font-serif italic">Who We Are</span>?
              </motion.h2>

              <motion.p variants={itemVariants} className="text-gray-200 text-lg mb-8 leading-relaxed">
                JNELP is a skin care brand producing affordable quality eco-friendly shower gels and cosmetics products using locally sourced raw materials from Ghana, Africa. 
              </motion.p>
              <motion.p variants={itemVariants} className="text-gray-200 text-lg mb-8 leading-relaxed">
                Our aim is to project Africa to the rest of the world as we encourage people to embrace the beauty of their natural skin and create jobs for the youth. Creating many jobs for women and youth in Africa.
              </motion.p>

              {/* Small Contact Reference 1 */}
              <motion.div variants={itemVariants} className="mb-6">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center text-green-200 hover:text-white text-sm font-medium"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Have questions? Contact us
                </Link>
              </motion.div>

              {/* Statistics Grid */}
              <motion.div variants={containerVariants} className="grid grid-cols-3 gap-8 mb-10">
                {stats.map((stat, index) => (
                  <motion.div key={index} variants={itemVariants} className="text-center">
                    <span className="block text-white text-3xl md:text-4xl font-bold mb-2">{stat.number}</span>
                    <span className="text-gray-300 text-sm">{stat.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Journey Section - Using greyish background like PIN section */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-green-800 mb-6">Our Journey</h2>
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

              {/* Small Contact Reference 2 */}
              <motion.div variants={itemVariants} className="mt-8">
                <Link 
                  to="/partner-with-us" 
                  className="inline-flex items-center text-green-600 hover:text-green-700 text-sm font-medium"
                >
                  <Handshake className="w-4 h-4 mr-2" />
                  Interested in partnering with us?
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex justify-center">
              <div className="bg-green-100 rounded-2xl p-6 max-w-sm">
                <img 
                  src={about} 
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

      {/* PIN Section - KEEP ORIGINAL with white background */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              Let's <span className="text-[#019A28]">P-I-N</span> It!
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Our Core Values are <span className="font-semibold text-[#019A28]">PEOPLE, INNOVATIONS AND NETWORKS</span>, Just PIN IT
            </motion.p>
          </motion.div>

          {/* PIN Cards Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {pinValues.map((value, index) => (
              <motion.div
                key={index}
                variants={pinItemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Icon Container */}
                  <div className="w-20 h-20 rounded-full bg-[#019A28] flex items-center justify-center mb-6">
                    <value.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Small Final Contact Reference */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mt-12"
          >
            <motion.div variants={itemVariants} className="bg-green-50 rounded-xl p-6 border border-green-200 max-w-md mx-auto">
              <p className="text-green-800 font-medium mb-2">Want to learn more about our mission?</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/contact"
                  className="text-green-600 hover:text-green-700 text-sm font-medium"
                >
                  Contact Us
                </Link>
                <span className="text-green-400 hidden sm:inline">•</span>
                <Link
                  to="/partner-with-us"
                  className="text-green-600 hover:text-green-700 text-sm font-medium"
                >
                  Partner With Us
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default AboutInnovator;