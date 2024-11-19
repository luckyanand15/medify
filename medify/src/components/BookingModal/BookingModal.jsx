import {
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { format } from "date-fns";

const BookingModal = ({
  open,
  setOpen,
  bookingDetails,
  successMessage,
}) => {
  const [email, setEmail] = useState("");
  const formatDate = (day) => {
    if (day) {
      const date = new Date(day);
      return format(date, "E, d LLL");
    } else {
      return null;
    }
  };

  const handleBooking = (e) => {
    e.preventDefault();
    const bookings = localStorage.getItem("bookings") || "[]";
    const prevBookings = JSON.parse(bookings);

    localStorage.setItem("bookings",JSON.stringify([...prevBookings,{...bookingDetails, bookingEmail:email}]));
    successMessage(true);
    setEmail("");
    setOpen(false);
  };

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Box
        sx={{
          width: "95%",
          maxWidth: 600,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          boxShadow: 24,
          p: { xs: 3, md: 4 },
          outline: 0,
          bgcolor: "#fff",
          borderRadius: 2,
        }}
      >
        <Typography variant="h3" fontWeight={400} fontSize={{ xs: 18, md: 30 }}>
          Confirm booking
        </Typography>
        <Stack direction={{md:"row",xs:"column"}} spacing={0.5} mb={3}>
          <Typography fontSize={14}>
            Please enter your email to confirm booking for
          </Typography>
          <Box component="span" fontSize={14} fontWeight={600}>{`${
            bookingDetails.bookingTime
          } on ${formatDate(bookingDetails.bookingDate)}`}</Box>
        </Stack>
        <form onSubmit={handleBooking}>
          <TextField
            type="email"
            label="Enter your email"
            variant="outlined"
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              "& .MuiOutlinedInput-notchedOutline, &:hover .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "#F0F0F0",
                },
            }}
          />
          <Stack direction="row" spacing={1} mt={2}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              alignItems="flex-start"
            >
              Confirm
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
};

export default BookingModal;
