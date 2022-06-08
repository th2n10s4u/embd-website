import React from "react";
import { Paper, Container, Fab, Button } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import BeachPhoto from "../images/Carousel-Beach-Image.png";
import ForestPhoto from "../images/Carousel-Forest-Couple-Image.png";
import GroupDance from "../images/Carousel-Group-Dance.png";
import WeddingDance from "../images/Carousel-Weeding-Image.png";
import { textAlign } from "@mui/system";

export function MainCarousel(props) {
  var items = [
    {
      imgurl: BeachPhoto,
    },
    {
      imgurl: ForestPhoto,
    },
    {
      imgurl: GroupDance,
    },
    {
      imgurl: WeddingDance,
    },
  ];

  return (
    <Carousel
      sx={{ height: "100", width: "100%", justifyContent: "space-between" }}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}
<hr />;
function Item({ item }) {
  return (
    // <Paper sx = {{ height: "100"}}>
    <Paper
      sx={{ minWidth: "1200px", justifyContent: "center", display: "flex" }}
    >
      <img src={item.imgurl} width="100%"></img>
    </Paper>
  );
}
