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
