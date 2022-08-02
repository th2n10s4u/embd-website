import React, { useEffect } from "react";
import { createTheme, colors, ThemeProvider } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
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
import SocialDance from "./assets/components/programpages/SocialDance.js"; //error compiling from programpages folder
import PrivateLessons from "./assets/components/PrivateLessons";
import WeddingDance from "./assets/components/WeddingDance";
import TeacherProfiles from "./assets/components/TeacherProfiles";
import BenefitsOfDance from "./assets/components/BenefitsOfDance";
import StylesOfDance from "./assets/components/StylesOfDance";
import StudioPolicy from "./assets/components/StudioPolicy";
import Contact from "./assets/components/Contact";
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
