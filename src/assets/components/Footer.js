import React from "react";
import {
  Paper,
  Card,
  Image,
  Box,
  Container,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import embdLogo from "../images/embd-logo-black.png";
import ContactForm from "./ContactForm";
import FacebookLogo from "../images/SocialLogos/FacebookLogo.svg";
import YelpLogo from "../images/SocialLogos/YelpLogo.svg";
import MeetupLogo from "../images/SocialLogos/MeetupLogo.svg";

export default function Footer() {
  return (
    <Grid Container>
      <Box
        elevation={0}
        sx={{
          width: "100%",
          height: "100px",
          background: "#B5BECB",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <React.Fragment>
          <Paper
            elevation={0}
            sx={{
              display: "flex",
              flexDirection: "center",
              justifyContent: "center",
              width: "100%",
              height: "100px",
              background: "#B5BECB",
            }}
          >
            <img src={embdLogo} alt="dance logo" height="100px" />
          </Paper>
          <Box></Box>
          {/* <Paper
            sx={{
              flexGrow: 1,
              background: "grey",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography>Book Today With Form and button underneath</Typography>
            <Typography>About Services Contact us Phone number</Typography>
            <Typography>Social Media Yelp Facebook Meetup</Typography>
          </Paper> */}
        </React.Fragment>
      </Box>
      <Paper
        sx={{
          background: "grey",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          height: "500px",
          background: "#B5BECB",
        }}
      >
        <Typography
          sx={{
            display: "flex",
            flexDirection: "column",
            fontFamily: "Poppins",
            fontWeight: "400",
            fontSize: "50px",
            lineHeight: "20px",
            marginTop: "20px",
            marginBottom: "20px",
            textAlign: "center",
            alignItems: "center",
          }}
          // textAlign="center"
        >
          Book Now!
          {<ContactForm />}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              display: "flex",
              flexDirection: "column",
              fontFamily: "Poppins",
              fontWeight: "400",
              fontSize: "50px",
              lineHeight: "20px",
              marginTop: "20px",
              marginBottom: "20px",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            About
          </Typography>
          <Typography
            sx={{
              display: "flex",
              flexDirection: "column",
              fontFamily: "Poppins",
              fontWeight: "400",
              fontSize: "50px",
              lineHeight: "20px",
              marginTop: "20px",
              marginBottom: "20px",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            Services
          </Typography>
          <Typography
            sx={{
              display: "flex",
              flexDirection: "column",
              fontFamily: "Poppins",
              fontWeight: "400",
              fontSize: "50px",
              lineHeight: "20px",
              marginTop: "20px",
              marginBottom: "20px",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            Contact Us
          </Typography>
          <Typography
            sx={{
              display: "flex",
              flexDirection: "column",
              fontFamily: "Poppins",
              fontWeight: "400",
              fontSize: "50px",
              lineHeight: "20px",
              marginTop: "20px",
              marginBottom: "20px",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            Call Us Today!
          </Typography>
          <Typography
            sx={{
              display: "flex",
              flexDirection: "column",
              fontFamily: "Poppins",
              fontWeight: "400",
              fontSize: "50px",
              lineHeight: "20px",
              marginTop: "20px",
              marginBottom: "20px",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            123-456-7890
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              display: "flex",
              flexDirection: "column",
              fontFamily: "Poppins",
              fontWeight: "400",
              fontSize: "50px",
              lineHeight: "20px",
              marginTop: "20px",
              marginBottom: "20px",
              textAlign: "center",
              alignItems: "center",
            }}
            textAlign="center"
          >
            Social Media
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
            margin="10px"
          >
            <img src={YelpLogo} alt="yelp icon" height="100px" />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
            margin="10px"
          >
            <img src={FacebookLogo} alt="facebook icon" height="50px" />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
            margin="10px"
          >
            <img src={MeetupLogo} alt="meetup icon" height="70px" />
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
}

//TODO:
// Get the logo centered on on the top of the paper
// Add the Book today header and form
// About Services Contact info
// Social links

// Look into grids to see if it is a layout option for the footer

// Add a footer appbar with legal trademark copyright info.
