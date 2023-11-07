import { IconButton } from '@mui/material';
import { styled } from '@mui/material';

const CusIconButton = styled(IconButton)(({ theme }) => ({
  borderRadius: theme.spacing(1),
  background: theme.palette.common.white,
  boxShadow: theme.shadows[1],
  ':disabled': {
    background: theme.palette.grey[200],
  },
}));

export { CusIconButton };
