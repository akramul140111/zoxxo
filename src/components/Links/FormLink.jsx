
import { Link, useTheme } from '@mui/material'
import React from 'react'
import {  Link as RouteLink } from 'react-router-dom'
import colors from '../../config/colors';

const FormLink = ({redirect, routeLink, children, sx}) => {

    const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";
  

    const linkStyle = {
        color: darkMode ? colors.textTeal : colors.primary,
        textDecoration: 'none', // Remove underline from links
        transition: 'color 0.3s ease', // Smooth transition for color change
        cursor: 'pointer', // Change cursor on hover
        '&:hover': {
          color: darkMode ? colors.primary : colors.primaryHover, // Change color on hover
        },
      };
      
  return (
    
    <Link
    component={RouteLink}
    sx={{...linkStyle, ...sx}}
     to={
       redirect
         ? `/${routeLink}?redirect=${redirect}`
        : `/${routeLink}`
     }
   >
    {children}
   </Link>
  )
}

export default FormLink
