import {
  Grid,
  useTheme,
  Typography,
  useMediaQuery,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
} from "@mui/material";
import Box from "@mui/material/Box";
import Lottie from "react-lottie";
import uploadFileAnimation from "../../assets/animations/uploadFile.json";
import { useTranslation } from "react-i18next";
import CustomButton from "../CustomButton/CustomButton";
import Logo from "../../assets/logos/logo-tablet light.png";
import LogoDark from "../../assets/logos/logo-tablet dark.png";
import React from "react";
import FolderIcon from "@mui/icons-material/Folder";
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import CloudDownload from "@mui/icons-material/CloudDownload";
import useAuth from "../../hooks/useAuth";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getCampaign, getDownloadLinks, getUploadInfo, incrementClicks } from "../../api";
import moment from "moment";
import { isBrowser, removeHash } from "../../utils";
import CustomLoadingButton from "../CustomButton/CustomLoadingButton";

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

const DownloadFile = () => {
  const { t } = useTranslation("uploader");
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";
  const isMatchMd = useMediaQuery(theme.breakpoints.down("md"));

  const lottieStyle = isMatchMd
    ? { maxWidth: "500px", margin: "auto" }
    : { maxWidth: "500px", marginLeft: 0 };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: uploadFileAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };


  // ------------------ Code From Existing Site ----------------------------
  
const { user } = useAuth();
const [downloadId, setDownloadId] = React.useState('');
const { isLoading, isFetching, data, error } = useQuery(
  ['upload', downloadId],
  () => getUploadInfo(downloadId),
  {
    enabled: Boolean(downloadId),
  },
);
const err = error?.message || '';

const [isGettingLinks, setGettingLinks] = React.useState(false);
const [downloadLinksError, setDownloadLinksError] = React.useState('');

const [previewCreative, setPreviewCreative] = React.useState();

const beginDownload = (url) => {
  const link = document.createElement('a');
  link.href = url;
  link.download = `${data?.name || 'zoxxo'}.zip`; // Replace with the desired file name
  document.body.appendChild(link);
  // Trigger the download
  link.click();
};


const { data: campaign } = useQuery(
  ['campaign'],
  () => getCampaign('download-screen'),
  {
    enabled: !(user || data?.user)?.subscription?.type, // don't show ad on files uploaded by tornado user
  },
);
const creativeNo = Number.parseInt((Math.random() * 10).toString()) % 2;
const creative =
  previewCreative ||
  (creativeNo && campaign?.isABTesting
    ? campaign.creativeABTesting
    : campaign?.creative);

const { mutate } = useMutation(() =>
  incrementClicks(campaign?._id || '', campaign?.updateToken || ''),
);

React.useEffect(() => {
  // if preview is available in url, show it
  if (isBrowser()) {
    const searchParams = new URLSearchParams(window.location.search);
    const preview = searchParams.get('preview-creative');
    if (preview) {
      setPreviewCreative(JSON.parse(preview));
    }
  }
  
  if (isBrowser()) {
    const q = new URLSearchParams(window.location.search);
    setDownloadId(q.get('uploadId') || '');
  }
}, [setDownloadId]);




  return (
    <Grid
      container
      display="flex"
      justifyContent={"space-between"}
      sx={{ placeItems: "center", mb: 16, mt: 24, }}
    >
      <Grid item xs={12} md={6} lg={7} data-aos="flip-up">
        {/* <Box display={"flex"} mb={5} justifyContent={"center"}>
          {darkMode ? (
            <img src={LogoDark} width={"70px"} />
          ) : (
            <img src={Logo} width={"70px"} />
          )}
        </Box> */}
        <Typography
          variant="h3"
          component="h3"
          fontSize={{ lg: 60 }}
          fontWeight={{ sx: 400, md: 500, lg: 700 }}
          textAlign={{ lg: "center", sm: "center" }}
          mb={"10px"}
        >
          {t("download-your-files!")}
        </Typography>
        <Typography
          textAlign={{ lg: "center", sm: "center" }}
          variant="p"
          component="p"
          fontSize={{ lg: 16 }}
          fontWeight={{ md: 300, lg: 500 }}
          mb={3}
        >
          {t("deliver-your-data-fast-line")}
        </Typography>
        <Box mb={2} display={"flex"} justifyContent={"center"} >
          <List  sx={{width: '80%'}}>
          {data?.files?.map((file) => (
    <>
    <ListItem sx={{ my: 0.2}}>
      <ListItemAvatar>
        <Avatar>
          <CloudDownloadIcon />
        </Avatar>
      </ListItemAvatar>
      
      <ListItemText  primary={removeHash(file.filename)} secondary={<>{t('common:uploaded')}:&nbsp; {moment(data?.createdAt).format('DD.MM.YYYY')}</>} /> 
      
    </ListItem>
    <Divider variant="inset" component="li" />
</>
          ))}
     

   
           
          </List>
        </Box>
        <Box display={"flex"} justifyContent={"center"}>
        {
          isGettingLinks ? (
            <CustomLoadingButton/>
          ):(  <CustomButton    
          
            onClick={() => {
            
                    setGettingLinks(true);
                    getDownloadLinks(downloadId)
                      .then((d) => {
                        beginDownload(d.link);
                        setDownloadLinksError('');
                      })
                      .catch((e) => setDownloadLinksError(e.message))
                      .finally(() => setGettingLinks(false));
                  }} startIcon={<CloudDownload sx={{mr: 0.5}}/>} style={{ minWidth: "220px" }}
              
                  >
              {" "}
              {t("download")}
            </CustomButton>)
        }
        </Box>
      </Grid>
      <Grid item xs={12} md={6} lg={5} sx={{ ml: 0, pl: 0 }}>
        <Box sx={lottieStyle}>
          <Lottie options={defaultOptions} autoPlay loop width="100%" />
        </Box>
      </Grid>
    </Grid>
  );
};

export default DownloadFile;
