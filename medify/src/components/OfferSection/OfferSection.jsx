import { Box } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import offerImage1 from "../../assets/offer-image-1.png";
import offerImage2 from "../../assets/offer-image-2.png";
import { Pagination } from "swiper/modules";

const OfferSection = () => {
  return (
    <Box py={6}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        breakpoints={{
          767: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <Box component={"img"} src={offerImage1} sx={{ maxWidth: "100%" }} />
        </SwiperSlide>
        <SwiperSlide>
          <Box component={"img"} src={offerImage2} sx={{ maxWidth: "100%" }} />
        </SwiperSlide>
        <SwiperSlide>
          <Box component={"img"} src={offerImage1} sx={{ maxWidth: "100%" }} />
        </SwiperSlide>
        <SwiperSlide>
          <Box component={"img"} src={offerImage2} sx={{ maxWidth: "100%" }} />
        </SwiperSlide>
        <SwiperSlide>
          <Box component={"img"} src={offerImage1} sx={{ maxWidth: "100%" }} />
        </SwiperSlide>
        <SwiperSlide>
          <Box component={"img"} src={offerImage2} sx={{ maxWidth: "100%" }} />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default OfferSection;
