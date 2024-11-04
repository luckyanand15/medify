import React, { useState } from "react";
import Styles from "./NavBar.module.css";
import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
const NavBar = () => {
  const mobileSize = useMediaQuery("(max-width:900px)");
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <Box>
      <Container maxWidth="xl">
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          py={3}
          px={mobileSize ? 2:10}
        >
          <Link to="/">
            <img src={logo} alt="Medify" height={27} />
          </Link>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={4}
            alignItems={{ xs: "flex-start", md: "center" }}
            className={[Styles.navBarLinks, isMenuOpen && Styles.enabled]}
            pt={{xs:12, md:1}}
            pb={{xs:4, md: 1}}
            px={{xs:4}}
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
            {mobileSize && (
              <IconButton
                onClick={() => setMenuOpen(false)}
                sx={{ position: "absolute", top: 0, right:32, color:"#ffffff" }}
              >
                <CloseIcon />
              </IconButton>
            )}
          </Stack>
          {mobileSize && (
              <IconButton onClick={() => setMenuOpen(true)}>
                <MenuIcon />
              </IconButton>
            )}
        </Stack>
      </Container>
    </Box>
  );
};

export default NavBar;
