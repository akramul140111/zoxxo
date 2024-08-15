/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTheme } from '@emotion/react';
import { useMediaQuery } from '@mui/material';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: isLargeScreen ? 3 : 0, py: 3  }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function ZoxxoTab({ tabs, contents }) {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";
  const bgColor = darkMode ? "#0E1B25" : "#fff";
  const reverseTextColor = darkMode ? "#fff" : "#A5A5A5";
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          TabIndicatorProps={{
            sx: { display: 'none' },
          }}
          sx={{
            '& .MuiTab-root': {
              flexShrink: 0,
              whiteSpace: 'nowrap',
            },
            '& .MuiTabs-scrollable': {
              overflowX: 'auto',
            },
          }}
        >
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              sx={{
                borderBottom: 2,
                borderColor: value === index ? 'red' : reverseTextColor,
                mx: 1,
                fontSize: 20,
                fontWeight: '700',
                textTransform: 'none',
              }}
              label={tab}
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
      </Box>
      {contents.map((content, index) => (
        <CustomTabPanel key={index} value={value} index={index}>
          {content}
        </CustomTabPanel>
      ))}
    </Box>
  );
}

ZoxxoTab.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  contents: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default ZoxxoTab;
