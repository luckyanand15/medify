import { Box, Typography } from "@mui/material";
import React from "react";
import img1 from "../../assets/doctor1.png";
import img2 from "../../assets/doctor2.png";
import img3 from "../../assets/doctor3.png";
import img4 from "../../assets/doctor4.png";
import img5 from "../../assets/doctor5.png";
import { Swiper, SwiperSlide } from "swiper/react";
import SpecialistCard from "./SpecialistCard";
import { Autoplay, Pagination } from "swiper/modules";

const Specialist = () => {
  const doctors = [
    { img: img1, title: "Dr. Lesley Hull", designation: "Medicine" },
    { img: img2, title: "Dr. Ahmad Stevens", designation: "Neurologist" },
    { img: img3, title: "Dr. Ankur Sharma", designation: "Medicine" },
    { img: img4, title: "Dr. Ahmad Khan", designation: "Neurologist" },
    { img: img5, title: "Dr. Heena Sachdeva", designation: "Orthopadics" },
    { img: img1, title: "Dr. Lesley Hull", designation: "Medicine" },
    { img: img2, title: "Dr. Ahmad Stevens", designation: "Neurologist" },
    { img: img3, title: "Dr. Ankur Sharma", designation: "Medicine" },
    { img: img4, title: "Dr. Ahmad Khan", designation: "Neurologist" },
    { img: img5, title: "Dr. Heena Sachdeva", designation: "Orthopadics" },
  ];
  return (
    <Box py={4}>
      <Typography
        variant="h2"
        fontSize={{ md: 48, xs: 28 }}
        color="#1B3C74"
        fontWeight={600}
        textAlign="center"
        mb={3}
        px={2}
      >
        Our Medical Specialist
      </Typography>
      <Swiper
      slidesPerView={2}
      spaceBetween={20}
      loop={true}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
    }}
    modules={[Autoplay, Pagination]}
    pagination={{
        clickable: true
    }}
      breakpoints={
        {
            767: {
                slidesPerView: 4
            }
        }
    }
      >
        {doctors.map((doctor,index)=>{
            return(
                <SwiperSlide key={index}>
                    <SpecialistCard img={doctor.img} title={doctor.title} designation={doctor.designation}/>
                </SwiperSlide>
            )
        })}
      </Swiper>
    </Box>
  );
};

export default Specialist;
