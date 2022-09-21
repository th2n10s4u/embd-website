import React from "react";
import { Box, Typography, ListItem } from "@mui/material";
import TemplateCard from "../TemplateComponents/TemplateCard";
import LatinFeet from "../../images/Latin-feet-image.png";

export default function Specialties() {
  return (
    <div>
      {/* I need to add either cards or some sort of flex in order to place a photo on one side and text on the other.  */}
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <TemplateCard
            sx={{ minWidth: "300px" }}
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
                    flexDirection: {
                      xs: "column",
                      sm: "column",
                      md: "column",
                      lg: "row",
                    },
                    flexWrap: "nowrap",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Lora",
                      fontSize: "20px",
                      lineHeight: "1",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <ListItem
                      sx={{
                        display: "list-item",
                        marginBottom: "0",
                      }}
                    >
                      {"Waltz"}
                    </ListItem>
                    <ListItem sx={{ display: "list-item" }}>{"Tango"}</ListItem>
                    <ListItem sx={{ display: "list-item" }}>
                      {"Foxtrot"}
                    </ListItem>
                    <ListItem sx={{ display: "list-item" }}>
                      {"Viennese-Waltz"}
                    </ListItem>
                    <ListItem sx={{ display: "list-item" }}>
                      {"Hustle"}
                    </ListItem>
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Lora",
                      fontSize: "20px",
                      lineHeight: "1",
                      whiteSpace: "nowrap",
                    }}
                  >
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
        {/* List items don't have a bulleted UL option available. Maybe import a bullet PNG and attach it in front of each word? */}
      </Box>
    </div>
  );
}

//TODO: Adjust alignment of the box around the listitems so that the it doesn't wrap. nowrap in the <Box> didn't work</Box> as well as in Typography
