import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import land2 from "../../../assets/images/land2.jpg"
import land3 from "../../../assets/images/land3.jpg"
import land4 from "../../../assets/images/land4.jpg"
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    title: "Made by Africans, for Africans and beyond",
    category: "SKIN CARE",
    image: land2,
    description: "Refresh and reveal radiant skin, naturally.",
    buttonText: "SHOP NOW"
  },
  {
    id: 2,
    title: "Beyond skincare : PIN it!",
    category: "MOISTURIZER",
    image: land3,
    description: "Calm, hydrate, and protect your delicate glow.",
    buttonText: "OUR VALUES"
  },
  {
    id: 3,
    title: "Nourish your natural beauty",
    category: "BODY WASH",
    image: land4,
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

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); //5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pt-20 md:pt-20 lg:pt-32">
      <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen overflow-hidden">
        {/* Background Images Slider */}
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
                className="w-full h-full object-cover"
              />
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
          ))}
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6 lg:px-16">
            <div className="max-w-lg">
              {/* Category */}
              <p className="text-sm tracking-widest text-white/80 mb-4 uppercase">
                {slides[currentSlide].category}
              </p>

              {/* Main Title */}
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                {slides[currentSlide].title}
              </h1>

              {/* Description */}
              <p className="text-xl text-white/90 italic mb-8 leading-relaxed">
                {slides[currentSlide].description}
              </p>

              {/* CTA Button */}
              <Link to="/products">
                <button className="bg-green-800 hover:bg-[#017a20] text-white px-8 py-4 rounded-none transition-all duration-300 font-semibold tracking-wider text-lg">
                  {slides[currentSlide].buttonText}
                </button>
              </Link>

              {/* Navigation Controls */}
              <div className="flex items-center gap-6 mt-12">
                {/* Previous Button */}
                <button
                  onClick={prevSlide}
                  className="group flex items-center justify-center w-12 h-12 border-2 border-white/60 hover:border-white transition-all duration-300"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-6 h-6 text-white/60 group-hover:text-white transition-colors" />
                </button>

                {/* Dots Indicator */}
                <div className="flex gap-3">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentSlide === index
                          ? "bg-[#019A28] scale-125"
                          : "bg-white/60 hover:bg-white"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Next Button */}
                <button
                  onClick={nextSlide}
                  className="group flex items-center justify-center w-12 h-12 border-2 border-white/60 hover:border-white transition-all duration-300"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-6 h-6 text-white/60 group-hover:text-white transition-colors" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Curved white overlay on the right side */}
        {/* <div
          className="absolute top-0 right-0 w-[25%] h-full bg-white hidden lg:block"
          style={{
            borderTopLeftRadius: "50%",
            borderBottomLeftRadius: "50%",
          }}
        /> */}
      </div>
    </div>
  );
};

export default Hero;




