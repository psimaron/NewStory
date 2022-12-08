import { TextField, Button } from '@mui/material'
import React, { useState } from 'react'
import { styled } from '@mui/material/styles'

const Wrapper = styled('div')(({ theme }) => ({
  maxWidth: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%'
  }
}))
const Row = styled('div')(({ theme }) => ({
  display: 'flex',
  maxWidth: '100%',
  flexDirection: 'column',
  margin: '5px',
  gap: '5px',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '800px'
  }
}))

const Coll = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%'
  }
}))

const FormSubmit = (props: any) => {
  const { label = 'Submit' } = props

  const [values, setValues] = useState({
    street: '',
    city: '',
    region: '',
    zip: '',
    country: ''
  })

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(values)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValues((prevValues) => {
      return { ...prevValues, [e.target.name]: e.target.value }
    })
  }
  /* export default function BasicForm({children} : {children:string}){ */
  return (
    <Wrapper>
      <form onSubmit={onSubmitForm}>
        <Row>
            <TextField
              sx={{ width: '100%' }}
              id="outlined-basic"
              name="street"
              label="Street address"
              variant="outlined"
              value={values.street}
              onChange={handleInputChange}
            ></TextField>
        </Row>
        <Row>
          <Coll>
            <TextField
              sx={{ width: '100%' }}
              id="outlined-basic"
              name="city"
              label="City"
              variant="outlined"
              value={values.city}
              onChange={handleInputChange}
            ></TextField>
          </Coll>
          <Coll>
            <TextField
              sx={{ width: '100%' }}
              id="outlined-basic"
              name="region"
              label="State/Region"
              variant="outlined"
              value={values.region}
              onChange={handleInputChange}
            ></TextField>
          </Coll>
        </Row>
        <Row>
          <Coll>
            <TextField
              sx={{ width: '100%' }}
              id="outlined-basic"
              name="zip"
              label="Zip"
              variant="outlined"
              value={values.zip}
              onChange={handleInputChange}
            ></TextField>
          </Coll>
          <Coll>
            <TextField
              sx={{ width: '100%' }}
              id="outlined-basic"
              name="country"
              label="Country"
              variant="outlined"
              value={values.country}
              onChange={handleInputChange}
            ></TextField>
          </Coll>
        </Row>
        <Row>
          <Button sx={{ width: '100%' }} type="submit" variant="outlined">
            {label}
          </Button>
        </Row>
      </form>
    </Wrapper>
  )
}

export default FormSubmit
