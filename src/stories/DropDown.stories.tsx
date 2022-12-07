import { Meta } from '@storybook/react'
import DropDown from '../components/DropDown'
import React from 'react'

const meta: Meta = {
  title: 'Selectors',
  component: DropDown
}

export default meta

export const Drop = () => <DropDown options={['Blue', 'Green', 'Red']}></DropDown>
