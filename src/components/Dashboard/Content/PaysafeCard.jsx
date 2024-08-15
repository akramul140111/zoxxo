import { Box, Card, Typography } from "@mui/material";
import LightLogo from "../../../assets/logos/logo-mobile light.png";
import { useTheme } from "@emotion/react";

const PaysafeCard = () => {
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";
  const bgColor = darkMode ? "#0E1B25" : "#fff";

    return (
        <Card sx={{ borderRadius: 6, boxShadow: 3, py: 6, background: bgColor }}>
              <Box sx={{ textAlign: "center" }}>
                <img height={100} src={LightLogo} alt={"title"} />
              </Box>
              <Box sx={{ px:3 }}>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ mt: 2, fontSize: "20px", fontWeight: 600 }}
                >
                  Paysafe is coming
                </Typography>
                <Typography
                  component="p"
                  sx={{ fontSize: "20px", fontWeight: 400 }}
                >
                  We are working on Paysafe Payment Method and will launch it very soon. Stay tuned!
                </Typography>
              </Box>
            </Card>
    );
};

export default PaysafeCard;