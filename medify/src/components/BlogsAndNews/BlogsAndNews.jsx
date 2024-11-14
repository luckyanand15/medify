import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
import BlogCard from "./BlogCard";

const BlogsAndNews = () => {
  return (
    <Box py={6}>
      <Container>
        <Typography color="primary.main" textAlign="center" fontWeight={600}>
          Blogs & News
        </Typography>
        <Typography
          textAlign="center"
          variant="h2"
          mb={2}
          fontSize={{ md: 48, xs: 28 }}
          fontWeight={600}
          color="#1B3C74"
        >
          Read Our Latest News
        </Typography>
        <Grid container spacing={4}>
          <Grid item size={{ xs: 12, md: 4 }}>
            <BlogCard />
          </Grid>
          <Grid item size={{ xs: 12, md: 4 }}>
            <BlogCard />
          </Grid>
          <Grid item size={{ xs: 12, md: 4 }}>
            <BlogCard />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BlogsAndNews;
