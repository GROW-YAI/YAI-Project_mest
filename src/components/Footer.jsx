import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdOutlineCopyright } from "react-icons/md";
import { FaTiktok } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import pic from "../assets/images/Jnelp.png"

const Footer = () => {
  return (
    <footer className="w-full bg-white text-black py-10 px-10 border-t border-gray-300" id="contact">
      <div className="max-w-6xl mx-auto grid grid-cols-1
   md:grid-cols-3 gap-14 text-center md:text-left">

        {/* Column 1: Logo */}
        <div className="flex flex-col justify-center items-center md:items-start">
          <img src={pic} alt="Jnelp Logo" className="h-30 w-auto" />
          <div className="flex items-center gap-1 text-sm mt-2 text-gray-600">
            <MdOutlineCopyright />
            <span>2025 Regal JNELP Innovations</span>
          </div>
        </div>

        {/* Column 2: About JNELP & Products */}
        <div>
          <h3 className="font-semibold text-lg">About JNELP</h3>
          <p className="text-sm mt-6">
            JNELP is a Ghanaian skincare brand creating eco-friendly, high-quality cosmetics using locally sourced materials.
            Made by Africans, for Africans and beyond.
          </p>
          <p className="mt-8 text-sm font-semibold flex items-center gap-1.5"><CiLocationOn /> Cape Coast, Ghana</p>
          <p className="mt-1 text-sm ">
            <a href="mailto:jnelpinnovations@gmail.com" className="hover:underline flex items-center gap-1.5 "><TfiEmail />jnelpinnovations@gmail.com</a>
          </p>

          {/* Products */}
          <h3 className="font-semibold text-lg mt-6">Our Products</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li><a href="#" className="hover:underline flex items-center gap-2">Carrot Gel <FaArrowRight /></a></li>
            <li><a href="#" className="hover:underline flex items-center gap-2">Black Soap <FaArrowRight /></a></li>
            <li><a href="#" className="hover:underline flex items-center gap-2">Goat Milk Gel <FaArrowRight /></a></li>
          </ul>
        </div>

        {/* Column 3: Quick Links & Socials */}
        <div>
          <h3 className="font-semibold text-lg">Quick Links</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Products</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>

          {/* Social Media */}
          <h3 className="font-semibold text-lg mt-6">Follow Us On</h3>
          <div className="flex justify-center md:justify-start gap-4 mt-2">
            <div className="relative group">
              <a href="#" aria-label="Instagram" className="text-2xl text-gray-700 hover:text-pink-500"><FaInstagramSquare /></a>
              <span className="absolute left-1/2 -translate-x-1/2 bottom-8 bg-gray-200 text-black text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">Instagram</span>
            </div>
            <div className="relative group">
              <a href="#" aria-label="Facebook" className="text-2xl text-gray-700 hover:text-blue-600"><FaFacebook /></a>
              <span className="absolute left-1/2 -translate-x-1/2 bottom-8 bg-gray-200 text-black text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">Facebook</span>
            </div>
            <div className="relative group">
              <a href="#" aria-label="Tiktok" className="text-2xl text-gray-700 hover:text-black"><FaTiktok /></a>
              <span className="absolute left-1/2 -translate-x-1/2 bottom-8 bg-gray-200 text-black text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">TikTok</span>
            </div>
          </div>
        </div>

      </div>

      <div className="text-center mt-8 text-sm border-t border-green-400 pt-4">
        <p>Committed to sustainability and youth empowerment</p>
        <p>&copy; 2025 Regal JNELP Innovations. All rights reserved.</p>

      </div>
    </footer>
  );
};

export default Footer;
