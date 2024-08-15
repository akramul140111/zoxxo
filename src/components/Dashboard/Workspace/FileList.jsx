import { useState } from "react";
import {
  Box,
  Paper,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Grid,
  Card,
  ButtonGroup,
  useMediaQuery,
} from "@mui/material";
import ListIcon from "@mui/icons-material/List";
import GridViewIcon from "@mui/icons-material/GridView";
import FileMenu from "../ActionMenu/FileMenu";
import { useTheme } from "@emotion/react";

const createData = (name, monetization, downloads, updated, actions) => {
  return { name, monetization, downloads, updated, actions };
};

const FileList = () => {
  const [view, setView] = useState("list");
  const [anchorElUser, setAnchorElUser] = useState(null);
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";
  const bgColor = darkMode ? "#0E1B25" : "#fff";
  const reverseTextColor = darkMode ? "#fff" : "#000";
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

  const handleViewChange = (view) => {
    setView(view);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const rows = [
    createData(
      "Fonts.doc",
      "Silver",
      1,
      "May 23, 2024",
     <Box>
         <Typography
         onClick={handleOpenUserMenu}
        variant="body1"
        sx={{
          cursor: "pointer",
          fontSize: "20px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        ...
      </Typography>
     <FileMenu anchorElUser={anchorElUser} handleCloseUserMenu={handleCloseUserMenu} />
     </Box>
    ),
    createData(
      "Fonts.doc",
      "Silver",
      1,
      "May 23, 2024",
     <Box>
         <Typography
         onClick={handleOpenUserMenu}
        variant="body1"
        sx={{
          cursor: "pointer",
          fontSize: "20px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        ...
      </Typography>
     <FileMenu anchorElUser={anchorElUser} handleCloseUserMenu={handleCloseUserMenu} />
     </Box>
    ),
    createData(
      "Fonts.doc",
      "Silver",
      1,
      "May 23, 2024",
     <Box>
         <Typography
         onClick={handleOpenUserMenu}
        variant="body1"
        sx={{
          cursor: "pointer",
          fontSize: "20px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        ...
      </Typography>
     <FileMenu anchorElUser={anchorElUser} handleCloseUserMenu={handleCloseUserMenu} />
     </Box>
    ),
    createData(
      "Fonts.doc",
      "Silver",
      1,
      "May 23, 2024",
     <Box>
         <Typography
         onClick={handleOpenUserMenu}
        variant="body1"
        sx={{
          cursor: "pointer",
          fontSize: "20px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        ...
      </Typography>
     <FileMenu anchorElUser={anchorElUser} handleCloseUserMenu={handleCloseUserMenu} />
     </Box>
    ),
    createData(
      "Fonts.doc",
      "Silver",
      1,
      "May 23, 2024",
     <Box>
         <Typography
         onClick={handleOpenUserMenu}
        variant="body1"
        sx={{
          cursor: "pointer",
          fontSize: "20px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        ...
      </Typography>
     <FileMenu anchorElUser={anchorElUser} handleCloseUserMenu={handleCloseUserMenu} />
     </Box>
    ),
    createData(
      "Fonts.doc",
      "Silver",
      1,
      "May 23, 2024",
     <Box>
         <Typography
         onClick={handleOpenUserMenu}
        variant="body1"
        sx={{
          cursor: "pointer",
          fontSize: "20px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        ...
      </Typography>
     <FileMenu anchorElUser={anchorElUser} handleCloseUserMenu={handleCloseUserMenu} />
     </Box>
    ),
  ];

  return (
      <Box sx={{ mx: isLargeScreen ? 5 : 0 }}>
      <TableContainer component={Paper} sx={{ my: 3, borderRadius: 5, bgcolor: bgColor  }}>
        <Box
          sx={{
            display: isLargeScreen ? "flex" : "block",
            justifyContent: "space-between",
            alignItems: "center",
            px: 2,
            py: 1,
          }}
        >
          <Typography mb={isLargeScreen || 2} variant="h5">Files</Typography>
          <ButtonGroup variant="outlined" aria-label="outlined button group">
      <Button
        onClick={() => handleViewChange("grid")}
        startIcon={<GridViewIcon />}
        sx={{
          borderColor: "gray",
          backgroundColor: view === "grid" ? "red" : "transparent",
          color: view === "grid" ? (darkMode ? "#fff" : "#fff") : reverseTextColor,
          "&:hover": {
            backgroundColor: view === "grid" ? "darkred" : "transparent",
            borderColor: "gray",
          },
        }}
      >
        Grid
      </Button>
      <Button
        onClick={() => handleViewChange("list")}
        startIcon={<ListIcon />}
        sx={{
          borderColor: "gray",
          backgroundColor: view === "list" ? "red" : "transparent",
          color: view === "list" ? (darkMode ? "#fff" : "#fff") : reverseTextColor,
          "&:hover": {
            backgroundColor: view === "list" ? "darkred" : "transparent",
            borderColor: "gray",
          },
        }}
      >
        List
      </Button>
    </ButtonGroup>
        </Box>
        {view === "grid" ? (
          <Grid container spacing={3} sx={{ p: 2 }}>
            {rows.map((row) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={row.name}>
                <Card
                  sx={{
                    borderRadius: 6,
                    boxShadow: 3,
                    pb: 3,
                    pt: 1,
                    px: 2,
                    height: "170px",
                    bgcolor: darkMode ? "#183042" : "#fff"
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      height: "100%",
                    }}
                  >
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{ fontSize: "20px" }}
                    >
                      {row.name}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="body1" sx={{ fontSize: "18px" }}>
                        {row.downloads} downloads
                      </Typography>
                      <Typography>{row.actions}</Typography>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Table sx={{ minWidth: 650 }} size="medium" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontSize: "20px", fontWeight: "semibold" }}>Name</TableCell>
                <TableCell align="center" sx={{ fontSize: "20px", fontWeight: "semibold" }}>
                  Monetization
                </TableCell>
                <TableCell align="center" sx={{ fontSize: "20px", fontWeight: "semibold" }}>
                  Downloads
                </TableCell>
                <TableCell align="center" sx={{ fontSize: "20px", fontWeight: "semibold" }}>
                  Updated
                </TableCell>
                <TableCell align="center" sx={{ fontSize: "20px", fontWeight: "semibold" }}>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="row" sx={{ fontSize: "20px", fontWeight: "semibold" }}>
                    {row.name}
                  </TableCell>
                  <TableCell align="center" sx={{ fontSize: "20px", fontWeight: "semibold" }}>
                    {row.monetization}
                  </TableCell>
                  <TableCell align="center" sx={{ fontSize: "20px", fontWeight: "semibold" }}>
                    {row.downloads}
                  </TableCell>
                  <TableCell align="center" sx={{ fontSize: "20px", fontWeight: "semibold" }}>
                    {row.updated}
                  </TableCell>
                  <TableCell align="center">{row.actions}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </TableContainer>
    </Box>
  );
};

export default FileList;
