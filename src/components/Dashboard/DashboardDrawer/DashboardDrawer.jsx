/* eslint-disable no-unused-vars */
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "../Sidebar/Sidebar";
import LightLogo from "../../../assets/logos/logo-mobile light.png";
import {
  Avatar,
  InputAdornment,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  TextField,
  useMediaQuery,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { ColorModeContext } from "../../../theme";
import Aos from "aos";

import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

import ContentTitle from "../Content/ContentTitle";

import LanguageModal from "../../Header/LanguageModal";


  


const drawerWidth = 320;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: 100,
  [theme.breakpoints.up("sm")]: {
    width: 100,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  backgroundColor: theme.palette.mode === "dark" ? "#000000" : "#ffffff",
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  padding: "10px 0",
  boxShadow:
    "0px 0px 0px -0px rgba(0, 0, 0, 0), 0px 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px 0px rgba(0, 0, 0, 0)",
  borderBottom:
    theme.palette.mode === "dark" ? "1px solid #3f3f3f" : "1px solid #E3E3E3",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  backgroundColor: `${theme.palette.mode === "dark" ? "#000000" : "white"}`,
  color: `${theme.palette.mode === "dark" ? "white" : "black"}`,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const DashboardDrawer = () => {
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";
  const reverseTextColor = darkMode ? "#fff" : "#000";
  const bgColor = darkMode ? "#000" : "#fff";
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const colorMode = React.useContext(ColorModeContext);
  const btnSrc = darkMode ? "/imgs/light-mode.svg" : "/imgs/dark-mode.svg";
  const [open, setOpen] = React.useState(true);
  const [searchVisible, setSearchVisible] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const menuOpen = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSearchIconClick = () => {
    setSearchVisible(!searchVisible);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ background: bgColor }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon sx={{ fontSize: 30, ml: 2 }} />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              px: 5,
            }}
          >
            <Box>
            {isLargeScreen ? (
        <TextField
          placeholder="Search"
          variant="outlined"
          size="small"
          sx={{
            opacity: 1,
            flex: 1,
            backgroundColor: darkMode ? "#0E1B25" : "#F7F7F7",
            borderRadius: "5px",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: "none",
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      ) : (
        <>
         {
          searchVisible ||  <ListItemIcon
          sx={{
            minWidth: 0,
            justifyContent: "center",
            backgroundColor: darkMode ? "#0E1B25" : "#F7F7F7",
            borderRadius: "5px",
            p: "10px",
          }}
          onClick={handleSearchIconClick}
        >
          <SearchIcon sx={{ fontSize: 30 }} />
        </ListItemIcon>
         }
          {searchVisible && (
            <TextField
              placeholder="Search"
              variant="outlined"
              size="small"
              sx={{
                opacity: 1,
                flex: 1,
                backgroundColor: darkMode ? "#0E1B25" : "#F7F7F7",
                borderRadius: "5px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "none",
                  },
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          )}
        </>
      )}
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                gap: 2,
              }}
            >
              <LanguageModal />
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
                 <>
      <Stack direction="row" alignItems="center" spacing={2} onClick={handleMenuClick} sx={{ cursor: 'pointer' }}>
        <Avatar alt="Nasim" src="/static/images/avatar/1.jpg" />
        <Box sx={{ display: isLargeScreen ? 'block' : 'none' }}>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.mode === "dark" ? "white" : "black",
              fontWeight: "600",
            }}
          >
            Md Nasim Hosen
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: reverseTextColor,
              fontWeight: "300",
            }}
          >
            nasim@gmail.com
          </Typography>
        </Box>
      </Stack>
      <Menu
        anchorEl={anchorEl}
        open={menuOpen}
        onClose={handleMenuClose}
        PaperProps={{
          style: {
            width: '200px',
            background: darkMode ? "#183042" : "#fff"
          },
        }}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
      </Menu>
    </>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 30px",
          }}
        >
          <Box
           component={Link}
           to="/"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "8px",
              textDecoration: "none",
            }}
          >
            <img
              src={LightLogo}
              width={50}
              style={{
                cursor: "pointer",
              }}
            />
            <Typography variant="h4" sx={{color: reverseTextColor}}>BOX</Typography>
          </Box>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <MenuIcon />
            ) : (
              <MenuIcon sx={{ fontSize: 30 }} />
            )}
          </IconButton>
        </DrawerHeader>
        <Sidebar open={open} />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
};

export default DashboardDrawer;
