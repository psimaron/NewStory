import { TextField, Button, Grid } from '@mui/material'
import React, { useState } from 'react'
import { styled } from '@mui/material/styles'

const Wrapper = styled('div')({
  width: '100%',
  display: 'grid',
  flexGrow: '1'
})

export interface ValueTypes {
  street?: string
  city?: string
  region?: string
  zip?: string
  country?: string
  label?: string
  onFormSubmit: Function
}

const GridFormSubmit = (props: ValueTypes) => {
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
    props.onFormSubmit(values)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prevValues) => {
      return { ...prevValues, [e.target.name]: e.target.value }
    })
  }

  return (
    <Wrapper>
      <form onSubmit={onSubmitForm}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="Street"
              name="street"
              label="Street address"
              variant="outlined"
              value={values.street}
              onChange={handleInputChange}
            ></TextField>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              id="City"
              name="city"
              label="City"
              variant="outlined"
              value={values.city}
              onChange={handleInputChange}
            ></TextField>
          </Grid>
          <Grid xs={12} md={6} item>
            <TextField
              fullWidth
              id="Region"
              name="region"
              label="State/Region"
              variant="outlined"
              value={values.region}
              onChange={handleInputChange}
            ></TextField>
          </Grid>
          <Grid xs={12} md={6} item>
            <TextField
              fullWidth
              id="Zip"
              name="zip"
              label="Zip"
              variant="outlined"
              value={values.zip}
              onChange={handleInputChange}
            ></TextField>
          </Grid>
          <Grid xs={12} md={6} item>
            <TextField
              fullWidth
              id="Contry"
              name="country"
              label="Country"
              variant="outlined"
              value={values.country}
              onChange={handleInputChange}
            ></TextField>
          </Grid>
          <Grid xs={12} md={12} item>
            <Button type="submit" variant="outlined" style={{ width: '100%' }}>
              {label}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Wrapper>
  )
}

export default GridFormSubmit
