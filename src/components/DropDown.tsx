<<<<<<< HEAD
import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

import InputBase from '@mui/material/InputBase'
import { styled } from '@mui/material/styles'

export default function DropDown (props: any) {
  const [name, setName] = useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setName(event.target.value)
  }
  const StyledInput = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-input': {
      '& MuiButtonBase-root': {
        '&:hover': {
          backgroundColor: 'red'
        }
      }
    }
  }))

  return (
      <FormControl fullWidth>
        <InputLabel>Age</InputLabel>
        <Select
          value={name}
          label="Name"
          onChange={handleChange}
          input = {<StyledInput />}
        >
          {props.options.map((option: string) =>
          <MenuItem value={option} key={Math.random()}>{option}</MenuItem>
          )}
        </Select>
      </FormControl>
  )
}
=======
import {useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';

export default function DropDown(props:any) {

    const [name, setName] = useState('');
  
    const handleChange = (event: SelectChangeEvent) => {
      setName(event.target.value as string);
    };
    const StyledInput = styled(InputBase)(({ theme }) => ({ 
      '& .MuiInputBase-input':{
      '& MuiButtonBase-root':{
      '&:hover':{
        backgroundColor: 'red'
      }
    }}
    }))

    return (
      <FormControl fullWidth>
        <InputLabel>Age</InputLabel>
        <Select
          value={name}
          label="Name"
          onChange={handleChange}
          input = {<StyledInput />}
        >
          {props.options.map((option:string)=>
          <MenuItem value={option}>{option}</MenuItem>
          )}
        </Select>
      </FormControl>
    );
    }
>>>>>>> 3ecf2b0d8bde0b3b03266eaaa0b0e86ce8b01455
