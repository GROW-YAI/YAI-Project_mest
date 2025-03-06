import { motion } from "framer-motion";
import React, { useState, useEffect } from "react"; 
import Navbar from "../../../components/Navbar";
import image1 from "../../../assets/images/p1.webp";
import image2 from "../../../assets/images/p2.webp";
import image3 from "../../../assets/images/p3.webp";
import image4 from "../../../assets/images/buy 9.webp";



const products = [
  { id: 1, name: "Carrot Gel", price: "₵40", image: image1, description: "Nourishes and brightens your skin naturally.",paystackLink: "https://paystack.shop/jnelp-cosmetic_solutions?product=jnelp-carrot-shower-gel-terngc" },
  { id: 2, name: "Black Soap", price: "₵40", image: image2, description: "Deep cleansing for smooth and glowing skin.," , paystackLink: "https://paystack.shop/jnelp-cosmetic_solutions?product=jnelp-goat-milk-shower-gel-qcuoys "},
  { id: 3, name: "Goat Milk Gel", price: "₵40", image: image3, description: "Rich in vitamins, keeps skin hydrated and fresh.", paystackLink: "https://paystack.shop/jnelp-cosmetic_solutions?product=jnelp-black-soap-shower-gel-bmnmub " },
  { id: 4, name: "Cocoa Black Soap", price: "₵45", image: image4, description: "Enriched with cocoa for deep cleansing and a natural glow.", paystackLink: "https://paystack.shop/jnelp-cosmetic_solutions?product=jnelp-cocoa-black"},
  
  
];

const Showcase = () => {
  const [showAll, setShowAll] = useState(false);
  const [isHome, setIsHome] = useState(false); 
  useEffect(() => {
    setIsHome(window.location.pathname === "/");
  }, []);

  const displayedProducts = showAll ? products : products.slice(0, 3);

  return (
    <section className={`py-20 px-4 md:px-8 bg-lime-50 ${!isHome ? "mt-16 md:mt-20" : ""}`}> 
      <Navbar />
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 text-green-600"
        >
          What Do You Need?
        </motion.h2>
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
              <p className="text-lg font-bold text-green-600">{product.price}</p>
              <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 w-full sm:w-auto"  onClick={() => window.open(product.paystackLink, "_blank")}>
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
            className="bg-green-700 text-white py-2 px-6 rounded hover:bg-green-800 transition w-full sm:w-auto"
          >
            {showAll ? "View Less" : "View More"}
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
