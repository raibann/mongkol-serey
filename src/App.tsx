import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppWrapper } from 'context/AppContext';
import AllRoutes from 'routes';
import theme from 'theme/theme';
import { DrawerWrapper } from 'context/DrawerContext';

function App() {
  return (
    <Router basename={process.env.REACT_APP_BASE_PATH}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppWrapper>
          <DrawerWrapper>
            <AllRoutes />
          </DrawerWrapper>
        </AppWrapper>
      </ThemeProvider>
    </Router>
  );
}

export default App;
