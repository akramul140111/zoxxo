/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import ZoxxoModal from "../Modal/ZoxxoModal";
import { ModalStyledTextField } from "./FileMenu";
import { Bounce, toast } from "react-toastify";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useState } from "react";

const FolderMenu = ({ anchorElUser, handleCloseUserMenu }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [inputValue, setInputValue] = useState("");

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
          Share
        </Typography>
        <ZoxxoModal open={open} handleClose={handleClose}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Share this link
          </Typography>
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
        <Typography textAlign="center">Upload cover image</Typography>
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

export default FolderMenu;
