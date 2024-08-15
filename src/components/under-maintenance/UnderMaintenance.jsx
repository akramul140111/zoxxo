import { Container, Grid } from '@mui/material';

import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/animations/Animation - 1715617635233.json';

const UnderMaintenance = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <>
      <Container sx={{ height: '100vh', width: '100vw' }}>
        <Grid
          container
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          sx={{ mt: '200px' }}
        >
          <Grid item xs={1} md={3} />
          <Grid item xs={10} md={6}>
            <Lottie
              options={defaultOptions}
              autoPlay
              loop
              style={{ width: '100%' }}
            />
          </Grid>
          <Grid item xs={1} md={3} />
        </Grid>
      </Container>
    </>
  );
};

export default UnderMaintenance;
