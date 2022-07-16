import {
  Dialog,
  DialogTitle,
  DialogContent,
  Stack,
  Typography,
  Divider,
  Button,
  Slide,
  alpha,
  Box,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { Add } from 'iconsax-react';
import React, { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import theme from 'theme/theme';
import FormExpense, { IAddExpenseInput } from '../FormExpense';
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />;
});
export default function ExpenseDialogs({
  openDialogs,
  setOpenDialogs,
}: {
  openDialogs: boolean;
  setOpenDialogs: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const method = useForm<IAddExpenseInput>();
  const { handleSubmit, watch, setValue } = method;
  const listExpense = watch('expenseRowData') || [];

  useEffect(() => {
    setValue('expenseRowData', [
      {
        id: 0,
        title: '',
        totalPrice: '',
        paidBy: '',
        other: '',
      },
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleCloseDialogs = () => {
    setOpenDialogs(false);
    setValue('expenseRowData', [
      {
        id: 0,
        title: '',
        totalPrice: '',
        paidBy: '',
        other: '',
      },
    ]);
  };
  const handleAddNewRowDataExpense = () => {
    if (listExpense && listExpense.length > 0) {
      setValue('expenseRowData', [
        ...listExpense,
        {
          id: new Date().getSeconds(),
          title: '',
          totalPrice: '',
          paidBy: '',
          other: '',
        },
      ]);
    } else {
      setValue('expenseRowData', [
        {
          id: new Date().getSeconds(),
          title: '',
          totalPrice: '',
          paidBy: '',
          other: '',
        },
      ]);
    }
  };
  const deleteListExpense = (id: number) => {
    const tmp = listExpense.filter((el) => {
      return el.id !== id;
    });
    setValue('expenseRowData', tmp);
  };

  return (
    <>
      <Dialog
        open={openDialogs}
        keepMounted
        onClose={handleCloseDialogs}
        fullWidth
        maxWidth={'md'}
        TransitionComponent={Transition}
      >
        <FormProvider {...method}>
          <form
            onSubmit={handleSubmit((data) => {
              console.log(data);
            })}
          >
            <DialogTitle sx={{ px: 0 }}>
              <Stack
                direction={'row'}
                alignItems='center'
                justifyContent={'space-between'}
                sx={{ px: 2 }}
              >
                <Typography variant='h6'>Add Expense</Typography>
                <Stack direction={'row'} spacing={4} sx={{ width: '30%' }}>
                  <Button
                    variant='contained'
                    fullWidth
                    onClick={handleCloseDialogs}
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
            </DialogTitle>
            <DialogContent sx={{ px: 0 }}>
              <Stack direction={'row'} spacing={3} sx={{ pb: 2, px: 2 }}>
                <Stack spacing={1}>
                  <Typography
                    sx={{ color: (theme) => theme.palette.text.secondary }}
                  >
                    Customer Name
                  </Typography>
                  <Typography
                    sx={{ color: (theme) => theme.palette.text.secondary }}
                  >
                    Event Name
                  </Typography>
                  <Typography
                    sx={{ color: (theme) => theme.palette.text.secondary }}
                  >
                    Total Tables
                  </Typography>
                  <Typography
                    sx={{ color: (theme) => theme.palette.text.secondary }}
                  >
                    Total Price
                  </Typography>
                </Stack>
                <Stack spacing={1}>
                  <Typography>Customer Name</Typography>
                  <Typography>Event Name</Typography>
                  <Typography>Total Tables</Typography>
                  <Typography>Total Price</Typography>
                </Stack>
              </Stack>
              <Divider />
              <Stack spacing={4} sx={{ mb: 4 }}>
                <Stack direction={'row'} spacing={2} sx={{ mt: 2, px: 2 }}>
                  <Typography variant='h6'>Total Income :</Typography>
                  <Typography
                    variant='h5'
                    fontWeight={theme.typography.fontWeightBold}
                  >
                    8,000$
                  </Typography>
                </Stack>
                <Stack
                  sx={{ overflow: 'auto', height: 300, px: 2 }}
                  spacing={4}
                >
                  {listExpense.map((data, i) => (
                    <FormExpense
                      index={i}
                      key={data.id}
                      onRemove={() => deleteListExpense(data.id)}
                    />
                  ))}
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
              </Stack>
              <Divider />
              <Stack
                direction={'row'}
                spacing={2}
                justifyContent='flex-end'
                sx={{ mt: 2, px: 2 }}
              >
                <Typography variant='h6'>Total Income :</Typography>
                <Typography
                  variant='h6'
                  fontWeight={theme.typography.fontWeightBold}
                >
                  8,000$
                </Typography>
              </Stack>
            </DialogContent>
          </form>
        </FormProvider>
      </Dialog>
    </>
  );
}
