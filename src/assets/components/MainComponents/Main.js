import React from "react";
import { Typography, Box } from "@mui/material";
import LatinFeet from "../../images/Latin-feet-image.png";
import TemplateCard from "../TemplateComponents/TemplateCard";

export default function Main() {
  return (
    <main>
      <div>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <TemplateCard
            img={LatinFeet}
            buttonText="Learn More"
            CardContentHeaderFirstLine={
              <React.Fragment>
                Welcome to
                <Typography
                  sx={{
                    fontFamily: "Playfair Display",
                    fontWeight: "400",
                    fontSize: "40px",
                  }}
                  align="left"
                >
                  Evelyn Meinz Ballroom Dance
                </Typography>
              </React.Fragment>
            }
            CardContentBodySentenceOne="Our team of highly trained independent dance instructors are here to help you achieve your dancing goals while smiling and avoiding your partner's toes."
            CardContentBodySentenceTwo="We strive to deliver quality technique and style in a fun easy to learn fashion.This takes lots of practice and is why we have professionals on our team who have been teaching for years."
            CardContentBodySentenceThree="We have many years of teaching experience in the social, performance and competitive dance world and love to teach even the most unruly two left feet."
          />
        </Box>
      </div>
    </main>
  );
}
