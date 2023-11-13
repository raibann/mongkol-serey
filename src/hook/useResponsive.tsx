import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const useResponsive = () => {
  const theme = useTheme();
  const isXsDown = useMediaQuery(theme.breakpoints.down('xs'));
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  const isMdDown = useMediaQuery(theme.breakpoints.down('md'));
  const isLgDown = useMediaQuery(theme.breakpoints.down('lg'));

  return { theme, isSmDown, isLgDown, isMdDown, isXsDown };
};

export default useResponsive;
