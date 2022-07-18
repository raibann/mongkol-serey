import { TextField } from '@mui/material';
import { styled } from '@mui/material';

const StyledOutlinedTextField = styled(TextField)(({ theme }) => ({
  background: theme.palette.common.white,
  outline: 'none',
  width: '100%',
  borderRadius: theme.spacing(1),
  '& fieldset': {
    borderColor: theme.palette.primary.main,
    borderRadius: theme.spacing(1),
  },
}));

export default StyledOutlinedTextField;
