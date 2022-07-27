import { TextField } from '@mui/material';
import { styled } from '@mui/material';

const StyledOutlinedTextField = styled(TextField)(({ theme }) => ({
  width: '100%',
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.spacing(1),
    background: theme.palette.common.white,
    borderColor: theme.palette.primary.main,
  },
}));

export default StyledOutlinedTextField;
