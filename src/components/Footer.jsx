import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaInstagramSquare, FaFacebook, FaTiktok } from "react-icons/fa";
import { MdOutlineCopyright } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import pic from "../assets/images/logo.webp";
import { Link } from "react-router-dom";

const Footer = () => {
  return (

    <footer className="bg-white text-black py-12" id="contact">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      
      {/* Column 1: Logo, Description & Social Media */}
      <div className="col-span-1">
        <div className="space-y-6">
          <div className="flex justify-center md:justify-start">
            <img src={pic} alt="JNELP Logo" className="w-30 h-24" />
          </div>
          <p className="text-gray-600">
            Regal JNELP is a Ghanaian skincare brand creating eco-friendly, high-quality cosmetics using locally sourced materials.
            Made by Africans, for Africans and beyond.
          </p>
        </div>
      </div>

      {/* Column 2: Quick Links */}
      <div className="col-span-1">
        <div className="space-y-6">
          <h3 className="text-lg font-bold">Quick Links</h3>
          <ul className="space-y-3 text-gray-600">
            <li><Link to="/" className="hover:text-black hover:underline transition-colors duration-300">Home</Link></li>
            <li><Link to="/products" className="hover:text-black hover:underline transition-colors duration-300">Products</Link></li>
            <li><Link to="/aboutinnovator" className="hover:text-black hover:underline transition-colors duration-300">About</Link></li>
            <li><Link to="/services" className="hover:text-black hover:underline transition-colors duration-300">Services</Link></li>
            <li><Link to="/testimonials" className="hover:text-black hover:underline transition-colors duration-300">Testimonials</Link></li>
            <li><Link to="/contact" className="hover:text-black hover:underline transition-colors duration-300">Contact</Link></li>
          </ul>
        </div>
      </div>

      {/* Column 3: Contact Info */}
      <div className="col-span-1">
        <div className="space-y-6">
          <h3 className="text-lg font-bold">Contact</h3>
          <div className="space-y-4 text-gray-600">
            <div>
              <div className="font-bold">Location:</div>
              <p>Gratis Foundation Yard<br />Cape Coast - Ghana</p>
            </div>
            <div>
              <div className="font-bold">Call:</div>
              <p><a href="tel:+233530506605" className="hover:text-black transition-colors duration-300">+233 53 050 6605 /</a></p>
              <p><a href="tel:+233202951610" className="hover:text-black transition-colors duration-300"> +233 20 295 1610</a></p>
            </div>
            <div>
              <div className="font-bold">Email:</div>
              <p><a href="mailto: jnelpinnovations@gmail.com" className="hover:text-black transition-colors duration-300"> jnelpinnovations@gmail.com</a></p>
            </div>
          </div>
        </div>
      </div>

      {/* Column 4: Mission Statement & Social Media */}
      <div className="col-span-1">
        <div className="space-y-6">
          <h3 className="text-lg font-bold">Our Mission</h3>
          <p className="text-gray-600">
            Our aim is to project Africa to the rest of the world as we encourage people to embrace the beauty of our natural skin. We strive to make African-made cosmetics a trusted choice on shelves across Africa and beyond.
          </p>
          
          <div className="space-y-4">
            <div className="font-bold">Follow Us</div>
            <div className="flex gap-6">
              <a 
                href="https://www.instagram.com/jnelp_cosmetic_solutions/?igsh=MXJ0Nm1vcnVyOWcyeQ%3D%3D#" 
                aria-label="Instagram" 
                className="text-2xl text-gray-700 hover:text-pink-500 transition-colors duration-300"
              >
                <FaInstagramSquare />
              </a>
              <a 
                href="https://www.facebook.com/share/14wVBKAjdr/" 
                aria-label="Facebook" 
                className="text-2xl text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                <FaFacebook />
              </a>
              <a 
                href="mailto:jnelpinnovations@gmail.com" 
                aria-label="Email" 
                className="text-2xl text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                <TfiEmail />
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>

    {/* Bottom Copyright Section */}
    <div className="text-center mt-12 pt-8 border-t border-green-400 text-gray-600">
      <p>&copy; 2025 Regal JNELP Innovations. All rights reserved.</p>
    </div>
  </div>
</footer>


   
  );
};

export default Footer;
