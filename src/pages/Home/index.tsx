import { Button, Typography } from '@mui/material';
import ResponsiveDialog from 'components/CusDialog/ResponsiveDailog';
// import ResponsiveDrawer from 'components/CusDrawer/ResponsiveDrawer';
import CusInput from 'components/CusInput';
import { useState } from 'react';

export default function Home() {
  const [state, setState] = useState(false);

  return (
    <>
      <Button
        variant='contained'
        onClick={() => setState(true)}
        component='label'
      >
        test drawer or dailog
      </Button>
      <ResponsiveDialog
        onCloseDialog={() => setState(false)}
        open={state}
        size='small'
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
    </>
  );
}
