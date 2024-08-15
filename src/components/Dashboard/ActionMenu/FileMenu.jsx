/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  Checkbox,
  Grid,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import ZoxxoModal from "../Modal/ZoxxoModal";
import { Bounce, toast } from "react-toastify";
import { styled } from "@mui/system";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export const ModalStyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#FFFFFF",
    borderRadius: "10px",
    "& fieldset": {
      border:
        theme.palette.mode === "dark"
          ? "1px solid #274E6C"
          : "1px solid #E0E4EC",
    },
    "&:hover fieldset": {
      border: "1px solid #274E6C",
    },
    "&.Mui-focused fieldset": {
      border: "1px solid #274E6C",
    },
  },
  "& .MuiInputBase-input": {
    padding: "10px 12px",
  },
}));

const FileMenu = ({ anchorElUser, handleCloseUserMenu }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [inputValue, setInputValue] = useState("");
  const [age, setAge] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(inputValue)
      .then(() => {
        toast("Link Copied!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

 

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Menu
      sx={{ mt: "45px" }}
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
      <MenuItem onClick={handleCloseUserMenu}>
      <Typography component="div" onClick={handleOpen}  sx={{ width: '100%' }}>
          Monetization
        </Typography>
        <ZoxxoModal open={open} handleClose={handleClose}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <Checkbox
              sx={{
                color: "red",
                "&.Mui-checked": {
                  color: "red",
                },
              }}
            />
            Do you want to monetize?
          </Typography>
          <Grid container spacing={2} sx={{ pt: 2 , pl:2}}>
          <Grid item xs={12} sm={12} md={6}>
          <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          size="medium"
          fullWidth
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
           Default workspace
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
        <TextField fullWidth variant="outlined" />
        </Grid>
          </Grid>
          <ModalStyledTextField
            variant="outlined"
            placeholder="https://www.zoxxo.io/download?uploadId=664e266ea2996a"
            size="small"
            value={inputValue}
            onChange={handleInputChange}
            fullWidth
            sx={{ my: 2 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleCopy}
                    edge="end"
                    sx={{
                      backgroundColor: "red",
                      color: "white",
                      padding: "9px",
                      borderRadius: "0 5px 5px 0",
                      "&:hover": {
                        backgroundColor: "darkred",
                      },
                    }}
                  >
                    <ContentCopyIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Box
            sx={{ display: "flex", gap: 2, justifyContent: "flex-end", mt: 2 }}
          >
            <Button
              onClick={handleClose}
              variant="outlined"
              size="medium"
              sx={{
                borderColor: "transparent",
                color: "red",
                border: "1px solid red",
                textTransform: "capitalize",
                borderRadius: "20px",
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleCopy}
              variant="contained"
              size="medium"
              sx={{
                backgroundColor: "red",
                color: "white",
                textTransform: "capitalize",
                borderRadius: "20px",
                "&:hover": {
                  backgroundColor: "darkred",
                },
              }}
            >
              Copy Link
            </Button>
          </Box>
        </ZoxxoModal>
      </MenuItem>
      <MenuItem onClick={handleCloseUserMenu}>
        <Typography textAlign="center">Copy link</Typography>
      </MenuItem>
      <MenuItem onClick={handleCloseUserMenu}>
        <Typography textAlign="center">Move</Typography>
      </MenuItem>
      <MenuItem onClick={handleCloseUserMenu}>
        <Typography textAlign="center">Rename</Typography>
      </MenuItem>
      <MenuItem onClick={handleCloseUserMenu}>
        <Typography textAlign="center">Delete</Typography>
      </MenuItem>
    </Menu>
  );
};

export default FileMenu;
