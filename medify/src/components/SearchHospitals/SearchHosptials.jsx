import { Box, Button, InputAdornment, MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SearchHosptials = () => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [formData, setFormData] = useState({
    state: "",
    city: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const resp = await axios.get(
          "https://meddata-backend.onrender.com/states"
        );
        setStates(resp.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchStates();
  }, []);

  useEffect(()=>{
    const fetchCities = async ()=>{
      setCities([]);
      setFormData((prev)=>({...prev,city:""}));
      try{
        const resp = await axios.get(`https://meddata-backend.onrender.com/cities/${formData.state}`)
        setCities(resp.data);
      }catch(err){
        console.log(err)
      }
    }
    fetchCities();
  },[formData.state])

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        gap: 4,
        justifyContent: "space-between",
        flexDirection: { xs: "column", md: "row" },
      }}
      mb={10}
    >
      <Select
        displayEmpty
        required
        id="state"
        name="state"
        value={formData.state}
        onChange={handleChange}
        sx={{
          width: "100%",
          minWidth: 200,
          background: "#FAFBFE",
          borderRadius: "8px",
          color: "#ABB6C7",
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
        <MenuItem disabled selected value="">
          State
        </MenuItem>
        {states.map((state) => {
          return <MenuItem key={state} value={state}>{state}</MenuItem>;
        })}
      </Select>

      <Select
        displayEmpty
        required
        id="city"
        name="city"
        value={formData.city}
        onChange={handleChange}
        sx={{
          width: "100%",
          minWidth: 200,
          background: "#FAFBFE",
          borderColor: "#F0F0F0",
          borderRadius: "8px",
          color: "#ABB6C7",
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
        <MenuItem disabled selected value="">City</MenuItem>
        {cities.map((city) => {
          return <MenuItem key={city} value={city}>{city}</MenuItem>;
        })}
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
