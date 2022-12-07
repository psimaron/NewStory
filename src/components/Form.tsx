<<<<<<< HEAD
import { TextField, Button } from '@mui/material'
import React, { useState } from 'react'
import { styled } from '@mui/material/styles'

const Wrapper = styled('div')(({ theme }) => ({
  alignItems: 'center',
  maxWidth: '800px',
  maxHeight: '300px',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  rowGap: '10px',
  columnGap: '10px',
  [theme.breakpoints.down('md')]: {
    display: 'block'
  }
}))
const Row = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  [theme.breakpoints.down('md')]: {
    display: 'block'
  }

}))

const Coll = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flexBasis: '100%',
  flex: '1',
  margin: '5px',
  [theme.breakpoints.down('md')]: {
    display: 'block'
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
    setValues(prevValues => {
      return { ...prevValues, [e.target.name]: e.target.value }
    })
  }
  /* export default function BasicForm({children} : {children:string}){ */
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

export default FormSubmit
=======
import { TextField, Button } from '@mui/material';
import {useState} from 'react';
import { styled } from '@mui/material/styles';

const Wrapper = styled('div')(({theme}) => ({
    alignItems:'center', 
    maxWidth: '800px',
    maxHeight: '300px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    rowGap: '10px',
    columnGap: '10px',
    [theme.breakpoints.down('md')]: {
        display:'block',
    }
}))
const Row = styled ('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'row',
    width:"100%",
    [theme.breakpoints.down('md')]: {
        display:'block',
    }
    
}))

const Coll = styled ('div') (({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    flexBasis: '100%',
    flex: '1',
    margin: '5px',
    [theme.breakpoints.down('md')]: {
        display:'block',
    }
}))


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



>>>>>>> 3ecf2b0d8bde0b3b03266eaaa0b0e86ce8b01455
