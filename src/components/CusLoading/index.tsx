import { Backdrop } from '@mui/material';
import React from 'react';

interface IBackdropLoading {
  open: boolean;
}
const CusBackDrop = React.memo(({ open = false }: IBackdropLoading) => {
  return (
    <Backdrop sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open}>
      <div className='lds-facebook'>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Backdrop>
  );
});

const CusLoading = React.memo(() => {
  return (
    <div className='lds-facebook'>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
});

export { CusBackDrop, CusLoading };
