import React from 'react';
import { Meta } from '@storybook/react';
import DropDown from '../components/DropDown';

const meta: Meta = {
  title: 'Dropdown',
  component: DropDown,
};

export default meta;

const optionList = [
  { id: 1, option: 'Red' },
  { id: 2, option: 'Blue' },
  { id: 3, option: 'Green' },
  { id: 4, option: 'Black' },
  { id: 5, option: 'White' },
];

export function Drop() {
  return <DropDown label="Colors" dropDownOptions={optionList} />;
}
