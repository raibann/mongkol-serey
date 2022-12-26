import { Paper, Stack, Typography, alpha } from '@mui/material';
import theme from 'theme/theme';

const DashboardCard = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <Paper
      elevation={1}
      sx={{
        p: 2,
        width: '100%',
        height: '100%',
        borderRadius: 3,
        background: theme.palette.common.white,
      }}
    >
      <Stack direction={'column'} justifyContent='center'>
        <Typography color='text.secondary'>{title}</Typography>
        <Stack
          direction={'row'}
          alignItems='center'
          justifyContent={'space-between'}
        >
          <Stack direction={'row'} spacing={0.5}>
            {children}
          </Stack>
          <Stack
            sx={{
              background: alpha(theme.palette.primary.light, 0.3),
              border: `dashed 1px ${theme.palette.primary.main}`,
              p: 2.5,
              borderRadius: '50vh',
              heght: 'auto',
              color: theme.palette.primary.main,
            }}
          >
            {icon}
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default DashboardCard;
