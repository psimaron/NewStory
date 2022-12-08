import { Meta } from '@storybook/react'
import StyledButton from '../components/StyledButton'
import React from 'react'

const meta: Meta = {
  title: 'StyledButton',
  component: StyledButton
}

export default meta

export const Default = () => (
  <StyledButton variant="text">Click me</StyledButton>
)
export const Contained = () => (
  <StyledButton variant="contained">Click me</StyledButton>
)
