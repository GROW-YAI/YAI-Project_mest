import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import pics from "../../../assets/images/testi 4.webp";
import picss from "../../../assets/images/testi 2.webp";
import picsss from "../../../assets/images/testi 3.webp";
import Navbar from "../../../components/Navbar";

const testimonials = [
  { id: 1, name: "Alison", text: "JNELP’s shower gel keeps my skin refreshed and nourished. I love that it’s made with natural ingredients—it makes everything better!", image: pics },
  { id: 2, name: "Diane", text: "JNELP’s black soap cleared my acne and made my skin feel cleaner and smoother. I highly recommend it!", image: picss },
  { id: 3, name: "Micheal", text: "I bought JNELP’s skincare set for my mom, and she absolutely loves it! Her skin now glows, and she keeps asking for more products.", image: picsss }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Testimonials = () => {
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    setIsHome(window.location.pathname === "/");
  }, []);

  return (
    <div>
      <Navbar />
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className={`relative bg-green-600 text-white py-16 px-6 md:px-20 pt-24 h-auto ${!isHome ? "mt-16 md:mt-20" : ""}`} 
      >
        <motion.div variants={itemVariants} className="absolute top-10 left-6 bg-green-400 p-4 rounded-full">
          <FaQuoteLeft className="text-2xl" />
        </motion.div>

        <motion.div variants={itemVariants} className="grid md:grid-cols-[1fr_2fr] gap-10 items-center">
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold">What our Customers Say About Us</h2>
            <p className="mt-4 text-gray-300">
              JNELP’s skincare products are known for their high-quality natural ingredients, 
              providing nourishment, hydration, and visible skin improvements.
            </p>
          </motion.div>

          {/* <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"> */}
          <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {testimonials.map((testimonial) => (
              <motion.div 
                key={testimonial.id} 
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-900 p-6 rounded-lg shadow-lg text-center flex flex-col items-center"
              >
                <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 mx-auto rounded-full mb-4 object-cover" />
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
                <h3 className="mt-4 text-lg font-semibold">{testimonial.name}</h3>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Testimonials;
