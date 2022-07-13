import {
  Dialog,
  DialogTitle,
  DialogContent,
  Stack,
  Typography,
  Divider,
  Button,
  Slide,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import theme from 'theme/theme';
import { IAddExpenseInput } from '..';
import FormExpense from '../FormExpense';
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
  handleCloseDialogs,
}: {
  openDialogs: boolean;
  handleCloseDialogs: () => void;
}) {
  const method = useForm<IAddExpenseInput>();
  const { handleSubmit } = method;
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
            <DialogTitle>
              <Stack
                direction={'row'}
                alignItems='center'
                justifyContent={'space-between'}
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
            <DialogContent>
              <Stack direction={'row'} spacing={3} sx={{ pb: 2 }}>
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
                <Stack direction={'row'} spacing={2} sx={{ mt: 2 }}>
                  <Typography variant='h6'>Total Income :</Typography>
                  <Typography
                    variant='h5'
                    fontWeight={theme.typography.fontWeightBold}
                  >
                    8,000$
                  </Typography>
                </Stack>
                <FormExpense />
              </Stack>
              <Divider sx={{ pt: 10 }} />
              <Stack
                direction={'row'}
                spacing={2}
                justifyContent='flex-end'
                sx={{ mt: 2 }}
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
