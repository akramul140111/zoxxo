import Box from "@mui/material/Box";
import CustomContent7 from "../Content/CustomContent7";

const PrivacyPolicyHero = () => {
  const paragraph = [
    {
      id: 1,
      text: "We are very delighted that you have shown interest in our enterprise. Data protection is of a particularly high priority for the management of the Zoxxo – FZCO. The use of the Internet pages of the Zoxxo – FZCO is possible without any indication of personal data; however, if a data subject wants to use special enterprise services via our website, processing of personal data could become necessary. If the processing of personal data is necessary and there is no statutory basis for such processing, we generally obtain consent from the data subject.",
    },
    {
      id: 2,
      text: "We are very delighted that you have shown interest in our enterprise. Data protection is of a particularly high priority for the management of the Zoxxo – FZCO. The use of the Internet pages of the Zoxxo – FZCO is possible without any indication of personal data; however, if a data subject wants to use special enterprise services via our website, processing of personal data could become necessary. If the processing of personal data is necessary and there is no statutory basis for such processing, we generally obtain consent from the data subject. The processing of personal data, such as the name, address, e-mail address, or telephone number of a data subject shall always be in line with the General Data Protection Regulation (GDPR), and in accordance with the country-specific data protection regulations applicable to the Zoxxo – FZCO. By means of this data protection declaration, our enterprise would like to inform the general public of the nature, scope, and purpose of the personal data we collect, use and process. Furthermore, data subjects are informed, by means of this data protection declaration, of the rights to which they are entitled. As the controller, the Zoxxo – FZCO has implemented numerous technical and organizational measures to ensure the most complete protection of personal data processed through this website. However, Internet-based data transmissions may in principle have security gaps, so absolute protection may not be guaranteed. For this reason, every data subject is free to transfer personal data to us via alternative means, e.g. by telephone.",
    },
  ];
  return (
    <Box>
      <CustomContent7 title="Privacy policy" paragraph={paragraph} />
    </Box>
  );
};

export default PrivacyPolicyHero;
