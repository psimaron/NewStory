import { Meta } from '@storybook/react'
import GridFormSubmit from '../components/GridForm'
import React from 'react'

const LogInfo = (props: Object) => {
  const MyPromise = new Promise((resolve, reject) => {
    const myProperties = props
    setTimeout(() => {
      const error = false
      if (!error) {
        resolve(console.log(myProperties))
      } else {
        reject(new Error('Error'))
      }
    }, 5000)
  })
  MyPromise
    .then()
    .catch(err => console.log(err))
}

const meta: Meta = {
  title: 'GridForm',
  component: GridFormSubmit
}

export default meta

export const Form = () => <GridFormSubmit onFormSubmit={LogInfo}></GridFormSubmit>
