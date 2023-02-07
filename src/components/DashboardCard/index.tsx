import {
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Tooltip,
  Typography,
  alpha,
  useTheme,
} from '@mui/material';
import { ArrowDown, ArrowUp } from 'iconsax-react';

const DashboardCard = ({
  title,
  icon,
  value,
  endTitle,
  primaryIcon,
  primaryText,
  secondaryIcon,
  secondaryText,
  primaryReverse,
  secondaryReverse,
  primaryTooltip = '',
  secondaryTooltip = '',
}: {
  title: string;
  icon: React.ReactNode;
  value: string;
  primaryReverse?: boolean;
  secondaryReverse?: boolean;
  primaryText?: string;
  primaryIcon?: React.ReactNode;
  secondaryText?: string;
  secondaryIcon?: React.ReactNode;
  endTitle?: string;
  primaryTooltip?: string;
  secondaryTooltip?: string;
}) => {
  const theme = useTheme();
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
      <Typography color='text.secondary'>{title}</Typography>
      <Stack
        direction={'row'}
        alignItems='center'
        justifyContent={'space-between'}
      >
        <List disablePadding dense>
          <Tooltip title={primaryTooltip} placement='top'>
            <ListItem
              disableGutters
              disablePadding
              sx={{
                flexDirection: primaryReverse ? 'row-reverse' : 'row',
                cursor: 'pointer',
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: 1,
                  ml: primaryReverse ? 1 : 0,
                }}
              >
                <div>{primaryIcon}</div>
              </ListItemIcon>
              <ListItemText
                primary={primaryText}
                primaryTypographyProps={{
                  sx: {
                    fontWeight: theme.typography.fontWeightBold,
                    fontSize: theme.typography.h6,
                  },
                }}
              />
            </ListItem>
          </Tooltip>
          {secondaryText && (
            <Tooltip title={secondaryTooltip} placement='top'>
              <ListItem
                disableGutters
                disablePadding
                sx={{
                  flexDirection: secondaryReverse ? 'row-reverse' : 'row',
                  cursor: 'pointer',
                }}
              >
                <ListItemIcon
                  sx={{ minWidth: 0, mr: 1, ml: secondaryReverse ? 1 : 0 }}
                >
                  <div>{secondaryIcon}</div>
                </ListItemIcon>
                <ListItemText
                  primary={secondaryText}
                  primaryTypographyProps={{
                    sx: {
                      fontWeight: theme.typography.fontWeightBold,
                      fontSize: theme.typography.h6,
                      lineHeight: 0.5,
                    },
                  }}
                />
              </ListItem>
            </Tooltip>
          )}
        </List>
        <Avatar
          sx={{
            background: alpha(theme.palette.primary.light, 0.3),
            border: `dashed 1px ${theme.palette.primary.main}`,
            height: 64,
            width: 64,
            color: theme.palette.primary.main,
          }}
        >
          {icon}
        </Avatar>
      </Stack>
      {!isNaN(+value) && (
        <Stack
          direction={'row'}
          spacing={0.5}
          alignItems='center'
          justifyContent={'flex-end'}
        >
          <Typography
            variant='caption'
            fontWeight={'bold'}
            sx={{
              color:
                +value > 0
                  ? theme.palette.success.main
                  : theme.palette.error.main,
            }}
          >
            {value.startsWith('-')
              ? Intl.NumberFormat('en', {
                  maximumFractionDigits: 2,
                }).format(+value.slice(1))
              : Intl.NumberFormat('en', {
                  maximumFractionDigits: 2,
                }).format(+value)}
            %
          </Typography>
          <div>
            {+value > 0 ? (
              <ArrowUp size='12' color={theme.palette.success.main} />
            ) : (
              <ArrowDown size='12' color={theme.palette.error.main} />
            )}
          </div>
          <Typography
            variant='caption'
            sx={{ color: theme.palette.text.secondary }}
          >
            than last {endTitle}
          </Typography>
        </Stack>
      )}
    </Paper>
  );
};

export default DashboardCard;
