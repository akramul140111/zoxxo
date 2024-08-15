/* eslint-disable react/prop-types */
import {
  Box,
  Divider,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LightLogo from "../../../assets/logos/logo-mobile light.png";
import SearchIcon from "@mui/icons-material/Search";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import ReceiptIcon from "@mui/icons-material/Receipt";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import TextsmsIcon from "@mui/icons-material/Textsms";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import { BorderLinearProgress } from "./ProgressBar";
import { useTheme } from "@emotion/react";
import { useTranslation } from "react-i18next";

const Sidebar = ({ open }) => {
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";
  const bgColor = darkMode ? "#000" : "#fff";
  const { t } = useTranslation("dashboard");

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%", background: bgColor }}>
      <Stack
        sx={{
          py: 1,
          mt: 1,
        }}
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={1}
        component={Link}
        to="/"
      >
        {!open && (
          <Box sx={{ pt: 3 }}>
            <img
              src={LightLogo}
              width={50}
              style={{
                cursor: "pointer",
              }}
            />
          </Box>
        )}
      </Stack>
      <List sx={{ flexGrow: 1 }}>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: "initial",
              px: open ? 4 : 3,
              mb: 3,
            }}
          >
            {open ? (
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
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  justifyContent: "center",
                  backgroundColor: darkMode ? "#0E1B25" : "#F7F7F7",
                  borderRadius: "5px",
                  p: "10px",
                }}
              >
                <SearchIcon sx={{ fontSize: 30 }} />
              </ListItemIcon>
            )}
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            component={NavLink}
            to="/nasim/dashboard"
            end
            sx={{
              minHeight: 54,
              justifyContent: "initial",
              px: 4,
              py: 2,
              "&.active": {
                borderLeft: "5px solid #FF0000",
                backgroundColor: "#FFE9E9",
                "& .MuiListItemIcon-root": {
                  color: "#FF0000",
                },
                "& .MuiListItemText-root": {
                  color: "#FF0000",
                },
              },
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: 2,
                justifyContent: "center",
              }}
            >
              <DashboardIcon sx={{ fontSize: 30 }} />
            </ListItemIcon>
            {open && <ListItemText primary={t("dashboard")} sx={{ opacity: 1 }} />}
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            component={NavLink}
            to="/nasim/dashboard/account"
            end
            sx={{
              minHeight: 54,
              justifyContent: "initial",
              px: 4,
              py: 2,
              "&.active": {
                borderLeft: "5px solid #FF0000",
                backgroundColor: "#FFE9E9",
                "& .MuiListItemIcon-root": {
                  color: "#FF0000",
                },
                "& .MuiListItemText-root": {
                  color: "#FF0000",
                },
              },
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: 2,
                justifyContent: "center",
              }}
            >
              <AssignmentIndIcon sx={{ fontSize: 30 }} />
            </ListItemIcon>
            {open && <ListItemText primary={t("account")} sx={{ opacity: 1 }} />}
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            component={NavLink}
            to="/nasim/dashboard/plan"
            end
            sx={{
              minHeight: 54,
              justifyContent: "initial",
              px: 4,
              py: 2,
              "&.active": {
                borderLeft: "5px solid #FF0000",
                backgroundColor: "#FFE9E9",
                "& .MuiListItemIcon-root": {
                  color: "#FF0000",
                },
                "& .MuiListItemText-root": {
                  color: "#FF0000",
                },
              },
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: 2,
                justifyContent: "center",
              }}
            >
              <ReceiptIcon sx={{ fontSize: 30 }} />
            </ListItemIcon>
            {open && (
              <ListItemText primary={t("plan-and-billing")} sx={{ opacity: 1 }} />
            )}
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            component={NavLink}
            to="/nasim/dashboard/preferences"
            end
            sx={{
              minHeight: 54,
              justifyContent: "initial",
              px: 4,
              py: 2,
              "&.active": {
                borderLeft: "5px solid #FF0000",
                backgroundColor: "#FFE9E9",
                "& .MuiListItemIcon-root": {
                  color: "#FF0000",
                },
                "& .MuiListItemText-root": {
                  color: "#FF0000",
                },
              },
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: 2,
                justifyContent: "center",
              }}
            >
              <FeaturedPlayListIcon sx={{ fontSize: 30 }} />
            </ListItemIcon>
            {open && <ListItemText primary={t("preferences")} sx={{ opacity: 1 }} />}
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            component={NavLink}
            to="/nasim/dashboard/communications"
            end
            sx={{
              minHeight: 54,
              justifyContent: "initial",
              px: 4,
              py: 2,
              "&.active": {
                borderLeft: "5px solid #FF0000",
                backgroundColor: "#FFE9E9",
                "& .MuiListItemIcon-root": {
                  color: "#FF0000",
                },
                "& .MuiListItemText-root": {
                  color: "#FF0000",
                },
              },
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: 2,
                justifyContent: "center",
              }}
            >
              <TextsmsIcon sx={{ fontSize: 30 }} />
            </ListItemIcon>
            {open && (
              <ListItemText primary={t("communications")} sx={{ opacity: 1 }} />
            )}
          </ListItemButton>
        </ListItem>
        {open && (
          <Box sx={{ px: 3 }}>
            <Typography sx={{ textAlign: "center", my: 2 }}>
              2 GB out of 4 GB
            </Typography>
            <BorderLinearProgress variant="determinate" value={50} />
          </Box>
        )}
      </List>
      <Divider sx={{ borderTopWidth: "2px", borderTopColor: "#777777" }} />
      <ListItem disablePadding sx={{ display: "block", mt: "auto" }}>
        <ListItemButton
          sx={{
            minHeight: 54,
            justifyContent: "initial",
            px: 4,
            display: "flex",
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: 3,
              justifyContent: "center",
              fontSize: 30,
            }}
          >
            <HelpCenterIcon sx={{ fontSize: 30 }} />
          </ListItemIcon>
          {open && (
            <ListItemText primary={t("help-and-inspiration")} sx={{ opacity: 1 }} />
          )}
        </ListItemButton>
      </ListItem>
    </Box>
  );
};

export default Sidebar;
