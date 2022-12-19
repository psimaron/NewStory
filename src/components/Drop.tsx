import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DropDown1() {
  return (
    <FormControl>
      <InputLabel>Age</InputLabel>
      <Select value="Hi" label="Name">
        <MenuItem>HI</MenuItem>
      </Select>
    </FormControl>
  );
}
