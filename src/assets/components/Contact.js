import React from "react";
import { Card, Box, CardContent, Paper, Typography } from "@mui/material";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <React.Fragment>
      <Paper
        elevation={0}
        sx={{
          minHeight: 700,
          minWidth: "600px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          aligncontent: "space-evenly",
        }}
      >
        <Card
          elevation={0}
          sx={{
            maxWidth: 650,
            maxHeight: 550,
            alignSelf: "center",
            marginBottom: "25px",
            //(MAKE ALL OF THE BELOW STYLING CONDITIONAL WITH PROPS.BACKGROUND)
            background: "#DEE2E9",
            boxShadow: "9px 9px 6px grey",
            borderRadius: "12px",
          }}
        >
          <CardContent>
            <Typography>We look forward to hearing from you soon!</Typography>
            <Typography>Phone: 123456689</Typography>
            <Typography>Email embd@embd.com</Typography>
            <ContactForm />
          </CardContent>
        </Card>
        <Card
          elevation={0}
          sx={{
            maxWidth: 650,
            maxHeight: 550,
            alignSelf: "center",
            marginBottom: "25px",
            //(MAKE ALL OF THE BELOW STYLING CONDITIONAL WITH PROPS.BACKGROUND)
            background: "#DEE2E9",
            boxShadow: "9px 9px 6px grey",
            borderRadius: "12px",
          }}
        >
          <CardContent>
            <Typography>Address: 123 street, city, 95404</Typography>
            <Box
              ClassName="MapBox"
              sx={{
                height: "400px",
                width: "500px",
              }}
            ></Box>
          </CardContent>
        </Card>
      </Paper>
    </React.Fragment>
  );
}
