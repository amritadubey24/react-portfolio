import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Works from "./components/Works";
import Contact from "./components/ContactForm";
import Services from "./components/Services";
import AboutMe from "./components/AboutMe";


function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/services" element={<Services />} />
        <Route path="/works" element={<Works />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>

      <Footer />
    </>
  );
}

export default App;
