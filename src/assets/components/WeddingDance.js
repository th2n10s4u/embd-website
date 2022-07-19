import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import TemplateCard from "./TemplateCard";
import TemplateTextCard from "./TemplateTextCard";
import LatinFeet from "../images/Latin-feet-image.png";

export default function SocialDance() {
  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TemplateCard
          img={LatinFeet}
          buttonText="Learn More"
          CardContentHeaderFirstLine="Wedding Dance"
          CardContentBodySentenceOne="Beginning with a consultation, from song selection to choreography, whether you want the full Dirty Dancing or an elegant Gangnam Style, Evelyn Meinz herself will help you create this single, perfect moment: because the last thing you should have to worry about on your special day is looking good on the dance floor. Learning to dance together for the wedding creates a needed fun break in the wedding planning. A time for you to reconnect with your partner and most importantly-enjoy each other and have fun! Learning to dance together is a skill that will last- way after the cake is gone!"
          CardContentBodySentenceTwo="Beyond the all-important first dance, the studio can also lay the groundwork for fathers & daughters, mothers & sons, or even entire groups (Hello, wedding flash mob!)."
          CardContentBodySentenceThree="Here’s the point: it’s your perfect day. Whatever you want? We’ll ensure it happens."
        />
      </Box>

      <TemplateTextCard
        TextCardHeader="Pricing & Packaging"
        ListText={[
          "Amount is the same for an individual or a couple",
          "Current prices are for the Santa Rosa location.",
          "Additional charges may apply for drive time and floor rates at other studios. ",
        ]}
      />

      <TemplateTextCard
        ListText={[
          "Introduction Consultation: $35",
          "45 Minute Private Lesson: $123",
          "5 Pack of Lessons: $500",
          "10 Pack of Lessons: $1000",
        ]}
      />
    </React.Fragment>
  );
}
