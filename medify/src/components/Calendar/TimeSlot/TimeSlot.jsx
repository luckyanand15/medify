import { Chip, Divider, Stack, Typography } from "@mui/material";
import React from "react";

const TimeSlot = ({ slots, selectedDate, details, handleBooking }) => {
  const CustomChip = (props) => (
    <Chip
      label={props.label}
      color="primary"
      variant="outlined"
      sx={{
        borderRadius: "5px",
        fontSize: { xs: 10, md: 14 },
        cursor: "pointer",
        "&:nth-of-type(1)": {
          ml: 0,
        },
        mr: { xs: 1, md: 3 },
        mt: { xs: 1, md: 0 },
      }}
      onClick={props.handleClick}
    />
  );

  const handleClick = (slot) => {
    handleBooking({ ...details, bookingDate: selectedDate, bookingTime: slot });
  };
  return (
    <Stack
      pt={3}
      spacing={{ xs: 2, md: 3 }}
      divider={<Divider orientation="horizontal" flexItem />}
    >
      {slots.morning.length > 0 && (
        <Stack
          direction="row"
          alignItems="center"
          px={{ xs: 0, md: 6 }}
          flexWrap={"wrap"}
        >
          <Typography
          width={{xs: 1, md:"15%"}}
          fontSize={{xs:14,md:16}}
          >
            Morning
          </Typography>
          {slots.morning.map((slot) => (
            <CustomChip
            key={slot}
            label={slot}
            handleClick={() => handleClick(slot)}
            />
          ))}
        </Stack>
      )}
      {slots.afternoon.length > 0 && (
        <Stack
        direction={"row"}
        alignItems="center"
        px={{xs:0, md:6}}
        flexWrap={"wrap"}
        >
          <Typography
          width={{xs: 1, md: "15%"}}
          fontSize={{xs:14, md:16}}
          >
            Afternoon
          </Typography>
          {slots.afternoon.map((slot) => (
            <CustomChip
            key={slot}
            label={slot}
            handleClick={()=> handleClick(slot)}
            />
          ))}
        </Stack>
      )}
      {slots.afternoon.length > 0 && (
        <Stack
        direction={"row"}
        alignItems="center"
        px={{xs:0, md:6}}
        flexWrap={"wrap"}
        >
          <Typography
          width={{xs: 1, md: "15%"}}
          fontSize={{xs:14, md:16}}
          >
            Evening
          </Typography>
          {slots.evening.map((slot)=> (
            <CustomChip
            key={slot}
            label={slot}
            handleClick={()=> handleClick(slot)}
            />
          ))}
        </Stack>
      )}
    </Stack>
  );
};

export default TimeSlot;
