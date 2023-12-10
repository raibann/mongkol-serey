import {
  Avatar,
  Stack,
  TableCell,
  TableRow,
  Typography,
  alpha,
} from '@mui/material';
import { useRequest } from 'ahooks';
import SUPPLIER_API from 'api/supplier';
import ConfirmDialogSlide from 'components/CusDialog/ConfirmDialog';
import ErrorDialog from 'components/CusDialog/ErrorDialog';
import { CusIconButton } from 'components/CusIconButton';
import CusTable, { custStyle } from 'components/CusTable';
import { Edit2, Trash, Location, Send2, Facebook } from 'iconsax-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import theme from 'theme/theme';
import { ROUTE_PATH } from 'utils/route-util';
import THEME_UTIL from 'utils/theme-util';

const headers = ['No', 'Name', 'Phone Number', 'Address', ''];

export default function SupplierTable(props: {
  data: ISupplier.ResSupplier[] | undefined;
  onSuccess: () => void;
}) {
  // State
  const [errorAlert, setErrorAlert] = useState(false);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState<number | undefined>();
  // Hooks
  const navigate = useNavigate();

  // Fetch Apis
  const { run, loading, error } = useRequest(SUPPLIER_API.deleteSupplier, {
    manual: true,
    onSuccess: props.onSuccess,
  });
  useEffect(() => {
    if (error) {
      setErrorAlert(!errorAlert);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);
  return (
    <>
      <ErrorDialog
        open={errorAlert}
        onCloseDialog={() => {
          setErrorAlert(!errorAlert);
        }}
        errorTitle={'Delete fail!'}
        errorMessage={error?.message || 'Something went wrong!'}
      />

      <ConfirmDialogSlide
        open={open}
        loading={loading}
        onClose={() => setOpen(false)}
        cancel={() => setOpen(false)}
        confirm={() =>
          id &&
          run({
            id: id,
          })
        }
        title='Are you sure?'
      />
      <CusTable
        headers={headers}
        body={
          props.data &&
          props.data.map((item) => (
            <TableRow key={item.id} sx={custStyle.bodyRow}>
              <TableCell>{item.id}</TableCell>
              <TableCell
                align='left'
                sx={{
                  fontWeight: (theme) => theme.typography.fontWeightBold,
                }}
              >
                <Stack direction={'row'} spacing={2} alignItems={'center'}>
                  <Avatar
                    alt='Remy Sharp'
                    src={item.image}
                    variant='rounded'
                    sx={{
                      height: 40,
                      width: 40,
                      borderRadius: 2,
                    }}
                  />
                  <Stack direction={'column'}>
                    <Typography variant='body2'>
                      {item.firstName} {item.lastName}
                    </Typography>
                    <Stack
                      direction={'row'}
                      spacing={0.5}
                      alignItems={'center'}
                    >
                      {(item.telegram && (
                        <Send2
                          size='14'
                          color={THEME_UTIL.telegramColor}
                          variant='Bold'
                        />
                      )) ||
                        (item.facebook && (
                          <Facebook
                            size='14'
                            color={THEME_UTIL.facebookColor}
                            variant='Bold'
                          />
                        ))}

                      <Typography
                        variant='caption'
                        noWrap
                        color={'text.secondary'}
                      >
                        {item.telegram || item.facebook}
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </TableCell>
              <TableCell align='left'>{item.phoneNumber}</TableCell>
              <TableCell align='left'>
                <Stack direction={'row'} spacing={0.5} alignItems={'center'}>
                  <Location
                    size='14'
                    color={theme.palette.primary.main}
                    variant='Bold'
                  />
                  <Typography variant='body2' noWrap>
                    {item.province}
                  </Typography>
                </Stack>
              </TableCell>
              <TableCell align='right'>
                <Stack
                  direction={'row'}
                  spacing={2}
                  alignItems={'center'}
                  justifyContent={'end'}
                >
                  <CusIconButton
                    sx={{
                      boxShadow: 0,
                      background: (theme) =>
                        alpha(theme.palette.info.main, 0.1),
                    }}
                    onClick={() =>
                      navigate(
                        ROUTE_PATH.suppliers.updateSupplier.replace(
                          ':id',
                          `${item.id}`
                        )
                      )
                    }
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
                    onClick={() => {
                      setId(item.id);
                      setOpen(true);
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
          ))
        }
      />
    </>
  );
}
