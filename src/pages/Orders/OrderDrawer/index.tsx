import {
  alpha,
  Autocomplete,
  Button,
  MenuItem,
  Stack,
  Typography,
  IconButton,
} from '@mui/material';
import {
  Controller,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { CustomerInput } from 'pages/Customer/CustForm/CustomerForm';
import { BsPlus } from 'react-icons/bs';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { useEffect, useRef, useState } from 'react';
import { BoxRemove, Trash } from 'iconsax-react';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { CusIconButton } from 'components/CusIconButton';
import { MdClose } from 'react-icons/md';
import { validatePatterns } from 'utils/validate-util';
import StyledOutlinedTextField from 'components/CusTextField/StyledOutlinedTextField';
import LabelTextField from 'components/LabelTextField';
import OrderItem from './OrderItem';
import THEME_UTIL from 'utils/theme-util';
import theme from 'theme/theme';
import useRequest from '@ahooksjs/use-request';
import ORDER_API from 'api/order';
import moment from 'moment';
import FinalInvoiceForm, {
  FinalInvoiceInput,
  IFinalInvoice,
} from './FinalInvoiceForm';
import CUSTOMER_API from 'api/customer';
import { eventList, paidBy } from 'utils/data-util';
import EXPENSE_API from 'api/expense';
import ConfirmDialogSlide from 'components/CusDialog/ConfirmDialog';
import ErrorDialog from 'components/CusDialog/ErrorDialog';
import { LoadingButton } from '@mui/lab';
import { motion } from 'framer-motion';

export interface IOrderForm {
  orderId?: number;
  eventType: string;
  eventLocation: string;
  eventDate: Date | null;
  bookingDate: Date | null;
  deposit: number | '';
  depositText: string;
  paidBy: string;
  quantity: number | '';
  listMenu: IlistMenu[];
}

interface IlistMenu {
  id: number | undefined;
  title: string;
  quantity: number | '';
  unitPrice: number | '';
  unit: string;
  price: number | '';
  menuItem: {
    id?: number;
    title: string;
  }[];
}
const OrderDrawer = ({
  handleCloseOrderDialog,
  orderDetail,
  onActionSuccess,
}: {
  onActionSuccess: () => void;
  handleCloseOrderDialog: () => void;
  orderDetail: IOrder.Order | undefined;
}) => {
  // useRequests
  const orderActionReq = useRequest(ORDER_API.orderAction, {
    manual: true,
    onSuccess: (data) => {
      if (orderDetail?.expenses && orderDetail.expenses.length > 0) {
        expenseActionReq.run(orderDetail.id || 0, orderDetail.expenses);
        return;
      }
      onActionSuccess();
    },
    onError: () => setAlertDialog(true),
  });
  const expenseActionReq = useRequest(EXPENSE_API.addExpense, {
    manual: true,
    onSuccess: () => onActionSuccess(),
    onError: () => setAlertDialog(true),
  });
  const customerListReq = useRequest(CUSTOMER_API.getCustomerList, {
    manual: true,
  });
  const deleteOrderReq = useRequest(ORDER_API.deleteOrder, {
    manual: true,
    onSuccess: () => {
      setConfirmDialog(false);
      onActionSuccess();
    },
    onError: () => setAlertDialog(true),
  });

  // react-hooks-form
  const methods = useForm<IOrderForm & CustomerInput & FinalInvoiceInput>();
  const { setValue, handleSubmit } = methods;

  // states
  const [finalInvoice, setFinalInvoice] = useState<IFinalInvoice[]>([]);
  const [listMenu, setListMenu] = useState<IlistMenu[]>([]);
  const [newCustomer] = useState(0);
  const [alertDialog, setAlertDialog] = useState(false);
  const [confirmDialog, setConfirmDialog] = useState(false);
  const [selectedCustomer, setSelectedCustomer] =
    useState<ICustomer.Customer>();
  let orderItemId = 0;

  // refs
  const customerRef = useRef(orderDetail?.customer);

  const onSubmit: SubmitHandler<
    IOrderForm & CustomerInput & FinalInvoiceInput
  > = (data) => {
    orderActionReq.run(
      {
        id: data.orderId || undefined,
        amountInKhmer: data.depositText,
        bookingDate: moment(data.bookingDate).format('yyyy-MM-DD'),
        date: moment(data.eventDate).format('yyyy-MM-DD'),
        deposit: +data.deposit,
        location: data.eventLocation,
        quantity: +data.quantity,
        type: data.eventType,
        paidBy: data.paidBy,
        eventPackages: data.listMenu?.map((menu) => {
          return {
            id: menu.id,
            category: menu.title,
            price: +menu.price,
            quantity: +menu.quantity,
            unit:
              menu.unit === undefined || menu.unit === '' ? 'តុ' : menu.unit,
            packageItems:
              menu.menuItem?.map((item) => {
                return {
                  id: item.id,
                  title: item.title,
                };
              }) || [],
          };
        }),
        finalInvoices: !orderDetail
          ? []
          : data.finalInvoice?.map((invoice) => {
              return {
                id: invoice.id,
                category: invoice.fTitle,
                price: +invoice.fPrice,
                quantity: +invoice.fQty,
                unit: invoice.fUnit,
              };
            }),
      },
      selectedCustomer?.id
    );
  };

  // useEffect
  useEffect(() => {
    if (orderDetail) {
      const tmpListMenu: IlistMenu[] = orderDetail.eventPackages.map((item) => {
        return {
          id: item?.id,
          title: item.category || '',
          price: +item.price || 0,
          unit: item.unit || 'តុ',
          unitPrice: +(+item.price / item.quantity).toFixed(2) || 0,
          quantity: item.quantity || 0,
          menuItem: item.packageItems?.map((e) => {
            return {
              id: e?.id,
              title: e.title || '',
            };
          }),
        };
      });
      const tmpFinalInvoice: IFinalInvoice[] = orderDetail?.finalInvoices?.map(
        (e) => {
          return {
            id: e?.id,
            fPrice: e.price || '',
            fQty: e.quantity || '',
            fTitle: e.category || '',
            fUnit: e.unit || '',
          };
        }
      );
      setValue('orderId', orderDetail?.id);
      setValue('eventLocation', orderDetail.location || '');
      setValue('paidBy', orderDetail.paidBy || '');
      setValue('bookingDate', new Date(orderDetail.bookingDate) || null);
      setValue('eventDate', new Date(orderDetail.date) || null);
      setValue('deposit', orderDetail.deposit || '');
      setValue('depositText', orderDetail.amountInKhmer || '');
      setValue('eventType', orderDetail.type || '');
      setValue('quantity', orderDetail.quantity || '');
      setValue('listMenu', tmpListMenu);
      setValue('finalInvoice', tmpFinalInvoice);
      setSelectedCustomer(orderDetail?.customer);
      setListMenu(tmpListMenu);
      setFinalInvoice(tmpFinalInvoice);
      return;
    }

    addListOrderHandler();
    addFinalInvoiceHandler();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Methods
  const addListOrderHandler = () => {
    setListMenu([
      ...listMenu,
      {
        id: undefined,
        title: '',
        price: '',
        quantity: '',
        unitPrice: '',
        unit: '',
        menuItem: [
          {
            id: undefined,
            title: '',
          },
        ],
      },
    ]);
  };

  const deleteListOrderHandler = (i: number) => {
    const tmp = methods.watch('listMenu').filter((_, idx) => {
      return idx !== i;
    });
    setListMenu(tmp);
    setValue('listMenu', tmp);
  };

  const addFinalInvoiceHandler = () => {
    setFinalInvoice([
      ...finalInvoice,
      {
        id: undefined,
        fTitle: '',
        fQty: '',
        fPrice: '',
        fUnit: '',
      },
    ]);
  };

  const removeFinalInvoiceHandler = (i: number) => {
    const tmp = methods.watch('finalInvoice').filter((_, idx) => {
      return i !== idx;
    });
    setFinalInvoice(tmp);
    setValue('finalInvoice', tmp);
  };

  const generateFinalInvoice = () => {
    const tmp: IFinalInvoice[] = methods.watch('listMenu').map((e) => {
      return {
        id: undefined,
        fPrice: e.price,
        fQty: e.quantity,
        fTitle: e.title,
        fUnit: e.unit,
      };
    });
    setFinalInvoice(tmp);
    setValue('finalInvoice', tmp);
  };

  return (
    <>
      {/* {(orderActionReq.loading || expenseActionReq.loading) && (
        <CusBackDrop open={true} />
      )} */}

      <ErrorDialog
        open={alertDialog}
        errorTitle='Internal Server Error'
        errorMessage={
          orderActionReq.error?.message ||
          deleteOrderReq.error?.message ||
          expenseActionReq.error?.message ||
          'Oops! There seem to be something wrong with your server.'
        }
        onCloseDialog={() => setAlertDialog(false)}
      />

      <Stack
        p={3}
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        position='sticky'
        top={0}
        sx={{
          backgroundColor: '#fff',
          zIndex: theme.zIndex.drawer,
        }}
      >
        <Typography variant='h4' color='secondary.main' fontWeight='bold'>
          {orderDetail ? 'Update Order' : 'New Order'}
        </Typography>
        <CusIconButton color='error' onClick={handleCloseOrderDialog}>
          <MdClose />
        </CusIconButton>
      </Stack>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* {!orderDetail && (
            <Stack direction='row' spacing={2} px={3}>
              <Button
                disableElevation
                startIcon={
                  !newCustomer ? (
                    <BsCheckCircleFill size={16} />
                  ) : (
                    <BsCircle size={16} />
                  )
                }
                color='secondary'
                variant={!newCustomer ? 'contained' : 'outlined'}
                onClick={() => setNewCustomer(0)}
              >
                Exisiting Customer
              </Button>
              <Button
                disableElevation
                startIcon={
                  newCustomer ? (
                    <BsCheckCircleFill size={16} />
                  ) : (
                    <BsCircle size={16} />
                  )
                }
                color='secondary'
                variant={newCustomer ? 'contained' : 'outlined'}
                onClick={() => setNewCustomer(1)}
              >
                New Customer
              </Button>
            </Stack>
          )} */}

          {/* {newCustomer === 1 && (
            <>
              <InputGroupTitle marginTop={3}>Customer Info</InputGroupTitle>
              <CustomerForm />
            </>
          )} */}

          <InputGroupTitle marginTop={!newCustomer ? 3 : 8}>
            Order Info
          </InputGroupTitle>

          <Stack px={3} spacing={4}>
            <Stack spacing={4} direction='row'>
              <LabelTextField label='Customer'>
                <Autocomplete
                  disableClearable
                  openOnFocus
                  loading={customerListReq.loading}
                  onFocus={() =>
                    !customerListReq.data && customerListReq.run({ size: 1000 })
                  }
                  defaultValue={customerRef.current}
                  onChange={(e, value) => {
                    setSelectedCustomer(value);
                  }}
                  renderInput={(params) => (
                    <StyledOutlinedTextField
                      placeholder='Select Customer'
                      {...params}
                    />
                  )}
                  getOptionLabel={(option) => option.customer_name || ''}
                  renderOption={(props, option) => {
                    return (
                      option && (
                        <MenuItem {...props} key={option.id}>
                          {`${option?.id}. ${option?.customer_name}`}
                        </MenuItem>
                      )
                    );
                  }}
                  options={customerListReq.data?.data || []}
                />
              </LabelTextField>
            </Stack>

            <Stack spacing={4} direction='row'>
              <Controller
                control={methods.control}
                name='eventType'
                defaultValue=''
                rules={{
                  required: { value: true, message: 'Event type is Required' },
                }}
                render={({
                  field: { onChange, ...rest },
                  fieldState: { error },
                }) => {
                  return (
                    <LabelTextField label='Event Type'>
                      <Autocomplete
                        freeSolo
                        disableClearable
                        openOnFocus
                        id='eventType'
                        {...rest}
                        onInputChange={(e, value) => {
                          setValue('eventType', value);
                        }}
                        renderInput={(params) => (
                          <StyledOutlinedTextField
                            placeholder='Enter Event Type'
                            error={Boolean(error)}
                            helperText={error?.message}
                            {...params}
                          />
                        )}
                        options={eventList}
                      />
                    </LabelTextField>
                  );
                }}
              />

              <Controller
                control={methods.control}
                name='quantity'
                defaultValue=''
                rules={{
                  required: {
                    value: true,
                    message: 'Quantity is required',
                  },
                  pattern: {
                    value: validatePatterns.numberOnly,
                    message: 'Quantity is number only',
                  },
                }}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <LabelTextField label='Quantity'>
                      <StyledOutlinedTextField
                        placeholder='Quantity'
                        error={Boolean(error)}
                        helperText={error?.message}
                        {...field}
                      />
                    </LabelTextField>
                  );
                }}
              />
            </Stack>

            <Stack spacing={4} direction='row'>
              <Controller
                control={methods.control}
                name='eventDate'
                defaultValue={null}
                rules={{
                  required: {
                    value: true,
                    message: 'Event date is Required',
                  },
                }}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <LabelTextField label='Event Date'>
                      <LocalizationProvider dateAdapter={AdapterMoment}>
                        <DatePicker
                          inputFormat='DD-MM-YYYY'
                          {...field}
                          InputAdornmentProps={{
                            sx: {
                              '& .MuiIconButton-root': {
                                color: theme.palette.primary.main,
                              },
                            },
                          }}
                          renderInput={(params) => (
                            <StyledOutlinedTextField
                              placeholder='Enter Event Date'
                              error={Boolean(error)}
                              helperText={error?.message}
                              sx={{
                                '& fieldset': {
                                  border: error
                                    ? `solid 0.5px ${theme.palette.error.main}`
                                    : {},
                                },
                              }}
                              FormHelperTextProps={{
                                sx: {
                                  color: theme.palette.error.main,
                                },
                              }}
                              {...params}
                            />
                          )}
                        />
                      </LocalizationProvider>
                    </LabelTextField>
                  );
                }}
              />

              <Controller
                control={methods.control}
                name='bookingDate'
                defaultValue={null}
                rules={{
                  required: {
                    value: true,
                    message: 'Booking date is Required',
                  },
                }}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <LabelTextField label='Booking Date'>
                      <LocalizationProvider dateAdapter={AdapterMoment}>
                        <DatePicker
                          inputFormat='DD-MM-YYYY'
                          {...field}
                          InputAdornmentProps={{
                            sx: {
                              '& .MuiIconButton-root': {
                                color: theme.palette.primary.main,
                              },
                            },
                          }}
                          renderInput={(params) => (
                            <StyledOutlinedTextField
                              placeholder='Enter Booking Date'
                              error={Boolean(error)}
                              helperText={error?.message}
                              sx={{
                                '& fieldset': {
                                  border: error
                                    ? `solid 0.5px ${theme.palette.error.main}`
                                    : {},
                                },
                              }}
                              FormHelperTextProps={{
                                sx: {
                                  color: theme.palette.error.main,
                                },
                              }}
                              {...params}
                            />
                          )}
                        />
                      </LocalizationProvider>
                    </LabelTextField>
                  );
                }}
              />
            </Stack>
            <Stack spacing={4} direction='row'>
              <Controller
                control={methods.control}
                name='deposit'
                defaultValue=''
                rules={{
                  required: { value: true, message: 'Deposit is Required' },
                  pattern: {
                    value: validatePatterns.numberOnly,
                    message: 'Deposit amount should be number only',
                  },
                }}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <LabelTextField label='Deposit'>
                      <StyledOutlinedTextField
                        placeholder='Enter Deposit'
                        error={Boolean(error)}
                        helperText={error?.message}
                        {...field}
                      />
                    </LabelTextField>
                  );
                }}
              />

              <Controller
                control={methods.control}
                name='depositText'
                defaultValue=''
                render={({ field }) => {
                  return (
                    <LabelTextField label='Amount in Khmer'>
                      <StyledOutlinedTextField
                        placeholder='Enter Amount in Khmer'
                        {...field}
                      />
                    </LabelTextField>
                  );
                }}
              />
            </Stack>
            <Stack spacing={4} direction='row'>
              <Controller
                control={methods.control}
                name='eventLocation'
                defaultValue=''
                rules={{
                  required: {
                    value: true,
                    message: 'Event location is Required',
                  },
                }}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <LabelTextField label='Event Location'>
                      <StyledOutlinedTextField
                        placeholder='Enter Event Location'
                        error={Boolean(error)}
                        helperText={error?.message}
                        {...field}
                      />
                    </LabelTextField>
                  );
                }}
              />

              <Controller
                control={methods.control}
                name='paidBy'
                defaultValue=''
                rules={{
                  required: { value: true, message: 'Paid by is Required' },
                }}
                render={({
                  field: { onChange, ...rest },
                  fieldState: { error },
                }) => {
                  return (
                    <LabelTextField label='Paid By'>
                      <Autocomplete
                        freeSolo
                        disableClearable
                        openOnFocus
                        id='paidby'
                        {...rest}
                        onInputChange={(e, value) => {
                          setValue('paidBy', value);
                        }}
                        renderInput={(params) => (
                          <StyledOutlinedTextField
                            placeholder='Enter paid by'
                            error={Boolean(error)}
                            helperText={error?.message}
                            {...params}
                          />
                        )}
                        options={paidBy.map((data) => data)}
                      />
                    </LabelTextField>
                  );
                }}
              />
            </Stack>
          </Stack>

          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            sx={{
              mx: 3,
              pt: 4,
              pb: 1,
            }}
          >
            <Typography fontWeight='bold'>LIST ORDERS</Typography>
            <Button
              color='info'
              startIcon={<BsPlus />}
              onClick={addListOrderHandler}
            >
              Add More
            </Button>
          </Stack>

          {listMenu && listMenu.length > 0 ? (
            <motion.div layout style={{ overflow: 'hidden' }}>
              {listMenu?.map((menu, i) => {
                return (
                  <motion.div
                    key={orderItemId++}
                    layout
                    initial={{
                      opacity: 0,
                      scale: 0.5,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: 'easeInOut',
                    }}
                  >
                    <OrderItem
                      index={i}
                      menuItemsP={menu.menuItem}
                      onRemoveOrder={() => deleteListOrderHandler(i)}
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            <Stack
              alignItems='center'
              spacing={2}
              sx={{
                mx: 3,
                p: 2,
                borderRadius: 2,
                bgcolor: alpha(theme.palette.error.light, 0.1),
              }}
            >
              <BoxRemove size='48' color={theme.palette.error.main} />
              <Typography color='error' width='100%' textAlign='center' mb={3}>
                {`No Order Item...`}
              </Typography>
            </Stack>
          )}

          {orderDetail && (
            <>
              <InputGroupTitle marginTop={8}>Final Invoice</InputGroupTitle>

              {finalInvoice && finalInvoice.length > 0 && (
                <Stack
                  width='100%'
                  spacing={1}
                  pt={2}
                  px={3}
                  position='relative'
                  direction='row'
                  alignItems='center'
                >
                  <Typography sx={{ flex: 1 }}>Title</Typography>
                  <Typography sx={{ flex: 1 }}>Quanity</Typography>
                  <Typography sx={{ flex: 1 }}>Unit</Typography>
                  <Typography sx={{ flex: 1 }}>Total Price</Typography>
                  <div style={{ width: 40 }} />
                </Stack>
              )}

              <Stack px={3}>
                {finalInvoice && finalInvoice.length > 0 ? (
                  finalInvoice.map((_, i) => {
                    return (
                      <FinalInvoiceForm
                        key={i}
                        index={i}
                        onRemoveFinalInvoice={() =>
                          removeFinalInvoiceHandler(i)
                        }
                      />
                    );
                  })
                ) : (
                  <Stack
                    alignItems='center'
                    spacing={2}
                    sx={{
                      py: 1.5,
                      borderRadius: 2,
                      bgcolor: alpha(theme.palette.error.light, 0.1),
                    }}
                  >
                    <BoxRemove size='48' color={theme.palette.error.main} />
                    <Typography
                      color='error'
                      width='100%'
                      textAlign='center'
                      mt={1}
                    >
                      {`Final Invoice is Empty...`}
                    </Typography>
                    <Stack direction='row'>
                      <Button
                        variant='text'
                        color='info'
                        onClick={addFinalInvoiceHandler}
                        sx={{
                          mx: 2,
                          mt: 1,
                        }}
                      >
                        Add More
                      </Button>
                      <Button
                        variant='text'
                        color='success'
                        onClick={generateFinalInvoice}
                        sx={{
                          mx: 2,
                          mt: 1,
                        }}
                      >
                        Generate
                      </Button>
                    </Stack>
                  </Stack>
                )}
                {finalInvoice && finalInvoice.length > 0 && (
                  <Button
                    variant='outlined'
                    onClick={addFinalInvoiceHandler}
                    sx={{
                      mt: 2,
                      py: 1,
                      borderStyle: 'dashed',
                      background: alpha(theme.palette.primary.light, 0.2),
                    }}
                  >
                    Add More
                  </Button>
                )}
              </Stack>
            </>
          )}

          <Stack
            height={50}
            px={3}
            mt={10}
            mb={3}
            spacing={2}
            position='relative'
            direction='row'
          >
            <LoadingButton
              type='submit'
              variant='contained'
              fullWidth
              disableElevation
              loading={orderActionReq.loading || expenseActionReq.loading}
              sx={{
                fontSize: 18,
                fontWeight: 'bold',
                p: 1.5,
                borderRadius: '50vh',
                boxShadow: 1,
                background: THEME_UTIL.goldGradientMain,
                color: '#fff',
                '&:hover': {
                  background: THEME_UTIL.goldGradientMain,
                },
              }}
            >
              Save
            </LoadingButton>
            {orderDetail && (
              <>
                <IconButton
                  color='inherit'
                  onClick={() => setConfirmDialog(true)}
                  sx={{
                    aspectRatio: '1/1',
                    width: '50px',
                    height: '100%',
                    color: '#fff',
                    background: (theme) => theme.palette.error.main,
                    '&:hover': {
                      background: (theme) => theme.palette.error.light,
                    },
                  }}
                >
                  <Trash />
                </IconButton>

                <ConfirmDialogSlide
                  open={confirmDialog}
                  title='Are you sure you want to delete this order?'
                  confirm={() =>
                    deleteOrderReq.run({
                      orderId: orderDetail?.id?.toString() || '0',
                    })
                  }
                  cancel={() => setConfirmDialog(false)}
                  loading={deleteOrderReq.loading}
                />
              </>
            )}
          </Stack>
        </form>
      </FormProvider>
    </>
  );
};

export const InputGroupTitle = ({
  children,
  marginTop,
}: {
  children: React.ReactNode;
  marginTop?: number;
}) => {
  return (
    <>
      <Typography
        textAlign='center'
        fontWeight='bold'
        variant='h5'
        sx={{
          mb: 3,
          mt: marginTop || 0,
          mx: 3,
          p: 1.5,
          borderRadius: 2,
          backgroundColor: theme.palette.background.paper,
          boxShadow: theme.shadows[2],
        }}
      >
        {children}
      </Typography>
    </>
  );
};

export default OrderDrawer;
