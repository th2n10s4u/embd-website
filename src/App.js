import React, { useEffect } from "react";
import { ThemeProvider } from "@mui/material";
import Navbar from "./assets/components/MainComponents/Navbar";
import Footer from "./assets/components/MainComponents/Footer.js";
import MainCarousel from "./assets/components/MainComponents/Carousel";
import "./App.css";
import Testimonials from "./assets/components/MainComponents/Testimonials";
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

            <Route
              path="/Teacher-Profiles"
              exact
              element={<TeacherProfiles />}
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
