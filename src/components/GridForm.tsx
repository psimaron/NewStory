import { TextField, Button, Container, autocompleteClasses } from '@mui/material';
import {useState} from 'react';
import { Grid } from '@mui/material';   
import { styled } from '@mui/material/styles';


const GridFormSubmit = (props:any) => {
    const {label = "Submit"} = props;

    const StyledBox = styled('div')({
        width:'600px',
        display:'grid',
        flexGrow: "1",
        
    })
const [values, setValues] = useState({
    street: '',
    city: '',
    region: '',
    zip: '',
    country: ''});

const onSubmitForm = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(values)
}

const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setValues( prevValues => {
        return { ...prevValues, [e.target.name]: e.target.value}
    });
  };
/*export default function BasicForm({children} : {children:string}){*/
    return (
<StyledBox>
<form onSubmit={onSubmitForm}>
<Grid container spacing={2}>
<Grid item xs={12} md={12}>
<TextField sx={{width:'100%'}}
    id="outlined-basic" 
    name='street' 
    label="Street address" 
    variant="outlined" 
    value={values.street} 
    onChange={handleInputChange}>
</TextField>
</Grid>
<Grid item xs={12} md={6}>
<TextField sx={{width:'100%'}}
    id="outlined-basic" 
    name= 'city' 
    label="City" 
    variant="outlined" 
    value={values.city} 
    onChange={handleInputChange}>
</TextField>
</Grid>
<Grid xs={12} md={6} item>
<TextField sx={{width:'100%'}}
    id="outlined-basic" 
    name='region' 
    label="State/Region" 
    variant="outlined" 
    value={values.region} 
    onChange={handleInputChange}>
</TextField>
</Grid>
<Grid xs={12} md={6} item>
<TextField sx={{width:'100%'}}
    id="outlined-basic" 
    name='zip' label="Zip" 
    variant="outlined" 
    value={values.zip} 
    onChange={handleInputChange}>
</TextField>
</Grid>
<Grid xs={12} md={6} item >
<TextField sx={{width:'100%'}}
    id="outlined-basic" 
    name='country' 
    label="Country" 
    variant="outlined" 
    value={values.country} 
    onChange={handleInputChange}>
</TextField>
</Grid>
<Grid xs={12} md={12} item> 
<Button type="submit" variant="outlined" style={{width:'100%'}}>{label}</Button>
</Grid>
</Grid>
</form>
</StyledBox>
    )
}

export default GridFormSubmit;
