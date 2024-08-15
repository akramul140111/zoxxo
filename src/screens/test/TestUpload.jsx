import React, { useRef, useState, useCallback, useEffect } from "react";
import {
  Typography,
  Card,
  CardContent,
  Button,
  CardMedia,
  IconButton,
  FormControl,
  TextField,
  RadioGroup,
  FormControlLabel,
  Container,
} from "@mui/material";
import Error from "../../components/Error/Error";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/system";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { useDropzone } from "react-dropzone";
import ClearIcon from '@mui/icons-material/Clear';
import CloseIcon from "@mui/icons-material/Close";

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
import { Case, Default, Else, If, Switch, Then, When } from "react-if";

let source = axios.CancelToken.source();

const TestScreenUpload = () => {
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

  //My Codes
  const handleShareClick = async () => {
    if (uploadFiles.length === 0) {
      toast.error("Please select a file to share");
      return;
    }
    try {
      const formData = new FormData();
      uploadFiles.forEach((file) => formData.append("files", file));
      console.log(formData);

      // const res = await getUploadLinks(formData).unwrap();

      toast.success("File shared successfully");
    } catch (error) {
      console.log(error);
    }

    // Perform the file sharing logic here

    setUploadFiles([]);
  };

  const handleRemoveFile = (file) => {
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
  const [previewCreative, setPreviewCreative] = React.useState({
    url: "",
    image: "",
  });

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
      const totalBytes = files.reduce((acc, curr) => acc + curr.size, 0);
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
                      () =>
                        `${
                          isBrowser() ? window.location.href : ""
                        }download?uploadId=${upload._id}`
                    );
                  })
                  .catch((e) => {
                    setUploadErr(e?.message || "Server Error.");
                  });
              }
            },
          });
        } catch (e) {
          setUploadErr(e?.message || "Server Error.");
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
    console.log(fs);
    addFiles(fs);
  };

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

  return (
<Box sx={{my: 20}}>
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
  
{/* ----------------------- Logic Starts ------------------------------ */}

        <Box
width={'100%'}

  
flexWrap="wrap"
        justifyContent={'center'}
        w="full"
        position={{ xs: 'static', lg: 'fixed' }}
        marginTop={{md: 1}}
        // ref={ref}
        // h="100vh"
      >
        <Box
        position={'absolute'}
    
          w={{ xs: '100%', md: '45%' }}
          zIndex={-1}
          height={'100%'}
          left={0}
          display={{ xs: 'none', xl: 'block' }}
         paddingTop={1}
        />
        <Box
           position={'absolute'}
        //   bgImage="linear-gradient(-135deg,#cdf7f6 0.00%,#9a94bc 100.00%)"
          width={{ xs: '100%', lg: '55%' }}
          zIndex={-1}
          height="100%"
          right={0}
          display={{ xs: 'none', xl: 'block' }}
          paddingTop={1}
        />
        <Container
        
          maxWidth='100%'
          display="flex"
          sx={{flexWrap: 'wrap', px: 0, maxHeight: '100%', height: '100%'}}
          
        >
          <Box
            
            width={{ xs: '100%', lg: '45%' }}
            sx={{pt: 0, height: '100%'}}
          >
            <Box
           
              sx={{
                py: 1,
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                height: '100%',
                boxSizing: 'border-box',
              }}
            >
              <If condition={files.length}>
                <Then>
                  <Box
                 
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      maxWidth: '500px',
                      width: '100%',
                      mx: 'auto',
                      px: 2,
                      flexGrow: 1
                    }}
                  >
                    <Switch>
                      <Case condition={isUploaded && shareVia === 'email'}>
                        <Typography
                          textAlign="center"
                          width={'100%'}
                          fontSize={{ xs: '22px', md: '24px', lg: '44px' }}
                        >
                          {/* {t('uploader:your-data-is-delivered')} */}
                          Your Data is Delivered
                        </Typography>
                        <Typography
                          color="primary"
                          maxWidth="350px"
                          textAlign="center"
                          mx="auto"
                          fontSize={{ xs: '16', md: '18', lg: '22px' }}
                          lineHeight={1}
                        >
                          {/* {t('uploader:we-have-delivered-your-data-paragraph')} */}
                        We have delivered your data
                        </Typography>
                        <Typography  variant="h6" sx={{mt: 2}}>
                          {/* {t('uploader:delivered-files')}: */}
                          Delivered Files
                        </Typography>
                      </Case>
                      <Case condition={isUploaded && shareVia === 'link'}>
                        <Typography
                          width="100%"
                          textAlign="center"
                          fontSize={{ xs: '30px', md: '40px', lg: '50px' }}
                        >
                          {/* {t('uploader:ready-to-share')} */}
                          Ready to Share
                        </Typography>
                        <Typography
                          color="primary"
                          maxWidth="350px"
                          textAlign="center"
                          mx="auto"
                          fontSize={{ xs: '14px', md: '18px', lg: '22px' }}
                          lineHeight={1}
                        >
                          {/* {t('uploader:your-data-is-ready-to-share-paragraph')} */}
                        Your data is ready to share
                        </Typography>
                        <Typography fontSize="20px" sx={{mt: 10}}>
                          {/* {t('uploader:uploaded-files')}:
                           */}
                           Uploaded Files
                        </Typography>
                      </Case>
                      <Case condition={isUploading}>
                        <Typography
                          textAlign="center"
                          width="100%"
                          fontSize={{ xs: '10px', md: '14px', lg: '18px' }}
                        >
                          {/* {t('uploader:we-are-uploading')} */}
                          We are Uploading
                        </Typography>
                        <Typography
                          color="primary"
                          maxW="350px"
                          textAlign="center"
                          mx="auto"
                          fontSize={{ xs: '14px', md: '18px', lg: '22px' }}
                          lineHeight={1}
                        >
                          {/* {t('uploader:your-data-is-now-uploading-paragraph')} */}
                        Your data is now uploding
                        </Typography>
                        <Typography fontSize="24px" mt="8">
                          {/* {t('uploader:uploading-files')}: */}
                          uploading files
                        </Typography>
                      </Case>
                      <Default>
                        <Box
                      
                          sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignSelf: 'center',
                            width: '100%',
                          }}
                        >
                          {/* <UploadButton
                            variant="rectangular"
                            onChange={(files) => handleAddFiles(files)}
                          /> */}
                          Fake Upload Button
                        </Box>
                        <Typography fontSize="24px" sx={{mt: 1}}>
                          {/* {t('uploader:added-files')}: */}
                          added files
                        </Typography>
                      </Default>
                    </Switch>
                    <Box sx={{ mt: 2 , display: 'flex', flexDirection: 'column'}}>
                      <Box px={0} sx={{ fontSize: '16px', display: 'flex' }}>
                        <Box
                          px={0}
                          textTransform="capitalize"
                          flex={9}
                        >
                          {/* {t('uploader:name')}
                           */}
                           Name
                        </Box>
                        <Box
                          px={0}
                          textTransform="capitalize"
                          textAlign="right"
                          flex="3"
                        //   color="gray.500"
                        >
                          {/* {t('uploader:size')} */}
                          Size
                        </Box>
                        <Box
                          pr={0}
                          w="22px"
                          display={
                            isUploading || isUploaded ? 'none' : 'initial'
                          }
                        >
                          &nbsp;
                        </Box>
                      </Box>
                      {files.slice(0, 3).map((file) => (
                        <Box
                          key={file.name}
                          px={0}
                         
                          sx={{ fontSize: '16px', display: 'flex',
                          flexDirection: 'row', }}
                          borderBottom="1px solid gray"
                       
                        >
                          <Box
                            textOverflow="ellipsis"
                            overflow="hidden"
                            maxWidth="200px"
                            flex={9}
                            whiteSpace="nowrap"
                          >
                            {file.name}
                          </Box>
                          <Box p={0} textAlign="right" flex="3">
                            {getRelativeSize(file.size)}
                          </Box>
                          <Box
                            px={0}
                            ml="auto"
                            width="22px"
                            display={
                              isUploading || isUploaded ? 'none' : 'initial'
                            }
                          >
                            
                            <IconButton
      
                              aria-label="remove file"
                   
                              size="small"
                            
                              disabled={isUploading}
                              onClick={() => removeFile(file.name)}
                              sx={{
                                mt: 1
                              }}
                            >
                                <ClearIcon/>
                                </IconButton>
                          </Box>
                        </Box>
                      ))}
                    </Box>
                    
                    <When condition={files.length > 3}>
                      <Button
                     
                        sx={{
                            mt: 1,
                            mx: 'auto',
                            fontWeight: '500'
                        }}
                        onClick={() => toggleSeeMore(true)}
                      >
                        {/* {t('uploader:see-more')} */}
                        See More
                      </Button>
                    </When>
                    <When condition={isSeeMore}>
                      {/* <FilesModal
                        files={files}
                        removeFile={
                          isUploading || isUploaded ? () => null : removeFile
                        }
                        isOpen={isSeeMore}
                        onClose={() => toggleSeeMore(false)}
                      /> */}
                      See More
                    </When>
                    <Error mt={4} message={uploadErr} />
                    <Switch>
                      <Case condition={isUploading}>
                        <Box
                        
                          sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            mt: 2,

                          }}
                        >
                          {/* <CircularProgress
                            value={uploadProgress}
                            capIsRound
                            trackColor="primary.100"
                            size="190px"
                            thickness="8px"
                            color="primary.500"
                            m="auto"
                          >
                            <CircularProgressLabel>
                              {Math.floor(uploadProgress)}
                              <Box as="sup" top="-0.25em">
                                %
                              </Box>
                            </CircularProgressLabel>
                          </CircularProgress> */}
                        </Box>
                      </Case>
                      <Case condition={isUploaded}>
                        <Box
                         
                          sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            flexGrow: 1,
                          }}
                        >
                          {/* <img
                            src={greetingPerson}
                            alt="greeting person"
                            aspectRatio={1}
                            maxW="full"
                            maxH="30vh"
                          /> */}
                          <If condition={shareVia === 'link'}>
                            <Then>
                              {/* <InputGroup
                                borderColor="primary.500 !important"
                                size={{ base: 'sm', md: 'md' }}
                              >
                                <Input
                                  type="text"
                                  color="primary.500"
                                  borderColor="primary.500 !important"
                                  defaultValue={downloadLink || ''}
                                  readOnly
                                />
                                <InputRightElement bgColor="gray.50" bottom={0}>
                                  <IconButton
                                    colorScheme="primary"
                                    color="primary.300"
                                    borderColor="primary.500"
                                    roundedLeft="none"
                                    variant="outline"
                                    height="100%"
                                    aria-label="copy link"
                                    icon={<CopyIcon />}
                                    _hover={{
                                      color: 'white',
                                      bgColor: 'primary.500',
                                    }}
                                    onClick={() =>
                                      copyTextToClipboard(downloadLink)
                                    }
                                  />
                                </InputRightElement>
                              </InputGroup> */}
                              Form
                            </Then>
                            <Else>
                              <Button
                                variant="contained"
                                color="primary"
                                mx="auto"
                                mb="1.5vh"
                                size="small"
                   
                                onClick={() => setShareVia('link')}
                              >
                                {/* {t('uploader:share-with-others')} */}
                                Share with Others
                              </Button>
                            </Else>
                          </If>
                        </Box>
                      </Case>
                      <Default>
                        <Box
                          as="form"
                          className="flex flex-col"
                          mt="2vh"
                          flexGrow={1}
                          mb="2vh"
                          onSubmit={(e) => {
                            e.preventDefault();
                            return upload();
                          }}
                        >
                            
                          <RadioGroup
                            
                            gap="7"
                            value={shareVia}
                            sx={{
                                display: 'flex',
                                alignItems: 'center'
                            }}
                            onChange={(via) => {
                              setShareVia(via);
                              setFormData({ email: '', title: '' });
                            }}
                          >
                            <FormControlLabel
                              value="email"
                              color="primary"
                             
                            >
                              {/* {t('uploader:via-email')} */}
                              Via Email
                            </FormControlLabel>
                            <FormControlLabel
                              value="link"
                              color="primary"
                             
                            >
                              {/* {t('uploader:via-link')} */}
                              Via Link
                            </FormControlLabel>
                          </RadioGroup>
                          <When condition={shareVia === 'email'}>
                            
                            {/* <FormControl mt="2vh">
                              <Input
                                type="email"
                                aria-label="email"
                                bgColor="transparent"
                                borderColor="gray.400"
                                placeholder={t('uploader:Email')}
                                required
                                value={formData.email}
                                onChange={(e) =>
                                  setFormData((st) => ({
                                    ...st,
                                    email: e.target.value,
                                  }))
                                }
                              />
                            </FormControl>
                            <FormControl mt="2vh">
                              <Input
                                type="text"
                                aria-label="title"
                                bgColor="transparent"
                                borderColor="gray.400"
                                placeholder={t('uploader:title')}
                                required
                                value={formData.title}
                                onChange={(e) =>
                                  setFormData((st) => ({
                                    ...st,
                                    title: e.target.value,
                                  }))
                                }
                              />
                            </FormControl> */}
                            {formData.email}
                          </When>
                          <Button
                            
                            type="submit"
                            // sx={{
                            //   '@media screen (min-height: 700px)': {
                            //     '&': {
                            //       // mt: '1vh',
                            //       mb: '2vh',
                            //     },
                            //   },
                            // }}
                          >
                            {/* {t('uploader:share-now')} */}
                            Share Now
                          </Button>
                        </Box>
                      </Default>
                    </Switch>
                  </Box>
                </Then>
                <Else>
                  {/* <VStack flexGrow={1} my="auto" h="full">
                    <Text fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                      {t('uploader:upload-your-data')}
                    </Text>
                    <Text
                      color="gray.400"
                      maxW="322px"
                      textAlign="center"
                      fontSize={{ base: 'lg', md: 'xl', lg: '22px' }}
                      lineHeight={1}
                    >
                      {t('uploader:deliver-your-data-fast-line')}
                    </Text>
                    <Box
                      className="flex flex-col items-center justify-center"
                      my="auto"
                      w="full"
                    >
                      <UploadButton
                        variant="circular"
                        onChange={(files) => handleAddFiles(files)}
                      />
                    </Box>
                  </VStack> */}
                  Upload Your Data
                </Else>
              </If>
              {/* <Flex
                align="center"
                justify="space-around"
                w="full"
                maxW="450px"
                mx="auto"
                h="30px"
                sx={{
                  '@media (max-height: 700px)': {
                    '&': {
                      display: files.length ? 'none' : 'flex',
                    },
                  },
                  '& *': {
                    textTransform: 'capitalize',
                  },
                }}
              >
                <Text
                  className="flex items-center"
                  fontSize={{ base: 'lg', lg: 'xl' }}
                  letterSpacing={0.5}
                  gap={2}
                  color="primary.500"
                >
                  <CloseIcon boxSize={{ base: '14px', lg: '16px' }} />
                  {t('common:upload')}
                </Text>
                <Text
                  className="flex items-center"
                  fontSize={{ base: 'lg', lg: 'xl' }}
                  letterSpacing={0.5}
                  gap={2}
                  color={files.length ? 'primary.500' : 'gray.500'}
                >
                  <CloseIcon boxSize={{ base: '14px', lg: '16px' }} />
                  {t('common:share')}
                </Text>
                <Text
                  className="flex items-center"
                  fontSize={{ base: 'lg', lg: 'xl' }}
                  letterSpacing={0.5}
                  gap={2}
                  color={isUploaded ? 'primary.500' : 'gray.500'}
                >
                  <CloseIcon boxSize={{ base: '14px', lg: '16px' }} />
                  {t('common:enjoy')}
                </Text>
              </Flex> */}
            </Box>
          </Box>
          <Box
            bgImage={{
              base: 'linear-gradient(-135deg,#cdf7f6 0.00%,#9a94bc 100.00%)',
              xl: 'transparent',
            }}
            w={{ base: 'full', lg: '55%' }}
            className="flex"
            pos="relative"
            h={{ base: '50%', lg: 'full' }}
            pt="var(--nav-height)"
          >
            <Box
              pos="absolute"
              inset={0}
              className="flex items-center justify-center"
              pt={{ base: '0', lg: '8%' }}
            >
              <If condition={Boolean(creative)}>
                <Then>
                  {/* <Box
                    as="a"
                    href={creative?.url || ''}
                    target="_blank"
                    w="full"
                    h="full"
                    bgImage={`url(${creative?.image})`}
                    bgSize="cover"
                    bgPos="center"
                    onClick={() => {
                      mutate();
                    }}
                  /> */}
                {creative?.image}
                {creative?.image}
                </Then>
                <Else>
                  {/* <Box
                    as={Img}
                    src={coverImage}
                    alt="cover image"
                    w={{ base: '75%', sm: '55%', md: '60%', lg: '75%' }}
                    m="auto"
                  /> */}
                  Cover image
                </Else>
              </If>
            </Box>
          </Box>
        </Container>
      </Box>

        {/* {uploadFiles.length > 0 && (
          <>
              <Box sx={{ mt: 2 }}>
              {uploadFiles.map((file, index) => (
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
        )} */}
        <MuiStepper stepNo={stepNo} />
      </CardContent>
    </Card>
</Box>
  );
};

export default TestScreenUpload;

