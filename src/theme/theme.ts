import { createTheme } from '@mui/material/styles';

let theme = createTheme({
  typography: {
    fontFamily: [
      'Roboto',
      'Raleway',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },

  palette: {
    primary: {
      main: '#F2C335',
      light: '#FFF569',
      dark: '#BB9300',
    },
    secondary: {
      main: '#2E2200',
      light: '#58492B',
      dark: '#0D0000',
    },
    success: {
      main: '#36CF87',
      light: '#70E000',
      // dark: '#32ad00',
    },
    warning: {
      main: '#F99600',
      light: '#F2C335',
      // dark: '#c59500',
    },
    error: {
      main: '#F0142F',
    },
    text: {
      primary: '#131523',
      secondary: '#D5D7E3',
      disabled: '#9ea7aa',
    },
    background: {
      paper: '#F5F6FA',
    },
    divider: '#eeeeee',
  },
});

theme.components = {
  MuiTypography: {
    defaultProps: {
      color: 'secondary.main',
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        background: theme.palette.common.white,
        borderRadius: 8,
      },
    },
  },
};

export default theme;
