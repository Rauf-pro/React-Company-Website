import React from "react";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Service from "./components/Service/Service";
import Testimonial from "./components/Testimonial/Testimonial";
import Subscription from "./components/Subscription/Subscription";

const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Service/>
      <Testimonial/>
      <Subscription/>
    </>
  );
};

export default App;
