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
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          aligncontent: "space-evenly",
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
      </Paper>
    </React.Fragment>
  );
}
