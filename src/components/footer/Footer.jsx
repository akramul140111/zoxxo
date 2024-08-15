import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import { Container, Grid, Typography, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Footer.module.css"; // Import the CSS module
import styled from "styled-components"; //
import { NavLink } from "react-router-dom";

const SocialMediaButton = styled.button`
  min-width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #d9d9d9;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const darkMode = theme.palette.mode === "dark";
  const backgroundColor = darkMode ? "#0E1B25" : theme.palette.textColor.main;
  const reverseTextColor = "#fff";

  const footerLinks = [
    {
      title: "product",
      links: ["pricing", "business", "sign-up", "sign-in"],
    },
    {
      title: "zoxxo-space",
      links: ["platform", "advertising", "brand",  "monitization"],
    },
    {
      title: "explore",
      links: ["help-center", "terms-of-service", "privacy-policy"],
    },
  ];

  const renderLinks = (links, title) => (
    <>
      {links.map((link, index) => (
        // <Link
        //   key={link}
        //   component="div"
        //   sx={{
        //     color: reverseTextColor,
        //     textDecoration: "none",
        //     cursor: "pointer",
        //     fontSize: "16px",
        //     lineHeight: "25px",
        //     marginBottom: "5px",
        //     transition: "0.3s",
        //     "&:hover": {
        //       color: "#F00",
        //     },
        //   }}
        //   href="#"
        // >
        //   {t(link)}
        // </Link>
        <Link
          key={index}
          component={NavLink}
          to={title === 'zoxxo-space' ? `/zoxxo-space/${link}` : `/${link}`}
          fontSize={{ xs: "12px", md: "16px" }}
          fontWeight={400}
          variant="body2"
          display={"block"}
          sx={{
            color: reverseTextColor,
            textDecoration: "none",
            cursor: "pointer",
            lineHeight: "25px",
            marginTop: "3px",
            transition: "0.3s",
            textTransform: "capitalize",
            "&:hover": {
              color: "#F00",
            },
          }}
          href={"#"}
        >
          {t(link)}
        </Link>
      ))}
    </>
  );

  const LeftHalf = () => {
    return (
      <Grid container item xs={12} md={5} lg={6} sx={{ mb: 3 }}>
        <Grid item xs={12}>
          <Link component={NavLink} to={"/"}>
            <img
              src="/imgs/footer-logo.png"
              alt="footer-logo"
              width={64}
              height={72}
            />
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="p"
            component="p"
            sx={{
              color: reverseTextColor,
              fontSize: "16px",
              width: { xs: "240px", sm: "365px" },
              my: "30px",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the {"industry's"} standard dummy
            text ever since the 1500s.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          display={"flex"}
          justifyContent={"flex-start"}
          gap={2}
        >
          <SocialMediaButton
            className={styles.up}
            style={{ backgroundColor: backgroundColor }}
          >
            {/* Apply the CSS module class */}
            <InstagramIcon sx={{ width: "18px", color: reverseTextColor }} />
          </SocialMediaButton>
          <SocialMediaButton
            className={styles.up}
            style={{ backgroundColor: backgroundColor }}
          >
            <XIcon sx={{ width: "18px", color: reverseTextColor }} />
          </SocialMediaButton>
          <SocialMediaButton
            className={styles.up}
            style={{ backgroundColor: backgroundColor }}
          >
            <img
              src="/imgs/tiktok-fill.svg"
              alt="tiktok-fill"
              width="18px"
              height="18px"
            />
          </SocialMediaButton>
        </Grid>
      </Grid>
    );
  };
  const RightHalf = () => {
    return (
      <Grid container item xs={12} md={7} lg={6}>
        {footerLinks.map(({ title, links }) => (
          <Grid
            key={title}
            item
            xs={12}
            md={4}
            sx={{ mb: 2, pl: { xs: 0, md: 1, lg: 0 } }}
          >
            <Typography
              variant="p"
              component="h6"
              fontSize={"16px"}
              fontWeight={700}
              color={reverseTextColor}
              marginBottom={"20px"}
            >
              {t(title)}
            </Typography>

            {renderLinks(links, title)}
          </Grid>
        ))}
      </Grid>
    );
  };
  return (
    <Box sx={{ background: backgroundColor, pt: 0.5}}>
      <Container>
        <Grid container sx={{ mt: 10 }}>
          <LeftHalf style={{ marginTop: 60 }} />
          <RightHalf />
        </Grid>
      </Container>
      
        <Grid py={1.5} borderTop={"1px solid #FFF"} mt={5}>
          <Typography
            variant="p"
            component="p"
            sx={{
              color: reverseTextColor,
              fontSize: "16px",
              textAlign: "center",
            }}
          >
            {`Copyright © zoxxo | Designed by Techbyte`}
          </Typography>
        </Grid>    
    </Box>
  );
};

export default Footer;
