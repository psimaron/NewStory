import { TextField, Button, Grid } from '@mui/material'
import React, { useState } from 'react'
import { styled } from '@mui/material/styles'

const Wrapper = styled('div')({
  width: '100%',
  display: 'grid',
  flexGrow: '1'
})

interface AdressForm {
  street?: string
  city?: string
  region?: string
  zip?: string
  country?: string
  label?: string
  onFormSubmit: Function
}
/**
 * returns a form styled by the grid system with fields for user input
*/
const GridFormSubmit = (props: AdressForm) => {
  const { label = 'Submit' } = props

  const defaultValues = {
    street: 'First street',
    city: 'Coln',
    region: 'Eastern Europe',
    zip: '101 Oho',
    country: 'Romania'
  }

  const [values, setValues] = useState(defaultValues)
  /**
 * This is a function that gets the information from the form and passes it to the parent component
 * as an object. Prevents the default browser behaviour.
 * @callback onSubmitForm
 * The parameters are of type: string, they are received from the input of the user or if not provided,
 * they are passed by the @default defaultValues
 */
  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    props.onFormSubmit(values)
  }
  /** The form accepts the values from the input of the user.
 * There is also a default label if there isn't a provided one.
 * @param {string} props.label Label of the form
 * @param {string} props.street Name of the street
 * @param {string} props.city Name of the city
 * @param {string} props.region Name of the region
 * @param {string} props.zip Zip code of the country
 * @param {string} props.country Name of the country
 */
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
              defaultValue={values.city}
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
              defaultValue={values.region}
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
              defaultValue={values.zip}
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
              defaultValue={values.country}
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
