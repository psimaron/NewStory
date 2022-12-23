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

const StyledMenuItem = styled(MenuItem)({
  ':hover': {
    backgroundColor: 'red',
  },
});

interface Option {
  id: number;
  option: string;
}

interface DropDownData {
  dropDownOptions: Option[];
  label: string;
}

export default function DropDown({ dropDownOptions, label }: DropDownData) {
  const [selection, setSelection] = useState('');
  const handleChange = (event: SelectChangeEvent) => {
    setSelection(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel variant="outlined">{label}</InputLabel>
      <Select value={selection} onChange={handleChange} input={<StyledInput />}>
        {dropDownOptions.map((element: Option) => (
          <StyledMenuItem value={element.option} key={element.id}>
            {element.option}
          </StyledMenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
