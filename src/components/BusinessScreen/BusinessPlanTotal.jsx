import {
  Grid,
  useMediaQuery,
  useTheme,
  Card,
  Typography,
  Button,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import BusinessCardTable from "./BusinessCardTable";
import { Link, redirect, useNavigate } from "react-router-dom";
import CustomButton from "../CustomButton/CustomButton";
import routeLinks from "../../config/routeLinks";
import useAuth from "../../hooks/useAuth";

const BusinessPlanTotal = ({pricesData, switchValue }) => {
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";
  const { t } = useTranslation("tornado");
  const isMatchMd = useMediaQuery(theme.breakpoints.down("md"));
  const reverseTextColor = darkMode ? "#000" : "#fff";
  const reverseTextColor2 = darkMode ? "#fff" : "#000";
  const bgColor = darkMode ? "#0E1B25" : "#fff";
  const bgColor2 = darkMode ? "#183042" : theme.palette.primary.main;
  const { user } = useAuth()
  const navigate = useNavigate();


  const onClickButton =async () => {
    if(!user){
      console.log('redi')
      return navigate('/sign-in?redirect=business')
    }
  }

  return (
    <Grid item xs={12} md={5} sx={{ width: "100%" }} data-aos="zoom-in">
      <Card
        sx={{
          color: reverseTextColor,
          backgroundColor: bgColor,
          height: { xs: "100%", md: 550, lg: 540 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          variant={"h5"}
          component="h5"
          fontSize={{ lg: 24 }}
          fontWeight={{ xs: 400, md: 500, lg: 600 }}
          padding={2}
          color={"#fff"}
          textAlign={"center"}
          bgcolor={bgColor2}
          borderRadius={isMatchMd ? "none" : "5px"}
          margin={isMatchMd ? "0" : "15px"}
        >
          {t("your-new-plan")}
        </Typography>
        <BusinessCardTable pricesData={pricesData} data={switchValue ? 'monthly' : 'yearly'} />
        <Grid
          container
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <Typography
              variant={isMatchMd ? "h5" : "h4"}
              component="h4"
              fontSize={{ md: 16, lg: 20 }}
              fontWeight={{ xs: 400, md: 400, lg: 600 }}
              color={reverseTextColor2}
              px={3}
              mt={2}
            >
              {t("total")}
            </Typography>
            <Typography
              variant={isMatchMd ? "h5" : "h4"}
              component="h4"
              fontSize={{ md: 16, lg: 20  }}
              fontWeight={{ xs: 400, md: 400, lg: 500 }}
              color={reverseTextColor2}
              sx={{
                padding: "5px 0px 20px 25px",
              }}
            >
            {`$ ${pricesData.total.toFixed(2)}`}
            </Typography>
          </Grid>
          <Grid item pr={2}>
          <CustomButton
              onClick={() => onClickButton()}
            >
              {" "}
              {t("continue-with-this-plan")}
            </CustomButton>
            {/* <Button
              variant="contained"
              component={Link}
              to="/sign-in"
              size="large"
              sx={{
                marginRight: "12px",
                fontSize: isMatchMd ? "12px" : "14px",
                backgroundColor: bgColor2,
              }}
            >
              {t("continue-with-this-plan")}
            </Button> */}
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default BusinessPlanTotal;
