import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import "./Partners.css";
import Wilier from "../../assets/images/partners/wilier.png";
import Sram from "../../assets/images/partners/sram.png";
import Trek from "../../assets/images/partners/trek.png";
import Topeak from "../../assets/images/partners/topeak.png";
import Shim from "../../assets/images/partners/shim.png";
import Spam from "../../assets/images/partners/spam.png";

const Partners = () => {
  return (
    <div className="partners">
      <Swiper
        spaceBetween={50}
        slidesPerView={5}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,

        }}
        
        breakpoints={{
          500: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="img-container">
            <img className="partner-img" src={Shim} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-container">
            <img className="partner-img" src={Wilier} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-container">
            <img className="partner-img" src={Trek} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-container">
            <img className="partner-img" src={Topeak} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-container">
            <img className="partner-img" src={Trek} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-container">
            <img className="partner-img" src={Spam} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-container">
            <img className="partner-img" src={Sram} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Partners;
