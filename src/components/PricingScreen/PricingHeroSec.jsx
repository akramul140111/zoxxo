import {  Typography, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import { useTranslation } from "react-i18next";

const PricingHeroSec = () => {
  const { t } = useTranslation("pricing");
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";
  const reverseTextColor = darkMode ? "#fff" : "#000";

  return (
    <Box mb={{ xs: "40px", sm: "100px" }} mt={{ xs: "100px", sm: "150px" }}>
      <Typography
        // fontSize={{xs: "32px", lg: "60px"}}
        variant="h2"
        component="h2"
        color={reverseTextColor}
        textAlign={"center"}
        fontWeight={"700"}
        fontSize={{ lg: "60px" }}
      >
        {t("your-mission-is-our-plan")}
      </Typography>
      <Typography
        variant="p"
        component="p"
        color={reverseTextColor}
        fontSize={{ lg: "16px" }}
        textAlign={"center"}
        mt={"5px"}
      >
        {t("simple-pricing-for-individuals-and-teams")}
      </Typography>
    </Box>
  );
};

export default PricingHeroSec;
