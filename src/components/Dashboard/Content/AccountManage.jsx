/* eslint-disable no-unused-vars */
import React from 'react';
import ContentTitle from "./ContentTitle";
import { Box, Button, Card, Divider, Grid, Typography, useMediaQuery } from "@mui/material";
import ZoxxoTab from "./ZoxxoTab";
import PaysafeCard from "./PaysafeCard";
import ZoxxoInput from "./ZoxxoInput";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { styled } from '@mui/material/styles';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const StyledBox = styled(Box)(({ theme }) => ({
  padding: "5px",
  backgroundColor: theme.palette.mode === "dark" ? "#183042" : "#F7F7F7",
  borderRadius: "20px",
  border: "2px dashed #4C535F",
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "150px", 
  margin: "0", 
  '&:hover': {
    backgroundColor: theme.palette.mode === "dark" ? "#0E1B25" : "#e0e0e0",
  },
}));

const HiddenInput = styled('input')({
  display: 'none',
});

const AccountManage = () => {
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";
  const bgColor = darkMode ? "#0E1B25" : "#fff";
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const tabs = ["Account Setting", "Zoxxo URL", "Delete Account"];

  const handleFileChange = (event) => {
    console.log("file uploading");
  };

  const contents = [
    <Box key={0}>
      <Typography
        variant="body1"
        sx={{
          color: "4C535F",
          fontWeight: "600",
          fontSize: 18,
        }}
      >
        Your Profile Picture
      </Typography>
      <Box sx={{ mt: 2 }}>
        <StyledBox>
          <HiddenInput
            accept="image/*"
            id="file-upload"
            type="file"
            onChange={handleFileChange}
          />
          <label htmlFor="file-upload">
            <Box display="flex" flexDirection="column" alignItems="center">
              <AddPhotoAlternateIcon sx={{ fontSize: 50, color: "#4C535F" }} />
              <Button
                component="span"
                sx={{ textTransform: "none", color: "#4C535F", mt: 1, textAlign: "center" }}
              >
                Upload your photo
              </Button>
            </Box>
          </label>
        </StyledBox>
      </Box>
      <Divider
        sx={{ borderTopWidth: "1px", borderTopColor: "#E0E4EC", mb: 5, mt: 6 }}
      />
      <ZoxxoInput
        name="username"
        label="Change account name"
        placeholder="Please enter your username"
      />
      <Button
        variant="contained"
        sx={{
          width: "fit-content",
          alignSelf: "flex-start",
          borderRadius: "5px",
          py: "10px",
          mt: 3,
          px: 5,
          textTransform: "none",
          fontWeight: 700,
          fontSize: 18,
          background: darkMode ? "#183042" : "red"
        }}
      >
        Update Profile
      </Button>
    </Box>,
    <Box key={1}>
      <Box>
        <Typography
          variant="body1"
          sx={{
            color: "4C535F",
            fontWeight: "600",
            fontSize: 16,
          }}
        >
          All the urls for your files contain this
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#A5A5A5",
            fontWeight: "300",
            fontSize: 16,
            mt: 1,
          }}
        >
          https://www.zoxxo.io/users/johnsmith123
        </Typography>
      </Box>
      <Divider
        sx={{ borderTopWidth: "1px", borderTopColor: "#E0E4EC", mb: 4, mt: 5 }}
      />
      <ZoxxoInput
        name="url"
        label="Edit your URL"
        placeholder="https://www.zoxxo.io/users/..."
      />
      <Button
        variant="contained"
        sx={{
          width: "fit-content",
          alignSelf: "flex-start",
          borderRadius: "5px",
          py: "10px",
          mt: 3,
          px: 5,
          textTransform: "none",
          fontWeight: 700,
          fontSize: 18,
          background: darkMode ? "#183042" : "red"
        }}
      >
        Update URL
      </Button>
    </Box>,
    <Box key={2}>
      <Box>
        <Typography
          variant="body2"
          sx={{
            color: "#A5A5A5",
            fontWeight: "400",
            fontSize: 16,
            mt: 1,
            pr: 15,
          }}
        >
          This action will permanently delete all your files, links and
          statistics{" "}
          <Link
            style={{ color: "#FF0000", fontWeight: "400", fontSize: "16px" }}
            to="/"
          >
            cancel subscription
          </Link>{" "}
          instead of deleting your account
        </Typography>
      </Box>
      <Divider
        sx={{ borderTopWidth: "1px", borderTopColor: "#E0E4EC", mb: 4, mt: 6 }}
      />
      <Box>
        <Typography
          variant="body1"
          sx={{
            color: "4C535F",
            fontWeight: "600",
            fontSize: 16,
          }}
        >
          Are you sure?
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#A5A5A5",
            fontWeight: "300",
            fontSize: 16,
            mt: 1,
          }}
        >
          You will lose all of your data.
        </Typography>
      </Box>
      <Button
        variant="contained"
        sx={{
          width: "fit-content",
          alignSelf: "flex-start",
          borderRadius: "5px",
          py: "10px",
          mt: 3,
          px: 5,
          textTransform: "none",
          fontWeight: 700,
          fontSize: 18,
          background: darkMode ? "#183042" : "red"
        }}
      >
        Delete my account
      </Button>
    </Box>,
  ];

  return (
    <>
      <ContentTitle title="Account" />
      <Box sx={{  px: isLargeScreen ? 5 : 0, py: 2 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Card sx={{ borderRadius: 6, boxShadow: 3, pb: 3, pt: 6, px: 3, background: bgColor}}>
              <ZoxxoTab tabs={tabs} contents={contents} />
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <PaysafeCard />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AccountManage;
