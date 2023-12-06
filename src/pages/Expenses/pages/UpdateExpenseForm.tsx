import {
  Avatar,
  Box,
  Button,
  Grid,
  MenuItem,
  Paper,
  Stack,
  Switch,
  Typography,
} from '@mui/material';
import SecondaryPageHeader from 'components/PageHeader/SecondaryPageHeader';
import ExpensePreviewTable from '../components/ExpensePreviewTable';
import LabelTextField from 'components/LabelTextField';
import UploadButton from 'components/UploadButton';
import { Controller, useForm } from 'react-hook-form';
import CusTextField from 'components/CusTextField';
import { LoadingButton } from '@mui/lab';

interface IUpdateExpenseInput {
  cate: string;
  product: string;
  supplier: string;
  payment: string;
  currency: string;
  paid: boolean;
  date: string;
  remark: string;
  total: number;
}
export default function UpdateExpenseForm() {
  /* Hooks */
  const { control, handleSubmit } = useForm<IUpdateExpenseInput>();

  // Methods
  const onSubmit = (data: IUpdateExpenseInput) => {
    console.log(data);
  };
  return (
    <>
      <SecondaryPageHeader title='Update Expense' />
      <Paper
        sx={{
          m: 3,
          mt: 0,
          p: 2,
        }}
        component={'form'}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Grid container sx={{ pb: 2 }}>
          <Grid item xs={12} sm={7}>
            <Stack direction={'column'} spacing={2}>
              <Stack direction={'row'} spacing={2}>
                <Controller
                  defaultValue='Other'
                  control={control}
                  name='cate'
                  rules={{
                    required: {
                      value: true,
                      message: 'Field is required',
                    },
                  }}
                  render={({ field, fieldState }) => {
                    return (
                      <LabelTextField label='Category'>
                        <CusTextField
                          select
                          SelectProps={{
                            displayEmpty: true,
                          }}
                          size='small'
                          helperText={fieldState.error?.message}
                          {...field}
                        >
                          <MenuItem value={'Other'}>Other</MenuItem>
                        </CusTextField>
                      </LabelTextField>
                    );
                  }}
                />
                <Controller
                  defaultValue='other'
                  control={control}
                  name='product'
                  rules={{
                    required: {
                      value: true,
                      message: 'Field is required',
                    },
                  }}
                  render={({ field, fieldState }) => {
                    return (
                      <LabelTextField label='Product'>
                        <CusTextField
                          select
                          SelectProps={{
                            displayEmpty: true,
                          }}
                          size='small'
                          helperText={fieldState.error?.message}
                          {...field}
                        >
                          <MenuItem value={'other'}>Other</MenuItem>
                        </CusTextField>
                      </LabelTextField>
                    );
                  }}
                />
              </Stack>
              <Stack direction={'row'} spacing={2}>
                <Controller
                  defaultValue=''
                  control={control}
                  name='supplier'
                  rules={{
                    required: {
                      value: true,
                      message: 'Field is required',
                    },
                  }}
                  render={({ field, fieldState }) => {
                    return (
                      <LabelTextField
                        label='Supplier'
                        size='small'
                        fieldState={fieldState}
                        {...field}
                      />
                    );
                  }}
                />
                <Controller
                  defaultValue='other'
                  control={control}
                  name='payment'
                  rules={{
                    required: {
                      value: true,
                      message: 'Field is required',
                    },
                  }}
                  render={({ field, fieldState }) => {
                    return (
                      <LabelTextField label='Payment Method'>
                        <CusTextField
                          select
                          SelectProps={{
                            displayEmpty: true,
                          }}
                          size='small'
                          helperText={fieldState.error?.message}
                          {...field}
                        >
                          <MenuItem value={'other'}>Other</MenuItem>
                        </CusTextField>
                      </LabelTextField>
                    );
                  }}
                />
              </Stack>
              <Stack direction={'row'} spacing={2}>
                <Box sx={{ width: '100%', position: 'relative' }}>
                  <Controller
                    defaultValue={0}
                    control={control}
                    name='total'
                    rules={{
                      required: {
                        value: true,
                        message: 'Field is required',
                      },
                    }}
                    render={({ field, fieldState }) => {
                      return (
                        <LabelTextField
                          label='Total'
                          size='small'
                          fieldState={fieldState}
                          {...field}
                        />
                      );
                    }}
                  />
                  <Stack
                    direction={'row'}
                    spacing={0.5}
                    sx={{ position: 'absolute', right: 0, top: 0 }}
                  >
                    <Typography variant='subtitle2' color={'text.secondary'}>
                      Paid
                    </Typography>
                    <Controller
                      defaultValue={false}
                      control={control}
                      name='paid'
                      render={({ field }) => {
                        return <Switch size='small' {...field} />;
                      }}
                    />
                  </Stack>
                </Box>

                <Controller
                  defaultValue='other'
                  control={control}
                  name='currency'
                  rules={{
                    required: {
                      value: true,
                      message: 'Field is required',
                    },
                  }}
                  render={({ field, fieldState }) => {
                    return (
                      <LabelTextField label='Currency'>
                        <CusTextField
                          select
                          SelectProps={{
                            displayEmpty: true,
                          }}
                          size='small'
                          helperText={fieldState.error?.message}
                          {...field}
                        >
                          <MenuItem value={'other'}>Other</MenuItem>
                        </CusTextField>
                      </LabelTextField>
                    );
                  }}
                />
              </Stack>
              <Stack direction={'row'} spacing={2}>
                <Controller
                  defaultValue={''}
                  control={control}
                  name='date'
                  rules={{
                    required: {
                      value: true,
                      message: 'Field is required',
                    },
                  }}
                  render={({ field, fieldState }) => {
                    return (
                      <LabelTextField
                        label='Date'
                        size='small'
                        fieldState={fieldState}
                        {...field}
                      />
                    );
                  }}
                />
                <Controller
                  defaultValue={''}
                  control={control}
                  name='remark'
                  rules={{
                    required: {
                      value: true,
                      message: 'Field is required',
                    },
                  }}
                  render={({ field, fieldState }) => {
                    return (
                      <LabelTextField
                        label='Remark'
                        size='small'
                        fieldState={fieldState}
                        {...field}
                      />
                    );
                  }}
                />
              </Stack>
              <Stack
                direction={'row'}
                justifyContent={'space-between'}
                spacing={2}
                py={2}
              >
                <Button variant='outlined' fullWidth>
                  Reset
                </Button>
                <LoadingButton
                  loading={false}
                  type='submit'
                  variant='contained'
                  fullWidth
                >
                  Create
                </LoadingButton>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs sm={5} sx={{ pl: 2, py: 2 }}>
            <Stack direction={'row'} spacing={2}>
              <UploadButton />
            </Stack>
            <Typography
              variant='body1'
              color={'text.primary'}
              fontWeight={'bold'}
            >
              Payment Images
            </Typography>
            <Stack
              direction={'row'}
              spacing={2}
              py={2}
              sx={{ overflow: 'auto' }}
            >
              {Array(5)
                .fill('')
                .map((_, i) => {
                  return (
                    <Avatar
                      key={i}
                      variant='rounded'
                      sx={{ height: 120, width: 120 }}
                    />
                  );
                })}
            </Stack>
          </Grid>
        </Grid>
        <ExpensePreviewTable />
      </Paper>
    </>
  );
}
