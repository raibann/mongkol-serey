import { createTheme } from '@mui/material/styles';

let theme = createTheme({
  typography: {
    fontFamily: [
      'SF Pro Display',
      'Roboto',
      'Poppins',
      'Khmer Busra high',
      '-apple-system',
      'Raleway',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#BB9300',
      light: '#F2C335',
    },
    secondary: {
      main: '#2E2200',
      light: '#58492B',
      dark: '#0D0000',
    },
    error: {
      main: '#F0142F',
      light: '#FF5C59',
      dark: '#B50007',
    },
    success: {
      main: '#36CF87',
      light: '#73FFB7',
      dark: '#009D59',
    },
    warning: {
      main: '#F99600',
      light: '#FFC747',
      dark: '#C06800',
    },
    info: {
      main: '#57B8FF',
      light: '#91EAFF',
      dark: '#0088CB',
    },
    text: {
      primary: '#2E2200DE',
      secondary: '#2E220099',
      disabled: '#2E22001F',
    },
    background: {
      // paper: '#F5F6FA',
      paper: '#FAFAFB',
    },
    divider: '#E0E0E0',
  },
});
theme.shadows[1] = '0px 1px 4px #15223214';
theme.shadows[2] = '0px 1px 1px #15223214';
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
        borderRadius: 12,
      },
    },
  },
};

export default theme;
