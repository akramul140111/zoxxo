import {
  Grid,
  useMediaQuery,
  useTheme,
  Card,
  Typography,
  Slider,
  TextField,
  InputAdornment,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import { toast } from "react-toastify";

const sizes = [ 
  {
    value: 2,
    label: '2 TB'
  },
  {
    value: 4,
    label: '4 TB'
  },
  {
    value: 8,
    label: '8 TB'
  },
  {
    value: 16,
    label: '16 TB'
  },
];
const workpace = [ 
  {
    value: 3,
    label: '3'
  },
  {
    value: 5,
    label: '5'
  },
  {
    value: 10,
    label: '10'
  },
  {
    value: 20,
    label: '20'
  },
  {
    value: 50,
    label: '50'
  },
];

const BusinessCardSlider = ({ storageValue, workspaceValue, setStorageValue, setWorkspaceValue }) => {
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";
  const isMatchMd = useMediaQuery(theme.breakpoints.down("md"));
  const { t } = useTranslation("tornado");

  const reverseTextColor = darkMode ? "#fff" : "#000";
  const backgroundColor = darkMode ? "#0E1B25" : "#fff";

  const handleStorageChange = (event, newValue) => {
 console.log('Value: ', event.target.value)
    event.target.value = event.target.value > 100 ? 100 : event.target.value
    // if(event.target.value > 100 ) toast.error('Maximum Storage Exceed!')
    setStorageValue(event.target.value);
  };

  const handleWorkspaceChange = (event, newValue) => {

    setWorkspaceValue(newValue);
  };

  const  renderSlider = (label, value, onChange, marks, showInput = false) => (
    <Box mb={8}>
      <Typography
        variant="h6"
        component="p"
        fontSize={{ lg: 16 }}
        fontWeight={{ xs: 400, md: 500, lg: 700 }}
        mb={5}
      >
        {label}
      </Typography>
      <Grid container spacing={5}>
        <Grid item xs={12} md={9}>
     
          <Slider
          defaultValue={0}
            value={value}
            onChange={onChange}
            step={1}
            min={marks[0].value}
            max={marks[marks.length - 1].value}
            marks={marks.map((mark, index) => ({ value: mark.value, label: mark.label }))}
            valueLabelDisplay="auto"
            sx={{
              padding: "6px 0",
              height: "10px",
              color: darkMode ? "#fff" : "#000",
              "& .MuiSlider-thumb": {
                backgroundColor: darkMode ? "#fff" : "#000",
              },
              "& .MuiSlider-markLabel": {
                color: darkMode ? "#fff" : "#000",
                fontSize: "16px",
              },
              "& .MuiSlider-mark": {
                color: "text.secondary",
              },
            }}
          />
        </Grid>
        <Grid item xs={12} md={3} textAlign="center">
       {
    //     showInput &&    <TextField      
    //     value={value}
    //  lable="TB"
    //     sx={{ width: "100px" }}
    //     inputProps={{
    //       // 'aria-label': label,
    //       style: { textAlign: "center",  color: darkMode ? "#fff" : "#000" }
    //     }}
    //   />
       }
       {
        showInput && 
        <TextField
type="number"
max
        id="outlined-start-adornment"
        onChange={onChange}
        value={value}
        InputProps={{
          inputProps: { 
            max: 100, min: 10 
        },
          endAdornment: <InputAdornment position="start">TB</InputAdornment>,
          
         
        }}
        
      />
       
        
       
}
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <Grid
      item
      xs={12}
      md={isMatchMd ? 12 : 7}
      sx={{ width: "100%" }}
      marginBottom={{ xs: 5, sm: 5, md: 0, lg: 0 }}
      data-aos="flip-down"
    >
      <Card
        sx={{
          py: { xs: 3, sm: 2, md: 0, lg: 0 },
          px: { xs: 4, sm: 2, md: 2, lg: 4 },
          width: { xs: "100%", sm: "100%", md: "95%", lg: 630 },
          color: reverseTextColor,
          backgroundColor: backgroundColor,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: { xs: "100%", sm: "100%", md: 550, lg: 540 },
        }}
      >
        {renderSlider(
          `${t("how-much-extra-storage-do-you-need")} (TB)`,
          storageValue,
          handleStorageChange,
          sizes,
          true
        )}
        {renderSlider(
          t("how-many-extra-workspaces-do-you-need"),
          workspaceValue,
          handleWorkspaceChange,
          workpace
        )}
      </Card>
    </Grid>
  );
};

export default BusinessCardSlider;
