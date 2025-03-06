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
    <footer className="bg-white text-black py-8" id="contact">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center md:text-left px-4">
        {/* Logo and description */}
        <div>
          <div className="flex justify-center md:justify-start mb-4">
            <img src={pic} alt="Jnelp Logo" className="w-30 h-24" />
          </div>
          <p className="text-sm">
            JNELP is a Ghanaian skincare brand creating eco-friendly, high-quality cosmetics using locally sourced materials.
            Made by Africans, for Africans and beyond.
          </p>
        </div>

        {/* Features */}
        <div>
          <h3 className="font-semibold text-lg">QUICK LINKS</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/products" className="hover:underline">Products</Link></li>
            <li><Link to="/aboutinnovator" className="hover:underline">About</Link></li>
            <li><Link to="/services" className="hover:underline">Services</Link></li>
            <li><Link to="/testimonials" className="hover:underline">Testimonials</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Resources */}
        

        {/* Contact */}
        <div>
          <h6 className="font-semibold mb-4">CONTACT</h6>
          <ul className="text-sm space-y-2">
            <li>Adisadel Park, Cape Coast, Ghana</li>
            <li>+233 504277500</li>
          </ul>

          {/* Social Media */}
          <h3 className="font-semibold text-lg mt-4">Follow Us On</h3>
          <div className="flex justify-center md:justify-start gap-4 mt-2">
            <a href="https://www.instagram.com/jnelp_cosmetic_solutions/?igsh=MXJ0Nm1vcnVyOWcyeQ%3D%3D#" aria-label="Instagram" className="text-2xl text-gray-700 hover:text-pink-500"><FaInstagramSquare /></a>
            <a href="https://www.facebook.com/share/14wVBKAjdr/" aria-label="Facebook" className="text-2xl text-gray-700 hover:text-blue-600"><FaFacebook /></a>
            <a href="mailto:jnelpinnovations@gmail.com" aria-label="Email" className="text-2xl text-gray-700 hover:text-blue-600"><TfiEmail /></a>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 text-sm border-t border-green-400 pt-4 px-4">
        <p>Committed to sustainability and youth empowerment</p>
        <p>&copy; 2025 Regal JNELP Innovations. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
