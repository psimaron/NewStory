import { Meta } from '@storybook/react'
import FormSubmit from '../components/Form'
import React from 'react'

const LogInfo = (props: string) => {
  console.log(props)
}

const meta: Meta = {
  title: 'MyForm',
  component: FormSubmit
}

export default meta

export const Form = () => <FormSubmit onFormSubmit={LogInfo}></FormSubmit>
