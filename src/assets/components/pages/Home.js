import React from "react";
import MainCarousel from "../MainComponents/Carousel";
import Main from "../MainComponents/Main";
import FormCard from "../MainComponents/FormCard";
import Testimonials from "../MainComponents/Testimonials";
import Specialties from "../MainComponents/Specialties";
import Footer from "../MainComponents/Footer";

export default function Home() {
  return (
    <React.Fragment>
      <div className="container">
        <Main />
        <FormCard />
        <Testimonials />
        <Specialties />
        <Footer />
      </div>
    </React.Fragment>
  );
}
