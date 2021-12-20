import { BrowserRouter as Router } from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import AppProvider from './hooks';
import Routes from './routes';
import theme from './styles/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <AppProvider>
        <Routes />
      </AppProvider>
    </Router>
  </ThemeProvider>
);

export default App;
