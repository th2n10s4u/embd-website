import React from "react";
import { Typography, Paper, Box } from "@mui/material";
import TemplateCard from "./TemplateCard";

export default function TeacherProfiles() {
  return (
    <Box>
      <Paper
        elevation={0}
        sx={{
          minWidth: "100%", //"1200px", // Play with sizing (100% is too wide)
          minHeight: "447px",
          border: "0",
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          marginBottom: "20px",
          flexDirection: "row", //conditional operator
        }}
      >
        <Typography
          sx={{
            maxWidth: 800,
            fontFamily: "Poppins",
            fontWeight: "400",
            lineHeight: "100%",

            letterSpacing: "2px",
            fontSize: "34px",
            marginTop: "10px",
          }}
          align="center"
        >
          Our team of highly trained independent dance instructors are here to
          help you achieve your dancing goals while smiling to avoiding your
          partner's toes. We strive to deliver quality technique and style in a
          fun easy to learn fashion. This takes lots of practice and is why we
          have professionals on our team who have been teaching for years. We
          have many years of teaching experience in the social, performance, and
          competitive dance world and love to teach even the most unruly two
          left feet.
        </Typography>
      </Paper>
    </Box>
  );
}
