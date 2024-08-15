import React from "react";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { useTheme } from "@mui/system";
import { useTranslation } from "react-i18next";

const HomeCard2 = ({ data }) => {
  const { t } = useTranslation("home");
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";
  const reverseTextColor = darkMode ? "#fff" : "#000";
  const backgroundColor = darkMode ? "#0E1B25" : "#FFF";

  return (
    <Card
    data-aos="flip-up"
      sx={{
        background: backgroundColor,
        paddingTop: "25px",
        height: { xs: "250px", md: "230px", lg: "250px" },
        width: { xs: "270px", sm: "275px", md: "220px", lg: "270px" },
        transition: "transform 0.3s",
        "&:hover": {
          transform: "scale(1.08)", // Scale up on hover
        },
      }}
    >
      <CardMedia
        component="img"
        src={data?.img}
        alt="service image"
        sx={{ width: "auto", height: "auto", mx: "auto" }} // Center the image horizontally
      />
      <CardContent>
        <Typography
          variant="h4"
          component="h4"
          textAlign={"center"}
          color={reverseTextColor}
          fontSize={{ xs: "18px", lg: "22px" }}
          fontWeight={700}
          mt={"15px"}
          mb={"10px"}
        >
          {t(data?.title)}
        </Typography>
        <Typography
          textAlign={"center"}
          variant="body1"
          color={reverseTextColor}
          padding={{ md: "0px 10px", lg: "0px 20px" }}
          fontWeight={"400"}
          fontSize={{ xs: "16px", lg: "18px" }}
        >
          {t(data?.text)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default HomeCard2;
