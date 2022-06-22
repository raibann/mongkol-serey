import { Stack, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Stack
      sx={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        background: (theme) => theme.palette.error.light,
        p: 2,
      }}
      alignItems={'center'}
    >
      <Typography sx={{ color: (theme) => theme.palette.common.white }}>
        Copyright ©
      </Typography>
    </Stack>
  );
}
