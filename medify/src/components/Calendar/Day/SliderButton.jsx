import { Box } from '@mui/material';
import React from 'react'
import { useSwiper } from 'swiper/react'
import prev from "../../../assets/prev.png";
import next from "../../../assets/next.png";

const SlidePrevButton = () => {
    const swiper = useSwiper();
  return (
    <Box
    component="img"
    src={prev}
    onClick={()=>swiper.slidePrev()}
    height={48}
    width={48}
    position='absolute'
    left={0}
    top={0}
    sx={{cursor:'pointer'}}
    zIndex={999}
    bgcolor="fff"
    ></Box>
  )
}

const SlideNextButton = () => {
    const swiper = useSwiper();
  return (
    <Box
    component="img"
    src={next}
    onClick={()=>swiper.slideNext()}
    height={48}
    width={48}
    position='absolute'
    right={0}
    top={0}
    sx={{cursor:'pointer'}}
    zIndex={999}
    bgcolor="fff"
    ></Box>
  )
}

export { SlideNextButton, SlidePrevButton }