import { Box, Button, Card, Grid, Typography, useMediaQuery } from "@mui/material";
import ContentTitle from "../Content/ContentTitle";
import { useTheme } from "@emotion/react";
import FolderIcon from '@mui/icons-material/Folder';
import FileList from "./FileList";
import FolderMenu from "../ActionMenu/FolderMenu";
import { useState } from "react";

const Workspace = () => {
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";
  const reverseTextColor = darkMode ? "#fff" : "#000";
  const bgColor = darkMode ? "#0E1B25" : "#fff";
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  const [anchorElUser, setAnchorElUser] = useState(null);


  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <ContentTitle title="Manage" />
      <Box
        sx={{
          px: isLargeScreen ? 5 : 0,
          py: 2,
          display: isLargeScreen ? "flex" : "block",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={{ color: "#777777", fontWeight: "700", mb: !isLargeScreen && 2 }}
        >
          Workspace
        </Typography>
        <Button
          component="label"
          role={undefined}
          size= {isLargeScreen ? "large" : "small"}
          variant="outlined"
          tabIndex={-1}
        sx={{color: darkMode ? "#fff" : "red", border: darkMode ? "1px solid #fff" : " 1px solid red"}}
        >
          Create new workspaces +
        </Button>
      </Box>
      <Grid container spacing={4} sx={{px: isLargeScreen ? 5 : 0,}}>
      <Grid item xs={12} sm={6} md={4} lg={3} >
          <Card sx={{ borderRadius: 6, boxShadow: 3, px: 3, pt: 2, pb:1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', bgcolor: bgColor }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <FolderIcon sx={{ fontSize: 40 }} color={reverseTextColor} />
                <Typography variant="h5" component="div" color={reverseTextColor} >
                  Photos
                </Typography>
              </Box>
            </Box>
            <Box>
              <Typography variant="body1" component="p" sx={{ mt: 2, color: "#777777" }}>
                235 files | 23 MB
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', pt:3 }}>
              <Typography onClick={handleOpenUserMenu} variant="h3" sx={{cursor: "pointer"}}>
                ...
              </Typography>
              <FolderMenu anchorElUser={anchorElUser} handleCloseUserMenu={handleCloseUserMenu} />
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} >
          <Card sx={{ borderRadius: 6, boxShadow: 3, px: 3, pt: 2, pb:1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', bgcolor: bgColor }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <FolderIcon sx={{ fontSize: 40 }} color={reverseTextColor} />
                <Typography variant="h5" component="div" color={reverseTextColor} >
                  Videos
                </Typography>
              </Box>
            </Box>
            <Box>
              <Typography variant="body1" component="p" sx={{ mt: 2, color: "#777777" }}>
                235 files | 23 MB
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', pt:3 }}>
              <Typography onClick={handleOpenUserMenu} variant="h3" sx={{cursor: "pointer"}}>
                ...
              </Typography>
              <FolderMenu anchorElUser={anchorElUser} handleCloseUserMenu={handleCloseUserMenu} />
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} >
          <Card sx={{ borderRadius: 6, boxShadow: 3, px: 3, pt: 2, pb:1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', bgcolor: bgColor }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <FolderIcon sx={{ fontSize: 40 }} color={reverseTextColor} />
                <Typography variant="h5" component="div" color={reverseTextColor}>
                Images
                </Typography>
              </Box>
            </Box>
            <Box>
              <Typography variant="body1" component="p" sx={{ mt: 2, color: "#777777" }}>
                235 files | 23 MB
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', pt:3 }}>
              <Typography onClick={handleOpenUserMenu} variant="h3" sx={{cursor: "pointer"}}>
                ...
              </Typography>
              <FolderMenu anchorElUser={anchorElUser} handleCloseUserMenu={handleCloseUserMenu} />
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} >
          <Card sx={{ borderRadius: 6, boxShadow: 3, px: 3, pt: 2, pb:1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', bgcolor: bgColor }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <FolderIcon sx={{ fontSize: 40 }} color={reverseTextColor} />
                <Typography variant="h5" component="div" color={reverseTextColor} >
                Documents
                </Typography>
              </Box>
            </Box>
            <Box>
              <Typography variant="body1" component="p" sx={{ mt: 2, color: "#777777" }}>
                235 files | 23 MB
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', pt:3 }}>
              <Typography onClick={handleOpenUserMenu} variant="h3" sx={{cursor: "pointer"}}>
                ...
              </Typography>
              <FolderMenu anchorElUser={anchorElUser} handleCloseUserMenu={handleCloseUserMenu} />
            </Box>
          </Card>
        </Grid>
      </Grid>
      <FileList />
    </>
  );
};

export default Workspace;
