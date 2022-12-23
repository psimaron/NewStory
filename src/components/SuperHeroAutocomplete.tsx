import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';

const request = async (word: string) => {
  const promise = new Promise((resolve) => {
    setTimeout(
      () =>
        resolve(
          axios.get(
            `https://superhero-search.p.rapidapi.com/api/heroes/${word}`,
            {
              headers: {
                'X-RapidAPI-Key':
                  '0bc116f760mshc0b7d82293c0c2ep1e3397jsn632a8f5d22b2',
                'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com',
              },
            },
          ),
        ),
      5000,
    );
  });
  const results = await promise.catch((err) => console.log(err));
  return results;
};

function useSuperHeroSearch(term: any) {
  const [word, setWord] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');

  useEffect(() => {
    setLoading(true);
    setWord(term);
    request(word)
      .then((res: any) => setResult(res))
      .catch(() => {
        setError(true);
      })
      .finally(() => setLoading(false));
    return clearTimeout(1);
  }, [term]);
  const final = [result, loading, error];
  return final;
}

export default function SuperHeroAutocomplete() {
  const handleChange = (e: any) => {
    const term = e.target.value;
    console.log(term);
  };
  useSuperHeroSearch(handleChange);
  return (
    <Autocomplete
      value=""
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="avengers"
      options={['']}
      renderOption={(option) => <li {...option}>hi</li>}
      renderInput={(option) => (
        <TextField onChange={handleChange} {...option} label="Avengers" />
      )}
    />
  );
}
