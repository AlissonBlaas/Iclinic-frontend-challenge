import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const themeOptions = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
          outline: 0,
          boxSizing: 0,
          textAlign: 'center',
          height: '100vh',
        },
        button: {
          height: 56,
          borderRadius: 10,
          fontWeight: 'bold',
          textTransform: 'none',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#2C97D1',
    },
  },
  typography: {
    button: {
      fontWeight: 600,
    },
    fontFamily: "'Montserrat', sans-serif",
    overline: {
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: '1.125rem',
    },
  },
  shape: {
    borderRadius: 10,
  },
});

const theme = responsiveFontSizes(themeOptions);

export default theme;
