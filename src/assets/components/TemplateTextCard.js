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
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // background: "#DEE2E9",
      }}
    >
      <Card
        elevation={0}
        sx={{
          maxWidth: 700,
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
            }}
            align="left"
          >
            Our Current class schedule is as follows:
          </Typography>
          {/* {props.TextCardHeader} */}
        </CardContent>
        <Typography
          sx={{
            fontFamily: "Playfair Display",
            fontWeight: "400",
            fontSize: "32px",
            lineHeight: "20px",
            marginBottom: "20px",
          }}
        >
          {/* Our Current class schedule is as follows: */}
        </Typography>

        <CardContent>
          <Typography
            ClassName="ListText"
            sx={{
              fontFamily: "Playfair Display",
              fontWeight: "400",
              fontSize: "24px",
              lineHeight: "18px",
            }}
          >
            <List>
              {props.ListText.map((text) => (
                <ListItem>{text}</ListItem>
              ))}
            </List>
          </Typography>
        </CardContent>
      </Card>
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
// HOW TO MAKE THE LIST ITEMS WORK WITH PROPS
