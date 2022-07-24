import {
  DialogContent,
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
} from '@mui/material';
import ResponsiveDialog from 'components/CusDialog/ResponsiveDailog';
import { Add, Call, Note, UserSquare, Location, Calendar } from 'iconsax-react';
import React, { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import theme from 'theme/theme';
import { listTitle } from 'utils/expense-util';
import FormExpense, { IAddExpenseInput } from '../FormExpense';

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
    setValue(
      'expenseRowData',
      listTitle.map((data, i) => ({
        id: i,
        title: data.title,
        totalPrice: '',
        paidBy: '',
        other: '',
      }))
    );

    console.log(listTitle);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCloseDialogs = () => {
    setOpenDialogs(false);
    setValue(
      'expenseRowData',
      listTitle.map((data, i) => ({
        id: i,
        title: data.title,
        totalPrice: '',
        paidBy: '',
        other: '',
      }))
    );
  };
  const handleAddNewRowDataExpense = () => {
    if (listExpense && listExpense.length > 0) {
      setValue('expenseRowData', [
        ...listExpense,
        {
          id: new Date().toDateString(),
          title: '',
          totalPrice: '',
          paidBy: '',
          other: '',
        },
      ]);
    } else {
      setValue('expenseRowData', [
        {
          id: new Date().getTime(),
          title: '',
          totalPrice: '',
          paidBy: '',
          other: '',
        },
      ]);
    }
  };
  const deleteListExpense = (id: number | string) => {
    const tmp = listExpense.filter((el) => {
      return el.id !== id;
    });
    setValue('expenseRowData', tmp);
  };

  return (
    <>
      <ResponsiveDialog
        onCloseDialog={handleCloseDialogs}
        open={openDialogs}
        keepMounted
        PaperProps={{
          sx: { height: '100%' },
        }}
      >
        <FormProvider {...method}>
          <form
            onSubmit={handleSubmit((data) => {
              console.log(data);
            })}
          >
            {/* Header */}
            <AppBar
              sx={{
                position: 'sticky',
                bgcolor: (theme) => theme.palette.common.white,
                boxShadow: 0,
                borderRadius: 0,
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
              </Toolbar>
            </AppBar>
            {/* dailog content */}
            <DialogContent sx={{ p: 0 }}>
              <Grid container>
                <Grid item xs={12} md={4}>
                  <List disablePadding>
                    <ListItem>
                      <ListItemAvatar>
                        <Note size='24' color={theme.palette.primary.main} />
                      </ListItemAvatar>
                      <ListItemText primary='0018' secondary='Invoice ID' />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <UserSquare
                          size='24'
                          color={theme.palette.primary.main}
                        />
                      </ListItemAvatar>
                      <ListItemText primary='Team Test' secondary='Customer' />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Call size='24' color={theme.palette.primary.main} />
                      </ListItemAvatar>
                      <ListItemText
                        primary='0123456789'
                        secondary='Phone Number'
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Calendar
                          size='24'
                          color={theme.palette.primary.main}
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary='22.01.2022'
                        secondary='Event Party'
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Location
                          size='24'
                          color={theme.palette.primary.main}
                        />
                      </ListItemAvatar>
                      <ListItemText primary='Phnom Penh' secondary='Location' />
                    </ListItem>
                  </List>
                  <List disablePadding>
                    <ListItem
                      sx={{
                        bgcolor: (theme) => theme.palette.primary.main,
                      }}
                    >
                      <ListItemText
                        primary='$ 10,000'
                        secondary='Total income'
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
                        bgcolor: (theme) => theme.palette.error.main,
                      }}
                    >
                      <ListItemText
                        primary='$9,000'
                        secondary='Total Expense'
                        primaryTypographyProps={{
                          fontSize: 24,
                          fontWeight: 'medium',
                          letterSpacing: 0,
                          color: 'white',
                        }}
                      />
                    </ListItem>
                  </List>
                </Grid>
                <Grid item xs={12} md={8} sx={{ mt: [2, 2, 0] }}>
                  <Stack spacing={4} sx={{ mb: 4 }}>
                    <Stack
                      sx={{ overflow: 'auto', px: 2, height: '80vh' }}
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
                </Grid>
              </Grid>
            </DialogContent>
          </form>
        </FormProvider>
      </ResponsiveDialog>
    </>
  );
}
