import React from 'react';
import { Meta } from '@storybook/react';
import DropDown from '../components/DropDown';

const meta: Meta = {
  title: 'Dropdown',
  component: DropDown,
};

export default meta;

const optionList = {
  label: 'Colors',
  options: ['Red', 'Green', 'Blue'],
};

export function Drop() {
  return <DropDown {...{ ...optionList }} />;
}
