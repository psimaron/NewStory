import React from 'react';
import {
  TextField,
  CircularProgress,
  Autocomplete,
  InputAdornment,
  TextFieldProps,
} from '@mui/material';
import useCarSearch from './useCarSearch';

const debounce = (fn: Function, ms = 300) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};

interface FieldProps {
  textFieldProps: TextFieldProps;
}

export default function SearchCarAutocomplete({ textFieldProps }: FieldProps) {
  const header = {
    'X-RapidAPI-Key': '59f0db3649msh4cb00124f5c8564p191a6cjsnc468d27648d7',
    'X-RapidAPI-Host': 'car-data.p.rapidapi.com',
  };
  const { cars, loading, error, search } = useCarSearch(header);

  const handleChange = (value: string) => {
    if (value.length >= 3) {
      search(value);
    }
  };

  const debouncedFunction = debounce(handleChange, 1000);

  return (
    <Autocomplete
      onInputChange={(event, value) => {
        debouncedFunction(value);
      }}
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
          helperText={error && 'Hello'}
          error={error}
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
          {...textFieldProps}
        />
      )}
    />
  );
}
