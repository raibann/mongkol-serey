import { createTheme } from '@mui/material/styles';

let theme = createTheme({
  // typography: {
  //   fontFamily: ['Roboto'].join(','),
  // },

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
      main: '#70E000',
      // light: '#a7ff50',
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
      // secondary: '#cfd8dc',
      disabled: '#9ea7aa',
    },
    background: {
      paper: '#F5F6FA',
    },
    divider: '#7E84A3',
  },
});
export default theme;
