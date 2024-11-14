import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  InputAdornment,
  Stack,
} from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
import mobileImage from "../../assets/mobile-img.jpg";
import arrow from "../../assets/arrow.png";
import playStore from "../../assets/play-store.png";
import appStore from "../../assets/app-store.png";

const AppDownload = () => {
  return (
    <Box
      sx={{ background: "linear-gradient(#E7F0FF 100%, #E8F1FF 47%)", pt: 6 }}
    >
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item size={{ xs: 12, md: 5.5 }}>
            <Box component="img" src={mobileImage} width={1} height="auto" />
          </Grid>

          <Grid item size={{ xs: 12, md: 6.5 }}>
            <Box
              position="relative"
              pl={{ xs: "36px", md: "50px" }}
              mb={{ xs: 4, md: 0 }}
            >
              <Typography
                variant="h2"
                fontSize={{ md: 48, xs: 28 }}
                fontWeight={600}
                color="#1B3C74"
                mb={2}
              >
                Download the
                <br />
                <Box component="span" color="primary.main">
                  Medify{" "}
                </Box>
                App
              </Typography>

              <Box
                component="img"
                src={arrow}
                position="absolute"
                left={0}
                top={50}
                width={{ xs: 24, md: 40 }}
              />

              <Box mb={5}>
                <Typography fontWeight={600} mb={1}>
                  Get the link to download the app
                </Typography>
                <Box
                  component="form"
                  sx={{
                    display: "flex",
                    gap: 2,
                    flexDirection: { xs: "column", md: "row" },
                  }}
                >
                  <TextField
                    sx={{
                      flex: 1,
                      border: "1px solid #F0F0F0",
                      backgroundColor: "#FAFBFE",
                      borderRadius: "8px",
                      color: "#ABB6C7",
                      "& .MuiOutlinedInput-notchedOutline, &:hover .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                        {
                          borderColor: "#F0F0F0",
                        },
                    }}
                    placeholder="Enter phone number"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">+91</InputAdornment>
                      ),
                    }}
                    required
                  />
                  <Button variant="contained" size="large" type="submit">
                    Send SMS
                  </Button>
                </Box>
              </Box>
              <Stack
                  direction={{ xs: "column", md: "row" }}
                  spacing={{ xs: 1, md: 2 }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<img src={playStore} height={24} alt="playstore"/>}
                    sx={{
                      backgroundColor: "#333",
                      color: "#fff",
                      py: 1.5,
                      borderRadius: 1.5,
                    }}
                  >
                    Google Play
                  </Button>
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<img src={appStore} height={24} alt="appstore"/>}
                    sx={{
                      backgroundColor: "#333",
                      color: "#fff",
                      py: 1.5,
                      borderRadius: 1.5,
                    }}
                  >
                    App Store
                  </Button>
                </Stack>
            </Box>

          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AppDownload;
