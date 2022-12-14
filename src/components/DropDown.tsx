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
  const StyledInput = styled(InputBase)({
    height: '37px',
    border: '1px solid black',
    '& .MuiPaper-root': {
      '& .MuiList-root': {
        '& .MuiButtonBase-root': {
          '&:hover': {
            backgroundColor: 'red'
          }
        }
      }
    }
  })

  return (
    <FormControl variant='outlined' fullWidth>
      <InputLabel>Age</InputLabel>
      <Select
        value={name}
        label="Name"
        onChange={handleChange}
        input={<StyledInput />}
      >
        {props.options.map((option: string) => (
          <MenuItem value={option} key={Math.random()}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
