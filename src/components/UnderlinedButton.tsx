<<<<<<< HEAD
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'

export const UnderlinedButtons = styled(Button, {
  shouldForwardProp: (props) => props !== 'outlined'
})(({ variant }) => ({
  variant: variant,
  borderColor: 'transparent',
  borderBottomColor: 'blue',
  borderRadius: 1,
  borderBottomWidth: 3,
  fontSize: 15,
  fontWeight: 'bold'
}))

/* export const UnderlinedButton = (props: ButtonProps) => <Button variant='contained' {...props}/>

; */
=======
import Button, {ButtonProps} from '@mui/material/Button';
import { blue, red } from '@mui/material/colors';
import {styled} from '@mui/material/styles';



export const UnderlinedButtons = styled(Button) ({
    borderColor: 'transparent',
    borderBottomColor: 'blue',
    borderRadius: 1,
    borderBottomWidth: 3,
    fontSize: 15,
    fontWeight: 'bold'
});



/*export const UnderlinedButton = (props: ButtonProps) => <Button variant='contained' {...props}/>

;*/
>>>>>>> 3ecf2b0d8bde0b3b03266eaaa0b0e86ce8b01455
