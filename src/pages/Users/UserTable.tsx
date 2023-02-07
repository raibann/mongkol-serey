import {
  TableRow,
  TableCell,
  TableHead,
  Stack,
  Avatar,
  Tooltip,
  Typography,
} from '@mui/material';
import { CusIconButton } from 'components/CusIconButton';
import { Edit, Trash } from 'iconsax-react';
import { changeBackground } from 'utils/validate-util';

export const UserTableBody = ({
  props,
  onEdit,
}: {
  props: IAuth.User;
  onEdit: () => void;
}) => {
  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell>{props.id}</TableCell>
      <TableCell
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Avatar
          variant='rounded'
          sx={{ bgcolor: changeBackground(props.username) }}
        >
          {props.username.charAt(0).toUpperCase()}
        </Avatar>
        <Typography ml={2}>{props.name}</Typography>
      </TableCell>
      <TableCell>{props.username}</TableCell>
      <TableCell>{props.roles[0]?.name || 'No Role'}</TableCell>
      <TableCell>{props.roles.length ? 'Active' : 'InActive'}</TableCell>
      <TableCell>
        <Stack direction={'row'} spacing={2}>
          <Tooltip title='Edit' arrow>
            <CusIconButton
              color='info'
              sx={{ p: 0.5, mx: 0.5 }}
              onClick={onEdit}
            >
              <Edit size={18} />
            </CusIconButton>
          </Tooltip>
          <Tooltip title='Delete' arrow>
            <CusIconButton color='info' sx={{ p: 0.5, mx: 0.5 }}>
              <Trash size={18} color='#FF8A65' />
            </CusIconButton>
          </Tooltip>
        </Stack>
      </TableCell>
    </TableRow>
  );
};

export const UserTableHead = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell sx={{ width: '10%' }}>No.</TableCell>
        <TableCell sx={{ width: '20%' }}>Profile</TableCell>
        <TableCell sx={{ width: '20%' }}>Username</TableCell>
        <TableCell sx={{ width: '10%' }}>Role</TableCell>
        <TableCell sx={{ width: '10%' }}>Status</TableCell>
        <TableCell sx={{ width: '10%' }}></TableCell>
      </TableRow>
    </TableHead>
  );
};
