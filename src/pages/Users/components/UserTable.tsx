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
  Chip,
} from '@mui/material';
import { useRequest } from 'ahooks';
import USER_API from 'api/user';
import ConfirmDialogSlide from 'components/CusDialog/ConfirmDialog';
import { CusIconButton } from 'components/CusIconButton';
import { ArrowDown2 } from 'iconsax-react';
import { useState } from 'react';
import { HiDotsHorizontal } from 'react-icons/hi';

export const UserTableBody = ({
  props,
  onEdit,
  onAddRole,
  onSuccess,
}: {
  props: IAuth.User;
  onEdit?: () => void;
  onAddRole?: () => void;
  onSuccess?: () => void;
}) => {
  // varible
  const theme = useTheme();
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

      <TableRow
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
        <TableCell>{1}</TableCell>
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
              <Typography variant='body2'>Name</Typography>
              <Chip
                label='User'
                size='small'
                sx={{
                  color: (theme) => theme.palette.primary.main,
                  background: (theme) => alpha(theme.palette.primary.main, 0.1),
                }}
              />
            </Stack>
          </Stack>
        </TableCell>
        <TableCell align='left'>admin@abc</TableCell>
        <TableCell align='left'>
          <Button
            sx={{
              background: (theme) => alpha(theme.palette.success.main, 0.1),
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
        <TableCell
          align='left'
          sx={{
            fontWeight: (theme) => theme.typography.fontWeightBold,
          }}
        >
          Accounting
        </TableCell>
        <TableCell align='right'>
          <Stack
            direction={'row'}
            spacing={2}
            alignItems={'center'}
            justifyContent={'end'}
          >
            <CusIconButton
              sx={{
                boxShadow: 0,
                color: (theme) => theme.palette.text.secondary,
              }}
            >
              <HiDotsHorizontal />
            </CusIconButton>
          </Stack>
        </TableCell>
      </TableRow>
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
        <TableCell align='left'>Username</TableCell>
        <TableCell align='left'>Department</TableCell>
        <TableCell align='left'>Status</TableCell>
        <TableCell align='left'></TableCell>
      </TableRow>
    </TableHead>
  );
};
