import React, { useState } from 'react';
import { Menu, EllipsisVertical, X, ShoppingBag, Instagram, Facebook } from 'lucide-react';
import logo from "../assets/images/logo.webp";
import social from "../assets/images/social.webp"
import { Link } from 'react-router-dom';



const handleNavClick = () => {
  // Scroll to top when any nav link is clicked
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSideModalOpen, setIsSideModalOpen] = useState(false);

  return (
    
    <div className="w-full fixed top-0 left-0 z-50">
      {/* Top banner */}
      <div className="bg-[#019A28] text-white px-4 py-1.5 text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="hidden sm:block font-serif font-bold hover:opacity-80 transition-opacity">
            Jnelp
          </h1>
          <a
            href="mailto:jnelpinnovations@gmail.com"
            className="mx-auto sm:mx-0 hover:underline font-serif font-bold"
          >
            jnelpinnovations@gmail.com
          </a>
          <p className="hidden sm:block text-xs hover:opacity-80 transition-opacity font-serif font-bold">
            Join our dynamic and growing team!
          </p>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Logo Container */}
            <div className="flex-shrink-0">
              <div className="w-16 h-16 sm:w-20 sm:h-20">
                <img
                  src={logo}
                  alt="Jnelp Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 text-sm">
              <Link to="/" className="text-gray-700 hover:text-[#019A28] hover:underline transition-colors font-medium" onClick={handleNavClick}>
                HOME
              </Link>
              <Link to="/aboutinnovator" className="text-gray-700 hover:text-[#019A28] hover:underline transition-colors font-medium" onClick={handleNavClick}>
                ABOUT US
              </Link>
              <Link to="/impact" className="text-gray-700 hover:text-[#019A28] hover:underline transition-colors font-medium" onClick={handleNavClick}>
                IMPACT
              </Link>
              <Link to="/products" className="text-gray-700 hover:text-[#019A28] hover:underline transition-colors font-medium" onClick={handleNavClick}>
                OUR STORE
              </Link>
              <Link to="/testimonials" className="text-gray-700 hover:text-[#019A28] hover:underline transition-colors font-medium" onClick={handleNavClick}>
                TESTIMONIALS
              </Link>
              <Link to="/partner-with-us" className="text-gray-700 hover:text-[#019A28] hover:underline transition-colors font-medium" onClick={handleNavClick}>
                JOIN US
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-[#019A28] hover:underline transition-colors font-medium"  onClick={handleNavClick}>
                CONTACT US
              </Link>
              
            </nav>

            <div className="flex items-center">

              <button
                onClick={() => setIsSideModalOpen(true)}
                className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Open menu"
              >
                <EllipsisVertical className="w-5 h-8" />
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-2 py-2 border-t border-gray-100">
              <nav className="flex flex-col space-y-1">
                <Link to="/" className="px-2 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors" onClick={handleNavClick}>
                  HOME
                </Link>
                <Link to="/aboutinnovator" className="px-2 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors" onClick={handleNavClick}>
                  ABOUT US
                </Link>
                <Link to="/impact" className="px-2 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors" onClick={handleNavClick}>
                  IMPACT
                </Link>
                <Link to="/products" className="px-2 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors" onClick={handleNavClick}>
                  OUR STORE
                </Link>
                <Link to="/partner-with-us" className="text-gray-700 hover:text-[#019A28] hover:underline transition-colors font-medium" onClick={handleNavClick}>
                JOIN US
                </Link>
                <Link to="/contact" className="px-2 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors" onClick={handleNavClick}>
                  CONTACT US
                </Link>
                <Link to="/testimonials" className="px-2 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors" onClick={handleNavClick}>
                  TESTIMONIALS
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Side Modal */}
      <div
        className={`fixed inset-0  bg-opacity-50 transition-opacity z-50 ${
          isSideModalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsSideModalOpen(false)}
      >
        <div
          className={`fixed right-0 top-0 h-full w-[400px] bg-white transform transition-transform duration-300 ease-in-out ${
            isSideModalOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={e => e.stopPropagation()}
        >
          <div className="p-8">
     
            <button
              onClick={() => setIsSideModalOpen(false)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors mb-4"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Featured Image */}
            <div className="mb-8 mt-6 flex items-center">
              <img
                src={social}
                alt="Featured Product"
                className="w-50 h-50 mx-auto"
              />
            </div>

            {/* Description */}
            <div className="text-center mb-12">
              <p className="font-serif text-lg italic mb-6">
                Stay natural with our authentic natural soap for bath and body care.
              </p>

              {/* Social Links */}
              <div className="flex justify-center space-x-4">
                <a href="https://www.instagram.com/jnelp_cosmetic_solutions?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:border-[#019A28] transition-colors">
                  <Instagram />
                </a>
                <a href="https://www.facebook.com/share/14wVBKAjdr/ " className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:border-[#019A28] transition-colors">
                  <Facebook />
                </a>
              </div>
            </div>

            {/* Online Store Links */}
            <div className="text-center">
              <h2 className="text-xl font-medium mb-6">ONLINE STORE</h2>
              <nav className="flex flex-col space-y-4 font-serif">
                <a href="/services" className="hover:text-[#019A28] transition-colors">
                  Cocoa Black Soap
                </a>
                <a href="/services" className="hover:text-[#019A28] transition-colors">
                  Shower Gels
                </a>
                <a href="/services" className="hover:text-[#019A28] transition-colors">
                  Body Wash
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;