/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box, MenuItem, Select, styled } from "@mui/material";

const StyledSelect = styled(Select)(({ theme }) => ({
    "& .MuiSelect-select": {
      backgroundColor: theme.palette.mode === "dark" ? "#183042" : "#F7F7F7",
      borderRadius: "5px",
      padding: "18px 15px",
    },
  }));

const ZoxxoSelect = ({
  name,
  label,
  value,
  options,
  size = "medium",
  fullWidth,
  sx,
  required,
  onChange,
}) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1, ...sx }}>
      <label style={{ marginBottom: 4, fontSize: 18, fontWeight: 500 }}>{label}</label>
      <StyledSelect
        name={name}
        value={value}
        onChange={onChange}
        size={size}
        fullWidth={fullWidth}
        required={required}
        
      >
        {options.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </StyledSelect>
    </Box>
  );
};

export default ZoxxoSelect;