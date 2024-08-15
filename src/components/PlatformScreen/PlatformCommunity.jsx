import {
    Grid,
    useTheme,
    Typography,
    Button,
    useMediaQuery,
  } from "@mui/material";
  import Box from "@mui/material/Box";
  import React from "react";
  import Lottie from "react-lottie";
  import folderToFolder from "../../assets/animations/MonitizationAnimation - 1716198651615.json";
  import { useTranslation } from "react-i18next";
  import CustomButton from "../CustomButton/CustomButton";
  import routeLinks from "../../config/routeLinks";
  import { useNavigate } from "react-router-dom";
  
  const PlatformCommunity = () => {
    const { t } = useTranslation("home");
    const theme = useTheme();
    const darkMode = theme.palette.mode === "dark";
    const isMatchMd = useMediaQuery(theme.breakpoints.down("md"));
    const reverseTextColor = darkMode ? "#fff" : "#000";
    const backgroundColor = darkMode ? "#0E1B25" : "none";
    const navigate = useNavigate();
  
    const lottieStyle = isMatchMd
      ? { maxWidth: "500px", margin: "auto" }
      : { maxWidth: "500px", marginLeft: 0 };
  
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: folderToFolder,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
  
    return (
      <Grid
        container
        display="flex"
        justifyContent={"space-between"}
        sx={{ placeItems: "center", my: 10 }}
      >
        <Grid item xs={12} md={6} lg={6} sx={{ ml: 0, pl: 0 }}>
          <Box sx={lottieStyle}>
            <Lottie options={defaultOptions} autoPlay loop width="100%" />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={6} data-aos="flip-up">
          <Typography
            variant="h4"
            component="h4"
            fontSize={{ lg: 36 }}
            fontWeight={500}           
            mb={1}
          >
           Present  your Brand to a huge community of Gamers!
          </Typography>
          <ul>
            <li>Place your Ads on up- or download screen</li>
            <li>Advertisement conversion analytics</li>
            <li>Automation of sales/marketing</li>
          </ul>
            <CustomButton> {t("Learn more")}</CustomButton>
        </Grid>
      </Grid>
    );
  };
  
  export default PlatformCommunity;
  