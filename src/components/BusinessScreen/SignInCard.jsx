//React Imports
import React, { useEffect, useState } from "react";

//Third Pary Imports
import { Card, Stack, TextField, Typography, useTheme } from "@mui/material";
import Box from "@mui/material/Box";

import { useFormik } from "formik";
import { Link as RouteLink, useLocation, useNavigate } from "react-router-dom";
import * as yup from "yup";

//Internal Imports

import routeLinks from "../../config/routeLinks";
import orLine from "../../assets/images/signUp/or-line.svg";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { useMutation } from "@tanstack/react-query";
import { login as loginUser } from "../../api/auth";
import useAuth from "../../hooks/useAuth";
import { isBrowser } from "../../utils";
import { getWindow } from "../../utils/inBrowser";
import CustomButton from "../CustomButton/CustomButton";

import FormLink from "../Links/FormLink";
import LoadingScreen from "../LoadingScreen";
import ContinueWithGoogleButton from "../signInScreen/ContineWithGoogleButton";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const SignInCard = () => {
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

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/";

  const { user, login, isGettingLoggedIn } = useAuth();

  const { isLoading, mutate } = useMutation((vals) => loginUser(vals), {
    onSuccess: (d) => {
      login(d, d.token);
      navigate(routeLinks.home, { replace: true });
    },
    onError: (e) => {
      // setErr(e.message);
      toast.error(e?.message);
      // if (e.errorCode === 'EMAIL_NOT_VERIFIED') onOpen();
    },
  });

  useEffect(() => {
    if (user) navigate("/", { replace: true });
  }, [user]);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleSubmit = async (values) => {
    const { email, password } = values;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      mutate(values);
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
      {isLoading && <LoadingScreen />}
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
          width={{ xs: "100%", sm: "100%", md: 350 }}
        >
          {t("deliver-your-data-fast")}
        </Typography>

        <ContinueWithGoogleButton
          onSuccess={() => navigate("/dashboard", { replace: true })}
        />

        <Box mb={6}>
          <img src={orLine} alt="icon" width={"100%"} height={35} />
        </Box>
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
            <TextField
              fullWidth
              id="password"
              name="password"
              label={t("password")}
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <Box display="flex" justifyContent="center">
              <FormLink
                redirect={redirect}
                routeLink={routeLinks.forgotPassword}
                sx={{
                  textDecoration: "none",
                  textAlign: "center",
                  fontSize: 14,
                }}
              >
                {t("forgot-password")}
              </FormLink>
            </Box>

            {isLoading ? (
              <CustomButton color="primary" variant="outlined" disabled>
                Loading...
              </CustomButton>
            ) : (
              <CustomButton
                variant="contained"
                fullWidth
                type="submit"
                sx={{ textTransform: "capitalize", marginY: 5 }}
              >
                {t("login-to-your-zoxxo-account")}
              </CustomButton>
            )}

            <Typography
              variant="body2"
              color="textSecondary"
              align="center"
              sx={{ m: 2 }}
            >
              {t("don't-have-an-account?")}{" "}
              <FormLink redirect={redirect} routeLink={routeLinks.signUp}>
                {t("sign-up")}
              </FormLink>
            </Typography>
          </Stack>
        </form>
      </Card>
    </>
  );
};

export default SignInCard;
