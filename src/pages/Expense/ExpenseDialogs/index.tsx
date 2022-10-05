import {
  Stack,
  Typography,
  Button,
  alpha,
  Grid,
  List,
  ListItemAvatar,
  ListItem,
  ListItemText,
  AppBar,
  Toolbar,
  Paper,
} from '@mui/material';
import { Add, Call, Note, UserSquare, Location, Calendar } from 'iconsax-react';
import { CusBackDrop, CusLoading } from 'components/CusLoading';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { listTitle } from 'utils/expense-util';
import { useEffect, useState } from 'react';
import { useRequest } from 'ahooks';
import useResponsive from 'hook/useResponsive';
import theme from 'theme/theme';
import FormExpense from '../FormExpense';
import moment from 'moment';
import EXPENSE_API from 'api/expense';
import ErrorDialog from 'components/CusDialog/ErrorDialog';
import { separateComma } from 'utils/validate-util';

export interface IAddExpenseInput {
  expenseRowData: IExpenseRow[];
}
export interface IExpenseRow {
  id?: number;
  title: string;
  totalPrice: number;
  paidBy: string;
  other: string;
}

function ExpenseDialogs({
  onAddExpenseSuccess,
  orderDetail,
  onCloseDialogClick,
}: {
  orderDetail: IOrder.Order | undefined;
  onAddExpenseSuccess: () => void;
  onCloseDialogClick: () => void;
}) {
  // useRequests
  const addExpenseReq = useRequest(EXPENSE_API.addExpense, {
    manual: true,
    onSuccess: () => onAddExpenseSuccess(),
    onError: () => setAlertDialog(true),
  });

  // React-hooks-form
  const method = useForm<IAddExpenseInput>();
  const { handleSubmit, setValue } = method;
  const onSubmit: SubmitHandler<IAddExpenseInput> = (data) => {
    if (orderDetail?.id) {
      addExpenseReq.run(
        orderDetail.id,
        data.expenseRowData?.map((e) => {
          return {
            id: e?.id || undefined,
            expense_on: e.title || '',
            note: e.other || '',
            paidBy: e.paidBy || '',
            price: +e.totalPrice || 0,
          };
        })
      );
    }
  };

  // States
  const [loading, setLoading] = useState(false);
  const [listExpense, setListExpense] = useState<IExpenseRow[]>([]);
  const [alertDialog, setAlertDialog] = useState(false);
  const { isSmDown } = useResponsive();

  // All Total
  const totalIncome =
    orderDetail?.finalInvoices?.reduce((init, val) => init + val.price, 0) || 0;
  const totalExpense =
    orderDetail?.expenses?.reduce((init, val) => init + val.price, 0) || 0;
  const totalNetProfit = totalIncome - totalExpense;

  // useEffects
  useEffect(() => {
    setLoading(true);

    if (orderDetail?.expenses && orderDetail.expenses.length > 0) {
      const tmpList = orderDetail.expenses.map((e) => {
        return {
          id: e.id,
          title: e.expense_on,
          other: e.note,
          paidBy: e.paidBy,
          totalPrice: e.price,
        };
      });
      setListExpense(tmpList);
      setValue('expenseRowData', tmpList);
    } else {
      setListExpense(listTitle);
    }

    setTimeout(() => {
      setLoading(false);
    }, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Methods
  const formatInvoiceId = (value: string) => {
    const pad = '00000';
    return pad.substring(0, pad.length - value.length) + value;
  };

  const handleAddNewRowDataExpense = () => {
    setListExpense([
      ...listExpense,
      {
        id: undefined,
        title: '',
        totalPrice: 0,
        paidBy: '',
        other: '',
      },
    ]);
  };
  const deleteListExpense = (idx: number) => {
    const tmp = listExpense.filter((_, i) => {
      return i !== idx;
    });
    setListExpense(tmp);
    setValue('expenseRowData', tmp);
  };

  if (loading)
    return (
      <Stack height='100%' justifyContent='center' alignItems='center'>
        <CusLoading />
      </Stack>
    );

  return (
    <>
      {addExpenseReq.loading && <CusBackDrop open={true} />}

      <ErrorDialog
        open={alertDialog}
        onCloseDialog={() => setAlertDialog(false)}
        errorTitle='Internal Server Error'
        errorMessage={
          addExpenseReq.error?.message ||
          "Something went wrong! Couldn't add expense to this order."
        }
      />

      <FormProvider {...method}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container sx={{ height: ['auto', 'auto', '90vh'] }}>
            <Grid
              item
              xs={12}
              md={3}
              sx={{
                background: 'transparent',
                position: 'relative',
                height: ['auto', 'auto', '100%'],
              }}
            >
              <Paper
                sx={{ overflow: 'hidden', borderRadius: { xs: 0, md: 2 } }}
              >
                <List disablePadding>
                  <ListItem>
                    <ListItemAvatar>
                      <Note size='24' color={theme.palette.primary.main} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        orderDetail?.id
                          ? formatInvoiceId(orderDetail.id.toString())
                          : 'N/A'
                      }
                      secondary='Invoice ID'
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <UserSquare
                        size='24'
                        color={theme.palette.primary.main}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        orderDetail?.customer?.customer_name || 'No Customer'
                      }
                      secondary='Customer'
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Call size='24' color={theme.palette.primary.main} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        orderDetail?.customer?.contact_number ||
                        'No phone number'
                      }
                      secondary='Phone Number'
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Calendar size='24' color={theme.palette.primary.main} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        moment(orderDetail?.date).format('DD-MM-yyyy') || 'N/A'
                      }
                      secondary='Event Date'
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Location size='24' color={theme.palette.primary.main} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={orderDetail?.location || 'N/A'}
                      secondary='Location'
                    />
                  </ListItem>
                </List>
                <List disablePadding>
                  <ListItem
                    sx={{
                      bgcolor: (theme) => theme.palette.success.main,
                    }}
                  >
                    <ListItemText
                      primary={`$${separateComma(totalIncome.toFixed())}`}
                      secondary='Total Income'
                      primaryTypographyProps={{
                        fontSize: 24,
                        fontWeight: 'medium',
                        letterSpacing: 0,
                        color: 'white',
                      }}
                    />
                  </ListItem>
                  <ListItem
                    sx={{
                      bgcolor: (theme) => theme.palette.primary.main,
                    }}
                  >
                    <ListItemText
                      primary={`$${separateComma(totalExpense.toFixed())}`}
                      secondary='Total Expense'
                      primaryTypographyProps={{
                        fontSize: 24,
                        fontWeight: 'medium',
                        letterSpacing: 0,
                        color: 'white',
                      }}
                    />
                  </ListItem>
                  <ListItem
                    sx={{
                      bgcolor: (theme) => theme.palette.info.main,
                    }}
                  >
                    <ListItemText
                      primary={`$${separateComma(totalNetProfit.toFixed())}`}
                      secondary='Total Net Profit'
                      primaryTypographyProps={{
                        fontSize: 24,
                        fontWeight: 'medium',
                        letterSpacing: 0,
                        color: 'white',
                      }}
                    />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
            <Grid
              item
              xs={12}
              md={9}
              sx={{
                height: ['auto', 'auto', '100%'],
                px: { xs: 0, md: 2 },
                mt: { xs: 2, md: 0 },
              }}
            >
              <Paper
                sx={{
                  height: '100%',
                  px: 2,
                  overflow: 'auto',
                  borderRadius: { xs: 0, md: 2 },
                }}
              >
                <AppBar
                  sx={{
                    position: 'static',
                    bgcolor: (theme) => theme.palette.common.white,
                    boxShadow: 0,
                    borderRadius: 0,
                    borderTopLeftRadius: { xs: 0, md: 2 },
                    borderTopRightRadius: { xs: 0, md: 2 },
                    mb: 2,
                  }}
                >
                  <Toolbar>
                    <Stack
                      direction={'row'}
                      alignItems='center'
                      justifyContent={'space-between'}
                      sx={{ width: '100%' }}
                    >
                      <Typography variant='h6'>Add Expense</Typography>
                      <Stack
                        direction={'row'}
                        spacing={4}
                        sx={{ width: ['auto', '30%'] }}
                      >
                        <Button
                          variant='contained'
                          fullWidth
                          onClick={() => onCloseDialogClick()}
                          sx={{
                            borderRadius: 2,
                            textTransform: 'capitalize',
                            boxShadow: 1,
                            color: (theme) => theme.palette.common.white,
                            background: (theme) => theme.palette.error.main,
                            '&:hover': {
                              color: (theme) => theme.palette.common.white,
                              background: (theme) => theme.palette.error.main,
                            },
                          }}
                        >
                          Cancel
                        </Button>
                        <Button
                          type='submit'
                          variant='contained'
                          fullWidth
                          sx={{
                            borderRadius: 2,
                            textTransform: 'capitalize',
                            boxShadow: 1,
                            color: (theme) => theme.palette.common.white,
                            '&:hover': {
                              background: (theme) => theme.palette.primary.main,
                            },
                          }}
                        >
                          Save
                        </Button>
                      </Stack>
                    </Stack>
                  </Toolbar>
                </AppBar>
                {!isSmDown && (
                  <Stack direction={'row'}>
                    <Typography sx={{ flex: 1 }}>Title</Typography>
                    <Typography sx={{ flex: 1 }}>Total Price</Typography>
                    <Typography sx={{ flex: 1 }}>Paid By</Typography>
                    <Typography sx={{ flex: 1 }}>Other</Typography>
                    <div style={{ width: 40 }} />
                  </Stack>
                )}

                <Stack spacing={2} sx={{ py: 2 }}>
                  <>
                    {listExpense.map((data, i) => (
                      <FormExpense
                        defaultTitle={data.title}
                        key={i}
                        index={i}
                        onRemove={() => deleteListExpense(i)}
                      />
                    ))}
                  </>
                  <Button
                    variant='contained'
                    startIcon={<Add />}
                    fullWidth
                    onClick={handleAddNewRowDataExpense}
                    size='small'
                    sx={{
                      color: theme.palette.primary.main,
                      boxShadow: theme.shadows[0],
                      borderRadius: 2,
                      border: `1px dashed ${theme.palette.primary.main}`,
                      background: (theme) =>
                        alpha(theme.palette.primary.main, 0.2),
                      '&:hover': {
                        background: (theme) =>
                          alpha(theme.palette.primary.main, 0.2),
                        boxShadow: theme.shadows[0],
                      },
                    }}
                  >
                    Add New
                  </Button>
                </Stack>
              </Paper>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </>
  );
}

export default ExpenseDialogs;
