import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const UnderlinedButtons = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'variant',
})(({ theme }) => ({
  color: theme.palette.primary.main,
  borderBottom: '3px solid',
  borderBottomColor: 'blue',
  borderRadius: 1,
  fontSize: 15,
  fontWeight: 'bold',
  '&:hover': {
    borderBottomColor: theme.palette.secondary.main,
    backgroundColor: theme.palette.secondary.light,
    boxShadow: '0 2px gray',
  },
}));

export default UnderlinedButtons;
