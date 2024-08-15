import React, { useRef, useState, useCallback, useEffect } from "react";
import {
  Typography,
  Card,
  CardContent,
  Button,
  CardMedia,
  IconButton,
  ButtonGroup,
  TextField,
  Stack,
  CircularProgress,
} from "@mui/material";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/system";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { useDropzone } from "react-dropzone";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import ImageIcon from "@mui/icons-material/Image";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import MuiStepper from "../../components/HomeScreen/MuiStepper";
import useAuth from "../../hooks/useAuth";
import useHeroSectionStore from "../../hooks/useHeroSectionStore";
import { copyTextToClipboard, getRelativeSize, isBrowser } from "../../utils";
import {
  getCampaign,
  getUploadLinks,
  incrementClicks,
  verifyUploadCompletion,
} from "../../api";
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import Error from "../../components/Error/Error";
import { ContentCopy } from "@mui/icons-material";
import DoneAnimation from "../../assets/animations/Done.json";
import FailedAnimation from "../../assets/animations/Failed.json";
import { Case, Default, Else, If, Switch, Then } from "react-if";
import colors from '../../config/colors'
import Lottie from "react-lottie";
import Backdrop from '@mui/material/Backdrop';

import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

let source = axios.CancelToken.source();

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h4" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

const modalInsideStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  py: 4,
  px: 10, 
height: '70vh',

justifyContent: 'center',
  overflow: 'scroll',
 
};


