import { Box, Card, FormControlLabel, Grid, Switch, Typography, useMediaQuery } from "@mui/material";
import ContentTitle from "./ContentTitle";
import ZoxxoTab from "./ZoxxoTab";
import PaysafeCard from "./PaysafeCard";
import { styled } from '@mui/material/styles';
import { useTheme } from "@emotion/react";

const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 50, 
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(23px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: '#656565', 
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color: theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: '#FF0000',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }));
  

const CommunicationsManage = () => {
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";
  const bgColor = darkMode ? "#0E1B25" : "#fff";
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

    const tabs = ["Communications"];
    const contents = [
      <Box key={0}>
       <Box sx={{ mb: 6 }}>
       <Box display="flex" justifyContent="space-between">
        <Box>
        <Typography
          variant="body1"
          sx={{
            color: "4C535F",
            fontWeight: "600",
            fontSize: 16,
          }}
        >
          Product intro, tips and inspiration
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
          How to make your uploads successful
        </Typography>
        </Box>
        <Box>
        <FormControlLabel
        control={<IOSSwitch sx={{ ml: isLargeScreen && 2 }}  />}
      />
        </Box>
       </Box>
      </Box>
       <Box sx={{ mb: 6 }}>
       <Box display="flex" justifyContent="space-between">
        <Box>
        <Typography
          variant="body1"
          sx={{
            color: "4C535F",
            fontWeight: "600",
            fontSize: 16,
          }}
        >
         Company news
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
         Updates about zoxxo and our latest features
        </Typography>
        </Box>
        <Box>
        <FormControlLabel
        control={<IOSSwitch defaultChecked />}
      />
        </Box>
       </Box>
      </Box>
       <Box sx={{ mb: 6 }}>
       <Box display="flex" justifyContent="space-between">
        <Box>
        <Typography
          variant="body1"
          sx={{
            color: "4C535F",
            fontWeight: "600",
            fontSize: 16,
          }}
        >
         Coupons and Announcements
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
         Saving your a lots of money
        </Typography>
        </Box>
        <Box>
        <FormControlLabel
        control={<IOSSwitch />}
      />
        </Box>
       </Box>
      </Box>
      </Box>,
    ];

    return (
        <>
      <ContentTitle title="Communications" />
      <Box sx={{  px: isLargeScreen ? 5 : 0, py: 2 }}>
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

export default CommunicationsManage;