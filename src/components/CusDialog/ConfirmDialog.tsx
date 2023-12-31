import * as React from 'react';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Stack, Typography, Button } from '@mui/material';
import { MessageQuestion } from 'iconsax-react';
import theme from 'theme/theme';
import { LoadingButton } from '@mui/lab';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />;
});
interface IConfirmDialog extends DialogProps {
  title: string;
  cancel: () => void;
  confirm: () => void;
  loading?: boolean;
}
export default function ConfirmDialogSlide(props: IConfirmDialog) {
  const { open, title, confirm, cancel, loading, ...rest } = props;
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      maxWidth={props.maxWidth}
      onClose={cancel}
      {...rest}
    >
      <Stack alignItems={'center'} sx={{ p: 4 }} spacing={3}>
        <Stack alignItems={'center'}>
          <MessageQuestion
            size='60'
            color={theme.palette.error.main}
            variant='Bulk'
          />
          <Typography variant='body1' color={'error'}>
            {title}
          </Typography>
        </Stack>
        <Stack direction={'row'} spacing={4}>
          <Button
            variant='contained'
            color='error'
            sx={{
              '&:hover': {
                bgcolor: theme.palette.error.main,
                color: theme.palette.common.white,
              },
            }}
            onClick={cancel}
          >
            Cancel
          </Button>
          <LoadingButton
            onClick={confirm}
            loading={loading}
            variant='contained'
            color='info'
            loadingIndicator='Deletting…'
          >
            Confirm
          </LoadingButton>
        </Stack>
      </Stack>
    </Dialog>
  );
}
