import {
  Box,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
import patientCaring from "../../assets/patinet-caring.png";
import tick from "../../assets/tick.png";

const PatientCaring = () => {
  return (
    <Box py={6} sx={{ background: "linear-gradient(#E7F0FF, #E8F1FF)" }}>
      <Container>
        <Grid container spacing={6} alignItems="center">
          <Grid item size={{ xs: 12, md: 6 }}>
            <Box
              component="img"
              src={patientCaring}
              width={1}
              sx={{ maxWidth: "100%" }}
            />
          </Grid>

          <Grid item size={{ xs: 12, md: 6 }}>
            <Typography fontWeight={600} color="primary.main">
              HELPING PATIENTS FROM AROUND THE GLOBE!!
            </Typography>
            <Typography
              variant="h2"
              fontSize={{ md: 48, xs: 28 }}
              fontWeight={600}
              color="#1B3C74"
            >
              Patient{" "}
              <Box component="span" color="primary.main">
                Caring
              </Box>
            </Typography>
            <Typography lineHeight={1.8} color="#77829D">
              Our goal is to deliver quality of care in a courteous, respectful,
              and compassionate manner. We hope you will allow us to care for
              you and strive to be the first and best choice for healthcare.
            </Typography>
            <List>
            <ListItem>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <Box component="img" src={tick} height={22} width={22} />
                </ListItemIcon>
                <ListItemText
                  primary="Stay Updated About Your Health"
                  primaryTypographyProps={{fontSize: { xs: 14, md: 18 }, fontWeight: 400,color: "#1B3C74",}}
                />
              </ListItem>

              <ListItem>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <Box component="img" src={tick} height={22} width={22} />
                </ListItemIcon>
                <ListItemText
                  primary="Check Your Results Online"
                  primaryTypographyProps={{fontSize: { xs: 14, md: 18 }, fontWeight: 400,color: "#1B3C74",}}
                />
              </ListItem>

              <ListItem>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <Box component="img" src={tick} height={22} width={22} />
                </ListItemIcon>
                <ListItemText
                  primary="Manage Your Appointments"
                  primaryTypographyProps={{fontSize: { xs: 14, md: 18 }, fontWeight: 400,color: "#1B3C74",}}
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PatientCaring;
