import { createTheme } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#fd4d6d',
      light: '#ff829b',
      dark: '#c40042',
    },
    secondary: {
      main: '#1f8ce8',
      light: '#6bbcff',
      dark: '#005fb5',
    },
    success: {
      main: '#70E000',
      light: '#a7ff50',
      dark: '#32ad00',
    },
    warning: {
      main: '#FDC500',
      light: '#fff84f',
      dark: '#c59500',
    },
    text: {
      secondary: '#cfd8dc',
      disabled: '#9ea7aa',
    },
  },
});
export default theme;
