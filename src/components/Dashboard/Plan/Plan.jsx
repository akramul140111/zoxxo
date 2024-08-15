import {
  Box,
  Button,
  Card,
  Divider,
  FormControlLabel,
  Grid,
  Slider,
  Switch,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ContentTitle from "../Content/ContentTitle";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { useTheme } from "@emotion/react";

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 50,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(23px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#656565",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: "#FF0000",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

const CustomSlider = styled((props) => {
  const theme = useTheme();
  const darkMode = theme.palette.mode === 'dark';
  return (
    <Slider
      {...props}
      sx={{
        height: 2,
        '& .MuiSlider-thumb': {
          height: 28,
          width: 28,
          backgroundColor: '#fff',
          boxShadow: 6,
          '&:hover, &.Mui-focusVisible, &.Mui-active': {
            boxShadow: 'inherit',
          },
          '& .MuiSlider-valueLabel': {
            backgroundColor: darkMode ? 'white' : 'black',
            color: darkMode ? 'black' : '#fff',
            borderRadius: '5px',
            padding: '2px 15px',
            transform: 'translateY(-100%) scale(1)',
            '&:before': {
              display: 'none',
            },
          },
        },
        '& .MuiSlider-rail': {
          height: 12,
          opacity: 0.5,
          backgroundColor: darkMode ? '#fff' : '#bfbfbf',
        },
        '& .MuiSlider-track': {
          height: 12,
          backgroundColor: darkMode ? 'red' : '#000000',
          border: `2px solid ${darkMode ? 'red' : '#000000'}`,
        },
        '& .MuiSlider-markLabel': {
          color: darkMode ? 'white' : '#000000',
          fontSize: '20px',
          fontWeight: '600',
          padding: '20px',
          '&.MuiSlider-markLabelActive': {
            color: darkMode ? '#ff5555' : 'red',
          },
        },
      }}
    />
  );
})``;

const marksTB = [
  {
    value: 1,
    label: "1 TB",
  },
  {
    value: 25,
    label: "2 TB",
  },
  {
    value: 50,
    label: "4 TB",
  },
  {
    value: 75,
    label: "8 TB",
  },
  {
    value: 100,
    label: "16 TB",
  },
];
const marks = [
  {
    value: 1,
    label: "1",
  },
  {
    value: 25,
    label: "5",
  },
  {
    value: 50,
    label: "10",
  },
  {
    value: 75,
    label: "20",
  },
  {
    value: 100,
    label: "50",
  },
];

const getMarksTBLabelForValue = (value) => {
  const mark = marksTB.find((mark) => mark.value === value);
  return mark ? mark.label : "0 TB";
};
const getLabelForValue = (value) => {
  const mark = marks.find((mark) => mark.value === value);
  return mark ? mark.label : "0";
};

const Plan = () => {
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";
  const bgColor = darkMode ? "#0E1B25" : "#fff";
  const reverseTextColor = darkMode ? "#fff" : "#000";
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const [marksTBProgress, setMarksTBProgress] = useState(1);
  const [marksProgress, setMarksProgress] = useState(1);

  const handleMarkTBSlider = (event, newValue) => {
    setMarksTBProgress(newValue);
  };
  const handleMarks = (event, newValue) => {
    setMarksProgress(newValue);
  };

  const getSliderValuePosition = (value, max, containerWidth) => {
    return (value * containerWidth) / max;
  };

  return (
    <>
      <ContentTitle title="Plan & Billing" />
      <Box sx={{ pt: isLargeScreen ? 5 : 0, pb: 2 }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: "600", fontSize: "24px", textAlign: "center" }}
        >
          Calculate monthly costs with BUSINESS
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pt: 2,
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: "600", fontSize: "18px", mr: 4 }}
          >
            Monthly
          </Typography>
          <FormControlLabel control={<IOSSwitch />} />
          <Typography variant="h6" sx={{ fontWeight: "400", fontSize: "18px" }}>
            Yearly
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "400",
              fontSize: "18px",
              background: darkMode ? "#183042" : "black",
              padding: "3px 10px",
              color: "white",
              borderRadius: "5px",
              ml: 2,
            }}
          >
            50% off
          </Typography>
        </Box>
      </Box>
      <Box sx={{ py: 2,    px: isLargeScreen ? 5 : 0, }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            <Card
              sx={{
                borderRadius: 6,
                boxShadow: 3,
                pb: 10,
                pt: 6,
                px: 3,
                position: "relative",
                background: bgColor
              }}
            >
              <Box>
                <Typography variant="h6" sx={{ mb: 8, fontWeight: "700" }}>
                  How much extra storage do you need?
                </Typography>
                <Box
                  sx={{
                    position: "absolute",
                    top: 95,
                    right: 16,
                    border: darkMode ?  "1px solid #fff" : "1px solid black",
                    borderRadius: "5px",
                    padding: "5px 25px",
                  }}
                >
                  {getMarksTBLabelForValue(marksTBProgress)}
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    top: 95,
                    left: `${getSliderValuePosition(
                      marksTBProgress,
                      40,
                      220
                    )}px`,
                    background: darkMode ? "#183042" : "black",
                    color: "#fff",
                    padding: "5px 20px",
                    borderRadius: "5px",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: -10,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 0,
                      height: 0,
                      borderLeft: "7px solid transparent",
                      borderRight: "7px solid transparent",
                      borderTop: "10px solid #000",
                    },
                  }}
                >
                  {getMarksTBLabelForValue(marksTBProgress)}
                </Box>
                <Box sx={{ px: 2 }}>
                  <CustomSlider
                    value={marksTBProgress}
                    onChange={handleMarkTBSlider}
                    aria-labelledby="continuous-slider"
                    valueLabelDisplay="off"
                    min={0}
                    max={100}
                    marks={marksTB}
                  />
                </Box>
              </Box>
              <Box sx={{ py: 10 }}>
                <Typography variant="h6" sx={{ mb: 8, fontWeight: "700" }}>
                  How many extra workspaces do you need?
                </Typography>
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 230,
                    right: 16,
                    border: darkMode ?  "1px solid #fff" : "1px solid black",
                    borderRadius: "5px",
                    padding: "5px 25px",
                  }}
                >
                  {getLabelForValue(marksProgress)}
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 210,
                    left: `${getSliderValuePosition(marksProgress, 40, 220)}px`,
                    background: darkMode ? "#183042" : "black",
                    color: "#fff",
                    padding: "5px 20px",
                    borderRadius: "5px",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: -10,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 0,
                      height: 0,
                      borderLeft: "7px solid transparent",
                      borderRight: "7px solid transparent",
                      borderTop: "10px solid #000",
                    },
                  }}
                >
                  {getLabelForValue(marksProgress)}
                </Box>
                <Box sx={{ px: 2 }}>
                  <CustomSlider
                    value={marksProgress}
                    onChange={handleMarks}
                    aria-labelledby="continuous-slider"
                    valueLabelDisplay="off"
                    min={0}
                    max={100}
                    marks={marks}
                  />
                </Box>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} md={5}>
            <Card sx={{ borderRadius: 6, boxShadow: 3, pb: 3, pt: 2, px: 3, background: bgColor }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "600",
                  fontSize: "24px",
                  background: darkMode ? "#183042" : "red",
                  padding: "15px ",
                  color: "white",
                  borderRadius: "5px",
                  textAlign: "center",
                }}
              >
                Your new plan
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingTop: "30px",
                  paddingBottom: "12px",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "400",
                    fontSize: "14px",
                  }}
                >
                  BUSINESS / /Per Month
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "600",
                    fontSize: "16px",
                  }}
                >
                  21.99 USD
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "12px 0",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "400",
                    fontSize: "14px",
                  }}
                >
                  Extra Storage
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "600",
                    fontSize: "16px",
                  }}
                >
                  0.00 USD
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "12px 0",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "400",
                    fontSize: "14px",
                  }}
                >
                  Extra Workspaces
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "600",
                    fontSize: "16px",
                  }}
                >
                  0.00 USD
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "12px 0",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "400",
                    fontSize: "14px",
                  }}
                >
                  Prorated discount
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "600",
                    fontSize: "16px",
                  }}
                >
                  -10.99 USD
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingTop: "12px",
                  paddingBottom: "25px",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "400",
                    fontSize: "14px",
                  }}
                >
                  EReverse Charge(0%)
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "600",
                    fontSize: "16px",
                  }}
                >
                  0.00 USD
                </Typography>
              </Box>
              <Divider
                sx={{ borderBottomWidth: "2px", borderTopColor: "#777777" }}
              />
                <Typography
                variant="body1"
                    sx={{
                        fontSize: "13px",
                        pt: "10px",
                        position: 'relative',
                        paddingLeft: '1rem',
                        "&::before": {
                          content: '"•"',
                          color: reverseTextColor,
                          fontWeight: 'bold',
                          position: 'absolute',
                          left: 0,
                          top: '20px',
                          transform: 'translateY(-50%)',
                        },
                      }}
                >
                  You will pay 10.99 USD now, which is prorated for the current billing period.
                </Typography>
                <Typography
                variant="body1"
                    sx={{
                        fontSize: "13px",
                        position: 'relative',
                        paddingLeft: '1rem',
                        "&::before": {
                          content: '"•"',
                          color: reverseTextColor,
                          fontWeight: 'bold',
                          position: 'absolute',
                          left: 0,
                          top: '10px',
                          transform: 'translateY(-50%)',
                        },
                      }}
                >
                  Your plan is billed Monthly and will renew for 10.99 USD (plus any applicable taxes and minus any discounts) on Invalid Date.
                </Typography>
                <Typography
                variant="body1"
                    sx={{
                        fontSize: "13px",
                        position: 'relative',
                        pb:"10px",
                        paddingLeft: '1rem',
                        "&::before": {
                          content: '"•"',
                          color: reverseTextColor,
                          fontWeight: 'bold',
                          position: 'absolute',
                          left: 0,
                          top: '10px',
                          transform: 'translateY(-50%)',
                        },
                      }}
                >
                 You can cancel any time before this date.
                </Typography>
                <Divider
                sx={{ borderBottomWidth: "2px", borderTopColor: "#777777" }}
              />
              <Box sx={{display: isLargeScreen ? "flex" : "block", justifyContent: "space-between", alignItems: "center", pt:2}}>
                <Box>
                    <Typography variant="h4" sx={{fontWeight: "600", fontSize: "20px"}}>Total</Typography>
                    <Typography variant="h6" sx={{fontWeight: "500", fontSize: "16px"}}>$ 10.99</Typography>
                </Box>
                <Button
        variant="contained"
        sx={{
          borderRadius: "5px",
          py: "18px",
          px: "35px",
          textTransform: "capitalize",
          fontWeight: 600,
          fontSize: 16,
          background: darkMode ? "#183042" : "red",
          mt: isLargeScreen || 2
        }}
      >
       Continue with this plan
      </Button>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Plan;
