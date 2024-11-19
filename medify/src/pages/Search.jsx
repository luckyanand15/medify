import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import {
  Box,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import SearchHospitals from "../components/SearchHospitals/SearchHosptials";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import icon from "../assets/verified.png";
import banner from "../assets/ads.png";
import BookingModal from "../components/BookingModal/BookingModal";
import AutoSnackbar from "../components/AutoSnackbar/AutoSnackbar";
import HospitalCard from "../components/HospitalCard/HospitalCard";

const Search = () => {
  const mobileSize = useMediaQuery("(max-width:900px)");
  const [searchParams, setSerchParams] = useSearchParams();
  const [state, setState] = useState(searchParams.get("state"));
  const [city, setCity] = useState(searchParams.get("city"));
  const [hospitals, setHospitals] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const slots = {
    morning: ["11:30 AM"],
    afternoon: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
    evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({});
  const [successMessage, setSuccessMessage] = useState(false);

  useEffect(() => {
    const getHospitals = async () => {
      setHospitals([]);
      setIsLoading(true);
      try {
        const url = `https://meddata-backend.onrender.com/data?state=${state}&city=${city}`;
        const resp = await axios.get(url);
        setHospitals(resp.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };
    if (state && city) {
      getHospitals();
    }
  }, [state, city]);

  useEffect(() => {
    setState(searchParams.get("state"));
    setCity(searchParams.get("city"));
  }, [searchParams]);

  const handleBooking = (details) => {
    setBookingDetails(details);
    setIsModalOpen(true);
  };

  return (
    <>
      <NavBar />
      <Box
        sx={{
          background: "linear-gradient(#EFF5FE, rgba(241,247,255,0.47))",
          width: "100%",
        }}
      >
        <Box
          sx={{
            position: "relative",
            background: "linear-gradient(90deg, #2AA7FF, #0C8CE5)",
            borderBottomLeftRadius: "1rem",
            borderBottomRightRadius: "1rem",
            height:"108px"
          }}
        >
          <Stack px={mobileSize ? 2 : 10}>
            <Container
              maxWidth="xl"
              sx={{
                background: "#ffffff",
                p: 3,
                borderRadius: 2,
                transform: "translatey(50px)",
                mb: "50px",
                boxShadow: "0 0 10px rgba(0,0,0,0.1)",
              }}
            >
              <SearchHospitals />
            </Container>
          </Stack>
        </Box>

        <Stack px={mobileSize ? 2 : 10}>
          <Container maxWidth="xl" sx={{ pt: 8, pb: 10, px: { xs: 0, md: 4 } }}>
            {hospitals.length > 0 && (
              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="h1"
                  fontSize={24}
                  fontWeight={400}
                  lineHeight={1.1}
                  mb={2}
                >
                  {`${hospitals.length} medical centers available in `}
                  <span style={{ textTransform: "capitalize" }}>
                    {city.toLocaleLowerCase()}
                  </span>
                </Typography>
                <Stack direction="row" spacing={2}>
                  <img src={icon} alt="icon" height={24} width={24} />
                  <Typography color="#787887" lineHeight={1.4}>
                    Book appointments with minimum wait-time & verified doctor
                    details
                  </Typography>
                </Stack>
              </Box>
            )}

            <Stack alignItems="flex-start" direction={{ md: "row" }}>
              <Stack
                mb={{ xs: 4, md: 0 }}
                mt={{xs:5, md:0}}
                spacing={3}
                width={{ xs: 1, md: "calc(100% - 384px)" }}
                mr="24px"
              >
                {hospitals.length > 0 &&
                  hospitals.map((hospital, idx) => {
                    return (
                      <HospitalCard
                        key={idx}
                        details={hospital}
                        slots={slots}
                        handleBooking={handleBooking}
                      />
                    );
                  })}

                {!state && (
                  <Typography
                    variant="h3"
                    bgcolor="fff"
                    p={3}
                    borderRadius={2}
                    sx={{
                      color: "#102851",
                      fontSize: "30px",
                      fontWeight: "500",
                    }}
                  >
                    Please select a state and city
                  </Typography>
                )}

                {isloading && (
                  <Typography
                    variant="h3"
                    bgcolor="fff"
                    p={3}
                    borderRadius={2}
                    sx={{
                      color: "#102851",
                      fontSize: "30px",
                      fontWeight: "500",
                    }}
                  >
                    Loading...
                  </Typography>
                )}
              </Stack>
              <img src={banner} alt="banner" height="auto" width={330}/>
            </Stack>
          </Container>
        </Stack>

        <BookingModal 
        open={isModalOpen}
        setOpen={setIsModalOpen}
        bookingDetails={bookingDetails}
        successMessage={setSuccessMessage}
        />

        <AutoSnackbar 
        open={successMessage}
        setOpen={setSuccessMessage}
        message="Booking Successful"
        />
      </Box>
    </>
  );
};

export default Search;
