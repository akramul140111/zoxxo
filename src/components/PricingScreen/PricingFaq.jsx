import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, Typography, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const faqData = [
  {
    id: 1,
    title: "faq-title-1",
    content: "faq-body-1",
  },
  {
    id: 2,
    title: "faq-title-2",
    content: "faq-body-2",
  },
  {
    id: 3,
    title: "faq-title-3",
    content: "faq-body-3",
  },
  {
    id: 4,
    title: "faq-title-4",
    content: "faq-body-4",
  },
  {
    id: 5,
    title: "faq-title-5",
    content: "faq-body-5",
  },
  {
    id: 6,
    title: "faq-title-6",
    content: "faq-body-6",
  },
  {
    id: 7,
    title: "faq-title-7",
    content: "faq-body-7",
  },
];

export default function PricingFaq() {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const { t } = useTranslation("pricing");
  const toggleAccordion = (index) => {
    setActiveAccordion((prev) => (prev === index ? null : index));
  };

  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";
  const reverseTextColor = darkMode ? "#fff" : "#000";
  const iconTextColor = darkMode ? "#000" : "#fff";
  const backgroundColor = darkMode ? "#fff" : "#1D1D1D";

  return (
    <Box
      sx={{
        padding: "16px",
        mb: "100px",
        "@media (max-width: 600px)": { mb: "0px", mt: "40px" },
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: "60px",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "15px",
          "@media (max-width: 600px)": { fontSize: "22px" },
        }}
      >
        {t("got-a-question?-no-problem")}
      </Typography>
      <Typography
        variant="p"
        component="p"
        sx={{
          color: reverseTextColor,
          fontSize: "16px",
          textAlign: "center",
          maxWidth: "740px",
          margin: "0 auto",
        }}
      >
        {t("faq-main-body-tag")}
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", mt: "50px" }}>
        {faqData.map((item, index) => (
          <Box
          data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
            key={index}
            sx={{
              cursor: "pointer",
              marginBottom: "40px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingBottom: "14px",
                borderBottom:
                  activeAccordion === index
                    ? "none"
                    : `1px solid ${reverseTextColor}`,
              }}
              onClick={() => toggleAccordion(index)}
            >
              <Typography
                variant="h6"
                sx={{
                  fontSize: "18px",
                  color: reverseTextColor,
                  fontWeight: "700",
                }}
              >
                {t(item.title)}
              </Typography>
              <IconButton edge="end">
                {activeAccordion === index ? (
                  <Box
                    sx={{
                      bgcolor: "#F00",
                      borderRadius: "50%",
                      padding: "3px",
                    }}
                  >
                    <CloseIcon
                      sx={{
                        color: "#fff",
                        fontSize: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    />
                  </Box>
                ) : (
                  <Box
                    sx={{
                      bgcolor: backgroundColor,
                      borderRadius: "50%",
                      padding: "3px",
                    }}
                  >
                    <AddIcon
                      sx={{
                        color: iconTextColor,
                        fontSize: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    />
                  </Box>
                )}
              </IconButton>
            </Box>
            {activeAccordion === index && (
              <Box sx={{ paddingTop: "10px" }}>
                <Typography
                  sx={{ fontSize: "16px", color: reverseTextColor }}
                >
                  {t(item.content)}
                </Typography>
              </Box>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
