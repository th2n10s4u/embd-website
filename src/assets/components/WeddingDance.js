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
        TextCardHeader="One Sweet Day"
        ListText={[
          "Sweet and Simple offers a five-lesson package that will not only teach the basics of dance, but provides the time needed to give you that extra boost of confidence. You will also learn turns and a dip to give your dance your dance some extra romance and style! ",
          "$400K",
        ]}
      />

      <TemplateTextCard
        TextCardHeader="Sweet and Simple."
        ListText={[
          "Sweet and Simple offers a five-lesson package that will not only teach the basics of dance, but provides the time needed to give you that extra boost of confidence. You will also learn turns and a dip to give your dance your dance some extra romance and style!",
          "$1125k",
        ]}
      />

      <TemplateTextCard
        TextCardHeader="Sweet and Splendid."
        ListText={[
          "It’s not about dancing. It’s about blowing the crowd away. Showstopping choreography. Moves that belong on television. After 15 lessons, this isn’t a first dance between man and wife - this is a declaration to the world: when the two of you are together, absolutely nothing is impossible.",
          "Pricing Varies",
        ]}
      />

      <TemplateTextCard
        TextCardHeader="Sweet and Spectacular."
        ListText={[
          "Of course, sometimes everyone wants to get in on the good time. When the entire wedding party wants to get up and boogie, Sweet and Spectacular means the sky is the limit. If you have an idea, no matter how crazy, Evelyn Meinz will help you to make it a reality.",
          "Pricing Varies",
        ]}
      />
    </React.Fragment>
  );
}
