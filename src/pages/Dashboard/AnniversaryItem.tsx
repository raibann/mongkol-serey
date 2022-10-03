import {
  ListItem,
  Typography,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from '@mui/material';
import { User } from 'iconsax-react';
import theme from 'theme/theme';
import THEME_UTIL from 'utils/theme-util';
import { changeBackground } from 'utils/validate-util';

const AnniversaryItem = ({
  daysLeft,
  name,
  invoiceId,
  eventType,
}: {
  name: string;
  daysLeft: number;
  invoiceId: number;
  eventType?: string;
}) => {
  return (
    <>
      <ListItem
        sx={{
          px: 0,
          pt: 0,
        }}
        secondaryAction={
          daysLeft === 0 ? (
            <Typography
              fontSize={14}
              color={theme.palette.success.main}
              fontWeight='bold'
            >
              Today
            </Typography>
          ) : (
            <Typography fontSize={14} color='error.main' fontWeight='bold'>
              {daysLeft}Days
            </Typography>
          )
        }
      >
        <ListItemAvatar>
          <Avatar
            sx={{
              background: !!name
                ? changeBackground(name)
                : THEME_UTIL.goldGradientMain,
              fontWeight: 'bold',
            }}
          >
            {!!name ? (
              name.charAt(0)
            ) : (
              <User color={theme.palette.common.white} variant='Bold' />
            )}
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={`Order ID : ${invoiceId} / ${eventType}`}
          secondary={name}
        />
      </ListItem>
    </>
  );
};

export default AnniversaryItem;
