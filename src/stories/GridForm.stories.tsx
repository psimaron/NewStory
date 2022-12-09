import { Meta } from '@storybook/react'
import GridFormSubmit from '../components/GridForm'
import React from 'react'

const LogInfo = (props: string) => {
  console.log(props)
}

const meta: Meta = {
  title: 'GridForm',
  component: GridFormSubmit
}

export default meta

export const Form = () => <GridFormSubmit onFormSubmit={LogInfo}></GridFormSubmit>
