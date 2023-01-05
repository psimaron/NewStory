import React from 'react';
import {
  TextField,
  CircularProgress,
  Autocomplete,
  InputAdornment,
} from '@mui/material';
import useCarSearch from './useCarSearch';

export interface TextCustomise {
  label?: string;
}

export default function SearchCarAutocomplete(props: TextCustomise) {
  const { cars, loading, error, search } = useCarSearch();
  const { label = 'Cars' } = props;

  let throttlePause: boolean;
  const throttle = (event: any, value: string) => {
    if (throttlePause) return;
    throttlePause = true;
    setTimeout(() => {
      if (value.length >= 3) {
        search(value);
      }
      throttlePause = false;
    }, 300);
  };

  return (
    <Autocomplete
      onInputChange={(event, value) => throttle(event, value)}
      onChange={(event, value) => {
        const selectedOption = value;
        return selectedOption;
      }}
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
          label={label}
          {...option}
          InputProps={{
            ...option.InputProps,
            endAdornment: (
              <InputAdornment position="end">
                {loading && <CircularProgress />}
                {option.InputProps.endAdornment}
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
}
