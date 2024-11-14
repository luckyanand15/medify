import {
  Box,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
import logo from "../../assets/logo.png";
import fb from "../../assets/fb.png";
import tw from "../../assets/tw.png";
import yt from "../../assets/yt.png";
import pt from "../../assets/pt.png";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  const mobileSize = useMediaQuery("(max-width:900px)");
  const pageData = [
    "About Us",
    "Our Pricing",
    "Our Gallery",
    "Appointment",
    "Privacy Policy",
  ];
  const department = [
    "Orthology",
    "Neurology",
    "Dental Care",
    "Opthalmology",
    "Cardiology",
  ];
  return (
    <Box bgcolor="secondary.main" pb={3} pt={6}>
      <Stack px={mobileSize ? 2 : 10}>
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            <Grid item size={{ xs: 12, md: 4.5 }}>
              <Stack
                height={1}
                alignItems="flex-start"
                justifyContent="space-between"
              >
                <Box
                  component="img"
                  src={logo}
                  alt="medify"
                  height={36}
                  mb={2}
                />
                <Stack direction="row" spacing={1.5}>
                  <Box component="img" src={fb} height={36} />
                  <Box component="img" src={tw} height={36} />
                  <Box component="img" src={yt} height={36} />
                  <Box component="img" src={pt} height={36} />
                </Stack>
              </Stack>
            </Grid>

            <Grid item size={{ xs: 12, md: 2.5 }}>
              <Stack spacing={2}>
                {pageData.map((item, idx) => (
                  <FooterLinks key={idx}>{item}</FooterLinks>
                ))}
              </Stack>
            </Grid>

            <Grid item size={{ xs: 12, md: 2.5 }}>
              <Stack spacing={2}>
                {department.map((item, idx) => (
                  <FooterLinks key={idx}>{item}</FooterLinks>
                ))}
              </Stack>
            </Grid>

            <Grid item size={{ xs: 12, md: 2.5 }}>
              <Stack spacing={2}>
                {pageData.map((item, idx) => (
                  <FooterLinks key={idx}>{item}</FooterLinks>
                ))}
              </Stack>
            </Grid>
          </Grid>
          <Typography
            color="#ffffff"
            fontSize={14}
            fontWeight={300}
            pt={3}
            mt={5}
            borderTop="1px solid rgba(255,255,255,0.1)"
          >
            Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
          </Typography>
        </Container>
      </Stack>
    </Box>
  );
};

export default Footer;
