import { Meta } from '@storybook/react';
import React from 'react';
import StyledButton from '../components/StyledButton';

const meta: Meta = {
  title: 'StyledButton',
  component: StyledButton,
};

export default meta;

export function Default() {
  return <StyledButton variant="text">Click me</StyledButton>;
}
export function Contained() {
  return <StyledButton variant="contained">Click me</StyledButton>;
}
