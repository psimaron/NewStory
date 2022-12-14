import { TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';

const Row = styled('div')(({ theme }) => ({
  display: 'flex',
  maxWidth: '100%',
  flexDirection: 'column',
  margin: '5px',
  gap: '5px',
  [theme.breakpoints.up('lg')]: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '800px',
  },
}));

const Coll = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.up('lg')]: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
}));
/**
 * returns a form styled by the grid system with fields for user input
 */
const FormSubmit = (props: any) => {
  const { label = 'Submit' } = props;

  const [values, setValues] = useState({
    street: '',
    city: '',
    region: '',
    zip: '',
    country: '',
  });

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onFormSubmit(values);
  };
  /** The form accepts the values from the input of the user.
   * There is also a default label if there isn't a provided one.
   * @param {string} props.label Label of the form
   * @param {string} props.street Name of the street
   * @param {string} props.city Name of the city
   * @param {string} props.region Name of the region
   * @param {string} props.zip Zip code of the country
   * @param {string} props.country Name of the country
   */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValues((prevValues) => {
      return { ...prevValues, [e.target.name]: e.target.value };
    });
  };

  return (
    <form onSubmit={onSubmitForm}>
      <Row>
        <TextField
          fullWidth
          id="Street"
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
            fullWidth
            id="City"
            name="city"
            label="City"
            variant="outlined"
            value={values.city}
            onChange={handleInputChange}
          ></TextField>
        </Coll>
        <Coll>
          <TextField
            fullWidth
            id="Region"
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
            fullWidth
            id="Zip"
            name="zip"
            label="Zip"
            variant="outlined"
            value={values.zip}
            onChange={handleInputChange}
          ></TextField>
        </Coll>
        <Coll>
          <TextField
            fullWidth
            id="Country"
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
  );
};

export default FormSubmit;
