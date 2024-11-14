import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import image from "../../assets/blog-card-image.png";
import rebecca from "../../assets/rebecca.png";
const BlogCard = () => {
  return (
    <Box border="1px solid rgba(0,0,0,0.1)" borderRadius={2}>
      <Box component="img" src={image} width={1} sx={{ maxWidth: "100%" }} />
      <Box p={2}>
        <Typography
          color="#77829D"
          fontWeight={500}
          mb={1}
          fontSize={{ xs: 12, md: 16 }}
        >
          Medical | March 31, 2022
        </Typography>
        <Typography
          variant="h3"
          fontSize={{ xs: 14, md: 18 }}
          fontWeight={400}
          lineHeight={1.2}
          color="#1B3C74"
          mb={2}
        >
          6 Tips To Protect Your Mental Health When You're Sick
        </Typography>
        <Stack direction="row" alignItems="center" spacing={1}>
            <Box component="img" src={rebecca} height={32} width={32}/>
            <Typography color='#1B3C74' fontSize={{ xs: 12, md: 16 }}>Rebecca Lee</Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default BlogCard;
