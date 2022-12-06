import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../src/themes/Theme";


export const withMuiTheme = (Story) => (
  <ThemeProvider theme={theme}>
    <CssBaseline/>
    <Story/>
  </ThemeProvider>
);

export const decorators = [withMuiTheme];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
