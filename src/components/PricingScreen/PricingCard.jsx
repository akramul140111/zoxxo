import {
  Grid,
  Button,
  Typography,
  useTheme,
  Card,
  CardContent,
} from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import { useTranslation } from "react-i18next";
import btnDark from "../../assets/icons/dark_check_ring_duotone.png"
import btnlight from "../../assets/icons/check_ring_duotone.png"
import useAuth from "../../hooks/useAuth";

const PricingCard = ({ data }) => {
  const { t } = useTranslation("pricing");
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";
  const reverseTextColor = darkMode ? "#fff" : "#000";
  const backgroundColor = darkMode ? "#0E1B25" : "#FFF";
  const cardBtnBackground = darkMode ? "#183042" : "#FF0000";
  const btnSrc = darkMode ? btnDark : btnlight;
  const hoverText = darkMode ? "#ACACAC" : "#ff0000";
  const { user} = useAuth();
  
  return (
    <Card
    data-aos="zoom-in-up"
      sx={{
        background: backgroundColor,
        p: { xs: "15px", md: "20px", lg: "40px" },
        width: { xs: "280px", sm: "350px", md: "100%", lg: "350px" },
        height: { xs: "415px", sm: "max-content", md: "420px", lg: "525px" },
        m: { xs: "auto", sm: "auto", md: " left" },
        pb: {sm: "0px"}
      }}
    >
      <CardContent sx={{ p: "0px" }}>
        <Typography
          variant="h4"
          component="h4"
          fontSize={{ xs: "24px", sm: "20px", lg: "32px" }}
          fontWeight={"900"}
          color={reverseTextColor}
        >
          $ {t(data?.price)}
          <Typography
            component="span"
            fontSize={{ sx: "14px", sm: "10px", md: "16px" }}
            fontWeight={"400"}
          >
            /{t("month")}
          </Typography>
          {data?.previewPrice && (
            <Typography
              component="span"
              fontSize={{ sx: "14px", sm: "10px", md: "16px" }}
              color={hoverText}
              ml={"5px"}
              textDecoration={"line-through"}
            >
              $ {t(data?.previewPrice)}
            </Typography>
          )}
        </Typography>
        <Typography
          variant="h5"
          component="h5"
          fontSize={{ xs: "16px", sm: "14px", md: "20px" }}
          color={reverseTextColor}
          mt={{ xs: "30px", sm: "30px", lg: "50px" }}
          fontWeight={"600"}
        >
          {t(data?.title)}
        </Typography>
        <Typography variant="body1" fontSize={{xs: "16px", sm: "14px", md: "16px"}} mt={"20px"} component="p">
          {t(data?.text)}
        </Typography>
        <Grid
          container
          spacing={1}
          my={{ xs: "30px", sm: "30px", lg: "50px" }}
          borderBottom={`1px solid ${reverseTextColor}`}
        ></Grid>
        <Grid container spacing={1} gap={"5px"} alignItems={"center"}>
          <Grid item>
          <img src={btnSrc} alt="icon" />
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              component="p"
              color={reverseTextColor}
              fontSize={"16px"}
            >
              {t(data?.file)}
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={1}
          gap={"5px"}
          alignItems={"center"}
          my={"5px"}
        >
          <Grid item>
            <img src={btnSrc} alt="icon" />
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              component="p"
              color={reverseTextColor}
              fontSize={"16px"}
            >
              {t(data?.storage)}
            </Typography>
          </Grid>
        </Grid>
        <Typography
          variant="body1"
          component="p"
          color={"#F00"}
          fontSize={{xs: "16px", sm: "14px", md: "16px"}}
          fontWeight={"600"}
          mt={"15px"}
        >
          {t(data?.notice)}
        </Typography>
        <Button
          variant="contained"
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            mt: "20px",
            textTransform: "capitalize",
            fontSize: {xs: "16px", sm: "12px", md: "16px"},
            bgcolor: cardBtnBackground,
            "&:hover": {
              bgcolor: darkMode ? "#102c40" : "#d40000",
            },
          }}
        >
        {!user ? t(data?.btnText) : t(data?.updateBtn)}     
          <EastIcon sx={{ color: "#FFFFFF", fontSize: "20px" }} />
        </Button>
      </CardContent>
    </Card>
  );
};

export default PricingCard;
