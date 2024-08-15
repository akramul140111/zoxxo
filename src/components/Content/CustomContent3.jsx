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
import brand from "../../assets/animations/brandImpressionAnimation - 1715671670468.json";
import CustomButton from "../CustomButton/CustomButton";
import routeLinks from "../../config/routeLinks";
import { useNavigate } from "react-router-dom";

const CustomContent3 = () => {
  const { t } = useTranslation("home");
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";
  const isMatchMd = useMediaQuery(theme.breakpoints.down("md"));
  const reverseTextColor = darkMode ? "#fff" : "#000";
  const backgroundColor = darkMode ? "#0E1B25" : "none";
  const navigate = useNavigate();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: brand,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Grid
      container
      display="flex"
      justifyContent={"space-between"}
      sx={{ placeItems: "center", mb: 10 }}
    >
      {isMatchMd ? (
        <>
          <Grid item xs={12} md={6}>
            <Box maxWidth="500px" sx={{ m: "auto" }}>
              <Lottie options={defaultOptions} autoPlay loop width={"100%"} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} data-aos="fade-up">
            <Typography
              variant="h3"
              component="h3"
              fontSize={{ lg: 60 }}
              fontWeight={{ sx: 400, md: 500, lg: 700 }}
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
            <CustomButton
              onClick={() => navigate(`/${routeLinks.advertising}`)}
            >
              {" "}
              {t("advertise-with-us")}
            </CustomButton>
          </Grid>
        </>
      ) : (
        <>
          <Grid item xs={12} md={6} data-aos="fade-up">
            <Typography
              variant="h2"
              component="h2"
              sx={{
                color: reverseTextColor,
                fontSize: "60px",
                fontWeight: "700",
                marginBottom: "20px",
                "@media (max-width: 768px)": { fontSize: "32px" },
              }}
            >
              {t("brands-on-top-to-make-impression")}
            </Typography>
            <Typography
              variant="p"
              component="p"
              fontSize={{ lg: 16 }}
              fontWeight={{ md: 300, lg: 500 }}
              mb={3}
            >
              {t("make-noise-about-your-brand")}
            </Typography>
            <CustomButton
              onClick={() => navigate(`/${routeLinks.advertising}`)}
            >
              {" "}
              {t("advertise-with-us")}
            </CustomButton>
          </Grid>
          <Grid item xs={12} md={6} sx={{ mr: 0, pr: 0 }}>
            <Box sx={{ maxWidth: "500px", marginRight: 0 }}>
              <Lottie options={defaultOptions} autoPlay loop width={"100%"} />
            </Box>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default CustomContent3;
