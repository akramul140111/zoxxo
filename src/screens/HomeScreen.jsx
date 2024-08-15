import CustomMeta from "../components/CustomMeta";
import { Container } from "@mui/material";
// import TrippleCard from "../components/HomeScreen/TrippleCard";
import CustomContent from "../components/Content/CustomContent";
import CustomContent3 from "../components/Content/CustomContent3";

import PopularService from "../components/HomeScreen/PopularService";
import HeroSection from "../components/HomeScreen/HeroSection";
import CustomContent4 from "../components/Content/CustomContent4";

const HomeScreen = () => {
  return (
    <>
      <CustomMeta title="Zoxxo" />
      {/* <HeroSec/> */}
      <HeroSection />
      <Container sx={{ mt: 16 }}>
        <PopularService />
        <CustomContent />
        <CustomContent4 />  
        <CustomContent3 />
        {/* <TrippleCard /> */}
      </Container>
    </>
  );
};

export default HomeScreen;
