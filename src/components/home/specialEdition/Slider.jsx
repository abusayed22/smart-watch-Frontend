import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style/styles.css";

// import required modules
import { Pagination } from "swiper";
import SpecialCart from "./SpecialCart";

function Slider() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <div className="w-full h-[120vh] lg:h-[100vh]">
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <SpecialCart />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
