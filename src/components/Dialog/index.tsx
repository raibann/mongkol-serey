import React, {
  useState,
  useImperativeHandle,
  forwardRef,
  ForwardedRef,
} from 'react';
import MuiDialog from '@mui/material/Dialog';
import DialogTitle, { DialogTitleProps } from '@mui/material/DialogTitle';
import DialogContent, { DialogContentProps } from '@mui/material/DialogContent';
import DialogActions, { DialogActionsProps } from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { MdOutlineClose } from 'react-icons/md';
import { PaperProps } from '@mui/material';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export interface IDialogRef {
  open: (params?: any) => void;
  close: () => void;
}

interface IDialogProps {
  cusTitle?: string;
  alternateTitle?: string;
  children?: React.ReactNode;
  fullScreen?: boolean;
  cusWidth?: number | string;
  cusHeight?: number | string;
  action?: React.ReactNode;
  disableCloseButton?: boolean;
  content?: (params: any) => React.ReactNode;
  disablePadding?: boolean;
  paperProps?: PaperProps;
  dialogTitleProps?: DialogTitleProps;
  dialogContentProps?: DialogContentProps;
  dialogActionProps?: DialogActionsProps;
}

const Dialog = (
  {
    cusTitle = '',
    alternateTitle = '',
    cusHeight = 'auto',
    cusWidth = 'auto',
    children = null,
    content = () => null,
    fullScreen = false,
    action = null,
    disableCloseButton = false,
    disablePadding = false,
    dialogActionProps,
    dialogContentProps,
    paperProps,
    dialogTitleProps,
  }: IDialogProps,
  ref: ForwardedRef<IDialogRef | undefined>
) => {
  const [open, setOpen] = useState(false);
  const [params, setParams] = useState<any>();

  useImperativeHandle(ref, () => ({
    open: (params) => {
      setOpen(true);
      setParams(params);
    },

    close: onCloseDialog,
  }));

  const onCloseDialog = () => {
    setParams(undefined);
    setOpen(false);
  };

  return (
    <>
      <MuiDialog
        open={open}
        TransitionComponent={Transition}
        fullScreen={fullScreen}
        onClose={onCloseDialog}
        PaperProps={{
          sx: {
            p: disablePadding ? 0 : undefined,
            maxWidth: '100vw',
            maxHeight: '100vh',
            width: fullScreen ? undefined : cusWidth,
            height: fullScreen ? undefined : cusHeight,
            ...paperProps?.sx,
          },
          ...paperProps,
        }}
      >
        {(cusTitle || alternateTitle) && (
          <DialogTitle
            component='div'
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            p={disablePadding ? 0 : undefined}
            {...dialogTitleProps}
          >
            {params === undefined || alternateTitle === ''
              ? cusTitle
              : alternateTitle}
            {!disableCloseButton && (
              <IconButton onClick={onCloseDialog}>
                <MdOutlineClose />
              </IconButton>
            )}
          </DialogTitle>
        )}
        <DialogContent
          sx={{ p: disablePadding ? 0 : undefined, ...dialogContentProps?.sx }}
          {...dialogContentProps}
        >
          {content(params) || children}
        </DialogContent>
        {action !== null && (
          <DialogActions {...dialogActionProps}>{action}</DialogActions>
        )}
      </MuiDialog>
    </>
  );
};

export default forwardRef(Dialog);
