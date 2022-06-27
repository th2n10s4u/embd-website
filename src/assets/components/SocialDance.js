import React from "react";
import { Box } from "@mui/material";
import TemplateCard from "./TemplateCard";
import UnderArmTurn from "../images/Couple-dance-image.png";

export default function SocialDance() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <TemplateCard
        img={UnderArmTurn}
        buttonText="Learn More"
        CardContentFirstLine="Social Dance"
        CardContentBodySentenceOne="At our group classes, your fellow dancers might start as strangers, but they’ll soon be friends. Meeting at the “x-studio”, our group classes are high energy, low stress and, most of all, fun! By learning to lead and follow from numerous different dancers, you’ll gain the real world experience that only comes from dancing with a variety of partners. While the different types of dance all have prescribed moves and routines, within those patterns there is an infinite amount of individuality and creativity; much like fine dining, the only way to know what you like is by trying everything at least once!"
        CardContentBodySentenceTwo="Group classes are limited in size, so please call or text us today to save your spot!"
      />
    </Box>
  );
}
