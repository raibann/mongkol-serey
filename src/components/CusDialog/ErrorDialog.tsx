import {
  Button,
  Dialog,
  DialogContent,
  DialogProps,
  Stack,
  Typography,
} from '@mui/material';
import useResponsive from 'hook/useResponsive';
import { EmojiSad } from 'iconsax-react';
import theme from 'theme/theme';

interface IErrorDialog extends DialogProps {
  errorTitle?: string;
  errorMessage: string;
  onCloseDialog: () => void;
}
const ErrorDialog = (props: IErrorDialog) => {
  const { open, errorMessage, errorTitle, onCloseDialog, onClose, ...rest } =
    props;

  const { isSmDown } = useResponsive();
  return (
    <Dialog
      open={open}
      fullWidth
      maxWidth='xs'
      onClose={onCloseDialog}
      {...rest}
    >
      <DialogContent>
        <Stack alignItems={'center'} sx={{ px: 4 }} spacing={2}>
          <EmojiSad
            size={isSmDown ? '40' : '80'}
            color={theme.palette.primary.main}
            variant='Bulk'
          />
          <Typography
            variant={isSmDown ? 'subtitle1' : 'h5'}
            noWrap
            sx={{ fontWeight: (theme) => theme.typography.fontWeightBold }}
          >
            {errorTitle || 'NOOB!'}
          </Typography>
          <Typography
            sx={{ color: (theme) => theme.palette.error.main }}
            textAlign='center'
            variant={isSmDown ? 'caption' : 'h5'}
          >
            {errorMessage}
          </Typography>
          <Button
            onClick={onCloseDialog}
            variant='contained'
            sx={{ borderRadius: 3, px: 3, boxShadow: 0 }}
          >
            <Typography color='white' sx={{ textTransform: 'capitalize' }}>
              OK, cool
            </Typography>
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default ErrorDialog;
