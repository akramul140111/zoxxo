import React from 'react';
import UnderMaintenance from '../components/under-maintenance/UnderMaintenance';
import CustomContent5 from '../components/Content/CustomContent5';
import { Container } from '@mui/material';
import CustomMeta from '../components/CustomMeta';
import BusinessCardTabs from '../components/BusinessScreen/BusinessCardTabs';

const BusinessScreen = () => {
  return (
    <>
    <CustomMeta title="Zoxxo Business" />
    <Container> 
    <CustomContent5 />
    <BusinessCardTabs />
    </Container>
    </>
  );
};

export default BusinessScreen;


