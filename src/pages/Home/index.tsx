import { Box, Button, Stack } from '@mui/material';
import ComponentToPrint from 'components/ComToPrint';
import ResponsiveDialog from 'components/CusDialog/ResponsiveDialog';
import CusInput from 'components/CusInput';
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
        <Button variant='contained'>print</Button>
      </Stack>

      <ResponsiveDialog
        onCloseDialog={() => setState(false)}
        open={state}
        size='sm'
      >
        <CusInput setFile={() => {}} id={'abc'} aspect={1 / 1}>
          <Button variant='contained' component='span'>
            file
          </Button>
        </CusInput>
      </ResponsiveDialog>
      {/* <ResponsiveDrawer onCloseDrawer={() => setState(false)} open={state}>
        <Typography>it is responsive</Typography>
      </ResponsiveDrawer> */}
      <ReactToPrint
        trigger={() => <Button>Print</Button>}
        content={() => componentRef.current}
      />
      <Box sx={{ display: 'none' }}>
        <ComponentToPrint ref={componentRef} />
      </Box>
    </>
  );
}
