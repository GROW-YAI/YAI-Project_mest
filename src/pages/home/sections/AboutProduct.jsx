import React from 'react'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Carrot, Droplets, Milk } from 'lucide-react'
import carrot from "../../../assets/images/carrot.jpeg"
import blacksoap from "../../../assets/images/blacksoap.jpeg"
import goatmilk from "../../../assets/images/goatmilk.jpeg"
import product1 from "../../../assets/images/p1.jpeg"
import product2 from "../../../assets/images/p2.jpeg"
import product3 from "../../../assets/images/p3.jpeg"
import Navbar from '../../../components/Navbar'
const products = [
  {
    id: 1,
    name: "Carrot gel",
    icon: Carrot,
    description: "This is essentially packed with Coconut oil, Carrots, sheabutter and other essential oils. Rich in vitamin A and carotenoids, which helps give the skin a natural radiant complexion, sweet scented.",
    bgImage: carrot,
    overlayColor: "rgba(225, 137, 40, 0.8)",
    image: product1 
  },
  {
    id: 2,
    name: "Black Soap",
    icon: Droplets,
    description: "It is packed with natural and essential nutrients: black soap, vegetable glycerine and honey which improves skin tone, reduces inflammation, and deeply cleanses the skin.",
    bgImage: blacksoap,
    overlayColor: "rgba(0, 0, 0, 0.7)",
    image: product2
  },
  {
    id: 3,
    name: "Goat milk gel",
    icon: Milk,
    description: "This is essentially packed with Shea butter, honey with goat milk. Which can help the skin shed its dead cells, making one's complexion brighter and more supple in the process. It's a natural skin lightener",
    bgImage: goatmilk,
    overlayColor: "rgba(80, 127, 31, 0.8)",
    image: product3
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
}

const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

function AboutProducts() {
  const [isHome, setIsHome] = useState(false);
  
    useEffect(() => {
      setIsHome(window.location.pathname === "/");
    }, []);

  return (
   <div>
    <Navbar/>
    <section className={`bg-lime-50 py-20 px-4 md:px-8 ${!isHome ? "mt-16" : ""}`}>

      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-green-600 text-center mb-16"
        >
          Our Current Products
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              className="relative rounded-2xl overflow-hidden p-6 text-white"
              style={{
                backgroundImage: `url(${product.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Custom Overlay */}
              <div
                className="absolute inset-0"
                style={{ backgroundColor: product.overlayColor }}
              ></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-4">
                  <product.icon className="w-6 h-6 text-white" />
                  <h3 className="text-2xl font-semibold">{product.name}</h3>
                </div>

                <div className="bg-white rounded-xl p-4 flex flex-col md:flex-row items-center gap-4 md:gap-x-6">
                  {/* Image */}
                  <div className="flex-shrink-0 w-full md:w-1/3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-[200px] h-auto object-cover rounded-lg"
                    />
                  </div>
                  
                  {/* Text */}
                  <div className="text-gray-800 w-full md:w-2/3">
                    <p className="mb-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
    
   </div>
  )
}

export default AboutProducts;

