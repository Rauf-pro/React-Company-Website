import React from "react";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";

const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
    </>
  );
};

export default App;
