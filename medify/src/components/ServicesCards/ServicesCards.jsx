import { Box, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import doctorIcon from "../../assets/doctor-icon.png";
import labIcon from "../../assets/labs-icon.png";
import hospitalIcon from "../../assets/hospital-icon.png";
import storeIcon from "../../assets/medical-store-icon.png";
import ambulanceIcon from "../../assets/ambulance-icon.png";

const ServicesCards = () => {
  const services = [
    { img: doctorIcon, title: "Doctors" },
    { img: labIcon, title: "Labs" },
    { img: hospitalIcon, title: "Hospitals", active: true },
    { img: storeIcon, title: "Medical Store" },
    { img: ambulanceIcon, title: "Ambulance" },
  ];
  return (
    <Box>
      <Typography
        component="h4"
        fontSize={20}
        color="#102851"
        fontWeight={500}
        textAlign="center"
        mb={2}
        mt={10}
      >
        You may be looking for
      </Typography>
      <Grid
        container
        justifyContent={"center"}
        columnSpacing={{ xs: 1, md: 2 }}
      >
        {services.map((service) => {
          return (
            <Grid item key={service.title} size={{ md: 2.4, xs: 6 }}>
              <Stack
                bgcolor={service.active ? "rgba(42,167,255,0.08)" : "#FAFBFE"}
                border={service.active ? "1px solid #2AA7FF" : "0"}
                p={3}
                borderRadius={2}
                alignItems="center"
                spacing={2}
                mb={2}
              >
                <img
                  src={service.img}
                  alt={service.title}
                  height="60px"
                  width="60px"
                />
                <Typography
                  color={service.active ? "primary.main" : "#ABB6C7"}
                  fontSize={18}
                  fontWeight={service.active ? 600 : 400}
                >
                  {service.title}
                </Typography>
              </Stack>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ServicesCards;
