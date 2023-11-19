import {
  InputAdornment,
  Button,
  Stack,
  TableRow,
  TableCell,
  alpha,
  useTheme,
} from '@mui/material';
import { CusIconButton } from 'components/CusIconButton';

import CusTextField from 'components/CusTextField';
import Dialog, { IDialogRef } from 'components/Dialog';
import PageHeader from 'components/PageHeader';
import { SearchNormal1, Add, Edit2, Trash } from 'iconsax-react';
import { useRef } from 'react';
import UnitForm from './components/UnitForm';
import CusTable from 'components/CusTable';

export default function InventoryUnit() {
  // Hooks
  const theme = useTheme();
  const unitFormRef = useRef<IDialogRef>();

  // States

  return (
    <>
      <Dialog
        ref={unitFormRef}
        cusWidth={400}
        cusTitle='Add New Unit'
        content={() => <UnitForm />}
      />

      <PageHeader pageTitle='Inventory Unit'>
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

      <CusTable
        sx={{
          container: {
            p: 3,
          },
        }}
        headers={['No.', 'Name', 'Description', '']}
        body={
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
            <TableCell>1</TableCell>
            <TableCell>ដប</TableCell>
            <TableCell>100មីលីលីត្រ</TableCell>
            <TableCell align='right'>
              <Stack
                spacing={2}
                direction='row'
                alignItems='center'
                justifyContent='end'
              >
                <CusIconButton
                  sx={{
                    boxShadow: 0,
                    background: (theme) => alpha(theme.palette.info.main, 0.1),
                  }}
                >
                  <Edit2
                    size='20'
                    color={theme.palette.info.main}
                    variant='Bold'
                  />
                </CusIconButton>
                <CusIconButton
                  sx={{
                    boxShadow: 0,
                    background: (theme) => alpha(theme.palette.error.main, 0.1),
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
        }
      />
    </>
  );
}
