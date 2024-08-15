// import React from "react";




import { Container, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";

import CustomMeta from "../components/CustomMeta";
import TrippleCard from "../components/HomeScreen/TrippleCard";
import { useTranslation } from "react-i18next";
import PricingHeroSec from "../components/PricingScreen/PricingHeroSec";
import PricingService from "../components/PricingScreen/PricingService";
import MobileServiceDetails from "../components/PricingScreen/MobileServiceDetails";
import PricingServiceDetails from "../components/PricingScreen/PricingServiceDetails";
import PricingFaq from "../components/PricingScreen/PricingFaq";

const PricingScreen = () => {
  const { t } = useTranslation("pricing");

  return (
    <>
      <CustomMeta title="Zoxxo Pricing" />
      <Container>
        <PricingHeroSec />
        <PricingService />
        <Box
          display={{ xs: "block", sm: "none" }}
          width={"288px"}
          margin={"auto"}
        >
          <MobileServiceDetails />
        </Box>
        <PricingServiceDetails />
        <Grid>
          <Typography
            variant="h2"
            component="h2"
            fontSize={{ lg: 60 }}
            textAlign={"center"}
            fontWeight={700}
            mb={1}
          >
            {t("want-to-save-more-money?")}
          </Typography>
          <Typography
            variant="p"
            component="p"
            fontSize={{ lg: 16 }}
            textAlign={"center"}
            mb={{xs: 5,lg: 10}}
          >
            {t("with-our-plan-pricing")}
          </Typography>
          <TrippleCard />
        </Grid>
        <PricingFaq />
      </Container>
    </>
  );
};

export default PricingScreen;
