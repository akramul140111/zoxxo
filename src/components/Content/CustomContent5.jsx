import {
  Grid,
  useTheme,
  Typography,
  Button,
  useMediaQuery,
} from "@mui/material";
import Box from "@mui/material/Box";
import Lottie from "react-lottie";
import folderToFolder from "../../assets/animations/bussiness.json";
import { useTranslation } from "react-i18next";

const CustomContent5 = () => {
  const { t } = useTranslation("tornado");
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";
  const isMatchMd = useMediaQuery(theme.breakpoints.down("md"));
  const bgColor = darkMode ? "#0E1B25" : "#ff0000";

  const lottieStyle = {
    maxWidth: "300px",
    margin: "auto",
  };

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
      justifyContent="space-between"
      alignItems="center"
      mt={{ xs: 14, sm: 14, md: 24 }}
      mb={10}
    >
      {!isMatchMd ? (
        <>
          {/* Left Content */}
          <Grid item xs={12} md={6} lg={6} data-aos="flip-up">
            <Typography variant="h4" component="h4" fontWeight={700} mb={4}>
              {t("business")} <br />
              {t("go-faster-and-faster")}
            </Typography>
            <Typography variant="h5" component="h5" fontWeight={600} mb={2}>
              {t("why-should-i-choose-tornado")}
            </Typography>
            <Typography
              variant="body1"
              fontSize={{ lg: 16 }}
              fontWeight={500}
              mb={3}
            >
              {t("why-should-i-choose-tornado-paragraph")}
            </Typography>
            <Button
              variant="contained"
              size="large"
              mt={4}
              sx={{ textTransform: "capitalize", bgcolor: bgColor }}
            >
              {t("register-now-for-free")}
            </Button>
          </Grid>
          {/* Right Content */}
          <Grid item xs={12} md={6} lg={6} sx={{ ml: 0, pl: 0 }}>
            <Box sx={lottieStyle}>
              <Lottie options={defaultOptions} autoPlay loop width="100%" />
            </Box>
          </Grid>
        </>
      ) : (
        <>
          {/* mobile view Content */}
          <Grid item xs={12} md={6} lg={6} sx={{ ml: 0, pl: 0 }}>
            <Box sx={lottieStyle}>
              <Lottie options={defaultOptions} autoPlay loop width="100%" />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={6} data-aos="flip-up">
            <Typography variant="h4" component="h4" fontWeight={700} mb={4}>
              {t("business")} <br />
              {t("go-faster-and-faster")}
            </Typography>
            <Typography variant="h5" component="h5" fontWeight={600} mb={2}>
              {t("why-should-i-choose-tornado")}
            </Typography>
            <Typography
              variant="body1"
              fontSize={{ lg: 16 }}
              fontWeight={500}
              mb={3}
            >
              {t("why-should-i-choose-tornado-paragraph")}
            </Typography>
            <Button
              variant="contained"
              size="large"
              mt={4}
              sx={{ textTransform: "capitalize", bgcolor: bgColor }}
            >
              {t("register-now-for-free")}
            </Button>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default CustomContent5;
