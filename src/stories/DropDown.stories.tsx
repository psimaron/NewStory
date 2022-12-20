import React from 'react';
import { Meta } from '@storybook/react';
import DropDown from '../components/DropDown';

const meta: Meta = {
  title: 'Dropdown',
  component: DropDown,
};

export default meta;

const optionList = [
  {
    id: 1,
    option: 'Red',
  },
  {
    id: 2,
    option: 'Blue',
  },
];

export function Drop() {
  return <DropDown label="Colors" list={optionList} />;
}
