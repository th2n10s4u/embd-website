import React from "react";
import { Paper, Card, Box, CardContent, Typography } from "@mui/material";
import embdLogo from "../images/embd-logo-black.png";
export default function Footer() {
  return (
    <Box
      elevation={0}
      sx={{
        width: "100%",
        height: "800px",
        background: "#B5BECB",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height: "600px",
          background: "#B5BECB",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            justfiyContent: "center",
            height: "58px",
            width: "338px",
          }}
        />
        <img src={embdLogo} alt="dance logo" />
      </Paper>
    </Box>
  );
}

//TODO:
// Get the logo centered on on the top of the paper
// Add the Book today header and form
// About Services Contact info
// Social links

// Look into grids to see if it is a layout option for the footer

// Add a footer appbar with legal trademark copyright info.
