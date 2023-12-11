import {
  InputAdornment,
  Button,
  Stack,
  TableRow,
  TableCell,
  alpha,
  useTheme,
  Container,
  Box,
} from '@mui/material';
import { CusIconButton } from 'components/CusIconButton';
import CusTextField from 'components/CusTextField';
import Dialog, { IDialogRef } from 'components/Dialog';
import PageHeader from 'components/PageHeader';
import { SearchNormal1, Add, Edit2, Trash } from 'iconsax-react';
import { useRef, useState } from 'react';
import UnitForm from './components/UnitForm';
import CusTable from 'components/CusTable';
import { useDebounce, useRequest } from 'ahooks';
import { STOCK_UNIT_API } from 'api/stock';
import { CusLoading } from 'components/CusLoading';
import ConfirmContent from 'components/ResponseUIs/ConfirmContent';
import ErrorResponse from 'components/ResponseUIs/ErrorResponse';
import EmptyResponse from 'components/ResponseUIs/EmptyResponse';

export default function InventoryUnit() {
  // Hooks
  const theme = useTheme();
  const unitFormRef = useRef<IDialogRef>();
  const confirmRef = useRef<IDialogRef>();

  // States
  const [search, setSearch] = useState('');

  // Requests
  const searchDebounce = useDebounce(search, { wait: 500 });
  const { data, loading, error, refresh } = useRequest(
    () => STOCK_UNIT_API.unitList({ search: searchDebounce }),
    { refreshDeps: [searchDebounce] }
  );
  const { run: runDelete } = useRequest(STOCK_UNIT_API.deleteUnit, {
    manual: true,
    onSuccess: refresh,
  });

  return (
    <>
      <Dialog
        ref={unitFormRef}
        cusWidth={400}
        cusTitle='Add New Unit'
        alternateTitle='Update Unit'
        content={(id?: number) => (
          <UnitForm
            id={id}
            onClose={() => {
              refresh();
              unitFormRef.current?.close();
            }}
          />
        )}
      />
      <Dialog
        ref={confirmRef}
        content={(id?: number) => (
          <ConfirmContent
            title='Delete Unit'
            onConfirm={() => {
              runDelete({ id });
              confirmRef.current?.close();
            }}
            onClose={() => confirmRef.current?.close()}
          />
        )}
      />

      <PageHeader pageTitle='Inventory Unit'>
        <CusTextField
          value={search}
          onChange={(e) => setSearch(e.target.value)}
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
          onClick={() => unitFormRef.current?.open()}
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
        {loading ? (
          <Box height='80vh' display='grid' sx={{ placeItems: 'center' }}>
            <CusLoading />
          </Box>
        ) : error ? (
          <ErrorResponse height='80vh' errorMessage={error?.message} />
        ) : data && data.length > 0 ? (
          <CusTable
            headers={['No.', 'Name', 'Description', '']}
            body={data.map((e) => (
              <TableRow
                key={e.id}
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
                <TableCell>{e.id}</TableCell>
                <TableCell>{e.name}</TableCell>
                <TableCell>{e.description}</TableCell>
                <TableCell align='right'>
                  <Stack
                    spacing={2}
                    direction='row'
                    alignItems='center'
                    justifyContent='end'
                  >
                    <CusIconButton
                      onClick={() => unitFormRef.current?.open(e.id)}
                      sx={{
                        boxShadow: 0,
                        background: (theme) =>
                          alpha(theme.palette.info.main, 0.1),
                      }}
                    >
                      <Edit2
                        size='20'
                        color={theme.palette.info.main}
                        variant='Bold'
                      />
                    </CusIconButton>
                    <CusIconButton
                      onClick={() => confirmRef.current?.open(e.id)}
                      sx={{
                        boxShadow: 0,
                        background: (theme) =>
                          alpha(theme.palette.error.main, 0.1),
                      }}
                    >
                      <Trash
                        size='20'
                        color={theme.palette.error.main}
                        variant='Bold'
                      />
                    </CusIconButton>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          />
        ) : (
          <EmptyResponse height='80vh' />
        )}
      </Container>
    </>
  );
}
