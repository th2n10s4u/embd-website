import React from "react";
import MainCarousel from "../MainComponents/Carousel";
import Main from "../MainComponents/Main";
import FormCard from "../MainComponents/FormCard";
import Testimonials from "../MainComponents/Testimonials";
import Specialties from "../MainComponents/Specialties";
import Footer from "../MainComponents/Footer";
import Link from "react-router-dom";

export default function Home() {
  return (
    <React.Fragment>
      <div className="container">
        <Main />
        <FormCard />
        <Specialties />
      </div>
    </React.Fragment>
  );
}
