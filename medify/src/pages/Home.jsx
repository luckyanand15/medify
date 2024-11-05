import React from 'react'
import { Box } from '@mui/material';
import NavBar from "../components/NavBar/NavBar";
import HeroSection from '../components/HeroSection/HeroSection';

const Home = () => {
  return (
    <Box sx={{background:"linear-gradient(#E7F0FF , rgba(232, 241, 255, 0.47))"}}>
      <NavBar/>
      <HeroSection/>
    </Box>
  )
}

export default Home