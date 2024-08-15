/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useTheme } from "@emotion/react";
import { Box,  TextField, styled } from "@mui/material";

const StyledTextField = styled(TextField)(({ theme }) => ({
    "& .MuiOutlinedInput-root": {
      backgroundColor: theme.palette.mode === "dark" ? "#183042" : "#F7F7F7",
      borderRadius: "5px",
      "& fieldset": {
        border: theme.palette.mode === "dark" ? "1px solid #274E6C" : "1px solid #E0E4EC",
      },
      "&:hover fieldset": {
        border: "none",
      },
      "&.Mui-focused fieldset": {
        border: "none",
      },
    },
    "& .MuiInputBase-input": {
      padding: "18px 15px",
    },
  }));


const ZoxxoInput = ({
    name,
    label,
    placeholder,
    type = "text",
    size = "medium",
    fullWidth,
    sx,
    required,
  }) => {
    const theme = useTheme()
    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1, ...sx }}>
        <label style={{ marginBottom: 4, fontSize: 18, fontWeight: 500 }}>{label}</label>
        <StyledTextField
          name={name}
          placeholder={placeholder}
          type={type}
          variant="outlined"
          size={size}
          fullWidth={fullWidth}
          required={required}
        />
      </Box>
    );
};

export default ZoxxoInput;