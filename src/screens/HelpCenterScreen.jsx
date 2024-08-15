import { Container } from "@mui/material";
import CustomContent8 from "../components/Content/CustomContent8";
import PricingFaq from "../components/PricingScreen/PricingFaq";

const HelpCenterScreen = () => {
  return (
    <>
      <CustomContent8
        title={"We Are Here to deliver your data!"}
        bgBanner={"/imgs/helpCenterBanner.svg"}        
      />
      <Container>
        <PricingFaq />
      </Container>
    </>
  );
};

export default HelpCenterScreen;
