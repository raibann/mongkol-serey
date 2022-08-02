import { Button, Stack } from '@mui/material';
import ComponentToPrint from 'components/ComToPrint';
import ResponsiveDrawer from 'components/CusDrawer/ResponsiveDrawer';
// import ResponsiveDialog from 'components/CusDialog/ResponsiveDialog';
// import CusInput from 'components/CusInput';
import { useRef, useState } from 'react';
import ReactToPrint from 'react-to-print';

export default function Home() {
  const [state, setState] = useState(false);
  const componentRef = useRef(null);
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
          trigger={() => <Button variant='contained'>Print</Button>}
          content={() => componentRef.current}
        />
      </ResponsiveDrawer>
      <Stack alignItems={'center'} sx={{ mb: 4 }}>
        <ComponentToPrint ref={componentRef} />
      </Stack>
    </>
  );
}
