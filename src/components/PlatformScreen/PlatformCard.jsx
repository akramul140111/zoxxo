import React from "react";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { useTheme } from "@mui/system";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";

const PlatformCard = ({ data }) => {
  const { t } = useTranslation("home");
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";
  const reverseTextColor = darkMode ? "#fff" : "#000";
  const backgroundColor = darkMode ? "#0E1B25" : "#FFF";
  const backgroundColor2 = darkMode ? "#183042" : "#F00";

  return (
    <Card
      data-aos="flip-up"
      sx={{
        background: backgroundColor,
        paddingY: { xs: 5, lg: 7 },
        width: { xs: "300px", sm: "340px", md: "350px", lg: "390px" },
        height: { xs: "370px", md: "350px", lg: "350px" },
        transition: "transform 0.3s",
        "&:hover": {
          transform: "scale(1.05)", // Scale up on hover
        },
      }}
    >
      <Box
        width={130}
        height={130}
        borderRadius={"50%"}
        mx={"auto"}
        bgcolor={backgroundColor2}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <CardMedia
          component="img"
          src={data?.img}
          alt="service image"
          style={{ width: "45px", height: "45px" }}
        />
      </Box>

      <CardContent>
        <Typography
          variant="h4"
          component="h4"
          textAlign={"center"}
          color={reverseTextColor}
          fontSize={{ md: 18, lg: 22 }}
          fontWeight={500}
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
          fontSize={{ lg: 16 }}
        >
          {t(data?.text)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PlatformCard;
