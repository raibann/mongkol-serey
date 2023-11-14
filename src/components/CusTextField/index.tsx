import { TextField } from '@mui/material';
import { styled } from '@mui/material';

const CusTextField = styled(TextField)(({ theme }) => ({
  background: theme.palette.background.paper,
  borderRadius: theme.spacing(1),
  boxShadow: theme.shadows[0],
  outline: 'none',
  '& fieldset': {
    border: `0px solid ${theme.palette.divider}`,
    borderRadius: theme.spacing(1),
  },
}));

export default CusTextField;
