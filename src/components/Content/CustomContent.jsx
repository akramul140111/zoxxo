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
import animationData from "../../assets/animations/fileTransferAnimation - 1715662422376";
import { useTranslation } from "react-i18next";
import CustomButton from "../CustomButton/CustomButton";
import useAuth from "../../hooks/useAuth";

const CustomContent = () => {
  const { user } = useAuth();
  const { t } = useTranslation("home");
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";
  const isMatchMd = useMediaQuery(theme.breakpoints.down("md"));
  const reverseTextColor = darkMode ? "#fff" : "#000";
  const backgroundColor = darkMode ? "#0E1B25" : "none";

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Grid
      container
      display="flex"
      justifyContent={"space-between"}
      sx={{ placeItems: "center" }}
    >
      {isMatchMd ? (
        <>
          <Grid item xs={12} md={6} lg={5}>
            <Box sx={{ maxWidth: "500px", m: "auto" }}>
              <Lottie options={defaultOptions} autoPlay loop width={"100%"} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={7} data-aos="flip-down">
            <Typography
              variant="h3"
              component="h3"
              fontSize={{ lg: 60 }}
              fontWeight={700}
              color={reverseTextColor}
              mb={3}
            >
              {t("we-dont-transfer")}
            </Typography>
            <Typography
              variant="p"
              component="p"
              fontSize={{ lg: 16 }}
              fontWeight={{ md: 300, lg: 500 }}
              mb={3}
            >
              {" "}
              {t("zoxxo-do-not-focus-on")}
            </Typography>
            {!user && <CustomButton>{t("register-now-for-free")}</CustomButton>}
          </Grid>
        </>
      ) : (
        <>
          <Grid item xs={12} md={6} lg={7} data-aos="flip-down">
            <Typography
              variant="h2"
              component="h2"
              fontSize={{ xs: 32, sm: 32, lg: 60 }}
              fontWeight={700}
              mb={3}
              color={reverseTextColor}
            >
              {t("we-dont-transfer")}
            </Typography>
            <Typography
              variant="p"
              component="p"
              fontSize={{ lg: 16 }}
              fontWeight={{ md: 300, lg: 500 }}
              mb={3}
            >
              {" "}
              {t("zoxxo-do-not-focus-on")}
            </Typography>
            {!user && <CustomButton>{t("register-now-for-free")}</CustomButton>}
          </Grid>
          <Grid item xs={12} md={6} lg={5} sx={{ mr: 0, pr: 0 }}>
            <Box sx={{ maxWidth: "500px", marginRight: 0 }}>
              <Lottie options={defaultOptions} autoPlay loop width={"100%"} />
            </Box>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default CustomContent;
