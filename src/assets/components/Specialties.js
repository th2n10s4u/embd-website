import React from "react";
import { Paper, Box, Typography, ListItem } from "@mui/material";
import TemplateCard from "./TemplateCard";
import LatinFeet from "../images/Latin-feet-image.png";

export default function Specialties() {
  return (
    <div>
      {/* I need to add either cards or some sort of flex in order to place a photo on one side and text on the other.  */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box>
          <TemplateCard
            img={LatinFeet}
            CardContentHeaderFirstLine="Our Specialties:"
            CardContentBodySentenceOne="At Evelyn Meinz Ballroom Dance we teach anything you can do with
            a partner."
            CardContentBodySentenceTwo={
              <React.Fragment>
                We offer a wide variety of dances with personalized programs to
                ensure that your individual goals are met.
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "right",
                  }}
                >
                  <Typography>
                    <ListItem sx={{ display: "list-item" }}>Waltz</ListItem>
                    <ListItem sx={{ display: "list-item" }}>Tango</ListItem>
                    <ListItem sx={{ display: "list-item" }}>Foxtrot</ListItem>
                    <ListItem sx={{ display: "list-item" }}>
                      Viennese Waltz
                    </ListItem>
                    <ListItem sx={{ display: "list-item" }}>Hustle</ListItem>
                  </Typography>
                  <Typography>
                    <ListItem sx={{ display: "list-item" }}>Salsa</ListItem>
                    <ListItem sx={{ display: "list-item" }}>Rumba</ListItem>
                    <ListItem sx={{ display: "list-item" }}>Bachata</ListItem>
                    <ListItem sx={{ display: "list-item" }}>Merengue</ListItem>
                    <ListItem sx={{ display: "list-item" }}>
                      You name it - we teach it
                    </ListItem>
                  </Typography>
                </Box>
              </React.Fragment>
            }
          />
        </Box>

        {/* <ListItem sx={{ display: "list-item" }}></ListItem>  */}
        {/* List items don't have a bulleted UL option available. Maybe import a bulliet PNG and attach it in front of each word? */}
      </Box>
    </div>
  );
}

//TODO: Either create

//Const bull = (
//   <Box
//   component="span"
//   sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
// >
//   •
// </Box>
// );

// Or figure out how to implement bulleits and props for CardContentBodySentenceThree that allows custom styles

//Correct margins for the entire component, possibly wrap it in a <Paper></Paper>... Confirm with Chris that you are doing it all correctly
