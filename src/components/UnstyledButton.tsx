import Button, {ButtonProps} from '@mui/material/Button';
import { withStyles } from '@mui/material/styles';
import {amber, deepPurple} from '@mui/material/colors';
import PropTypes from 'prop-types';

const styles = () => ({
    default: {
        borderRadius:0,
        textTransform: 'none'
    },
    primary: {
        '&:hover':{
            backgroundColor: amber[500],
            color: deepPurple[900]
        }
    }
})
export const UnstyledButton = (props: ButtonProps) => <Button variant='contained' {...props}/>

;

UnstyledButton.propTypes = {
    color: PropTypes.string
}

export default withStyles(styles)