import {
  Button,
  Container,
  Grid,
  Typography,
  useTheme,
  Card,
  CardContent,
  CardActionArea,
  Paper,
} from "@mui/material";
import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import HomeCard1 from "../HomeScreen/HomeCard1";

const HeroSection = () => {
  const { t } = useTranslation("home");
  const theme = useTheme();
  
  const darkMode = theme.palette.mode === "dark";
  const reverseTextColor = darkMode ? "#fff" : "#000";

  const bgBanner = darkMode ? "/imgs/dark-banner.png" : "/imgs/banner-img.png";

  return (
    <Grid
      container
      sx={{
        pt: {xs: "150px" , sm:"200px"},
        pb: { xs: "80px", sm: "200px" },
        backgroundImage: `url(${bgBanner})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center bottom",
        placeItems: "center"      
      }}
    >
      <Container>
        <Grid item md={1} sx={{ display: { xs: "none", md: "flex" } }} />
        <Grid
        data-aos="flip-up"
        item
          xs={12}
          md={10}
          lg={6}
          sx={{ px: { xs: 0, sm: 12, md: 20, lg: 10 } }}
        >
          <Typography
            variant="h4"
            fontSize={{ lg: "36px" }}
            fontWeight={"700"}
            color={reverseTextColor}
            textAlign={"center"}
            mb={"10px"}
          >
            {t("upload-your-data")}
          </Typography>
          <Typography
            variant="body1"
            fontSize={{ lg: "16px" }}
            fontWeight={"500"}
            color={reverseTextColor}
            textAlign={"center"}
            mb={{ xs: "30px", lg: "20px" }}
          >
            {t("deliver-your-data-fast-save-&-without-interference-of-others")}
          </Typography>

{/* ------------------ The Upload Card--------------------------- */}

          <HomeCard1 />
        </Grid>

        <Grid item md={1} lg={6} sx={{ display: { xs: "none", md: "flex" } }} />
      </Container>
    </Grid>
  );
};

export default HeroSection;
