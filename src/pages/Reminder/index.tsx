import { Avatar, Box, Paper, Stack, Typography } from '@mui/material';
import CusIconButton from 'components/CusIconButton';
import PageHeader from 'components/PageHeader';
import { MdClose } from 'react-icons/md';

export default function Reminder() {
  return (
    <>
      <PageHeader pageTitle='Reminder' />
      <Box sx={{ px: 2, pb: 2 }}>
        <Stack direction={'row'} spacing={2}>
          <Typography variant='h5' fontWeight={'light'}>
            Anniversary:
          </Typography>
          <Typography variant='h5' fontWeight={'light'}>
            5 Cusomter
          </Typography>
        </Stack>
        <Paper sx={{ width: 360 }}>
          <Stack
            direction={'row'}
            alignItems='center'
            justifyContent={'flex-end'}
          >
            <CusIconButton color='primary'>
              <MdClose />
            </CusIconButton>
          </Stack>
          <Stack alignItems='center'>
            <Typography variant='h5' fontWeight={'blod'}>
              Ma Raibann
            </Typography>
            <Typography variant='subtitle2'>Happy anniversary</Typography>
          </Stack>
          <Stack direction={'row'}>
            <Avatar
              src='/images/gift.svg'
              variant='square'
              sx={{ width: 126, height: 'auto' }}
            />
          </Stack>
        </Paper>
      </Box>
    </>
  );
}
