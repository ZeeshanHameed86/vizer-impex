import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import header1 from "../assets/Sports-banner.jpg";
import header2 from "../assets/Fitness-banner.jpg";
import header3 from "../assets/Our-Process-Banner.jpg";
import HeaderInfoAnim from "./HeaderInfoAnim";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import "../index.css";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function App() {
  const [activeIndex1, setActiveIndex1] = useState(true);
  const [activeIndex2, setActiveIndex2] = useState(false);
  const [activeIndex3, setActiveIndex3] = useState(false);

  const handleIndex = (e) => {
    if (e.realIndex === 0) {
      setActiveIndex1(true);
      setActiveIndex2(false);
      setActiveIndex3(false);
    }
    if (e.realIndex === 1) {
      setActiveIndex1(false);
      setActiveIndex2(true);
      setActiveIndex3(false);
    }
    if (e.realIndex === 2) {
      setActiveIndex1(false);
      setActiveIndex2(false);
      setActiveIndex3(true);
    }
  };

  return (
    <section>
      <HeaderInfoAnim
        activeIndex1={activeIndex1}
        activeIndex2={activeIndex2}
        activeIndex3={activeIndex3}
      />
      <Swiper
        onActiveIndexChange={(e) => handleIndex(e)}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        speed={800}
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
      >
        <SwiperSlide>
          <img src={header1} alt="" style={{ opacity: 0.5 }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={header2} alt="" style={{ opacity: 0.5 }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={header3} alt="" style={{ opacity: 0.5 }} />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
