import { Box, Card,Typography, useMediaQuery } from "@mui/material";
import ContentTitle from "./ContentTitle";
import LightLogo from "../../../assets/logos/logo-mobile light.png";
import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";

const DashboardManage = () => {
    const theme = useTheme();
    const darkMode = theme.palette.mode === "dark";
    const reverseTextColor = darkMode ? "#fff" : "#000";
    const bgColor = darkMode ? "#0E1B25" : "#fff";
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
 

  return (
    <>
      <ContentTitle title="Dashboard" />
     <Box sx={{ px: isLargeScreen ? 5 :0, py: 2, display: isLargeScreen ? 'flex' : 'block', gap:4}}>
     <Link  to="/nasim/dashboard/workspace" style={{ textDecoration: 'none' }}>
     <Card sx={{ borderRadius: 6, boxShadow: 3, px:16, py:6, background: bgColor }}>
      <Box sx={{ textAlign: "center" }}>
          <img height={100}  src={LightLogo} alt={"title"} />
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h4" component="div" mt={2} color={reverseTextColor}>
           MANAGE
          </Typography>
        </Box>
      </Card>
      </Link>
      <Link  to="/nasim/dashboard/advertisement" style={{ textDecoration: 'none' }}>
     <Card sx={{ borderRadius: 6, boxShadow: 3, px:16, py:6, mt: !isLargeScreen && 5,  background: bgColor }}>
      <Box sx={{ textAlign: "center" }}>
          <img height={100}  src={LightLogo} alt={"title"} />
        </Box>
        <Box sx={{ textAlign: "center" }}>
        <Typography variant="h4" component="div" mt={2} color={reverseTextColor}>
          ADS
          </Typography>
        </Box>
      </Card>
      </Link>
     </Box>
    </>
  );
};

export default DashboardManage;
