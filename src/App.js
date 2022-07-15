import React, { useEffect } from "react";
import Navbar from "./assets/components/Navbar";
import Main from "./assets/components/Main.js";
import Footer from "./assets/components/Footer.js";
import { MainCarousel } from "./assets/components/Carousel";
import TemplateCard from "./assets/components/TemplateCard";
import "./App.css";
import FormCard from "./assets/components/FormCard";
import Testimonials from "./assets/components/Testimonials";
import Specialties from "./assets/components/Specialties";
import Spacer from "./assets/components/Spacer";
import SocialDance from "./assets/components/SocialDance.js";

function App() {
  useEffect(() => {
    document.title = "Evelyn Meinz Ballroom Dance - Home";
  }, []); //the empty square brackets make it run the first time when the page loads.

  return (
    <div className="container">
      <Navbar />
      <MainCarousel />
      <Main />
      <Specialties />
      <SocialDance />
      <Footer />
    </div>
  );
}

export default App;
