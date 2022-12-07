import { createTheme } from '@mui/material/styles'
import { amber, blue } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    primary: {
      main: blue[800]
    },
    secondary: {
      main: amber[500]
    }

  }
})

/* declare module '@mui/material/styles' {
    interface Theme {
        status: {
            danger:string;
        };
    }
    interface ThemeOptions {
    status?:{
        danger?: string;
    };
}};
*/
export default theme
