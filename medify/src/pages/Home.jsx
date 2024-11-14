import React from "react";
import { Box, Container, Stack, useMediaQuery } from "@mui/material";
import NavBar from "../components/NavBar/NavBar";
import HeroSection from "../components/HeroSection/HeroSection";
import SearchHosptials from "../components/SearchHospitals/SearchHosptials";
import ServicesCards from "../components/ServicesCards/ServicesCards";
import OfferSection from "../components/OfferSection/OfferSection";
import Specialisation from "../components/Specialisation/Specialisation";
import Specialist from "../components/Specialist/Specialist";
import PatientCaring from "../components/PatientCaring/PatientCaring";
import BlogsAndNews from "../components/BlogsAndNews/BlogsAndNews";
import OurFamilies from "../components/OurFamilies/OurFamilies";
import FAQs from "../components/FAQs/FAQs";

const Home = () => {
  const mobileSize = useMediaQuery("(max-width:900px)");
  return (
    <Box>
      <Box
        sx={{
          background:
            "linear-gradient(#E7F0FF , rgba(232, 241, 255, 0.47) 90%, #fff 10%)",
        }}
        mb={4}
      >
        <NavBar />
        <HeroSection />
        <Stack px={mobileSize ? 2 : 10}>
          <Container maxWidth="xl">
            <Stack
              bgcolor="#fff"
              p={{ xs: 2.5, md: 8 }}
              position="relative"
              zIndex={99}
              mt={{ xs: -2, md: -6 }}
              boxShadow="0 0 12px rgba(0,0,0,0.1)"
              borderRadius="15px"
            >
              <SearchHosptials />
              <ServicesCards />
            </Stack>
          </Container>
        </Stack>
      </Box>
      <Box>
        <Stack px={mobileSize ? 2 : 10}>
          <Container maxWidth="xl">
            <OfferSection />
          </Container>
        </Stack>
        <Specialisation />
        <Specialist />
        <PatientCaring />
        <BlogsAndNews />
        <OurFamilies />
        <Stack px={mobileSize ? 2 : 10}>
          <FAQs />
        </Stack>
      </Box>
    </Box>
  );
};

export default Home;
