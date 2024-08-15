// src/App.js
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Container, Button, CssBaseline } from '@mui/material';
// import LanguageModal from './LanguageModal';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue, pink } from '@mui/material/colors';
import LanguageModal from '../../components/Common/LanguageModalContent';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: pink[500],
    },
  },
  typography: {
    h6: {
      flexGrow: 1,
    },
  },
});

function TestCard() {
  const [isLanguageModalOpen, setLanguageModalOpen] = useState(false);

  const handleOpenLanguageModal = () => {
    setLanguageModalOpen(true);
  };

  const handleCloseLanguageModal = () => {
    setLanguageModalOpen(false);
  };

  const handleLanguageChange = (lang) => {
    console.log(`Language changed to: ${lang}`);
    handleCloseLanguageModal();
  };

  return (
   
      <div>
      
        <Container sx={{my: 30}}>
          <Typography variant="h4" component="h1" gutterBottom>
            Welcome to My Material UI App
          </Typography>
          <Button color="inherit" onClick={handleOpenLanguageModal}>
              Change Language
            </Button>
        </Container>
        <LanguageModal
          open={isLanguageModalOpen}
          handleClose={handleCloseLanguageModal}
          handleLanguageChange={handleLanguageChange}
        />
      </div>

  );
}

export default TestCard;
