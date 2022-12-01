import { ThemeProvider} from '@mui/material/styles';
import theme from './themes/Theme';
import Button from '@mui/material/Button';


function App() {
  return (
  <ThemeProvider theme={theme}>
    <Button variant='contained' color='primary'>Button</Button>
  </ThemeProvider>  
  )
}

export default App;
