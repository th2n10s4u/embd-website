import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import BeachPhoto from "../../images/Carousel-Beach-Image.png";
import ForestPhoto from "../../images/Carousel-Forest-Couple-Image.png";
import GroupDance from "../../images/Carousel-Group-Dance.png";
import WeddingDance from "../../images/Carousel-Weeding-Image.png";

export default function MainCarousel() {
  return (
    <Swiper
      style={{ zIndex: "0" }}
      modules={[Navigation, EffectFade, Autoplay]}
      navigation
      autoplay
      effect={"fade"}
      autoHeight
      speed={400}
      Pagination
      slidesPerView={1}
      loop
    >
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
