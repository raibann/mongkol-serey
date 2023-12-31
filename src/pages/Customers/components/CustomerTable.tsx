import {
  Avatar,
  Button,
  Stack,
  TableCell,
  TableRow,
  Typography,
  alpha,
} from '@mui/material';
import { useRequest } from 'ahooks';
import CUSTOMER_API from 'api/customer';
import ConfirmDialogSlide from 'components/CusDialog/ConfirmDialog';
import ErrorDialog from 'components/CusDialog/ErrorDialog';
import { CusIconButton } from 'components/CusIconButton';
import CusTable, { custStyle } from 'components/CusTable';
import { Edit2, Facebook, Location, Send2, Trash } from 'iconsax-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import theme from 'theme/theme';
import { ROUTE_PATH } from 'utils/route-util';
import THEME_UTIL from 'utils/theme-util';

const headers = ['No', 'Name', 'Phone Number', 'Address', ''];

export default function CustTable(props: {
  data: ICustomer.Customer[] | undefined;
  onSuccess?: () => void;
  disableAction?: boolean;
  onSelect?: (customer: ICustomer.Customer) => void;
}) {
  // State
  const [errorAlert, setErrorAlert] = useState(false);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState<number | undefined>();

  // Hooks
  const navigate = useNavigate();
  // Fetch Apis
  const { run, loading, error } = useRequest(CUSTOMER_API.deleteCustomer, {
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
          props.data.map((data) => (
            <TableRow
              onClick={() => props.onSelect?.(data)}
              key={data.id}
              sx={custStyle.bodyRow}
            >
              <TableCell>{data.id}</TableCell>
              <TableCell
                align='left'
                sx={{
                  fontWeight: (theme) => theme.typography.fontWeightBold,
                }}
              >
                <Stack direction={'row'} spacing={2} alignItems={'center'}>
                  <Avatar
                    alt='Remy Sharp'
                    src={data.images}
                    variant='rounded'
                    sx={{
                      height: 40,
                      width: 40,
                      borderRadius: 2,
                    }}
                  />
                  <Stack direction={'column'}>
                    <Typography variant='body2'>
                      {data.customer_name}
                    </Typography>
                    <Stack
                      direction={'row'}
                      spacing={0.5}
                      alignItems={'center'}
                    >
                      {(data.telegram_name && (
                        <Send2
                          size='14'
                          color={THEME_UTIL.telegramColor}
                          variant='Bold'
                        />
                      )) ||
                        (data.facebook_name && (
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
                        {data.telegram_name || data.facebook_name}
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </TableCell>
              <TableCell align='left'>{data.contact_number}</TableCell>
              <TableCell align='left'>
                <Stack direction={'row'} spacing={0.5} alignItems={'center'}>
                  <Location
                    size='14'
                    color={theme.palette.primary.main}
                    variant='Bold'
                  />
                  <Typography variant='body2' noWrap>
                    {data.location || data.province}
                  </Typography>
                </Stack>
              </TableCell>
              <TableCell align='right'>
                <Stack
                  direction={'row'}
                  spacing={1}
                  alignItems={'center'}
                  justifyContent={'end'}
                >
                  {props.disableAction !== true && (
                    <>
                      <CusIconButton
                        sx={{
                          boxShadow: 0,
                          background: (theme) =>
                            alpha(theme.palette.info.main, 0.1),
                        }}
                        onClick={() =>
                          navigate(
                            ROUTE_PATH.customers.updateCustomer.replace(
                              ':id',
                              `${data.id}`
                            )
                          )
                        }
                      >
                        <Edit2
                          size='18'
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
                          setId(data.id);
                          setOpen(true);
                        }}
                      >
                        <Trash
                          size='18'
                          color={theme.palette.error.main}
                          variant='Bold'
                        />
                      </CusIconButton>
                    </>
                  )}
                  {props.onSelect && (
                    <Button
                      onClick={() => props.onSelect?.(data)}
                      variant='contained'
                      size='small'
                      sx={{ color: 'common.white' }}
                    >
                      Select
                    </Button>
                  )}
                </Stack>
              </TableCell>
            </TableRow>
          ))
        }
      />
    </>
  );
}
