import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppWrapper } from 'context/AppContext';
import AllRoutes from 'routes';
import theme from 'theme/theme';

function App() {
  return (
    <Router basename={process.env.REACT_APP_BASE_PATH}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppWrapper>
          <AllRoutes />
        </AppWrapper>
      </ThemeProvider>
    </Router>
  );
}

export default App;
