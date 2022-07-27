import { alpha, Autocomplete, Button, Stack, Typography } from '@mui/material';
import {
  Controller,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import CustomerForm, {
  CustomerInput,
} from 'pages/Customer/CustForm/CustomerForm';
import { CusIconButton } from 'components/CusIconButton';
import { MdClose } from 'react-icons/md';
import StyledOutlinedTextField from 'components/CusTextField/StyledOutlinedTextField';
import LabelTextField from 'components/LabelTextField';
import OrderItem from './OrderItem';
import { BsPlus, BsCheckCircleFill, BsCircle } from 'react-icons/bs';
import FinalInvoiceForm, {
  FinalInvoiceInput,
  IFinalInvoice,
} from './FinalInvoiceForm';
import { useEffect, useState } from 'react';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import THEME_UTIL from 'utils/theme-util';
import theme from 'theme/theme';
import { paidByBank } from 'utils/stock-util';
import { BoxRemove } from 'iconsax-react';

export interface IOrderForm {
  customerId: number | '';
  eventType: string;
  eventLocation: string;
  eventDate: Date | null;
  bookingDate: Date | null;
  deposit: number | '';
  depositText: string;
  paidBy: string;
  quantity: string;
  unitPrice: string;
  listMenu: IlistMenu[];
}

interface IlistMenu {
  id: number;
  title: string;
  quantity: number | '';
  unit: string;
  price: number | '';
  menuItem: {
    id: number;
    title: string;
  }[];
}
const OrderDrawer = ({
  handleCloseOrderDialog,
}: {
  handleCloseOrderDialog: () => void;
}) => {
  const methods = useForm<IOrderForm & CustomerInput & FinalInvoiceInput>();
  const { setValue, handleSubmit } = methods;

  const [listMenu, setListMenu] = useState<IlistMenu[]>([]);
  const [finalInvoice, setFinalInvoice] = useState<IFinalInvoice[]>([]);

  const [newCustomer, setNewCustomer] = useState(1);

  const onSubmit: SubmitHandler<
    IOrderForm & CustomerInput & FinalInvoiceInput
  > = (data) => {
    console.log(data);
  };

  useEffect(() => {
    setFinalInvoice([
      {
        id: new Date().getTime(),
        fTitle: '',
        fQty: '',
        fPrice: '',
        fUnit: '',
      },
    ]);
    setListMenu([
      {
        id: new Date().getTime(),
        title: '',
        price: '',
        quantity: '',
        unit: '',
        menuItem: [
          {
            id: new Date().getTime(),
            title: '',
          },
        ],
      },
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addListOrderHandler = () => {
    if (listMenu && listMenu.length > 0) {
      setListMenu([
        ...listMenu,
        {
          id: new Date().getTime(),
          title: '',
          price: '',
          quantity: '',
          unit: '',
          menuItem: [
            {
              id: new Date().getTime(),
              title: '',
            },
          ],
        },
      ]);
    } else {
      setListMenu([
        {
          id: new Date().getTime(),
          title: '',
          price: '',
          quantity: '',
          unit: '',
          menuItem: [
            {
              id: new Date().getTime(),
              title: '',
            },
          ],
        },
      ]);
    }
  };

  const deleteListOrderHandler = (id: number) => {
    const tmp = listMenu.filter((order) => {
      return order.id !== id;
    });
    setListMenu(tmp);
  };

  const addFinalInvoiceHandler = () => {
    if (finalInvoice && finalInvoice.length > 0) {
      setFinalInvoice([
        ...finalInvoice,
        {
          id: new Date().getTime(),
          fTitle: '',
          fQty: '',
          fPrice: '',
          fUnit: '',
        },
      ]);
    } else {
      setFinalInvoice([
        {
          id: new Date().getTime(),
          fTitle: '',
          fQty: '',
          fPrice: '',
          fUnit: '',
        },
      ]);
    }
  };

  const removeFinalInvoiceHandler = (id: number) => {
    const tmp = finalInvoice.filter((invoice) => {
      return invoice.id !== id;
    });
    setFinalInvoice(tmp);
  };

  return (
    <>
      <Stack
        p={3}
        direction='row'
        justifyContent='space-between'
        alignItems='center'
      >
        <Typography variant='h4' color='secondary.main' fontWeight='bold'>
          New Order
        </Typography>
        <CusIconButton color='error' onClick={handleCloseOrderDialog}>
          <MdClose />
        </CusIconButton>
      </Stack>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack direction='row' spacing={2} px={3}>
            <Button
              disableElevation
              startIcon={
                newCustomer ? (
                  <BsCheckCircleFill size={16} />
                ) : (
                  <BsCircle size={16} />
                )
              }
              variant={newCustomer ? 'contained' : 'outlined'}
              onClick={() => setNewCustomer(1)}
              sx={{
                color: newCustomer ? '#fff' : '',
              }}
            >
              New Customer
            </Button>
            <Button
              disableElevation
              startIcon={
                !newCustomer ? (
                  <BsCheckCircleFill size={16} />
                ) : (
                  <BsCircle size={16} />
                )
              }
              variant={!newCustomer ? 'contained' : 'outlined'}
              onClick={() => setNewCustomer(0)}
              sx={{
                color: !newCustomer ? '#fff' : '',
              }}
            >
              Exisiting Customer
            </Button>
          </Stack>

          {newCustomer === 1 && (
            <>
              <InputGroupTitle marginTop={3}>Customer Info</InputGroupTitle>

              <CustomerForm />
            </>
          )}

          <InputGroupTitle marginTop={!newCustomer ? 3 : 8}>
            Order Info
          </InputGroupTitle>

          <Stack px={3} spacing={4}>
            <Stack spacing={4} direction='row'>
              <Controller
                control={methods.control}
                name='customerId'
                defaultValue=''
                render={({ field, fieldState: { error } }) => {
                  return (
                    <LabelTextField label='Customer'>
                      <StyledOutlinedTextField
                        placeholder='Select Customer'
                        InputProps={{
                          readOnly: true,
                        }}
                        disabled={newCustomer === 1}
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
                name='eventType'
                defaultValue=''
                rules={{
                  required: { value: true, message: 'Event type is Required' },
                }}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <LabelTextField label='Event Type'>
                      <StyledOutlinedTextField
                        placeholder='Enter Event Type'
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
                        options={paidByBank.map((data, i) => data)}
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
            listMenu?.map((order, i) => {
              return (
                <OrderItem
                  key={order.id}
                  index={i}
                  onRemoveOrder={() => deleteListOrderHandler(order.id)}
                />
              );
            })
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

          <InputGroupTitle marginTop={8}>Final Invoice</InputGroupTitle>

          <Stack px={3}>
            {finalInvoice && finalInvoice.length > 0 ? (
              finalInvoice.map((invoice, i) => {
                return (
                  <FinalInvoiceForm
                    key={invoice.id}
                    index={i}
                    onRemoveFinalInvoice={() => {
                      removeFinalInvoiceHandler(invoice.id);
                    }}
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

          <Stack height={200} p={3} pt={10} position='relative'>
            <Button
              type='submit'
              variant='contained'
              disableElevation
              sx={{
                background: THEME_UTIL.goldGradientMain,
                color: '#fff',
                fontSize: 18,
                fontWeight: 'bold',
                p: 1.5,
                position: 'absolute',
                bottom: theme.spacing(3),
                right: theme.spacing(3),
                left: theme.spacing(3),
                borderRadius: '50vh',
              }}
            >
              Save
            </Button>
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
