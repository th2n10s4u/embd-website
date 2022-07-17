
//SocialDance.js 17Jul22
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

      <TemplateTextCard TextCardHeader="Our current class schedule is as follows:"
      ListItem="" />

      {/* <Box
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
      </Box> */}
    </React.Fragment>
  );
}





// Template Card 17Jul22
import React from "react";
import {
  Paper,
  Box,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
} from "@mui/material";

export default function TemplateTextCard(props) {
  return (
    <Paper
      ClassName="TemplateText"
      sx={{
        width: "700px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#DEE2E9",
      }}
    >
      <Card
        elevation={0}
        sx={{
          maxWidth: 764,
          maxHeight: 475,
          flexBasis: "50%",
          alignSelf: "center",
          background: "#DEE2E9",
        }}
      >
        <CardContent>
          <Typography
            ClassName="TextCardHeader"
            sx={{
              fontFamily: "Playfair Display",
              fontWeight: "400",
              fontSize: "32px",
              lineHeight: "20px",
              marginBottom: "20px",
            }}
            align="left"
          >
            {props.TextCardHeader}
          </Typography>
        </CardContent>
      </Card>

      {/* <Typography
        sx={{
          fontFamily: "Playfair Display",
          fontWeight: "400",
          fontSize: "32px",
          lineHeight: "20px",
          marginBottom: "20px",
        }}
      >
        Our Current class schedule is as follows:
      </Typography> */}

      <CardContent>
        <Typography
          sx={{
            fontFamily: "Playfair Display",
            fontWeight: "400",
            fontSize: "24px",
            lineHeight: "18px",
          }}
        ></Typography>
      </CardContent>
    </Paper>
  );
}

//List Item for schedule
{
  /* <ListItem>Wednesday: 6:00pm Beginner County Western 2-Step</ListItem>
        <ListItem>Wednesday: 6:45 Intro to Swing</ListItem>
        <ListItem> Wednesday: 7:30pm Beginner Argentine Tango</ListItem>
        <ListItem>Thursday: 6:00pm Level 1 Ballroom</ListItem>
        <ListItem>Thursday: 7:30pm Level 1 Salsa</ListItem>
        <ListItem>Friday: 6:00pm Beginner Salsa</ListItem>
        <ListItem>Friday: 6:45pm Beginner Ballroom</ListItem> */
}

//TODO Change minW minH of paper
//     add card and cardmedia with proper styling
