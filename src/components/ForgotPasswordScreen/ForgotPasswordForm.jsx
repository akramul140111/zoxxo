//React Imports
import React, { useEffect, useState } from "react";

//Third Pary Imports
import {
  Button,
  Card,
  Stack,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Box from "@mui/material/Box";
import { useFormik } from "formik";
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as yup from "yup";
import Lottie from "react-lottie";
import folderToFolder from "../../assets/animations/forgot-password.json";

//Internal Imports
import LoadingScreen from "../LoadingScreen";
import routeLinks from "../../config/routeLinks";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { useMutation } from "@tanstack/react-query";
import { login as loginUser, sendResetPasswordEmail } from "../../api/auth";
import useAuth from "../../hooks/useAuth";
import { isBrowser } from "../../utils";
import { getWindow } from "../../utils/inBrowser";
import CustomButton from "../CustomButton/CustomButton";
import FormLink from "../Links/FormLink";
import CustomLoadingButton from "../CustomButton/CustomLoadingButton";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
});

const ForgotPasswordForm = () => {
  const { t } = useTranslation("auth");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [emailVerified, setEmailVerified] = useState();
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";
  const reverseTextColor = darkMode ? "#fff" : "#000";
  const backgroundColor = darkMode ? "#0E1B25" : "#FFF";
  const [errorMsg, setErrorMsg] = useState(null);

  const navigate = useNavigate();
  const isMatchMd = useMediaQuery(theme.breakpoints.down("md"));
  const lottieStyle = isMatchMd
    ? { maxWidth: "400px", margin: "auto" }
    : { maxWidth: "400px", marginLeft: 0 };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: folderToFolder,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/";

  const { user, login, isGettingLoggedIn } = useAuth();

  
  const { isLoading, mutate } = useMutation(
    (vals) => sendResetPasswordEmail(vals),
    {
      onSuccess: () => {
        toast.success('Please, Check your email!');
        navigate(`/${routeLinks.signIn}`, { replace: true });
      },
      onError: (e) => toast.error(e?.message ||  e?.error || 'Something went wrong'),
    }
  );
  

  useEffect(() => {
    if (user) navigate("/", { replace: true });
  }, [user]);

 



 
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
     
      mutate(values.email);
    },
  });

  useEffect(() => {
    if (isBrowser()) {
      const urlparams = new URLSearchParams(getWindow()?.location.search);
      setEmailVerified(Boolean(urlparams.get("isEmailVerified")));
    }
  }, []);

  return (
    <>
      { isLoading && <LoadingScreen />}
      <Grid
        container
        display="flex"
        justifyContent={"space-between"}
        sx={{
          placeItems: "center",
          mt: { xs: 16, sm: 16, md: 20, lg: 24 },
          mb: 10,
        }}
      >
        <Grid item xs={12} md={6} lg={6} sx={{ ml: 0, pl: 0 }}>
          <Box sx={lottieStyle}>
            <Lottie options={defaultOptions} autoPlay loop width="100%" />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={6} sx={{ ml: 0, pl: 0 }}>
          <Card
            data-aos="flip-up"
            sx={{ p: { xs: 3, sm: 5, md: 5, lg: 7 }, bgcolor: backgroundColor }}
          >
            <Typography
              variant="h4"
              align="center"
              color="secondary"
              fontSize={{ lg: 48 }}
              fontWeight={"600"}
              gutterBottom
            >
              {t("create-your-box")}
            </Typography>
            <Typography
              component={"p"}
              variant="p"
              fontSize={{ xs: 16, sm: 18, lg: 24 }}
              lineHeight={{ lg: 1 }}
              textAlign={"center"}
              margin={"auto"}
              color={"#898989"}
              mb={5}
              width={{ xs: "100%", sm: "100%", md: 350 }}
            >
              {t("deliver-your-data-fast")}
            </Typography>

            <form onSubmit={formik.handleSubmit}>
              <Stack direction="column" spacing={2}>
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  label={t("email")}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />

                {isLoading ? (
                 <CustomLoadingButton/>
                ) : (
                  <CustomButton
                    variant="contained"
                    fullWidth
                    type="submit"
                    sx={{  marginY: 5 }}
                  >
                    {t("send-reset-email")}
                  </CustomButton>
                )}
              </Stack>
            </form>
            <Typography
                variant="body2"
                color="textSecondary"
                align="center"
                sx={{ m: 2 }}
              >
              {t("already-have-an-account?")}{" "}
              <FormLink redirect={redirect} routeLink={routeLinks.signIn}>{t("sign-in")}</FormLink>
            
              </Typography>
              
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default ForgotPasswordForm;
