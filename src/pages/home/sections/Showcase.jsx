import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target, Star, TrendingUp, Handshake, Heart, MapPin, Globe } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import impact1 from "../../../assets/images/impact1.jpg";
import impact2 from "../../../assets/images/impact2.jpeg";
import impact3 from "../../../assets/images/impact3.jpeg";
import impact4 from "../../../assets/images/impact4.jpg";
import impact5 from "../../../assets/images/impact5.jpg";
import impact6 from "../../../assets/images/impact6.jpeg";
import impact7 from "../../../assets/images/impact7.jpg";
import impact8 from "../../../assets/images/impact8.jpeg";

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
    image: impact1,
    description: "Training future leaders"
  },
  {
    category: "Community Projects",
    image: impact2, 
    description: "Northern Ghana initiatives"
  },
  {
    category: "Skill Training",
    image: impact3,
    description: "Practical workshops"
  },
  {
    category: "Expos & Showcases",
    image: impact4,
    description: "Sharing our journey"
  },
  // New placeholder items - 8 beautiful placeholders
  {
    category: "Award Ceremonies",
    image: impact5,
    description: "Celebrating our achievements",
  },
  {
    category: "Quality Production",
    image: impact6,
    description: "Ensuring product excellence",
  },
  {
    category: "Product Application",
    image: impact7,
    description: "Right product usage",
  },
  {
    category: "Media Features",
    image: impact8,
    description: "Press and media coverage",
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