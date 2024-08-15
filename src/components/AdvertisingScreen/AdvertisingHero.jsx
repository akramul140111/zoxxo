import {
  Grid,
  useTheme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Box from "@mui/material/Box";
import Lottie from "react-lottie";
import folderToFolder from "../../assets/animations/bussiness.json";
import { useTranslation } from "react-i18next";
import CustomButton from "../CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";
import routeLinks from "../../config/routeLinks";

const AdvertisingHero = () => {
  const { t } = useTranslation("tornado");
  const navigate = useNavigate();
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
              Present your brand to a huge community of gamers and more!
            </Typography>
            <Typography variant="body1" component="p" fontWeight={400} mb={2}>
              zoxxo offers companies on Upload- and Downloadpage an opportunity
              to present their brand to a huge community of gamers – which are
              main target group of zoxxo – and many more. Register and place now
              your ads!
            </Typography>
            <CustomButton onClick={() => navigate(`/${routeLinks.signUp}`)}>
              {" "}
              Register and run a campaign!
            </CustomButton>
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
              Present your brand to a huge community of gamers and more!
            </Typography>
            <Typography variant="h5" component="h5" fontWeight={600} mb={2}>
              zoxxo offers companies on Upload- and Downloadpage an opportunity
              to present their brand to a huge community of gamers – which are
              main target group of zoxxo – and many more. Register and place now
              your ads!
            </Typography>
            <CustomButton onClick={() => navigate(`/${routeLinks.signUp}`)}>
              {" "}
              Register and run a campaign!
            </CustomButton>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default AdvertisingHero;
