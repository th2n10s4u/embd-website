import React from "react";
import { Paper, Box, Typography, ListItem } from "@mui/material";
import TemplateCard from "./TemplateCard";
// import TemplateTextCard from "./TemplateTextCard";
// import Fruit from "../images/Fruit-dance-image.png";
import FunDip from "../images/Fun-dip-image.png";
import TemplateTextCard from "./TemplateTextCard";
// import Crossbody from "src/assets/images/Couple-crossbody-image.png";

export default function BenefitsOfDance() {
  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <TemplateCard
          img={FunDip}
          CardContentHeaderFirstLine="Why Dance?"
          CardContentBodySentenceOne="The number of people taking part in dance classes is increasing worldwide, helping people to become more social within their local communities, improve their physical fitness and develop creative skills."
          CardContentBodySentenceTwo=" There are many benefits to partaking in dance classes ranging from increasing your amount of daily exercise to making new friends with shared interests. Why is it that many dancers enjoy dance for a lifetime? See some of the benefits that people of all ages enjoy below."
          centerHeader
          centerBodyOne
          centerBodyTwo
          reverse
          background
          shadow
          radius
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "",
            justifyContent: "space-between",
          }}
        >
          <TemplateCard img={FunDip} />
          {/* <TemplateTextCard
            TextCardHeader="Benefits?"
            ListText={[
              "Healthy Posture",
              "Better Balance",
              "Increased Endurance",
              "Social Satisfaction",
              "Reduces Stress",
              "New Neural Pathway Creation",
              "Diminished Depression",
              "Boost Memory",
              "Improved Flexibility",
              "Enhanced Communication Skills",
              "Cardiovascular Health",
              "Creative Outlet",
            ]}
            
            /> */}
        </Box>
      </Box>
    </React.Fragment>
  );
}
{
}
