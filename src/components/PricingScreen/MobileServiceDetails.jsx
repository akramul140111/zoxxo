import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import { Typography, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const ServiceDetailsCard = styled.div`
  border: 0.5px solid #565656;
  padding-bottom: 10px;
`;

const ServiceCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 15px 0px;
  @media (max-width: 600px) {
    padding: 10px 10px 0px;
  }
`;

const SubTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #000;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

export default function MobileServiceDetails() {
  const { t } = useTranslation("pricing");
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";
  const reverseTextColor = darkMode ? "#fff" : "#000";

  const fileData = [
    {
      id: 1,
      title: "transfer-size-limit",
      item: [
        {
          title: "forever-free",
          text: "2 GB",
        },
        {
          title: "business",
          text: "unlimited",
        },
        {
          title: "premium",
          text: "unlimited",
        },
      ],
    },
    {
      id: 2,
      title: "storage",
      item: [
        {
          title: "forever-free",
          text: "4 GB",
        },
        {
          title: "business",
          text: "1 TB",
        },
        {
          title: "premium",
          text: "10 TB",
        },
      ],
    },
    {
      id: 3,
      title: "workspaces",
      item: [
        {
          title: "forever-free",
          text: "workspaces-1",
        },
        {
          title: "business",
          text: "workspaces-2",
        },
        {
          title: "premium",
          text: "workspaces-3",
        },
      ],
    },
    {
      id: 4,
      title: "download-with-no-account",
      item: [
        {
          title: "forever-free",
          icon: <DoneIcon />,
        },
        {
          title: "business",
          icon: <DoneIcon />,
        },
        {
          title: "premium",
          icon: <DoneIcon />,
        },
      ],
    },
    {
      id: 5,
      title: "track-downloads",
      item: [
        {
          title: "forever-free",
          icon: <DoneIcon />,
        },
        {
          title: "business",
          icon: <DoneIcon />,
        },
        {
          title: "premium",
          icon: <DoneIcon />,
        },
      ],
    },
    {
      id: 6,
      title: "monitization",
      item: [
        {
          title: "forever-free",
          icon: <DoneIcon />,
        },
        {
          title: "business",
          icon: <DoneIcon />,
        },
        {
          title: "premium",
          icon: <DoneIcon />,
        },
      ],
    },
  ];

  const brandData = [
    {
      id: 1,
      title: "custom-download-page",
      item: [
        {
          title: "forever-free",
          cIcon: <CloseIcon />,
        },
        {
          title: "business",
          icon: <DoneIcon />,
        },
        {
          title: "premium",
          icon: <DoneIcon />,
        },
      ],
    },
    {
      id: 2,
      title: "wallpaper-backgrounds",
      item: [
        {
          title: "forever-free",
          text: "advertising-(and-art)",
        },
        {
          title: "business",
          text: "upload-your-own",
        },
        {
          title: "premium",
          text: "upload-your-own",
        },
      ],
    },
    {
      id: 3,
      title: "custom-workspace-image",
      item: [
        {
          title: "forever-free",
          cIcon: <CloseIcon />,
        },
        {
          title: "business",
          icon: <DoneIcon />,
        },
        {
          title: "premium",
          icon: <DoneIcon />,
        },
      ],
    },
  ];

  const transfersData = [
    {
      id: 1,
      title: "custom-expiration-dates",
      item: [
        {
          title: "forever-free",
          cIcon: <CloseIcon />,
        },
        {
          title: "business",
          icon: <DoneIcon />,
        },
        {
          title: "premium",
          icon: <DoneIcon />,
        },
      ],
    },
    {
      id: 2,
      title: "password-protected-transfers",
      item: [
        {
          title: "forever-free",
          cIcon: <CloseIcon />,
        },
        {
          title: "business",
          icon: <DoneIcon />,
        },
        {
          title: "premium",
          icon: <DoneIcon />,
        },
      ],
    },
    {
      id: 3,
      title: "data-encryption",
      item: [
        {
          title: "forever-free",
          cIcon: <CloseIcon />,
        },
        {
          title: "business",
          icon: <DoneIcon />,
        },
        {
          title: "premium",
          icon: <DoneIcon />,
        },
      ],
    },
  ];

  const zoxxoData = [
    {
      id: 1,
      title: "zoxxo-manage-(file-manager)",
      item: [
        {
          title: "forever-free",
          cIcon: <CloseIcon />,
        },
        {
          title: "business",
          icon: <DoneIcon />,
        },
        {
          title: "premium",
          icon: <DoneIcon />,
        },
      ],
    },
    {
      id: 2,
      title: "zoxxo-ads-(enhance-your-brand)",
      item: [
        {
          title: "forever-free",
          cIcon: <CloseIcon />,
        },
        {
          title: "business",
          icon: <DoneIcon />,
        },
        {
          title: "premium",
          icon: <DoneIcon />,
        },
      ],
    },
  ];

  const renderTextOrIcon = (item) => {
    return (
      <ServiceCard>
        <Typography
          variant="body1"
          sx={{ color: reverseTextColor, fontWeight: 500 }}
        >
          {t(item.title)}
        </Typography>
        <Typography
          fontSize={14}
          variant="body1"
          sx={{ color: reverseTextColor, fontWeight: 500 }}
        >
          {item?.icon && <DoneIcon sx={{ mr: 1 }} />}
          {item?.cIcon && <CloseIcon sx={{ mr: 1 }} />}
          {t(item.text)}
        </Typography>
      </ServiceCard>
    );
  };

  return (
    <Box>
      <Box sx={{ mt: "30px" }}>
        <Title style={{ color: reverseTextColor }}>{t("send-big-files")}</Title>
        <Box>
          {fileData?.map((data, index) => (
            <Box key={index} sx={{ my: "20px" }}>
              <Box sx={{ bgcolor: "#ECECEC", p: "15px" }}>
                <SubTitle>{t(data?.title)}</SubTitle>
              </Box>
              <ServiceDetailsCard>
                {data.item.map((item, idx) => (
                  <Box key={idx}>{renderTextOrIcon(item)}</Box>
                ))}
              </ServiceDetailsCard>
            </Box>
          ))}
        </Box>
      </Box>
      <Box sx={{ mt: "50px" }}>
        <Title style={{ color: reverseTextColor }}>
          {t("show-off-your-brand")}
        </Title>
        <Box>
          {brandData?.map((data, index) => (
            <Box key={index} sx={{ my: "20px" }}>
              <Box sx={{ bgcolor: "#ECECEC", p: "15px" }}>
                <SubTitle>{t(data?.title)}</SubTitle>
              </Box>
              <ServiceDetailsCard>
                {data.item.map((item, idx) => (
                  <Box key={idx}>{renderTextOrIcon(item)}</Box>
                ))}
              </ServiceDetailsCard>
            </Box>
          ))}
        </Box>
      </Box>
      <Box sx={{ mt: "50px" }}>
        <Title style={{ color: reverseTextColor }}>
          {t("secure-your-transfer")}
        </Title>
        <Box>
          {transfersData?.map((data, index) => (
            <Box key={index} sx={{ my: "20px" }}>
              <Box sx={{ bgcolor: "#ECECEC", p: "15px" }}>
                <SubTitle>{t(data?.title)}</SubTitle>
              </Box>
              <ServiceDetailsCard>
                {data.item.map((item, idx) => (
                  <Box key={idx}>{renderTextOrIcon(item)}</Box>
                ))}
              </ServiceDetailsCard>
            </Box>
          ))}
        </Box>
      </Box>
      <Box sx={{ mt: "50px" }}>
        <Title style={{ color: reverseTextColor }}>
          {t("secure-your-transfer")}
        </Title>
        <Box>
          {zoxxoData?.map((data, index) => (
            <Box key={index} sx={{ my: "20px" }}>
              <Box sx={{ bgcolor: "#ECECEC", p: "15px" }}>
                <SubTitle>{t(data?.title)}</SubTitle>
              </Box>
              <ServiceDetailsCard>
                {data.item.map((item, idx) => (
                  <Box key={idx}>{renderTextOrIcon(item)}</Box>
                ))}
              </ServiceDetailsCard>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
