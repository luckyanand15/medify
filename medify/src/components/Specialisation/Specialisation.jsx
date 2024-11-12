import { Box, Container, Typography, Stack, Button } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
import img1 from "../../assets/labs-icon.png";
import img2 from "../../assets/Stethoscope.png";
import img3 from "../../assets/Heart Rate.png";
import img4 from "../../assets/Heart Rate Monitor.png";
import img5 from "../../assets/Blood Sample.png";
import img6 from "../../assets/Immune.png";
import img7 from "../../assets/X-Ray.png";

const Specialisation = () => {
  const data = [
    { img: img1, title: "Dentistry" },
    { img: img2, title: "Primary Care" },
    { img: img3, title: "Cardiology" },
    { img: img4, title: "MRI Resonance" },
    { img: img5, title: "Blood Test" },
    { img: img6, title: "Piscologist" },
    { img: img1, title: "Laboratory" },
    { img: img7, title: "X-Ray" },
  ];
  return (
    <Box py={6} sx={{ background: "linear-gradient(#E7F0FF, #E8F1FF)" }}>
      <Container sx={{ textAlign: "center" }}>
        <Typography
          variant="h2"
          fontSize={{ md: 48, xs: 28 }}
          color="#1B3C74"
          fontWeight={600}
          textAlign="center"
          mb={4}
        >
          Find by specialisation
        </Typography>
        <Grid container justifyContent={"center"} spacing={{ md: 3, xs: 1 }}>
          {data.map((item) => {
            return (
              <Grid item key={item.title} size={{ md: 3, xs: 6 }}>
                <Stack
                  bgcolor={"#FAFBFE"}
                  border={"0"}
                  p={3}
                  borderRadius={2}
                  alignItems="center"
                  spacing={2}
                  boxShadow={"0 0 24px rgba(0,0,0,0.09)"}
                  mb={{ xs: 2 }}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    height="60px"
                    width="60px"
                  />
                  <Typography color={"#ABB6C7"} fontSize={18} fontWeight={400}>
                    {item.title}
                  </Typography>
                </Stack>
              </Grid>
            );
          })}
        </Grid>
        <Button variant="contained" size="large">
          View All
        </Button>
      </Container>
    </Box>
  );
};

export default Specialisation;
