import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useLanguage } from "../../i18n";
import LanguageModalContent from "../Common/LanguageModalContent";

export default function LanguageModal() {
  const { language: currentLanguage } = useLanguage("en");
  const theme = useTheme();
  const tabTextColor = theme.palette.textColor.main;

  const [isLanguageModalOpen, setLanguageModalOpen] = React.useState(false);

  const handleOpenLanguageModal = () => {
    setLanguageModalOpen(true);
  };

  const handleCloseLanguageModal = () => {
    setLanguageModalOpen(false);
  };

  const handleLanguageChange = (lang) => {
    console.log(`Language changed to: ${lang}`);
    handleCloseLanguageModal();
  };

  return (
    <>
      <Box display={"flex"} sx={{ cursor: "pointer" }} onClick={handleOpenLanguageModal}>
        <LanguageOutlinedIcon sx={{ color: tabTextColor }} />{" "}
        <Typography
          sx={{
            color: tabTextColor,
            fontWeight: "700",
            marginLeft: "5px",
            fontSize: "16px",
            textTransform: "uppercase",
          }}
        >
          {currentLanguage?.key}
        </Typography>
      </Box>
      <LanguageModalContent
          open={isLanguageModalOpen}
          handleClose={handleCloseLanguageModal}
          handleLanguageChange={handleLanguageChange}
        />
    </>
  );
}
