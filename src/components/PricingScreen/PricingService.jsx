import { Button, Grid, Typography, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import PricingCard from "./PricingCard";

const CustomTab = ({ label, index, activeIndex, setActiveIndex, t }) => {
  const handleClick = () => {
    setActiveIndex(index);
  };
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";
  const reverseTextColor = darkMode ? "#fff" : "#000";

  return (
    <Button
      data-aos="zoom-in"
      variant="outlined"
      onClick={handleClick}
      sx={{
        marginTop: 1,
        textTransform: "capitalize",
        border:
          index === activeIndex ? "none" : `1px solid ${reverseTextColor}`,
        bgcolor:
          index === activeIndex
            ? darkMode
              ? "#ff0000"
              : "#000"
            : "transparent",
        fontSize: "18px",
        color: index === activeIndex ? "#fff" : reverseTextColor,
        "&:hover": {
          bgcolor: "#000",
          color: "#fff",
          border: "1px solid #fff",
        },
      }}
    >
      {t(label)}
    </Button>
  );
};

const TabPanel = ({ children, value, index }) => {
  return (
    <div hidden={value !== index}>
      {value === index && (
        <Box
          sx={{
            padding: "16px",
            my: "50px",
            "@media (max-width: 600px)": { my: "20px" },
          }}
        >
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
};

const PricingService = () => {
  const { t } = useTranslation("pricing");
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";
  const reverseTextColor = darkMode ? "#fff" : "#000";
  const backgroundColor = darkMode ? "#0E1B25" : "none";
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const serviceData = [
    {
      id: 1,
      title: "forever-free",
      text: "upload-files-and-share-links-as-much-as-you-like",
      price: "0",
      file: "transfer-2-GB",
      storage: "4-GB-storage",
      notice: "no-money-no-problem",
      btnText: "create-account",
      updateBtn: "Use this package"
    },
    {
      id: 2,
      title: "Tornado",
      text: "upload-files-share-links-and-much-more",
      price: "10.99",
      previewPrice: "21.99",
      file: "unlimited-file",
      storage: "1-TB-storage",
      notice: "per-person-billed-yearly",
      btnText: "create-account",
      updateBtn: "Upgrade package"
    },
    {
      id: 3,
      title: "premium",
      text: "upload-files-share-links-and-much-more",
      price: "40.75",
      previewPrice: "337.49",
      file: "unlimited-file",
      storage: "10-TB-storage",
      notice: "per-person-billed-yearly",
      btnText: "create-account",
      updateBtn: "Upgrade package"
    },
  ];

  const serviceYearlyData = [
    {
      id: 1,
      title: "forever-free",
      text: "upload-files-and-share-links-as-much-as-you-like",
      price: "0",
      file: "transfer-2-GB",
      storage: "4-GB-storage",
      notice: "no-money-no-problem",
      btnText: "create-account",
      updateBtn: "Use this package"
    },
    {
      id: 2,
      title: "Tornado",
      text: "upload-files-share-links-and-much-more",
      price: "118.75",
      previewPrice: "221.99",
      file: "unlimited-file",
      storage: "1-TB-storage",
      notice: "per-person-billed-yearly",
      btnText: "create-account",
      updateBtn: "Upgrade package"
    },
    {
      id: 3,
      title: "premium",
      text: "upload-files-share-links-and-much-more",
      price: "218.75",
      previewPrice: "337.49",
      file: "unlimited-file",
      storage: "10-TB-storage",
      notice: "per-person-billed-yearly",
      btnText: "create-account",
      updateBtn: "Upgrade package"
    },
  ];

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "5px",
        }}
      >
        <CustomTab
          label={t("monthly")}
          index={0}
          activeIndex={value}
          setActiveIndex={setValue}
          t={t}
        />
        <CustomTab
          label={t("yearly")}
          index={1}
          activeIndex={value}
          setActiveIndex={setValue}
          t={t}
        />
      </Box>
      <Typography
        variant="p"
        component="p"
        style={{
          fontSize: "16px",
          color: reverseTextColor,
          textAlign: "center",
          marginTop: "10px",
        }}
      >
        <span style={{ color: "#F00" }}>{t("save-over-50%")}</span>{" "}
        {t("with-yearly-billing")}
      </Typography>
      <TabPanel value={value} index={0}>
        <Grid container spacing={2}>
          {serviceData?.map((item) => (
            <Grid item xs={12} sm={12} md={4} key={item?.id} sx={{ paddingLeft: "0 !important"}}>
              <PricingCard data={item} />
            </Grid>
          ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container spacing={2}>
          {serviceYearlyData?.map((item) => (
            <Grid item xs={12} sm={12} md={4} key={item?.id}>
              <PricingCard data={item} />
            </Grid>
          ))}
        </Grid>
      </TabPanel>
    </Box>
  );
};

export default PricingService;
