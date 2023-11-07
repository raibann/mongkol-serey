import {
  TableRow,
  TableCell,
  TableHead,
  Stack,
  Avatar,
  Tooltip,
  Typography,
} from '@mui/material';
import { useRequest } from 'ahooks';
import USER_API from 'api/user';
import ConfirmDialogSlide from 'components/CusDialog/ConfirmDialog';
import { CusIconButton } from 'components/CusIconButton';
import { Edit, SecurityUser, Trash } from 'iconsax-react';
import { useState } from 'react';
import { changeBackground } from 'utils/validate-util';

export const UserTableBody = ({
  props,
  onEdit,
  onAddRole,
  onSuccess,
}: {
  props: IAuth.User;
  onEdit: () => void;
  onAddRole?: () => void;
  onSuccess?: () => void;
}) => {
  // State
  const [open, setOpen] = useState(false);

  // ahooks
  const { run, loading } = useRequest(USER_API.deleteUser, {
    manual: true,
    onSuccess: onSuccess,
  });

  return (
    <>
      <ConfirmDialogSlide
        open={open}
        loading={loading}
        onClose={() => setOpen(false)}
        cancel={() => setOpen(false)}
        confirm={() => props.id && run(props.id)}
        title='Are you sure?'
      />

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
        <TableCell>
          {(props.roles && props.roles[0]?.name) || 'Unauthorized'}
        </TableCell>
        <TableCell
          sx={{
            color: props?.roles?.length ? 'success.main' : 'error.main',
          }}
        >
          {props?.roles?.length ? 'Active' : 'Banned'}
        </TableCell>
        <TableCell>
          <Stack direction={'row'} spacing={1}>
            <Tooltip title='Role' arrow>
              <CusIconButton
                color='primary'
                sx={{ p: 0.5, mx: 0.5 }}
                onClick={onAddRole}
              >
                <SecurityUser size={18} />
              </CusIconButton>
            </Tooltip>
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
              <CusIconButton
                color='info'
                sx={{ p: 0.5, mx: 0.5 }}
                disabled={
                  loading || props.roles?.findIndex((e) => e.id === 1) !== -1
                }
                onClick={() => setOpen(true)}
              >
                <Trash size={18} color='#FF8A65' />
              </CusIconButton>
            </Tooltip>
          </Stack>
        </TableCell>
      </TableRow>
    </>
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
        <TableCell sx={{ width: '10%' }}>Action</TableCell>
      </TableRow>
    </TableHead>
  );
};
