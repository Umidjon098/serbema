import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Navigation } from "swiper";
import IMage from "../../../../../assets/images/Banner.png";
SwiperCore.use([Navigation]);

export default function Slider({
  slideList = [],
  view = 3,
  spaceBetween = 50,
  className,
}) {
  return (
    <>
      <Swiper
        slidesPerView={view}
        spaceBetween={spaceBetween}
        navigation={true}
        className={className}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: view,
            spaceBetween: 50,
          },
        }}
      >
        {slideList.map((data) => (
          <SwiperSlide>
            <div className="card-box">
              <div className="papers-card position">
                <div className="img-box">
                  <img src={IMage} alt="" />
                </div>
                <div className="card-footer">
                  <div className="title">{data.title}</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
