import {
  Paper,
  Stack,
  Button,
  InputAdornment,
  TableContainer,
  Table,
  TableBody,
  Pagination,
  Drawer,
} from '@mui/material';
import CusTextField from 'components/CusTextField';
import PageHeader from 'components/PageHeader';
import { Add, SearchNormal1 } from 'iconsax-react';
import React, { useState } from 'react';
import theme from 'theme/theme';
import { UserTableBody, UserTableHead } from './UserTable';
import { UserData } from 'utils/users-util';
import FormUser from './FormUser';

export default function Users() {
  const [openDrawer, setOpenDrawer] = useState<'Add' | 'Edit' | ''>('');
  const [searchProduct, setSearchProduct] = useState(UserData);
  console.log(searchProduct);
  // handle add and edit stock
  const handleOpenDrawer = (obj: 'Add' | 'Edit' | '') => {
    setOpenDrawer(obj);
  };
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
          px: 2,
          position: 'relative',
        }}
      >
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          sx={{ width: '100%', py: 2 }}
          spacing={2}
        >
          <Button
            variant='contained'
            startIcon={<Add />}
            sx={{
              color: theme.palette.common.white,
              boxShadow: theme.shadows[1],
              borderRadius: 2,
              whiteSpace: 'nowrap',
              height: 40,
            }}
            onClick={() => handleOpenDrawer('Add')}
          >
            Add New
          </Button>
          <CusTextField
            onChange={(e) => {
              if (!!e.currentTarget.value) {
                let tmp = searchProduct.filter(
                  (el) =>
                    el.username
                      .toLowerCase()
                      .indexOf(e.currentTarget.value.toLowerCase()) !== -1
                );
                setSearchProduct(tmp);
              } else {
                setSearchProduct(UserData);
              }
            }}
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
        <TableContainer
          sx={{
            height: '100%',
            overflow: 'auto',
            pb: 30,
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
              {searchProduct.map((data, i) => {
                return (
                  <UserTableBody
                    props={data}
                    index={i}
                    key={i}
                    onEdit={handleOpenDrawer}
                  />
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <Stack
          alignItems='center'
          width='100%'
          p={1}
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            bgcolor: '#fff',
          }}
        >
          <Pagination count={10} />
        </Stack>
      </Paper>

      <Drawer
        open={!!openDrawer}
        onClose={() => {
          setOpenDrawer('');
        }}
        anchor={'right'}
        PaperProps={{ sx: { borderRadius: 0, width: '50vw' } }}
      >
        <FormUser {...{ handleOpenDrawer, openDrawer }} />
      </Drawer>
    </>
  );
}
