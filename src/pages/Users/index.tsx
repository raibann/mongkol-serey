import {
  Button,
  InputAdornment,
  TableContainer,
  Table,
  Box,
  Container,
} from '@mui/material';
import CusTextField from 'components/CusTextField';
import PageHeader from 'components/PageHeader';
import { Add, SearchNormal1 } from 'iconsax-react';
import useResponsive from 'hook/useResponsive';
import { CusLoading } from 'components/CusLoading';

import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from 'utils/route-util';
import { UserTableBody, UserTableHead } from './components/UserTable';
import { useRequest } from 'ahooks';
import USER_API from 'api/user';
import { useEffect, useState } from 'react';
export default function Users() {
  // Varaibles

  // States
  const [search, setSearch] = useState('');

  // Hooks
  const { isSmDown } = useResponsive();
  const navigate = useNavigate();
  // Fetch APIS
  const {
    run: fetchUsers,
    loading: isLoadingUsers,
    data: resUsers,
  } = useRequest(USER_API.getUserList, { manual: false });

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Methods

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

      <Container maxWidth='xl'>
        {isLoadingUsers ? (
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
              <UserTableBody data={resUsers} />
            </Table>
          </TableContainer>
        )}
      </Container>
    </>
  );
}
