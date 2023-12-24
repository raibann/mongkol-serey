import {
  Avatar,
  CircularProgress,
  Container,
  Grid,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useTheme,
  Box,
  alpha,
} from '@mui/material';
import { useRequest } from 'ahooks';
import CUSTOMER_API from 'api/customer';
import ErrorDialog from 'components/CusDialog/ErrorDialog';
import { CusIconButton } from 'components/CusIconButton';
import { Call, Edit2, Facebook, Send2, Trash, UserEdit } from 'iconsax-react';
import { useEffect, useState } from 'react';
import { HiDotsHorizontal } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { EnumCustomerType } from 'utils/data-util';
import { ROUTE_PATH } from 'utils/route-util';

import THEME_UTIL from 'utils/theme-util';

export default function PotentialTable(props: {
  data: ICustomer.Customer[] | undefined;
  onSuccess: () => void;
}) {
  // States
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectId, setSelectId] = useState<number | undefined>();
  const [errorAlert, setErrorAlert] = useState(false);

  // Variable
  const open = Boolean(anchorEl);

  // Hooks
  const theme = useTheme();
  const navigate = useNavigate();

  // Fetch APIS
  const {
    run: fetchDelete,
    loading: isLoadingDelete,
    error: errorDelete,
  } = useRequest(CUSTOMER_API.deleteCustomer, {
    manual: true,
    onSuccess: () => {
      setAnchorEl(null);
      props.onSuccess();
    },
  });

  const {
    loading: isLoadingUpdate,
    error: errorUpdate,
    run: fetchUpdate,
  } = useRequest(CUSTOMER_API.updateCustomer, {
    manual: true,
    onSuccess: () => {
      setAnchorEl(null);
      props.onSuccess();
    },
  });

  const {
    run: fetchDetails,
    error: errorDetails,
    cancel: cancelFetchDetails,
  } = useRequest(CUSTOMER_API.getCustomerDetails, {
    manual: false,
    onSuccess: (data) => {
      fetchUpdate({
        cusRequest: {
          ...data.customer,
          customerType: EnumCustomerType.CUSTOMER,
        },
        id: `${data.customer.id}`,
      });
    },
  });

  // Effect
  useEffect(() => {
    if (errorDelete || errorDetails || errorUpdate) {
      setErrorAlert(!errorAlert);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errorDelete, errorDetails, errorUpdate]);

  useEffect(() => {
    if (!selectId) {
      cancelFetchDetails();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectId]);

  // Methods
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    id?: number
  ) => {
    setAnchorEl(event.currentTarget);
    setSelectId(id);
  };

  const handleEdit = () => {
    if (selectId) {
      navigate(
        ROUTE_PATH.customers.updatePotentialCustomer.replace(
          ':id',
          `${selectId}`
        )
      );
      setAnchorEl(null);
    }
  };

  const handleDelete = () => {
    if (selectId) {
      fetchDelete({ id: selectId });
    }
  };

  const handleConvertToCustomer = () => {
    if (selectId) {
      fetchDetails({ id: selectId });
    }
  };

  return (
    <>
      <ErrorDialog
        open={errorAlert}
        onCloseDialog={() => {
          setErrorAlert(!errorAlert);
        }}
        errorTitle={'Delete fail!'}
        errorMessage={errorDelete?.message || 'Something went wrong!'}
      />

      <Container maxWidth='xl'>
        <Grid container spacing={2}>
          {props.data?.map((data) => {
            return (
              <Grid key={data.id} item xs={12} sm={4}>
                <Stack
                  direction={'column'}
                  bgcolor='common.white'
                  p={2}
                  borderRadius={2.5}
                >
                  <Stack
                    direction={'row'}
                    alignItems={'center'}
                    width={'100%'}
                    justifyContent={'space-between'}
                  >
                    <Stack direction={'row'} spacing={2} alignItems='center'>
                      {/* Avatar */}
                      <Avatar
                        src={data.images}
                        variant='circular'
                        sx={{
                          height: 40,
                          width: 40,
                        }}
                      />
                      {/* Text item */}
                      <Stack direction={'column'}>
                        <Typography
                          variant='body2'
                          noWrap
                          overflow={'hidden'}
                          textOverflow={'ellipsis'}
                          width={92}
                          display={'inline-block'}
                        >
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
                            )) ||
                            (data.contact_number && (
                              <Call
                                size='14'
                                color={theme.palette.success.main}
                                variant='Bold'
                              />
                            ))}
                          <Typography
                            variant='caption'
                            noWrap
                            color={'text.secondary'}
                          >
                            {data.facebook_name ||
                              data.telegram_name ||
                              data.contact_number}
                          </Typography>
                        </Stack>
                      </Stack>
                    </Stack>
                    <CusIconButton
                      sx={{
                        boxShadow: 0,
                        color: (theme) => theme.palette.text.secondary,
                      }}
                      onClick={(e) => {
                        handleClick(e, data.id);
                      }}
                    >
                      <HiDotsHorizontal />
                    </CusIconButton>
                    <Menu
                      id='basic-menu'
                      anchorEl={anchorEl}
                      open={open}
                      onClose={() => {
                        setAnchorEl(null);
                      }}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}
                      elevation={1}
                    >
                      <MenuItem onClick={handleEdit}>
                        <Edit2
                          size='18'
                          color={theme.palette.info.main}
                          style={{ marginRight: 8 }}
                          variant='Bold'
                        />
                        Edit
                      </MenuItem>
                      <MenuItem onClick={handleConvertToCustomer}>
                        {isLoadingUpdate ? (
                          <CircularProgress size={'small'} />
                        ) : (
                          <>
                            <UserEdit
                              variant='Bold'
                              size='18'
                              color={theme.palette.primary.main}
                              style={{ marginRight: 8 }}
                            />
                            To Customer
                          </>
                        )}
                      </MenuItem>
                      <MenuItem onClick={handleDelete}>
                        {isLoadingDelete ? (
                          <CircularProgress size={'small'} />
                        ) : (
                          <>
                            <Trash
                              variant='Bold'
                              size='18'
                              color={theme.palette.error.main}
                              style={{ marginRight: 8 }}
                            />
                            Delete
                          </>
                        )}
                      </MenuItem>
                    </Menu>
                  </Stack>
                  <Box
                    mt={1}
                    sx={{
                      bgcolor: (theme) =>
                        alpha(theme.palette.warning.light, 0.1),
                      borderRadius: 2,
                      height: 100,
                      overflow: 'auto',
                      p: 1,
                    }}
                  >
                    <Typography whiteSpace={'pre-line'}>
                      {data.remarks}
                    </Typography>
                  </Box>
                </Stack>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}
