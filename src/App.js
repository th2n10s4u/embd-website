import React from "react";
import Navbar from "./assets/components/Navbar";
import Main from "./assets/components/Main.js";
import Footer from "./assets/components/Footer.js";
import { MainCarousel } from "./assets/components/Carousel";
import TemplateCard from "./assets/components/TemplateCard";
import "./App.css";
import FormCard from "./assets/components/FormCard";
import Testimonials from "./assets/components/Testimonials";

function App() {
  return (
    <div className="container">
      <Navbar />
      <MainCarousel />
      <Main />
      <FormCard />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
