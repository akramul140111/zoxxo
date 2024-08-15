/* eslint-disable react/prop-types */
import { Box, Button, Typography, useMediaQuery, Dialog, DialogTitle, DialogContent } from "@mui/material";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useTheme } from "@emotion/react";
import { useState } from "react";
import FileUploader from "../FileUploader/FileUploader";
import { useTranslation } from "react-i18next";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const ContentTitle = ({ title }) => {
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";
  const bgColor = darkMode ? "#0E1B25" : "red";
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const { t } = useTranslation("dashboard");

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box
        sx={{ px: isLargeScreen ? 5 : 0, py: 2, display: 'flex', justifyContent: "space-between", alignItems: "center" }}
      >
        <Typography variant="h5" sx={{ color: "#777777", fontWeight: "700", mb: !isLargeScreen && 2 }}>
          {title}
        </Typography>
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
          sx={{ background: bgColor }}
          onClick={handleClickOpen}
        >
           {t("upload")}
          <VisuallyHiddenInput type="button" />
        </Button>
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
        sx={{
          "& .MuiDialogContent-root": {
            pb: 2,
          },
        }}
      >
        <DialogTitle variant="h4" sx={{ fontWeight: "600", textAlign: "center", pt: 5 }}>
          Upload your data
        </DialogTitle>
        <DialogContent variant="body1" sx={{ fontWeight: "500", textAlign: "center" }}>
          Deliver your Data fast, safe & without interference of others
        </DialogContent>
        <Box sx={{ pb: 5 }}> {/* Add padding to bottom of modal */}
          <FileUploader />
        </Box>
      </Dialog>
    </>
  );
};

export default ContentTitle;
