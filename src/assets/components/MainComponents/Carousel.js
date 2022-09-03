import React from "react";
import { Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel";
///////

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper";
import "swiper/swiper.min.css";
// import "swiper/css";
// import "swiper/css/effect-fade";
import BeachPhoto from "../../images/Carousel-Beach-Image.png";
import ForestPhoto from "../../images/Carousel-Forest-Couple-Image.png";
import GroupDance from "../../images/Carousel-Group-Dance.png";
import WeddingDance from "../../images/Carousel-Weeding-Image.png";
//Remove initial render animation sizing issue
//Possibly add a prop to animateOnRender: boolean ?

export default function MainCarousel() {
  return (
    <Swiper
      modules={[Navigation, EffectFade]}
      effect
      speed={800}
      slidesPerView={1}
      loop
    >
      <Paper sx={{ height: "1800px", width: "100%" }}>
        <SwiperSlide>
          <img src={BeachPhoto} alt="Beach-Photo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ForestPhoto} alt="Beach-Photo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={GroupDance} alt="Beach-Photo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={WeddingDance} alt="Beach-Photo" />
        </SwiperSlide>
      </Paper>
    </Swiper>
  );
}

// export default function MainCarousel(props) {
//   var items = [
//     {
//       imgUrl: BeachPhoto,
//     },
//     {
//       imgUrl: ForestPhoto,
//     },
//     {
//       imgUrl: GroupDance,
//     },
//     {
//       imgUrl: WeddingDance,
//     },
//   ];

//   return (
//     <Carousel>
//       {items.map((item, i) => (
//         <Item key={i} item={item} />
//       ))}
//     </Carousel>
//   );
// }
// {
// }
// function Item({ item }) {
//   return (
//     <Paper elevation={0} sx={{ height: "800px" }}>
//       <img src={item.imgUrl} alt="CarouselImages" width="100%"></img>
//     </Paper>
//   );
// }
