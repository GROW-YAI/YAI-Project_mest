import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Award, Heart, ArrowRight, Users, Lightbulb, Network } from 'lucide-react';
import about from "../../../assets/images/about.webp";
import Navbar from '../../../components/Navbar';
import { useLocation } from 'react-router-dom';


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
                  src={about}
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

      {/* PIN Section */}
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

        </div>
      </section>
    </div>
  );
}

export default AboutInnovator;