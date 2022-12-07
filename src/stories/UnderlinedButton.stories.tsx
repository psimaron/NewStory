import { Meta } from '@storybook/react'
import { UnderlinedButtons } from '../components/UnderlinedButton'
import React from 'react'

const meta: Meta = {
  title: 'NewButton',
  component: UnderlinedButtons
}

export default meta

export const First = () => <UnderlinedButtons variant='contained' color='secondary'>Search</UnderlinedButtons>
