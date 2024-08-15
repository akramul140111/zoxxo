import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import {  Button, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import StickyBox from "react-sticky-box";
import useAuth from "../../hooks/useAuth";
import PricingTable from "./PricingTable";

const ServiceDetailsCard = styled.div`
display: flex;
flex-direction: column;
height: 180px;
justify-content: center;
align-items: center;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 8px;
`;

const Text = styled.div`
  font-size: 16px;
`;

const PricingServiceDetails = () => {
  const { t } = useTranslation("pricing");
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";
  const reverseTextColor = darkMode ? "#fff" : "#000";
  const backgroundColor = darkMode ? "#183042" : "#000";

  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));

  const bgColor = darkMode ? "#000" : "#fafafa";
  const { user } = useAuth();
  const accountData = [
    {
      id: 1,
      title: "forever-free",
      price: "0",
      btnText: "create-account",
      updateBtn: "Use this package"
    },
    {
      id: 1,
      title: "tornado",
      price: "10.99",
      btnText: "create-account",
      updateBtn: "Upgrade package"
    },
    {
      id: 1,
      title: "premium",
      price: "19.99",
      btnText: "create-account",
      updateBtn: "Upgrade package"
    },
  ];

  const fileData = [
    {
      title: "transfer-size-limit",
      text: ["2-GB", "unlimited", "unlimited"],
    },
    {
      title: "storage",
      text: ["4 GB", "1 TB", "10 TB"],
    },
    {
      title: "workspaces",
      text: ["workspaces-1", "workspaces-2", "workspaces-3"],
    },
    {
      title: "download-with-no-account",
      icon: [<DoneIcon />, <DoneIcon />, <DoneIcon />],
    },
    {
      title: "track-downloads",
      icon: [<DoneIcon />, <DoneIcon />, <DoneIcon />],
    },
    {
      title: "monitization",
      icon: [<DoneIcon />, <DoneIcon />, <DoneIcon />],
    }
  ];

  const brandData = [
    {
      title: "custom-download-page",
      icon: [<CloseIcon />, <DoneIcon />, <DoneIcon />],
    },
    {
      title: "wallpaper-backgrounds",
      text: ["advertising-(and-art)", "upload-your-own", "upload-your-own"],
    },
    {
      title: "custom-workspace-image",
      icon: [<CloseIcon />, <DoneIcon />, <DoneIcon />],
    },
  ];

  const transfersData = [
    {
      title: "custom-expiration-dates",
      icon: [<CloseIcon />, <DoneIcon />, <DoneIcon />],
    },
    {
      title: "password-protected-transfers",
      icon: [<CloseIcon />, <DoneIcon />, <DoneIcon />],
    },
    {
      title: "data-encryption",
      icon: [<DoneIcon />, <DoneIcon />, <DoneIcon />],
    },
  ];

  const zoxxoData = [
    {
      title: "zoxxo-manage-(file-manager)",
      icon: [<CloseIcon />, <DoneIcon />, <DoneIcon />],
    },
    {
      title: "zoxxo-ads-(enhance-your-brand)",
      icon: [<CloseIcon />, <DoneIcon />, <DoneIcon />],
    },
  ];

  const renderTextOrIcon = (data) => {
    if (data?.text) {
      return (
        <>
          {data?.text?.map((text, index) => (
            <Typography
              key={index}
              component="p"
              sx={{
                fontSize: "16px",
                color: "#565656",
                fontWeight: "500",
                textAlign: "center",
              }}
            >
              {t(text)}
            </Typography>
          ))}
        </>
      );
    } else if (data?.icon) {
      return (
        <>
          {data?.icon?.map((icon, index) => (
            <div key={index}>{icon}</div>
          ))}
        </>
      );
    }
  };

  return (
    <Box>
      <Box display={{xs: "none", sm: "block"}}>
      <StickyBox  offsetTop={isLargeScreen ? 100 : 50} offsetBottom={20}>
        <Grid container spacing={2} bgcolor={bgColor}>
          <Grid item xs={5} sm={4} display={"flex"} alignItems={"center"}>
            <Typography
              variant='h2'
              component='h2'
              style={{
                fontSize: '22px',
                color: '#ACACAC',
                fontWeight: '600',
                textAlign: 'center',
              }}
            >
              {t('account-type')}
            </Typography>
          </Grid>
          <Grid item xs={7} sm={8} container justifyContent="space-between">
            {accountData?.map((item, index) => (
              <ServiceDetailsCard key={index}>
                <Title style={{ color: reverseTextColor }}>
                  {t(item?.title)}
                </Title>
                <Text style={{ color: reverseTextColor }}>
                  ${t(item?.price)}{" "}
                  <span style={{ color: "#39393" }}>{t("per-month")}</span>
                </Text>
                <Button
                  variant="contained"
                  sx={{
                    marginTop: 1,
                    textTransform: "capitalize",
                    bgcolor: backgroundColor,
                    color: "#fff",
                    minWidth: {sm: "100%" , md: "175px"}
                  }}
                >
                 {!user ? t(item?.btnText) : t(item?.updateBtn)}                  
                </Button>
              </ServiceDetailsCard>
            ))}
          </Grid>
        </Grid>
        </StickyBox>
        <PricingTable title={"send-big-files"} data={fileData} />
        <PricingTable title={"Show off your brand"} data={brandData} />
        <PricingTable title={"Secure your transfers"} data={transfersData} />
        <PricingTable title={"Experience more zoxxo"} data={zoxxoData} />
      </Box>
    </Box>
  );
};

export default PricingServiceDetails;
