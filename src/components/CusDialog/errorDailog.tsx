import {
  Button,
  Dialog,
  DialogContent,
  DialogProps,
  Stack,
  Typography,
} from '@mui/material';
import { EmojiSad } from 'iconsax-react';
import React from 'react';
import theme from 'theme/theme';

interface IErrorDialog extends DialogProps {
  errorTitle?: string;
  errorMessage: string;
  onCloseDialog: () => void;
}
const ErrorDialog = (props: IErrorDialog) => {
  const { open } = props;
  return (
    <Dialog open={open} fullWidth maxWidth='xs'>
      <DialogContent>
        <Stack alignItems={'center'} sx={{ px: 4 }} spacing={2}>
          <EmojiSad
            size='80'
            color={theme.palette.primary.main}
            variant='Bulk'
          />
          <Typography
            variant='h5'
            sx={{ fontWeight: (theme) => theme.typography.fontWeightBold }}
          >
            {props.errorTitle || 'NOOB AGENLA!'}
          </Typography>
          <Typography sx={{ color: (theme) => theme.palette.error.main }}>
            {props.errorMessage}
          </Typography>
          <Button
            onClick={props.onCloseDialog}
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
