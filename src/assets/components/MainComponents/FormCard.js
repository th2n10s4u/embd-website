import React from "react";
import { Box, Typography } from "@mui/material";
import TemplateCard from "../TemplateComponents/TemplateCard";
import WoodsDance from "../../images/Couple-woods-image.png";
import ContactForm from "../TemplateComponents/ContactForm";

export default function FormCard() {
  return (
    <div>
      <Box
        sx={{
          display: { sm: "none", md: "none", lg: "flex" },
          justifyContent: "center",
        }}
      >
        <TemplateCard
          img={WoodsDance}
          CardContentHeaderFirstLine={
            <React.Fragment>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  maxWidth: "313px",
                  textAlign: "center",
                  justifyContent: "space-around",
                  paddingTop: "40px",
                }}
              >
                Schedule Your First
                <Typography
                  sx={{
                    fontFamily: "Playfair Display",
                    fontWeight: "400",
                    fontSize: "32px",
                    lineHeight: "20px",
                    marginTop: "20px",
                    marginBottom: "20px",
                    textAlign: "center",
                    alignItems: "center",
                  }}
                  textAlign="center"
                >
                  Lesson Today!
                </Typography>
                {<ContactForm />}
              </Box>
            </React.Fragment>
          }
          reverse={false}
        />
      </Box>
    </div>
  );
}
