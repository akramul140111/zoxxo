import { Card, Stack, TextField, Typography, useTheme } from "@mui/material";
import CustomButton from "../CustomButton/CustomButton.jsx";
import { useFormik } from "formik";
import { useEffect } from "react";

import { Link as RouteLink, useLocation, useNavigate } from "react-router-dom";
import * as yup from "yup";
import Box from "@mui/material/Box";
import routeLinks from "../../config/routeLinks.js";
import { toast } from "react-toastify";
import orLine from "../../assets/images/signUp/or-line.svg";
import { useTranslation } from "react-i18next";
const validationSchema = yup.object({
  fullName: yup
    .string()
    .required("Full Name is required")
    .min(3, "Full Name Should be minimum 3 characters length"),
  username: yup.string().required("Username is required"), // New validation for username
  email: yup.string().email("Invalid email").required("Email is required"), // New validation for email
  newPassword: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("New Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("newPassword"), null], "Passwords must match")
    .required("Confirm Password is required"),
});
import { useMutation } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth.js";
import { register as registerUser } from "../../api/auth.js";

import FormLink from "../Links/FormLink.jsx";
import CustomLoadingButton from "../CustomButton/CustomLoadingButton.jsx";
import ContinueWithGoogleButton from "../signInScreen/ContineWithGoogleButton.jsx";


const SignUpCard = () => {
  const { t } = useTranslation("auth");
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";
  const backgroundColor = darkMode ? "#0E1B25" : "#FFF";

  const navigate = useNavigate();

  const { user, login, isGettingLoggedIn } = useAuth();
  const { isLoading, mutate } = useMutation((vals) => registerUser(vals), {
    onSuccess: () => {
      toast.success("User Created Successfully!");
      navigate(`/${routeLinks.signIn}`);
    },
    onError: (e) => toast.error(e?.message || e?.error),
  });

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/";

  useEffect(() => {
    if (user) navigate("/", { replace: true });
  }, [user]);

  const handleSubmit = async (values) => {
    const { fullName, username, email, confirmPassword, newPassword } = values;
  };

  const formik = useFormik({
    initialValues: {
      fullName: "",
      username: "",
      email: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const { fullName, username, email, confirmPassword, newPassword } =
        values;
      mutate({ fullName, email, username, password: confirmPassword });
    },
  });

  return (
    <Card
      data-aos="flip-down"
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

      {/* <GoogleButton reverseTextColor={reverseTextColor} t={t} onSuccess={()=> navigate('/dashboard', {replace: true})}/> */}

      <ContinueWithGoogleButton
        onSuccess={() => navigate("/dashboard", { replace: true })}
      />

      <Box mb={6}>
        <img src={orLine} alt="icon" width={"100%"} height={35} />
      </Box>

      <Stack direction="column" spacing={2}>
        <TextField
          fullWidth
          id="fullName"
          name="fullName"
          label={t("name-or-company")}
          value={formik.values.fullName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.fullName && Boolean(formik.errors.fullName)}
          helperText={formik.touched.fullName && formik.errors.fullName}
        />

        <TextField
          fullWidth
          id="email"
          name="email"
          label={t("email")}
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="username"
          name="username"
          label={t("username")}
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
        />
        <TextField
          fullWidth
          id="newPassword"
          name="newPassword"
          label={t("new-password")}
          type="password"
          value={formik.values.newPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.newPassword && Boolean(formik.errors.newPassword)
          }
          helperText={formik.touched.newPassword && formik.errors.newPassword}
        />
        <TextField
          fullWidth
          id="confirmPassword"
          name="confirmPassword"
          label={t("confirm-password")}
          type="password"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.confirmPassword &&
            Boolean(formik.errors.confirmPassword)
          }
          helperText={
            formik.touched.confirmPassword && formik.errors.confirmPassword
          }
        />
        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          sx={{ m: 2 }}
          fontSize={12}
        >
          {t("by-creating-an-account-you-agree")}
          <FormLink routeLink={routeLinks.termsService}>
            {" "}
            {t("terms-of-service")}
          </FormLink>{" "}
          and{" "}
          <FormLink routeLink={routeLinks.privacyPolicy}>
            {" "}
            {t("privacy-and-cookie")}
          </FormLink>{" "}
          Statement.
        </Typography>

        {isLoading ? (
          <CustomLoadingButton />
        ) : (
          <CustomButton
            variant="contained"
            fullWidth
            type="submit"
            onClick={formik.handleSubmit}
            sx={{ marginY: 5 }}
          >
            {t("create-zoxxo-account")}
          </CustomButton>
        )}
      </Stack>
      <Typography
        variant="body2"
        color="textSecondary"
        align="center"
        sx={{ m: 2 }}
      >
        {" "}
        {t("already-have-an-account?")}{" "}
        <FormLink redirect={redirect} routeLink={routeLinks.signIn}>
          {" "}
          {t("sign-in")}{" "}
        </FormLink>
      </Typography>
    </Card>
  );
};

export default SignUpCard;
