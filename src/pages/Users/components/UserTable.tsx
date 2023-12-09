import {
  TableRow,
  TableCell,
  TableHead,
  Stack,
  Avatar,
  Typography,
  useTheme,
  Button,
  alpha,
  TableBody,
  MenuItem,
  Menu,
} from '@mui/material';
import { useRequest } from 'ahooks';
import USER_API from 'api/user';
import ConfirmDialogSlide from 'components/CusDialog/ConfirmDialog';
import { CusIconButton } from 'components/CusIconButton';
import { ArrowDown2, Edit2, Trash } from 'iconsax-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from 'utils/route-util';

export const UserTableBody = (props: { data: IAuth.User[] | undefined }) => {
  // Hooks
  const theme = useTheme();
  const navigate = useNavigate();
  // State
  const [open, setOpen] = useState(false);
  const [selectId, setSelectId] = useState<number | undefined>();

  // Fetch Apis
  const { run, loading } = useRequest(USER_API.deleteUser, {
    manual: true,
  });

  // Methods

  return (
    <>
      <ConfirmDialogSlide
        open={open}
        loading={loading}
        onClose={() => setOpen(false)}
        cancel={() => setOpen(false)}
        confirm={() => selectId && run(selectId)}
        title='Are you sure?'
      />
      <TableBody>
        {props.data &&
          props.data.map((user) => (
            <TableRow
              key={user.id}
              sx={{
                background: (theme) => theme.palette.common.white,
                '&> td:first-of-type': {
                  borderTopLeftRadius: '10px',
                  borderBottomLeftRadius: '10px',
                },
                '&> td:last-child': {
                  borderTopRightRadius: '10px',
                  borderBottomRightRadius: '10px',
                },
              }}
            >
              <TableCell>{user.id}</TableCell>
              <TableCell
                align='left'
                sx={{
                  fontWeight: (theme) => theme.typography.fontWeightBold,
                }}
              >
                <Stack direction={'row'} spacing={2} alignItems={'center'}>
                  <Avatar
                    alt='Remy Sharp'
                    src='/static/images/avatar/1.jpg'
                    variant='rounded'
                    sx={{
                      height: 40,
                      width: 40,
                      borderRadius: 2,
                    }}
                  />
                  <Stack direction={'column'}>
                    <Typography variant='body2'>{user.name}</Typography>
                    <Typography variant='body2' color={'text.secondary'}>
                      {user.username}
                    </Typography>
                  </Stack>
                </Stack>
              </TableCell>
              <TableCell
                align='left'
                sx={{
                  fontWeight: (theme) => theme.typography.fontWeightBold,
                }}
              >
                {user.roles && user.roles[0]?.name.toLowerCase()}
              </TableCell>
              <TableCell align='left'>
                <Button
                  sx={{
                    background: (theme) =>
                      alpha(theme.palette.success.main, 0.1),
                    color: (theme) => theme.palette.success.main,
                    textTransform: 'capitalize',
                  }}
                  variant='text'
                  endIcon={
                    <ArrowDown2 size='16' color={theme.palette.success.main} />
                  }
                >
                  Active
                </Button>
              </TableCell>

              <TableCell align='right'>
                <Stack
                  direction={'row'}
                  spacing={1}
                  alignItems={'center'}
                  justifyContent={'end'}
                >
                  <CusIconButton
                    sx={{
                      boxShadow: 0,
                      background: (theme) =>
                        alpha(theme.palette.info.main, 0.1),
                    }}
                    onClick={() =>
                      navigate(
                        ROUTE_PATH.users.updateUser.replace(
                          ':id',
                          `${user?.id}`
                        )
                      )
                    }
                  >
                    <Edit2
                      size='18'
                      color={theme.palette.info.main}
                      variant='Bold'
                    />
                  </CusIconButton>
                  <CusIconButton
                    sx={{
                      boxShadow: 0,
                      background: (theme) =>
                        alpha(theme.palette.error.main, 0.1),
                    }}
                    onClick={() => {
                      setSelectId(user.id);
                      setOpen(true);
                    }}
                  >
                    <Trash
                      size='18'
                      color={theme.palette.error.main}
                      variant='Bold'
                    />
                  </CusIconButton>
                </Stack>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </>
  );
};

export const UserTableHead = () => {
  return (
    <TableHead>
      <TableRow
        sx={{
          '&> th': {
            pt: 0,
            borderBottom: 0,
          },
        }}
      >
        <TableCell align='left'>No.</TableCell>
        <TableCell align='left'>Profile</TableCell>
        <TableCell align='left'>Role</TableCell>
        <TableCell align='left'>Status</TableCell>
        <TableCell align='left'></TableCell>
      </TableRow>
    </TableHead>
  );
};
