import { alpha, Box, Typography } from '@mui/material';
import { SecuritySafe } from 'iconsax-react';
import theme from 'theme/theme';

const Unauthorized = ({
  height = 'calc(100vh - 100px)',
}: {
  height?: string | number;
}) => {
  return (
    <Box
      sx={{
        height: height,
        mx: 3,
        borderRadius: 3,
        textAlign: 'center',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          p: 5,
          boxShadow: theme.shadows[1],
          background: alpha(theme.palette.error.light, 0.1),
        }}
      >
        <SecuritySafe size='48' color={theme.palette.error.main} />
        <Typography variant='h6' color='error'>
          Unauthorized
        </Typography>
      </Box>
    </Box>
  );
};

export default Unauthorized;
