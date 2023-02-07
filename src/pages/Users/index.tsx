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

export default function Users() {
  // Varaibles
  const { isMdDown } = useResponsive();

  // States
  const [openDrawer, setOpenDrawer] = useState<string | IAuth.User>();

  // ahooks
  const {
    data: userListResponse,
    loading: loadingGetUserList,
    mutate: mutateUserList,
  } = useRequest(USER_API.getUserList);

  return (
    <>
      <PageHeader pageTitle='Users' />

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
            // onChange={(e) => {
            //   if (!!e.currentTarget.value) {
            //     let tmp = searchProduct.filter(
            //       (el) =>
            //         el.username
            //           .toLowerCase()
            //           .indexOf(e.currentTarget.value.toLowerCase()) !== -1
            //     );
            //     setSearchProduct(tmp);
            //   } else {
            //     setSearchProduct(UserData);
            //   }
            // }}
            placeholder='Search...'
            size='small'
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <SearchNormal1 size='20' color={theme.palette.primary.main} />
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
                {userListResponse?.map((data, i) => {
                  return (
                    <UserTableBody
                      props={data}
                      key={i}
                      onEdit={() => setOpenDrawer(data)}
                    />
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Paper>

      <Drawer
        open={!!openDrawer}
        onClose={() => {
          setOpenDrawer('');
        }}
        anchor={'right'}
        PaperProps={{ sx: { borderRadius: 0, width: '50vw' } }}
      >
        <FormUser {...{ setOpenDrawer, openDrawer }} />
      </Drawer>
    </>
  );
}
