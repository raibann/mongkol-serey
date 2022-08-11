import { Button, Stack } from '@mui/material';
import BookingInvoice from 'components/ComToPrint/BookingInvoice';
import FinalInvoice from 'components/ComToPrint/FinalInvoice';
import ResponsiveDrawer from 'components/CusDrawer/ResponsiveDrawer';
// import ResponsiveDialog from 'components/CusDialog/ResponsiveDialog';
// import CusInput from 'components/CusInput';
import { useRef, useState } from 'react';
import ReactToPrint from 'react-to-print';

export default function Home() {
  const [state, setState] = useState(false);
  const componentRef = useRef(null);
  const pageStyle = ` @page {
    size: A4;
    margin:2.54cm;
  }

  @media all {
    .pagebreak {
      display: none;
    }
  }

  @media print {
    .pagebreak {
      page-break-before: always;
    }
  }`;
  return (
    <>
      <Stack direction={'row'}>
        <Button variant='contained' onClick={() => setState(true)}>
          test drawer or dailog
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
        <FinalInvoice ref={componentRef} />
        <BookingInvoice ref={componentRef} />
      </Stack>
    </>
  );
}
