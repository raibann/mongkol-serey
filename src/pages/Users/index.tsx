import {
  Paper,
  Stack,
  Button,
  InputAdornment,
  TableContainer,
  Table,
  TableBody,
  Drawer,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  DialogActions,
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import CusTextField from 'components/CusTextField';
import PageHeader from 'components/PageHeader';
import { SearchNormal1, UserAdd } from 'iconsax-react';
import { useState } from 'react';
import theme from 'theme/theme';
import { UserTableBody, UserTableHead } from './UserTable';
import FormUser from './FormUser';
import useResponsive from 'hook/useResponsive';
import { useRequest } from 'ahooks';
import USER_API from 'api/user';
import { CusLoading } from 'components/CusLoading';
import { role } from 'utils/data-util';
import { GiGearHammer } from 'react-icons/gi';
import Unauthorized from 'components/Unauthorized';

export default function Users() {
  // Varaibles
  const { isMdDown } = useResponsive();

  // States
  const [openDrawer, setOpenDrawer] = useState<string | IAuth.User>();
  const [openRole, setOpenRole] = useState(-1);
  const [search, setSearch] = useState('');

  // ahooks
  const {
    data: userListResponse,
    loading: loadingGetUserList,
    error: errorGetUserList,
    refresh: refreshUserList,
  } = useRequest(USER_API.getUserList);
  const { run: addRoleToUser, loading: loadingAddRoleToUser } = useRequest(
    USER_API.addRoleToUser,
    {
      manual: true,
      onSuccess: refreshUserList,
    }
  );

  // Response Variables
  const userList = userListResponse?.filter(
    (e) =>
      e.username.toLowerCase().includes(search) ||
      e.name.toLowerCase().includes(search)
  );

  // Methods
  const onCheckRole = (name: string) => {
    if (!userListResponse) return;
    addRoleToUser({
      roleName: name,
      username: userListResponse[openRole]?.username,
    });
  };

  return (
    <>
      <PageHeader pageTitle='Users' />

      {errorGetUserList ? (
        <Unauthorized />
      ) : (
        <Paper
          elevation={1}
          sx={{
            mx: 2,
            borderRadius: 4,
            height: 'calc(100vh - 100px)',
            maxWidth: '100%',
            overflow: 'hidden',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            sx={{ width: '100%', p: 2 }}
            spacing={2}
          >
            <Button
              variant='contained'
              startIcon={<UserAdd />}
              sx={{
                color: theme.palette.common.white,
                boxShadow: theme.shadows[1],
                borderRadius: 2,
                whiteSpace: 'nowrap',
                height: 40,
              }}
              onClick={() => setOpenDrawer('add')}
            >
              {isMdDown ? 'New' : 'Add New'}
            </Button>
            <CusTextField
              value={search}
              onChange={(e) => setSearch(e.target.value?.toLowerCase())}
              placeholder='Search...'
              size='small'
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <SearchNormal1
                      size='20'
                      color={theme.palette.primary.main}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </Stack>

          {loadingGetUserList ? (
            <Box flexGrow={1} display='grid' sx={{ placeItems: 'center' }}>
              <CusLoading />
            </Box>
          ) : (
            <TableContainer
              sx={{
                overflow: 'auto',
                flexGrow: 1,
              }}
            >
              <Table
                stickyHeader
                sx={{
                  '& thead tr th': {
                    background: (theme) => theme.palette.background.paper,
                    fontWeight: '600',
                    whiteSpace: 'nowrap',
                  },
                }}
              >
                <UserTableHead />
                <TableBody>
                  {userList?.map((data, i) => {
                    return (
                      <UserTableBody
                        key={data.id}
                        props={data}
                        onEdit={() => setOpenDrawer(data)}
                        onAddRole={() => setOpenRole(i)}
                        onSuccess={refreshUserList}
                      />
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Paper>
      )}

      <Drawer
        open={!!openDrawer}
        onClose={() => setOpenDrawer(undefined)}
        anchor={'right'}
        PaperProps={{ sx: { borderRadius: 0, width: '50vw' } }}
      >
        <FormUser
          {...{ setOpenDrawer, openDrawer }}
          onSuccess={refreshUserList}
        />
      </Drawer>

      <Dialog open={openRole !== -1} onClose={() => setOpenRole(-1)}>
        <DialogTitle
          component='div'
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            px: 2,
          }}
        >
          <Typography variant='h6'>User Roles</Typography>
          <Button startIcon={<GiGearHammer />} sx={{ textTransform: 'none' }}>
            Banned Account
          </Button>
        </DialogTitle>
        <DialogContent sx={{ width: 500, px: 0 }}>
          <List sx={{ width: '100%' }}>
            {role.map((value) => {
              return (
                <ListItem
                  key={value.id}
                  secondaryAction={
                    <Checkbox
                      edge='start'
                      disabled={loadingAddRoleToUser}
                      onClick={() => onCheckRole(value.name)}
                      checked={
                        userListResponse && userListResponse[openRole]
                          ? userListResponse[openRole].roles?.findIndex(
                              (e) => e.name === value.name
                            ) !== -1
                          : false
                      }
                    />
                  }
                  disablePadding
                >
                  <ListItemButton
                    disabled={loadingAddRoleToUser}
                    onClick={() => onCheckRole(value.name)}
                  >
                    <ListItemIcon>{value.icon}</ListItemIcon>
                    <ListItemText
                      primary={value.name}
                      secondary={value.description}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setOpenRole(-1)}
            variant='contained'
            sx={{ color: 'common.white' }}
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
