import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import hospitalIcon from "../../assets/hospital.png";
import like from "../../assets/like.png";

const HospitalCard = ({ details, slots, handleBooking, booking=false }) => {
  const [showCalender, setShowCalender] = useState(false);
  console.log(details);
  return (
    <Box sx={{ borderRadius: 2, bgcolor: "#fff", p: { xs: 2, md: 4 } }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 1, md: 4 }}
        flexWrap={"wrap"}
      >
        <Box
          component="img"
          src={hospitalIcon}
          width={{ xs: 64, md: 130 }}
          height="auto"
          sx={{ flexShrink: 0, alignSelf: "start" }}
        />
        <Box flex={1}>
          <Typography
            variant="h3"
            color="primary.main"
            fontWeight={600}
            fontSize={{ xs: 18, md: 20 }}
            textTransform="capitalize"
            lineHeight={1}
            mb={1}
          >
            {details["Hospital Name"].toLowerCase()}
          </Typography>

          <Typography
          textTransform="capitalize"
          color="#414146"
          fontSize={14}
          fontWeight={700}
          >
            {`${details["City"].toLowerCase()}, ${details["State"]}`}
          </Typography>

          <Typography fontSize={14} mb={1}>
            {details["Hospital Type"]}
          </Typography>

          <Stack direction="row" flexWrap="wrap" spacing={1} mb={2}>
            <Typography
            fontWeight={800}
            textTransform="uppercase"
            color="#00A500"
            >
              Free
            </Typography>
            
            <Typography
            sx={{textDecoration:"line-through", color:"#787887"}}
            >
              ₹500
            </Typography>
            <Typography>Consultation fee at clinic</Typography>
          </Stack>

          <Divider sx={{borderStyle:"dashed", mb:2}}/>

          <Stack
          direction="row"
          bgcolor="#00A500"
          alignItems="center"
          py="4px"
          px={1}
          borderRadius={1}
          width="fit-content"
          spacing="4px"
          >
            <Box component="img" src={like} width={{xs:16,md:20}} height={{xs:16,md:20}}/>
            <Typography
            fontWeight={700}
            fontSize={{xs:14, md:16}}
            color="#fff"
            sx={{opacity:0.5}}
            >
              {details["Hospital overall rating"] == "Not Available" ? 0 : details["Hospital overall rating"]}
            </Typography>
          </Stack>
        </Box>

        <Stack justifyContent={booking?"flex-start":"flex-end"} minWidth="25%">
          {!booking && (
            <>
            <Typography
            textAlign="center"
            color="#00A500"
            fontSize={14}
            fontWeight={500}
            mb={1}
            >
              Available Today
            </Typography>
            <Button variant="contained" onClick={()=>setShowCalender((prev)=>!prev)}>
              {!showCalender ? "Book FREE Center Visit" : "Hide Booking Calender"}
            </Button>
            </>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};

export default HospitalCard;
