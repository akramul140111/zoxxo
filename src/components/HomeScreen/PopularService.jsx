import { Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import TrippleCard from "./TrippleCard";
import HomeCard1 from "./HomeCard1";
import HomeCard2 from "./HomeCard2";
const popularServiceData = [
  {
    id: 1,
    title: "anonymous",
    text: "from-a-to-z",
    img: "/imgs/popular-services-icon1.png",
  },
  {
    id: 2,
    title: "secure",
    text: "every-nano-byte-is-encrypted",
    img: "/imgs/popular-services-icon4.png",
  },
  {
    id: 3,
    title: "fast",
    text: "you-will-not-feel-the-speed",
    img: "/imgs/popular-services-icon2.png",
  },
  {
    id: 4,
    title: "unlimited",
    text: "more-data-more-power",
    img: "/imgs/popular-services-icon3.png",
  },
];

const PopularService = () => {
  const { t } = useTranslation("home");
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";
  const reverseTextColor = darkMode ? "#fff" : "#000";
  const backgroundColor = darkMode ? "#0E1B25" : "#FFF";
  const cardBtnBackground = darkMode ? "#183042" : "#FF0000";

  return (
    <Grid container sx={{ my: 10 }}>
      <Grid
        item
        container
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        xs={12}
        sx={{ mb: 3 }}
      >
        <Grid item container md={9} lg={12}>
          <Typography
            variant="h3"
            component="h3"
            fontSize={{ lg: "60px" }}
            fontWeight={"700"}
            mb={"20px"}
            color={reverseTextColor}
            textAlign={"center"}
          >
            {t("centralize-file-storage-everything-in-one-location")}
          </Typography>
        </Grid>
        <Grid item container md={9} lg={12}>
          <Typography
            variant="p"
            component="p"
            fontSize={{ lg: "16px" }}
            textAlign={"center"}
          >
            {t("seamlessly-integrated-into-one-user-friendly-platform")}
          </Typography>
        </Grid>
      </Grid>
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
            md={3}
            lg={3}
            key={item?.id}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <HomeCard2 data={item} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default PopularService;
