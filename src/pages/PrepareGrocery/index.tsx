import {
  InputAdornment,
  Button,
  Stack,
  TableRow,
  TableCell,
  alpha,
  useTheme,
  Container,
} from '@mui/material';
import { useResponsive } from 'ahooks';
import { CusIconButton } from 'components/CusIconButton';
import CusTable from 'components/CusTable';
import CusTextField from 'components/CusTextField';
import PageHeader from 'components/PageHeader';
import { SearchNormal1, Add, Edit2, Trash, Printer } from 'iconsax-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from 'utils/route-util';

export default function PrepareGrocery() {
  // Hooks
  const { isMdDown } = useResponsive();
  const navigate = useNavigate();
  const theme = useTheme();

  // States
  const [searchProduct, setSearchProduct] = useState('');

  return (
    <>
      <PageHeader pageTitle='Daily Grocery'>
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
          onClick={() => navigate(ROUTE_PATH.prepareGrocery.createGrocery)}
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
        <CusTable
          headers={['No.', 'Event', 'Date', '']}
          body={
            <TableRow
              sx={{
                bgcolor: 'common.white',
                '&> td:first-child': {
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
              <TableCell>Packages</TableCell>
              <TableCell>23-Dec-2023</TableCell>
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
                      background: (theme) =>
                        alpha(theme.palette.primary.main, 0.1),
                    }}
                    onClick={() =>
                      navigate(
                        ROUTE_PATH.prepareGrocery.previewGrocery.replace(
                          ':id',
                          `${1}`
                        )
                      )
                    }
                  >
                    <Printer
                      size='20'
                      color={theme.palette.primary.main}
                      variant='Bold'
                    />
                  </CusIconButton>
                  <CusIconButton
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
          }
        />
      </Container>
    </>
  );
}
