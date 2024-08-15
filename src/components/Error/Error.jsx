import { Typography } from '@mui/material';
import React from 'react';


export default function Error(props) {
  return props.message ? (
    
    <Typography
      variant="body1"
      color="error"
      align="center"
      style={{
        width: '100%',
        padding: '8px',
        backgroundColor: '#FFEBEE',
        border: '1.5px solid',
        borderColor: '#EF9A9A',
        borderRadius: '4px',
      }}
      {...props}
    >
      {props.message}
    </Typography>
  ) : null;
}
