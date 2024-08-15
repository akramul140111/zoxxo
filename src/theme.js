import { createTheme } from '@mui/material';
import { createContext, useMemo, useState } from 'react';

//Ctrl + K and Ctrl + G for color shades and install extention: 'tailwind shades'

export const tokens = (mode) => ({
  ...(mode === 'dark'
    ? {
        redAccent: {
          100: '#ffcccc',
          200: '#ff9999',
          300: '#ff6666',
          400: '#ff3333',
          500: '#ff0000',
          600: '#cc0000',
          700: '#990000',
          800: '#660000',
          900: '#330000',
        },
        primary: {
          100: '#ffffff',
          200: '#999999',
          300: '#666666',
          400: '#333333',
          500: '#000000',
          600: '#000000',
          700: '#000000',
          800: '#000000',
          900: '#000000',
        },
        whiteAccent: {
          100: '#fefefe',
          200: '#fdfdfd',
          300: '#fcfcfc',
          400: '#fbfbfb',
          500: '#fafafa',
          600: '#c8c8c8',
          700: '#969696',
          800: '#646464',
          900: '#323232',
        },
        textColor:{
          100: '#000000',
          500:'#ffffff'

        },
      }
    : {
        redAccent: {
          100: '#330000',
          200: '#660000',
          300: '#990000',
          400: '#cc0000',
          500: '#ff0000',
          600: '#ff3333',
          700: '#ff6666',
          800: '#ff9999',
          900: '#ffcccc',
        },
        primary: {
          100: '#000000',
          200: '#000000',
          300: '#000000',
          400: '#000000',
          500: '#fafafa',
          600: '#333333',
          700: '#666666',
          800: '#999999',
          900: '#cccccc',
        },
        whiteAccent: {
          100: '#323232',
          200: '#646464',
          300: '#969696',
          400: '#c8c8c8',
          500: '#fafafa',
          600: '#fbfbfb',
          700: '#fcfcfc',
          800: '#fdfdfd',
          900: '#fefefe',
        },
        textColor:{
          100: '#ffffff',
          500:'#000000'
        },
      }),
});

//mui theme settings

export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
   //--------------pallette start---------
    palette: {
      mode: mode,
      ...(mode === 'dark'
        ? {
            primary: {
              main: colors.redAccent[500],
            },
            secondary: {
              main: colors.primary[100],
            },
            //maximum time we use 'grey' in neutral.
            neutral: {
              dark: colors.whiteAccent[700],
              main: colors.whiteAccent[400],
              light: colors.whiteAccent[100],
            },
            background: {
              default: colors.primary[500],
            },
            textColor: {
              main: colors.textColor[500],
                secondary: colors.textColor[100]
            }
          }
        : {
            primary: {
              main: colors.redAccent[500],
            },
            secondary: {
              main: colors.primary[100],
            },
            //maximum time we use 'grey' in neutral.
            neutral: {
              dark: colors.whiteAccent[700],
              main: colors.whiteAccent[400],
              light: colors.whiteAccent[100],
            },
            background: {
              default: '#fafafa',
            },
               textColor: {
              main: colors.textColor[500],
              secondary: colors.textColor[100]
            }
          }),
    },
     //--------------typography start---------
     typography: {
      fontFamily: ["Inter", "sans-serif"].join(','),
      h1:{
       fontFamily: ["Poppins", "sans-serif"].join(','),

      //  fontSize: "24px",      
      //  "@media (min-width:600px)": {
      //      "fontSize": "24px"
      //  },
      //  "@media (min-width:900px)": {
      //      "fontSize": "36px"
      //  },
      //  "@media (min-width:1200px)": {
      //      "fontSize": "60px"
      //  }
      },
      h2:{
       fontFamily: ["Poppins", "sans-serif"].join(','),

      },
      h3:{
       fontFamily: ["Poppins", "sans-serif"].join(','),

      },
      h4:{
       fontFamily: ["Poppins", "sans-serif"].join(','),
    
      },
      h5:{
       fontFamily: ["Poppins", "sans-serif"].join(','),
   
      },
      h6:{
       fontFamily: ["Poppins", "sans-serif"].join(','),
      
      },
     }
  };
};



export const ColorModeContext = createContext({
 toggleColorMode: () => {}
})

export const useMode = () => {

 const [mode, setMode] = useState("light");

 const colorMode = useMemo(() => ({
  toggleColorMode: () => setMode((prev)=> (prev === "light" ? "dark" : "light" ))
 }),[] )
const theme = useMemo(()=> createTheme(themeSettings(mode)), [mode]) 

return [theme, colorMode];
}


