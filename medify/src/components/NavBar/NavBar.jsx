import React from "react";
import Styles from "./NavBar.module.css";
import { Box, Button, Container, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
const NavBar = () => {
  return (
    <div>
      <Container maxWidth="xl">
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          py={3}
          px={10}
        >
          <Link to="/">
            <img src={logo} alt="Medify" height={27} />
          </Link>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={4}
            alignItems={{ md: "center", xs: "flex-start" }}
            className={Styles.navBarLinks}
          >
            <Link to="/search">Find Doctors</Link>
            <Link to="/search">Hospitals</Link>
            <Link>Medicines</Link>
            <Link>Surgeries</Link>
            <Link>Software for Provider</Link>
            <Link>Facilities</Link>
            <Link to="/my-bookings">
              <Button variant="contained">My Bookings</Button>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
};

export default NavBar;
