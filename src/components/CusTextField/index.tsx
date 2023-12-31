import { TextField } from '@mui/material';
import { styled } from '@mui/material';

const CusTextField = styled(TextField)(({ theme }) => ({
  borderRadius: theme.spacing(1),
  boxShadow: theme.shadows[0],
  background: theme.palette.common.white,
  outline: 'none',
  '& fieldset': {
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.spacing(1),
  },
}));

export default CusTextField;
