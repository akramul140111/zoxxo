import {
  Grid,
  useTheme,
  Typography
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import BusinessCardSlider from "./BusinessCardSlider";
import BusinessPlanTotal from "./BusinessPlanTotal";
import monthlyIcon from "../../assets/images/business/month-icon.svg";
import yearlyIcon from "../../assets/images/business/year-icon.svg";
import yearlyDarkIcon from "../../assets/images/business/dark-year-icon.svg";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { calculatePrice } from '../../utils';
import { useMutation } from "@tanstack/react-query";
import { upgradePlan } from '../../api/user';
import  useAuth  from "../../hooks/useAuth";

const BusinessCardTabs = () => {
  const [plan, setPlan] = useState('monthly');
 
const [tab, setTab] = useState('calculator');
  const [btnSrc, setBtnSrc] = useState(monthlyIcon);
  const [storageValue, setStorageValue] = useState(0);
  const [workspaceValue, setWorkspaceValue] = useState(0);
  const [workspaces, _setWorkspaces] = useState(0);
  const [storage, _setStorage] = useState(0);
  const [customStorage, setCustomStorage] = useState(0);



  const { t } = useTranslation("tornado");
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";
  const backgroundColor = darkMode ? "#0E1B25" : "#000";
  const { user, refetchUser } = useAuth();
  


  const yearlyImg =  !darkMode ? yearlyIcon : yearlyDarkIcon;

  const monthlyData = [
    {
      amount: "21.99",
      extraStorage: `${storageValue * 5}`, // Example calculation for extra storage
      extraWorkpace: `${workspaceValue * 3}`, // Example calculation for extra workspace
      discount: "-10.99",
      reverseCharge: "0.00",
    },
  ];

  const yearlyData = [
    {
      amount: "263.99",
      extraStorage: `${storageValue * 60}`, // Example calculation for extra storage
      extraWorkpace: `${workspaceValue * 36}`, // Example calculation for extra workspace
      discount: "-158.99",
      reverseCharge: "0.00",
    },
  ];

  const handleSwitchChange = () => {
    setPlan(plan === 'monthly' ? 'yearly' : 'monthly');
  };

  useEffect(() => {
    if (plan === 'yearly') {
      setBtnSrc(yearlyImg);
    } else {
      setBtnSrc(monthlyIcon);
    }
  }, [plan]);


  ////////////////////////// Old Code ////////////////////////
  const setStorage = (st) => {
    
    _setStorage((s) => (s === st ? 0 : st));
    setCustomStorage(() => 0);
  };
  
  const setWorkspaces = (ws) =>
    _setWorkspaces((w) => (w === ws ? 0 : ws));
  
  const pricesData = calculatePrice({
    extraStorage: storage === 'custom' ? customStorage || 0 : storage,
    extraWorkspaces: workspaces,
    subscription: plan,
  });
  

  const { isLoading, mutate, error } = useMutation(
    (vals) => upgradePlan(vals),
    {
      onSuccess: () => {
        refetchUser().then();
        // .finally(() => navigate('/dashboard/plan'));
      },
    },
  );
  const err = error?.message || '';
  
  // features list -------------------
  
  const bigFilesFeatures = [
    {
      name: t('pricing:transfer-size-limit'),
      free: <Typography >2 GB</Typography>,
      tornado: <Typography >{t('pricing:unlimited')}</Typography>,
    },
    {
      name: t('pricing:storage'),
      free: <Typography>4 GB</Typography>,
      tornado: <Typography >1 TB</Typography>,
    },
    {
      name: 'Workspaces',
      free: <Typography >1 Workspace</Typography>,
      tornado: <Typography >5 Workspaces</Typography>,
    },
    {
    
      name: t('pricing:download-with-no-account'),
      free: <CheckIcon  boxSize="16px" />,
      tornado: <CheckIcon  boxSize="16px" />,
    },
    {
      name: t('pricing:track-downloads'),
      free: <CheckIcon  boxSize="16px" />,
      tornado: <CheckIcon  boxSize="16px" />,
    },
  ];
  
  const brandFeatures = [
    {
      name: t('pricing:custom-download-page'),
      free: <CloseIcon  boxSize="16px" />,
      tornado: <CheckIcon  boxSize="16px" />,
    },
    {
      name: t('pricing:wallpaper-backgrounds'),
      free: <Typography >{t('pricing:advertising-(and-art)')}</Typography>,
      tornado: <Typography >{t('pricing:upload-your-own')}</Typography>,
    },
    {
      name: t('pricing:custom-workspace-image'),
      free: <CloseIcon  boxSize="16px" />,
      tornado: <CheckIcon boxSize="16px" />,
    },
  ];
  
  const secureTransfersFeatures = [
    {
      name: t('pricing:custom-expiration-dates'),
      free: <CloseIcon color="primary.500" boxSize="16px" />,
      tornado: <CheckIcon color="primary.500" boxSize="16px" />,
    },
    {
      name: t('pricing:password-protected-transfers'),
      free: <CloseIcon color="primary.500" boxSize="16px" />,
      tornado: <CheckIcon color="primary.500" boxSize="16px" />,
    },
    {
      name: t('pricing:data-encryption'),
      free: <CheckIcon color="primary.500" boxSize="16px" />,
      tornado: <CheckIcon color="primary.500" boxSize="16px" />,
    },
  ];
  
  const moreZoxxo = [
    {
      name: t('pricing:zoxxo-manage-(file-manager)'),
      free: <CloseIcon color="primary.500" boxSize="16px" />,
      tornado: <CheckIcon color="primary.500" boxSize="16px" />,
    },
    {
      name: t('pricing:zoxxo-ads-(enhance-your-brand)'),
      free: <CloseIcon color="primary.500" boxSize="16px" />,
      tornado: <CheckIcon color="primary.500" boxSize="16px" />,
    },
  ];

  /////////// Old Code End /////////////

  return (
    <>
      <Typography
        variant={"h5"}
        component="h5"
        fontSize={{ lg: 24 }}
        fontWeight={{ xs: 400, md: 500, lg: 600 }}
        textAlign="center"
      >
        {t("calculate-your-monthly-costs-with-tornado")}
      </Typography>
      <Grid
        container
        display="flex"
        justifyContent="center"
        sx={{ placeItems: "center", p: 3 }}
      >
        <Typography
          variant={"h6"}
          component="h6"
          fontSize={{ lg: 18 }}
          fontWeight={{ xs: 400, md: 500, lg: 600 }}
          textAlign="center"
          mr={1}
        >
          {t("Monthly")}
        </Typography>

        <img
          onClick={handleSwitchChange}
          src={btnSrc}
          width={55}
          height={30}
          alt="icon"
          style={{ cursor: "pointer" }}
          
        />

        <Typography
          variant={"h6"}
          component="h6"
          fontSize={{ lg: 18 }}
          fontWeight={{ xs: 400, md: 500, lg: 600 }}
          textAlign="center"
          ml={1}
        >
          {t("Yearly")}
        </Typography>
        <Typography
          variant={"h6"}
          component="h6"
          fontSize={{ lg: 16 }}
          fontWeight={{ xs: 400, md: 500, lg: 600 }}
          textAlign="center"
          padding={1}
          bgcolor={backgroundColor}
          borderRadius={1}
          ml={1}
          color="#fff"
        >
          {t("save-off")}
        </Typography>
      </Grid>

      <Grid
        container
        display="flex"
        justifyContent="space-between"
        mt={5}
        mb={14}
      >
        <BusinessCardSlider
          storageValue={storage}
          workspaceValue={workspaces}
          setStorageValue={setStorage}
          setWorkspaceValue={setWorkspaces}
        />
        <BusinessPlanTotal
          pricesData={pricesData}
          switchValue={plan}
        />
      </Grid>
    </>
  );
};

export default BusinessCardTabs;
