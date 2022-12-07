import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'

export const UnderlinedButtons = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'variant'
})(() => ({
  border: '2px solid',
  borderColor: 'transparent',
  borderBottomColor: 'blue',
  borderRadius: 1,
  borderBottomWidth: 3,
  fontSize: 15,
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: 'red'
  }
}))

/* export const UnderlinedButton = (props: ButtonProps) => <Button variant='contained' {...props}/>
; */
