<<<<<<< HEAD
import { Meta } from '@storybook/react'
import { UnderlinedButtons } from '../components/UnderlinedButton'
import React from 'react'

const meta: Meta = {
  title: 'NewButton',
  component: UnderlinedButtons
}

export default meta

export const First = () => <UnderlinedButtons variant='contained' color='secondary'>Search</UnderlinedButtons>
=======
import {Meta, Story} from '@storybook/react';
import {UnderlinedButtons} from '../components/UnderlinedButton';

const meta: Meta = {
    title: 'NewButton',
    component: UnderlinedButtons
}

export default meta;

export const First = () => <UnderlinedButtons variant='outlined' color='secondary'>Search</UnderlinedButtons>
>>>>>>> 3ecf2b0d8bde0b3b03266eaaa0b0e86ce8b01455
