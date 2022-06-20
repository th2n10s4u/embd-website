import React from "react";
import { Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import BeachPhoto from "../images/Carousel-Beach-Image.png";
import ForestPhoto from "../images/Carousel-Forest-Couple-Image.png";
import GroupDance from "../images/Carousel-Group-Dance.png";
import WeddingDance from "../images/Carousel-Weeding-Image.png";

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

  console.log(items);
  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}
<hr />;
function Item({ item }) {
  return (
    <Paper
      sx={{
        minWidth: "1440px",
        height: "100%",
        // minWidth: "2000px",
        // minHeight: "600px",
        // justifyContent: "space-around",
        // alignItems: "center",
        // display: "flex",
      }}
    >
      <img
        src={item.imgurl}
        alt="CarouselImages"
        // width="1440px"
        // height="600px"
      ></img>
    </Paper>
  );
}
