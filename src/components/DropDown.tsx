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
  backgroundColor: 'white',
  ':hover': {
    ':nth-child(2n+1)': {
      backgroundColor: 'red',
    },
  },
});

interface Options {
  id: number;
  option: string;
}

interface DropDownData {
  dropDownOptions: Options[];
  label: string;
}

export default function DropDown({ dropDownOptions, label }: DropDownData) {
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
        {dropDownOptions.map((element: Options) => (
          <StyledMenuItem value={element.option} key={element.id}>
            {element.option}
          </StyledMenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
