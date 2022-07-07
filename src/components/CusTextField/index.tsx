import { TextField } from '@mui/material';
import { styled } from '@mui/material';

const CusTextField = styled(TextField)(({ theme }) => ({
  borderRadius: theme.spacing(0.5),
  background: theme.palette.common.white,
  boxShadow: theme.shadows[1],
  '& fieldset': {
    border: 'none',
  },
}));

export default CusTextField;
