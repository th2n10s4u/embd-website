import React, { useEffect } from "react";
import { createTheme, colors, ThemeProvider } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import Navbar from "./assets/components/MainComponents/Navbar";
import Main from "./assets/components/MainComponents/Main.js";
import Footer from "./assets/components/MainComponents/Footer.js";
import MainCarousel from "./assets/components/MainComponents/Carousel";
import TemplateCard from "./assets/components/TemplateComponents/TemplateCard";
import "./App.css";
import FormCard from "./assets/components/MainComponents/FormCard";
import Testimonials from "./assets/components/MainComponents/Testimonials";
import Specialties from "./assets/components/MainComponents/Specialties";
import Spacer from "./assets/components/Spacer";
import SocialDance from "./assets/components/ServicePages/SocialDance.js";
import PrivateLessons from "./assets/components/ServicePages/PrivateLessons";
import WeddingDance from "./assets/components/ServicePages/WeddingDance";
import TeacherProfiles from "./assets/components/AboutPages/TeacherProfiles";
import BenefitsOfDance from "./assets/components/AboutPages/BenefitsOfDance";
import StylesOfDance from "./assets/components/AboutPages/StylesOfDance";
import StudioPolicy from "./assets/components/AboutPages/StudioPolicy";
import Contact from "./assets/components/MainComponents/Contact";
import theme from "./styles/Styles";
import Home from "./assets/components/pages/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Carousel from "react-material-ui-carousel";
import ContactForm from "./assets/components/TemplateComponents/ContactForm";

function App() {
  useEffect(() => {
    document.title = "Evelyn Meinz Ballroom Dance - Home";
  }, []); //the empty square brackets make it run the first time when the page loads.

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="container">
          <Navbar color="primary" />
          <MainCarousel />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/Home" exact element={<Home />} />

            <Link
              path="/Teacher-Profiles"
              exact
              element={<TeacherProfiles />}
              id="TeacherProfiles"
            />
            <Route
              path="/Benefits-of-Dance"
              exact
              element={<BenefitsOfDance />}
            />
            <Route path="/Styles-of-Dance" exact element={<StylesOfDance />} />
            <Route path="/Studio-Policy" exact element={<StudioPolicy />} />
            <Route path="/Social-Dance" exact element={<SocialDance />} />
            <Route path="/Private-Dance" exact element={<PrivateLessons />} />
            <Route path="/Wedding-Dance" exact element={<WeddingDance />} />
            <Route path="/Testimonials" exact element={<Testimonials />} />
            <Route path="/Contact" exact element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
