import React from "react";
import {
  Paper,
  Box,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
} from "@mui/material";

export default function TemplateTextCard() {
  return (
    <Paper
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Playfair Display",
          fontWeight: "400",
          fontSize: "32px",
          lineHeight: "20px",
        }}
      >
        Our Current class schedule is as follows:
      </Typography>
      <Typography>
        Wednesday: 6:00pm Beginner County Western 2-Step Wednesday: 6:45 Intro
        to swing Wednesday: 7:30pm Beginner Argentine Tango Thursday: 6:00pm
        Level 1 Ballroom Thursday: 7:30pm Level 1 Salsa Friday: 6:00pm Beginner
        Salsa Friday: 6:45pm Beginner Ballroom
      </Typography>
    </Paper>
  );
}
