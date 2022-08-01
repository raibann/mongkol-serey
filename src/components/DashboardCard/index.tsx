import { Paper, Stack, Typography, alpha } from '@mui/material';
import { ArrowDown, ArrowUp } from 'iconsax-react';
import theme from 'theme/theme';

const DashboardCard = ({
  isHigher,
  percentage,
  title,
  value,
  icon,
  type,
}: {
  title: string;
  value: string;
  percentage: string;
  isHigher?: boolean;
  icon: React.ReactNode;
  type: string;
}) => {
  return (
    <Paper
      elevation={1}
      sx={{
        p: 2,
        mr: 3,
        minWidth: 300,
        width: 325,
        borderRadius: 2,
        background: theme.palette.common.white,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Stack rowGap={1}>
        <Typography color='text.secondary'>{title}</Typography>
        <Stack direction={'row'} alignItems={'baseline'} spacing={0.5}>
          <Typography
            fontSize={28}
            sx={{ fontWeight: (theme) => theme.typography.fontWeightMedium }}
          >
            {value}
          </Typography>
          <Typography variant='subtitle2'>{type}</Typography>
        </Stack>
        <Stack direction='row' alignItems='baseline'>
          <Typography
            color={isHigher ? 'success.main' : 'error.main'}
            fontWeight='bold'
          >
            {percentage}
          </Typography>
          {isHigher ? (
            <ArrowUp
              size='16'
              color={theme.palette.success.main}
              style={{
                position: 'relative',
                bottom: -2,
              }}
            />
          ) : (
            <ArrowDown
              size='16'
              color={theme.palette.error.main}
              style={{
                position: 'relative',
                bottom: -2,
              }}
            />
          )}
          <Typography color='text.secondary' fontSize={12} pl={1}>
            than last year
          </Typography>
        </Stack>
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
    </Paper>
  );
};

export default DashboardCard;
