import React from "react";
import { Box } from "@mui/material";
import TemplateCard from "../TemplateComponents/TemplateCard";
import TemplateTextCard from "../TemplateComponents/TemplateTextCard";
import Fruit from "../../images/Fruit-dance-image.png";
import FunDip from "../../images/Fun-dip-image.png";

import Crossbody from "../../images/Couple-crossbody-image.png";

export default function BenefitsOfDance() {
  return (
    <React.Fragment>
      <Box
        id="benefitsofdance"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
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
            flexDirection: "row",
            width: "1170px", // not sure if this is the best solution but the spacing is better.
            // justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          {/* fix template card by adding conditional to the card's for text, similarly to the && props.button */}
          <TemplateCard img={Fruit} />
          {/* <Box
            sx={{ display: "flex", marginLeft: "200px", width: "0px" }}
          ></Box> */}
          <TemplateTextCard
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
            centered
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "10px",
            marginLeft: "200px",
          }}
        ></Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <TemplateCard
            img={Crossbody}
            CardContentHeaderFirstLine="Science"
            CardContentBodySentenceOne="Dancing & the Brain href"
            CardContentBodySentenceTwo="The Science of Dance href"
            CardContentBodySentenceThree="The Health benefits of Dancing Go Beyond Exercise and Stress Reducer href"
            background
            centerHeader
            centerBodyOne
            centerBodyTwo
            centerBodyThree
            reverse
          />
        </Box>
      </Box>
    </React.Fragment>
  );
}
// TODO: Come up with a different solution for TemplateCard Img paired with TextCard header/list. The alignment is off and any styling adjustments causes other components alignments to be off.