const TestCardLatest = () => {
  const filesRef = useRef(null);
  const [uploadFiles, setUploadFiles] = useState([]);
  const [stepNo, setStepNo] = useState(0);
  const { t } = useTranslation("home");
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";
  const reverseTextColor = darkMode ? "#fff" : "#000";
  const bgColor = darkMode ? "#0E1B25" : "#fff";
  const bgShadow = darkMode ? "#183042" : "#fff";
  const bgDropShadow = darkMode ? "#204159" : "#fff";
  const baseBg = darkMode ? "#183042" : "#FF0000";
  const baseBg2 = darkMode ? "#183042" : "#F0F0F0";
  const baseBg3 = darkMode ? "#204059" : "#fff";
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: DoneAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptionsFailed = {
    loop: false,
    autoplay: false,
    animationData: FailedAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  //My Codes
  const handleShareClick = async () => {
    if (uploadFiles.length === 0) {
      toast.error("Please select a file to share");
      return;
    }
    try {
      const formData = new FormData();
      uploadFiles.forEach((file) => formData.append("files", file));
      console.log(formData.file);

      // const res = await getUploadLinks(formData).unwrap();

      toast.success("File shared successfully");
    } catch (error) {
      console.log(error);
    }

    // Perform the file sharing logic here

    setUploadFiles([]);
  };

  const handleRemoveFile = (file) => {
    removeFile(file.name);
    setUploadFiles((prevFiles) => prevFiles.filter((f) => f !== file));
  };

  useEffect(() => {
    handleAddFiles(uploadFiles);
    if (uploadFiles.length === 0) {
      setStepNo(0);
    }
  }, [uploadFiles]);

  const getFileIcon = (fileName) => {
    const extension = fileName.split(".").pop().toLowerCase();
    switch (extension) {
      case "pdf":
        return <PictureAsPdfIcon />;
      case "jpg":
      case "jpeg":
      case "png":
      case "gif":
        return <ImageIcon />;
      default:
        return <InsertDriveFileIcon />;
    }
  };

  const { user } = useAuth();
  const {
    files,
    isSeeMore,
    shareVia,
    addFiles,
    removeFile,
    toggleSeeMore,
    setShareVia,
    reset,
  } = useHeroSectionStore();

  const [formData, setFormData] = React.useState({ email: "", title: "" });
  const [uploadProgress, setUploadProgress] = React.useState(0);
  const [isUploading, setIsUploading] = React.useState(false);
  const [isUploaded, setIsUploaded] = React.useState(false);
  const [downloadLink, setDownloadLink] = React.useState("");
  const [uploadErr, setUploadErr] = React.useState("");

  const [previewCreative, setPreviewCreative] = React.useState();

  const upload = async () => {
    try {
      source = axios.CancelToken.source();
      setUploadErr("");
      setIsUploading(true);
      const {
        uploadUrls: urls,
        upload,
        emailToken,
      } = await getUploadLinks(files);
      const totalBytes = files.reduce((acc = 0, curr) => acc + curr.size, 0);
      const individualUploaded = Array(files.length).fill(0);
      const calcPercent = () =>
        (individualUploaded.reduce((sum, curr) => sum + curr, 0) * 100) /
        totalBytes;
      for (let i = 0; i < urls.length; i += 1) {
        try {
          await axios.put(urls[i], files[i], {
            headers: {
              "Content-Type": files[i].type,
            },
            cancelToken: source.token,
            // handle upload progress
            onUploadProgress: (event) => {
              // maintain uploaded size for every file
              individualUploaded[i] = event.loaded;
              const percent = calcPercent();
              // set upload progress
              setUploadProgress(percent);
              // handle completion
              if (percent >= 100) {
                // send email
                verifyUploadCompletion(
                  upload._id,
                  shareVia === "email"
                    ? {
                        ...formData,
                        emailToken,
                      }
                    : undefined
                )
                  .then(() => {
                    setIsUploaded(true);
                    setIsUploading(false);
                    setDownloadLink(
                      `${
                        isBrowser() ? window.location.href : ""
                      }download?uploadId=${upload._id}`
                    );
                    setStepNo(2);
                  })
                  .catch((e) => {
                    setUploadErr(e?.message || "Server Error" + ".");
                  });
              }
            },
          });
        } catch (e) {
          setUploadErr(e?.message || "Server Error" + ".");
        }
      }
    } catch (e) {
      setUploadErr(e?.message || "Server Error");
    }
  };

  const handleAddFiles = (fs) => {
    const TWO_GB_LIMIT = 2 * 1000 * 1000 * 1000;
    const FOUR_GB_LIMIT = 4 * 1000 * 1000 * 1000;
    let sizeSum = 0;
    [...files, ...fs].forEach((f) => {
      sizeSum += f.size;
    });
    if (!user && sizeSum > TWO_GB_LIMIT) return;
    if (!user?.subscription?.type && sizeSum > TWO_GB_LIMIT) return;
    addFiles(fs);
  };

  //Creative Campaign
  const { data: campaign } = useQuery(
    ["campaign"],
    () => getCampaign("upload-screen"),
    {
      enabled: !user?.subscription?.type, // don't show ad to tornado user
    }
  );

  const { current: creativeNo } = React.useRef(
    Number.parseInt((Math.random() * 10).toString()) % 2
  );

  const creative =
    previewCreative ||
    (creativeNo && campaign?.isABTesting
      ? campaign.creativeABTesting
      : campaign?.creative);

  const { mutate } = useMutation(() =>
    incrementClicks(campaign?._id || "", campaign?.updateToken || "")
  );
  // End of Creative Campaign

  React.useEffect(() => {
    // when files change, delete error message
    setUploadErr("");
    // when files become empty, reset the state
    if (files.length > 0) return;
    setUploadErr("");
    setDownloadLink("");
    setIsUploaded(false);
    setIsUploading(false);
    setUploadProgress(0);
    setFormData({ email: "", title: "" });
    source.cancel(); // cancel on going api request
  }, [files]);

  React.useEffect(() => {
    // if preview is available in url, show it
    if (isBrowser()) {
      const searchParams = new URLSearchParams(window.location.search);
      const preview = searchParams.get("preview-creative");
      if (preview) {
        setPreviewCreative(JSON.parse(preview));
      }
    }
    // reset all settings on unmount
    return () => {
      reset();
      source.cancel();
    };
  }, []);

  const onDrop = useCallback((acceptedFiles) => {
    setUploadFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
    setStepNo(1);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleCopy = () => {
    navigator.clipboard.writeText(downloadLink).then(
      () => {
        // alert('Link copied to clipboard!');
        toast.info("Link copied to clipboard!");
      },
      (err) => {
        console.error("Could not copy text: ", err);
      }
    );
  };

  return (
    <>
    <Box sx={{ my: 24 }}>
      <Card
        sx={{
          bgcolor: bgColor,
          width: { xs: "270px", sm: "360px", md: "465px" },
          m: { xs: "auto", sm: "auto", md: " left" },
          borderRadius: 2,
        }}
      >
        <CardContent>
          {/* Upload Rounded Button */}
        <Switch>
          <Case condition={isUploading}>
          <Box
           display={'flex'}
           justifyContent={'center'}
           alignItems={'center'}
           sx={{
           
             width: { xs: "140px", md: "240px" },
             height: { xs: "140px", md: "240px" },
        
         
             mx: "auto",
             mt: "20px",
             
           }}
         >
          <CircularProgressWithLabel value={uploadProgress} size={180} />
         </Box>

          </Case>
          <Case condition={isUploaded}>
          <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            sx={{
            
              width: { xs: "140px", md: "240px" },
              height: { xs: "140px", md: "240px" },
         
          
              mx: "auto",
              mt: "20px",
              
            }}
          >
            <Lottie options={defaultOptions} autoPlay loop width={"100%"} />
         
          </Box>
          </Case>
          <Case condition={uploadErr}>
          <Box
           
           sx={{
           
             width: { xs: "140px", md: "240px" },
             height: { xs: "140px", md: "240px" },
             borderRadius: "50%",
          
             mx: "auto",
             mt: "20px",
             
           }}
         >
           <Lottie options={defaultOptionsFailed} autoPlay loop width={"100%"} />
        
         </Box>
          </Case>
          
          <Default>
         
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
          </Default>
        </Switch>

          {/*--------------------- Upload Rounded Button End--------------------- */}
          {/*--------------------- Uploaded  File List--------------------- */}

          <Box sx={{ mt: 2 }}>
            {uploadFiles.slice(0,3).map((file, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  bgcolor: baseBg2,
                  borderRadius: "5px",
                  p: 1.3,
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
                {
                  isUploading ? <CircularProgress sx={{p:1}} /> : isUploaded ? <CheckCircleIcon color='success' /> : <IconButton
                  edge="end"
                  color="inherit"
                  
                  onClick={() => handleRemoveFile(file)}
                >
                  <CloseIcon />
                </IconButton>
                
                }
               
              </Box>
            ))}
            {/* <Button  sx={{display: 'block', mx: 'auto', mt: 1,}}>See More</Button> */}
            {uploadFiles.length > 3 && <Typography color={'primary'} fontWeight={'500'} textAlign={'center'} sx={{mt:1, cursor: 'pointer', '&:hover': {color: colors.primaryHover}}} onClick={handleOpen} >See More</Typography>}
          </Box>

          {/*--------------------- Uploaded File List End--------------------- */}

          {uploadFiles.length > 0 && !isUploaded && (
            <>
              {/* -------------------- Form Start -------------------------------- */}

              <Box
                component="form"
                onSubmit={(e) => {
                  e.preventDefault();
                  
                  upload();
                }}
              >
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
                    py: 3,
                    px: 1,
                  }}
                >
                  <ButtonGroup color="secondary" fullWidth>
                    <Button
                      variant={shareVia === "email" ? "contained" : "outlined"}
                      onClick={() => {
                        setShareVia("email");
                        setFormData({
                          email: "",
                          title: "",
                        });
                      }}
                    >
                      {" "}
                      Email{" "}
                    </Button>
                    <Button
                      variant={shareVia === "link" ? "contained" : "outlined"}
                      onClick={() => {
                        setShareVia("link");
                        setFormData({
                          email: "",
                          title: "",
                        });
                      }}
                    >
                      {" "}
                      Link{" "}
                    </Button>
                  </ButtonGroup>
                </Box>

                {shareVia === "email" && (
                  <Stack direction="column" spacing={2} sx={{ mt: 2 }}>
                    <TextField
                      fullWidth
                      type="email"
                      id="email"
                      name="email"
                      label={t("email")}
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((st) => ({
                          ...st,
                          email: e.target.value,
                        }))
                      }
                      required
                    />

                    <TextField
                      fullWidth
                      type="text"
                      id="title"
                      name="title"
                      label={t("title")}
                      value={formData.title}
                      onChange={(e) =>
                        setFormData((st) => ({
                          ...st,
                          title: e.target.value,
                        }))
                      }
                      required
                    />
                  </Stack>
                )}
                <Button
                  variant="contained"
                  size="large"
                  sx={{ mt: 4, width: "100%", textTransform: 'capitalize' }}
                  type="submit"
                  // onClick={handleShareClick}
                  disabled={isUploading || isUploaded}
                >
                  { isUploading ? 'Uploading...' : t("SHARE NOW")}
                </Button>
              </Box>

              {/* -------------------- Form End -------------------------------- */}
            </>
          )}

          <If condition={isUploaded}>
            <Then>
            
              
              {shareVia === "link" ? (
                <>
                  <Box
                    component="form"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      mt: 3,
                    }}
                    onSubmit={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <TextField
                      label="Link"
                      variant="outlined"
                      fullWidth
                      value={downloadLink}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleCopy}
                      startIcon={<ContentCopy />}
                    >
                      Copy to Clipboard
                    </Button>
                  </Box>
                </>
              ) : (
                <Button
                  variant="contained"
                  onClick={() => {
                    setShareVia("link");
                  }}
                  sx={{
                    my: 2
                  }}
                fullWidth
                >
                  Share to Others
                </Button>
              )}
            </Then>
            <Else>
              <If condition={isUploading}>
                <Then></Then>
                <Else></Else>
              </If>
            </Else>
          </If>

          <Error message={uploadErr} />
          <MuiStepper stepNo={stepNo} />
        </CardContent>
      </Card>
    </Box>
    
    <div>

      <Modal
      
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}

        keepMounted
      >
        <Fade in={open}>
          <Box sx={modalInsideStyle}>
            <CloseIcon sx={{ position: "absolute", top: 10, right: 10 }} onClick={handleClose} />
          {uploadFiles.map((file, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  bgcolor: baseBg2,
                  borderRadius: "5px",
                  p: 2,
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
                {
                  isUploading ? <CircularProgress sx={{p:1}} /> : isUploaded ? <CheckCircleIcon color='success' /> : <IconButton
                  edge="end"
                  color="inherit"
                  
                  onClick={() => handleRemoveFile(file)}
                >
                  <CloseIcon />
                </IconButton>
                
                }
               
              </Box>
            ))}
          </Box>
        </Fade>
      </Modal>
    </div>
  </>
  );
};

export default TestCardLatest;
