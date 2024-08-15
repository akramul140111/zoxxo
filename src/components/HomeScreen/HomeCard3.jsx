import { Typography, useTheme, Card, CardContent } from "@mui/material";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";
import styled, { css } from "styled-components";

const borderStyles = css`
  background: #f00;
  position: absolute;
  transition: all 0.2s linear;
`;

const BorderTop = styled(Box)`
  ${borderStyles}
  width: 0;
  height: 1px;
  top: 0;
  left: 0;
`;

const BorderRight = styled(Box)`
  ${borderStyles}
  width: 1px;
  height: 0;
  top: 0;
  right: 0;
`;

const BorderBottom = styled(Box)`
  ${borderStyles}
  width: 0;
  height: 1px;
  bottom: 0;
  right: 0;
`;

const BorderLeft = styled(Box)`
  ${borderStyles}
  width: 1px;
  height: 0;
  bottom: 0;
  left: 0;
`;

const HomeCard3 = ({ data }) => {
  const { t } = useTranslation("home");
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";
  const reverseTextColor = darkMode ? "#fff" : "#000";
  const bgColor = darkMode ? "#0E1B25" : "#fff";

  return (
    <Card
    data-aos="zoom-in-down"
      sx={{
        maxWidth: { xs: "280px", sm: "385px", md: "350px", lg: "385px" },
        p: { xs: 4, sm: 2, md: 2, lg: 4 },
        color: reverseTextColor,
        backgroundColor: bgColor,
        mb: 5,
        margin: "auto",
        position: "relative",
        overflow: "hidden",
        "&:hover .btnBorderTop, &:hover .btnBorderBottom": {
          width: "100%",
        },
        "&:hover .btnBorderRight, &:hover .btnBorderLeft": {
          height: "100%",
        },
      }}
    >
      <BorderTop className="btnBorderTop" />
      <BorderRight className="btnBorderRight" />
      <BorderBottom className="btnBorderBottom" />
      <BorderLeft className="btnBorderLeft" />
      <CardContent>
        <img src={data?.icon} style={{ height: "56px" }} />
        <Typography
          gutterBottom
          variant="h5"
          fontSize={{ lg: "24px" }}
          fontWeight={700}
          component="div"
          sx={{ mt: 2 }}
        >
          {t(data?.title)}
        </Typography>
        <Typography
          gutterBottom
          variant="h3"
          fontSize={{ xs: "24px", md: "18px", lg: "32px" }}
          fontWeight={700}
          component="div"
          sx={{ mt: 5 }}
        >
          {t(data?.price)}
        </Typography>
        <Typography variant="body2" fontSize={{ lg: "12px" }} fontWeight={400}>
          {t(data?.text)}
        </Typography>
        <Box display={"flex"} gap={1} sx={{ mt: 5 }}>
          <CloseIcon
            sx={{ fontSize: { xs: "16px", md: "16px", lg: "20px" } }}
          />
          <Typography
            variant="h5"
            component="span"
            fontSize={{ xs: "12px", md: "12px", lg: "16px" }}
            fontWeight={600}
          >
            {t(data?.notice)}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default HomeCard3;
