// import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import hero from "../../../assets/images/hero3.webp"
// import hero2 from "../../../assets/images/hero 1.webp"
// import hero3 from "../../../assets/images/hero 10.webp"
// import { Link } from 'react-router-dom';

// const slides = [
//   {
//     id: 1,
//     title: "For your skin's unique needs",
//     category: "BODY WASH",
//     image: hero,
//     description: "Refresh and reveal radiant skin, naturally.",
//     buttonText: "FIND YOUR MATCH"
//   },
//   {
//     id: 2,
//     title: "Gentle care for sensitive skin",
//     category: "MOISTURIZER",
//     image: hero2,
//     description: "Calm, hydrate, and protect your delicate glow.",
//     buttonText: "DISCOVER MORE"
//   },
//   {
//     id: 3,
//     title: "Nourish your natural beauty",
//     category: "SKIN CARE",
//     image: hero3,
//     description: "Elevate your routine with pure, nurturing care.",
//     buttonText: "EXPLORE NOW"
//   }
// ];

// const Hero = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//   };

//   return (
//     <div className="pt-20">
//       <div className="relative w-full h-screen flex flex-col lg:flex-row">

//         <div className="relative w-full lg:w-[60%] h-[50vh] lg:h-full bg-sky-100 overflow-hidden">
//           <div
//             className="absolute inset-0 transition-transform duration-500 ease-in-out"
//             style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//           >
//             {slides.map((slide, index) => (
//               <div
//                 key={slide.id}
//                 className="absolute top-0 left-0 w-full h-full"
//                 style={{ transform: `translateX(${index * 100}%)` }}
//               >
//                 <img
//                   src={slide.image}
//                   alt="Product showcase"
//                   className="w-full h-full object-cover "
//                 />
//               </div>
//             ))}
//           </div>
//           {/* Curved border overlay */}
//           <div
//             className="absolute top-0 right-0 w-[15%] h-full bg-white hidden lg:block"
//             style={{
//               borderTopLeftRadius: "100%",
//               borderBottomLeftRadius: "100%",
//             }}
//           />
//         </div>

//         {/* Content Section */}
//         <div className="w-full lg:w-[40%] h-[50vh] lg:h-full bg-white flex flex-col justify-center px-6 lg:px-16 text-center lg:text-left">
//           <div className="relative">
//             <p className="text-sm tracking-wider text-gray-600 mb-4">
//               {slides[currentSlide].category}
//             </p>

//             <h1 className="text-[2rem] leading-tight block italic text-navy-900 mb-8 text-[#019A28]">
//               {slides[currentSlide].description}
//             </h1>

//             <Link to="/products">
//               <button className="bg-[#019A28] text-white px-6 py-3 lg:px-8 lg:py-3 rounded-none hover:bg-navy-800 transition-colors">
//                 {slides[currentSlide].buttonText}
//               </button>
//             </Link>

//             {/* Navigation dots */}
//             <div className="flex items-center justify-center lg:justify-start gap-6 mt-8 lg:mt-16">
//               <button
//                 onClick={prevSlide}
//                 className="text-navy-900 hover:text-navy-800 transition-colors"
//               >
//                 <ChevronLeft className="w-6 h-6" />
//               </button>

//               <div className="flex gap-3">
//                 {slides.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => goToSlide(index)}
//                     className={`w-2 h-2 rounded-full transition-all ${currentSlide === index
//                         ? "bg-navy-900 w-4"
//                         : "bg-navy-900/40"
//                       }`}
//                   />
//                 ))}
//               </div>


//               <button
//                 onClick={nextSlide}
//                 className="text-navy-900 hover:text-navy-800 transition-colors"
//               >
//                 <ChevronRight className="w-6 h-6" />
//               </button>

//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;



import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import land2 from "../../../assets/images/land2.jpg"
// import hero2 from "../../../assets/images/hero 1.webp"
import land3 from "../../../assets/images/land3.jpg"
import land4 from "../../../assets/images/land4.jpg"
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    title: "For your skin's unique needs",
    category: "BODY WASH",
    image: land2,
    description: "Refresh and reveal radiant skin, naturally.",
    buttonText: "FIND YOUR MATCH"
  },
  {
    id: 2,
    title: "Gentle care for sensitive skin",
    category: "MOISTURIZER",
    image: land3,
    // image: hero2,
    description: "Calm, hydrate, and protect your delicate glow.",
    buttonText: "DISCOVER MORE"
  },
  {
    id: 3,
    title: "Nourish your natural beauty",
    category: "SKIN CARE",
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
                <button className="bg-[#019A28] hover:bg-[#017a20] text-white px-8 py-4 rounded-none transition-all duration-300 font-semibold tracking-wider text-lg">
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




