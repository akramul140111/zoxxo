import React from 'react';
import { Helmet } from 'react-helmet-async';

const CustomMeta = ({
  title = 'Zoxxo',
  description = 'Deliver your Data fast save & without interference of others',
  keywords = 'manage data deliver data share data upload data',
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </Helmet>
  );
};

export default CustomMeta;
