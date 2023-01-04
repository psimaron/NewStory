import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { CircularProgress } from '@mui/material';
import useCarSearch from './useCarSearch';
import { validateHeaderValue } from 'http';

export default function SearchCarAutocomplete() {
  const [selected, setSelected] = useState('');
  const { cars, loading, error, search } = useCarSearch();
  const handleChange = (e: any) => {
    setSelected(e.target.value);
    console.log(selected);
  };
  return (
    <Autocomplete
      onInputChange={(event, value) => {
        if (value.length >= 3) {
          search(value);
        }
      }}
      onChange={handleChange}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      options={cars}
      getOptionLabel={(option) =>
        `${option.make} ${option.model} ${option.year}`
      }
      renderInput={(option) => (
        <TextField
          helperText={error && 'There is an issue with your request'}
          error={error}
          {...option}
          label="Cars"
        >
          {loading && <CircularProgress />}
        </TextField>
      )}
    />
  );
}
