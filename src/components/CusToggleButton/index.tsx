import { ToggleButton } from '@mui/material';
import { styled } from '@mui/material';
import THEME_UTIL from 'utils/theme-util';

const CusToggleButton = styled(ToggleButton)(({ theme }) => ({
  border: 'none',
  background: theme.palette.common.white,
  color: theme.palette.primary.main,
  boxShadow: theme.shadows[1],
  '&.Mui-selected': {
    background: THEME_UTIL.goldGradientMain,
    color: theme.palette.common.white,
    '&:hover': {
      background: THEME_UTIL.goldGradientLight,
    },
  },
}));

export default CusToggleButton;