import React from 'react';
import { Meta } from '@storybook/react';
import DropDown1 from '../components/Drop';

const meta: Meta = {
  title: 'Dropdown1',
  component: DropDown1,
};

export default meta;

export function Drop() {
  return <DropDown1 />;
}
