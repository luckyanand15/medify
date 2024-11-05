import React from "react";
import Styles from "./HeroSection.module.css";
import { Box, Container, Stack, Typography, Button, useMediaQuery } from "@mui/material";
import heroImage from "../../assets/hero-image.png";
import { Link } from "react-router-dom";
const HeroSection = () => {
  const mobileSize = useMediaQuery("(max-width:900px)")
  return (
    <Box>
      <Container maxWidth="xl">
        <Stack
          direction={{ md: "row", xs: "column" }}
          alignItems="center"
          px={mobileSize ? 2:10}
        >
          <Box className={Styles.heroText}>
            <Typography variant="h3">Skip the travel! Find Online</Typography>
            <Typography variant="h1" my={1}>
              Medical <span style={{ color: "#2AA7FF" }}>Centers</span>
            </Typography>
            <Typography color="#5C6169" fontSize={{ md: 20 }} mb={3}>
              Connect instantly with a 24x7 specialist or choose to video visit
              a particular doctor.
            </Typography>
            <Link to={"./search"}>
              <Button variant="contained" size="large">
                Find Centers
              </Button>
            </Link>
          </Box>
          <Box className={Styles.heroImage}>
            <img
              src={heroImage}
              alt="Hero"
              width="100%"
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeroSection;
