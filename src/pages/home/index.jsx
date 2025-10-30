import React from "react"; 
import Hero from "./sections/Hero";
import AboutProduct from "./sections/AboutProduct";
import AboutInnovator from "./sections/AboutInnovator";
import Showcase from "./sections/Showcase";
import Contact from "./sections/Contact";
import Testimonials from "./sections/Testimonials";
import JoinUs from "./sections/partnerWithUs";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutInnovator />
      <Showcase />
      <AboutProduct />
      <Testimonials/>
      <JoinUs />
      <Contact />
    </div>
  );
};

export default Home;
