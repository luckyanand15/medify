import { Box, Typography } from "@mui/material";
import React from "react";

export const Header = () => {
  return (
    <Box bgcolor={"primary.main"} p={1}>
      <Typography fontSize={14} textAlign={"center"} color={"#ffffff"}>
        The health and well-being of our patients and their health care team
        will always be our priority, so we follow the best practices for
        cleanliness.
      </Typography>
    </Box>
  );
};
