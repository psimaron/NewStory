import { Meta } from '@storybook/react'
import GridFormSubmit, { Adress } from '../components/GridForm'
import React, { useState, useEffect } from 'react'

const logInfo = (props: Adress) => {
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
const getInfo = async () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve({
      street: 'Vitosha 100',
      city: 'Sofia',
      region: 'Sofia',
      zip: '1000',
      country: 'Bulgaria'
    })
    , 3000)
  })
  return await promise.catch(err => console.log(err))
}

export const FormWithDefaultValues = () => {
  const [values, setValues] = useState({
    street: '',
    city: '',
    region: '',
    zip: '',
    country: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  useEffect(() => {
    setLoading(true)
    getInfo()
      // We hate the any type! What's the type of the response and is it possible to reuse the type?
      .then((res: any) => setValues(res))
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [])
  if (error) {
    return <main>An error has ocurred</main>
  }
  const handleSubmit = () => {
    logInfo(values)
    if (error) {
      console.log(error)
    }
  }
  return <GridFormSubmit onFormSubmit={handleSubmit} defaultValues={values} loading={loading}/>
}

const meta: Meta = {
  title: 'GridForm',
  component: GridFormSubmit
}

export default meta
