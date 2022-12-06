import {useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function DropDown(props:any) {

    const [name, setName] = useState('');
  
    const handleChange = (event: SelectChangeEvent) => {
      setName(event.target.value as string);
    };

    return (
      <FormControl fullWidth>
        <InputLabel>Age</InputLabel>
        <Select
          value={name}
          label="Name"
          onChange={handleChange}
        >
          {props.options.map((option:string)=>
          <MenuItem value={option}>{option}</MenuItem>
          )}
        </Select>
      </FormControl>
    );
    }
