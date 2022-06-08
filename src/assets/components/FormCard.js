import React from "react";
import {
  Card,
  Divider,
  CardActions,
  CardContent,
  CardMedia,
  Box,
  Button,
  Typography,
  Paper,
} from "@mui/material";
import Main from "./Main";
import TemplateCard from "./TemplateCard";
import WoodsDance from "../images/Couple-woods-image.png";
import ContactForm from "./ContactForm";

export default function FormCard() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TemplateCard
          img={WoodsDance}
          CardContentHeaderFirstLine={
            <React.Fragment>
              Schedule Your First
              <Typography
                sx={{
                  fontFamily: "Playfair Display",
                  fontWeight: "400",
                  fontSize: "32px",
                  lineHeight: "20px",
                  marginTop: "20px",
                  marginBottom: "20px",
                  textAlign: "left",
                  //   minWidth: "591px",
                }}
                // textAlign="justfy"
              >
                Lesson Today! (center over form)
              </Typography>
              {<ContactForm />}
            </React.Fragment>
          }
          reverse={true}
        />
      </Box>
    </div>
  );
}
