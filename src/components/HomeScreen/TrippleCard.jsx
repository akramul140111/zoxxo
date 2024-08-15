import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import HomeCard3 from "./HomeCard3";



const TrippleCard = () => {
  const serviceData = [
    {
      id: 1,
      title: "zoxxo",
      text: "per-TB-per-month",
      price: "10.99 USD",
      notice: "end-to-end-encryption",
      icon: "/imgs/service-icon1.png",
    },
    {
      id: 2,
      title: "dropbox",
      text: "per-TB-per-month",
      price: "10.99 USD",
      notice: "end-to-end-encryption",
      icon: "/imgs/service-icon2.png",
    },
    {
      id: 3,
      title: "google-drive",
      price: "10.99 USD",
      notice: "end-to-end-encryption",
      text: "per-TB-per-month",
      icon: "/imgs/service-icon3.png",
    },
  ];

  return (
    <Box sx={{ mt: 10, mb: 20 }}>
      <Grid container spacing={4}>
        {serviceData.map((data, index) => (
          <React.Fragment key={index}>
            <Grid
              item
              sm={2}
              sx={{ display: { xs: "none", sm: "flex", md: "none" } }}
            />
            <Grid item xs={12} sm={8} md={4} key={index}>
              {" "}
              <HomeCard3 data={data} />
            </Grid>
            <Grid
              item
              sm={2}
              sx={{ display: { xs: "none", sm: "flex", md: "none" } }}
            />
          </React.Fragment>
        ))}
      </Grid>
    </Box>
  );
};

export default TrippleCard;
