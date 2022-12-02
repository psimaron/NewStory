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
