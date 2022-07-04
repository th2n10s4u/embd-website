import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import TemplateCard from "./TemplateCard";
import TemplateTextCard from "./TemplateTextCard";
import UnderArmTurn from "../images/Couple-dance-image.png";

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
          img={UnderArmTurn}
          buttonText="Learn More"
          CardContentHeaderFirstLine="Social Dance"
          CardContentBodySentenceOne="At our group classes, your fellow dancers might start as strangers, but they’ll soon be friends. Meeting at the “x-studio”, our group classes are high energy, low stress and, most of all, fun! By learning to lead and follow from numerous different dancers, you’ll gain the real world experience that only comes from dancing with a variety of partners. While the different types of dance all have prescribed moves and routines, within those patterns there is an infinite amount of individuality and creativity; much like fine dining, the only way to know what you like is by trying everything at least once!"
          CardContentBodySentenceTwo="Group classes are limited in size, so please call or text us today to save your spot!"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={1}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",

            width: "800px",
            height: "300px",
          }}
        >
          {
            <TemplateTextCard CardContentHeaderFirstLine="Words go here and more words as well" />
          }
          <Typography
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          ></Typography>
        </Paper>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={1}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",

            width: "800px",
            height: "300px",
          }}
        >
          <Typography
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            The paper doesn't have a border on this for some reason
          </Typography>
        </Paper>
      </Box>
    </React.Fragment>
  );
}
