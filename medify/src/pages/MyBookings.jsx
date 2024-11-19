import React, { useEffect, useState } from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import NavBar from "../components/NavBar/NavBar";
import SearchBar from "../components/SearchBar/SearchBar";
import HospitalCard from "../components/HospitalCard/HospitalCard";
import banner from "../assets/ads.png";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [filterBookings, setFilterBookings] = useState([]);

  useEffect(() => {
    const savedBookings = localStorage.getItem("bookings") || "[]";
    setBookings(JSON.parse(savedBookings));
  }, []);

  useEffect(() => {
    setFilterBookings(bookings);
  }, [bookings]);
  return (
    <Box>
      <NavBar />
      <Box
        sx={{ background: "linear-gradient(#EFF5FE, rgba(241,247,255,0.47))" }}
      >
        <Box
          sx={{
            position: "relative",
            background: "linear-gradient(90deg, #2AA7FF, #0C8CE5)",
            borderBottomLeftRadius: "1rem",
            borderBottomRightRadiusL: "1rem",
          }}
          mb="50px"
        >
          <Container maxWidth="xl" sx={{ px: { xs: 0, md: 15 } }}>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 0, md: 12 }}
              alignItems={{ xs: "center", md: "flex-end" }}
            >
              <Typography
                variant="h1"
                color="#ffffff"
                pb={1}
                fontSize={{ xs: 32, md: 40 }}
                fontWeight={700}
              >
                My Bookings
              </Typography>
              <Box
                bgcolor="#ffffff"
                flexGrow={1}
                p={3}
                borderRadius={2}
                sx={{ translate: "0 50px" }}
                boxShadow="0 0 10px rgba(0,0,0,0.1)"
                width={{ xs: 1, md: "auto" }}
              >
                <SearchBar
                  bookings={bookings}
                  setFilterBookings={setFilterBookings}
                />
              </Box>
            </Stack>
          </Container>
        </Box>

        <Container maxWidth="xl" sx={{ pt: 8, pb: 10, px: { xs: 0, md: 15 } }}>
          <Stack alignItems="flex-start" direction={{ md: "row" }}>
            <Stack
              mb={{ xs: 4, md: 0 }}
              spacing={3}
              width={{ xs: 1, md: "calc(100% - 384px)" }}
              mr="24px"
            >
              {filterBookings.length > 0 &&
                filterBookings.map((hospital) => {
                  return (
                    <HospitalCard
                      key={hospital["Hospital Name"]}
                      details={hospital}
                      booking={true}
                    />
                  );
                })}
              {filterBookings.length === 0 && (
                <Typography
                  variant="h3"
                  bgcolor="#fff"
                  borderRadius={2}
                  p={3}
                  sx={{
                    color: "#102851",
                    fontSize: "30px",
                    fontWeight: "500",
                  }}
                >
                  No Bookings Found!
                </Typography>
              )}
            </Stack>
            <img src={banner} alt="ads" height="auto" width={360}/>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default MyBookings;
