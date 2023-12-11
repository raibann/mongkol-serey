import {
  InputAdornment,
  Button,
  Stack,
  TableRow,
  TableCell,
  alpha,
  useTheme,
  Container,
  Chip,
} from '@mui/material';
import { CusIconButton } from 'components/CusIconButton';
import CusTextField from 'components/CusTextField';
import Dialog, { IDialogRef } from 'components/Dialog';
import PageHeader from 'components/PageHeader';
import { SearchNormal1, Add, Edit2, Trash } from 'iconsax-react';
import { useRef, useState } from 'react';
import CategoryForm from './components/CategoryForm';
import CusTable from 'components/CusTable';
import { useDebounce, useRequest } from 'ahooks';
import { STOCK_CATEGORY_API } from 'api/stock';
import ConfirmContent from 'components/ResponseUIs/ConfirmContent';
import { EnumStockType, StockTypeDescription } from 'utils/data-util';

export default function InventoryCategory() {
  // Hooks
  const theme = useTheme();
  const categoryFormRef = useRef<IDialogRef>();
  const confirmRef = useRef<IDialogRef>();

  // States
  const [search, setSearch] = useState('');

  // Requests
  const searchDebounce = useDebounce(search, { wait: 500 });
  const { data, loading, error, refresh } = useRequest(
    () => STOCK_CATEGORY_API.categoryList({ search: searchDebounce }),
    { refreshDeps: [searchDebounce] }
  );
  const { run: runDelete } = useRequest(STOCK_CATEGORY_API.deleteCategory, {
    manual: true,
    onSuccess: refresh,
  });

  return (
    <>
      <Dialog
        ref={categoryFormRef}
        cusWidth={400}
        cusTitle='Add New Category'
        alternateTitle='Update Category'
        content={(id?: number) => (
          <CategoryForm
            id={id}
            onClose={() => {
              refresh();
              categoryFormRef.current?.close();
            }}
          />
        )}
      />
      <Dialog
        ref={confirmRef}
        content={(id?: number) => (
          <ConfirmContent
            title='Delete Category'
            onConfirm={() => {
              runDelete({ id });
              confirmRef.current?.close();
            }}
            onClose={() => confirmRef.current?.close()}
          />
        )}
      />

      <PageHeader pageTitle='Inventory Category'>
        <CusTextField
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
          onClick={() => categoryFormRef.current?.open()}
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
        {data && (
          <CusTable
            headers={['No.', 'Name', 'Stock type', '']}
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
                <TableCell>
                  <Chip
                    label={StockTypeDescription[e.groupType]}
                    color={
                      e.groupType === EnumStockType.STOCK ? 'info' : 'error'
                    }
                    sx={{ color: 'common.white' }}
                    size='small'
                  />
                </TableCell>
                <TableCell align='right'>
                  <Stack
                    spacing={2}
                    direction='row'
                    alignItems='center'
                    justifyContent='end'
                  >
                    <CusIconButton
                      onClick={() => categoryFormRef.current?.open(e.id)}
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
        )}
      </Container>
    </>
  );
}
