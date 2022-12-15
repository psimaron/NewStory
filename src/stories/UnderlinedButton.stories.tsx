import { Meta } from '@storybook/react';
import React from 'react';
import UnderlinedButtons from '../components/UnderlinedButton';

const meta: Meta = {
  title: 'UnderlinedButton',
  component: UnderlinedButtons,
};

export default meta;

export function First() {
  return <UnderlinedButtons>Search</UnderlinedButtons>;
}
