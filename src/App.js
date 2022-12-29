import React from "react";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Service from "./components/Service/Service";

const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Service/>
    </>
  );
};

export default App;
