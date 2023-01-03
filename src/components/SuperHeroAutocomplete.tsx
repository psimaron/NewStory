import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { CircularProgress } from '@mui/material';
import useSuperHeroSearch from './useSuperHeroSearch';

export default function SuperHeroAutocomplete() {
  const [term, setTerm] = useState('');
  const { superHero, loading, error } = useSuperHeroSearch(term);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTerm(e.target.value);
  console.log(superHero, loading, error, term);
  return (
    <Autocomplete
      onSelect={handleChange}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      options={superHero}
      getOptionLabel={(option) => option.name}
      renderInput={(option) => (
        <TextField
          helperText={error && 'There is an issue with your request'}
          error={error}
          onChange={handleChange}
          {...option}
          label="Heroes"
        >
          {loading && <CircularProgress />}
        </TextField>
      )}
    />
  );
}
