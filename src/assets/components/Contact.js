import React from "react";
import { Card, CardContent, Paper, Typography } from "@mui/material";
import ContactForm from "../components/ContactForm";

export default function Contact(props) {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        aligncontent: "center",
      }}
    >
      <Card
        elevation={0}
        sx={{
          maxWidth: 650,
          maxHeight: 550,
          flexBasis: "50%",
          alignSelf: "center",
          marginBottom: "25px",
          //(MAKE ALL OF THE BELOW STYLING CONDITIONAL WITH PROPS.BACKGROUND)
          background: props.background ? "#DEE2E9" : null,
          boxShadow: props.shadow ? "9px 9px 6px grey" : null,
          borderRadius: props.radius ? "12px" : null,
        }}
      >
        <Typography>We look forward to hearing from you soon!</Typography>
        <Typography>Phone: 123456689</Typography>
        <Typography>Email embd@embd.com</Typography>
        <ContactForm />
      </Card>
      <Card>
        <Typography>Address: 123 street, city, 95404</Typography>
      </Card>
    </Paper>
  );
}
