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
import useResponsive from 'hook/useResponsive';
import { useRequest } from 'ahooks';
import USER_API from 'api/user';
import { CusLoading } from 'components/CusLoading';

import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from 'utils/route-util';
import { UserTableBody, UserTableHead } from './components/UserTable';
export default function Users() {
  // Varaibles

  // States

  // ahooks
  const { isSmDown } = useResponsive();
  const navigate = useNavigate();
  // Response Variables

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
        {false ? (
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
                {Array(10)
                  .fill('')
                  ?.map((data, i) => {
                    return (
                      <UserTableBody
                        key={i}
                        props={data}
                        onEdit={() => {}}
                        onAddRole={() => {}}
                        onSuccess={() => {}}
                      />
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Container>
    </>
  );
}
