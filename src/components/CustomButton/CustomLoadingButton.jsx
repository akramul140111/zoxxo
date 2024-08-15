import { Button, useTheme } from "@mui/material";
import React from "react";
import colors from "../../config/colors";

const CustomLoadingButton = ({ children, sx, ...props }) => {
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";

  return (
    <Button
      variant="contained"
      sx={{
        ...sx,

        px: 4,
        py: 1.5,
        textTransform: "capitalize",
        fontSize: { lg: 20 },
        fontWeight: 600,
      
      }}
      disabled
      {...props}
    >
      Loading...
    </Button>
  );
};

export default CustomLoadingButton;
