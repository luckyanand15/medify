import { Box } from "@mui/material";
import React, { useState } from "react";
import Day from "./Day/Day";
import TimeSlot from "./TimeSlot/TimeSlot";
import { startOfDay } from "date-fns";

const Calendar = ({ details, slots, handleBooking }) => {
  const [selectedDate, setSelectedDate] = useState(startOfDay(new Date()));
  const totalSlots =
    slots.morning.length + slots.afternoon.length + slots.evening.length;
  return (
    <Box>
      <Day
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        totalSlots={totalSlots}
      />
      <TimeSlot
        slots={slots}
        selectedDate={selectedDate}
        details={details}
        handleBooking={handleBooking}
      />
    </Box>
  );
};

export default Calendar;
