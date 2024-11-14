import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
import faqBanner from "../../assets/faq-banner.jpg";
import CustomAccordion from "./CustomAccordion";

const FAQs = () => {
  const data = [
    {
      question: "Why choose our medical for your family?",
      answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "Why we are different from others?",
      answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "Trusted & experience senior care & love",
      answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "How to get appointment for emergency cases?",
      answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
  ];
  return (
    <Box py={4}>
      <Container maxWidth="xl">
        <Typography fontWeight={600} textAlign="center" color="primary.main">
          Get Your Answer
        </Typography>
        <Typography
          variant="h2"
          fontSize={{ md: 48, xs: 28 }}
          fontWeight={600}
          color="#1B3C74"
          textAlign="center"
          mb={2}
        >
          Frequently Asked Questions
        </Typography>
        <Grid container alignItems="center" spacing={5}>
          <Grid item size={{ md: 6, xs: 12 }}>
            <Box component="img" src={faqBanner} width={1} height="auto" sx={{maxWidth:"100%"}}/>
          </Grid>
          <Grid item size={{ md: 6, xs: 12 }}>
            <Box maxWidth={450}>
            <CustomAccordion data={data} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FAQs;
