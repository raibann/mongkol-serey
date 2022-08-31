import { Button, Stack } from '@mui/material';
import BookingInvoice from 'components/ComToPrint/BookingInvoice';
// import FinalInvoice from 'components/ComToPrint/FinalInvoice';
import ResponsiveDrawer from 'components/CusDrawer/ResponsiveDrawer';
// import ResponsiveDialog from 'components/CusDialog/ResponsiveDialog';
// import CusInput from 'components/CusInput';
import { useRef, useState } from 'react';
import ReactToPrint from 'react-to-print';
import { bookingInvoice, pageStyle } from 'utils/print-util';

export default function Home() {
  const [state, setState] = useState(false);
  const componentRef = useRef(null);

  return (
    <>
      <Stack direction={'row'}>
        <Button variant='contained' onClick={() => setState(true)}>
          click
        </Button>
      </Stack>
      {/* <ResponsiveDialog
        onCloseDialog={() => setState(false)}
        open={state}
        size='sm'
      >
        <CusInput setFile={() => {}} id={'abc'} aspect={1 / 1}>
          <Button variant='contained' component='span'>
            file
          </Button>
        </CusInput>
      </ResponsiveDialog> */}
      <ResponsiveDrawer onCloseDrawer={() => setState(false)} open={state}>
        <ReactToPrint
          pageStyle={pageStyle}
          documentTitle='final invoice'
          trigger={() => <Button variant='contained'>Print</Button>}
          content={() => componentRef.current}
        />
      </ResponsiveDrawer>
      <Stack alignItems={'center'} sx={{ mb: 4 }}>
        {/* <FinalInvoice
          ref={componentRef}
          customerInfo={finalInvoice.customerInfo}
          orderInfo={finalInvoice.orderInfo}
        /> */}
        <BookingInvoice
          ref={componentRef}
          customerInfo={bookingInvoice.customerInfo}
          orderInfo={bookingInvoice.orderInfo}
        />
      </Stack>
    </>
  );
}
