import { Button, Stack, TextField } from "@mui/material";
import React, { useMemo, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ bookings, setFilterBookings }) => {
  const [text, setText] = useState("");
  const filterList = useMemo(() => {
    if (!text.trim()) {
      return bookings;
    }
    return bookings.filter((item) =>
      item["Hospital Name"].toLowerCase().includes(text.trim().toLowerCase())
    );
  }, [text, bookings]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilterBookings(filterList);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Stack direction={{xs:"column",md:"row"}} spacing={2}>
        <TextField
          type="text"
          label="Search By Hospital"
          variant="outlined"
          value={text}
          onChange={(e) => setText(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-notchedOutline, &:hover .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "#F0F0F0",
              },
          }}
          fullWidth
        />
        <Button
          type="submit"
          variant="contained"
          size="large"
          startIcon={<SearchIcon />}
          sx={{ py: "15px", px: 8, flexShrink: 0 }}
        >
          Search
        </Button>
      </Stack>
    </form>
  );
};

export default SearchBar;
