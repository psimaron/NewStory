import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { CircularProgress } from '@mui/material';
import useSuperHeroSearch from './useSuperHeroSearch';

export default function SuperHeroAutocomplete() {
  const [term, setTerm] = useState('');
  const { superHero, loading, error } = useSuperHeroSearch(term);
  const handleChange = (e: any) => setTerm(e.target.value);
  console.log(superHero, loading, error);
  return (
    <Autocomplete
      value=""
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="avengers"
      options={superHero}
      renderOption={(option) => <li {...option}>Hi</li>}
      renderInput={(option) => (
        <TextField onChange={handleChange} {...option} label="Heroes">
          <CircularProgress />
        </TextField>
      )}
    />
  );
}
