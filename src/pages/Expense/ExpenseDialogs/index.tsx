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
} from '@mui/material';
import ResponsiveDialog from 'components/CusDialog/ResponsiveDailog';
import useResponsive from 'hook/useResponsive';
import { Add, Call, Note, UserSquare, Location, Calendar } from 'iconsax-react';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import theme from 'theme/theme';
import { listTitle } from 'utils/expense-util';
import FormExpense, { IAddExpenseInput, IExpenseRow } from '../FormExpense';
export default function ExpenseDialogs({
  openDialogs,
  setOpenDialogs,
}: {
  openDialogs: boolean;
  setOpenDialogs: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const method = useForm<IAddExpenseInput>();
  const { handleSubmit, setValue } = method;
  const [listExpense, setListExpense] = useState<IExpenseRow[]>([]);

  useEffect(() => {
    setListExpense(
      listTitle.map((data, i) => {
        setValue(`expenseRowData.${i}.title`, data);
        return {
          id: i,
          title: '',
          paidBy: '',
          other: '',
          totalPrice: '',
        };
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCloseDialogs = () => {
    setOpenDialogs(false);
  };
  const handleAddNewRowDataExpense = () => {
    if (listExpense && listExpense.length > 0) {
      setListExpense([
        ...listExpense,
        {
          id: new Date().toString(),
          title: '',
          totalPrice: '',
          paidBy: '',
          other: '',
        },
      ]);
    } else {
      setListExpense([
        {
          id: new Date().toString(),
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
    setListExpense(tmp);
  };
  const { isSmDown } = useResponsive();
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
            <Grid container>
              <Grid
                item
                xs={12}
                md={4}
                sx={{
                  position: 'relative',
                  height: ['auto', 'auto', 'calc(90vh - 64px)'],
                }}
              >
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
                      <Calendar size='24' color={theme.palette.primary.main} />
                    </ListItemAvatar>
                    <ListItemText
                      primary='22.01.2022'
                      secondary='Event Party'
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Location size='24' color={theme.palette.primary.main} />
                    </ListItemAvatar>
                    <ListItemText primary='Phnom Penh' secondary='Location' />
                  </ListItem>
                </List>
                <List
                  disablePadding
                  sx={{
                    position: ['inherit', 'inherit', 'absolute'],
                    bottom: 0,
                    right: 0,
                    left: 0,
                  }}
                >
                  <ListItem
                    sx={{
                      bgcolor: (theme) => theme.palette.success.main,
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
                      bgcolor: (theme) => theme.palette.primary.main,
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
              <Grid
                item
                xs={12}
                md={8}
                sx={{
                  height: ['auto', 'auto', 'calc(90vh - 64px)'],
                  px: 2,
                  overflow: 'auto',
                  mt: [2, 2, 0],
                }}
              >
                {!isSmDown && (
                  <Stack direction={'row'}>
                    <Typography sx={{ flex: 1 }}>Title</Typography>
                    <Typography sx={{ flex: 1 }}>Total</Typography>
                    <Typography sx={{ flex: 1 }}>Paid</Typography>
                    <Typography sx={{ flex: 1 }}>Other</Typography>
                    <div style={{ width: 40 }} />
                  </Stack>
                )}

                <Stack spacing={2} sx={{ py: 2 }}>
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
              </Grid>
            </Grid>
          </form>
        </FormProvider>
      </ResponsiveDialog>
    </>
  );
}
