import {
  Button,
  InputAdornment,
  TableContainer,
  Table,
  TableBody,
  Drawer,
  Box,
  Dialog,
  DialogTitle,
  Typography,
  DialogActions,
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Container,
} from '@mui/material';
import CusTextField from 'components/CusTextField';
import PageHeader from 'components/PageHeader';
import { Add, SearchNormal1 } from 'iconsax-react';
import { useState } from 'react';
import FormUser from './components/FormUser';
import useResponsive from 'hook/useResponsive';
import { useRequest } from 'ahooks';
import USER_API from 'api/user';
import { CusLoading } from 'components/CusLoading';
import { role } from 'utils/data-util';
import { GiGearHammer } from 'react-icons/gi';
import Unauthorized from 'components/Unauthorized';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from 'utils/route-util';
import { UserTableBody, UserTableHead } from './components/userTable';

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
  const { isSmDown } = useResponsive();
  const navigate = useNavigate();
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
      <PageHeader pageTitle='Users'>
        <CusTextField
          fullWidth={isSmDown ? true : false}
          placeholder='Search...'
          size='small'
          sx={{ bgcolor: 'common.white', mr: 2 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <SearchNormal1 size={18} />
              </InputAdornment>
            ),
          }}
        />
        <Button
          onClick={() => navigate(ROUTE_PATH.users.createNewUser)}
          variant='contained'
          size='small'
          disableElevation
          sx={{
            color: 'common.white',
            minWidth: 0,
          }}
        >
          <Add />
        </Button>
      </PageHeader>

      {!errorGetUserList ? (
        <Unauthorized />
      ) : (
        <Container maxWidth='xl'>
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
                    bgcolor: 'background.paper',
                    fontWeight: '600',
                    whiteSpace: 'nowrap',
                  },
                  minWidth: '100%',
                  borderCollapse: 'separate',
                  borderSpacing: `0px 12px`,
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
        </Container>
      )}

      <Drawer
        open={!!openDrawer}
        onClose={() => setOpenDrawer(undefined)}
        anchor={'right'}
        PaperProps={{
          sx: { borderRadius: 0, width: isMdDown ? '100vw' : '50vw' },
        }}
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
          <Typography variant='h6'>Roles</Typography>
          <Button
            disabled={
              openRole !== -1 &&
              userListResponse &&
              (userListResponse[openRole]?.roles?.length === 0 ||
                userListResponse[openRole]?.roles?.findIndex(
                  (e) => e.id === 1
                ) !== -1)
            }
            onClick={() => {
              addRoleToUser({
                username: userListResponse
                  ? userListResponse[openRole].username
                  : '',
                roleName: 'banned',
              });
              setOpenRole(-1);
            }}
            startIcon={<GiGearHammer />}
            sx={{ textTransform: 'none' }}
          >
            Banned
          </Button>
        </DialogTitle>
        <List sx={{ width: '100%' }}>
          {role.map((value) => {
            return (
              <ListItem
                key={value.id}
                secondaryAction={
                  <Checkbox
                    edge='start'
                    disabled={loadingAddRoleToUser || value.disable}
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
                  disabled={loadingAddRoleToUser || value.disable}
                  onClick={() => onCheckRole(value.name)}
                >
                  <ListItemIcon>{value.icon}</ListItemIcon>
                  <ListItemText
                    sx={{
                      mr: {
                        xs: 0,
                        sm: 2,
                        md: 2,
                      },
                    }}
                    primary={value.name}
                    secondary={value.description}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
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
