import {
  Avatar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { Diagram } from 'iconsax-react';
import React from 'react';

const DrawerContent = () => {
  return (
    <>
      <Avatar
        variant='square'
        src={'images/logo_transparent.png'}
        alt='logo'
        imgProps={{
          sx: {
            objectFit: 'contain',
          },
        }}
        sx={{
          mx: 'auto',
          width: 200,
          height: 200,
        }}
      />
      <List>
        <ListItem>
          <ListItemButton sx={{ borderRadius: 2 }}>
            <ListItemIcon>
              <Diagram variant='Linear' />
            </ListItemIcon>
            <ListItemText primary='Dashboard' />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );
};

export default DrawerContent;
