import React from "react";
import { Link, Stack } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const FooterLinks = ({children}) => {
  return (
    <Link underline="none" color="#ffffff" fontWeight={300} fontSize={14}>
      <Stack direction="row" gap={0.5}>
        <KeyboardArrowRightIcon />
        {children}
      </Stack>
    </Link>
  );
};

export default FooterLinks;
