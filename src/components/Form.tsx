import Box from '@mui/material/Box';
import { TextField, Button } from '@mui/material';
import {useState} from 'react';

function FormSubmit() {

const defaultValues = {
    street: '',
    city: '',
    region: '',
    zip: '',
    country: ''

}
const [values, setValues] = useState(defaultValues);

const onSubmitForm = (event:any) => {
    console.log(defaultValues)
    event.preventDefault()
}

const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setValues({
      ...defaultValues,
      [name]: value,
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
<Button type="submit" variant="outlined" >Submit</Button>
</Box>
    )
}

export default FormSubmit;



