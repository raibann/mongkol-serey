import {
  Avatar,
  Button,
  Chip,
  Container,
  Grid,
  InputAdornment,
  MenuItem,
  Paper,
  Stack,
  TableCell,
  TableRow,
  TextField,
  Typography,
  alpha,
  useTheme,
} from '@mui/material';
import { CusIconButton } from 'components/CusIconButton';
import CusTable from 'components/CusTable';
import CusTextField from 'components/CusTextField';
import PageHeader from 'components/PageHeader';
import useResponsive from 'hook/useResponsive';
import { Add, Box, Convert3DCube, SearchNormal1, Send2 } from 'iconsax-react';
import { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from 'utils/route-util';
import THEME_UTIL from 'utils/theme-util';

export default function Quotation() {
  // Hooks
  const { isMdDown } = useResponsive();
  const navigate = useNavigate();
  const theme = useTheme();

  // States
  const [searchProduct, setSearchProduct] = useState('');

  return (
    <>
      <PageHeader pageTitle='Quotation'>
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
          onClick={() => navigate(ROUTE_PATH.orders.createQuotation)}
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
          headers={['ID', 'Customer', 'Event', 'Location', 'Total', '']}
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
              <TableCell>
                <Stack direction='row' spacing={2} alignItems='center'>
                  <Avatar
                    src='https://i.pinimg.com/564x/31/ca/cf/31cacfc8bceb2011c2f23ea32d2fbfa1.jpg'
                    variant='circular'
                    sx={{
                      height: 40,
                      width: 40,
                    }}
                  />
                  <Stack>
                    <Typography variant='body2'>Gordon Ramsy</Typography>
                    <Stack direction='row' spacing={0.5} alignItems='center'>
                      <Send2
                        size='14'
                        color={THEME_UTIL.telegramColor}
                        variant='Bold'
                      />
                      <Typography
                        variant='caption'
                        noWrap
                        color='text.secondary'
                      >
                        @GordonRamsy
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </TableCell>
              <TableCell>ភ្ជាប់ពាក្យមិនា</TableCell>
              <TableCell>ធ្យូបកាហ្វេ</TableCell>
              <TableCell>100$</TableCell>
              <TableCell>
                <CusIconButton
                  onClick={() => navigate(ROUTE_PATH.orders.previewQuotation)}
                >
                  <BsThreeDots />
                </CusIconButton>
              </TableCell>
            </TableRow>
          }
        />
      </Container>
    </>
  );
}
