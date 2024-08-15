import { Container, Grid, Typography, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import CustomButton from "../CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";

const CustomContent8 = ({ title, bgBanner, btnText , btnLink}) => {
//   const theme = useTheme();
//   const darkMode = theme.palette.mode === "dark";
//   const reverseTextColor = darkMode ? "#000" : "#fff";
    const navigate = useNavigate();
  return (
    <Box
      mt={{ xs: 16, sm: 16, md: 20, lg: 22 }}
      mb={{ xs: 5, lg: 10 }}
      py={{ xs: 5, lg: 10 }}
      sx={{
        backgroundImage: `url(${bgBanner})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center bottom",
        placeItems: "center",
      }}
    >
      <Container>
        <Grid container spacing={2}>
          <Grid xs={12}>
            <Typography
              variant="h2"
              component="h2"
              textAlign={"center"}
              mb={1}
              fontSize={{ lg: 64 }}
              fontWeight={700}
              color={"#fff"}
              width={{ sx: "100%", lg: 650 }}
              mx={"auto"}
            >
              {title}
            </Typography>
            {btnText && (
              <Box display={"flex"} justifyContent={"center"} mt={3}>
                <CustomButton  onClick={() => navigate(`/${btnLink}`)} sx={{ backgroundColor: "#fff !important" }}>
                  {btnText}
                </CustomButton>
              </Box>
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CustomContent8;
