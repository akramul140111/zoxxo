import React, { useState } from 'react';

import { useMutation } from '@tanstack/react-query';
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';
import { useTranslation } from 'react-i18next';

import googleIcon from "../../assets/images/signUp/google-icon.svg";
import Error from '../Error/Error';
import { googleLogin } from '../../api/auth';
import useAuth from '../../hooks/useAuth';
import { Button, Typography, useTheme } from '@mui/material';
import LoadingScreen from '../LoadingScreen';

function GoogleButton(props) {
  const { t } = useTranslation('auth');
  const { login: stateLogin } = useAuth();
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";
  const reverseTextColor = darkMode ? "#fff" : "#000";


  const [err, setErr] = useState('');
  const { isLoading, mutate } = useMutation(googleLogin, {
    onSuccess: (d) => {
      stateLogin(d, d.token);
      if (typeof props.onSuccess === 'function') props.onSuccess();
    },
    onError: (err) => setErr(err?.message || ''),
  });

  const login = useGoogleLogin({
    flow: 'auth-code',
    ux_mode: 'popup',
    scope: 'email profile',
    onError: (e) => setErr(e.error || ''),
    onSuccess: (r) => mutate(r.code),
  });

  return (
    <React.Fragment>
        {isLoading && <LoadingScreen/>}
        
      <Button
      variant="outlined"
      sx={{
        border: `1px solid ${reverseTextColor}`,
        width: "100%",
        marginY: "50px",
        paddingY: "10px",
      }}
        {...props}
        disabled={isLoading}
        onClick={(e) => {
          login();
          setErr('');
          if (props.onClick) props.onClick(e);
        }}
      >
        
        <img src={googleIcon} alt="icon" width={30} height={30} />
              <Typography
                component={"p"}
                variant="p"
                fontSize={{ lg: 16 }}
                color={reverseTextColor}
                fontWeight={"500"}
                ml={{ xs: 3, lg: 5 }}
              >
                {t("continue-with-google")}
              </Typography>
      </Button>
      <Error message={err} my={2} />
    </React.Fragment>
  );
}

export default function ContinueWithGoogleButton(props) {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID || ''}>
      <GoogleButton {...props} />
    </GoogleOAuthProvider>
  );
}
