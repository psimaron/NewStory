import Box from '@mui/material/Box';
import { TextField, Button } from '@mui/material';
import {useState} from 'react';

const FormSubmit = (props:any) => {
    const {label = "Submit"} = props;

const [values, setValues] = useState({
    street: '',
    city: '',
    region: '',
    zip: '',
    country: ''});

const onSubmitForm = (e:any) => {
    e.preventDefault()
    console.log(values)
}

const handleInputChange = (e:any) => {
    setValues( prevValues => {
        return { ...prevValues, [e.target.name]: e.target.value}
    });
  };
/*export default function BasicForm({children} : {children:string}){*/
    return (

<Box component="form" onSubmit={onSubmitForm} sx={{
        display: 'flex',
        flexDirection: 'column',
      }}>
<TextField 
    id="outlined-basic" 
    name='street' 
    label="Street address" 
    variant="outlined" 
    value={values.street} 
    onChange={handleInputChange}>
</TextField>
<TextField 
    id="outlined-basic" 
    name= 'city' 
    label="City" 
    variant="outlined" 
    value={values.city} 
onChange={handleInputChange}>
</TextField>
<TextField 
    id="outlined-basic" 
    name='region' 
    label="State/Region" 
    variant="outlined" 
    value={values.region} 
    onChange={handleInputChange}>
</TextField>
<TextField 
    id="outlined-basic" 
    name='zip' label="Zip" 
    variant="outlined" 
    value={values.zip} 
    onChange={handleInputChange}>
</TextField>
<TextField 
    id="outlined-basic" 
    name='country' label="Country" 
    variant="outlined" 
    value={values.country} 
    onChange={handleInputChange}>
</TextField>
<Button type="submit" variant="outlined">{label}</Button>
</Box>
    )
}

export default FormSubmit;



