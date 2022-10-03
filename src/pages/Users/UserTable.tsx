import {
  TableRow,
  TableCell,
  TableHead,
  Stack,
  Typography,
  Avatar,
  Tooltip,
} from '@mui/material';
import { CusIconButton } from 'components/CusIconButton';
import { Edit, Trash } from 'iconsax-react';
import theme from 'theme/theme';
import { IUser } from 'utils/users-util';
import { changeBackground } from 'utils/validate-util';
export const UserTableBody = ({
  props,
  index,
  onEdit,
}: {
  props: IUser;
  index: number;
  onEdit: (obj: 'Add' | 'Edit' | '') => void;
}) => {
  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell>{index + 1}</TableCell>
      <TableCell>
        <Avatar
          variant='rounded'
          sx={{ bgcolor: changeBackground(props.username) }}
        >
          {props.username.charAt(0).toUpperCase()}
        </Avatar>
      </TableCell>
      <TableCell>{props.username}</TableCell>
      <TableCell>{props.password}</TableCell>
      <TableCell>{props.role}</TableCell>
      <TableCell>
        {props.status === 1 ? (
          <Typography color={theme.palette.success.main}>Active</Typography>
        ) : (
          <Typography color={'error'}>Deactive</Typography>
        )}
      </TableCell>
      <TableCell>
        <Stack direction={'row'} spacing={2}>
          <Tooltip title='Edit' arrow>
            <CusIconButton
              color='info'
              sx={{ p: 0.5, mx: 0.5 }}
              onClick={() => onEdit('Edit')}
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
        <TableCell sx={{ width: '20%' }}>Password</TableCell>
        <TableCell sx={{ width: '10%' }}>Role</TableCell>
        <TableCell sx={{ width: '10%' }}>Status</TableCell>
        <TableCell sx={{ width: '10%' }}></TableCell>
      </TableRow>
    </TableHead>
  );
};
