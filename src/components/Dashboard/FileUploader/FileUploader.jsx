/* eslint-disable no-unused-vars */
import { useRef, useState, useCallback, useEffect } from "react";
import {
  Typography,
  Card,
  CardContent,
  Button,
  CardMedia,
  IconButton,
} from "@mui/material";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/system";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { useDropzone } from "react-dropzone";
import CloseIcon from '@mui/icons-material/Close';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ImageIcon from '@mui/icons-material/Image';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import DashboardStepper from "./DashboardUploadSteper";

const FileUploader = () => {
  const filesRef = useRef(null);
  const [files, setFiles] = useState([]);
  const [stepNo, setStepNo] = useState(0);
  const { t } = useTranslation("dashboard");
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";
  const reverseTextColor = darkMode ? "#fff" : "#000";
  const bgColor = darkMode ? "#0E1B25" : "#fff";
  const bgShadow = darkMode ? "#183042" : "#fff";
  const bgDropShadow = darkMode ? "#204159" : "#fff";
  const baseBg = darkMode ? "#183042" : "#FF0000";
  const baseBg2 = darkMode ? "#183042" : "#F0F0F0";
  const baseBg3 = darkMode ? "#204059" : "#fff";

  const onDrop = useCallback((acceptedFiles) => {
    setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
    setStepNo(1);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleShareClick = async () => {
    if (files.length === 0) {
      toast.error('Please select a file to share');
      return;
    }
    try {
      const formData = new FormData();
      files.forEach(file => formData.append('files', file));
      console.log(formData);

      // const res = await getUploadLinks(formData).unwrap();
     
      toast.success('File shared successfully');
      
    } catch (error) {
      console.log(error)
    }
 
    // Perform the file sharing logic here

    setFiles([]);
  };

  const handleRemoveFile = (file) => {
    setFiles((prevFiles) => prevFiles.filter(f => f !== file));
  };

  useEffect(()=>{
    if(files.length === 0){
      setStepNo(0);
    }
  },[files])

  const getFileIcon = (fileName) => {
    const extension = fileName.split('.').pop().toLowerCase();
    switch (extension) {
      case 'pdf':
        return <PictureAsPdfIcon />;
      case 'jpg':
      case 'jpeg':
      case 'png':
      case 'gif':
        return <ImageIcon />;
      default:
        return <InsertDriveFileIcon />;
    }
  };

  const handleNext = () => {
    if (stepNo < 2) setStepNo(stepNo + 1);
  };

  const handleCancel = () => {
    setFiles([]);
    setStepNo(0);
  };

  return (
    <Card
      sx={{
        bgcolor: bgColor,
        width: { xs: "270px", sm: "360px", md: "465px" },
        m: { xs: "auto", sm: "auto", md: " left" },
        borderRadius: 2,
      }}
    >
      <CardContent>
        <Box
          {...getRootProps()}
          sx={{
            bgcolor: bgShadow,
            filter: "drop-shadow(0px 0px 70px rgba(0, 0, 0, 0.05))",
            width: { xs: "140px", md: "240px" },
            height: { xs: "140px", md: "240px" },
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mx: "auto",
            mt: "20px",
            cursor: "pointer",
          }}
        >
          <input {...getInputProps()} hidden multiple />
          <Card
            sx={{
              bgcolor: bgDropShadow,
              filter: "drop-shadow(0px 0px 70px rgba(0, 0, 0, 0.05))",
              width: { xs: "110px", md: "186px" },
              height: { xs: "110px", md: "186px" },
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <CardMedia
              component="img"
              image="/imgs/hero-icon.png"
              alt="icon"
              sx={{
                width: "48px",
                height: "35px",
              }}
            />
            <Typography
              variant="body2"
              fontSize={{ xs: "8px", md: "12px", lg: "14px" }}
              color={reverseTextColor}
              fontWeight={"500"}
              mt={"10px"}
              textAlign={"center"}
              px={{ xs: "5px", md: "0px" }}
            >
              {isDragActive
                ? t("Drop the files here ...")
                : t("drop-your-file’s-here-or-click-here-to-upload")}
            </Typography>
          </Card>
        </Box>
        {files.length > 0 && (
          <>
            <Box sx={{ mt: 2 }}>
              {files.map((file, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    bgcolor: baseBg2,
                    borderRadius: "5px",
                    p: 1,
                    mt: 1,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
                    {getFileIcon(file.name)}
                    <Typography
                      variant="body2"
                      fontSize={{ md: "12px" }}
                      fontWeight={"500"}
                      color={reverseTextColor}
                      sx={{ ml: 1, wordBreak: "break-all" }}
                    >
                      {file.name}
                    </Typography>
                  </Box>
                  <IconButton
                    edge="end"
                    color="inherit"
                    onClick={() => handleRemoveFile(file)}
                  >
                    <CloseIcon />
                  </IconButton>
                </Box>
              ))}
            </Box>
            <Box
              sx={{
                bgcolor: baseBg2,
                borderRadius: "5px",
                width: "100%",
                height: "38px",
                mt: "25px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "5px 8px",
              }}
            >
              <Box
                sx={{
                  textAlign: "center",
                  flex: 1,
                }}
              >
                <Typography
                  variant="body2"
                  fontSize={{ md: "12px" }}
                  fontWeight={"500"}
                  color={reverseTextColor}
                >
                  {t("Via Email")}
                </Typography>
              </Box>
              <Box
                sx={{
                  textAlign: "center",
                  flex: 1,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Card
                  sx={{
                    bgcolor: baseBg3,
                    borderRadius: "5px",
                    padding: "5px 0px",
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="body2"
                    fontSize={"12px"}
                    fontWeight={"500"}
                    color={reverseTextColor}
                  >
                    {t("Via Link")}
                  </Typography>
                </Card>
              </Box>
            </Box>
            <Button
              variant="contained"
              size="large"
              sx={{ mt: 4, width: "100%" }}
              onClick={handleShareClick}
            >
              {t("SHARE NOW")}
            </Button>
          </>
        )}
        <DashboardStepper stepNo={stepNo} />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'end',
            mt: 5,
            gap:2
          }}
        >
          <Button
            variant="outlined"
            size="small"
            onClick={handleCancel}
            sx={{ borderRadius: "20px", py:1, textTransform: "none" }}
          >
            {t("Cancel")}
          </Button>
          <Button
            variant="contained"
            size="small"
            sx={{ backgroundColor: baseBg, borderRadius: "20px", py:1, textTransform: "none" }}
            onClick={handleNext}
          >
            {t("Next")}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default FileUploader;
