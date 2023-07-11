import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const SelectComponent = ({ handleChangeCategory, cat }) => {
  const { jobTypes } = useSelector((state) => state.loadJobTypes);
  const storeState = useSelector((state) => state);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={cat}
          label="Category"
          onChange={handleChangeCategory}
        >
          <MenuItem value="">All</MenuItem>
          {jobTypes &&
            jobTypes.map((jobType) => (
              <MenuItem key={jobType._id} value={jobType._id}>
                {jobType.jobTypeName}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectComponent;
