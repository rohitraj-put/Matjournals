import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousel";
import Journals from "./Components/Journals";
import About from "./Components/About";
import Indexing from "./Components/Indexing";
import Testimonials from "./Components/Testimonials";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import Aboutus from "./Components/Aboutus";

function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Journals />
      <About />
      {/* <Aboutus /> */}
      <Indexing />
      <Testimonials />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
