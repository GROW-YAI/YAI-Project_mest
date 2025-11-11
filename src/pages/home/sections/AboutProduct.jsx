import React from 'react'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Carrot, Droplets, Milk } from 'lucide-react'
import carrot from "../../../assets/images/carrot.jpeg"
import blacksoap from "../../../assets/images/blacksoap.webp"
import goatmilk from "../../../assets/images/goatmilk.webp"
import product1 from "../../../assets/images/p1.webp"
import product2 from "../../../assets/images/p2.webp"
import product3 from "../../../assets/images/p3.webp"
import product4 from "../../../assets/images/buy 9.webp"
import black1 from "../../../assets/images/black1.jpg"
import Navbar from '../../../components/Navbar'

const productDetails = [
  {
    id: 1,
    name: "Carrot Shower Gel",
    icon: Carrot,
    description: "Rich in Vitamin A and Carotenoids, this luxurious blend of coconut oil, carrots, shea butter, and essential oils promotes a radiant complexion. Elevate your shower routine with our indulgent formula for a natural glow", 
    bgImage: carrot,
    overlayColor: "rgba(225, 137, 40, 0.8)",
    image: product1,
    price: "₵40",
    paystackLink: "https://paystack.shop/jnelp-cosmetic_solutions?product=jnelp-carrot-shower-gel-terngc"
  },
  {
    id: 2,
    name: "Cocoa Black Soap",
    icon: Droplets,
    description: "Our all-natural black soap with Honey, Cocoa, and Shea Butter. Unlike regular black soap, our formula leaves your skin feeling super moisturized and refreshed. This is surely for a bath you'll want to repeat.",
    bgImage: blacksoap,
    overlayColor: "rgba(0, 0, 0, 0.7)",
    image: product2,
    price: "₵40",
    paystackLink: "https://paystack.shop/jnelp-cosmetic_solutions?product=jnelp-black-soap-shower-gel-bmnmub"
  },
  {
    id: 3,
    name: "Goat Milk Gel",
    icon: Milk,
    description: "Enriched with the nourishing goodness of goat shea butter, honey, and goat milk. This unique blend helps to gently exfoliate the skin, promoting a brighter and more supple complexion effect. ",
    bgImage: goatmilk,
    overlayColor: "rgba(80, 127, 31, 0.8)",
    image: product3,
    price: "₵40",
    paystackLink: "https://paystack.shop/jnelp-cosmetic_solutions?product=jnelp-goat-milk-shower-gel-qcuoys"
  }
]

const showcaseProducts = [
  { 
    id: 1, 
    name: "Carrot Shower Gel", 
    price: "₵40", 
    image: product1, 
    description: "Nourishes and brightens your skin naturally.",
    paystackLink: "https://paystack.shop/jnelp-cosmetic_solutions?product=jnelp-carrot-shower-gel-terngc" 
  },
  { 
    id: 2, 
    name: "Black Soap", 
    price: "₵40", 
    image: product2, 
    description: "Deep cleansing for smooth and glowing skin.",
    paystackLink: "https://paystack.shop/jnelp-cosmetic_solutions?product=jnelp-goat-milk-shower-gel-qcuoys"
  },
  { 
    id: 3, 
    name: "Goat Milk Gel", 
    price: "₵40", 
    image: product3, 
    description: "Rich in vitamins, keeps skin hydrated and fresh.", 
    paystackLink: "https://paystack.shop/jnelp-cosmetic_solutions?product=jnelp-black-soap-shower-gel-bmnmub" 
  },
  { 
    id: 4, 
    name: "Cocoa Black Soap", 
    price: "₵45", 
    image: product4, 
    description: "Enriched with cocoa for deep cleansing and a natural glow.", 
    paystackLink: "https://paystack.shop/jnelp-cosmetic_solutions?product=jnelp-cocoa-black"
  },
  { 
    id: 5, 
    name: "Honey Black Soap", 
    price: "₵45", 
    image: black1, 
    description: "Infused with the goodness of pure honey to gently cleanse and moisturize, leaving your skin feeling soft, smooth, and radiant.", 
    paystackLink: "https://paystack.shop/jnelp-cosmetic_solutions?product=jnelp-cocoa-black"
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
  const [showAll, setShowAll] = useState(false);
  
  useEffect(() => {
    setIsHome(window.location.pathname === "/");
  }, []);

  const displayedProducts = showAll ? showcaseProducts : showcaseProducts.slice(0, 3);

  return (
   <div>
    <Navbar/>
    
    {/* Original AboutProducts Section */}
    <section className={`bg-lime-50 py-20 px-4 md:px-8 ${!isHome ? "mt-16" : ""}`}>
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-green-800 text-center mb-16"
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
          {productDetails.map((product) => (
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

    {/* Original Showcase Section */}
    <section className={`py-20 px-4 md:px-8 bg-white ${!isHome ? "mt-16 md:mt-20" : ""}`}> 
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 text-green-800"
        >
          What Do You Need?
        </motion.h2>
        <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto"
          >
            Discover our range of eco-friendly, natural skincare products made with love in Ghana
          </motion.p>
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {displayedProducts.map((product) => (
            <motion.div 
              key={product.id} 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center"
            >
              <div className="w-full h-56 flex justify-center items-center bg-lime-50 rounded-md">
                <img src={product.image} alt={product.name} className="w-full h-full object-contain rounded-md" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mt-4">{product.name}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{product.description}</p>
              <p className="text-lg font-bold text-green-800 mt-2">{product.price}</p>
              <button className="mt-4 bg-green-800 text-white py-2 px-4 rounded hover:bg-green-600 w-full sm:w-auto"  onClick={() => window.open(product.paystackLink, "_blank")}>
                Buy Now
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <div className="text-center mt-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAll(!showAll)}
            className="bg-green-800 text-white py-2 px-6 rounded hover:bg-green-600 transition w-full sm:w-auto"
          >
            {showAll ? "View Less" : "View More"}
          </motion.button>
        </div>
      </div>
    </section>
    
   </div>
  )
}

export default AboutProducts;