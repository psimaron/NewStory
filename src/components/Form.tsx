import { TextField, Button, CircularProgress, Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
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
export interface Address {
  street?: string;
  city?: string;
  region?: string;
  zip?: string;
  country?: string;
}

interface FormProps {
  defaultValues?: Address | null;
  label?: string;
  onFormSubmit: (values: Address) => void;
  loading: boolean;
}

const StyledButton = styled(Button)({
  width: '100%',
});
/**
 * returns a form styled by the grid system with fields for user input
 */
function FormSubmit({
  label = 'Submit',
  loading,
  onFormSubmit,
  defaultValues,
}: FormProps) {
  const [values, setValues] = useState<Address>({
    street: '',
    city: '',
    region: '',
    zip: '',
    country: '',
  });

  useEffect(() => {
    if (defaultValues != null) {
      setValues(defaultValues);
    }
  }, [defaultValues]);

  /**
   * This is a function that gets the information
   * from the form and passes it to the parent component
   * @callback onSubmitForm
   * The parameters are of type: string, they are received
   * from the input of the user or if not provided,
   * they are passed by the @default defaultValues.
   * It gets back an object @values with parameters @param street, @param city,
   * @param region, @param zip, @param country
   */
  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onFormSubmit(values);
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
    setValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
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
        />
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
          />
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
          />
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
          />
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
          />
        </Coll>
      </Row>
      <Row>
        <StyledButton type="submit" variant="outlined" disabled={loading}>
          {loading ? 'Loading' : label}
        </StyledButton>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          {loading && <CircularProgress />}
        </Box>
      </Row>
    </form>
  );
}

export default FormSubmit;
