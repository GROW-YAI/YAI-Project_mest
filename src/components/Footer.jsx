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
    <footer className="bg-white text-black py-8" id="contact">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 text-center md:text-left">
        {/* Logo and description */}
        <div>
          <div className="flex justify-center md:justify-start mb-4">
            <img
              src={pic}
              alt="Jnelp Logo"
              className="w-30 h-24"
            />
          </div>
          <p className="text-sm">
            JNELP is a Ghanaian skincare brand creating eco-friendly, high-quality cosmetics using locally sourced materials.
            Made by Africans, for Africans and beyond.
          </p>
        </div>

        {/* Features */}
        <div>
          <h3 className="font-semibold text-lg ">QUICK LINKS</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Products</a></li>
            <li><a href="#" className="hover:underline">Testimonials</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h6 className="font-semibold mb-4">RESOURCES</h6>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Help Center
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                FAQs
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h6 className="font-semibold mb-4">CONTACT</h6>
          <ul>
            <li className="mb-2">Adisadel Park, Cape Coast, Ghana</li>
            <li className="mb-2">+233 504277500</li>
          </ul>

          <div className="flex flex-col md:justify-start ">
            {/* Replace # with actual social media links */}
            <h3 className="font-semibold text-lg mt-4">Follow Us On</h3>
            <div className="flex justify-center md:justify-start gap-4 mt-2">
              <div className="relative group ">
                <a href="https://www.instagram.com/jnelp_cosmetic_solutions/?igsh=MXJ0Nm1vcnVyOWcyeQ%3D%3D#" aria-label="Instagram" className="text-2xl text-gray-700 hover:text-pink-500 "><FaInstagramSquare /></a>
                <span className="absolute left-1/2 -translate-x-1/2 bottom-8 bg-gray-200 text-black text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">Instagram</span>
              </div>
              <div className="relative group">
                <a href="https://www.facebook.com/share/14wVBKAjdr/ " aria-label="Facebook" className="text-2xl text-gray-700 hover:text-blue-600"><FaFacebook /></a>
                <span className="absolute left-1/2 -translate-x-1/2 bottom-8 bg-gray-200 text-black text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">Facebook</span>
              </div>
              <div className="relative group">
                <a href="mailto:jnelpinnovations@gmail.com " aria-label="Email" className="text-2xl text-gray-700 hover:text-blue-600"><TfiEmail /></a>
                <span className="absolute left-1/2 -translate-x-1/2 bottom-8 bg-gray-200 text-black text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">Email</span>
              </div>

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

