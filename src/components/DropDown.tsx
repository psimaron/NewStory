import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';

const StyledInput = styled(InputBase)({
  height: '37px',
  border: '1px solid black',
});

export default function DropDown({ id, label, options }: any) {
  const [selection, setSelection] = useState('');
  const handleChange = (event: SelectChangeEvent) => {
    setSelection(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>Age</InputLabel>
      <Select
        value={selection}
        label={label}
        onChange={handleChange}
        input={<StyledInput />}
      >
        {options.map((option: string) => (
          <MenuItem value={option} key={id}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
