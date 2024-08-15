import React from "react";
import UnderMaintenance from "../components/under-maintenance/UnderMaintenance";
import CustomContent8 from "../components/Content/CustomContent8";
import PlatformCard from "../components/PlatformScreen/PlatformCard";
import { Container, Grid, Typography, useTheme } from "@mui/material";
import PlatformCommunity from "../components/PlatformScreen/PlatformCommunity";

const popularServiceData = [
  {
    id: 1,
    title: "Upload your data",
    text: "zoxxo is a modern platform to upload your data anonymus, secure and fast.",
    img: "/imgs/platformIcon1.svg",
  },
  {
    id: 2,
    title: "Share with others! ",
    text: "Share your uploaded data and ideas with your friends, family and others!",
    img: "/imgs/platformIcon2.svg",
  },
  {
    id: 3,
    title: "Manage your uploads ",
    text: "zoxxo Manage provides an easy way to manage your uploads in Workspaces. ",
    img: "/imgs/platformIcon3.svg",
  },
];

const PlatformScreen = () => {
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";
  const reverseTextColor = darkMode ? "#fff" : "#000";
  return (
    <>
      <CustomContent8
        title={"Hello World We are here to deliver!"}
        bgBanner={"/imgs/platformBanner.svg"}
        btnText="Read article"
        btnLink="zoxxo-space/platform/read-article"
      />
      <Container>
        <Typography
          variant="h2"
          component="h2"
          textAlign={"center"}
          mb={3}
          fontSize={{ lg: 64 }}
          fontWeight={700}
          color={reverseTextColor}
        >
          We {"don't"} transfer, we deliver!
        </Typography>
        <Grid
          item
          container
          spacing={{ xs: 2, sm: 4, md: 1, lg: 2 }}
          sx={{ placeItems: "center", placeContent: "center", mt: 10 }}
        >
          {popularServiceData?.map((item) => (
            <Grid
              item
              xs={11}
              sm={6}
              md={4}
              lg={4}
              key={item?.id}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <PlatformCard data={item} />
            </Grid>
          ))}
        </Grid>
        <PlatformCommunity />
      </Container>
    </>
  );
};

export default PlatformScreen;
