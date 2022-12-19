import React from 'react';
import { Meta } from '@storybook/react';
import DropDown from '../components/DropDown';

const meta: Meta = {
  title: 'Dropdown',
  component: DropDown,
};

export default meta;

const optionList = {
  id: ['1', '2', '3'],
  label: ['Color Red', 'Color Green', 'Color Blue'],
  options: ['Red', 'Green', 'Blue'],
};

export function Drop() {
  return <DropDown {...optionList} />;
}
