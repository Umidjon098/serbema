import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Navigation } from "swiper";
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
              <div className="papers-card">
                <div className="img-box">
                  <img src={data.img} alt="" />
                </div>
                <div className="card-footer">
                  <div className="title">{data.title}</div>
                  <a target="_blank" href={data.link} className="link">
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
