import {
  ListItem,
  Typography,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from '@mui/material';
import THEME_UTIL from 'utils/theme-util';

const AnniversaryItem = ({
  daysLeft,
  lastOrder,
  name,
}: {
  name: string;
  lastOrder: string;
  daysLeft: number;
}) => {
  return (
    <ListItem
      sx={{
        px: 0,
        pt: 0,
      }}
      secondaryAction={
        <Typography fontSize={14} color='error.main' fontWeight='bold'>
          {`${daysLeft} Days`}
        </Typography>
      }
    >
      <ListItemAvatar>
        <Avatar
          sx={{
            background: THEME_UTIL.goldGradientMain,
            fontWeight: 'bold',
          }}
        >
          {name.split(' ')[0].charAt(0).toUpperCase() +
            name.split(' ')[1].charAt(0).toUpperCase()}
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={name} secondary={lastOrder} />
    </ListItem>
  );
};

export default AnniversaryItem;
