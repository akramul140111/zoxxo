import React, { useState } from "react";
import {
  Box,
  Modal,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  useMediaQuery,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { useLanguage } from "../../i18n";
import colors from "../../config/colors";
import { useTheme } from "@mui/material/styles";

export default function LanguageModal({
  open,
  handleClose,
  handleLanguageChange,
}) {
  const { language: currentLanguage, changeLanguage } = useLanguage();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const handleSelectLanguage = (lang) => {
    setSelectedLanguage(lang);
    handleLanguageChange(lang);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isMobile ? "90vw" : "60vw",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-title" variant="h6" component="h2" gutterBottom>
          Select Language
        </Typography>
        <List>
          {[
            { name: "English", key: "en" },
            { name: "Deutsch", key: "de" },
          ].map((lang, index) => (
            <ListItemButton
              key={index}
              onClick={() => changeLanguage(lang.key)}
            >
              <ListItem
                key={lang.key}
                onClick={() => handleSelectLanguage(lang.key)}
              >
                <ListItemIcon>
                  {lang.name === currentLanguage.name && (
                    <CheckIcon color="primary" />
                  )}
                </ListItemIcon>
                <ListItemText primary={lang.name} />
              </ListItem>
            </ListItemButton>
          ))}
        </List>
        <Box display="flex" justifyContent="flex-end" mt={2}>
          <Button variant="contained" color="primary" onClick={handleClose}>
            Close
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}