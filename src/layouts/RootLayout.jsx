import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import ScrollToTop from "../components/scrollToTop";

const RootLayout = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
