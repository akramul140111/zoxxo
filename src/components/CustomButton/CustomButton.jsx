import { Button, useTheme } from "@mui/material";
import React from "react";
import colors from "../../config/colors";

const CustomButton = ({ children, sx, ...props }) => {
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";

  return (
    <Button
      
      sx={{
        ...sx,
        color: "#fff",        
        px: 4,
        py: 1.5,
        textTransform: "capitalize",
        fontSize: { lg: 20 },
        fontWeight: 600,
        backgroundColor: darkMode ? colors.btnDark : colors.primary,
        "&:hover": {
          backgroundColor: darkMode ? colors.primaryHover : colors.primaryHover,
        },
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
