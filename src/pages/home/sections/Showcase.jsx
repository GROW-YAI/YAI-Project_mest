import { div } from "framer-motion/client";
import React from "react";
import Navbar from "../../../components/Navbar";

const Showcase = () => {
  return (
    <div>
      <Navbar/>
    <div className="p-6 flex justify-center items-center align-middle h-[100vh] ">
      <h4 className="text-4xl font-bold">Product / Service Showcase</h4>
    </div>
    </div>
  );
};

export default Showcase;
