import React from 'react';
import { Meta } from '@storybook/react';
import SuperHeroAutocomplete from '../components/SuperHeroAutocomplete';

const meta: Meta = {
  title: 'Autocomplete',
  component: SuperHeroAutocomplete,
};

export default meta;

export function Autocomplete() {
  return <SuperHeroAutocomplete />;
}
