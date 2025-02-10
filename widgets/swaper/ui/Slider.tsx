"use client";

import { FC } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../style/swiper.css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Slider: FC<SliderProps> = ({ data }) => {
  return (
    <section className="container mx-auto w-full pt-4">
      <div className="h-[400px]">
        <ul className="h-full w-full">
          <Swiper
            autoplay
            className="h-[400px]"
            allowTouchMove={false}
            modules={[Autoplay, Pagination]}
            pagination={{
              el: ".custom-pagination",
              clickable: true,
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
            }}
          >
            {data.map(({ id, image }) => (
              <SwiperSlide key={id}>
                <div
                  className="h-full w-full absolute left-0 top-0 rounded-sm"
                  style={{
                    background: `url(${image}) center center / cover no-repeat`,
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="custom-pagination flex justify-center gap-2 mt-4" />
        </ul>
      </div>
    </section>
  );
};
