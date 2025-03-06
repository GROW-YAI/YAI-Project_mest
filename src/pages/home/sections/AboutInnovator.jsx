import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Award, Heart, ArrowRight } from 'lucide-react';
import about from "../../../assets/images/about.webp";
import Navbar from '../../../components/Navbar';


const stats = [
  { number: "350+", label: "Impacts Made"},
  { number: "7+", label: "Years of Experience" },
  { number: "3+", label: "Products Created" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

function AboutInnovator() {
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    setIsHome(window.location.pathname === "/");
  }, []);

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
              <div className="relative w-[320px] h-[320px] md:w-[480px] md:h-[480px] mx-auto">
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
              <motion.span variants={itemVariants} className="text-white text-lg font-medium mb-4 block">
                About Founder
              </motion.span>

              <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">
                Who is <span className="text-white font-serif italic">Portia Sackey</span>?
              </motion.h2>

              <motion.p variants={itemVariants} className="text-gray-200 text-lg mb-8 leading-relaxed">
              My journey began with a personal search for safe and effective skincare, leading me to create natural, locally sourced products that promote sustainability and social impact. Beyond skincare, my work creates jobs, supports families, and equips women and youth with valuable skills. Through arts and crafts, we repurpose waste to inspire creativity and provide sustainable income opportunities. My mission is to blend beauty, sustainability, and empowerment for lasting change.
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

              {/* Call to Action */}
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-3 text-white px-6 py-3 font-medium transition-colors"
              >
                <h1>Join me in revolutionizing skincare with natural ingredients while upholding sustainability and social responsibility at the heart of our brand.</h1>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
    </div>
  );
}

export default AboutInnovator;

