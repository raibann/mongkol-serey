import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppWrapper } from 'context/AppContext';
import AllRoutes from 'routes';
import theme from 'theme/theme';
import { DrawerWrapper } from 'context/DrawerContext';
import { AuthWrapper } from 'context/AuthContext';
import './App.css';
function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppWrapper>
          <AuthWrapper>
            <DrawerWrapper>
              <AllRoutes />
            </DrawerWrapper>
          </AuthWrapper>
        </AppWrapper>
      </ThemeProvider>
    </Router>
  );
}

export default App;
