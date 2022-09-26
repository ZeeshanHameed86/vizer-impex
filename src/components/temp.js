import React, { useState, useEffect } from "react";
import header1 from "../assets/header.jpg";
import header2 from "../assets/header-2.jpg";

const ImageSlider = () => {
  const [counter, setCounter] = useState(0);
  const images = [header1, header2];

  const nextSlide = () => {
    setCounter(counter === images.length - 1 ? 0 : counter + 1);
  };
  const prevSlide = () => {
    setCounter(counter === 0 ? images.length - 1 : counter - 1);
  };

  useEffect(() => {
    setTimeout(() => {
      nextSlide();
    }, 3000);
  }, [counter]);

  return (
    <div className="slider">
      {images.map((image, index) => {
        return (
          <div className={index === counter ? "slide active" : "slide"}>
            {index === counter && <img src={image} alt="image" />}
          </div>
        );
      })}
    </div>
  );
};

export default ImageSlider;


import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import header1 from "../assets/header.jpg";
import header2 from "../assets/header-2.jpg";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import "../index.css";
import { data } from "../data";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function App() {
  const image1 = "http://localhost:3000/static/media/header.93cb68ca.jpg";
  const image2 = "http://localhost:3000/static/media/header-2.5c8fcf05.jpg";

  const handleSlide = (e) => {
    console.log(e);
  };

  const images = [header1, header2];
  return (
    <Swiper
      onActiveIndexChange={(e) => handleSlide(e)}
      autoplay={{
        delay: 3000,
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
      {images.map((image, index) => {
        return (
          <SwiperSlide>
            <div>
              <img src={image} alt=""/>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
