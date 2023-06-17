import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import './style/styles.css'

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";
import TestimonialComponent from "./TestimonialComponent";

function Testimonial() {
  return (
    <div className="mt-0 w-[100%] h-[100vh] md:h-[80vh]">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <TestimonialComponent />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
      </Swiper>
    </div>
  );
}
export default Testimonial;
