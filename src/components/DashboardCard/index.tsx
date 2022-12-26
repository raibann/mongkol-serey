import { Paper, Stack, Typography, alpha } from '@mui/material';
import theme from 'theme/theme';

const DashboardCard = ({
  title,
  value,
  icon,
  endType,
  startType,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
  startType?: string;
  endType?: string;
}) => {
  return (
    <Paper
      elevation={1}
      sx={{
        p: 2,
        width: '100%',
        height: 130,
        borderRadius: 3,
        background: theme.palette.common.white,
      }}
    >
      <Stack direction={'column'}>
        <Typography color='text.secondary'>{title}</Typography>
        <Stack
          direction={'row'}
          alignItems='center'
          justifyContent={'space-between'}
        >
          <Stack direction={'row'} alignItems={'baseline'} spacing={0.5}>
            <Typography
              fontSize={28}
              sx={{ color: (theme) => theme.palette.info.main }}
            >
              {startType}
            </Typography>
            <Typography
              fontSize={28}
              sx={{
                fontWeight: (theme) => theme.typography.fontWeightMedium,
              }}
            >
              {value}
            </Typography>
            <Typography
              fontSize={16}
              sx={{ color: (theme) => theme.palette.info.main }}
            >
              {endType}
            </Typography>
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
