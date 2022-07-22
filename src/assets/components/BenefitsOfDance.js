import React from "react";
import { Paper, Box, Typography, ListItem } from "@mui/material";
import TemplateCard from "./TemplateCard";
// import TemplateTextCard from "./TemplateTextCard";
import Fruit from "../images/Fruit-dance-image.png";
// import FunDip from "src/assets/images/Fun-dip-imagwe.png";
// import Crossbody from "src/assets/images/Couple-crossbody-image.png";

export default function BenefitsOfDance() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <TemplateCard
        img={Fruit}
        CardContentHeaderFirstLine="Why Dance?"
        CardContentBodySentenceOne="The number of people taking part in dance classes is increasing worldwide, helping people to become more social within their local communities, improve their physical fitness and develop creative skills."
        CardContentBodySentenceTwo=" There are many benefits to partaking in dance classes ranging from increasing your amount of daily exercise to making new friends with shared interests. Why is it that many dancers enjoy dance for a lifetime? See some of the benefits that people of all ages enjoy below."
        centerHeader
        centerBodyOne
        centerBodyTwo
      />
    </Box>
  );
}
