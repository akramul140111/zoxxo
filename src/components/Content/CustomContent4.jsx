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

const CustomContent4 = () => {
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
      sx={{ placeItems: "center", mt: 10 }}
    >
      <Grid item xs={12} md={6} lg={4} sx={{ ml: 0, pl: 0 }}>
        <Box sx={lottieStyle}>
          <Lottie options={defaultOptions} autoPlay loop width="100%" />
        </Box>
      </Grid>
      <Grid item xs={12} md={6} lg={8} data-aos="flip-up">
        <Typography
          variant="h3"
          component="h3"
          fontSize={{ lg: 60 }}
          fontWeight={{ sx: 400, md: 500, lg: 700 }}
          textAlign={{ lg: "right", sm: "left" }}
          mb={"10px"}
        >
          {t("maximize-storage-minimize-expenses")}
        </Typography>
        <Typography
          textAlign={{ lg: "right", sm: "left" }}
          variant="p"
          component="p"
          fontSize={{ lg: 16 }}
          fontWeight={{ md: 300, lg: 500 }}
          mb={3}
        >
          {" "}
          {t("with-out-tornado-plan")}
        </Typography>
        <Box
          display={"flex"}
          justifyContent={{ lg: "flex-end", sm: "flex-start" }}
        >
          <CustomButton onClick={()=>navigate(`/${routeLinks.monetization}`)}> {t("monetization")}</CustomButton>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CustomContent4;
