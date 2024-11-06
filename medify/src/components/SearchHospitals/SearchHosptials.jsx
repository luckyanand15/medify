import { Box, Button, InputAdornment, MenuItem, Select } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Styles from "./SearchHospitals.module.css";

const SearchHosptials = () => {
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        gap: 4,
        justifyContent: "space-between",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Select
        displayEmpty
        sx={{
          width: "100%",
          minWidth: 200,
          background: "#FAFBFE",
          borderRadius:"8px",
          color:"#ABB6C7",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#F0F0F0",
          },
        }}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
      >
        <MenuItem>State</MenuItem>
      </Select>
      <Select
        displayEmpty
        sx={{
          width: "100%",
          minWidth: 200,
          background: "#FAFBFE",
          borderColor: "#F0F0F0",
          borderRadius:"8px",
          color:"#ABB6C7",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#F0F0F0",
          },
        }}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
      >
        <MenuItem>City</MenuItem>
      </Select>
      <Button
        variant="contained"
        type="submit"
        size="large"
        startIcon={<SearchIcon />}
        sx={{ px: 8, py: "15px", flexShrink: 0 }}
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchHosptials;
