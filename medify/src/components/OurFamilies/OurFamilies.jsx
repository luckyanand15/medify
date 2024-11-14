import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
import familiesCard from "../../assets/families-card.png";

const OurFamilies = () => {
  return (
    <Box pt={4} sx={{ background: "linear-gradient(#E7F0FF, #E8F1FF)" }}>
      <Container>
        <Grid container alignItems="center" spacing={{ xs: 2, md: 10 }}>
          <Grid item size={{ xs: 12, md: 6 }}>
            <Typography fontWeight={600} color="primary.main">
              CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
            </Typography>
            <Typography
              variant="h2"
              fontSize={{ md: 48, xs: 28 }}
              fontWeight={600}
              color="#1B3C74"
            >
              Our Families
            </Typography>
            <Typography color="#77829D" lineHeight={1.8}>
              We will work with you to develop individualised care plans,
              including management of chronic diseases. If we cannot assist, we
              can provide referrals or advice about the type of practitioner you
              require. We treat all enquiries sensitively and in the strictest
              confidence.
            </Typography>
          </Grid>

          <Grid item size={{ xs: 12, md: 6 }}>
            <Box
            component="img"
            src={familiesCard}
            width={1}
            height="auto"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OurFamilies;
