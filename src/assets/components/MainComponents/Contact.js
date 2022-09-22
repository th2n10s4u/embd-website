import React from "react";
import { Card, Box, CardContent, Paper, Typography } from "@mui/material";
import ContactForm from "../TemplateComponents/ContactForm";

export default function Contact() {
  return (
    <React.Fragment>
      <Paper
        id="contact"
        elevation={0}
        sx={{
          minHeight: 700,
          maxWidth: "100%",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignContent: "space-evenly",
          marginTop: 3,
        }}
      >
        <Card
          elevation={0}
          sx={{
            maxWidth: "350px",
            maxHeight: 550,
            alignSelf: "center",
            marginBottom: "25px",
            background: "#DEE2E9",
            boxShadow: "9px 9px 6px grey",
            borderRadius: "12px",
          }}
        >
          <CardContent>
            <Typography
              sx={{
                fontFamily: "Playfair Display",
                fontWeight: "600",
                fontSize: "28px",
                lineHeight: "30px",
                textAlign: "center",
              }}
            >
              We look forward to hearing from you soon!
            </Typography>
            <Typography
              sx={{
                fontFamily: "Playfair Display",
                fontWeight: "400",
                fontSize: "24px",
                lineHeight: "40px",
                textAlign: "center",
              }}
            >
              Phone: 123456689
            </Typography>
            <Typography
              sx={{
                fontFamily: "Playfair Display",
                fontWeight: "400",
                fontSize: "24px",
                lineHeight: "40px",
                textAlign: "center",
              }}
            >
              Email embd@embd.com
            </Typography>
            <ContactForm />
          </CardContent>
        </Card>
        {/* </Container> */}
        {/* <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignContent: "center",
            width: "650px",
            Height: "550px",
          }}
        > */}
        <Card
          elevation={0}
          sx={{
            maxWidth: 650,
            maxHeight: 550,
            alignSelf: "center",
            marginBottom: "25px",
            background: "#DEE2E9",
            boxShadow: "9px 9px 6px grey",
            borderRadius: "12px",
          }}
        >
          <CardContent>
            <Typography
              sx={{
                fontFamily: "Playfair Display",
                fontWeight: "400",
                fontSize: "28px",
                lineHeight: "30px",
                textAlign: "center",
              }}
            >
              Address:
            </Typography>
            <Typography
              sx={{
                fontFamily: "Playfair Display",
                fontWeight: "400",
                fontSize: "28px",
                lineHeight: "20px",
                textAlign: "center",
              }}
            >
              123 street, city, 95404
            </Typography>
            <Box
              ClassName="MapBox"
              sx={{
                height: "400px",
                width: "500px",
              }}
            ></Box>
          </CardContent>
        </Card>
        {/* </Container> */}
      </Paper>
    </React.Fragment>
  );
}
