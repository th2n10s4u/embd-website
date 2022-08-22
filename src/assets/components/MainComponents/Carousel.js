import React from "react";
import { Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import BeachPhoto from "../../images/Carousel-Beach-Image.png";
import ForestPhoto from "../../images/Carousel-Forest-Couple-Image.png";
import GroupDance from "../../images/Carousel-Group-Dance.png";
import WeddingDance from "../../images/Carousel-Weeding-Image.png";
//Remove initial render animation sizing issue
//Possibly add a prop to animateOnRender: boolean ?

export default function MainCarousel(props) {
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
{
}
function Item({ item }) {
  return (
    <Paper elevation={0} sx={{ height: "800px" }}>
      <img src={item.imgurl} alt="CarouselImages" width="100%"></img>
    </Paper>
  );
}

// TODO: Report but -On load carousel is collapsed.
