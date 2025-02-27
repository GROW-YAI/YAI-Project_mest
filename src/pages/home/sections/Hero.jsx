import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import hero from "../../../assets/images/hero3.jpg"
import hero2 from "../../../assets/images/hero 1.jpeg"
import hero3 from "../../../assets/images/hero 11.png"
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    title: "For your skin's unique needs",
    category: "BODY WASH",
    image: hero,
    description: "Refresh and reveal radiant skin, naturally.",
    buttonText: "FIND YOUR MATCH"
  },
  {
    id: 2,
    title: "Gentle care for sensitive skin",
    category: "MOISTURIZER",
    image: hero2,
    description: "Calm, hydrate, and protect your delicate glow.",
    buttonText: "DISCOVER MORE"
  },
  {
    id: 3,
    title: "Nourish your natural beauty",
    category: "SKIN CARE",
    image: hero3,
    description: "Elevate your routine with pure, nurturing care.",
    buttonText: "EXPLORE NOW"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="pt-20">
      <div className="relative w-full h-screen flex flex-col lg:flex-row">

        <div className="relative w-full lg:w-[60%] h-[50vh] lg:h-full bg-sky-100 overflow-hidden">
          <div
            className="absolute inset-0 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className="absolute top-0 left-0 w-full h-full"
                style={{ transform: `translateX(${index * 100}%)` }}
              >
                <img
                  src={slide.image}
                  alt="Product showcase"
                  className="w-full h-full object-cover "
                />
              </div>
            ))}
          </div>
          {/* Curved border overlay */}
          <div
            className="absolute top-0 right-0 w-[15%] h-full bg-white hidden lg:block"
            style={{
              borderTopLeftRadius: "100%",
              borderBottomLeftRadius: "100%",
            }}
          />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-[40%] h-[50vh] lg:h-full bg-white flex flex-col justify-center px-6 lg:px-16 text-center lg:text-left">
          <div className="relative">
            <p className="text-sm tracking-wider text-gray-600 mb-4">
              {slides[currentSlide].category}
            </p>

            <h1 className="text-[2rem] leading-tight block italic text-navy-900 mb-8 text-[#019A28]">
              {slides[currentSlide].description}
            </h1>

            <Link to="/services">
              <button className="bg-[#019A28] text-white px-6 py-3 lg:px-8 lg:py-3 rounded-none hover:bg-navy-800 transition-colors">
                {slides[currentSlide].buttonText}
              </button>
            </Link>

            {/* Navigation dots */}
            <div className="flex items-center justify-center lg:justify-start gap-6 mt-8 lg:mt-16">
              <button
                onClick={prevSlide}
                className="text-navy-900 hover:text-navy-800 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="flex gap-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${currentSlide === index
                        ? "bg-navy-900 w-4"
                        : "bg-navy-900/40"
                      }`}
                  />
                ))}
              </div>


              <button
                onClick={nextSlide}
                className="text-navy-900 hover:text-navy-800 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

