import CloseIcon from "@mui/icons-material/Close";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import {
  Button,
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import Box from "@mui/material/Box";
import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "../../i18n.js";
import { ColorModeContext } from "../../theme.js";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";

import routeLinks from "../../config/routeLinks.js";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import colors from "../../config/colors.js";
import LanguageModal from "../Common/LanguageModalContent.jsx";


// const options = ["Platform", "Advertising", "Brand"];

// const MaterialUISwitch = styled(Switch)(({ theme }) => ({
//   width: 62,
//   height: 34,
//   padding: 7,
//   "& .MuiSwitch-switchBase": {
//     margin: 1,
//     padding: 0,
//     transform: "translateX(6px)",
//     "&.Mui-checked": {
//       color: "#fff",
//       transform: "translateX(22px)",
//       "& .MuiSwitch-thumb:before": {
//         backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
//           "#fff"
//         )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
//       },
//       "& + .MuiSwitch-track": {
//         opacity: 1,
//         backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
//       },
//     },
//   },
//   "& .MuiSwitch-thumb": {
//     backgroundColor: theme.palette.mode === "dark" ? "#fff" : "#000",
//     width: 32,
//     height: 32,
//     "&::before": {
//       content: "''",
//       position: "absolute",
//       width: "100%",
//       height: "100%",
//       left: 0,
//       top: 0,
//       backgroundRepeat: "no-repeat",
//       backgroundPosition: "center",
//       backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
//         "#000"
//       )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
//     },
//   },
//   "& .MuiSwitch-track": {
//     opacity: 1,
//     backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
//     borderRadius: 20 / 2,
//   },
// }));

const DrawerComp = ({ linksArray,  zoxxoSpaceLinks }) => {
  const { language: currentLanguage, changeLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const [expandMore, setExpandMore] = useState(false);
  const { t } = useTranslation();
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";

  const primaryColor = theme.palette.primary.main;
  const tabTextColor = theme.palette.textColor.main;
  const colorMode = useContext(ColorModeContext);
  const btnSrc = darkMode ? "/imgs/light-mode.svg" : "/imgs/dark-mode.svg";
  const navigate = useNavigate();
  const location = useLocation();

  const [isLanguageModalOpen, setLanguageModalOpen] = useState(false);

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
  

  // const onLinkClick = (link) => {
  //   setOpen(false);
  //   navigate(link);
  // };

  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };
  return (
    <>
      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{ sx: { width: "70vw" } }}
      >
        <List
          sx={{
            width: "100%",
            height: "100vh",
            bgcolor: darkMode ? colors.btnDark : "#fff",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 2,
              pt: 1,
              pb: 1.5,
              borderBottom: "1px solid #DEE1E0",
            }}
          >
            <img
              src="/imgs/mobile-logo.png"
              alt="logo"
              width="55px"
              height="50px"
              onClick={() => navigate(routeLinks.home)}
            />
            <CloseIcon onClick={() => setOpen(false)} />
          </Box>

          {linksArray?.map((link, index) => (
            <React.Fragment key={index}>
              <ListItemButton LinkComponent={Link} to={link} sx={{ py: 1.5 }}>
                <ListItemText
                  sx={{
                    color:
                      location?.pathname === `/${link}`
                        ? primaryColor
                        : tabTextColor,
                  }}
                  primary={<Typography>{t(link)}</Typography>}
                />
              </ListItemButton>
              <Divider />
            </React.Fragment>
          ))}
          <ListItemButton
            sx={{ py: 1.5 }}
            onClick={() => setExpandMore(!expandMore)}
          >
            <ListItemText
              sx={{ color:  location?.pathname.startsWith(`/zoxxo-space`)
              ? colors?.primary
              : tabTextColor }}
              primary={
                <Typography sx={{   color:  location?.pathname.startsWith(`/zoxxo-space`)
                ? colors?.primary
                : tabTextColor}}>
                  {" "}
                  {t("zoxxo-space")}
                </Typography>
              }
            />

            {expandMore ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Divider />
          <Collapse in={expandMore} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {zoxxoSpaceLinks?.map((link, index) => (
                <React.Fragment key={index}>
                  <ListItemButton LinkComponent={Link}  to={`/zoxxo-space/${link}`} sx={{ pl: 4 }}>
                    <ListItemText
                      primary={
                        <Typography
                          sx={{
                            textDecoration: "none",
                            textTransform: "capitalize",
                            color:
                              location?.pathname == `/zoxxo-space/${link}`
                                ? colors.primary
                                : tabTextColor,
                          }}
                          
                        >
                          {t(link)}
                        </Typography>
                      }
                    />
                  </ListItemButton>
                  <Divider />
                </React.Fragment>
              ))}
            </List>
          </Collapse>
          <ListItem sx={{ py: 1.5 }}>
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
    
          </ListItem>
          <Divider />
          <ListItem sx={{ py: 1.5 }}>
            <img
              onClick={colorMode.toggleColorMode}
              style={{ cursor: "pointer" }}
              width="55px"
              height="28px"
              src={btnSrc}
              alt="icon"
            />
          </ListItem>
          <Divider />
          <ListItem sx={{ py: 1.5, display: "flex", justifyContent: "center" }}>
            <Button
              LinkComponent={Link}
              to={routeLinks.signIn}
              variant="outlined"
              color="secondary"
              sx={{
                textTransform: "capitalize",
              }}
            >
              {t("sign-in")}
            </Button>
            <Button
              LinkComponent={Link}
              to={routeLinks.signUp}
              variant="contained"
              color="secondary"
              sx={{
                ml: 2,
                textTransform: "capitalize",
              }}
            >
              {t("sign-up")}
            </Button>
          </ListItem>
          <Divider />
        </List>
      </Drawer>

      <IconButton
        onClick={() => setOpen((prevState) => !prevState)}
        sx={{ marginLeft: "auto" }}
      >
        <MenuRoundedIcon fontSize="large" />
      </IconButton>
      
      <LanguageModal
          open={isLanguageModalOpen}
          handleClose={handleCloseLanguageModal}
          handleLanguageChange={handleLanguageChange}
        />
      
    </>
  );
};

export default DrawerComp;
