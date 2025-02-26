import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/home";
import AboutInnovator from "./pages/home/sections/AboutInnovator";
import AboutProducts from "./pages/home/sections/AboutProduct";
import Showcase from "./pages/home/sections/Showcase";
import Contact from "./pages/home/sections/Contact";
import Testimonials from "./pages/home/sections/Testimonials";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [{ index: true, element: <Home /> }],
    },
    {
      path: "/aboutinnovator",
      element: <AboutInnovator/>
    },
    {
      path: "/products",
      element: <AboutProducts/>
    },
    {
      path: "/services",
      element: <Showcase/>
    },
    {
      path: "/contact",
      element: <Contact/>
    },
    {
      path: "/testimonials",
      element: <Testimonials/>
    }

  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
