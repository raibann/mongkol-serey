import { Dialog, DialogProps, Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import useResponsive from 'hook/useResponsive';
import React from 'react';

interface IErrorDialog extends DialogProps {
  onCloseDialog: () => void;
  children: React.ReactNode;
  size?: string;
}
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />;
});
const ResponsiveDialog = (props: IErrorDialog) => {
  const { open, onCloseDialog, children, size } = props;
  const { isMdDown } = useResponsive();

  return (
    <Dialog
      open={open}
      onClose={onCloseDialog}
      maxWidth={size ? 'sm' : 'lg'}
      fullWidth
      TransitionComponent={Transition}
      PaperProps={{
        sx: { height: ['100%', '100%', size ? '50vh' : '90vh'] },
      }}
      fullScreen={isMdDown}
    >
      {children}
    </Dialog>
  );
};

export default ResponsiveDialog;
