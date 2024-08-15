import { Backdrop, CircularProgress } from '@mui/material';
import React from 'react';

const LoadingScreen = () => {
  return (
    <Backdrop open={true} style={{ zIndex: 9999, color: '#fff' }}>
      <CircularProgress  />
    </Backdrop>
  );
};

export default LoadingScreen;
