import React from "react";
import "./style.css";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

const SelectDays = ({ days, handleDaysChange, noText }) => {

  const selectStyle = {
    height: "2.5rem",
    color: "var(--white)",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--white)",
    },
    "& .MuiSvgIcon-root": {
      color: "var(--white)",
    },
    "&:hover": {
      "&& fieldset": {
        borderColor: "#3a80e9",
      },
    },
  };

  return (
    <div className="select-wrap">
      <p>Price Change in</p>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small"></InputLabel>
        {!noText && <p>Price Change in </p>}
        <Select
          value={days}
          onChange={handleDaysChange}
          sx={selectStyle}
        >
          <MenuItem value={7}>7 Days</MenuItem>
          <MenuItem value={30}>30 Days</MenuItem>
          <MenuItem value={60}>60 Days</MenuItem>
          <MenuItem value={90}>90 Days</MenuItem>
          <MenuItem value={120}>120 Days</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectDays;
