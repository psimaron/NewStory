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

interface Props {
  list: object[];
  label: string;
}

export default function DropDown({ list, label }: Props) {
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
        {list.map((element: any) => (
          <MenuItem value={element.option} key={element.id}>
            {element.option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
