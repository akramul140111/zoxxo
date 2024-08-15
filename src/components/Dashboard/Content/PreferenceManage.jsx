import { Box, Button, Card, Grid, Typography, useMediaQuery } from "@mui/material";
import ContentTitle from "./ContentTitle";
import ZoxxoTab from "./ZoxxoTab";
import PaysafeCard from "./PaysafeCard";
import ZoxxoInput from "./ZoxxoInput";
import ZoxxoSelect from "./ZoxxoSelect";
import { useState } from "react";
import { useTheme } from "@emotion/react";

const PreferenceManage = () => {
    const [selectedValue, setSelectedValue] = useState('english');
    const theme = useTheme();
    const darkMode = theme.palette.mode === "dark";
    const bgColor = darkMode ? "#0E1B25" : "#fff";
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

    const handleSelectChange = (event) => {
      setSelectedValue(event.target.value);
    };
  
    const options = [
      { value: 'english', label: 'ENGLISH' },
      { value: 'deutsch', label: 'DEUTSCH' },
    ];
  const tabs = ["Login details ", "Language"];
  const contents = [
    <Box key={0}>
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="body1"
          sx={{
            color: "4C535F",
            fontWeight: "600",
            fontSize: 16,
          }}
        >
          Change your email
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
          johnsmith002@gmail.com
        </Typography>
      </Box>
      <Box >
      <ZoxxoInput
      type="email"
        name="email"
        label="Your new email"
        placeholder="Your new email"
      />
      </Box>
      <Box mt={3}>
      <ZoxxoInput
      type="password"
        name="password"
        label="Password"
        placeholder="Your new password"
      />
      </Box>
      <Box>
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
          Update
        </Button>
        <Button
          variant="text"
          sx={{
            borderRadius: "5px",
            py: "10px",
            mt: 3,
            ml: 2,
            px: 5,
            textTransform: "none",
            color: "#4C535F",
            fontWeight: 700,
            fontSize: 18,
          }}
        >
          Cancel
        </Button>
      </Box>
    </Box>,
    <Box key={1}>
    <Box >
    <ZoxxoSelect
      name="language"
      label="Your current language"
      value={selectedValue}
      options={options}
      onChange={handleSelectChange}
    />
    </Box>
  </Box>
  ];

  return (
    <>
      <ContentTitle title="Plan & Billing" />
      <Box sx={{ px: isLargeScreen ? 5: 0, py: 2 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Card sx={{ borderRadius: 6, boxShadow: 3, pb: 3, pt: 6, px: 3, background: bgColor }}>
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

export default PreferenceManage;
