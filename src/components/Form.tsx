import Box from '@mui/material/Box';
import { TextField, Button } from '@mui/material';
import {useState} from 'react';
import { styled } from '@mui/material/styles';

const Wrapper = styled('div')({  
    border: '1px solid',
    borderRadius: '2px',
    alignItems:'center', 
    width: '600px',
    height: '300px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    rowGap: '10px',
    columnGap: '10px',
})
const Row = styled ('div')({
    display: 'flex',
    flexDirection: 'row',
    width:"100%",
    
})

const Coll = styled ('div') ({
    display: 'flex',
    flexDirection: 'column',
    flexBasis: '100%',
    flex: '1',
    margin: '5px',
})


const FormSubmit = (props:any) => {
    const {label = "Submit"} = props;

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

<Wrapper>
<form onSubmit={onSubmitForm}>
<Row>
<Coll>
<TextField 
    id="outlined-basic" 
    name='street' 
    label="Street address" 
    variant="outlined" 
    value={values.street} 
    onChange={handleInputChange}>
</TextField>
</Coll>
</Row>
<Row>
<Coll>
<TextField 
    id="outlined-basic" 
    name= 'city' 
    label="City" 
    variant="outlined" 
    value={values.city} 
onChange={handleInputChange}>
</TextField>
</Coll>
<Coll>
<TextField 
    id="outlined-basic" 
    name='region' 
    label="State/Region" 
    variant="outlined" 
    value={values.region} 
    onChange={handleInputChange}>
</TextField>
</Coll>
</Row>
<Row>
<Coll>
<TextField 
    id="outlined-basic" 
    name='zip' label="Zip" 
    variant="outlined" 
    value={values.zip} 
    onChange={handleInputChange}>
</TextField>
</Coll>
<Coll>
<TextField 
    id="outlined-basic" 
    name='country' label="Country" 
    variant="outlined" 
    value={values.country} 
    onChange={handleInputChange}>
</TextField>
</Coll>
</Row>
<Coll>

<Button type="submit" variant="outlined">{label}</Button>

</Coll>
</form>
</Wrapper>
    )
}

export default FormSubmit;



