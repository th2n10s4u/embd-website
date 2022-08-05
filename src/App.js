import React, { useEffect } from "react";
import { createTheme, colors, ThemeProvider } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import Navbar from "./assets/components/MainComponents/Navbar";
import Main from "./assets/components/MainComponents/Main.js";
import Footer from "./assets/components/MainComponents/Footer.js";
import { MainCarousel } from "./assets/components/MainComponents/Carousel";
import TemplateCard from "./assets/components/TemplateComponents/TemplateCard";
import "./App.css";
import FormCard from "./assets/components/AltComponents/FormCard";
import Testimonials from "./assets/components/AltComponents/Testimonials";
import Specialties from "./assets/components/MainComponents/Specialties";
import Spacer from "./assets/components/Spacer";
import SocialDance from "./assets/components/servicepages/SocialDance.js"; //error compiling from programpages folder
import PrivateLessons from "./assets/components/servicepages/PrivateLessons";
import WeddingDance from "./assets/components/servicepages/WeddingDance";
import TeacherProfiles from "./assets/components/AboutPages/TeacherProfiles";
import BenefitsOfDance from "./assets/components/AboutPages/BenefitsOfDance";
import StylesOfDance from "./assets/components/AboutPages/StylesOfDance";
import StudioPolicy from "./assets/components/AboutPages/StudioPolicy";
import Contact from "./assets/components/MainComponents/Contact";
import theme from "./styles/Styles";

function App() {
  // const theme = createTheme({
  //   palette: {
  //     primary: {
  //       main: blueGrey[50],
  //     },
  //     secondary: {
  //       main: "#bfa617",
  //     },
  //   },
  // });

  useEffect(() => {
    document.title = "Evelyn Meinz Ballroom Dance - Home";
  }, []); //the empty square brackets make it run the first time when the page loads.

  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <Navbar color="primary" />
        <MainCarousel />
        <Contact />
        <Main />
        <StylesOfDance />
        <BenefitsOfDance />
        <Testimonials />
        <Specialties />
        <WeddingDance />
        <PrivateLessons />
        <SocialDance />
        <TeacherProfiles />
        <StudioPolicy />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
