import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import LatinDip from "../images/latin-dip-image.png";
import TemplateCard from "./TemplateCard";
import TemplateTextCard from "./TemplateTextCard";

export default function StylesOfDance() {
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <TemplateCard
          img={LatinDip}
          CardContentBodySentenceOne="Evelyn Meinz Ballroom Dance teaches all styles of partnership dancing. From sophisticated to spicy we’ve got you covered!"
          reverse
          background
          shadow
          radius
          centerBodyOne
        />
      </Box>

      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <TemplateTextCard
          TextCardHeader="Social Styles"
          ListText={[
            "Salsa",
            "Tango",
            "Cha Cha",
            "Bachata",
            "Hustle",
            "Swing",
            "Country Western",
            "Merengue",
          ]}
        />

        <TemplateTextCard
          TextCardHeader="International"
          ListText={[
            "Foxtrot",
            "Quickstep",
            "Viennese Waltz",
            "Slow Waltz",
            "Tango",
          ]}
        />

        <TemplateTextCard
          TextCardHeader="Latin"
          ListText={["Rumba", "Cha Cha", "Jive", "Paso Doble", "Samba"]}
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <TemplateTextCard
          TextCardHeader="Smooth"
          ListText={["Foxtrot", "Waltz", "Viennese Waltz", "Peabody", "Tango"]}
        />

        <TemplateTextCard
          TextCardHeader="Rythm"
          ListText={["Rumba", "Cha Cha", "Swing", "Bolero", "Mambo"]}
        />
      </Box>
    </React.Fragment>
  );
}

//TODO: Display: flex causes the card to shrink for some reason.
