import React from 'react';
import { Meta } from '@storybook/react';
import SearchCarAutocomplete from '../components/SearchCarAutocomplete';

const meta: Meta = {
  title: 'Autocomplete',
  component: SearchCarAutocomplete,
};

export default meta;

export function Autocomplete() {
  return <SearchCarAutocomplete textFieldProps={{ label: 'Hello' }} />;
}
