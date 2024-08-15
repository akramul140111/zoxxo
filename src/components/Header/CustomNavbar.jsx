import {
  AppBar,
  Button,
  Container,
  Grid,
  MenuItem,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Menu from "@mui/material/Menu";
import Typography from "@mui/material/Typography";
import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import { Link, useLocation, useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import LogoDark from "../../assets/logos/pc-logo-dark.png";
import LogoTabletDark from "../../assets/logos/logo-tablet dark.png";
import LogoMobileDark from "../../assets/logos/logo-mobile dark.png";
import LoadingScreen from '../LoadingScreen.jsx'

import Logo from "../../assets/logos/pc-logo.png";
import LogoTabletLight from "../../assets/logos/logo-tablet light.png";
import LogoMobileLight from "../../assets/logos/logo-mobile light.png";
// import { useLanguage } from "../../i18n";
import { ColorModeContext, tokens } from "../../theme.js";

import DrawerComp from "./DrawerComp";

// import { ExpandLess, ExpandMore } from "@mui/icons-material";
import routeLinks from "../../config/routeLinks.js";
import Aos from "aos";
// import colors from "../../config/colors.js";
import useAuth from "../../hooks/useAuth.js";

import colors from "../../config/colors.js";

const linksArray = ["pricing", "business"];
const settings = ["Dashboard", "Logout"];
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import { useLanguage } from "../../i18n.js";
import LanguageModal from "../Common/LanguageModalContent.jsx";


const zoxxoSpaceLinks = ["platform", "advertising", "brand", "monetization"];

const CustomNavbar = () => {
  const { t } = useTranslation();
  // const { language: currentLanguage, changeLanguage } = useLanguage();
  const [loading, setLoading] = useState(false);
  const theme = useTheme();
  const location = useLocation();
  const { user, login, isGettingLoggedIn, logout } = useAuth();
  const { language: currentLanguage } = useLanguage("en");
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
  
  const [scrollY, setScrollY] = useState(0);

  const navigate = useNavigate();
  const tabTextColor = theme.palette.textColor.main;
  const appBarZIndex = 1200;
  // const appBarBackgroundColor = "#1976d2";
  const darkMode = theme.palette.mode === "dark";
  const bgMainColor = darkMode ? "#0E1B25" : "#fff";
  // const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const btnSrc = darkMode ? "/imgs/light-mode.svg" : "/imgs/dark-mode.svg";
  const [zoxxoSpace, setZoxxoSpace] = useState(false);

  const isMatchsm = useMediaQuery(theme.breakpoints.down("sm"));
  const isMatchMd = useMediaQuery(theme.breakpoints.down("md"));
  const isMatchLg = useMediaQuery(theme.breakpoints.down("lg"));

  const logoDarkSrc = isMatchLg
    ? LogoDark
    : isMatchMd
    ? LogoTabletDark
    : LogoMobileDark;
  const logoLightSrc = isMatchLg
    ? Logo
    : isMatchMd
    ? LogoTabletLight
    : LogoMobileLight;

  // const logoSrc = : darkMode ? isMatchMd ? LogoDark : isMatchMd ? LogoMobileLight : Logo

  const getActiveTabIndex = (pathname) => {
    switch (pathname) {
      case "/":
        return null;
      case "/pricing":
        return 0;
      case "/business":
        return 1;
      default:
        return null; // Return null for any other path
    }
  };

  const [activeTabIndex, setActiveTabIndex] = useState(
    getActiveTabIndex(location.pathname) || 0 // Set initial value to 0 if getActiveTabIndex returns null
  );

  useEffect(() => {
    const index = getActiveTabIndex(location.pathname);
    setActiveTabIndex(index !== null ? index : 0); // Set activeTabIndex to 0 if getActiveTabIndex returns null
  }, [location.pathname]);

  // const [value, setValue] = useState(initialValue);
  const [expandMore, setExpandMore] = useState(false);

  const handleLogoClick = () => {
    // setValue(-1);
    navigate("/");
  };

  // Initial background color

  // Listen to scroll event and update scroll position
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const CustomTabs = () => {
    // const [anchorEl, setAnchorEl] = React.useState(null);


    

    // const handleMenu = (event) => {
    //   setZoxxoSpace(true);
    //   setAnchorEl(event.currentTarget);
    // };

    // const handleClose = () => {
    //   setZoxxoSpace(false);
    //   setAnchorEl(null);
    // };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

   

    useEffect(() => {
      Aos.init();
    }, []);

    return (
      <Grid
        item
        md={5}
        lg={5}
        display={"flex"}
        justifyContent={"flex-end"}
        sx={{ placeItems: "center" }}
      >
        {linksArray.map((link, index) => (
          <Typography
            key={index}
            component={Link}
            to={`${link === "home" ? "/" : link}`}
            color={location.pathname === `/${link}` ? "primary" : tabTextColor}
            variant="button"
            fontSize={{ md: 14, lg: 16 }}
            padding={"12px 16px"}
            fontWeight={700}
            textTransform={"capitalize"}
            sx={{
              textDecoration: "none",
            }}
          >
            {t(link)}
          </Typography>
        ))}
      
        <Box  onClick={handleClick} sx={{ display: "flex", alignItems: "center", mx: 1, gap: 1, '&:hover': { cursor: 'pointer'} }}>
        <Typography     
            color={ location?.pathname.startsWith(`/zoxxo-space`)
            ? colors?.primary
            : tabTextColor}
            
            variant="button"
            fontSize={{ md: 14, lg: 16 }}
            
            fontWeight={700}
            textTransform={"capitalize"}
            sx={{
              textDecoration: "none",
            }} >
                {t('zoxxo-space')}
            </Typography>
            <ArrowDropDownIcon  sx={{color: location?.pathname.startsWith(`/zoxxo-space`)
            ? colors?.primary
            : tabTextColor}}/>
        </Box>

        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{mt: 1, }}
      >
        {zoxxoSpaceLinks.map((link, index) => (
          <MenuItem  key={index} onClick={handleClose} >
            <Link
              to={`/zoxxo-space/${link}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography  color={
                location?.pathname === `/zoxxo-space/${link}`
                  ? theme.palette.primary.main
                  : tabTextColor
              } fontSize={{ xs: 12, md: 14, lg: 16 }} fontWeight={600}>{t(link)}</Typography>
            </Link>
          </MenuItem>
        ))}
      
      </Menu>
        
      </Grid>
    );
  };

  const LastFourButtons = () => {
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

    const handleLogout = async () => {
      try {
        setLoading(true);
        await logout();
        handleCloseUserMenu();
      } finally {
        setLoading(false);
      }
    };
    return (
      <>
        <Grid
          item
          container
          md={5}
          lg={4}
          display={"flex"}
          justifyContent={"space-around"}
          sx={{ placeItems: "center" }}
        >
          <Grid
            item
            xs={4}
            display={"flex"}
            justifyContent={"space-around"}
            sx={{ placeItems: "center" }}
            gap={{ md: 0, lg: 3 }}
          >
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
      
         </>
            <img
              onClick={() => {
                colorMode.toggleColorMode();
                setTimeout(() => {
                  Aos.refreshHard();
                }, 5000);
              }}
              style={{ cursor: "pointer" }}
              width="55px"
              height="28px"
              src={btnSrc}
              alt="icon"
            />
          </Grid>
          <Grid
            item
            xs={8}
            display={"flex"}
            justifyContent={"end"}
            sx={{ placeItems: "center" }}
          >
            {user ? (
              <>
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar alt="Remy Sharp" src="" />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: 6 }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <MenuItem onClick={() =>{
                      handleCloseUserMenu();
                      navigate(`/dashboard`);
                    }}
               
                    >
                      <Typography
                        textAlign="center"
                     
                        color={
                          location.pathname === `/dashboard`
                            ? "primary"
                            : tabTextColor
                        }
                        variant="button"
                        fontSize={{ md: 14, lg: 16 }}
                        fontWeight={700}
                        textTransform={"capitalize"}
                        sx={{
                          textDecoration: "none",
                        }}
                      >
                        {t("dashboard")}
                      </Typography>
                    </MenuItem>

                    <MenuItem onClick={() => handleLogout()}>
                      <Typography
                        textAlign="center"
                        color="error"
                        variant="button"
                        fontSize={{ md: 14, lg: 16 }}
                        fontWeight={700}
                        textTransform={"capitalize"}
                        sx={{
                          textDecoration: "none",
                        }}
                      >
                        {t("logout")}
                      </Typography>
                    </MenuItem>
                  </Menu>
                </Box>
              </>
            ) : (
              <>
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
              </>
            )}
          </Grid>
        </Grid>
      </>
    );
  };

  const LogoContainer = () => {
    return (
      <Grid item xs={3} md={2} lg={2}>
        <>
          {darkMode ? (
            <img
              src={logoDarkSrc}
              width={126}
              style={{
                position: "absolute",
                cursor: "pointer",
                top: +32,
              }}
              onClick={() => handleLogoClick()}
            />
          ) : (
            <img
              width={126}
              src={logoLightSrc}
              style={{
                position: "absolute",
                cursor: "pointer",
                top: +32,
              }}
              onClick={() => handleLogoClick()}
            />
          )}
        </>
      </Grid>
    );
  };

  const LargeScreen = () => {
    return (
      <Grid
        container
        spacing={1}
        sx={{
          display: { xs: "none", md: "flex", placeItems: "center", p: "0px" },
        }}
      >
        {/* ------------------- Logo ------------------------------- */}
        <LogoContainer />
        {/* ------------------- Fake Space ------------------------------- */}
        <Grid item lg={1} sx={{ display: { xs: "none", lg: "flex" } }} />
        {/* ------------------- Tabs ------------------------------- */}
        <CustomTabs />
        {/* ------------------- Last 4 Buttons ------------------------------- */}
        <LastFourButtons />
      </Grid>
    );
  };
  const SmallScreen = () => {
    return (
      <>
        <Grid
          container
          spacing={1}
          display={"flex"}
          justifyContent={"space-between"}
          sx={{ display: { md: "none" }, placeItems: "center" }}
        >
          <Grid xs={3} item>
            <>
              {darkMode ? (
                <img
                  src={LogoDark}
                  width={"50px"}
                  style={{
                    marginTop: "10px",
                  }}
                />
              ) : (
                <img
                  src={Logo}
                  width={"50px"}
                  style={{
                    marginTop: "10px",
                  }}
                />
              )}
            </>
          </Grid>
          <Grid item xs={5} />
          <Grid xs={3} display={"flex"} justifyContent={"flex-end"} item>
            <DrawerComp linksArray={linksArray} zoxxoSpaceLinks={zoxxoSpaceLinks} />
          </Grid>
        </Grid>
      </>
    );
  };

  return (<>
  {loading && <LoadingScreen />}
  
  <AppBar
      elevation={1}
      sx={{
        background:
          location?.pathname != "/"
            ? bgMainColor
            : scrollY > 0
            ? bgMainColor
            : "transparent",
        borderBottom: `1px solid ${tabTextColor}`,
        py: { xs: 0.5, md: 1 },
        zIndex: appBarZIndex, // Set the z-index of the AppBar
      }}
      position="fixed"
    >
      <Container>
        <Toolbar
          sx={{
            height: { xs: "50px", md: "100px" },
            placeItems: "center",
            px: "0 !important",
          }}
        >
          {/* ------------------------------------ Large Screen------------------------------------------- */}
          <LargeScreen />
          {/* ------------------------------------ Small Screen ------------------------------------------- */}
          <SmallScreen />
        </Toolbar>
      </Container>
    </AppBar>
    <LanguageModal
          open={isLanguageModalOpen}
          handleClose={handleCloseLanguageModal}
          handleLanguageChange={handleLanguageChange}
        />
        
  </>
  );
};

export default CustomNavbar;
